import { expertiseBottom } from "../assets/images";
import { expertise } from "../data";

export default function Expertise() {
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto my-10 px-6 md:px-12 py-16 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-[320px] flex-shrink-0">
            <h2 className="text-[40px] md:text-[40px] text-[#000000] leading-tight">
              Our <span className="font-bold">Expertise</span>
            </h2>
            <p className="text-[#000000] mt-5 text-[15px] leading-relaxed">
              Delivering excellence across planning, design, construction, and
              quality execution.
            </p>
            <div className="mt-7 h-[6px] w-[375px] max-w-full rounded-full bg-gradient-to-r from-[#D84315] via-[#F9A825] to-[#2E7D32]" />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#F3F3F3] rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col items-center justify-center text-center h-[140px] sm:h-[160px] md:h-[180px] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3">
                    <img
                      alt={item.title}
                      className="w-full h-full object-contain"
                      src={item.icon}
                    />
                  </div>
                  <p className="text-[#000000] font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          alt="Decorative bottom pattern"
          className="w-full h-auto object-cover pb-8"
          src={expertiseBottom}
        />
      </div>
    </div>
  );
}
