import { useState } from "react";
import { useNavigate } from "react-router-dom";
import forest from "../assets/hidden-forest.jpg";
import { submitLead } from "../lib/submitLead";

const initialForm = { name: "", mobile: "", email: "", consent: false };

const inputClass =
  "poster-serif block h-10 w-full border-0 border-b border-[#cfc6b4] bg-transparent px-0 text-[15px] font-normal normal-case tracking-normal text-[#1b261d] outline-none transition placeholder:text-[#b0a898] focus:border-[#8d4a32] short:h-9 short:text-[14px] tiny:h-8";

const labelClass =
  "ui block text-[10px] font-bold uppercase tracking-[0.18em] text-[#5b5346] tiny:text-[9px]";

const fieldGap = "mt-5 short:mt-4 tiny:mt-3";

export default function HiddenForestPoster() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const update = (field) => (event) => {
    const value =
      field === "consent"
        ? event.target.checked
        : field === "mobile"
          ? event.target.value.replace(/\D/g, "").slice(0, 10)
          : event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
  };

  const fail = (text) => {
    setStatus("error");
    setMessage(text);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.name.trim()) return fail("Please enter your name.");
    if (!/^[6-9]\d{9}$/.test(form.mobile)) return fail("Enter a valid 10-digit mobile number.");
    if (!form.email.trim()) return fail("Please enter your email address.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return fail("Enter a valid email address.");
    }
    if (!form.consent) return fail("Please tick the box to agree to be contacted.");

    setStatus("sending");
    setMessage("");
    try {
      await submitLead({
        name: form.name.trim(),
        mobile: form.mobile,
        email: form.email.trim(),
        consent: String(form.consent),
        source: "Dear Pune — The Hidden Forest",
      });
      navigate("/dear-pune/thank-you", { state: { submitted: true, source: "dear-pune" } });
    } catch (error) {
      fail(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative isolate bg-[#071b13]">
      <img
        src={forest}
        alt="A kingfisher flying over lush forest at The Hidden Forest, a nature-inspired residential project in Pune"
        className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100svh-84px)] w-full object-cover object-[center_32%] min-[1024px]:object-[60%_center]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100svh-84px)] w-full bg-[linear-gradient(180deg,rgba(7,27,19,0.12)_0%,rgba(7,27,19,0.08)_42%,rgba(7,27,19,0.72)_78%,#071b13_100%)] min-[1024px]:bg-[linear-gradient(90deg,rgba(4,16,10,0.85)_0%,rgba(4,16,10,0.6)_30%,rgba(4,16,10,0.1)_55%,rgba(4,16,10,0.15)_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 pb-14 sm:px-[6vw] min-[1024px]:h-[calc(100svh-84px)] min-[1024px]:min-h-[460px] min-[1024px]:grid-cols-[minmax(0,1fr)_400px] min-[1024px]:gap-12 min-[1024px]:py-10 xl:grid-cols-[minmax(0,1fr)_430px] short:py-5 tiny:py-3">
        <div className="poster-serif flex min-h-[calc(100svh-84px)] flex-col justify-end pb-6 text-[#f7efe2] min-[1024px]:h-full min-[1024px]:min-h-0 min-[1024px]:justify-between min-[1024px]:pb-0">
          <div className="min-[1024px]:mt-[3vh]">
            <p className="poster-legible ui flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[#e2cfa2] tiny:text-[10px]">
              <span className="h-px w-12 bg-[#e2cfa2]/70" />
              Dear Pune / Chapter 03
            </p>
            <p className="poster-legible ui mt-8 text-[15px] uppercase tracking-[0.34em] text-[#f1e7d3] sm:text-[18px] short:mt-5 short:text-[15px] tiny:mt-3 tiny:text-[13px]">
              Codename
            </p>
            <h1 className="poster-legible-title mt-3 text-[clamp(54px,8vw,112px)] font-medium leading-[0.92] tracking-[-0.03em] short:mt-2 short:text-[min(8vw,11.5vh)]">
              The Hidden
              <br />
              <em className="font-normal italic text-[#eab184]">Forest.</em>
            </h1>
            <div className="mt-9 flex gap-5 short:mt-5 tiny:mt-4">
              <span className="w-[3px] shrink-0 bg-[#d9b878]" />
              <p className="poster-legible max-w-[520px] text-[clamp(21px,2.2vw,30px)] leading-[1.25] text-[#fffaf2] short:text-[clamp(18px,3.2vh,26px)]">
                Dear Pune, the letter we never sent has a <em>name.</em>
              </p>
            </div>
            <p className="poster-legible ui mt-7 max-w-[540px] text-[15px] leading-[1.7] text-[#fffaf2] sm:ml-6 short:mt-4 short:text-[14px] short:leading-[1.6] tiny:mt-3 tiny:text-[13px]">
              You followed the letters. You waited for the one we never sent.
              Here&apos;s your first clue. The full story is still to come.
            </p>
            <div className="poster-legible ui mt-8 flex items-center gap-4 text-[14px] text-[#fff4dc] short:mt-4 short:text-[13px] tiny:mt-3">
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
          id="early-updates"
          onSubmit={onSubmit}
          noValidate
          className="poster-serif w-full max-w-[420px] scroll-mt-[100px] bg-[#f8f4ea] px-7 py-8 text-[#1b261d] shadow-[0_24px_60px_rgba(0,0,0,0.35)] max-[1023px]:mx-auto sm:px-9 sm:py-9 short:py-6 tiny:py-5"
        >
          <h2 className="text-[clamp(30px,2.8vw,38px)] leading-[1.05] tracking-[-0.02em] short:text-[30px] tiny:text-[26px]">
            Get the next
            <br />
            letter first.
          </h2>
          <p className="ui mt-2 text-[13px] text-[#6c7268] short:text-[12px]">
            Be among the first to hear what follows.
          </p>

          <label className={`${labelClass} mt-7 short:mt-5 tiny:mt-4`}>
            Name
            <input
              required
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              placeholder="Your full name"
              className={inputClass}
            />
          </label>

          <label className={`${labelClass} ${fieldGap}`}>
            Mobile
            <span className="flex items-end gap-2 border-b border-[#cfc6b4] transition focus-within:border-[#8d4a32]">
              <span className="pb-[9px] text-[15px] font-normal tracking-normal text-[#6c7268] short:text-[14px]">
                +91
              </span>
              <input
                required
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                value={form.mobile}
                onChange={update("mobile")}
                placeholder="10-digit number"
                aria-label="Mobile number"
                className={`${inputClass} !border-b-0 min-w-0 flex-1`}
              />
            </span>
          </label>

          <label className={`${labelClass} ${fieldGap}`}>
            Email
            <input
              required
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className={inputClass}
            />
          </label>

          <label className="ui mt-6 flex items-start gap-3 text-[11.5px] leading-[1.5] text-[#5b5a52] short:mt-4 short:text-[11px]">
            <input
              required={true}
              type="checkbox"
              checked={form.consent}
              onChange={update("consent")}
              className="mt-[2px] h-4 w-4 shrink-0 accent-[#8d4a32]"
            />
            I agree to be contacted about The Hidden Forest via call, SMS or
            email.
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="ui mt-6 flex h-12 w-full items-center justify-between bg-[#8d4a32] px-6 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#fbf1e3] transition hover:bg-[#a0563a] disabled:cursor-wait disabled:opacity-70 short:mt-5 short:h-11 tiny:mt-4 tiny:h-10"
          >
            {status === "sending" ? "Sending…" : "Keep me first in line"}
            <span className="text-[20px] font-normal">→</span>
          </button>
          <p
            className={`ui mt-3 min-h-[16px] text-[11.5px] ${status === "error" ? "text-[#a3402a]" : status === "sent" ? "text-[#2f6b3f]" : "text-[#8a8478]"}`}
            role="status"
          >
            {message || "Only campaign updates. Opt out anytime."}
          </p>
        </form>
      </div>
    </section>
  );
}
