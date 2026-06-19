import Link from "next/link";

export default function ResumeCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14">
      <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
              Resume
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
              Interested in working together?
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-zinc-500">
              Download my resume to learn more about my experience building
              scalable mobile applications, leading teams, and shipping
              products used by thousands of users.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/resume_2026.pdf"
              target="_blank"
              className="rounded-2xl bg-zinc-900 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-purple-600"
            >
              View Resume
            </Link>

            <Link
              href="/resume_2026.pdf"
              download
              className="rounded-2xl border border-zinc-300 px-6 py-4 text-center text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
            >
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}