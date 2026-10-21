import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import letterImage from "../assets/hidden-forest-letter.webp";
import DearPuneFooter from "../components/DearPuneFooter";
import useSeo from "../hooks/useSeo";

const seo = {
  title: "Thank You | The Hidden Forest — Dear Pune",
  description:
    "Thank you for joining the next chapter of Dear Pune — The Hidden Forest, by Swastik Realty Group.",
  image: letterImage,
  path: "/dear-pune/thank-you",
  robots: "noindex, nofollow",
};

export default function HiddenForestThankYou() {
  useSeo(seo);
  const location = useLocation();
  const submitted = location.state?.submitted === true;
  const source = location.state?.source || "dear-pune";

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "hf_thank_you_view",
      campaign: "the_hidden_forest",
      phase: "3",
      source,
    });
    if (!submitted) return;

    const storageKey = "hf_lead_tracked_current_session";
    let fire = true;
    try {
      if (sessionStorage.getItem(storageKey)) fire = false;
      else sessionStorage.setItem(storageKey, "1");
    } catch {
      fire = true;
    }
    if (fire) {
      window.dataLayer.push({
        event: "hf_lead_confirmed",
        campaign: "the_hidden_forest",
        phase: "3",
        lead_source: source,
      });
    }
  }, [source, submitted]);

  return (
    <main className="dear-pune bg-[#f6efe2] pt-[var(--site-header,63px)] text-[#30291f] md:pt-[var(--site-header,84px)]">
      <section className="-mt-px grid min-h-[calc(100svh-var(--site-header,63px))] grid-rows-[minmax(280px,46vh)_auto] md:h-[calc(100svh-var(--site-header,84px))] md:min-h-[560px] md:grid-cols-[minmax(340px,0.9fr)_minmax(0,1.1fr)] md:grid-rows-1">
        <div className="order-2 flex flex-col justify-center px-5 py-8 sm:px-10 md:order-1 md:px-[4.5vw] md:py-10">
          <p className="ui flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#86704f]">
            <span className="h-px w-8 bg-[#a89065]" />
            The next letter
          </p>
          <p className="poster-serif mt-[1.4vh] text-[clamp(22px,3.1vh,36px)] italic leading-none text-[#6d4d34]">
            Dear Pune,
          </p>
          <h1 className="poster-serif mt-[0.6vh] max-w-[640px] text-[clamp(30px,5.2vh,64px)] font-normal leading-[0.98] tracking-[-0.03em] text-[#10271e]">
            Your name is on
            <br />
            the next letter.
          </h1>
          <div className="mt-[1.4vh] flex items-center gap-3 text-[#a77f4a]">
            <span className="h-px w-10 bg-[#c5a36c]" />
            <svg viewBox="0 0 40 40" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M20 35C10 27 8 18 12 8c9 2 13 8 8 27Zm3-4c0-12 6-18 15-19 1 10-3 17-15 19ZM16 30C7 30 3 26 2 18c9-2 14 2 14 12Z" />
            </svg>
          </div>
          <p className="mt-[1.4vh] max-w-[520px] text-[clamp(13px,1.7vh,17px)] leading-[1.45] text-[#5c5144]">
            <strong className="font-semibold text-[#253d2c]">Thank you for being part of our story.</strong>{" "}
            The name was your first clue:{" "}
            <strong className="font-semibold text-[#253d2c]">The Hidden Forest.</strong> The story is only beginning.
          </p>
          <div className="mt-[2vh] flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              to="/dear-pune"
              className="ui inline-flex h-11 items-center justify-center gap-3 bg-[#19392a] px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#27533d]"
            >
              Return to Dear Pune
              <span aria-hidden="true">→</span>
            </Link>
            <p className="text-[12px] text-[#847460]">Until then, stay curious.</p>
          </div>
        </div>

        <div className="relative order-1 min-h-[280px] md:order-2 md:min-h-0">
          <img
            src={letterImage}
            alt="A sealed letter from The Hidden Forest, with a kingfisher beside it"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <p className="poster-serif absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102018]/75 to-transparent px-6 pb-6 pt-16 text-center text-[clamp(20px,2vw,32px)] italic leading-snug text-[#f7f1e4] sm:pb-8">
            Some stories are worth waiting for.
          </p>
        </div>
      </section>
      <DearPuneFooter />
    </main>
  );
}
