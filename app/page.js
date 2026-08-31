import { Brain, Code, Code2, Database, PanelsTopLeft, Rocket, Server,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stats = [
    { icon: <Code2 />, number: "10+", label: "Projects Built" },
    { icon: <Rocket />, number: "8+", label: "Live Projects" },
    { icon: <Code />, number: "5+", label: "Technologies" },
    { icon: <Database />, number: "∞", label: "Curiosity to Learn" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mt-35 flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="mx-auto flex flex-col items-center justify-between gap-2 text-center">
            <h1 className="mb-2 text-5xl font-bold sm:text-4xl">
              Hey, I'm Arafat Ali
            </h1>

            <p className="font-semibold">
              <span className="text-3xl font-bold text-blue-500">
                Full-stack developer{" "}
              </span>
              (React, Next.js, Node.js, MongoDB, Tailwind)
            </p>

            <p>
              I’m a passionate Web Developer who turns ideas into modern,
              responsive, and user-friendly digital experiences.
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              <button className="cursor-pointer rounded-2xl border-2 border-blue-500 bg-black/7 px-3 py-2 font-semibold backdrop-blur-lg transition-colors duration-200 hover:bg-white/10">
                View Resume
              </button>

              <button className="cursor-pointer rounded-2xl border-2 border-blue-500 bg-black/7 px-3 py-2 font-semibold backdrop-blur-lg transition-colors duration-200 hover:bg-white/10">
                View Project
              </button>
            </div>

            <div className="mt-3 text-center text-2xl font-bold text-green-400">
              Skilled In the MERN stack
            </div>

            <div className="flex flex-wrap justify-center gap-2 font-semibold">
              {["MongoDB", "Express.js", "React", "Node.js", "Next.js"].map(
                (tag) => (
                  <div
                    key={tag}
                    className="rounded-md border-2 border-blue-500 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 px-3 py-2"
                  >
                    {tag}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="animate-[heroEnter_1.5s_ease-out_forwards]">
              <Image
                src="/avator.png"
                alt="Hero image"
                width={300}
                height={300}
                priority
                className="rounded-full drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-transform duration-500 animate-[float_4s_ease-in-out_1.5s_infinite] hover:rotate-3 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="flex flex-wrap justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="m-2 min-h-[12vh] min-w-[25vh] rounded-2xl border-2 border-blue-500/40 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 px-3 py-5 font-serif font-semibold transition hover:-translate-y-1 hover:border-blue-500"
            >
              <div>{item.icon}</div>
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section className="mx-auto mt-10 max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <p className="font-serif text-3xl font-semibold text-blue-500">
            WHAT I DO
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-green-400 sm:text-4xl">
            Building things that solve problems
          </h2>

          <p className="mx-auto mt-4 max-w-2xl">
            I combine frontend development, backend engineering and problem
            solving to create complete web applications.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-2xl border-2 border-blue-500/40 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 p-7 transition hover:-translate-y-1 hover:border-blue-500">
            <div className="mb-5 text-3xl">
              <PanelsTopLeft />
            </div>

            <h3 className="text-xl font-bold">Frontend Development</h3>

            <p className="mt-3 leading-7">
              Creating responsive and interactive interfaces with React,
              Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border-2 border-blue-500/40 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 p-7 transition hover:-translate-y-1 hover:border-blue-500">
            <div className="mb-5 text-3xl">
              <Server />
            </div>

            <h3 className="text-xl font-bold">Backend Development</h3>

            <p className="mt-3 leading-7">
              Building APIs, authentication systems and server-side
              applications with Node.js, Express and MongoDB.
            </p>
          </div>

          {/* Problem Solving */}
          <div className="rounded-2xl border-2 border-blue-500/40 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 p-7 transition hover:-translate-y-1 hover:border-blue-500">
            <div className="mb-5 text-3xl">
              <Brain />
            </div>

            <h3 className="text-xl font-bold">Problem Solving</h3>

            <p className="mt-3 leading-7">
              Strong foundation in C/C++, Python and Data Structures &
              Algorithms with a focus on writing efficient solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 p-10 text-center">
          <p className="font-serif text-2xl font-semibold text-green-600">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Let's build something amazing together.
          </h2>

          <p className="mx-auto mt-4 max-w-xl">
            I'm always interested in learning, building new projects and
            collaborating with other developers.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
