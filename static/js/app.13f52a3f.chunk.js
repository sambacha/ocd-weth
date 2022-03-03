(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        185:
            /*!****************************************************!*\
              !*** ./src/pages/FatalErrorPage/FatalErrorPage.js ***!
              \****************************************************/
            /*! exports provided: default */
            /*! all exports used */
            /*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/Routes.js (referenced with import()) */
            function(e, t, a) {
                "use strict";
                a.r(t);
                var n = a( /*! react */ 0),
                    r = a.n(n);
                t.default = function() {
                    return r.a.createElement("main", null, r.a.createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html: '\n              html, body {\n                margin: 0;\n              }\n              html * {\n                box-sizing: border-box;\n              }\n              main {\n                display: flex;\n                align-items: center;\n                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;\n                text-align: center;\n                background-color: #E2E8F0;\n                height: 100vh;\n              }\n              section {\n                background-color: white;\n                border-radius: 0.25rem;\n                width: 32rem;\n                padding: 1rem;\n                margin: 0 auto;\n                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n              }\n              h1 {\n                font-size: 2rem;\n                margin: 0;\n                font-weight: 500;\n                line-height: 1;\n                color: #2D3748;\n              }\n            '
                        }
                    }), r.a.createElement("section", null, r.a.createElement("h1", null, r.a.createElement("span", null, "Something went wrong"))))
                }
            },
        191:
            /*!******************************!*\
              !*** ./src/utils/helpers.js ***!
              \******************************/
            /*! exports provided: formattedDate, truncate */
            /*! exports used: formattedDate, truncate */
            function(e, t, a) {
                "use strict";
                a.d(t, "a", (function() {
                    return l
                })), a.d(t, "b", (function() {
                    return s
                }));
                a( /*! core-js/modules/es.date.to-string.js */ 192);
                var n = a( /*! @babel/runtime-corejs3/core-js/instance/concat */ 35),
                    r = a.n(n),
                    l = function(e) {
                        var t, a, n = new Date(e),
                            l = n.toLocaleString("default", {
                                month: "long"
                            });
                        return r()(t = r()(a = "".concat(n.getDate(), " ")).call(a, l, " ")).call(t, n.getFullYear())
                    },
                    s = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
                        return "string" != typeof e ? "" : e.substring(0, t) + "..."
                    }
            },
        292:
            /*!***********************!*\
              !*** ./src/Routes.js ***!
              \***********************/
            /*! exports provided: default */
            /*! exports used: default */
            function(e, t, a) {
                "use strict";
                var n = a( /*! react */ 0),
                    r = a.n(n),
                    l = a( /*! @redwoodjs/router */ 20);
                const s = {
                        name: "DappPage",
                        loader: () => Promise.all( /*! import() */ [a.e(0), a.e(6)]).then(a.bind(null, /*! ./src/pages/DappPage/DappPage */ 616))
                    },
                    o = {
                        name: "DappsPage",
                        loader: () => Promise.all( /*! import() */ [a.e(0), a.e(4)]).then(a.bind(null, /*! ./src/pages/DappsPage/DappsPage */ 612))
                    },
                    i = {
                        name: "EditDappPage",
                        loader: () => Promise.all( /*! import() */ [a.e(0), a.e(5)]).then(a.bind(null, /*! ./src/pages/EditDappPage/EditDappPage */ 621))
                    },
                    c = {
                        name: "EditUserPage",
                        loader: () => Promise.all( /*! import() */ [a.e(0), a.e(9)]).then(a.bind(null, /*! ./src/pages/EditUserPage/EditUserPage */ 618))
                    },
                    m = {
                        name: "HomePage",
                        loader: () => a.e( /*! import() */ 10).then(a.bind(null, /*! ./src/pages/HomePage/HomePage */ 622))
                    },
                    u = {
                        name: "LoginPage",
                        loader: () => Promise.all( /*! import() */ [a.e(0), a.e(11)]).then(a.bind(null, /*! ./src/pages/LoginPage/LoginPage */ 617))
                    },
                    d = {
                        name: "NewDappPage",
                        loader: () => Promise.all( /*! import() */ [a.e(0), a.e(3)]).then(a.bind(null, /*! ./src/pages/NewDappPage/NewDappPage */ 623))
                    },
                    h = {
                        name: "NotFoundPage",
                        loader: () => a.e( /*! import() */ 12).then(a.bind(null, /*! ./src/pages/NotFoundPage/NotFoundPage */ 613))
                    },
                    g = {
                        name: "UserPage",
                        loader: () => Promise.all( /*! import() */ [a.e(0), a.e(7)]).then(a.bind(null, /*! ./src/pages/UserPage/UserPage */ 619))
                    };
                t.a = function(e) {
                    var t = e.useAuth;
                    return r.a.createElement(l.Router, {
                        useAuth: t
                    }, r.a.createElement(l.Route, {
                        path: "/",
                        page: m,
                        name: "home"
                    }), r.a.createElement(l.Route, {
                        path: "/login",
                        page: u,
                        name: "login"
                    }), r.a.createElement(l.Route, {
                        path: "/dapps",
                        page: o,
                        name: "dapps"
                    }), r.a.createElement(l.Private, {
                        unauthenticated: "login"
                    }, r.a.createElement(l.Route, {
                        path: "/users/{id}/edit",
                        page: c,
                        name: "editUser"
                    }), r.a.createElement(l.Route, {
                        path: "/users/{id}",
                        page: g,
                        name: "user"
                    }), r.a.createElement(l.Route, {
                        path: "/new",
                        page: d,
                        name: "newDapp",
                        whileLoading: function() {
                            return "Loading..."
                        }
                    }), r.a.createElement(l.Route, {
                        path: "/{mnemonic}/edit",
                        page: i,
                        name: "editDapp"
                    })), r.a.createElement(l.Route, {
                        path: "/{mnemonic}",
                        page: s,
                        name: "dapp"
                    }), r.a.createElement(l.Route, {
                        notfound: !0,
                        page: h
                    }))
                }
            },
        296:
            /*!****************************************************************!*\
              !*** ./src/layouts/DefaultLayout/DefaultLayout.js + 3 modules ***!
              \****************************************************************/
            /*! exports provided: default */
            /*! exports used: default */
            /*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime-corejs3/core-js/instance/concat.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime-corejs3/core-js/instance/includes.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@redwoodjs/auth/dist/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@redwoodjs/router/dist/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/helpers.js because of ./src/components/Dapps/Dapps.js */
            /*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */
            function(e, t, a) {
                "use strict";
                a(192);
                var n = a(0),
                    r = a.n(n),
                    l = a(20),
                    s = a(80),
                    o = function() {
                        return r.a.createElement("img", {
                            className: "h-9 w-auto sm:h-11",
                            alt: "A stone tablet logo",
                            src: "/logo.png"
                        })
                    },
                    i = function() {
                        return r.a.createElement("svg", {
                            height: "40px",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 245 240"
                        }, r.a.createElement("path", {
                            class: "st0",
                            d: "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                        }), r.a.createElement("path", {
                            class: "st0",
                            d: "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                        }))
                    },
                    c = a(35),
                    m = a.n(c),
                    u = a(135),
                    d = a.n(u),
                    h = a(190),
                    g = a.n(h),
                    p = function(e) {
                        var t = e.text,
                            a = e.shortText,
                            s = e.id,
                            o = e.ctaLink,
                            i = Object(n.useState)(!1),
                            c = g()(i, 2),
                            u = c[0],
                            h = c[1],
                            p = localStorage.getItem("bannerIds") || "";
                        Object(n.useEffect)((function() {
                            u || d()(p).call(p, s) && h(!0)
                        }));
                        return u ? null : r.a.createElement("div", {
                            className: "bg-blue-600"
                        }, r.a.createElement("div", {
                            className: "max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"
                        }, r.a.createElement("div", {
                            className: "flex items-center justify-between flex-wrap"
                        }, r.a.createElement("div", {
                            className: "w-0 flex-1 flex items-center"
                        }, r.a.createElement("span", {
                            className: "flex p-2 rounded-lg bg-blue-800"
                        }, r.a.createElement("svg", {
                            className: "h-6 w-6 text-white",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "aria-hidden": "true"
                        }, r.a.createElement("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        }))), r.a.createElement("p", {
                            className: "ml-3 font-medium text-white truncate"
                        }, r.a.createElement("span", {
                            className: "md:hidden"
                        }, a), r.a.createElement("span", {
                            className: "hidden md:inline"
                        }, t))), o && r.a.createElement("div", {
                            className: "order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
                        }, r.a.createElement(l.Link, {
                            to: o,
                            className: "flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
                        }, "Learn more")), r.a.createElement("div", {
                            className: "order-2 flex-shrink-0 sm:order-3 sm:ml-3"
                        }, r.a.createElement("button", {
                            onClick: function() {
                                h(!0), localStorage.setItem("bannerIds", m()(p).call(p, s))
                            },
                            type: "button",
                            className: "-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                        }, r.a.createElement("span", {
                            className: "sr-only"
                        }, "Dismiss"), r.a.createElement("svg", {
                            className: "h-6 w-6 text-white",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "aria-hidden": "true"
                        }, r.a.createElement("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M6 18L18 6M6 6l12 12"
                        })))))))
                    },
                    f = a(191);
                t.a = function(e) {
                    var t = e.children,
                        a = Object(s.useAuth)(),
                        n = a.isAuthenticated,
                        c = a.currentUser,
                        m = a.logOut,
                        u = n ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: "h-2rem"
                        }, r.a.createElement("a", {
                            href: "https://discord.gg/b8zTUUC",
                            target: "_blank"
                        }, r.a.createElement(i, null))), r.a.createElement("button", {
                            onClick: function() {
                                return Object(l.navigate)(l.routes.user({
                                    id: c.id
                                }))
                            },
                            to: "login",
                            className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                        }, Object(f.b)(null == c ? void 0 : c.address, 7)), r.a.createElement("button", {
                            onClick: function() {
                                m(), Object(l.navigate)(l.routes.home())
                            }
                        }, "Logout")) : r.a.createElement("div", {
                            className: "md:flex items-center justify-end md:flex-1 lg:w-0"
                        }, r.a.createElement("button", {
                            onClick: function() {
                                return Object(l.navigate)(l.routes.login())
                            },
                            to: "login",
                            className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                        }, "Log in"));
                    return r.a.createElement("div", {
                        className: "flex flex-col min-h-screen"
                    }, r.a.createElement("header", {
                        className: "relative bg-white"
                    }, r.a.createElement("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6"
                    }, r.a.createElement("div", {
                        className: "flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
                    }, r.a.createElement("div", {
                        className: "flex justify-start lg:w-0 lg:flex-1"
                    }, r.a.createElement(l.Link, {
                        to: "/"
                    }, r.a.createElement(o, null))), u))), r.a.createElement(p, {
                        text: "Version 2 is here! This is an alpha release - please be careful.",
                        shortText: "Version 2 alpha is here!",
                        id: "launchV2",
                        ctaLink: null
                    }), r.a.createElement("div", {
                        className: "flex-grow"
                    }, r.a.cloneElement(t, {
                        useAuth: s.useAuth
                    })), r.a.createElement("footer", null, r.a.createElement("div", {
                        className: "mt-8 relative bg-gray-100"
                    }, r.a.createElement("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6"
                    }, r.a.createElement("div", {
                        className: "flex justify-between items-center py-6 md:justify-start md:space-x-10"
                    }, r.a.createElement("div", {
                        className: "flex justify-start  lg:w-0 lg:flex-1"
                    }, r.a.createElement("a", {
                        href: "https://patrickgallagher.dev",
                        target: "blank"
                    }, "©", (new Date).getFullYear(), " Patrick Gallagher")))))))
                }
            },
        305:
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /*! no exports provided */
            /*! all exports used */
            /*! ModuleConcatenation bailout: Module uses injected variables (process) */
            function(e, t, a) {
                "use strict";
                a.r(t),
                    function(e) {
                        var t = a( /*! react */ 0),
                            n = a.n(t),
                            r = a( /*! @redwoodjs/auth */ 80),
                            l = a( /*! @oneclickdapp/ethereum-auth */ 297),
                            s = a( /*! @apollo/client */ 142),
                            o = a( /*! @redwoodjs/web */ 78),
                            i = a( /*! react-dom */ 184),
                            c = a.n(i),
                            m = a( /*! ./pages/FatalErrorPage/FatalErrorPage */ 185),
                            u = a( /*! ./layouts/DefaultLayout/DefaultLayout */ 296),
                            d = a( /*! ./Routes */ 292),
                            h = (a( /*! ./scaffold.css */ 526), a( /*! ./index.css */ 527), function(t) {
                                var a, r = t.children,
                                    i = Object(o.useFetchConfig)(),
                                    c = i.uri,
                                    m = i.headers;
                                try {
                                    var u = new s.ApolloClient({
                                        cache: new s.InMemoryCache,
                                        uri: c,
                                        headers: m
                                    });
                                    a = new l.a({
                                        makeRequest: function(e, t) {
                                            return u.mutate({
                                                mutation: e,
                                                variables: t
                                            })
                                        },
                                        debug: "production" !== e.NODE_ENV
                                    })
                                } catch (e) {
                                    console.log(e)
                                }
                                return n.a.cloneElement(r, {
                                    client: a
                                })
                            });
                        c.a.render(n.a.createElement(o.FatalErrorBoundary, {
                            page: m.default
                        }, n.a.createElement(o.FetchConfigProvider, null, n.a.createElement(h, null, n.a.createElement(r.AuthProvider, {
                            client: void 0,
                            type: "ethereum"
                        }, n.a.createElement(o.RedwoodProvider, null, n.a.createElement(u.a, null, n.a.createElement(d.a, null))))))), document.getElementById("redwood-app"))
                    }.call(this, a( /*! ./../../node_modules/process/browser.js */ 110))
            },
        360:
            /*!************************!*\
              !*** buffer (ignored) ***!
              \************************/
            /*! no static exports found */
            /*! all exports used */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t) {},
        526:
            /*!**************************!*\
              !*** ./src/scaffold.css ***!
              \**************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, a) {},
        527:
            /*!***********************!*\
              !*** ./src/index.css ***!
              \***********************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, a) {}
    },
    [
        [305, 2, 0]
    ]
]);
//# sourceMappingURL=app.13f52a3f.chunk.js.map