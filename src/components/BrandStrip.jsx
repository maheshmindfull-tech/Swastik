import {
  brandCoin,
  brandIcon1,
  brandIcon2,
  brandIcon3,
  brandIcon4,
  brandSun,
  brandWordmark,
} from "../assets/images";

const sideIcons = [brandIcon1, brandIcon2, brandIcon3, brandIcon4];

export default function BrandStrip() {
  return (
    <section className="w-full py-6 sm:py-10 overflow-hidden">
      <div className="w-full">
        <div className="relative w-full h-[180px] sm:h-[420px] md:h-[280px] lg:h-[640px] bg-[#FEECE5] overflow-hidden rounded-xl">
          <div className="absolute left-0 top-6 sm:top-8 md:top-0 lg:top-10 h-full flex items-center">
            <img
              alt="sun"
              className="w-[110px] sm:w-[250px] md:w-[150px] lg:w-[360px]"
              src={brandSun}
            />
            <img
              alt="coin"
              className="absolute left-[50px] top-5 sm:top-12 md:top-10 md:left-[70px] lg:top-20 sm:left-[150px] lg:left-[170px] h-[120px] sm:h-[300px] md:h-[170px] lg:h-[400px] object-contain"
              src={brandCoin}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              alt="logo"
              className="h-[30px] sm:h-[140px] md:h-[90px] lg:h-[150px] ml-16 sm:ml-62 md:ml-40 lg:ml-62"
              src={brandWordmark}
            />
          </div>
          <div className="absolute right-3 sm:right-14 md:right-8 lg:right-20 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-6 md:gap-3 lg:gap-6">
            {sideIcons.map((icon, index) => (
              <img
                key={icon}
                alt={`icon${index + 1}`}
                className="w-5 sm:w-12 md:w-8 lg:w-14"
                src={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
