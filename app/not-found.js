
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  SearchX,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate z-50 flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#070812] px-5 py-16 text-white sm:px-8">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-180px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

        <div className="absolute bottom-[-160px] right-[-100px] h-[350px] w-[350px] rounded-full bg-violet-600/15 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <section className="w-full max-w-3xl">
       
        <div className="mb-12 flex items-center justify-between sm:mb-16">
          <Link
            href="/"
            className="text-lg font-bold tracking-[0.16em] transition-colors duration-300 hover:text-indigo-300 sm:text-xl"
          >
            PORTFOLIO
            <span className="text-indigo-400">.</span>
          </Link>

          <span className="rounded-full border border-red-400/20 bg-red-400/[0.07] px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-red-300 sm:text-xs">
            ERROR 404
          </span>
        </div>

        
        <div className="group relative overflow-hidden rounded-3xl border border-white/[0.12] bg-white/[0.045] px-6 py-10 text-center shadow-[0_20px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/[0.065] hover:shadow-[0_20px_100px_rgba(99,102,241,0.12)] sm:px-12 sm:py-14">
          
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" />

          
          <div className="mx-auto mb-7 flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border border-indigo-300/20 bg-indigo-400/[0.08] p-2 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-indigo-400/[0.15] sm:h-32 sm:w-32">
            <video
              src="/404page.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Animated page not found icon"
              className="h-full w-full object-contain"
            />
          </div>

          
          <div className="relative mx-auto mb-5 w-fit">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 text-8xl font-black tracking-tighter text-indigo-500/20 blur-xl transition-all duration-500 group-hover:text-indigo-400/40 sm:text-9xl"
            >
              404
            </span>

            <h1 className="relative bg-gradient-to-b from-white via-indigo-100 to-indigo-400 bg-clip-text text-8xl font-black tracking-[-0.08em] text-transparent sm:text-9xl">
              404
            </h1>
          </div>

          
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-300 sm:text-sm">
            Page not found
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            This page doesn&apos;t exist.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            The link may be broken, the address may be incorrect,
            or the page may have been moved to another location.
          </p>

          
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group/button inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-400 hover:shadow-xl hover:shadow-indigo-500/20 active:translate-y-0 sm:w-auto"
            >
              <Home size={17} />
              Back to homepage

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
              />
            </Link>

            <Link
              href="/"
              className="group/secondary inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] hover:text-white active:translate-y-0 sm:w-auto"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover/secondary:-translate-x-1"
              />
              Return home
            </Link>
          </div>

          
          <div className="mt-10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
            <SearchX size={14} />
            <span>Check the URL or return home</span>
          </div>
        </div>
      </section>
    </main>
  );
}
