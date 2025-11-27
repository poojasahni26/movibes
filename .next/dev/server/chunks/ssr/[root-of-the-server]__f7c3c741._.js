module.exports = [
"[project]/src/lib/tmdb.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchMovieDetails",
    ()=>fetchMovieDetails,
    "fetchTrendingMovies",
    ()=>fetchTrendingMovies
]);
const API_KEY = '258526c1daa5e3887723e0f09eaa39d6';
const BASE_URL = 'https://api.themoviedb.org/3';
async function fetchTrendingMovies() {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    if (!response.ok) throw new Error('Failed to fetch trending movies');
    return response.json();
}
async function fetchMovieDetails(id) {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error('Failed to fetch movie details');
    return response.json();
}
}),
"[externals]/prop-types [external] (prop-types, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("prop-types", () => require("prop-types"));

module.exports = mod;
}),
"[project]/src/components/MovieCard.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MovieCard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs)");
;
;
;
function MovieCard({ movie }) {
    const tmdbUrl = `https://www.themoviedb.org/movie/${movie.id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
        href: tmdbUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "movie-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                alt: movie.title,
                className: "movie-poster"
            }, void 0, false, {
                fileName: "[project]/src/components/MovieCard.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        children: movie.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/MovieCard.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            movie.vote_average,
                            "/10"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MovieCard.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MovieCard.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MovieCard.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
MovieCard.propTypes = {
    movie: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$29$__["default"].shape({
        id: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$29$__["default"].number.isRequired,
        title: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$29$__["default"].string.isRequired,
        poster_path: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$29$__["default"].string.isRequired,
        vote_average: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$29$__["default"].number.isRequired
    }).isRequired
};
}),
"[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@fortawesome/react-fontawesome");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@fortawesome/free-solid-svg-icons");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tmdb$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tmdb.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MovieCard$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MovieCard.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: "/image/movibes-logo.png",
                alt: "Movibes Logo",
                className: "logo-image"
            }, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 16,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "nav-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "nav-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: "/image/1.png",
                                    alt: "Home Logo",
                                    className: "nav-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/index.js",
                                    lineNumber: 21,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "Home",
                                    children: " Home "
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/index.js",
                                    lineNumber: 22,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/index.js",
                            lineNumber: 20,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/movies",
                        className: "nav-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faFilm"],
                                className: "nav-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 30,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "Movies",
                                children: " Movies "
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 31,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 29,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tv-shows",
                        className: "nav-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faTv"],
                                className: "nav-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 36,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "TV-Series",
                                children: " TVSeries "
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 37,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 35,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/upcoming",
                        className: "nav-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCalendarAlt"],
                                className: "nav-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 43,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "Upcoming",
                                children: "  Upcoming "
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 44,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 42,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "promo",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: "/image/download.png",
                        alt: "Promo Icon",
                        className: "promo-icon"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 52,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Play movie quizzes ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this),
                            "and earn",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 55,
                                columnNumber: 5
                            }, this),
                            " free tickets"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 53,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "50k people are playing",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 57,
                                columnNumber: 5
                            }, this),
                            " now"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 56,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        children: "Start playing"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 58,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 51,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 60,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 61,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 62,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 63,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 64,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 65,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/login",
                className: "nav-link",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faSignOutAlt"],
                        className: "nav-icon"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 69,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "Logout",
                        children: " Logout "
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 70,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 68,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/index.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
function Home() {
    const [movies, setMovies] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tmdb$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["fetchTrendingMovies"])().then((data)=>setMovies(data.results));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: "Movibes | Home"
                }, void 0, false, {
                    fileName: "[project]/src/pages/index.js",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "home-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Header, {}, void 0, false, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        className: "main-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                                className: "filters top-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "top-icons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: "/image/bell.png",
                                                alt: "Notifications",
                                                className: "bell-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 100,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: "/image/profile.png",
                                                alt: "User profile",
                                                className: "profile-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 101,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 99,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "header-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                children: "Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 105,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                                                children: "Uncheck all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 106,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 104,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "filter-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "filter-header"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 109,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "category-list",
                                                children: [
                                                    'Action',
                                                    'Adventure',
                                                    'Animated',
                                                    'Comedy',
                                                    'Crime',
                                                    'Fantasy'
                                                ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "category-item",
                                                        children: [
                                                            cat,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                defaultChecked: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/index.js",
                                                                lineNumber: 116,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, cat, true, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 115,
                                                        columnNumber: 5
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 113,
                                                columnNumber: 2
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "see-more1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    children: "See more"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/index.js",
                                                    lineNumber: 122,
                                                    columnNumber: 5
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 121,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "header-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 126,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                                                children: "Uncheck all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 127,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 125,
                                        columnNumber: 2
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "filter-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "filter-header"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 130,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "checkbox-list",
                                                children: [
                                                    'Netflix',
                                                    'Prime Video',
                                                    'Disney+',
                                                    'HBO Max',
                                                    'Hulu',
                                                    'Starz'
                                                ].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "checkbox-item",
                                                        children: [
                                                            service,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                defaultChecked: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/index.js",
                                                                lineNumber: 136,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, service, true, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 135,
                                                        columnNumber: 5
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 133,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "see-more",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    children: "See more"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/index.js",
                                                    lineNumber: 142,
                                                    columnNumber: 5
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 141,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 129,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "filter-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                children: "Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 147,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                defaultValue: "",
                                                className: "filter-select",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Mood"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 150,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "happy",
                                                        children: "Happy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 151,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "sad",
                                                        children: "Sad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 152,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "thrilling",
                                                        children: "Thrilling"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 153,
                                                        columnNumber: 5
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 149,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                defaultValue: "",
                                                className: "filter-select",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 157,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "2025",
                                                        children: "2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 158,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "2024",
                                                        children: "2024"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 159,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "2023",
                                                        children: "2023"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 160,
                                                        columnNumber: 5
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 156,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                defaultValue: "",
                                                className: "filter-select",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Language"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 164,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "en",
                                                        children: "English"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 165,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "es",
                                                        children: "Spanish"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 166,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "fr",
                                                        children: "French"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 167,
                                                        columnNumber: 5
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 163,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                defaultValue: "",
                                                className: "filter-select",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Age Rating"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 171,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "G",
                                                        children: "G"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 172,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "PG",
                                                        children: "PG"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 173,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "PG-13",
                                                        children: "PG-13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 174,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "R",
                                                        children: "R"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/index.js",
                                                        lineNumber: 175,
                                                        columnNumber: 5
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 170,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 146,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                                className: "search-header",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "search-bar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search for movies, TV shows..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 181,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/index.js",
                                    lineNumber: 180,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 179,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "Hero-section",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: "/image/Hero.png",
                                    alt: "Hero",
                                    className: "Hero-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/index.js",
                                    lineNumber: 186,
                                    columnNumber: 3
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 185,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "trending",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: "Trending"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 189,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid",
                                        children: movies.slice(0, 4).map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid-item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MovieCard$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    movie: movie
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/index.js",
                                                    lineNumber: 193,
                                                    columnNumber: 9
                                                }, this)
                                            }, movie.id, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 192,
                                                columnNumber: 7
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 190,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 188,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "Upcoming",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: "Upcoming"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid",
                                        children: movies.slice(0, 5).map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid-item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MovieCard$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    movie: movie
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/index.js",
                                                    lineNumber: 204,
                                                    columnNumber: 9
                                                }, this)
                                            }, movie.id, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 203,
                                                columnNumber: 7
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 199,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 209,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 210,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 211,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 212,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 213,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 214,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 215,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 216,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 217,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 218,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 219,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 220,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 221,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 222,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 223,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 224,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 225,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 226,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 227,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "Tv-Series",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: "Tv-Series"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid",
                                        children: movies.slice(0, 5).map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid-item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MovieCard$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    movie: movie
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/index.js",
                                                    lineNumber: 233,
                                                    columnNumber: 9
                                                }, this)
                                            }, movie.id, false, {
                                                fileName: "[project]/src/pages/index.js",
                                                lineNumber: 232,
                                                columnNumber: 7
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.js",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/index.js",
                                lineNumber: 228,
                                columnNumber: 2
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f7c3c741._.js.map