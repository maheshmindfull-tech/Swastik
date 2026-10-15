import { Link } from "react-router-dom";
import { coinBanner } from "../assets/images";

export default function Belief() {
  return (
    <section className="bg-[#FFFCF5] my-10">
      <div className="w-full">
        <img
          alt="10,000 Years One Sacred Symbol"
          className="w-full h-auto object-cover"
          src={coinBanner}
        />
      </div>
      <div className="flex flex-col md:flex-row px-6 sm:px-10 lg:px-30 pb-14">
        <div className="w-full md:w-[35%] shrink-0 mx-auto flex flex-col items-start text-left">
          <h2 className="text-3xl sm:text-4xl text-[#3A2A1B] leading-snug">
            More Than <br />
            <span className="font-bold">Buildings.</span> We <br />
            Build <span className="font-bold">Belief.</span>
          </h2>
          <div
            className="rounded-full mt-4"
            style={{
              background: "linear-gradient(to right,#019846, #CB4A26)",
              height: "4px",
              width: "200px",
            }}
          />
          <div className="mt-6">
            <Link to="/projects">
              <button className="flex items-center gap-3 bg-[#2B1B12] text-white pl-6 pr-2 py-2 rounded-full text-sm hover:opacity-90 transition">
                Visit our Projects
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#2B1B12]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[80%] text-[#5A4A3C] text-lg leading-relaxed">
          <p>
            Swastik Realty Group is built on a simple yet powerful belief—real
            estate is not just about structures, but about stories. For over 26
            years, we have delivered thoughtfully designed residential and
            commercial spaces across Pune, guided by trust, transparency, and
            togetherness. What makes Swastik different is not just what we
            build, but how and why we build.
          </p>
          <p className="mt-4">
            Every Swastik project reflects the lives, aspirations, and emotions
            of the people who inhabit it. From families finding comfort to
            businesses finding growth, our developments are designed to support
            meaningful living and long-term value. We don't just shape
            skylines—we touch lives, nurture relationships, and turn
            aspirations into enduring legacies.
          </p>
        </div>
      </div>
    </section>
  );
}
