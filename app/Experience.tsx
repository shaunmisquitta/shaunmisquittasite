import React from "react";

const experience = [
  {
    company: "Feedspot",
    duration: "Dec 2023 — Present",
    role: "React Native Developer → Lead React Native Developer",
    achievements: [
      <>
        Promoted to <strong>Lead React Native Developer</strong> within one
        year.
      </>,
      <>
        Built and scaled <strong>Feedspot Reader</strong> for{" "}
        <strong>iOS and Android</strong> from the ground up.
      </>,
      <>
        Implemented <strong>in-app purchases</strong> and{" "}
        <strong>native modules</strong> using <strong>Swift</strong> and{" "}
        <strong>Kotlin</strong>.
      </>,
      <>
        Mentored <strong>junior developers</strong> and drove{" "}
        <strong>engineering best practices</strong>.
      </>,
      <>
        Optimized <strong>performance</strong> and delivered{" "}
        <strong>engagement-focused features</strong> for{" "}
        <strong>1M+ users</strong>.
      </>,
    ],
  },
  {
    company: "Brainheaters",
    duration: "Nov 2021 — Nov 2023",
    role: "Junior Full Stack Developer → Senior Full Stack Developer",
    achievements: [
      <>
        Built the <strong>Brainheaters mobile app</strong> from scratch using{" "}
        <strong>React Native</strong> and <strong>Node.js</strong>.
      </>,
      <>
        Scaled the platform to <strong>70,000+ students</strong> across India.
      </>,
      <>
        Conducted <strong>100+ technical interviews</strong> and mentored{" "}
        <strong>junior developers</strong>.
      </>,
      <>
        Led <strong>product initiatives</strong> and developed{" "}
        <strong>analytics systems</strong> for{" "}
        <strong>data-driven decisions</strong>.
      </>,
      <>
        Collaborated closely with <strong>stakeholders</strong> to ship{" "}
        <strong>high-impact features</strong>.
      </>,
    ],
  },
  {
    company: "HyperFabs",
    duration: "Jan 2024 — Dec 2024",
    role: "Founder & Developer",
    achievements: [
      <>
        Founded and engineered an{" "}
        <strong>online manufacturing platform</strong>.
      </>,
      <>
        Built <strong>instant quoting</strong>,{" "}
        <strong>CAD visualization</strong>, and{" "}
        <strong>automated workflows</strong>.
      </>,
      <>
        Delivered <strong>laser cutting</strong>, <strong>CNC</strong>, and{" "}
        <strong>3D printing solutions</strong> across India.
      </>,
      <>
        Managed both <strong>product development</strong> and{" "}
        <strong>business operations</strong>.
      </>,
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-8 py-20 scroll-mt-32"
    >
      <div>
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
          5+ Years
        </p>

        <h2 className="text-5xl font-extrabold tracking-tight text-zinc-900 md:text-6xl">
          Experience
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
          Building mobile products, leading teams, and shipping software used
          by millions of users.
        </p>

        <div className="mt-14 border-l border-zinc-200 pl-8 space-y-14">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-purple-600" />

              {/* Duration */}
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple-600">
                {job.duration}
              </p>

              {/* Company */}
              <h3 className="mt-2 text-3xl font-bold text-zinc-900">
                {job.company}
              </h3>

              {/* Role */}
              <p className="mt-2 text-lg font-medium text-zinc-700">
                {job.role}
              </p>

              {/* Achievements */}
              <ul className="mt-6 max-w-3xl space-y-4 text-zinc-700">
                {job.achievements.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 leading-relaxed [&_strong]:font-semibold [&_strong]:text-zinc-900"
                  >
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
  );
}

export default Experience;