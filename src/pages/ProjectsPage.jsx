import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { projectList, projectTabs, upcomingImage } from "../data/projectList";
import useSeo from "../hooks/useSeo";

function Pin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ProjectsPage() {
  const [tab, setTab] = useState("Ongoing");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const visible = projectList.filter((project) => project.status === tab);

  useSeo({
    title: "Projects | Swastik Realty Group",
    description:
      "Explore ongoing, completed, and upcoming residential projects by Swastik Realty Group across Pune.",
    path: "/projects",
  });

  useEffect(() => {
    const next = searchParams.get("tab");
    if (next && projectTabs.includes(next)) {
      setTab(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <div className="mt-0 sm:mt-16 md:mt-15 lg:mt-0 xl:mt-0">
      <div className="relative -mt-16 md:-mt-15 lg:mt-0">
        <div className="fixed top-16 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full bg-[#D9D9D933] p-1.5 backdrop-blur-md md:top-20 md:right-10 md:left-auto md:translate-x-0 md:gap-3 md:p-2 lg:right-24">
          {projectTabs.map((name) => {
            const count = name === "Upcoming" ? 1 : projectList.filter((project) => project.status === name).length;
            const active = tab === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setTab(name)}
                className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-all md:gap-2 md:px-5 ${active ? "bg-[#53301A] text-white" : "bg-white text-black hover:bg-gray-100"}`}
              >
                {name}
                {active && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#3B1A08]">
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {tab === "Upcoming" && (
          <div className="relative h-[100svh] w-full">
            <img src={upcomingImage} alt="Upcoming Project" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 sm:bottom-[9%] sm:left-[17%] sm:translate-x-0">
              <button
                type="button"
                className="rounded-full border border-white bg-white px-6 py-2.5 text-xs tracking-widest text-black transition-all hover:bg-transparent hover:text-white sm:px-8 sm:py-3 sm:text-sm"
              >
                Get More Details
              </button>
            </div>
          </div>
        )}

        {tab !== "Upcoming" &&
          visible.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="relative flex h-screen w-full items-center justify-center px-4 sm:px-7 md:justify-start md:px-15"
            >
              <img
                src={project.image}
                alt={project.title}
                loading={index === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full bg-contain"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-30 mt-36 w-[90%] rounded-xl border border-white/20 bg-[#260F0145] p-5 text-white shadow-2xl backdrop-blur-md sm:mt-32 sm:w-[70%] md:mt-20 md:w-[45%] md:p-8 lg:mt-0 lg:w-[35%] xl:max-w-[26%]">
                {tab === "Completed" && (
                  <div className="absolute -top-4 right-4 w-20 rounded-xl bg-white px-3 py-1 text-center font-medium text-[#260F01]">
                    SOLD OUT
                  </div>
                )}
                <h1 className={`text-center text-2xl font-normal text-[#FFFFFF] font-[500px] ${tab === "Completed" ? "mt-10" : ""}`}>
                  {project.title}
                </h1>
                <div className="mb-6 flex items-center justify-center gap-1 text-sm text-[#FFFFFF] opacity-90">
                  <Pin />
                  <span>{project.location}</span>
                </div>
                <div className="mb-2 flex flex-col items-center gap-2 text-sm font-medium text-[#FFFFFF]">
                  <div className="flex justify-center gap-6">
                    {project.configurations
                      .filter((item) => !item.includes("Duplex"))
                      .map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-white" /> {item}
                        </div>
                      ))}
                  </div>
                  {project.configurations.some((item) => item.includes("Duplex")) && (
                    <div className="flex justify-center gap-6">
                      {project.configurations
                        .filter((item) => item.includes("Duplex"))
                        .map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-white" /> {item}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                <p className="mb-4 text-center text-xs text-[#FFFFFF] opacity-80">{project.description}</p>
                {tab !== "Completed" && tab !== "Upcoming" && (
                  <button
                    type="button"
                    onClick={() => project.id && navigate(`/projects/${project.id}`)}
                    className="w-full rounded-full bg-[#FFFFFF] py-3 text-sm font-medium text-[#000000] transition-colors hover:bg-gray-100"
                  >
                    {project.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
