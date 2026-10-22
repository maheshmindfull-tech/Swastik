import collage from "../assets/hidden-forest-collage.jpg";
import DearPuneFooter from "../components/DearPuneFooter";
import HiddenForestPoster from "../components/HiddenForestPoster";
import ForestVideoBackground from "../components/ForestVideoBackground";
import useSeo from "../hooks/useSeo";
import forestImage from "../assets/hidden-forest.jpg";

const seo = {
  title: "The Hidden Forest | Upcoming Residential Project in Pune",
  description:
    "The Hidden Forest is an upcoming residential project in Pune offering nature-inspired living — premium residences and homes surrounded by greenery.",
  keywords: [
    "Residential project in Pune",
    "Nature-inspired living",
    "Upcoming residential project in Pune",
    "Premium residences in Pune",
    "Homes surrounded by greenery",
  ],
  image: forestImage,
  path: "/dear-pune",
};

const chapters = [
  {
    number: "01",
    title: "Dear Pune",
    text: "A series of letters to the places, memories and everyday moments that make Pune feel like Pune.",
  },
  {
    number: "02",
    title: "The Unsent Letter",
    text: "One letter remained unopened. A promise that another story was waiting for its moment.",
  },
  {
    number: "03",
    title: "The Hidden Forest",
    text: "The codename is here. The full reveal is still to come. Join the list to hear what happens next.",
    warm: true,
  },
];

const upcoming = ["04", "05"];

function ChapterCard({ number, title, text, warm, edged, compact }) {
  return (
    <article
      className={`${compact ? "py-3" : "py-8"} min-[851px]:px-9 min-[851px]:py-4 ${edged ? "border-t border-[#f4ead7]/20 min-[851px]:border-l min-[851px]:border-t-0" : "min-[851px]:pl-0"
        } ${number.endsWith("3") || number.endsWith("6") ? "min-[851px]:pr-1" : ""}`}
    >
      <p className="poster-serif text-[30px] font-normal leading-none tracking-[0.06em] text-[#f6efe2]">
        {number}
      </p>
      <h3
        className={`poster-serif mt-5 text-[clamp(26px,2.1vw,34px)] font-normal leading-[1.12] tracking-[-0.02em] ${warm ? "text-[#e4c49a]" : "text-[#f4ead7]"
          }`}
      >
        {title}
      </h3>
      {text ? (
        <p className="mt-4 max-w-[300px] text-[15px] leading-[1.55] text-[#d8cfbc]">{text}</p>
      ) : null}
    </article>
  );
}

export default function DearPune() {
  useSeo(seo);

  return (
    <main className="dear-pune relative overflow-hidden bg-[#071b13] text-[#f4ead7]">
      <div className="pt-[84px]">
        <HiddenForestPoster />
      </div>

      <section className="grid items-center gap-8 bg-[#f8f0df] px-5 py-10 text-[#14251b] sm:gap-[clamp(28px,4vw,64px)] sm:px-[5vw] sm:py-12 min-[851px]:min-h-[calc(100svh-84px)] min-[851px]:grid-cols-[1.05fr_0.95fr] xl:px-[76px] short:py-6">
        <div className="max-w-[600px] min-[851px]:justify-self-end">
          <p className="ui mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#91452d] short:mb-2">
            Codename:
          </p>
          <h2 className="mb-2 text-[clamp(36px,4.2vw,60px)] font-normal leading-[1.02] tracking-[-0.04em] short:text-[clamp(36px,3.8vw,52px)]">
            The Hidden <em className="text-[#91452d]">Forest</em>
          </h2>
          <p className="mb-5 text-[clamp(18px,1.7vw,24px)] leading-[1.3] text-[#3c4a3f] short:mb-4 short:text-[clamp(18px,1.55vw,22px)]">
            A New Perspective on Nature-Inspired Living
          </p>
          <blockquote className="relative mb-4 max-w-[540px] overflow-hidden border-l-[3px] border-[#91452d] bg-[linear-gradient(110deg,#efe2c8_0%,#f5ead6_60%,rgba(245,234,214,0)_100%)] py-4 pl-4 pr-6 shadow-[0_8px_22px_rgba(80,55,25,0.08)] sm:pl-5 short:py-3">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-1 -top-2 select-none text-[56px] leading-none text-[#91452d]/10"
            >
              ❧
            </span>
            <p className="relative text-[clamp(16px,1.45vw,20px)] italic leading-[1.5] text-[#2a3a2e] short:text-[clamp(16px,1.35vw,19px)]">
              Imagine waking up to{" "}
              <span className="bg-[linear-gradient(transparent_62%,rgba(201,166,106,0.45)_62%)] text-[#7d3a24]">
                lush greenery
              </span>
              , stepping into open spaces, and finding a little more{" "}
              <span className="bg-[linear-gradient(transparent_62%,rgba(201,166,106,0.45)_62%)] text-[#7d3a24]">
                calm in the everyday.
              </span>
            </p>
          </blockquote>
          <div className="ui max-w-[560px] text-[15px] leading-[1.7] text-[#5b5b4f] [&>p]:my-[10px] short:text-[14px] short:leading-[1.6] short:[&>p]:my-2 tiny:text-[13.5px] tiny:[&>p]:my-[6px]">
            <p>
              Imagine a life where nature is closer, the surroundings feel more
              open, and every day offers a refreshing change of pace.
            </p>
            <p className="font-bold text-[#14251b]">
              Introducing a new nature inspired residential experience in Pune.
            </p>
            <p>
              Thoughtfully envisioned for those who seek more than just a home,
              this upcoming residential development brings together the
              aspiration of contemporary living and the beauty of being closer
              to nature.
            </p>
            <p>
              A place to slow down, breathe deeper, and experience a different
              side of everyday living.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-[520px] max-[850px]:mx-auto short:max-w-[470px]">
          <div className="aspect-[665/437] overflow-hidden border-8 border-[#e7d6b8] bg-[#f6efe1] shadow-[0_18px_42px_rgba(42,30,15,0.2)]">
            <img
              src={collage}
              alt="The Hidden Forest, an upcoming residential project in Pune: a collage of a kingfisher, forest trails and homes surrounded by greenery"
              className="block h-full w-full object-cover object-[3%_center]"
            />
          </div>
          <p className="ui mt-3 text-[9px] uppercase tracking-[0.2em] text-[#8b553b]">
            The clues were always there. The full story is still to come.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1a4332] px-5 pb-0 pt-16 text-[#f4ead7] sm:px-[5vw] sm:pt-20 xl:px-[76px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_86%_38%,rgba(168,156,72,0.28),transparent_58%)]"
        />
        <div className="relative">
          <p className="ui mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-[#cbb892]">
            The story so far
          </p>
          <div className="grid items-center gap-8 min-[851px]:grid-cols-[1.15fr_0.85fr] min-[851px]:gap-12">
            <h2 className="poster-serif max-w-[680px] text-[clamp(46px,5.4vw,78px)] font-normal leading-[0.94] tracking-[-0.03em] text-[#f6efe2]">
              Three chapters.
              <br />
              One unfolding story.
            </h2>
            <div className="min-[851px]:justify-self-end min-[851px]:pt-2">
              <p className="max-w-[420px] text-[15px] leading-[1.65] text-[#e7decc]">
                From the city we know to a mystery we&apos;re not ready to explain.
                <br />
                Every chapter has led to this one.
              </p>
              <div className="mt-8 h-px w-full max-w-[420px] bg-[#c4784a]" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 min-[851px]:mt-16 min-[851px]:grid-cols-3">
            {chapters.map((chapter, index) => (
              <ChapterCard key={chapter.number} {...chapter} edged={index > 0} />
            ))}
          </div>

          <div className="mt-2 grid grid-cols-1 border-t border-[#f4ead7]/20 min-[851px]:mt-8 min-[851px]:grid-cols-3">
            {upcoming.map((number, index) => (
              <ChapterCard key={number} number={number} title="Upcoming" edged={index > 0} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-8 border-[#143026] bg-[#eadcc4] px-5 py-8 text-[#1f4a36] sm:px-[5vw] sm:py-10 xl:px-[76px]">
        <div className="flex flex-col items-start justify-between gap-8 min-[851px]:flex-row min-[851px]:items-center">
          <div>
            <p className="ui mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8d4a32]">
              The next chapter is coming
            </p>
            <h2 className="poster-serif text-[clamp(36px,4.2vw,62px)] font-normal leading-[1.02] tracking-[-0.03em]">
              When the story opens,
              <br />
              <em className="font-normal text-[#b08474]">be there to read it.</em>
            </h2>
          </div>
          <a
            href="#early-updates"
            className="ui inline-flex shrink-0 items-center gap-3 bg-[#8d4a32] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#f6efe2] transition hover:bg-[#a0563a]"
          >
            Get early updates
            <span aria-hidden="true" className="text-[16px] font-normal">
              ›
            </span>
          </a>
        </div>
      </section>

      <section
        id="first-to-know"
        className="relative isolate flex min-h-[560px] flex-col items-center justify-center overflow-hidden bg-[#071b13] px-[18px] py-[72px] text-center sm:min-h-[640px] sm:px-[22px] sm:py-[96px]"
      >
        <ForestVideoBackground />
        <p className="ui mb-[18px] text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2c68e]">
          The Hidden Forest&nbsp; |&nbsp; Be the first to know
        </p>
        <h2 className="mx-auto mb-4 max-w-[720px] text-[clamp(38px,4.5vw,64px)] font-normal leading-[0.98] tracking-[-0.045em] text-[#f4ead7]">
          A new way of living
          <br />
          <em className="text-[#e6a97c]">is taking shape.</em>
        </h2>
        <p className="ui mx-auto mb-[30px] max-w-[520px] text-[13px] leading-[1.8] text-[#e4e6da]">
          Discover an upcoming residential project envisioned for those who
          seek a more enriching way to live.
        </p>
      </section>

      <DearPuneFooter />
    </main>
  );
}
