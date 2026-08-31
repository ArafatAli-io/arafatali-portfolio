'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const Carousel = () => {
  const imgs = [
    {
      name: 'HTML5',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'React.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Tailwind CSS',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Mongoose',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg',
    },
    {
      name: 'Git',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'C',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    },
    {
      name: 'C++',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    },
    {
      name: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
  ]

  return (
    <section
      className="
        relative
        z-10
        w-full
        overflow-hidden
        bg-white
        py-16
        dark:bg-transparent
      "
    >
      {/* Heading */}

      <div className="relative z-20 mb-12 text-center">
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
            text-blue-600
            dark:text-blue-400
          "
        >
          My Tech Stack
        </p>

        <h2
          className="
            mt-3
            text-3xl
            font-extrabold
            tracking-tight
            md:text-4xl
          "
        >
          Technologies I Use
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            font-medium
            leading-6
            text-slate-700
            md:text-base
          "
        >
          Tools and technologies I use to build modern applications.
        </p>
      </div>

      {/* Carousel */}

      <div
        className="
          relative
          z-20
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-slate-50
          px-4
          py-7
          shadow-sm
          sm:px-6
          md:px-10
          md:py-9

          dark:border-white/10
          dark:bg-white/[0.04]
          dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)]
        "
      >
        {/* Decorative Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            top-1/2
            z-0
            h-40
            w-40
            -translate-y-1/2
            rounded-full
            bg-blue-400/10
            blur-3xl
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            top-1/2
            z-0
            h-40
            w-40
            -translate-y-1/2
            rounded-full
            bg-purple-400/10
            blur-3xl
            dark:bg-purple-500/10
          "
        />

        {/* Swiper */}

        <div className="relative z-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            speed={3500}
            loop={true}
            allowTouchMove={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 22,
              },
            }}
          >
            {imgs.map(({ name, src }) => (
              <SwiperSlide key={name}>
                <div className="relative z-30 flex justify-center py-3">
                  <div
                    className="
                      group
                      relative
                      z-30
                      w-full
                      max-w-[150px]
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-5
                      text-center
                      shadow-[0_4px_14px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-300

                      hover:-translate-y-1.5
                      hover:border-blue-200
                      hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)]

                      dark:border-white/10
                      dark:bg-white/[0.06]
                      dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)]

                      dark:hover:border-blue-400/30
                      dark:hover:bg-white/[0.09]
                      dark:hover:shadow-[0_15px_35px_rgba(59,130,246,0.14)]
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        mx-auto
                        flex
                        h-[72px]
                        w-[72px]
                        items-center
                        justify-center
                        rounded-xl
                        ring-1
                        transition-all
                        duration-300

                        bg-white/5
                        ring-white
                        group-hover:ring-blue-700/90
                      "
                    >
                      <img
                        src={src}
                        alt={name}
                        loading="lazy"
                        className="
                          h-11
                          w-11
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:scale-110
                          group-hover:rotate-3
                        "
                      />
                    </div>

                    {/* Name */}

                    <p
                      className="
                        mt-4
                        whitespace-nowrap
                        text-sm
                        font-semibold
                        transition-colors
                        duration-300
                      "
                    >
                      {name}
                    </p>

                    {/* Hover Indicator */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-1/2
                        h-[2px]
                        w-0
                        -translate-x-1/2
                        rounded-full
                        bg-blue-500
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:w-10
                        group-hover:opacity-100
                        dark:bg-blue-400
                      "
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Carousel
