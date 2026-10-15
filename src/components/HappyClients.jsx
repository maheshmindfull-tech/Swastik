import { useEffect, useRef, useState } from "react";
import { watermark } from "../assets/images";
import { clientVideos } from "../data";

function youtubeId(link) {
  return link.match(/shorts\/([\w-]+)/)[1];
}

function ClientCard({ videoLink, thumb, isPlaying, onPlay }) {
  const id = youtubeId(videoLink);

  return (
    <div
      className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-[9/16] w-[260px] md:w-[300px] flex-shrink-0 cursor-pointer"
      onClick={onPlay}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Client video"
        />
      ) : (
        <img alt="Video Thumbnail" className="w-full h-full object-cover" src={thumb} />
      )}
    </div>
  );
}

export default function HappyClients() {
  const [playing, setPlaying] = useState(null);
  const scroller = useRef(null);
  const frame = useRef(null);
  const offset = useRef(0);

  useEffect(() => {
    const node = scroller.current;
    if (!node || playing !== null) {
      cancelAnimationFrame(frame.current);
      return;
    }

    const tick = () => {
      offset.current += 0.5;
      if (offset.current >= node.scrollWidth - node.clientWidth) {
        offset.current = 0;
      }
      node.scrollLeft = offset.current;
      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [playing]);

  useEffect(() => {
    const reset = () => setPlaying(null);
    window.addEventListener("scroll", reset, { passive: true });
    return () => window.removeEventListener("scroll", reset);
  }, []);

  useEffect(() => {
    const onHide = () => {
      if (document.hidden) setPlaying(null);
    };
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, []);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-[#7B2D1E] flex items-center">
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[400px] md:w-[600px] opacity-10 pointer-events-none select-none z-0">
        <img alt="" className="w-full h-full object-contain" src={watermark} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-8 lg:gap-12 z-10 w-full">
        <div className="w-full lg:w-[30%] text-left">
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl leading-tight mb-3 md:mb-4 font-light">
              Happy <span className="font-bold">Clients</span>
            </h2>
            <p className="text-xs md:text-lg text-white/80 leading-relaxed mb-6 md:mb-8 max-w-xs md:max-w-md">
              A growing community of families who trust us to turn their dreams
              into lasting homes.
            </p>
            <div className="rounded-full bg-gradient-to-r from-[#CB4A26] to-[#019846] h-[4px] md:h-[5px] w-[180px] md:w-[200px]" />
          </div>
        </div>
        <div className="w-full lg:w-[70%] overflow-hidden mt-4 lg:mt-0">
          <div
            ref={scroller}
            className="flex flex-row gap-6 md:gap-10 overflow-x-auto pb-8 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {clientVideos.map((video) => (
              <ClientCard
                key={video.id}
                {...video}
                isPlaying={playing === video.id}
                onPlay={() => setPlaying(video.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
