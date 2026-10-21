(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Carousel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
'use client';
;
;
;
;
const Carousel = ()=>{
    const imgs = [
        {
            name: 'HTML5',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
            name: 'CSS3',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
            name: 'JavaScript',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
            name: 'Node.js',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
            name: 'Express.js',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        },
        {
            name: 'React.js',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'Next.js',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        {
            name: 'Tailwind CSS',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
            name: 'MongoDB',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        {
            name: 'Mongoose',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg'
        },
        {
            name: 'Git',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
            name: 'GitHub',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
            name: 'C',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
        },
        {
            name: 'C++',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
        },
        {
            name: 'Python',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "\r\n\n        relative\r\n\n        z-10\r\n\n        w-full\r\n\n        overflow-hidden\r\n\n        bg-white\r\n\n        py-16\r\n\n        dark:bg-transparent\r\n\n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 mb-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "\r\n\n            text-xs\r\n\n            font-bold\r\n\n            uppercase\r\n\n            tracking-[0.3em]\r\n\n            text-blue-600\r\n\n            dark:text-blue-400\r\n\n          ",
                        children: "My Tech Stack"
                    }, void 0, false, {
                        fileName: "[project]/components/Carousel.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "\r\n\n            mt-3\r\n\n            text-3xl\r\n\n            font-extrabold\r\n\n            tracking-tight\r\n\n            md:text-4xl\r\n\n          ",
                        children: "Technologies I Use"
                    }, void 0, false, {
                        fileName: "[project]/components/Carousel.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "\r\n\n            mx-auto\r\n\n            mt-4\r\n\n            max-w-xl\r\n\n            text-sm\r\n\n            font-medium\r\n\n            leading-6\r\n\n            text-slate-700\r\n\n            md:text-base\r\n\n          ",
                        children: "Tools and technologies I use to build modern applications."
                    }, void 0, false, {
                        fileName: "[project]/components/Carousel.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Carousel.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\r\n\n          relative\r\n\n          z-20\r\n\n          overflow-hidden\r\n\n          rounded-3xl\r\n\n          border\r\n\n          border-slate-200\r\n\n          bg-slate-50\r\n\n          px-4\r\n\n          py-7\r\n\n          shadow-sm\r\n\n          sm:px-6\r\n\n          md:px-10\r\n\n          md:py-9\r\n\n\r\n\n          dark:border-white/10\r\n\n          dark:bg-white/[0.04]\r\n\n          dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)]\r\n\n        ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n            pointer-events-none\r\n\n            absolute\r\n\n            -left-20\r\n\n            top-1/2\r\n\n            z-0\r\n\n            h-40\r\n\n            w-40\r\n\n            -translate-y-1/2\r\n\n            rounded-full\r\n\n            bg-blue-400/10\r\n\n            blur-3xl\r\n\n            dark:bg-blue-500/10\r\n\n          "
                    }, void 0, false, {
                        fileName: "[project]/components/Carousel.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n            pointer-events-none\r\n\n            absolute\r\n\n            -right-20\r\n\n            top-1/2\r\n\n            z-0\r\n\n            h-40\r\n\n            w-40\r\n\n            -translate-y-1/2\r\n\n            rounded-full\r\n\n            bg-purple-400/10\r\n\n            blur-3xl\r\n\n            dark:bg-purple-500/10\r\n\n          "
                    }, void 0, false, {
                        fileName: "[project]/components/Carousel.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                            ],
                            spaceBetween: 20,
                            slidesPerView: 2,
                            speed: 3500,
                            loop: true,
                            allowTouchMove: true,
                            autoplay: {
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            },
                            breakpoints: {
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 12
                                },
                                480: {
                                    slidesPerView: 3,
                                    spaceBetween: 16
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 18
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 20
                                },
                                1280: {
                                    slidesPerView: 6,
                                    spaceBetween: 22
                                }
                            },
                            children: imgs.map(({ name, src })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-30 flex justify-center py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "\r\n\n                      group\r\n\n                      relative\r\n\n                      z-30\r\n\n                      w-full\r\n\n                      max-w-[150px]\r\n\n                      rounded-2xl\r\n\n                      border\r\n\n                      border-slate-200\r\n\n                      bg-white\r\n\n                      px-3\r\n\n                      py-5\r\n\n                      text-center\r\n\n                      shadow-[0_4px_14px_rgba(15,23,42,0.05)]\r\n\n                      transition-all\r\n\n                      duration-300\r\n\n\r\n\n                      hover:-translate-y-1.5\r\n\n                      hover:border-blue-200\r\n\n                      hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)]\r\n\n\r\n\n                      dark:border-white/10\r\n\n                      dark:bg-white/[0.06]\r\n\n                      dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)]\r\n\n\r\n\n                      dark:hover:border-blue-400/30\r\n\n                      dark:hover:bg-white/[0.09]\r\n\n                      dark:hover:shadow-[0_15px_35px_rgba(59,130,246,0.14)]\r\n\n                    ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "\r\n\n                        mx-auto\r\n\n                        flex\r\n\n                        h-[72px]\r\n\n                        w-[72px]\r\n\n                        items-center\r\n\n                        justify-center\r\n\n                        rounded-xl\r\n\n                        ring-1\r\n\n                        transition-all\r\n\n                        duration-300\r\n\n\r\n\n                        bg-white/5\r\n\n                        ring-white\r\n\n                        group-hover:ring-blue-700/90\r\n\n                      ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: src,
                                                        alt: name,
                                                        loading: "lazy",
                                                        className: "\r\n\n                          h-11\r\n\n                          w-11\r\n\n                          object-contain\r\n\n                          transition-transform\r\n\n                          duration-300\r\n\n                          group-hover:scale-110\r\n\n                          group-hover:rotate-3\r\n\n                        "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Carousel.jsx",
                                                        lineNumber: 278,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Carousel.jsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "\r\n\n                        mt-4\r\n\n                        whitespace-nowrap\r\n\n                        text-sm\r\n\n                        font-semibold\r\n\n                        transition-colors\r\n\n                        duration-300\r\n\n                      ",
                                                    children: name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Carousel.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "\r\n\n                        pointer-events-none\r\n\n                        absolute\r\n\n                        bottom-0\r\n\n                        left-1/2\r\n\n                        h-[2px]\r\n\n                        w-0\r\n\n                        -translate-x-1/2\r\n\n                        rounded-full\r\n\n                        bg-blue-500\r\n\n                        opacity-0\r\n\n                        transition-all\r\n\n                        duration-300\r\n\n                        group-hover:w-10\r\n\n                        group-hover:opacity-100\r\n\n                        dark:bg-blue-400\r\n\n                      "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Carousel.jsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Carousel.jsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Carousel.jsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, name, false, {
                                    fileName: "[project]/components/Carousel.jsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/Carousel.jsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Carousel.jsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Carousel.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Carousel.jsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Carousel;
const __TURBOPACK__default__export__ = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_Carousel_jsx_20bf-y2._.js.map