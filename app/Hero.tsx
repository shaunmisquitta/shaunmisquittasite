import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-7xl min-h-screen flex-col items-center justify-between gap-8 px-8 py-24 pr-12 lg:flex-row lg:py-24">
      {/* Left */}
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

        <div className="mt-10 flex flex-wrap gap-5">
          <button className="rounded-xl bg-zinc-900 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            Get In Touch
          </button>

          <button className="rounded-xl border border-zinc-200 bg-white px-7 py-4 text-sm font-semibold text-zinc-900 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            Browse Projects
          </button>
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