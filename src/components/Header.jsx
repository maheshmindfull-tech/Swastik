import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets/images";
import { navLinks, solidHeaderPaths } from "../data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const solid = solidHeaderPaths.includes(pathname);
  const forestPage = pathname === "/dear-pune" || pathname.startsWith("/dear-pune/");

  useLayoutEffect(() => {
    const node = document.querySelector("header");
    if (!node) return undefined;
    const apply = () => {
      document.documentElement.style.setProperty("--site-header", `${node.getBoundingClientRect().height}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [pathname, open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const backgroundColor = forestPage
    ? "#071b13"
    : solid
      ? "#6A2915"
      : scrolled
        ? "rgba(38,15,1,0.65)"
        : "transparent";

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{ backgroundColor }}
      >
        <nav className="flex md:hidden items-center justify-between px-4 py-3">
          <button
            onClick={() => setOpen((value) => !value)}
            className="w-6 h-6 flex flex-col justify-center items-center gap-1 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
          <Link to="/">
            <img alt="Logo" className="w-32 sm:w-36 cursor-pointer" src={logo} />
          </Link>
          <Link to="/contact">
            <button className="font-medium rounded-full px-3 py-1.5 text-[10px] sm:text-xs bg-white text-black hover:bg-gray-200 transition whitespace-nowrap">
              Contact
            </button>
          </Link>
        </nav>

        <nav className="hidden md:flex items-center justify-between px-6 lg:px-16 xl:px-24 py-4 lg:py-5 relative">
          <div className="flex items-center gap-3 lg:gap-4 xl:gap-5 text-white font-light text-[11px] lg:text-xs xl:text-[13px]">
            {navLinks.map((link) => {
              const active =
                link.path === "/"
                  ? pathname === "/"
                  : pathname === link.path || pathname.startsWith(`${link.path}/`);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:opacity-75 transition whitespace-nowrap ${active ? "font-semibold" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img
                alt="Logo"
                className="w-32 lg:w-40 xl:w-44 cursor-pointer"
                src={logo}
              />
            </Link>
          </div>
          <Link to="/contact">
            <button className="font-medium rounded-full px-5 lg:px-6 xl:px-18 py-3.5 text-xs lg:text-xs bg-white text-black hover:bg-gray-200 transition whitespace-nowrap">
              Contact Us
            </button>
          </Link>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-[#6A2915] z-40 md:hidden transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link) => {
            const active =
              link.path === "/"
                ? pathname === "/"
                : pathname === link.path || pathname.startsWith(`${link.path}/`);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white text-2xl sm:text-3xl font-light hover:opacity-75 transition ${active ? "font-semibold" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/contact">
            <button className="mt-4 font-medium rounded-full px-8 py-3 text-sm bg-white text-black hover:bg-gray-200 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
