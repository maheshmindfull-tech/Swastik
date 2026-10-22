import { useState } from "react";
import locationIcon from "../assets/contact/location.png";
import mailIcon from "../assets/contact/mail.png";
import phoneIcon from "../assets/contact/phone.png";
import sendIcon from "../assets/contact/send.png";
import timeIcon from "../assets/contact/time.png";
import useSeo from "../hooks/useSeo";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const fieldClass = "w-full bg-[#F5F1ED] p-2 text-sm text-[#260F01] sm:p-3";

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");

  useSeo({
    title: "Contact Us | Swastik Realty Group",
    description:
      "We're here to help you find your dream property. Visit, call, or message Swastik Realty Group in Pimpri-Chinchwad.",
    path: "/contact",
  });

  const update = (event) => {
    const { name, value } = event.target;
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ form: "contact", ...form }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success !== true) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-offset">
      <section className="bg-[#6A2915] px-4 py-6 text-white sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-16 lg:py-12 xl:py-16">
        <div className="mx-auto max-w-6xl lg:ml-12 xl:ml-20">
          <h2 className="mb-3 text-2xl font-semibold leading-tight sm:mb-4 sm:text-3xl md:text-4xl">
            Get in <span className="font-semibold">Touch</span>
          </h2>
          <div className="mb-3 h-1 w-20 rounded-full bg-[#D9D9D9] sm:mb-4 sm:w-28 md:w-36 lg:w-44" />
          <p className="max-w-md text-sm text-gray-200 sm:text-base md:text-lg lg:text-xl">
            We're here to help you find your dream property
          </p>
        </div>
      </section>

      <section className="mt-10 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-4 shadow-lg sm:p-6 md:p-8 lg:col-span-2">
              <h3 className="mb-4 text-2xl font-light text-[#2B1E14] sm:mb-6 sm:text-3xl md:text-4xl lg:text-3xl">
                Send us a <span className="font-bold">Message</span>
              </h3>
              <form className="space-y-4 sm:space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#5C4A3A] sm:mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={update}
                      placeholder="Name"
                      required
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#5C4A3A] sm:mb-2" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={update}
                      placeholder="Surname"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#5C4A3A] sm:mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="@email.com"
                      required
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#5C4A3A] sm:mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      placeholder="+91 98765 43210"
                      maxLength={10}
                      inputMode="numeric"
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-[#5C4A3A] sm:mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    placeholder="How can we help?"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-[#5C4A3A] sm:mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={update}
                    required
                    placeholder="Tell us more about what you're looking for..."
                    className={fieldClass}
                  />
                </div>
                {status === "success" && (
                  <p className="text-center text-sm text-green-600">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-center text-sm text-red-500">
                    Something went wrong. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#260F01] py-3 text-sm font-light text-white transition-colors hover:bg-[#4A2C17] disabled:cursor-wait"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      {" "}
                      Send Message <img src={sendIcon} className="h-4" alt="" />{" "}
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="w-full space-y-4 rounded-xl">
              <InfoCard icon={locationIcon} title="Visit Our Office">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Swastik+Realty+Group+KWT+Chinchwad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#CB4A26]"
                >
                  Swastik Realty Group, T-3, 4th Floor, KWT, Office No. 406 & 407, Old Mumbai -
                  Pune Hwy, Pimpri-Chinchwad, Maharashtra 411018
                </a>
              </InfoCard>
              <InfoCard icon={phoneIcon} title="Call Us">
                <div className="flex flex-col">
                  <a href="tel:+9102066662246" className="hover:text-[#CB4A26]">
                    Head Office: 02066662246
                  </a>
                  <div className="flex">
                    <a href="tel:+917770004505" className="hover:text-[#CB4A26]">
                      Sales: +91 7770004505 /{" "}
                    </a>
                    <a href="tel:+917770004044" className="hover:text-[#CB4A26]">
                      7770004044
                    </a>
                  </div>
                </div>
              </InfoCard>
              <InfoCard icon={mailIcon} title="Email Us">
                <div className="flex flex-col">
                  <a href="mailto:admin@srgpune.in" className="hover:text-[#CB4A26]">
                    Head Office : admin@srgpune.in
                  </a>
                  <a href="mailto:sales@srgpune.in" className="hover:text-[#CB4A26]">
                    Sales: sales@srgpune.in
                  </a>
                  <a href="mailto:hr@srgpune.in" className="hover:text-[#CB4A26]">
                    HR : hr@srgpune.in
                  </a>
                </div>
              </InfoCard>
              <InfoCard icon={timeIcon} title="Business Hours">
                <p className="whitespace-pre-line">
                  {"Monday - Saturday \n 9:30 AM - 6:00 PM"}
                </p>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F4] px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <a
            href="https://www.google.com/maps/place/SWASTIK+REALTY+GROUP/@18.6353277,73.7989228,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9e666efa4fb:0x385eb81a100fc8a1!8m2!3d18.6353277!4d73.7989228!16s%2Fg%2F1jky6y7xk"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer overflow-hidden rounded-2xl shadow-lg"
          >
            <iframe
              title="Swastik Realty Group"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4623!2d73.7963479!3d18.6353277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e666efa4fb%3A0x385eb81a100fc8a1!2sSWASTIK%20REALTY%20GROUP!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, display: "block", pointerEvents: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="flex w-full items-start gap-4 rounded-xl bg-white p-6 shadow-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F1ECE7]">
        <img src={icon} className="h-6 w-6 object-contain" alt="" />
      </div>
      <div>
        <h4 className="mb-1 text-base font-semibold text-[#2B1E14]">{title}</h4>
        <div className="text-sm leading-5 text-[#8B7E74]/80">{children}</div>
      </div>
    </div>
  );
}
