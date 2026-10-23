import teamPhoto from "../assets/career/team.png";
import useSeo from "../hooks/useSeo";

const jobs = [
  {
    id: 1,
    title: "Sourcing Manager",
    experience: "8+ Years",
    industry: "Real Estate",
    description:
      "Develops sourcing networks and manages lead generation activities. Strengthens business growth through strategic partnerships and coordination.",
  },
  {
    id: 2,
    title: "Sales Executive",
    experience: "2+ Years",
    industry: "Real Estate Sales",
    description:
      "Identifies potential buyers and converts leads into successful sales.\u2028 Builds strong client relationships while achieving business growth targets.",
  },
  {
    id: 3,
    title: "Pre Sales Executive",
    experience: "2+ Years",
    industry: "Real Estate Sales",
    description:
      "Manages customer engagement, lead generation, and sales coordination.\u2028 Ensures effective communication and smooth lead conversion for business growth.",
  },
  {
    id: 4,
    title: "Sr. Estimation & Planning Engineer ",
    experience: "8+ Years",
    industry: "Real Estate Sales",
    description:
      "Prepares accurate project estimates, planning, and execution strategies.\u2028 Ensures efficient resource management and smooth project coordination",
  },
];

const applyUrl =
  "https://26.strategicerpcloud.com/strategicerp/pages/webgeneratedhtml/980-oCF7Vd1iBYwqoLTp.html";

export default function Career() {
  useSeo({
    title: "Career | Swastik Realty Group",
    description: "Build your future with Swastik",
    path: "/career",
  });

  return (
    <div>
      <div className="mt-13 flex flex-col gap-4 bg-[#6A2915] px-6 py-14 text-white sm:mt-14 md:mt-15 md:px-20 lg:mt-22 xl:mt-15">
        <h1 className="text-4xl">
          Our <span className="font-bold">Career</span>
        </h1>
        <div className="h-1 w-60 rounded-full bg-[#D9D9D9]" />
        <p>Build your future with Swastik</p>
      </div>

      <div className="bg-[#e9e6e1] px-6 py-16 md:px-20">
        <div className="mb-16 flex flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-shrink-0 flex-col items-center rounded-2xl p-6">
            <img src={teamPhoto} alt="Team" className="w-80 rounded-xl" />
          </div>
          <div className="max-w-lg">
            <h2 className="mb-4 text-3xl leading-tight font-semibold text-[#111827] md:text-4xl">
              Shape the Skyline of Tomorrow.
            </h2>
            <p className="text-sm leading-relaxed text-[#374151]">
              True excellence is born when passion meets purpose. Swastik Realty Group is a collective of innovators, creators, and builders committed to redefining real estate. We offer a platform where your ideas are valued, your growth is fast-tracked, and your achievements are celebrated. Join a team where core values guide our vision and every single project makes a meaningful impact.
            </p>
          </div>
        </div>

        <div className="mb-50 grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col gap-2 rounded-2xl bg-[#EFEFEB] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <p className="text-xs text-[#6B7280]">Designation</p>
              <h2 className="text-xl font-bold text-[#111827]">
                {job.title}
                <span className="mt-1 block h-[3px] w-24 bg-gradient-to-r from-[#019846] to-[#CB4A26]" />
              </h2>
              <div className="mt-1 text-sm font-medium text-[#111827]">
                <p>{"Experience: \u00A0"}{job.experience}</p>
                <p>Industry: {job.industry}</p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[#374151]">{job.description}</p>
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-fit rounded-full bg-[#1a0a00] px-8 py-3 text-sm text-white transition-colors hover:bg-black"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
