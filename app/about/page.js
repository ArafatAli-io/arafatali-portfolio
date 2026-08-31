import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Carousel from "@/components/Carousel";
import {
  ArrowRight,
  Binary,
  Github,
  GitPullRequest,
  Layers3,
  Linkedin,
  Mail,
  Network,
  TrendingUp,
  Zap,
} from "lucide-react";

const About = () => {
  return (
    <div className="mx-auto min-h-screen max-w-[90vw]">
      {/* Profile Section */}
      <section>
        <div className="flex flex-wrap items-center justify-evenly">
          <div className="flex flex-col">
            <Avatar className="mt-[13vh] h-50 w-45 cursor-pointer border-2 border-blue-100 drop-shadow-lg drop-shadow-blue-100 duration-800 hover:scale-105 md:my-auto">
              <AvatarImage
                src="https://github.com/ArafatAli-07.png"
                alt="Profile_Pic"
              />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>

            <div className="mt-[3vh] text-center text-xl font-bold">
              {"< Arafat Ali /> "}
            </div>
          </div>

          <div className="mt-[5vh] min-w-[60vw] md:mt-[20vh]">
            <div className="flex justify-between">
              <div className="flex flex-wrap text-4xl font-bold">
                Hello, Myself Arafat Ali
              </div>

              <button className="group h-fit flex items-center gap-2 rounded-2xl border-2 border-blue-500 bg-black/[0.07] px-4 py-2 text-sm font-semibold backdrop-blur-lg transition duration-300 hover:scale-105 sm:text-base">
                Resume
                <ArrowRight className="h-4 w-4 duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="text-center">
              <h1 className="my-2 flex gap-5 text-3xl font-bold text-blue-400">
                Full-Stack Developer
              </h1>

              <p className="mt-2 font-semibold md:w-[50vw]">
                I am a passionate developer who enjoys turning ideas into
                real-world applications. I like solving complex problems,
                learning new technologies, and improving my development skills
                every day.
              </p>

              <p className="mt-2 font-semibold md:w-[50vw]">
                My main goal is to create applications that are not only
                functional but also provide a smooth and enjoyable user
                experience.
              </p>
            </div>

            <div className="mt-[2vh] text-3xl font-bold text-green-400">
              Skilled In
            </div>

            <div className="flex flex-wrap justify-center font-semibold md:mt-[2vh] md:max-w-[30vw]">
              {[
                "MongoDB",
                "Express.js",
                "React",
                "Node.js",
                "Next.js",
                "Tailwind CSS",
                "HTML",
                "CSS",
                "JavaScript",
                "C",
                "C++",
                "Python",
                "DSA",
              ].map((tag) => (
                <span
                  key={tag}
                  className="mx-1 mt-2 rounded-md border-2 border-blue-500 bg-gray-400 px-3 py-2 transition duration-300 hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="mt-[4vh]">
        <h2 className="text-3xl font-bold text-green-400">What I Do</h2>

        <div className="mt-3 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-blue-500 p-2 transition duration-300 hover:scale-105">
            <h3 className="text-center text-xl font-bold text-blue-400">
              Frontend Development
            </h3>

            <p className="mt-2 font-semibold">
              Building responsive and interactive interfaces using React,
              Next.js, JavaScript and Tailwind CSS.
            </p>
          </div>

          <div className="rounded-xl border-2 border-green-500 p-2 transition duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-green-600">
              Backend Development
            </h3>

            <p className="mt-2 font-semibold">
              Creating scalable APIs and backend systems using Node.js,
              Express.js and MongoDB.
            </p>
          </div>

          <div className="rounded-xl border-2 border-purple-500 p-4 transition duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-purple-400">
              Problem Solving
            </h3>

            <p className="mt-2 font-semibold">
              Practicing Data Structures and Algorithms to improve logical
              thinking and problem-solving abilities.
            </p>
          </div>

          <div className="rounded-xl border-2 border-yellow-500 p-4 transition duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-yellow-600">UI & UX</h3>

            <p className="mt-2 font-semibold">
              Creating clean, modern and responsive designs with attention to
              usability and accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section className="mt-[5vh]">
        <h2 className="text-3xl font-bold text-blue-400">
          My Development Journey
        </h2>

        <div className="mt-4 border-l-4 border-blue-500 pl-5">
          <div className="mb-5">
            <h3 className="text-xl font-bold">Full-Stack Development</h3>

            <p className="font-semibold">
              Started building web applications with HTML, CSS and JavaScript
              and gradually moved into the MERN stack.
            </p>
          </div>

          <div className="mb-5">
            <h3 className="text-xl font-bold">React & Next.js</h3>

            <p className="font-semibold">
              Started working with modern React development and Next.js to
              build scalable and high-performance applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Continuous Learning</h3>

            <p className="font-semibold">
              Currently exploring advanced backend architecture, system
              design, APIs, authentication and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Current Goals */}
      <section className="mt-[5vh]">
        <h2 className="text-3xl font-bold text-green-400">Current Goals</h2>

        <ul className="mt-3 space-y-2 font-semibold">
          <li className="flex items-center gap-2">
            <Layers3 size={20} />
            Build production-ready full-stack applications
          </li>

          <li className="flex items-center gap-2">
            <Binary size={20} />
            Improve Data Structures & Algorithms
          </li>

          <li className="flex items-center gap-2">
            <Zap size={20} />
            Learn advanced Next.js concepts
          </li>

          <li className="flex items-center gap-2">
            <Network size={20} />
            Improve system design knowledge
          </li>

          <li className="flex items-center gap-2">
            <GitPullRequest size={20} />
            Contribute to open-source projects
          </li>

          <li className="flex items-center gap-2">
            <TrendingUp size={20} />
            Grow as a professional software developer
          </li>
        </ul>

        {/* Beyond Coding */}
        <div className="mt-[5vh]">
          <h2 className="text-3xl font-bold text-blue-400">
            Beyond Coding
          </h2>

          <p className="mt-2 font-semibold md:w-[80vh]">
            When I am not coding, I enjoy exploring new technologies, learning
            about software development, solving programming problems and
            experimenting with new project ideas.
          </p>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="mt-[5vh] mb-[5vh]">
        <h2 className="text-3xl font-bold text-green-400">Let's Connect</h2>

        <p className="mt-2 font-semibold">
          Interested in working together or discussing a project? Feel free to
          reach out and let's build something amazing.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href="https://github.com/ArafatAli-07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border-2 border-gray-500 px-4 py-2 font-bold transition hover:bg-gray-500/20"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arafat-ali-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border-2 border-blue-500 px-4 py-2 font-bold transition hover:bg-blue-500/20"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="mailto:aliarafat.dev"
            className="flex items-center gap-2 rounded-xl border-2 border-green-500 px-4 py-2 font-bold transition hover:bg-green-500/20"
          >
            <Mail size={20} />
            Email
          </a>
        </div>
      </section>

      {/* Carousel */}
      <div className="mt-10">
        <Carousel />
      </div>
    </div>
  );
};

export default About;
