import { useEffect, useState } from "react";
import { aboutImages, awards, leaders, milestones, teamSlides } from "../data/about";
import useSeo from "../hooks/useSeo";

export default function About() {
  useSeo({
    title: "About Us | Swastik Realty Group",
    description:
      "Building homes with purpose, integrity, and long-term value. Learn about Swastik Realty Group, our vision, milestones, and leadership.",
    path: "/about",
  });

  return (
    <>
      <Hero />
      <WhoWeAre />
      <Vision />
      <Milestones />
      <Visionaries />
      <Team />
      <Awards />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img src={aboutImages.hero} alt="About" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex items-center">
        <div className="px-6 text-white sm:px-10 md:px-16 lg:px-28">
          <h2 className="text-3xl sm:text-4xl">About Us</h2>
          <div className="mt-5 h-[5px] w-60 rounded-full bg-gradient-to-r from-green-500 to-red-400" />
          <h1 className="mt-10 max-w-3xl text-3xl font-semibold leading-tight sm:mt-12 sm:text-3xl md:mt-5 md:text-6xl lg:text-5xl">
            Building homes with
            <br />
            purpose, integrity, and
            <br />
            long-term value.
          </h1>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <div className="bg-[#FFFCF5] text-[#260F01]">
      <div className="flex flex-col gap-10 px-4 py-12 sm:px-8 sm:py-16 lg:flex-row lg:gap-20 lg:px-14">
        <div className="w-full shrink-0 lg:w-[40%]">
          <div className="mb-5 w-fit bg-[#260F01] px-4 py-1.5 text-xs font-semibold tracking-widest text-white">
            WHO WE ARE
          </div>
          <h1 className="mb-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Building <span className="font-bold">Dreams,</span>
            <br />
            Creating <span className="font-bold">Legacies</span>
          </h1>
          <div
            className="h-[5px] w-32 rounded-full sm:w-70"
            style={{ background: "linear-gradient(to right, #CB4A26, #019846)" }}
          />
        </div>
        <div className="w-full space-y-3 text-[14px] leading-relaxed text-[#374151] lg:w-[60%]">
          <span className="font-bold">Swastik Realty Group</span> is built on a simple yet powerful
          belief—real estate is not just about structures, but about stories.
          <br />
          For over 26 years, we have delivered thoughtfully designed residential and commercial
          spaces across Pune, guided by trust, transparency, and togetherness. What makes Swastik
          different is not just what we build, but how and why we build.
          <br />
          Every Swastik project reflects the lives, aspirations, and emotions of the people who
          inhabit it. From families finding comfort to businesses finding growth, our developments
          are designed to support meaningful living and long-term value.
          <p>
            We don't just shape skylines—we touch lives, nurture relationships, and turn aspirations
            into enduring legacies.
          </p>
        </div>
      </div>
      <div className="mx-4 overflow-hidden rounded-2xl sm:mx-8 lg:mx-14">
        <img src={aboutImages.weAre} alt="we are" className="h-auto w-full object-cover" />
      </div>
    </div>
  );
}

function VisionCard({ icon, iconAlt, title, barClass, children }) {
  return (
    <div className="flex flex-col rounded-3xl bg-[#FFFFFF82] p-14 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="mb-8 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#92400E]">
        <img src={icon} alt={iconAlt} className="h-7 w-7 object-contain" />
      </div>
      <h3 className="text-lg font-bold text-[#1F2937]">{title}</h3>
      <span className={`mt-1 mb-5 block h-[2.5px] rounded-full bg-gradient-to-r from-[#CB4A26] to-[#019846] ${barClass}`} />
      {children}
    </div>
  );
}

function Vision() {
  return (
    <section className="w-full px-6 py-14 sm:px-10 lg:px-24 lg:py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#2B1A0E] sm:text-4xl">Vision & Mission</h2>
        <span className="mt-2 block h-[5px] w-50 rounded-full bg-gradient-to-r from-[#CB4A26] to-[#019846]" />
        <p className="mt-3 text-sm text-[#6B5A4B] sm:text-base">The belief that guides our long-term thinking.</p>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        <VisionCard icon={aboutImages.eye} iconAlt="Vision" title="Our Vision" barClass="w-24">
          <p className="text-sm leading-relaxed text-[#4B5563]">
            To redefine urban living and business spaces in Pune through innovation, thoughtful
            design, and forward-thinking strategies—creating developments that elevate lifestyles
            and empower communities.
          </p>
        </VisionCard>
        <div className="flex flex-col rounded-3xl bg-[#FFFFFF82] p-14 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="mb-8 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#8B3A1A]">
            <img src={aboutImages.circle} alt="Mission" className="h-7 w-7 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-[#1F2937]">Our Mission</h3>
          <span className="mt-1 mb-5 block h-[2.5px] w-28 rounded-full bg-gradient-to-r from-[#CB4A26] to-[#019846]" />
          <p className="text-sm leading-relaxed text-[#4B5563]">
            To develop projects that are responsibly planned, well-constructed, and delivered with
            transparency — ensuring comfort for homeowners and confidence in their investment.
          </p>
        </div>
        <div className="flex flex-col rounded-3xl bg-[#FFFFFF82] p-14 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="mb-8 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#8B3A1A]">
            <img src={aboutImages.eye} alt="Value" className="h-7 w-7 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-[#1F2937]">Our Value</h3>
          <span className="mt-1 mb-5 block h-[2.5px] w-20 rounded-full bg-gradient-to-r from-[#CB4A26] to-[#019846]" />
          <ul className="space-y-2 text-sm text-[#4B5563]">
            <li>
              • <strong>Integrity–</strong> Honesty that guides our actions.
            </li>
            <li>
              • <strong>Quality–</strong> Standards we never compromise on.
            </li>
            <li>
              • <strong>Responsibility–</strong> Accountability beyond delivery.
            </li>
            <li>
              • <strong>Customer Trust–</strong> Built over time, maintained{" "}
              <span className="pl-3">every day</span>.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Milestones() {
  const [active, setActive] = useState(0);
  const item = milestones[active];

  return (
    <section className="bg-[#FAF9F6] px-4 py-12 sm:px-8 md:px-16 md:py-16">
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col md:w-[45%]">
          <div className="mb-6">
            <span className="bg-black px-3 py-1 text-[10px] tracking-widest text-white uppercase">
              Milestones
            </span>
            <h2 className="mt-4 text-2xl leading-snug text-[#1a1a1a] md:text-3xl">
              A journey shaped by <br />
              <span className="font-bold">consistency, learning,</span> and <br />
              <span className="font-bold">long-term commitment.</span>
            </h2>
            <div className="mt-3 h-1.5 w-48 rounded-full bg-gradient-to-r from-[#CB4A26] to-[#019846]" />
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="h-[260px] w-full rounded-2xl object-cover sm:h-[320px]"
          />
        </div>
        <div className="relative flex w-full md:w-[55%]">
          <div className="absolute top-0 left-[12px] h-full w-[4px] rounded-full bg-[#53301A]" />
          <div className="flex max-h-[500px] w-full flex-col gap-5 overflow-y-auto pr-2 pl-9 md:pt-[100px]">
            {milestones.map((entry, index) => {
              const selected = index === active;
              return (
                <button
                  key={`${entry.year}-${entry.title}`}
                  type="button"
                  onClick={() => setActive(index)}
                  className="relative cursor-pointer text-left"
                >
                  {selected ? (
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="absolute -left-8.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#260F01]">
                          <div className="h-3 w-3 rounded-full bg-[#EF7F1A]" />
                        </div>
                        <p className="text-3xl font-bold text-[#111827]">{entry.year}</p>
                      </div>
                      <p className="text-xl font-medium text-[#260F01]">{entry.title}</p>
                      <p className="text-sm font-medium text-[#260F01]">- {entry.location}</p>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#374151]">{entry.description}</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="absolute -left-7.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#260F01]">
                        <div className="h-2 w-2 rounded-full bg-[#EF7F1A]" />
                      </div>
                      <p className="text-base font-semibold text-[#111827]">{entry.year}</p>
                      <p className="text-sm font-medium text-[#260F01]">-{entry.title}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Visionaries() {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [direction, setDirection] = useState("left");
  const leader = leaders[index];
  const outgoing = previous !== null ? leaders[previous] : null;
  const enter = direction === "left" ? "about-slide-in-right" : "about-slide-in-left";
  const exit = direction === "left" ? "about-slide-out-left" : "about-slide-out-right";

  const go = (next, way) => {
    if (next === index) return;
    setDirection(way);
    setPrevious(index);
    setIndex(next);
    window.setTimeout(() => setPrevious(null), 500);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => {
        const next = (current + 1) % leaders.length;
        setDirection("left");
        setPrevious(current);
        window.setTimeout(() => setPrevious(null), 500);
        return next;
      });
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[420px] flex-col overflow-hidden bg-[#6A2915] sm:min-h-[500px] md:min-h-[560px]">
      <div className="pointer-events-none absolute inset-0 ml-105 flex items-center justify-center select-none">
        <img src={aboutImages.watermark} alt="S" className="w-80 opacity-90" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-6 sm:px-10 md:flex-row md:items-end md:px-14 lg:px-20">
        <div className="flex flex-1 flex-col justify-center pt-10 pb-6 md:py-16">
          <h2 className="mb-1 text-2xl font-light text-[#FFFCF5] sm:text-3xl md:text-4xl lg:text-5xl">
            Meet Our <span className="font-bold">Visionaries</span>
          </h2>
          <p className="mb-2 text-[15px] leading-[33px] font-light tracking-[0.1px] text-[#FFFCF5]">
            The leaders driving Swastik Group's
            <br />
            journey of excellence
          </p>
          <div className="mb-8 flex gap-1 sm:mb-10 md:mb-12">
            <div className="h-1 w-82 rounded bg-gradient-to-r from-[#019846] to-[#CB4A26]" />
          </div>
          <div className="relative overflow-hidden">
            {outgoing && (
              <div className={`absolute inset-0 ${exit}`}>
                <h3 className="mb-1 text-2xl font-bold text-[#FFFCF5] sm:text-3xl md:text-4xl">{outgoing.name}</h3>
                <p className="mb-4 text-sm font-medium text-[#FFFCF5] sm:mb-6 sm:text-base">{outgoing.position}</p>
                <p className="mb-8 max-w-[480px] text-[16px] leading-[30px] font-normal tracking-[0px] text-white sm:mb-10 md:mb-12">{outgoing.quote}</p>
              </div>
            )}
            <div className={enter} key={leader.name}>
              <h3 className="mb-1 text-2xl font-bold text-[#FFFCF5] sm:text-3xl md:text-4xl">{leader.name}</h3>
              <p className="mb-4 text-sm font-medium text-[#FFFCF5] sm:mb-6 sm:text-base">{leader.position}</p>
              <p className="mb-8 max-w-[480px] text-[16px] leading-[30px] font-normal tracking-[0px] text-white sm:mb-10 md:mb-12">{leader.quote}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {leaders.map((person, dot) => (
              <button
                key={person.name}
                type="button"
                aria-label={person.name}
                onClick={() => go(dot, dot > index ? "left" : "right")}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${dot === index ? "scale-110 bg-[#CB4A26]" : "bg-[#D9D9D9] hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
        <div className="relative flex w-full flex-shrink-0 items-end justify-center md:w-auto md:justify-end">
          {outgoing && (
            <img
              src={outgoing.image}
              alt={outgoing.name}
              className={`absolute bottom-0 h-72 w-auto object-contain object-bottom drop-shadow-2xl sm:h-96 md:h-[460px] lg:h-[540px] ${exit}`}
            />
          )}
          <img
            src={leader.image}
            alt={leader.name}
            className={`block h-72 w-auto object-contain object-bottom drop-shadow-2xl sm:h-96 md:h-[460px] lg:h-[540px] ${enter}`}
          />
        </div>
      </div>
    </section>
  );
}

function Team() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % teamSlides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/8] md:aspect-[16/7]">
      <div className="absolute top-10 left-10 z-20">
        <h2 className="bg-[#260F01] p-2 text-[12px] font-semibold tracking-wide text-white sm:text-[14px] md:text-[20px]">
          OUR TEAM
        </h2>
      </div>
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {teamSlides.map((slide, slideIndex) => (
          <div key={slide} className="flex h-full w-full flex-shrink-0 items-center justify-center bg-[#f5e9e2]">
            <img src={slide} alt={`Team ${slideIndex + 1}`} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {teamSlides.map((slide, slideIndex) => (
          <div key={slide} className={`h-3 w-3 rounded-full ${index === slideIndex ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

function Awards() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-10 sm:px-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl leading-tight font-medium text-[#3B2B1F] sm:text-3xl lg:text-4xl xl:text-5xl">
            Awards & Accolades
          </h2>
          <p className="mt-2 text-xs text-[#6B5A4B] sm:text-sm lg:text-base">
            Recognition earned through consistent quality and responsible development
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-6 shadow-[10%] sm:grid-cols-3">
          {awards.map((award) => (
            <div
              key={award.year + award.subtitle}
              className="w-full max-w-sm rounded-2xl bg-white p-3 shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img src={award.image} alt={award.subtitle} className="h-48 w-full rounded-xl object-cover" />
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-[#3B2B1F]">{award.title}</p>
                <p className="mt-1 text-xs text-[#6B5A4B]">{award.subtitle}</p>
                <p className="text-xs text-[#6B5A4B]">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
