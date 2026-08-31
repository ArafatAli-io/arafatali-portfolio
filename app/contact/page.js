"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle, Send, Sparkles, User,} from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(() => {
        form.current.reset();
        toast.success("Message sent successfully!", {
          icon: <Info />,
          className: "custom-toast",
        });
      })
      .catch(() => {
        toast.error("Failed to send message.", {
          icon: <Info />,
          className: "custom-toast",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const contactMethods = [
    {
      title: "Email Me",
      description: "Have a project, opportunity or question? Send me an email.",
      value: "Email",
      href: "mailto:aliarafat.dev@gmail.com",
      icon: <Mail size={24} />,
    },
    {
      title: "GitHub",
      description: "Explore my projects, experiments and source code.",
      value: "ArafatAli-07",
      href: "https://github.com/ArafatAli-07",
      icon: <Github size={24} />,
    },
    {
      title: "LinkedIn",
      description: "Connect with me and let's grow our professional network.",
      value: "Arafat Ali",
      href: "https://www.linkedin.com/in/arafat-ali-dev",
      icon: <Linkedin size={24} />,
    },
  ];

  const card =
    "rounded-3xl border-2 border-white bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-green-600/10 p-8 hover:border-blue-500";

  const input =
    "w-full rounded-xl border-2 border-blue-500 bg-white px-4 py-3 text-black outline-none placeholder:text-slate-700 focus:ring-4 focus:ring-blue-500/10";

  return (
    <main className="min-h-screen px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <section className="mb-16 text-center">
          <div className="mx-auto my-10 inline-flex items-center gap-2 rounded-full border-2 border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xl font-semibold text-blue-600">
            <Sparkles size={16} /> Get In Touch <Sparkles size={16} />
          </div>

          <h1 className="font-serif text-4xl font-bold sm:text-5xl">
            Let's Build Something <span className="text-blue-500">Amazing</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-xl leading-7">
            Have a project idea, internship opportunity, or just want to discuss
            web development? I'd love to hear from you.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="mb-16">
          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((method) => {
              const external = !method.href.startsWith("mailto:");

              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border-2 border-white bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                      {method.icon}
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <h2 className="mt-5 text-xl font-bold">{method.title}</h2>
                  <p className="mt-2 text-sm leading-6">{method.description}</p>
                  <p className="mt-4 text-sm font-semibold text-green-600">
                    {method.value}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* Main Contact Area */}
        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <div className={card}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
              <MessageCircle size={28} />
            </div>

            <h2 className="mt-6 text-3xl font-bold">Let's talk</h2>

            <p className="mt-4 leading-7">
              I'm open to internships, freelance opportunities, collaborations
              and interesting web development projects.
            </p>

            <div className="mt-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10 p-5">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                <span className="font-bold text-blue-400">
                  Available for opportunities
                </span>
              </div>

              <p className="mt-3 text-sm leading-6">
                Feel free to reach out if you have a project, internship or
                collaboration in mind.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <MapPin size={21} className="text-blue-600" />
              <div>
                <p className="text-sm font-bold">Based in India</p>
                <p className="text-sm">Available for remote opportunities</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wider">
                Find me online
              </p>

              <div className="mt-4 flex gap-3">
                {[
                  {
                    href: "https://github.com/ArafatAli-07",
                    icon: <Github size={21} />,
                  },
                  {
                    href: "https://www.linkedin.com/in/arafat-ali-dev",
                    icon: <Linkedin size={21} />,
                  },
                  {
                    href: "mailto:aliarafat.dev@gmail.com",
                    icon: <Mail size={21} />,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={
                      item.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-blue-500/10 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={card}>
            <div className="mb-7">
              <p className="text-xl font-bold uppercase tracking-[0.2em] text-blue-600">
                Contact Form
              </p>

              <h2 className="mt-2 text-3xl font-bold">Send me a message</h2>
              <p className="mt-2">
                Have an idea or opportunity? I’d love to hear from you.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4 ">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-bold mb-2">
                    <User size={18} />
                    Name
                  </label>
                  <input
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full p-3 rounded-xl bg-white border  outline-none"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 font-bold mb-2">
                    <Mail size={18} />
                    Email
                  </label>
                  <input
                    name="user_email"
                    required
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 rounded-xl bg-white border  outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 font-bold mb-2">
                  <MessageCircle size={18} />
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full h-36 p-3 rounded-xl bg-white border outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="  flex items-center bg-blue-400  justify-center gap-3 px-6 py-3.5 rounded-2xl  border border-gray-300 cursor-pointer hover:scale-[1.02] transition-all duration-300 mx-auto w-full"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 duration-300 flex justify-center items-center">
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <Send className="hover:scale-105 duration-300 pr-0.5" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                  </div>
                </div>
              </button>
            </form>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-20 pb-10">
          <div className={`${card} relative overflow-hidden text-center`}>
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative">
              <Mail size={40} className="mx-auto text-green-600" />

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Prefer email?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-xl leading-7">
                You can also contact me directly. I'll try my best to get back
                to you as soon as possible.
              </p>

              <a
                href="mailto:aliarafat.dev@gmail.com"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 font-bold text-white transition hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/20"
              >
                <Mail size={18} /> Email Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
