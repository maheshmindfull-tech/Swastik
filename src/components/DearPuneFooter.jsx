import { Link } from "react-router-dom";
import { logo } from "../assets/images";

export default function DearPuneFooter() {
  return (
    <footer className="border-t border-[#eadcc4] bg-[#10281c] px-5 py-10 text-[#d5ddd0] sm:px-[5vw] sm:py-12 xl:px-[76px]">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" aria-label="Swastik Realty Group" className="inline-block">
          <img src={logo} alt="Swastik Realty Group" className="h-14 w-auto sm:h-16" />
        </Link>
        <p className="poster-serif text-[clamp(28px,3.1vw,42px)] font-normal italic leading-none tracking-[-0.02em] text-[#e6d3a1]">
          With love, to a city called Pune.
        </p>
      </div>
      <div className="my-8 h-px bg-[#f4ead7]/25" />
      <div className="ui flex flex-col gap-3 text-[12px] leading-relaxed text-[#c5d0c2] min-[851px]:flex-row min-[851px]:items-center min-[851px]:justify-between">
        <p className="shrink-0">© 2026 Swastik Realty Group. All rights reserved.</p>
        <p className="flex flex-col gap-1 min-[851px]:flex-row min-[851px]:gap-4">
          <span className="text-[#e7efe4]">Codename: The Hidden Forest</span>
          <span>Project details have not been disclosed.</span>
        </p>
        <p className="shrink-0">
          <Link to="/privacy-policy" className="underline underline-offset-4 hover:text-[#f4ead7]">
            Privacy note
          </Link>
        </p>
      </div>
    </footer>
  );
}
