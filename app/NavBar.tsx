import React from "react";
import Image from "next/image";

function NavBar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-white/80 px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl">
        {/* Logo */}
        <a href="#" className="leading-none">
          <div className="text-lg font-bold tracking-tight text-zinc-900">
            Shaun
          </div>

          <div className="-mt-1 text-lg font-bold tracking-tight text-zinc-900">
            Misquitta
            <span className="text-violet-600">.</span>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-semibold text-violet-600 transition"
          >
            Home
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-900"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-900"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-900"
          >
            Contact
          </a>
        </div>

        {/* Avatar */}
        <button className="group flex h-12 w-12 items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="overflow-hidden rounded-full border-[1px] border-gray-500">
        <Image
            src="/b.jpg"
            alt="Shaun"
            width={48}
            height={48}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
          />
          </div>
         
        </button>
      </nav>
    </header>
  );
}

export default NavBar;