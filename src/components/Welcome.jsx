import { useEffect, useRef, useState } from "react";
import { welcome } from "../assets/images";
import { stats } from "../data";

function Stat({ target, suffix, label }) {
  const [value, setValue] = useState(1);
  const ref = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearInterval(timer.current);
          let current = 1;
          setValue(1);
          const steps = Math.floor(1500 / 16);
          const step = (target - 1) / steps;
          timer.current = setInterval(() => {
            current += step;
            if (current >= target) {
              setValue(target);
              clearInterval(timer.current);
            } else {
              setValue(Math.floor(current));
            }
          }, 16);
        } else {
          clearInterval(timer.current);
          setValue(1);
        }
      },
      { threshold: 0.4 },
    );

    if (node) observer.observe(node);
    return () => {
      observer.disconnect();
      clearInterval(timer.current);
    };
  }, [target]);

  return (
    <div ref={ref}>
      <h2 className="text-xl sm:text-3xl lg:text-6xl font-bold leading-none">
        {value}
        {suffix}
      </h2>
      <p className="mt-1 lg:mt-2 text-[10px] sm:text-xs lg:text-sm text-white whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}

export default function Welcome() {
  return (
    <section className="relative">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(420px, 55vw, 500px)" }}
      >
        <img
          alt="Welcome"
          className="w-full h-full object-cover object-center"
          src={welcome}
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-6 lg:gap-12 text-white">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light leading-tight">
                  Welcome we <br />
                  are <span className="font-semibold">Swastik</span> <br />
                </h1>
                <div className="mt-1 w-40 sm:w-60 h-[4px] lg:h-[6px] bg-gradient-to-r from-[#019846] to-[#CB4A26] rounded-full" />
              </div>
              <div className="flex flex-col justify-center gap-4 lg:gap-6">
                <p className="text-xs sm:text-sm lg:text-base text-white leading-relaxed max-w-3xl">
                  Experience luxury living at Prism City, ideally located in
                  Charholi, seamlessly connecting Pune, Pimpri Chinchwad, and
                  Alandi. Offering meticulously designed 4BHK, 3BHK, and 2BHK
                  flats with modern amenities, spread across 8.5 acres and 9
                  buildings,
                </p>
                <div className="relative mt-4 lg:mt-20">
                  <div className="grid grid-cols-4 gap-2 sm:gap-6 lg:gap-8">
                    {stats.map((stat) => (
                      <Stat key={stat.label} {...stat} />
                    ))}
                  </div>
                  <div
                    className="mt-3 lg:mt-5 w-full rounded-full opacity-50"
                    style={{
                      height: "5px",
                      background:
                        "linear-gradient(to right, #CB4A26, #f97316, #eab308, #019846)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
