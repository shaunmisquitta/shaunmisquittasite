import React from 'react'
import Image from "next/image";
const experience = [
  {
    company: "Feedspot",
    duration: "Dec 2023 — Present",
    role: "React Native Developer → Lead React Native Developer",
    achievements: [
      "Promoted to Lead React Native Developer within one year.",
      "Built and scaled Feedspot Reader for iOS and Android from the ground up.",
      "Implemented in-app purchases and native modules using Swift and Kotlin.",
      "Mentored junior developers and drove engineering best practices.",
      "Optimized performance and delivered engagement-focused features for 1M+ users.",
    ],
  },
  {
    company: "Brainheaters",
    duration: "Nov 2021 — Nov 2023",
    role: "Junior Full Stack Developer → Senior Full Stack Developer",
    achievements: [
      "Built the Brainheaters mobile app from scratch using React Native and Node.js.",
      "Scaled the platform to 70,000+ students across India.",
      "Conducted 100+ technical interviews and mentored junior developers.",
      "Led product initiatives and developed analytics systems for data-driven decisions.",
      "Collaborated closely with stakeholders to ship high-impact features.",
    ],
  },
  {
    company: "HyperFabs",
    duration: "Jan 2024 — Dec 2024",
    role: "Founder & Developer",
    achievements: [
      "Founded and engineered an online manufacturing platform.",
      "Built instant quoting, CAD visualization, and automated workflows.",
      "Delivered laser cutting, CNC, and 3D printing solutions across India.",
      "Managed both product development and business operations.",
    ],
  },
];
function Experience() {

  return (
  <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-5"
    >
   
      {/* Experience */}
      <div className="mt-10">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
          5+ Years
        </p>

        <h3 className="text-4xl font-bold tracking-tight text-zinc-900">
          Experience
        </h3>

     <div className="mt-12 space-y-12 border-l border-zinc-200 pl-8">
  {experience.map((job) => (
    <div key={job.company} className="relative">
      <div className="absolute -left-[41px] top-0.5 h-4 w-4 rounded-full bg-purple-600" />

      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple-600">
        {job.duration}
      </p>

      <h4 className="mt-2 text-2xl font-bold text-zinc-900">
        {job.company}
      </h4>

      <p className="mt-1 font-medium text-zinc-700">
        {job.role}
      </p>

      <ul className="mt-5 max-w-3xl space-y-3 text-zinc-700">
        {job.achievements.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}

export default Experience
