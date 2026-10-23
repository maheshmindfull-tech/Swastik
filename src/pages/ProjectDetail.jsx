import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Welcome from "../components/Welcome";
import Testimonials from "../components/Testimonials";
import { projectList } from "../data/projectList";
import { highlightAssets, projectDetails } from "../data/projectDetails";
import useSeo from "../hooks/useSeo";
import { projectSeo } from "../seo";

const highlights = [
  { title: "Prime Location", bg: highlightAssets.locationBg, img: highlightAssets.pin },
  { title: "Smart Homes", bg: highlightAssets.homeBg, img: highlightAssets.home },
  { title: "Infinity Pool", bg: highlightAssets.poolBg, img: highlightAssets.pool },
  { title: "24/7 Security", bg: highlightAssets.securityBg, img: highlightAssets.security },
  { title: "Premium Fitness", bg: highlightAssets.fitnessBg, img: highlightAssets.fitness },
  { title: "Celebrate style", bg: highlightAssets.styleBg, img: highlightAssets.home },
];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectDetails.find((item) => item.id === projectId);

  const place = projectList.find((item) => item.id === projectId)?.location || "Pune";
  useSeo(
    project
      ? projectSeo(project, place)
      : {
          title: "Project not found | Swastik Realty Group",
          description: "This Swastik Realty Group project page is not available. Browse residential projects in Pune.",
          path: `/projects/${projectId}`,
          robots: "noindex, follow",
        },
  );

  if (!project) {
    return <div className="px-6 pt-36 pb-20 text-center text-[#260F01]">Project not found</div>;
  }

  return (
    <>
      <Hero project={project} />
      <About project={project} />
      <Banner project={project} />
      <Highlights project={project} />
      <Welcome />
      <Amenities project={project} />
      <Layouts project={project} />
      {projectId !== "swastik-vyom" && <Gallery project={project} />}
      <Testimonials />
      <Map project={project} />
    </>
  );
}

function Hero({ project }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img src={project.main} alt={project.name} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex min-h-screen items-center px-4 sm:px-8 lg:px-20">
        <div
          className="mt-20 w-full max-w-[520px] rounded-3xl bg-white/10 p-6 text-white backdrop-blur-[2px] sm:p-8 lg:p-10"
          style={{ boxShadow: "0px 15px 30px rgba(0,0,0,0.18), 0px 12px 80px rgba(0,0,0,0.22)" }}
        >
          <div className="relative z-10">
            <h3 className="text-xl tracking-wide uppercase opacity-80 sm:text-2xl lg:text-[35px]">{project.name}</h3>
            <span className="mt-2 block h-[5px] w-32 rounded-full bg-gradient-to-r from-[#019846] to-[#CB4A26] sm:w-48 lg:w-65" />
            <h1 className="mt-4 text-2xl leading-tight font-semibold sm:text-3xl lg:text-5xl">{project.title}</h1>
            <p className="mt-4 text-sm text-white/80 sm:text-base">{project.desc}</p>
            <Link to="/contact">
              <button type="button" className="mt-6 rounded-full bg-white px-5 py-2 text-sm text-[#260F01] sm:px-6 sm:py-3 sm:text-base">
                Contact now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function About({ project }) {
  const paragraphs = project.about || [];
  return (
    <div className="mx-auto mt-10 max-w-[1600px] px-14 py-12 sm:px-16 sm:py-16 md:px-18 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="w-full lg:w-120">
          <div className="flex flex-col gap-4">
            <button type="button" className="w-30 bg-[#260F01] px-4 py-2 text-sm text-white">
              WHO WE ARE
            </button>
            <div className="text-3xl sm:text-4xl lg:text-5xl">
              <h1>
                Building <span className="font-bold">Dreams,</span>
              </h1>
              <h1>
                Creating <span className="font-bold">Legacies</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full text-[#374151] lg:w-200">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={`text-[14px] leading-relaxed ${index < paragraphs.length - 1 ? "mb-6 sm:mb-8" : ""}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Banner({ project }) {
  return (
    <div className="mx-4 mt-[20px] sm:mx-8 sm:mt-[-20px] lg:mx-22 lg:mt-[-40px]">
      <img src={project.banner} alt={project.name} className="h-[200px] w-full object-cover sm:h-[320px] lg:h-auto" />
    </div>
  );
}

function Highlights({ project }) {
  const [active, setActive] = useState(null);
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-xl sm:mb-16">
          <h2 className="text-2xl font-light text-[#3A2A1B] sm:text-3xl lg:text-4xl">
            Project <span className="font-semibold">Highlights</span>
          </h2>
          <span className="mt-4 block h-[5px] w-32 rounded-full bg-gradient-to-r from-[#019846] to-[#CB4A26] sm:w-40 lg:w-45" />
          <p className="mt-4 text-sm leading-relaxed text-[#6B5A4A] sm:text-base">{project.highlightsDesc}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {highlights.map((item, index) => {
            const selected = active === index;
            return (
              <div
                key={item.title}
                onClick={() => setActive(selected ? null : index)}
                className={`group relative flex h-[220px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 ease-out hover:z-10 hover:scale-[1.05] sm:h-[280px] lg:h-[330px] ${selected ? "z-10 scale-[1.05]" : ""}`}
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center transition duration-500 ${selected ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
                  style={{ backgroundImage: `url(${item.bg})` }}
                />
                <div className={`absolute inset-0 bg-black/25 transition duration-500 ${selected ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`} />
                <span className="absolute top-6 left-4 z-20 text-3xl font-semibold text-[#CFC6BD] transition duration-300 group-hover:text-white sm:top-8 sm:left-5 sm:text-4xl lg:text-5xl">
                  {index + 1}
                </span>
                <div className="relative z-20 p-4">
                  <img
                    src={item.img}
                    alt=""
                    className={`mb-3 w-6 transition duration-300 group-hover:brightness-0 group-hover:invert sm:w-7 lg:w-8 ${selected ? "brightness-0 invert" : ""}`}
                  />
                  <p className={`mb-2 text-xs font-medium transition duration-300 sm:text-sm ${selected ? "text-white" : "text-[#3A2A1B] group-hover:text-white"}`}>
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Amenities({ project }) {
  const title = project.aminityTitle || { line1: "Building", bold1: "Dreams,", line2: "Creating", bold2: "Legacies" };
  return (
    <div className="mt-15 mb-15 flex h-full justify-center p-6">
      <div className="flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-4/3 overflow-hidden shadow-2xl">
            <img src={project.aminity} alt="Luxury Sky Deck" className="h-full w-full rounded-3xl object-cover" />
          </div>
        </div>
        <div className="flex w-full flex-col space-y-6 lg:w-1/2">
          <div className="space-y-2">
            <span className="bg-[#260F01] px-4 py-2 text-[10px] font-semibold tracking-widest text-white uppercase">Aminities</span>
            <h1 className="mt-4 text-4xl leading-tight font-light text-stone-800 md:text-3xl">
              {title.line1} <span className="font-bold">{title.bold1}</span>
              <br />
              {title.line2} <span className="font-bold">{title.bold2}</span>
            </h1>
          </div>
          <ul className="space-y-3">
            {(project.amenities || []).map((item) => (
              <li key={item} className="group flex items-center gap-2">
                <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-black">
                  <div className="h-2 w-2 rounded-full bg-[#dd9c2c]" />
                </div>
                <span className="text-sm font-medium text-stone-600 transition-colors group-hover:text-stone-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Layouts({ project }) {
  const layouts = project.layouts || [];
  const [tab, setTab] = useState(layouts[0]?.tab || "");

  useEffect(() => {
    if (layouts.length > 0) setTab(layouts[0].tab);
  }, [project]);

  if (!layouts.length) return null;
  const current = layouts.find((item) => item.tab === tab) || layouts[0];

  return (
    <section className="bg-[#392D22B2] px-4 py-8 font-sans text-white sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:py-13">
      <div className="mx-auto max-w-7xl">
        <div className="text-center lg:text-left">
          <h2 className="mb-4 text-3xl font-semibold sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl">Floor Plans & Layouts</h2>
          <div className="mx-auto h-1.5 w-32 rounded-full bg-gradient-to-r from-[#019846] to-[#CB4A26] opacity-100 sm:w-48 md:w-64 lg:mx-0" />
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="flex h-[280px] w-full items-center justify-center sm:h-[350px] md:h-[450px] lg:h-[550px]">
            <img src={current?.image} alt={`${current?.tab} Floor Plan`} className="max-h-full max-w-full object-contain transition-all duration-300" />
          </div>
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              {layouts.map((item) => (
                <button
                  key={item.tab}
                  type="button"
                  onClick={() => setTab(item.tab)}
                  className={`w-full rounded-full px-6 py-2 text-sm font-semibold sm:w-auto sm:px-20 sm:py-3 sm:text-base ${tab === item.tab ? "bg-[#260F01] text-white" : "bg-gray-300 text-gray-800"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div>
              <h3 className="mb-4 text-xl font-light opacity-95 sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl">{current?.title}</h3>
              <p className="text-base leading-relaxed text-gray-200 md:text-lg">{current?.description}</p>
            </div>
            <button type="button" className="w-full rounded-full bg-[#260F01] px-6 py-2 text-sm font-semibold text-white opacity-95 transition-opacity sm:w-auto sm:px-8 sm:py-3 md:px-10 sm:text-base">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery({ project }) {
  const images = project.gallery || [];
  return (
    <div>
      <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-16">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl font-semibold text-[#3A2A1A] sm:text-3xl">Gallery</h2>
          <span className="mt-2 block h-[5px] w-35 rounded-full bg-gradient-to-r from-[#019846] to-[#CB4A26]" />
        </div>
        {images.length >= 5 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <div className="flex flex-col gap-4 sm:gap-6">
              <GalleryImage src={images[0]} />
              <GalleryImage src={images[1]} />
            </div>
            <div>
              <GalleryImage src={images[2]} />
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <GalleryImage src={images[3]} />
              <GalleryImage src={images[4]} />
            </div>
          </div>
        )}
        <div className="mt-6 flex justify-center sm:mt-8 sm:justify-end lg:mt-10">
          <button type="button" className="flex items-center gap-2 border border-black p-4 text-sm transition hover:border-none hover:bg-[#260F01] hover:text-white sm:px-5 sm:text-base">
            <img src={highlightAssets.viewAll} alt="" className="transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
            View All Images
          </button>
        </div>
      </section>
    </div>
  );
}

function GalleryImage({ src }) {
  return <img src={src} alt="" className="h-full w-full rounded object-cover transition-all duration-500 ease-out hover:scale-105 hover:opacity-90" />;
}

function Map({ project }) {
  if (!project.mapUrl) return null;
  return (
    <div className="bg-[#f5f0ea] px-6 py-12 md:px-20">
      <div className="w-full overflow-hidden rounded-2xl bg-[#e8e4de] shadow-md">
        <iframe
          src={project.mapUrl}
          title={`${project.name} Location`}
          width="100%"
          className="h-64 w-full border-0 sm:h-80 md:h-96 lg:h-[450px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
