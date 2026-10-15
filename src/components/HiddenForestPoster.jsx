import { useState } from "react";
import forest from "../assets/hidden-forest.jpg";

const initialForm = { name: "", mobile: "", email: "", consent: false };

const inputClass =
  "poster-serif mt-[6px] block h-10 w-full border border-[#e3dccd] bg-white px-3 text-[14px] font-normal normal-case tracking-normal text-[#1b261d] outline-none transition placeholder:text-[#a59d8f] focus:border-[#8d4a32] short:mt-1 short:h-9 short:text-[13px] tiny:h-8";

const labelClass =
  "ui block text-[10px] font-bold uppercase tracking-[0.16em] text-[#3b3328] tiny:text-[9px]";

const fieldGap = "mt-4 short:mt-3 tiny:mt-[10px]";

export default function HiddenForestPoster() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  const update = (field) => (event) => {
    const value =
      field === "consent"
        ? event.target.checked
        : field === "mobile"
          ? event.target.value.replace(/\D/g, "").slice(0, 10)
          : event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!/^\d{10}$/.test(form.mobile)) {
      setMessage("Enter a valid 10-digit mobile number.");
      return;
    }
    setMessage("Thank you — you're first in line.");
    setForm(initialForm);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#071b13] min-[1024px]:h-[calc(100svh-84px)] min-[1024px]:min-h-[460px]">
      <img
        src={forest}
        alt="A kingfisher flying over lush forest at The Hidden Forest, a nature-inspired residential project in Pune"
        className="absolute inset-x-0 top-0 -z-20 w-full object-cover object-[60%_center] max-[1023px]:aspect-[16/9] min-[1024px]:inset-0 min-[1024px]:h-full"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,16,10,0.85)_0%,rgba(4,16,10,0.6)_30%,rgba(4,16,10,0.1)_55%,rgba(4,16,10,0.15)_100%)] max-[1023px]:bg-[linear-gradient(180deg,rgba(7,27,19,0)_0%,rgba(7,27,19,0.1)_30vw,#071b13_58vw,#071b13_100%)]" />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 pb-14 pt-[46vw] sm:px-[6vw] min-[1024px]:h-full min-[1024px]:grid-cols-[minmax(0,1fr)_400px] min-[1024px]:py-10 xl:grid-cols-[minmax(0,1fr)_430px] short:py-5 tiny:py-3">
        <div className="poster-serif flex flex-col text-[#f7efe2] min-[1024px]:h-full min-[1024px]:justify-between">
          <div className="min-[1024px]:mt-[3vh]">
            <p className="ui flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[#e2cfa2] tiny:text-[10px]">
              <span className="h-px w-12 bg-[#e2cfa2]/70" />
              Dear Pune / Chapter 03
            </p>
            <p className="ui mt-8 text-[15px] uppercase tracking-[0.34em] text-[#f1e7d3] sm:text-[18px] short:mt-5 short:text-[15px] tiny:mt-3 tiny:text-[13px]">
              Codename
            </p>
            <h1 className="mt-3 text-[clamp(54px,8vw,112px)] font-medium leading-[0.92] tracking-[-0.03em] short:mt-2 short:text-[min(8vw,11.5vh)]">
              The Hidden
              <br />
              <em className="font-normal italic text-[#eab184]">Forest.</em>
            </h1>
            <div className="mt-9 flex gap-5 short:mt-5 tiny:mt-4">
              <span className="w-[3px] shrink-0 bg-[#d9b878]" />
              <p className="max-w-[520px] text-[clamp(21px,2.2vw,30px)] leading-[1.25] text-[#f4ead7] short:text-[clamp(18px,3.2vh,26px)]">
                Dear Pune, the letter we never sent has a <em>name.</em>
              </p>
            </div>
            <p className="ui mt-7 max-w-[540px] text-[15px] leading-[1.7] text-[#efe6d4] sm:ml-6 short:mt-4 short:text-[14px] short:leading-[1.6] tiny:mt-3 tiny:text-[13px]">
              You followed the letters. You waited for the one we never sent.
              Here&apos;s your first clue. The full story is still to come.
            </p>
            <div className="ui mt-8 flex items-center gap-4 text-[14px] text-[#ecd9ae] short:mt-4 short:text-[13px] tiny:mt-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#d9b878] text-[15px] short:h-7 short:w-7">
                ❧
              </span>
              Only the codename is revealed. Be first for the next chapter.
            </div>
          </div>

          <div className="ui mt-10 inline-flex w-fit items-center border border-[#cdb06f]/80 bg-[#10241a]/80 px-7 py-4 text-[13px] uppercase tracking-[0.16em] text-[#f4ead7] backdrop-blur-sm sm:px-10 sm:text-[17px] short:mt-5 short:px-8 short:py-3 short:text-[15px] tiny:py-[10px] tiny:text-[13px]">
            The Hidden Forest · Chapter 03
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="poster-serif w-full max-w-[460px] border border-[#e8dcc4] bg-[#f8f4ea] px-7 py-8 text-[#1b261d] shadow-[0_24px_60px_rgba(0,0,0,0.4)] max-[1023px]:mx-auto sm:px-9 short:py-6 tiny:py-4"
        >
          <p className="ui flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-[#7d7465] tiny:text-[9px]">
            <span className="h-px w-7 bg-[#b9ad96]" />
            Dear Pune / Chapter 03
          </p>
          <h2 className="mt-3 text-[clamp(32px,3vw,42px)] leading-[1.02] tracking-[-0.02em] short:mt-2 short:text-[34px] tiny:text-[28px]">
            Get the next
            <br />
            letter first.
          </h2>
          <p className="mt-3 text-[14px] leading-[1.5] text-[#3f4a40] short:mt-2 short:text-[13px] short:leading-[1.4] tiny:hidden">
            Join the first-to-know list for official updates on The Hidden
            Forest.{" "}
            <span className="text-[#6c7268]">The complete reveal is still ahead.</span>
          </p>
          <p className="mt-4 flex items-center gap-3 bg-[#efe2cb] px-4 py-[10px] text-[13px] text-[#3a2f22] short:hidden">
            <span className="text-[15px] text-[#8b5a2b]">❧</span>
            <span>
              Be among the first to hear{" "}
              <span className="text-[#8d4a32]">what follows.</span>
            </span>
          </p>

          <label className={`${labelClass} mt-5 short:mt-4 tiny:mt-3`}>
            Your name
            <input
              required
              value={form.name}
              onChange={update("name")}
              placeholder="Enter your full name"
              className={inputClass}
            />
          </label>

          <label className={`${labelClass} ${fieldGap}`}>
            Mobile number
            <span className="mt-[6px] flex gap-2 short:mt-1">
              <span className="grid h-10 w-16 shrink-0 place-items-center border border-[#e3dccd] bg-[#f1ece2] text-[14px] font-normal tracking-normal text-[#1b261d] short:h-9 short:text-[13px] tiny:h-8">
                +91
              </span>
              <input
                required
                inputMode="numeric"
                value={form.mobile}
                onChange={update("mobile")}
                placeholder="10-digit mobile number"
                aria-label="Mobile number"
                className={`${inputClass} !mt-0 min-w-0 flex-1`}
              />
            </span>
          </label>

          <label className={`${labelClass} ${fieldGap}`}>
            Email{" "}
            <span className="font-normal normal-case tracking-normal">(optional)</span>
            <input
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className={inputClass}
            />
          </label>

          <label className={`flex items-start gap-3 text-[11px] leading-[1.55] text-[#4b4a42] short:text-[10px] short:leading-[1.45] ${fieldGap}`}>
            <input
              required
              type="checkbox"
              checked={form.consent}
              onChange={update("consent")}
              className="mt-[2px] h-4 w-4 shrink-0 accent-[#8d4a32]"
            />
            I agree to receive updates about The Hidden Forest. By submitting, I
            allow the team to contact me via call, SMS or email. I can opt out
            anytime.
          </label>

          <button
            type="submit"
            className="ui mt-5 flex h-12 w-full items-center justify-between bg-[#8d4a32] px-6 text-[13px] font-bold uppercase tracking-[0.16em] text-[#fbf1e3] transition hover:bg-[#a0563a] short:mt-4 short:h-11 tiny:mt-3 tiny:h-10 tiny:text-[12px]"
          >
            Keep me first in line
            <span className="text-[20px] font-normal">→</span>
          </button>
          <p
            className="ui mt-4 flex items-center gap-2 text-[11px] text-[#7d7465] short:mt-3 tiny:mt-2 tiny:text-[10px]"
            role="status"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            {message || "Only campaign updates. Opt out anytime."}
          </p>
        </form>
      </div>
    </section>
  );
}
