import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  ArrowUpIcon,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold">
              Arafat Ali<span className="text-blue-500">.</span>
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Full-Stack Developer · Building things for the web.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/arafatali-io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-gray-800 bg-gray-900 p-2.5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500"
            >
              <LinkedinIcon size={19} />
            </a>

            <a
              href="https://www.instagram.com/arafatali.io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-gray-800 bg-gray-900 p-2.5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:text-pink-500"
            >
              <InstagramIcon size={19} />
            </a>

            <a
              href="mailto:aliarafat.dev"
              aria-label="Email"
              className="rounded-full border border-gray-800 bg-gray-900 p-2.5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-500"
            >
              <MailIcon size={19} />
            </a>

            <a
              href="https://github.com/ArafatAli-io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-gray-800 bg-gray-900 p-2.5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:text-white"
            >
              <GithubIcon size={19} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-800" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Arafat Ali. All rights reserved.
          </p>

          <p className="flex justify-center items-center gap-1">
            Designed & developed by Arafat Ali.
          </p>

          <a
            href="#"
            aria-label="Back to top"
            className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            Back to top
            <span className="rounded-full border border-gray-700 p-1.5 transition-transform group-hover:-translate-y-1">
              <ArrowUpIcon size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
