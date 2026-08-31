'use client';

import React, { useState } from 'react';
import { Code2, Github, Home, Menu, Moon, Phone, Sun, User, X,} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navbarItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: User, text: 'About', path: '/about' },
    { icon: Code2, text: 'Projects', path: '/projects' },
    { icon: Phone, text: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setMobileOpen(false);
  };

  const openGithub = () => {
    window.open(
      'https://github.com/ArafatAli-07',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 sm:w-[calc(100%-2rem)]">
      <nav className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/75 shadow-[0_8px_40px_rgb(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300">
        {/* Main Navbar */}
        <div className="flex h-[68px] items-center justify-between px-3 sm:px-5">
          {/* Profile / Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="group flex items-center gap-3 rounded-xl px-1 py-1 text-left transition-all duration-200"
          >
            <Avatar className="h-10 w-10 border-2 border-blue-500/30 bg-blue-500/10 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/60 group-hover:shadow-md group-hover:shadow-blue-500/20">
              <AvatarImage
                src="https://github.com/ArafatAli-07.png"
                alt="Arafat Ali"
              />
              <AvatarFallback className="bg-blue-500/15 text-blue-400">
                AA
              </AvatarFallback>
            </Avatar>

            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-none tracking-tight text-white">
                Arafat Ali
              </p>
              <p className="mt-1 text-[11px] font-medium text-slate-400">
                Full Stack Developer
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navbarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`group relative flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-500/15 text-blue-400 shadow-sm shadow-blue-500/5'
                      : 'text-slate-400 hover:bg-slate-800/70 hover:text-white'
                  }`}
                >
                  <Icon
                    size={16}
                    strokeWidth={isActive ? 2.5 : 2}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />

                  <span>{item.text}</span>

                  {isActive && (
                    <span className="absolute -bottom-[1px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            {/* GitHub */}
            <button
              onClick={openGithub}
              aria-label="Open GitHub profile"
              className="group hidden h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-white sm:flex"
            >
              <Github
                size={18}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
              />
            </button>

            {/* Divider */}
            <div className="mx-1 hidden h-6 w-px bg-slate-800 sm:block" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-blue-400"
            >
              {theme === 'light' ? (
                <Moon
                  size={17}
                  className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
              ) : (
                <Sun
                  size={18}
                  className="text-blue-400 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110"
                />
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-white md:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`grid transition-all duration-300 ease-in-out md:hidden ${
            mobileOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-slate-800/80 px-3 pb-3 pt-3">
              <div className="flex flex-col gap-1">
                {navbarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;

                  return (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-500/15 text-blue-400'
                          : 'text-slate-400 hover:bg-slate-800/70 hover:text-white'
                      }`}
                    >
                      <Icon
                        size={17}
                        strokeWidth={isActive ? 2.5 : 2}
                      />

                      <span>{item.text}</span>

                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500" />
                      )}
                    </button>
                  );
                })}

                {/* Mobile GitHub */}
                <button
                  onClick={openGithub}
                  className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-all hover:bg-slate-800/70 hover:text-white"
                >
                  <Github size={17} />
                  <span>GitHub</span>
                  <span className="ml-auto text-xs text-slate-400">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
