import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaSwift,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiKotlin,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const technologies = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Swift",
    icon: FaSwift,
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
  },
];

export default function Hero() {
  return (
<section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-8 px-8 pt-36 pb-24 lg:flex-row lg:py-24">      {/* Left */}
      <div className="max-w-xl">
        <p className="mb-4 text-3xl font-bold text-zinc-800">
          Hey, I'm Shaun 👋🏻
        </p>

        <h1 className="leading-none tracking-tight">
          <span className="block text-6xl font-extrabold text-purple-600 md:text-8xl">
            Web & App
          </span>

          <span className="block text-6xl font-extrabold text-zinc-900 md:text-8xl">
            Developer
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-xl leading-relaxed text-zinc-500">
          I'm a React/React Native Developer based in Mumbai, building fast,
          scalable mobile apps and web experiences that users genuinely love.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="#contact"
            className="rounded-xl bg-zinc-900 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Get In Touch
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-zinc-200 bg-white px-7 py-4 text-sm font-semibold text-zinc-900 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            Browse Projects
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-zinc-400">
            Tech I Work With
          </p>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
                >
                  <Icon className="h-5 w-5 text-zinc-700 transition group-hover:text-purple-600" />

                  <span className="text-sm font-medium text-zinc-700 transition group-hover:text-zinc-900">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-center justify-center">
        <div className="flex h-[340px] w-[340px] items-center justify-center rounded-full border border-purple-200 md:h-[420px] md:w-[420px]">
          <div className="relative h-[290px] w-[270px] overflow-hidden rounded-full bg-zinc-200 md:h-[330px] md:w-[330px]">
            <Image
              src="/b.jpg"
              alt="Profile"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center text-zinc-400 transition hover:text-purple-600 md:flex"
      >
        <span className="mb-2 text-xs font-medium uppercase tracking-[0.25em]">
          Scroll
        </span>

        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}