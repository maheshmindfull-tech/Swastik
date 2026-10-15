import { useState } from "react";
import collage from "../assets/hidden-forest-collage.jpg";
import HiddenForestPoster from "../components/HiddenForestPoster";
import ForestVideoBackground from "../components/ForestVideoBackground";
import useSeo from "../hooks/useSeo";
import forestImage from "../assets/hidden-forest.jpg";

const seo = {
  title: "The Hidden Forest | Upcoming Residential Project in Pune",
  description:
    "The Hidden Forest is an upcoming residential project in Pune offering nature-inspired living — premium residences and homes surrounded by greenery.",
  keywords: [
    "Residential project in Pune",
    "Nature-inspired living",
    "Upcoming residential project in Pune",
    "Premium residences in Pune",
    "Homes surrounded by greenery",
  ],
  image: forestImage,
  path: "/dear-pune",
};

export default function DearPune() {
  useSeo(seo);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setMessage("Thank you for registering your interest — we'll be in touch soon.");
    setEmail("");
  };

  return (
    <main className="dear-pune relative overflow-hidden bg-[#071b13] text-[#f4ead7]">
      <div className="pt-[84px]">
        <HiddenForestPoster />
      </div>

      <section className="grid items-center gap-8 bg-[#f8f0df] px-5 py-10 text-[#14251b] sm:gap-[clamp(28px,4vw,64px)] sm:px-[5vw] sm:py-12 min-[851px]:min-h-[calc(100svh-84px)] min-[851px]:grid-cols-[1.05fr_0.95fr] xl:px-[76px] short:py-6">
        <div className="max-w-[600px] min-[851px]:justify-self-end">
          <p className="ui mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#91452d] short:mb-2">
            Codename:
          </p>
          <h2 className="mb-2 text-[clamp(36px,4.2vw,60px)] font-normal leading-[1.02] tracking-[-0.04em] short:text-[clamp(36px,3.8vw,52px)]">
            The Hidden <em className="text-[#91452d]">Forest</em>
          </h2>
          <p className="mb-5 text-[clamp(18px,1.7vw,24px)] leading-[1.3] text-[#3c4a3f] short:mb-4 short:text-[clamp(18px,1.55vw,22px)]">
            A New Perspective on Nature-Inspired Living
          </p>
          <blockquote className="relative mb-4 max-w-[540px] overflow-hidden border-l-[3px] border-[#91452d] bg-[linear-gradient(110deg,#efe2c8_0%,#f5ead6_60%,rgba(245,234,214,0)_100%)] py-4 pl-4 pr-6 shadow-[0_8px_22px_rgba(80,55,25,0.08)] sm:pl-5 short:py-3">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-1 -top-2 select-none text-[56px] leading-none text-[#91452d]/10"
            >
              ❧
            </span>
            <p className="relative text-[clamp(16px,1.45vw,20px)] italic leading-[1.5] text-[#2a3a2e] short:text-[clamp(16px,1.35vw,19px)]">
              Imagine waking up to{" "}
              <span className="bg-[linear-gradient(transparent_62%,rgba(201,166,106,0.45)_62%)] text-[#7d3a24]">
                lush greenery
              </span>
              , stepping into open spaces, and finding a little more{" "}
              <span className="bg-[linear-gradient(transparent_62%,rgba(201,166,106,0.45)_62%)] text-[#7d3a24]">
                calm in the everyday.
              </span>
            </p>
          </blockquote>
          <div className="ui max-w-[560px] text-[15px] leading-[1.7] text-[#5b5b4f] [&>p]:my-[10px] short:text-[14px] short:leading-[1.6] short:[&>p]:my-2 tiny:text-[13.5px] tiny:[&>p]:my-[6px]">
            <p>
              Imagine a life where nature is closer, the surroundings feel more
              open, and every day offers a refreshing change of pace.
            </p>
            <p className="font-bold text-[#14251b]">
              Introducing a new nature-inspired residential experience in Pune.
            </p>
            <p>
              Thoughtfully envisioned for those who seek more than just a home,
              this upcoming residential development brings together the
              aspiration of contemporary living and the beauty of being closer
              to nature.
            </p>
            <p>
              A place to slow down, breathe deeper, and experience a different
              side of everyday living.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-[520px] max-[850px]:mx-auto short:max-w-[470px]">
          <div className="aspect-[665/437] overflow-hidden border-8 border-[#e7d6b8] bg-[#f6efe1] shadow-[0_18px_42px_rgba(42,30,15,0.2)]">
            <img
              src={collage}
              alt="The Hidden Forest, an upcoming residential project in Pune: a collage of a kingfisher, forest trails and homes surrounded by greenery"
              className="block h-full w-full object-cover object-[3%_center]"
            />
          </div>
          <p className="ui mt-3 text-[9px] uppercase tracking-[0.2em] text-[#8b553b]">
            The clues were always there. The full story is still to come.
          </p>
        </div>
      </section>

      <section
        id="first-to-know"
        className="relative isolate flex min-h-[560px] flex-col items-center justify-center overflow-hidden bg-[#071b13] px-[18px] py-[72px] text-center sm:min-h-[640px] sm:px-[22px] sm:py-[96px]"
      >
        <ForestVideoBackground />
        <p className="ui mb-[18px] text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2c68e]">
          The Hidden Forest&nbsp; |&nbsp; Be the first to know
        </p>
        <h2 className="mx-auto mb-4 max-w-[720px] text-[clamp(38px,4.5vw,64px)] font-normal leading-[0.98] tracking-[-0.045em] text-[#f4ead7]">
          A new way of living
          <br />
          <em className="text-[#e6a97c]">is taking shape.</em>
        </h2>
        <p className="ui mx-auto mb-[30px] max-w-[520px] text-[13px] leading-[1.8] text-[#e4e6da]">
          Discover an upcoming residential project envisioned for those who
          seek a more enriching way to live.
        </p>
        <form
          onSubmit={onSubmit}
          className="mx-auto flex w-full max-w-[590px] flex-col gap-[10px] sm:flex-row"
        >
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            aria-label="Email address"
            className="ui min-w-0 flex-1 border border-[#a68b5b] bg-[#f4ead7] px-[17px] py-4 text-[13px] text-[#1a2b20] outline-none"
          />
          <button
            type="submit"
            className="ui min-h-12 border border-[#b86d4d] bg-[#91452d] px-5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#fff3df] transition hover:bg-[#a85336]"
          >
            Register your interest&nbsp; →
          </button>
        </form>
        <p className="ui mt-3 min-h-[18px] text-[12px] text-[#e2c68e]" role="status">
          {message}
        </p>
        <p className="ui mt-[14px] text-[11px] text-[#cfd5c6]">
          Campaign updates only. You can opt out anytime.
        </p>
      </section>

      <footer className="ui flex flex-wrap justify-between gap-[15px] border-t border-[#dec48f]/20 px-5 py-[22px] text-[9px] uppercase tracking-[0.16em] text-[#9eaa99] sm:px-[5vw] xl:px-[76px]">
        <span>Dear Pune · The Hidden Forest</span>
        <span>A new chapter is coming</span>
      </footer>
    </main>
  );
}
