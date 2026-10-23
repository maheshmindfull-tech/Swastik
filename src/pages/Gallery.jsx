import { useRef, useState } from "react";
import { galleryAlbums, galleryYears } from "../data/gallery";
import useSeo from "../hooks/useSeo";
import { gallerySeo } from "../seo";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [year, setYear] = useState("2023");
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState({ open: false, items: [], index: 0 });
  const playing = useRef(null);

  useSeo(gallerySeo);

  const show = (items, index) => setPreview({ open: true, items, index });

  return (
    <div className="min-h-screen bg-[#f1ece6]">
      <div className="mt-12 flex flex-col gap-4 bg-[#6A2915] px-6 py-14 text-white sm:mt-10 md:mt-8 md:px-20 lg:mt-10 xl:mt-12">
        <h1 className="text-4xl">
          <span className="font-semibold">Gallery</span>
        </h1>
        <div className="h-1 w-60 rounded-full bg-[#D9D9D9]" />
        <p>Discover our portfolio of exceptional properties that redefine luxury living</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-4 sm:justify-end sm:gap-4 sm:px-8">
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex items-center gap-2 rounded-full bg-[#260F01] px-5 py-2 text-xs text-white sm:text-sm"
          >
            {year}
            <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open && (
            <div className="absolute top-12 left-0 z-10 min-w-[260px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              {galleryYears.map((item, index) => (
                <div
                  key={item}
                  onClick={() => {
                    setYear(item);
                    setOpen(false);
                  }}
                  className={`cursor-pointer px-6 py-3 text-center text-sm font-medium hover:bg-gray-50 ${year === item ? "font-semibold text-[#260F01]" : "text-black"} ${index !== galleryYears.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        {["image", "video"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFilter(filter === type ? "all" : type)}
            className={`rounded-full border px-5 py-2 text-xs transition sm:text-sm ${filter === type ? "border-[#260F01] bg-[#260F01] text-white" : "border-gray-400 bg-transparent text-black"}`}
          >
            {type === "image" ? "Photo" : "Video"}
          </button>
        ))}
      </div>

      <div className="space-y-10 px-8 pb-10">
        {galleryAlbums
          .filter((album) => album.year === year)
          .map((album) => {
            const items = filter === "all" ? album.items : album.items.filter((item) => item.type === filter);
            if (!items.length) return null;
            return (
              <div key={`${album.year}-${album.date}-${album.subtitle}`}>
                <h2 className="mb-4 flex items-baseline gap-2 text-lg font-semibold text-[#050505]">
                  {album.date}
                  {album.subtitle && <span className="text-xs font-normal font-semibold text-[#050505]">({album.subtitle})</span>}
                </h2>
                <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((item, index) =>
                    item.type === "video" ? (
                      <div key={item.src} className="relative">
                        <video
                          src={item.src}
                          controls
                          preload="auto"
                          onLoadedData={(event) => {
                            event.target.currentTime = 0.5;
                          }}
                          onPlay={(event) => {
                            if (playing.current && playing.current !== event.target) playing.current.pause();
                            playing.current = event.target;
                          }}
                          className="h-48 w-full rounded-lg object-cover sm:h-56"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const videos = items.filter((entry) => entry.type === "video");
                            show(videos, videos.indexOf(item));
                          }}
                          className="absolute top-2 right-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white hover:bg-black/80"
                        >
                          ⛶  Full
                        </button>
                      </div>
                    ) : (
                      <img
                        key={`${item.src}-${index}`}
                        src={item.src}
                        loading="lazy"
                        alt="gallery"
                        className="w-full cursor-pointer rounded-lg bg-black/5 object-contain"
                        onClick={() => {
                          const photos = items.filter((entry) => entry.type === "image");
                          show(photos, photos.indexOf(item));
                        }}
                      />
                    ),
                  )}
                </div>
              </div>
            );
          })}
      </div>

      {preview.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          {preview.items[preview.index]?.type === "image" ? (
            <img src={preview.items[preview.index].src} alt="preview" className="h-screen w-screen object-contain" />
          ) : (
            <video key={preview.index} src={preview.items[preview.index]?.src} controls autoPlay className="h-screen w-screen object-contain" />
          )}
          <button
            type="button"
            onClick={() => setPreview((current) => ({ ...current, index: current.index - 1 }))}
            className={`absolute left-4 rounded-full bg-black/40 px-3 py-1 text-5xl text-white hover:bg-black/70 ${preview.index === 0 ? "invisible" : ""}`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setPreview((current) => ({ ...current, index: current.index + 1 }))}
            className={`absolute right-4 rounded-full bg-black/40 px-3 py-1 text-5xl text-white hover:bg-black/70 ${preview.index === preview.items.length - 1 ? "invisible" : ""}`}
          >
            ›
          </button>
          <button
            type="button"
            onClick={() => setPreview({ open: false, items: [], index: 0 })}
            className="absolute top-4 right-4 rounded-full bg-black/40 px-3 py-1 text-2xl text-white hover:bg-black/70"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
