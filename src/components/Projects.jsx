import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { upcoming } from "../assets/images";
import { projectTabs, projects } from "../data";

export default function Projects() {
  const [tab, setTab] = useState("Completed");
  const navigate = useNavigate();
  const visible = projects.filter((project) => project.status === tab);

  return (
    <section className="bg-[#F7F5F2] py-16">
      <div className="px-6 sm:px-10 lg:px-30">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2B1B12]">
              Our <span className="font-semibold">Projects</span>
            </h2>
            <p className="mt-3 text-[#6B5A4A] max-w-md">
              Landmarks that reflect our legacy of thoughtful design, structural
              strength, and timeless living.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 w-full lg:w-auto lg:flex-nowrap">
            {projectTabs.map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`flex-1 lg:flex-none px-3 md:px-8 py-2 md:py-4 rounded-full text-xs md:text-sm whitespace-nowrap transition ${item === "Completed" ? "basis-full lg:basis-auto" : ""} ${tab === item ? "bg-[#5A2D1F] text-white" : "border border-[#C9BFB5] text-[#2B1B12]"}`}
              >
                {item} Projects
              </button>
            ))}
          </div>
        </div>

        {tab === "Upcoming" ? (
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ height: "clamp(300px, 60vw, 600px)" }}
          >
            <img
              src={upcoming}
              alt="Upcoming Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[8%] left-[8%] sm:left-[12%] lg:left-[17%]">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 border border-white text-black bg-white text-xs sm:text-sm tracking-widest rounded-full hover:bg-transparent hover:text-white transition-all">
                View Brochure
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`grid gap-8 ${visible.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : "md:grid-cols-2"}`}
          >
            {visible.slice(0, 4).map((project, index) => (
              <div
                key={project.id}
                className={`relative group rounded-2xl overflow-hidden ${visible.length === 1 ? "h-[450px]" : "h-[350px]"}`}
              >
                <img
                  src={project.image}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index < 2 ? "high" : "low"}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition" />
                <div className="absolute bottom-6 left-0 right-0 text-white text-center group-hover:opacity-0 transition">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm opacity-80">📍 {project.location}</p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition text-center px-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-3">📍 {project.location}</p>
                  <div className="flex gap-4 text-sm mb-4">
                    {project.configurations.map((config) => (
                      <span key={config}>{config}</span>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      project.id && navigate(`/projects/${project.id}`)
                    }
                    className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab !== "Upcoming" && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate(`/projects?tab=${tab}`)}
              className="px-10 py-3 rounded-full border border-[#5A2D1F] text-[#5A2D1F] text-sm hover:bg-[#5A2D1F] hover:text-white transition"
            >
              View More {tab} Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
