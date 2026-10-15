import { useEffect, useRef, useState } from "react";
import canopy from "../assets/forest/01-canopy-aerial.mp4";
import betweenTrees from "../assets/forest/02-between-trees.mp4";
import forestGlide from "../assets/forest/03-forest-glide.mp4";
import flower from "../assets/forest/04-flower.mp4";
import creek from "../assets/forest/05-jungle-creek.mp4";
import stream from "../assets/forest/06-stream-rocks.mp4";
import kingfisherBranch from "../assets/forest/kingfisher-branch.mp4";
import kingfisherPerch from "../assets/forest/kingfisher-perch.mp4";

const clips = [
  { src: canopy, ms: 6500 },
  { src: betweenTrees, ms: 6000 },
  { src: kingfisherBranch, ms: 9000, transform: "scale(-1.15, 1.15)", origin: "53% 50%" },
  { src: forestGlide, ms: 6000 },
  { src: flower, ms: 5500 },
  { src: creek, ms: 7000 },
  { src: kingfisherPerch, ms: 9000, transform: "scale(1.12)", origin: "0% 50%" },
  { src: stream, ms: 6000 },
];
const FADE_MS = 1200;

export default function ForestVideoBackground() {
  const videos = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const current = videos.current[active];
    if (current) {
      current.currentTime = 0;
      current.play().catch(() => {});
    }

    const next = videos.current[(active + 1) % clips.length];
    if (next) next.preload = "auto";

    const pauseOthers = setTimeout(() => {
      videos.current.forEach((video, index) => {
        if (video && index !== active) video.pause();
      });
    }, FADE_MS);
    const advance = setTimeout(
      () => setActive((index) => (index + 1) % clips.length),
      clips[active].ms,
    );

    return () => {
      clearTimeout(pauseOthers);
      clearTimeout(advance);
    };
  }, [active]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {clips.map(({ src, transform = "scale(1.05)", origin = "50% 50%" }, index) => (
        <video
          key={src}
          ref={(node) => {
            videos.current[index] = node;
          }}
          src={src}
          muted
          loop
          playsInline
          preload={index === 0 ? "auto" : "none"}
          className="absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out"
          style={{
            transform,
            transformOrigin: origin,
            opacity: index === active ? 1 : 0,
            transitionDuration: `${FADE_MS}ms`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,20,13,0.5)_0%,rgba(5,20,13,0.25)_75%),linear-gradient(180deg,rgba(7,27,19,0.75)_0%,rgba(7,27,19,0)_22%,rgba(7,27,19,0)_78%,rgba(7,27,19,0.85)_100%)]" />
    </div>
  );
}
