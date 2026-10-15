import { Link } from "react-router-dom";
import {
  logoFooter,
  socialBg,
  socialFacebook,
  socialInstagram,
  socialLinkedin,
  socialYoutube,
} from "../assets/images";

const socials = [
  {
    label: "Youtube",
    href: "https://www.youtube.com/@SwastikRealtyGroup",
    icon: socialYoutube,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1GBLN3xm5H/?mibextid=wwXIfr",
    icon: socialFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/swastikrealtygroup/",
    icon: socialInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/swastikk-realty-group/",
    icon: socialLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#6A2915] text-white px-4 sm:px-6 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <img
            alt="Logo"
            className="h-14 sm:h-16 md:h-20 mb-10 mx-auto md:mx-0"
            src={logoFooter}
          />
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Dive into a realm where each strand of hair{" "}
            <br className="hidden sm:block" />
            adds to a tapestry of regained confidence and{" "}
            <br className="hidden sm:block" />
            vibrant self-expression.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 text-center md:text-left">
          <div>
            <h5 className="font-bold mb-4">Information</h5>
            <Link className="block mb-2 hover:text-orange-500 transition" to="/">
              Home
            </Link>
            <Link
              className="block mb-2 hover:text-orange-500 transition"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="block mb-2 hover:text-orange-500 transition"
              to="/career"
            >
              Career
            </Link>
            <Link
              className="block mb-2 hover:text-orange-500 transition"
              to="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="block mb-2 hover:text-orange-500 transition"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <h5 className="font-bold mb-4">Projects</h5>
            <Link
              className="block mb-2 hover:text-orange-500 transition"
              to="/projects"
            >
              All Projects
            </Link>
            <Link
              className="block mb-2 hover:text-orange-500 transition"
              to="/projects?tab=Completed"
            >
              Completed
            </Link>
            <Link
              className="block mb-2 hover:text-orange-500 transition"
              to="/projects?tab=Ongoing"
            >
              Ongoing
            </Link>
            <Link
              className="block mb-2 hover:text-orange-500 transition"
              to="/projects?tab=Upcoming"
            >
              Upcoming
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h5 className="font-bold mb-4">Follow Us</h5>
          <div className="flex gap-4">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              >
                <img alt="" className="w-full h-full" src={socialBg} />
                <img
                  alt=""
                  className="absolute inset-0 m-auto w-5 sm:w-6 md:w-9"
                  src={item.icon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div />
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/30 mt-10 pt-6 pb-8 text-[15px] sm:text-sm tracking-wide text-white/80">
          <div className="flex space-x-6 sm:space-x-10 mb-4 md:mb-0">
            <Link className="hover:text-white transition" to="/privacy-policy">
              Privacy policy
            </Link>
            <Link className="hover:text-white transition" to="/disclaimer">
              Disclaimer
            </Link>
            <Link
              className="hover:text-white transition"
              to="/terms-and-conditions"
            >
              Term and condition
            </Link>
          </div>
          <div className="uppercase tracking-widest font-light">
            ©2000 – 2025 Swastik Realty. ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
