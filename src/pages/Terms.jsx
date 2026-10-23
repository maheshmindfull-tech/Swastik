import useSeo from "../hooks/useSeo";
import { termsSeo } from "../seo";

const sections = [
  {
    "title": "Swastik Realty Group",
    "points": [
      "is built on a simple yet powerful belief—real estate is not just about structures, but about stories.",
      "For over 26 years, we have delivered thoughtfully designed residential and commercial spaces across Pune, guided by trust, transparency, and togetherness. What makes Swastik different is not just what we build, but how and why we build.",
      "Every Swastik project reflects the lives, aspirations, and emotions of the people who inhabit it. From families finding comfort to businesses finding growth, our developments are designed to support meaningful living and long-term value.",
      "We don't just shape skylines—we touch lives, nurture relationships, and turn aspirations into enduring legacies. It is built on a simple yet powerful belief—real estate is not just about structures, but about stories.",
      "For over 26 years, we have delivered thoughtfully designed residential and commercial spaces across Pune, guided by trust, transparency, and togetherness. What makes Swastik different is not just what we build, but how and why we build.",
      "Every Swastik project reflects the lives, aspirations, and emotions of the people who inhabit it. From families finding comfort to businesses finding growth, our developments are designed to support meaningful living and long-term value.",
      "We don't just shape skylines—we touch lives, nurture relationships, and turn aspirations into enduring legacies.",
      "Swastik Realty Group is built on a simple yet powerful belief—real estate is not just about structures, but about stories. For over 26 years, we have delivered thoughtfully designed residential and commercial spaces across Pune, guided by trust, transparency, and togetherness. What makes Swastik different is not just what we build, but how and why we build.",
      "Every Swastik project reflects the lives, aspirations, and emotions of the people who inhabit it. From families finding comfort to businesses finding growth, our developments are designed to support meaningful living and long-term value. We don’t just shape skylines—we touch lives, nurture relationships, and turn aspirations into enduring legacies.",
      "For over 26 years, we have delivered thoughtfully designed residential and commercial spaces across Pune, guided by trust, transparency, and togetherness. What makes Swastik different is not just what we build, but how and why we build.",
      "Every Swastik project reflects the lives, aspirations, and emotions of the people who inhabit it. From families finding comfort to businesses finding growth, our developments are designed to support meaningful living and long-term value.",
      "We don’t just shape skylines—we touch lives, nurture relationships, and turn aspirations into enduring legacies. It is built on a simple yet powerful belief—real estate is not just about structures, but about stories.",
      "For over 26 years, we have delivered thoughtfully designed residential and commercial spaces across Pune, guided by trust, transparency, and togetherness. What makes Swastik different is not just what we build, but how and why we build.",
      "Every Swastik project reflects the lives, aspirations, and emotions of the people who inhabit it. From families finding comfort to businesses finding growth, our developments are designed to support meaningful living and long-term value.",
      "We don’t just shape skylines—we touch lives, nurture relationships, and turn aspirations into enduring legacies.",
      "Swastik Realty Group is built on a simple yet powerful belief—real estate is not just about structures, but about stories. For over 26 years, we have delivered thoughtfully designed residential and commercial spaces across Pune, guided by trust, transparency, and togetherness. What makes Swastik different is not just what we build, but how and why we build.",
      "Every Swastik project reflects the lives, aspirations, and emotions of the people who inhabit it. From families finding comfort to businesses finding growth, our developments are designed to support meaningful living and long-term value. We don’t just shape skylines—we touch lives, nurture relationships, and turn aspirations into enduring legacies."
    ]
  }
];

export default function TermsandConditions() {
  useSeo(termsSeo);

  return (
    <div>
      <div className="mt-13 flex flex-col gap-4 bg-[#6A2915] px-6 py-14 text-white sm:mt-14 md:mt-15 md:px-20 lg:mt-22 xl:mt-15">
        <h1 className="text-4xl">Terms and Conditions</h1>
        <div className="h-1 w-60 rounded-full bg-[#D9D9D9]" />
        <p>Build your future with Swastik</p>
      </div>
      <div className="min-h-screen bg-[#f4f1ea]">
        <div className="flex flex-col gap-4 px-6 py-14 md:px-20">
          {sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="mb-3 text-xl font-semibold text-gray-800">{section.title}</h2>
              <ul className="list-disc space-y-2 pl-7 text-lg leading-relaxed text-gray-700">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
