import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Code2, Layers3, Check,} from "lucide-react";
import { projects } from "./projectsData";




export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section className="my-16 text-center">
          <p className="font-serif text-2xl font-semibold text-blue-500">
            MY WORK
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            Projects I&apos;ve Built
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7">
            A collection of projects I&apos;ve built while learning and
            improving my frontend and full-stack development skills.
            Each project helped me understand new technologies and solve
            practical problems.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 p-6 text-center">
            <Layers3 className="mx-auto mb-3 text-blue-400" size={28} />
            <h2 className="text-3xl font-bold">4+</h2>
            <p className="mt-1 font-semibold">Projects Built</p>
          </div>

          <div className="rounded-2xl border-2 border-green-500/30 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-green-600/10 p-6 text-center">
            <Code2 className="mx-auto mb-3 text-green-400" size={28} />
            <h2 className="text-3xl font-bold">3+</h2>
            <p className="mt-1 font-semibold">Core Technologies</p>
          </div>

          <div className="rounded-2xl border-2 border-purple-500/30 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 p-6 text-center">
            <Github className="mx-auto mb-3 text-purple-400" size={28} />
            <h2 className="text-3xl font-bold">Open Source</h2>
            <p className="mt-1 font-semibold">Code on GitHub</p>
          </div>
        </section>

        {/* Featured Project */}
        {featuredProject && (
          <section className="mb-20">
            <div className="mb-6">
              <p className="font-serif text-2xl font-bold text-green-00">
                FEATURED PROJECT
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border-2 border-green-500/40 bg-gradient-to-br from-blue-400 via-blue-600/10 to-purple-600/10 p-8 transition duration-300 hover:border-green-500">
              <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">

                {/* Project visual */} 
                <div className="flex min-h-[300px] items-center justify-center rounded-2xl border-2 border-green-500 bg-purple/20">
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-300 text-slate-500">
                      {featuredProject.icon}
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
                      Featured Work
                    </p>

                    <h3 className="mt-3 text-3xl font-bold ">
                      {featuredProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="rounded-full border-2 border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-600">
                    {featuredProject.category}
                  </span>

                  <h2 className="mt-5 text-3xl font-bold">
                    {featuredProject.title}
                  </h2>

                  <p className="mt-4 leading-7">
                    {featuredProject.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="font-bold text-green-600">
                      Key Features
                    </h3>

                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {featuredProject.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm font-medium "
                        >
                           {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border-2 border-blue-500/40 bg-blue-500/10 px-3 py-1 text-sm font-semibold "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border-2 border-gray-500 px-5 py-3 font-semibold transition hover:bg-gray-500/20"
                    >
                      <Github size={18} />
                      Source Code
                    </Link>

                    {featuredProject.live && (
                      <Link
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold transition hover:bg-green-500"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Projects */}
        <section>
          <div className="mb-8">
            <p className="font-serif text-2xl font-bold text-blue-400">
              MORE PROJECTS
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Things I&apos;ve Built
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => {
              

              return (
                <article
                  key={project.title}
                  className={`group rounded-2xl border-2 hover:border-blue-500 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-600/10 p-7 transition duration-300 hover:-translate-y-2 `}
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-300 text-blue-500 `}
                  >
                    {project.icon}
                  </div>

                  <span
                    className={`rounded-full border-2 px-3 py-1 text-xs font-semibold border-green-500/40 bg-green-500/10 text-green-600 `}
                  >
                    {project.category}
                  </span>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      className={`shrink-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 `}
                    />
                  </div>

                  <p className="mt-4 leading-7 ">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <ul className="space-y-2 text-sm ">
                      {project.features.slice(0, 4).map((feature) => (
                        <li className="flex gap-1 items-center" key={feature}><Check size={13} /> {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-blue-500/30 bg-blue-500/5 px-2.5 py-1 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-gray-500 px-4 py-2.5 text-sm font-semibold transition hover:bg-gray-500/20"
                    >
                      <Github size={17} />
                      GitHub
                    </Link>

                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold transition hover:bg-green-500"
                      >
                        <ExternalLink size={17} />
                        Live
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="mt-20">
          <div className="rounded-3xl border-2 border-blue-500/30 hover:border-blue-500 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 p-10 text-center">
            <Github className="mx-auto mb-5 text-blue-600" size={40} />

            <h2 className="text-3xl font-bold">
              Want to see more of my code?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7">
              Check out my GitHub profile to explore my repositories,
              experiments and future projects.
            </p>

            <Link
              href="https://github.com/ArafatAli-io"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
            >
              Visit GitHub
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}