import { useLocation } from "react-router-dom";
import { journey } from "../assets/images";

const hiddenPaths = [
  "/contact",
  "/career",
  "/gallery",
  "/projects",
  "/privacy-policy",
  "/disclaimer",
  "/terms-and-conditions",
  "/dear-pune",
];

export default function Journey() {
  const { pathname } = useLocation();
  if (
    hiddenPaths.includes(pathname) ||
    pathname.startsWith("/projects/")
  ) {
    return null;
  }

  const about = pathname === "/about";
  const title = about
    ? "Let's Help You Take the Next Step"
    : "Start Your Journey Home.";
  const copy = about
    ? "Our team is always ready to guide you with clear information, honest advice, and support at every stage of your home-buying journey."
    : "Have questions or ready to take the next step? Our team is here to guide you—every step of the way. Reach out today and let's turn your dream home into reality.";

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-0 py-16">
      <div className="relative w-full max-w-[1400px] rounded-3xl overflow-hidden shadow-xl">
        <img
          alt="Journey Section"
          className="w-full h-[55vh] md:h-[50vh] object-cover"
          src={journey}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/0 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-5xl mb-4">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-sm font-light max-w-2xl mb-8 leading-relaxed text-gray-200">
            {copy}
          </p>
          <div className="flex flex-col items-center gap-4 w-full">
            <input
              type="email"
              placeholder="Enter email address"
              aria-label="Enter email address"
              className="bg-[#FFFCF5] w-full max-w-xl h-12 px-6 rounded-full text-gray-600 outline-none"
            />
            <button className="bg-[#FFFCF5] text-black px-18 py-3 rounded-full text-sm font-medium hover:bg-[#260F01] hover:text-white transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
