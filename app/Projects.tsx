import React from 'react'
import Image from "next/image";

const projectsData = [
  {
    title: "Feedspot Reader - iOS, Android",
    description:
      "Led development of the Feedspot mobile experience from 0 -> 1 with in-app purchases, native modules and performance optimizations for 1M+ users.",
    image: "/feedspot_app.png",
    tech: ["React Native", "React", "Javascript", 'Swift'],
    featured: true,
  },
  {
    title: "Hyperfabs - Web",
    description:
      "Online manufacturing platform with instant quotations for laser cutting, CNC and 3D printing.",
    image: "/hyperfabs_home.png",
    tech: ["Next.js", "Node.js", "THREE.js"],
  },
  {
    title: "Brainheaters App - iOS, Android",
    description:
      "Built from scratch and scaled to over 70,000 students E-learning app for engineering students in India.",
    image: "/bh_artwork.png",
    tech: ["React Native", "Firebase"],
  },
];


export default function Projects() {

  return (
  <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-20 scroll-mt-32"
    >
      <div className="max-w-2xl ">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
          Selected Work
        </p>

        <h2 className="text-5xl font-extrabold tracking-tight text-zinc-900 md:text-6xl">
          Projects & Experience
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-zinc-500">
          Over the years I've built mobile apps, manufacturing
          platforms, and software products used by thousands of users.
        </p>
      </div>

      {/* Featured Project */}
      <div className="mt-10 overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[350px]">
            <Image
              src={projectsData[0].image}
              alt={projectsData[0].title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-10 lg:p-14">
            <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
              Featured Project
            </span>

            <h3 className="text-4xl font-bold text-zinc-900">
              {projectsData[0].title}
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-zinc-500">
              {projectsData[0].description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {projectsData[0].tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <button className="mt-10 w-fit rounded-xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-purple-600">
              View Case Study
            </button>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {projectsData.slice(1).map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-zinc-900">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-500">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


