import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  // Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl scroll-mt-32 px-8 py-20"
    >
      <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col p-10 md:p-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
              Contact
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
              Let's build something great together.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
              Whether you're hiring for a full-time role, contract work,
              consulting, or simply want to discuss an opportunity, I'd love
              to hear from you.
            </p>

            <div className="mt-10 space-y-5">
              <Link
                href="mailto:shaunmisquitta75@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-zinc-200 p-5 transition hover:border-purple-300 hover:bg-purple-50"
              >
                <Mail className="h-5 w-5 text-purple-600" />

                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-semibold text-zinc-900">
                    shaunmisquitta75@gmail.com
                  </p>
                </div>
              </Link>

              <Link
                href="tel:+917021409568"
                className="flex items-center gap-4 rounded-2xl border border-zinc-200 p-5 transition hover:border-purple-300 hover:bg-purple-50"
              >
                <Phone className="h-5 w-5 text-purple-600" />

                <div>
                  <p className="text-sm text-zinc-500">Mobile</p>
                  <p className="font-semibold text-zinc-900">
                    +91 7021409568
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 p-5">
                <MapPin className="h-5 w-5 text-purple-600" />

                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="font-semibold text-zinc-900">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn (uncomment if needed) */}
            {/*
            <div className="mt-10">
              <p className="mb-4 text-sm font-medium text-zinc-500">
                Connect with me
              </p>

              <Link
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-2xl border border-zinc-200 px-5 py-4 transition hover:border-purple-300 hover:bg-purple-50"
              >
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />

                <span className="font-medium text-zinc-900">
                  LinkedIn Profile
                </span>
              </Link>
            </div>
            */}
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center bg-zinc-900 p-10 text-white md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Resume
            </p>

            <h3 className="mt-4 text-4xl font-extrabold tracking-tight">
              Interested in my work?
            </h3>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
              Download my latest resume to explore my professional
              experience, technical expertise, achievements, and the
              products I've helped build and scale.
            </p>

            <div className="mt-10 rounded-3xl border border-zinc-700 bg-white/5 p-8 backdrop-blur">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-extrabold text-white">
                    5+
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Years of Experience
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-white">
                    1M+
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Users Reached
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-white">
                    70K+
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Students Served
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-white">
                    0→1
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Products Built
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/resume_2026.pdf"
                  target="_blank"
                  className="rounded-2xl bg-white px-6 py-4 text-center text-sm font-semibold text-zinc-900 transition hover:scale-[1.02]"
                >
                  View Resume
                </Link>

                <Link
                  href="/resume_2026.pdf"
                  download
                  className="rounded-2xl border border-zinc-600 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-purple-400"
                >
                  Download PDF
                </Link>
              </div>
            </div>

            <Link
              href="mailto:shaunmisquitta75@gmail.com"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-purple-600 px-6 py-4 font-semibold text-white transition hover:bg-purple-700 hover:gap-3"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}