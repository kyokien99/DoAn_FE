(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        250: function(t, e, n) {
            t.exports = function(t) {
                var e = {};

                function n(r) {
                    if (e[r]) return e[r].exports;
                    var o = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var o in t) n.d(r, o, function(e) {
                            return t[e]
                        }.bind(null, o));
                    return r
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(object, t) {
                    return Object.prototype.hasOwnProperty.call(object, t)
                }, n.p = "", n(n.s = "fb15")
            }({
                "014b": function(t, e, n) {
                    "use strict";
                    var r = n("e53d"),
                        o = n("07e3"),
                        d = n("8e60"),
                        c = n("63b6"),
                        l = n("9138"),
                        f = n("ebfd").KEY,
                        $ = n("294c"),
                        h = n("dbdb"),
                        v = n("45f2"),
                        y = n("62a0"),
                        m = n("5168"),
                        C = n("ccb9"),
                        S = n("6718"),
                        x = n("47ee"),
                        w = n("9003"),
                        N = n("e4ae"),
                        _ = n("f772"),
                        O = n("241e"),
                        P = n("36c3"),
                        k = n("1bc3"),
                        E = n("aebd"),
                        T = n("a159"),
                        I = n("0395"),
                        A = n("bf0b"),
                        L = n("9aa9"),
                        R = n("d9f6"),
                        F = n("c3a1"),
                        M = A.f,
                        D = R.f,
                        j = I.f,
                        B = r.Symbol,
                        V = r.JSON,
                        z = V && V.stringify,
                        G = m("_hidden"),
                        U = m("toPrimitive"),
                        H = {}.propertyIsEnumerable,
                        K = h("symbol-registry"),
                        W = h("symbols"),
                        Y = h("op-symbols"),
                        Z = Object.prototype,
                        J = "function" == typeof B && !!L.f,
                        X = r.QObject,
                        Q = !X || !X.prototype || !X.prototype.findChild,
                        tt = d && $((function() {
                            return 7 != T(D({}, "a", {
                                get: function() {
                                    return D(this, "a", {
                                        value: 7
                                    }).a
                                }
                            })).a
                        })) ? function(t, e, n) {
                            var r = M(Z, e);
                            r && delete Z[e], D(t, e, n), r && t !== Z && D(Z, e, r)
                        } : D,
                        et = function(t) {
                            var e = W[t] = T(B.prototype);
                            return e._k = t, e
                        },
                        nt = J && "symbol" == typeof B.iterator ? function(t) {
                            return "symbol" == typeof t
                        } : function(t) {
                            return t instanceof B
                        },
                        it = function(t, e, n) {
                            return t === Z && it(Y, e, n), N(t), e = k(e, !0), N(n), o(W, e) ? (n.enumerable ? (o(t, G) && t[G][e] && (t[G][e] = !1), n = T(n, {
                                enumerable: E(0, !1)
                            })) : (o(t, G) || D(t, G, E(1, {})), t[G][e] = !0), tt(t, e, n)) : D(t, e, n)
                        },
                        ot = function(t, e) {
                            N(t);
                            for (var n, r = x(e = P(e)), i = 0, o = r.length; o > i;) it(t, n = r[i++], e[n]);
                            return t
                        },
                        at = function(t) {
                            var e = H.call(this, t = k(t, !0));
                            return !(this === Z && o(W, t) && !o(Y, t)) && (!(e || !o(this, t) || !o(W, t) || o(this, G) && this[G][t]) || e)
                        },
                        st = function(t, e) {
                            if (t = P(t), e = k(e, !0), t !== Z || !o(W, e) || o(Y, e)) {
                                var n = M(t, e);
                                return !n || !o(W, e) || o(t, G) && t[G][e] || (n.enumerable = !0), n
                            }
                        },
                        ut = function(t) {
                            for (var e, n = j(P(t)), r = [], i = 0; n.length > i;) o(W, e = n[i++]) || e == G || e == f || r.push(e);
                            return r
                        },
                        ct = function(t) {
                            for (var e, n = t === Z, r = j(n ? Y : P(t)), d = [], i = 0; r.length > i;) !o(W, e = r[i++]) || n && !o(Z, e) || d.push(W[e]);
                            return d
                        };
                    J || (l((B = function() {
                        if (this instanceof B) throw TypeError("Symbol is not a constructor!");
                        var t = y(arguments.length > 0 ? arguments[0] : void 0),
                            e = function(n) {
                                this === Z && e.call(Y, n), o(this, G) && o(this[G], t) && (this[G][t] = !1), tt(this, t, E(1, n))
                            };
                        return d && Q && tt(Z, t, {
                            configurable: !0,
                            set: e
                        }), et(t)
                    }).prototype, "toString", (function() {
                        return this._k
                    })), A.f = st, R.f = it, n("6abf").f = I.f = ut, n("355d").f = at, L.f = ct, d && !n("b8e3") && l(Z, "propertyIsEnumerable", at, !0), C.f = function(t) {
                        return et(m(t))
                    }), c(c.G + c.W + c.F * !J, {
                        Symbol: B
                    });
                    for (var lt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ft = 0; lt.length > ft;) m(lt[ft++]);
                    for (var $t = F(m.store), ht = 0; $t.length > ht;) S($t[ht++]);
                    c(c.S + c.F * !J, "Symbol", {
                        for: function(t) {
                            return o(K, t += "") ? K[t] : K[t] = B(t)
                        },
                        keyFor: function(t) {
                            if (!nt(t)) throw TypeError(t + " is not a symbol!");
                            for (var e in K)
                                if (K[e] === t) return e
                        },
                        useSetter: function() {
                            Q = !0
                        },
                        useSimple: function() {
                            Q = !1
                        }
                    }), c(c.S + c.F * !J, "Object", {
                        create: function(t, e) {
                            return void 0 === e ? T(t) : ot(T(t), e)
                        },
                        defineProperty: it,
                        defineProperties: ot,
                        getOwnPropertyDescriptor: st,
                        getOwnPropertyNames: ut,
                        getOwnPropertySymbols: ct
                    });
                    var pt = $((function() {
                        L.f(1)
                    }));
                    c(c.S + c.F * pt, "Object", {
                        getOwnPropertySymbols: function(t) {
                            return L.f(O(t))
                        }
                    }), V && c(c.S + c.F * (!J || $((function() {
                        var t = B();
                        return "[null]" != z([t]) || "{}" != z({
                            a: t
                        }) || "{}" != z(Object(t))
                    }))), "JSON", {
                        stringify: function(t) {
                            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                            if (n = e = r[1], (_(e) || void 0 !== t) && !nt(t)) return w(e) || (e = function(t, e) {
                                if ("function" == typeof n && (e = n.call(this, t, e)), !nt(e)) return e
                            }), r[1] = e, z.apply(V, r)
                        }
                    }), B.prototype[U] || n("35e8")(B.prototype, U, B.prototype.valueOf), v(B, "Symbol"), v(Math, "Math", !0), v(r.JSON, "JSON", !0)
                },
                "01f9": function(t, e, n) {
                    "use strict";
                    var r = n("2d00"),
                        o = n("5ca1"),
                        d = n("2aba"),
                        c = n("32e9"),
                        l = n("84f2"),
                        f = n("41a0"),
                        $ = n("7f20"),
                        h = n("38fd"),
                        v = n("2b4c")("iterator"),
                        y = !([].keys && "next" in [].keys()),
                        m = function() {
                            return this
                        };
                    t.exports = function(t, e, n, C, S, x, w) {
                        f(n, e, C);
                        var N, _, O, P = function(t) {
                                if (!y && t in I) return I[t];
                                switch (t) {
                                    case "keys":
                                    case "values":
                                        return function() {
                                            return new n(this, t)
                                        }
                                }
                                return function() {
                                    return new n(this, t)
                                }
                            },
                            k = e + " Iterator",
                            E = "values" == S,
                            T = !1,
                            I = t.prototype,
                            A = I[v] || I["@@iterator"] || S && I[S],
                            L = A || P(S),
                            R = S ? E ? P("entries") : L : void 0,
                            F = "Array" == e && I.entries || A;
                        if (F && (O = h(F.call(new t))) !== Object.prototype && O.next && ($(O, k, !0), r || "function" == typeof O[v] || c(O, v, m)), E && A && "values" !== A.name && (T = !0, L = function() {
                                return A.call(this)
                            }), r && !w || !y && !T && I[v] || c(I, v, L), l[e] = L, l[k] = m, S)
                            if (N = {
                                    values: E ? L : P("values"),
                                    keys: x ? L : P("keys"),
                                    entries: R
                                }, w)
                                for (_ in N) _ in I || d(I, _, N[_]);
                            else o(o.P + o.F * (y || T), e, N);
                        return N
                    }
                },
                "0395": function(t, e, n) {
                    var r = n("36c3"),
                        o = n("6abf").f,
                        d = {}.toString,
                        c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                    t.exports.f = function(t) {
                        return c && "[object Window]" == d.call(t) ? function(t) {
                            try {
                                return o(t)
                            } catch (t) {
                                return c.slice()
                            }
                        }(t) : o(r(t))
                    }
                },
                "07e3": function(t, e) {
                    var n = {}.hasOwnProperty;
                    t.exports = function(t, e) {
                        return n.call(t, e)
                    }
                },
                "0a49": function(t, e, n) {
                    var r = n("9b43"),
                        o = n("626a"),
                        d = n("4bf8"),
                        c = n("9def"),
                        l = n("cd1c");
                    t.exports = function(t, e) {
                        var n = 1 == t,
                            f = 2 == t,
                            $ = 3 == t,
                            h = 4 == t,
                            v = 6 == t,
                            y = 5 == t || v,
                            m = e || l;
                        return function(e, l, C) {
                            for (var S, x, w = d(e), N = o(w), _ = r(l, C, 3), O = c(N.length), P = 0, k = n ? m(e, O) : f ? m(e, 0) : void 0; O > P; P++)
                                if ((y || P in N) && (x = _(S = N[P], P, w), t))
                                    if (n) k[P] = x;
                                    else if (x) switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return S;
                                case 6:
                                    return P;
                                case 2:
                                    k.push(S)
                            } else if (h) return !1;
                            return v ? -1 : $ || h ? h : k
                        }
                    }
                },
                "0bfb": function(t, e, n) {
                    "use strict";
                    var r = n("cb7c");
                    t.exports = function() {
                        var t = r(this),
                            e = "";
                        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
                    }
                },
                "0d58": function(t, e, n) {
                    var r = n("ce10"),
                        o = n("e11e");
                    t.exports = Object.keys || function(t) {
                        return r(t, o)
                    }
                },
                "0fc9": function(t, e, n) {
                    var r = n("3a38"),
                        o = Math.max,
                        d = Math.min;
                    t.exports = function(t, e) {
                        return (t = r(t)) < 0 ? o(t + e, 0) : d(t, e)
                    }
                },
                1169: function(t, e, n) {
                    var r = n("2d95");
                    t.exports = Array.isArray || function(t) {
                        return "Array" == r(t)
                    }
                },
                1173: function(t, e) {
                    t.exports = function(t, e, n, r) {
                        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
                        return t
                    }
                },
                "11e9": function(t, e, n) {
                    var r = n("52a7"),
                        o = n("4630"),
                        d = n("6821"),
                        c = n("6a99"),
                        l = n("69a8"),
                        f = n("c69a"),
                        $ = Object.getOwnPropertyDescriptor;
                    e.f = n("9e1e") ? $ : function(t, e) {
                        if (t = d(t), e = c(e, !0), f) try {
                            return $(t, e)
                        } catch (t) {}
                        if (l(t, e)) return o(!r.f.call(t, e), t[e])
                    }
                },
                1495: function(t, e, n) {
                    var r = n("86cc"),
                        o = n("cb7c"),
                        d = n("0d58");
                    t.exports = n("9e1e") ? Object.defineProperties : function(t, e) {
                        o(t);
                        for (var n, c = d(e), l = c.length, i = 0; l > i;) r.f(t, n = c[i++], e[n]);
                        return t
                    }
                },
                1654: function(t, e, n) {
                    "use strict";
                    var r = n("71c1")(!0);
                    n("30f1")(String, "String", (function(t) {
                        this._t = String(t), this._i = 0
                    }), (function() {
                        var t, e = this._t,
                            n = this._i;
                        return n >= e.length ? {
                            value: void 0,
                            done: !0
                        } : (t = r(e, n), this._i += t.length, {
                            value: t,
                            done: !1
                        })
                    }))
                },
                1691: function(t, e) {
                    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
                },
                "1af6": function(t, e, n) {
                    var r = n("63b6");
                    r(r.S, "Array", {
                        isArray: n("9003")
                    })
                },
                "1bc3": function(t, e, n) {
                    var r = n("f772");
                    t.exports = function(t, e) {
                        if (!r(t)) return t;
                        var n, o;
                        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
                        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                        throw TypeError("Can't convert object to primitive value")
                    }
                },
                "1ec9": function(t, e, n) {
                    var r = n("f772"),
                        o = n("e53d").document,
                        d = r(o) && r(o.createElement);
                    t.exports = function(t) {
                        return d ? o.createElement(t) : {}
                    }
                },
                "20d6": function(t, e, n) {
                    "use strict";
                    var r = n("5ca1"),
                        o = n("0a49")(6),
                        d = "findIndex",
                        c = !0;
                    d in [] && Array(1)[d]((function() {
                        c = !1
                    })), r(r.P + r.F * c, "Array", {
                        findIndex: function(t) {
                            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), n("9c6c")(d)
                },
                "20fd": function(t, e, n) {
                    "use strict";
                    var r = n("d9f6"),
                        o = n("aebd");
                    t.exports = function(object, t, e) {
                        t in object ? r.f(object, t, o(0, e)) : object[t] = e
                    }
                },
                "230e": function(t, e, n) {
                    var r = n("d3f4"),
                        o = n("7726").document,
                        d = r(o) && r(o.createElement);
                    t.exports = function(t) {
                        return d ? o.createElement(t) : {}
                    }
                },
                "241e": function(t, e, n) {
                    var r = n("25eb");
                    t.exports = function(t) {
                        return Object(r(t))
                    }
                },
                "24c5": function(t, e, n) {
                    "use strict";
                    var r, o, d, c, l = n("b8e3"),
                        f = n("e53d"),
                        $ = n("d864"),
                        h = n("40c3"),
                        v = n("63b6"),
                        y = n("f772"),
                        m = n("79aa"),
                        C = n("1173"),
                        S = n("a22a"),
                        x = n("f201"),
                        w = n("4178").set,
                        N = n("aba2")(),
                        _ = n("656e"),
                        O = n("4439"),
                        P = n("bc13"),
                        k = n("cd78"),
                        E = f.TypeError,
                        T = f.process,
                        I = T && T.versions,
                        A = I && I.v8 || "",
                        L = f.Promise,
                        R = "process" == h(T),
                        F = function() {},
                        M = o = _.f,
                        D = !! function() {
                            try {
                                var t = L.resolve(1),
                                    e = (t.constructor = {})[n("5168")("species")] = function(t) {
                                        t(F, F)
                                    };
                                return (R || "function" == typeof PromiseRejectionEvent) && t.then(F) instanceof e && 0 !== A.indexOf("6.6") && -1 === P.indexOf("Chrome/66")
                            } catch (t) {}
                        }(),
                        j = function(t) {
                            var e;
                            return !(!y(t) || "function" != typeof(e = t.then)) && e
                        },
                        B = function(t, e) {
                            if (!t._n) {
                                t._n = !0;
                                var n = t._c;
                                N((function() {
                                    for (var r = t._v, o = 1 == t._s, i = 0, d = function(e) {
                                            var n, d, c, l = o ? e.ok : e.fail,
                                                f = e.resolve,
                                                $ = e.reject,
                                                h = e.domain;
                                            try {
                                                l ? (o || (2 == t._h && G(t), t._h = 1), !0 === l ? n = r : (h && h.enter(), n = l(r), h && (h.exit(), c = !0)), n === e.promise ? $(E("Promise-chain cycle")) : (d = j(n)) ? d.call(n, f, $) : f(n)) : $(r)
                                            } catch (t) {
                                                h && !c && h.exit(), $(t)
                                            }
                                        }; n.length > i;) d(n[i++]);
                                    t._c = [], t._n = !1, e && !t._h && V(t)
                                }))
                            }
                        },
                        V = function(t) {
                            w.call(f, (function() {
                                var e, n, r, o = t._v,
                                    d = z(t);
                                if (d && (e = O((function() {
                                        R ? T.emit("unhandledRejection", o, t) : (n = f.onunhandledrejection) ? n({
                                            promise: t,
                                            reason: o
                                        }) : (r = f.console) && r.error && r.error("Unhandled promise rejection", o)
                                    })), t._h = R || z(t) ? 2 : 1), t._a = void 0, d && e.e) throw e.v
                            }))
                        },
                        z = function(t) {
                            return 1 !== t._h && 0 === (t._a || t._c).length
                        },
                        G = function(t) {
                            w.call(f, (function() {
                                var e;
                                R ? T.emit("rejectionHandled", t) : (e = f.onrejectionhandled) && e({
                                    promise: t,
                                    reason: t._v
                                })
                            }))
                        },
                        U = function(t) {
                            var e = this;
                            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), B(e, !0))
                        },
                        H = function(t) {
                            var e, n = this;
                            if (!n._d) {
                                n._d = !0, n = n._w || n;
                                try {
                                    if (n === t) throw E("Promise can't be resolved itself");
                                    (e = j(t)) ? N((function() {
                                        var r = {
                                            _w: n,
                                            _d: !1
                                        };
                                        try {
                                            e.call(t, $(H, r, 1), $(U, r, 1))
                                        } catch (t) {
                                            U.call(r, t)
                                        }
                                    })): (n._v = t, n._s = 1, B(n, !1))
                                } catch (t) {
                                    U.call({
                                        _w: n,
                                        _d: !1
                                    }, t)
                                }
                            }
                        };
                    D || (L = function(t) {
                        C(this, L, "Promise", "_h"), m(t), r.call(this);
                        try {
                            t($(H, this, 1), $(U, this, 1))
                        } catch (t) {
                            U.call(this, t)
                        }
                    }, (r = function(t) {
                        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
                    }).prototype = n("5c95")(L.prototype, {
                        then: function(t, e) {
                            var n = M(x(this, L));
                            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = R ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && B(this, !1), n.promise
                        },
                        catch: function(t) {
                            return this.then(void 0, t)
                        }
                    }), d = function() {
                        var t = new r;
                        this.promise = t, this.resolve = $(H, t, 1), this.reject = $(U, t, 1)
                    }, _.f = M = function(t) {
                        return t === L || t === c ? new d(t) : o(t)
                    }), v(v.G + v.W + v.F * !D, {
                        Promise: L
                    }), n("45f2")(L, "Promise"), n("4c95")("Promise"), c = n("584a").Promise, v(v.S + v.F * !D, "Promise", {
                        reject: function(t) {
                            var e = M(this);
                            return (0, e.reject)(t), e.promise
                        }
                    }), v(v.S + v.F * (l || !D), "Promise", {
                        resolve: function(t) {
                            return k(l && this === c ? L : this, t)
                        }
                    }), v(v.S + v.F * !(D && n("4ee1")((function(t) {
                        L.all(t).catch(F)
                    }))), "Promise", {
                        all: function(t) {
                            var e = this,
                                n = M(e),
                                r = n.resolve,
                                o = n.reject,
                                d = O((function() {
                                    var n = [],
                                        d = 0,
                                        c = 1;
                                    S(t, !1, (function(t) {
                                        var l = d++,
                                            f = !1;
                                        n.push(void 0), c++, e.resolve(t).then((function(t) {
                                            f || (f = !0, n[l] = t, --c || r(n))
                                        }), o)
                                    })), --c || r(n)
                                }));
                            return d.e && o(d.v), n.promise
                        },
                        race: function(t) {
                            var e = this,
                                n = M(e),
                                r = n.reject,
                                o = O((function() {
                                    S(t, !1, (function(t) {
                                        e.resolve(t).then(n.resolve, r)
                                    }))
                                }));
                            return o.e && r(o.v), n.promise
                        }
                    })
                },
                "252c": function(t, e, n) {
                    "use strict";
                    (function(t) {
                        n.d(e, "a", (function() {
                            return d
                        }));
                        var r = void 0;

                        function o() {
                            o.init || (o.init = !0, r = -1 !== function() {
                                var t = window.navigator.userAgent,
                                    e = t.indexOf("MSIE ");
                                if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                                if (t.indexOf("Trident/") > 0) {
                                    var n = t.indexOf("rv:");
                                    return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10)
                                }
                                var r = t.indexOf("Edge/");
                                return r > 0 ? parseInt(t.substring(r + 5, t.indexOf(".", r)), 10) : -1
                            }())
                        }
                        var d = {
                            render: function() {
                                var t = this.$createElement;
                                return (this._self._c || t)("div", {
                                    staticClass: "resize-observer",
                                    attrs: {
                                        tabindex: "-1"
                                    }
                                })
                            },
                            staticRenderFns: [],
                            _scopeId: "data-v-b329ee4c",
                            name: "resize-observer",
                            methods: {
                                compareAndNotify: function() {
                                    this._w === this.$el.offsetWidth && this._h === this.$el.offsetHeight || (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.$emit("notify"))
                                },
                                addResizeHandlers: function() {
                                    this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify()
                                },
                                removeResizeHandlers: function() {
                                    this._resizeObject && this._resizeObject.onload && (!r && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload)
                                }
                            },
                            mounted: function() {
                                var t = this;
                                o(), this.$nextTick((function() {
                                    t._w = t.$el.offsetWidth, t._h = t.$el.offsetHeight
                                }));
                                var object = document.createElement("object");
                                this._resizeObject = object, object.setAttribute("aria-hidden", "true"), object.setAttribute("tabindex", -1), object.onload = this.addResizeHandlers, object.type = "text/html", r && this.$el.appendChild(object), object.data = "about:blank", r || this.$el.appendChild(object)
                            },
                            beforeDestroy: function() {
                                this.removeResizeHandlers()
                            }
                        };
                        var c = {
                                version: "0.4.5",
                                install: function(t) {
                                    t.component("resize-observer", d), t.component("ResizeObserver", d)
                                }
                            },
                            l = null;
                        "undefined" != typeof window ? l = window.Vue : void 0 !== t && (l = t.Vue), l && l.use(c)
                    }).call(this, n("c8ba"))
                },
                "25eb": function(t, e) {
                    t.exports = function(t) {
                        if (null == t) throw TypeError("Can't call method on  " + t);
                        return t
                    }
                },
                2621: function(t, e) {
                    e.f = Object.getOwnPropertySymbols
                },
                "294c": function(t, e) {
                    t.exports = function(t) {
                        try {
                            return !!t()
                        } catch (t) {
                            return !0
                        }
                    }
                },
                "2aba": function(t, e, n) {
                    var r = n("7726"),
                        o = n("32e9"),
                        d = n("69a8"),
                        c = n("ca5a")("src"),
                        l = n("fa5b"),
                        f = ("" + l).split("toString");
                    n("8378").inspectSource = function(t) {
                        return l.call(t)
                    }, (t.exports = function(t, e, n, l) {
                        var $ = "function" == typeof n;
                        $ && (d(n, "name") || o(n, "name", e)), t[e] !== n && ($ && (d(n, c) || o(n, c, t[e] ? "" + t[e] : f.join(String(e)))), t === r ? t[e] = n : l ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
                    })(Function.prototype, "toString", (function() {
                        return "function" == typeof this && this[c] || l.call(this)
                    }))
                },
                "2aeb": function(t, e, n) {
                    var r = n("cb7c"),
                        o = n("1495"),
                        d = n("e11e"),
                        c = n("613b")("IE_PROTO"),
                        l = function() {},
                        f = function() {
                            var t, iframe = n("230e")("iframe"),
                                i = d.length;
                            for (iframe.style.display = "none", n("fab2").appendChild(iframe), iframe.src = "javascript:", (t = iframe.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), f = t.F; i--;) delete f.prototype[d[i]];
                            return f()
                        };
                    t.exports = Object.create || function(t, e) {
                        var n;
                        return null !== t ? (l.prototype = r(t), n = new l, l.prototype = null, n[c] = t) : n = f(), void 0 === e ? n : o(n, e)
                    }
                },
                "2b4c": function(t, e, n) {
                    var r = n("5537")("wks"),
                        o = n("ca5a"),
                        d = n("7726").Symbol,
                        c = "function" == typeof d;
                    (t.exports = function(t) {
                        return r[t] || (r[t] = c && d[t] || (c ? d : o)("Symbol." + t))
                    }).store = r
                },
                "2d00": function(t, e) {
                    t.exports = !1
                },
                "2d95": function(t, e) {
                    var n = {}.toString;
                    t.exports = function(t) {
                        return n.call(t).slice(8, -1)
                    }
                },
                "2fdb": function(t, e, n) {
                    "use strict";
                    var r = n("5ca1"),
                        o = n("d2c8");
                    r(r.P + r.F * n("5147")("includes"), "String", {
                        includes: function(t) {
                            return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    })
                },
                3024: function(t, e) {
                    t.exports = function(t, e, n) {
                        var r = void 0 === n;
                        switch (e.length) {
                            case 0:
                                return r ? t() : t.call(n);
                            case 1:
                                return r ? t(e[0]) : t.call(n, e[0]);
                            case 2:
                                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                            case 3:
                                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                            case 4:
                                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
                        }
                        return t.apply(n, e)
                    }
                },
                "30f1": function(t, e, n) {
                    "use strict";
                    var r = n("b8e3"),
                        o = n("63b6"),
                        d = n("9138"),
                        c = n("35e8"),
                        l = n("481b"),
                        f = n("8f60"),
                        $ = n("45f2"),
                        h = n("53e2"),
                        v = n("5168")("iterator"),
                        y = !([].keys && "next" in [].keys()),
                        m = function() {
                            return this
                        };
                    t.exports = function(t, e, n, C, S, x, w) {
                        f(n, e, C);
                        var N, _, O, P = function(t) {
                                if (!y && t in I) return I[t];
                                switch (t) {
                                    case "keys":
                                    case "values":
                                        return function() {
                                            return new n(this, t)
                                        }
                                }
                                return function() {
                                    return new n(this, t)
                                }
                            },
                            k = e + " Iterator",
                            E = "values" == S,
                            T = !1,
                            I = t.prototype,
                            A = I[v] || I["@@iterator"] || S && I[S],
                            L = A || P(S),
                            R = S ? E ? P("entries") : L : void 0,
                            F = "Array" == e && I.entries || A;
                        if (F && (O = h(F.call(new t))) !== Object.prototype && O.next && ($(O, k, !0), r || "function" == typeof O[v] || c(O, v, m)), E && A && "values" !== A.name && (T = !0, L = function() {
                                return A.call(this)
                            }), r && !w || !y && !T && I[v] || c(I, v, L), l[e] = L, l[k] = m, S)
                            if (N = {
                                    values: E ? L : P("values"),
                                    keys: x ? L : P("keys"),
                                    entries: R
                                }, w)
                                for (_ in N) _ in I || d(I, _, N[_]);
                            else o(o.P + o.F * (y || T), e, N);
                        return N
                    }
                },
                "32e9": function(t, e, n) {
                    var r = n("86cc"),
                        o = n("4630");
                    t.exports = n("9e1e") ? function(object, t, e) {
                        return r.f(object, t, o(1, e))
                    } : function(object, t, e) {
                        return object[t] = e, object
                    }
                },
                "32fc": function(t, e, n) {
                    var r = n("e53d").document;
                    t.exports = r && r.documentElement
                },
                3314: function(t, e, n) {
                    "use strict";
                    var r = n("8f82");
                    n.n(r).a
                },
                "335c": function(t, e, n) {
                    var r = n("6b4c");
                    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                        return "String" == r(t) ? t.split("") : Object(t)
                    }
                },
                "355d": function(t, e) {
                    e.f = {}.propertyIsEnumerable
                },
                "35e8": function(t, e, n) {
                    var r = n("d9f6"),
                        o = n("aebd");
                    t.exports = n("8e60") ? function(object, t, e) {
                        return r.f(object, t, o(1, e))
                    } : function(object, t, e) {
                        return object[t] = e, object
                    }
                },
                "36c3": function(t, e, n) {
                    var r = n("335c"),
                        o = n("25eb");
                    t.exports = function(t) {
                        return r(o(t))
                    }
                },
                3702: function(t, e, n) {
                    var r = n("481b"),
                        o = n("5168")("iterator"),
                        d = Array.prototype;
                    t.exports = function(t) {
                        return void 0 !== t && (r.Array === t || d[o] === t)
                    }
                },
                3846: function(t, e, n) {
                    n("9e1e") && "g" != /./g.flags && n("86cc").f(RegExp.prototype, "flags", {
                        configurable: !0,
                        get: n("0bfb")
                    })
                },
                "38fd": function(t, e, n) {
                    var r = n("69a8"),
                        o = n("4bf8"),
                        d = n("613b")("IE_PROTO"),
                        c = Object.prototype;
                    t.exports = Object.getPrototypeOf || function(t) {
                        return t = o(t), r(t, d) ? t[d] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
                    }
                },
                "3a38": function(t, e) {
                    var n = Math.ceil,
                        r = Math.floor;
                    t.exports = function(t) {
                        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
                    }
                },
                "3c11": function(t, e, n) {
                    "use strict";
                    var r = n("63b6"),
                        o = n("584a"),
                        d = n("e53d"),
                        c = n("f201"),
                        l = n("cd78");
                    r(r.P + r.R, "Promise", {
                        finally: function(t) {
                            var e = c(this, o.Promise || d.Promise),
                                n = "function" == typeof t;
                            return this.then(n ? function(n) {
                                return l(e, t()).then((function() {
                                    return n
                                }))
                            } : t, n ? function(n) {
                                return l(e, t()).then((function() {
                                    throw n
                                }))
                            } : t)
                        }
                    })
                },
                "40c3": function(t, e, n) {
                    var r = n("6b4c"),
                        o = n("5168")("toStringTag"),
                        d = "Arguments" == r(function() {
                            return arguments
                        }());
                    t.exports = function(t) {
                        var e, n, c;
                        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                            try {
                                return t[e]
                            } catch (t) {}
                        }(e = Object(t), o)) ? n : d ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
                    }
                },
                4178: function(t, e, n) {
                    var r, o, d, c = n("d864"),
                        l = n("3024"),
                        html = n("32fc"),
                        f = n("1ec9"),
                        $ = n("e53d"),
                        h = $.process,
                        v = $.setImmediate,
                        y = $.clearImmediate,
                        m = $.MessageChannel,
                        C = $.Dispatch,
                        S = 0,
                        x = {},
                        w = function() {
                            var t = +this;
                            if (x.hasOwnProperty(t)) {
                                var e = x[t];
                                delete x[t], e()
                            }
                        },
                        N = function(t) {
                            w.call(t.data)
                        };
                    v && y || (v = function(t) {
                        for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
                        return x[++S] = function() {
                            l("function" == typeof t ? t : Function(t), e)
                        }, r(S), S
                    }, y = function(t) {
                        delete x[t]
                    }, "process" == n("6b4c")(h) ? r = function(t) {
                        h.nextTick(c(w, t, 1))
                    } : C && C.now ? r = function(t) {
                        C.now(c(w, t, 1))
                    } : m ? (d = (o = new m).port2, o.port1.onmessage = N, r = c(d.postMessage, d, 1)) : $.addEventListener && "function" == typeof postMessage && !$.importScripts ? (r = function(t) {
                        $.postMessage(t + "", "*")
                    }, $.addEventListener("message", N, !1)) : r = "onreadystatechange" in f("script") ? function(t) {
                        html.appendChild(f("script")).onreadystatechange = function() {
                            html.removeChild(this), w.call(t)
                        }
                    } : function(t) {
                        setTimeout(c(w, t, 1), 0)
                    }), t.exports = {
                        set: v,
                        clear: y
                    }
                },
                "41a0": function(t, e, n) {
                    "use strict";
                    var r = n("2aeb"),
                        o = n("4630"),
                        d = n("7f20"),
                        c = {};
                    n("32e9")(c, n("2b4c")("iterator"), (function() {
                        return this
                    })), t.exports = function(t, e, n) {
                        t.prototype = r(c, {
                            next: o(1, n)
                        }), d(t, e + " Iterator")
                    }
                },
                "43fc": function(t, e, n) {
                    "use strict";
                    var r = n("63b6"),
                        o = n("656e"),
                        d = n("4439");
                    r(r.S, "Promise", {
                        try: function(t) {
                            var e = o.f(this),
                                n = d(t);
                            return (n.e ? e.reject : e.resolve)(n.v), e.promise
                        }
                    })
                },
                4439: function(t, e) {
                    t.exports = function(t) {
                        try {
                            return {
                                e: !1,
                                v: t()
                            }
                        } catch (t) {
                            return {
                                e: !0,
                                v: t
                            }
                        }
                    }
                },
                "454f": function(t, e, n) {
                    n("46a7");
                    var r = n("584a").Object;
                    t.exports = function(t, e, desc) {
                        return r.defineProperty(t, e, desc)
                    }
                },
                "456d": function(t, e, n) {
                    var r = n("4bf8"),
                        o = n("0d58");
                    n("5eda")("keys", (function() {
                        return function(t) {
                            return o(r(t))
                        }
                    }))
                },
                4588: function(t, e) {
                    var n = Math.ceil,
                        r = Math.floor;
                    t.exports = function(t) {
                        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
                    }
                },
                "45f2": function(t, e, n) {
                    var r = n("d9f6").f,
                        o = n("07e3"),
                        d = n("5168")("toStringTag");
                    t.exports = function(t, e, n) {
                        t && !o(t = n ? t : t.prototype, d) && r(t, d, {
                            configurable: !0,
                            value: e
                        })
                    }
                },
                4630: function(t, e) {
                    t.exports = function(t, e) {
                        return {
                            enumerable: !(1 & t),
                            configurable: !(2 & t),
                            writable: !(4 & t),
                            value: e
                        }
                    }
                },
                "46a7": function(t, e, n) {
                    var r = n("63b6");
                    r(r.S + r.F * !n("8e60"), "Object", {
                        defineProperty: n("d9f6").f
                    })
                },
                "47ee": function(t, e, n) {
                    var r = n("c3a1"),
                        o = n("9aa9"),
                        d = n("355d");
                    t.exports = function(t) {
                        var e = r(t),
                            n = o.f;
                        if (n)
                            for (var c, l = n(t), f = d.f, i = 0; l.length > i;) f.call(t, c = l[i++]) && e.push(c);
                        return e
                    }
                },
                "481b": function(t, e) {
                    t.exports = {}
                },
                4883: function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.colorNameToHex = e.isColorName = e.HexToRgba = e.ShadeColor = void 0;
                    e.ShadeColor = function(t, e) {
                        var a = parseInt(t.substring(1, 3), 16),
                            n = parseInt(t.substring(3, 5), 16),
                            r = parseInt(t.substring(5, 7), 16);
                        return a = parseInt(a * (100 + e) / 100), n = (n = parseInt(n * (100 + e) / 100)) < 255 ? n : 255, r = (r = parseInt(r * (100 + e) / 100)) < 255 ? r : 255, "#" + (1 === (a = a < 255 ? a : 255).toString(16).length ? "0" + a.toString(16) : a.toString(16)) + (1 === n.toString(16).length ? "0" + n.toString(16) : n.toString(16)) + (1 === r.toString(16).length ? "0" + r.toString(16) : r.toString(16))
                    };
                    e.HexToRgba = function(t, e) {
                        var a;
                        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(t)) return 3 === (a = t.substring(1).split("")).length && (a = [a[0], a[0], a[1], a[1], a[2], a[2]]), a = "0x".concat(a.join("")), "rgba(".concat([a >> 16 & 255, a >> 8 & 255, 255 & a].join(", "), ", ").concat(e, ")");
                        throw new Error("Bad Hex")
                    };
                    e.isColorName = function(t) {
                        if (!t) throw new Error("isColorName: No color");
                        return !t.includes("#")
                    };
                    e.colorNameToHex = function(t) {
                        if (!t) throw new Error("colorNameToHex: No color");
                        var e = {
                            aliceblue: "#f0f8ff",
                            antiquewhite: "#faebd7",
                            aqua: "#00ffff",
                            aquamarine: "#7fffd4",
                            azure: "#f0ffff",
                            beige: "#f5f5dc",
                            bisque: "#ffe4c4",
                            black: "#000000",
                            blanchedalmond: "#ffebcd",
                            blue: "#0000ff",
                            blueviolet: "#8a2be2",
                            brown: "#a52a2a",
                            burlywood: "#deb887",
                            cadetblue: "#5f9ea0",
                            chartreuse: "#7fff00",
                            chocolate: "#d2691e",
                            coral: "#ff7f50",
                            cornflowerblue: "#6495ed",
                            cornsilk: "#fff8dc",
                            crimson: "#dc143c",
                            cyan: "#00ffff",
                            darkblue: "#00008b",
                            darkcyan: "#008b8b",
                            darkgoldenrod: "#b8860b",
                            darkgray: "#a9a9a9",
                            darkgreen: "#006400",
                            darkkhaki: "#bdb76b",
                            darkmagenta: "#8b008b",
                            darkolivegreen: "#556b2f",
                            darkorange: "#ff8c00",
                            darkorchid: "#9932cc",
                            darkred: "#8b0000",
                            darksalmon: "#e9967a",
                            darkseagreen: "#8fbc8f",
                            darkslateblue: "#483d8b",
                            darkslategray: "#2f4f4f",
                            darkturquoise: "#00ced1",
                            darkviolet: "#9400d3",
                            deeppink: "#ff1493",
                            deepskyblue: "#00bfff",
                            dimgray: "#696969",
                            dodgerblue: "#1e90ff",
                            firebrick: "#b22222",
                            floralwhite: "#fffaf0",
                            forestgreen: "#228b22",
                            fuchsia: "#ff00ff",
                            gainsboro: "#dcdcdc",
                            ghostwhite: "#f8f8ff",
                            gold: "#ffd700",
                            goldenrod: "#daa520",
                            gray: "#808080",
                            green: "#008000",
                            greenyellow: "#adff2f",
                            honeydew: "#f0fff0",
                            hotpink: "#ff69b4",
                            "indianred ": "#cd5c5c",
                            indigo: "#4b0082",
                            ivory: "#fffff0",
                            khaki: "#f0e68c",
                            lavender: "#e6e6fa",
                            lavenderblush: "#fff0f5",
                            lawngreen: "#7cfc00",
                            lemonchiffon: "#fffacd",
                            lightblue: "#add8e6",
                            lightcoral: "#f08080",
                            lightcyan: "#e0ffff",
                            lightgoldenrodyellow: "#fafad2",
                            lightgrey: "#d3d3d3",
                            lightgreen: "#90ee90",
                            lightpink: "#ffb6c1",
                            lightsalmon: "#ffa07a",
                            lightseagreen: "#20b2aa",
                            lightskyblue: "#87cefa",
                            lightslategray: "#778899",
                            lightsteelblue: "#b0c4de",
                            lightyellow: "#ffffe0",
                            lime: "#00ff00",
                            limegreen: "#32cd32",
                            linen: "#faf0e6",
                            magenta: "#ff00ff",
                            maroon: "#800000",
                            mediumaquamarine: "#66cdaa",
                            mediumblue: "#0000cd",
                            mediumorchid: "#ba55d3",
                            mediumpurple: "#9370d8",
                            mediumseagreen: "#3cb371",
                            mediumslateblue: "#7b68ee",
                            mediumspringgreen: "#00fa9a",
                            mediumturquoise: "#48d1cc",
                            mediumvioletred: "#c71585",
                            midnightblue: "#191970",
                            mintcream: "#f5fffa",
                            mistyrose: "#ffe4e1",
                            moccasin: "#ffe4b5",
                            navajowhite: "#ffdead",
                            navy: "#000080",
                            oldlace: "#fdf5e6",
                            olive: "#808000",
                            olivedrab: "#6b8e23",
                            orange: "#ffa500",
                            orangered: "#ff4500",
                            orchid: "#da70d6",
                            palegoldenrod: "#eee8aa",
                            palegreen: "#98fb98",
                            paleturquoise: "#afeeee",
                            palevioletred: "#d87093",
                            papayawhip: "#ffefd5",
                            peachpuff: "#ffdab9",
                            peru: "#cd853f",
                            pink: "#ffc0cb",
                            plum: "#dda0dd",
                            powderblue: "#b0e0e6",
                            purple: "#800080",
                            rebeccapurple: "#663399",
                            red: "#ff0000",
                            rosybrown: "#bc8f8f",
                            royalblue: "#4169e1",
                            saddlebrown: "#8b4513",
                            salmon: "#fa8072",
                            sandybrown: "#f4a460",
                            seagreen: "#2e8b57",
                            seashell: "#fff5ee",
                            sienna: "#a0522d",
                            silver: "#c0c0c0",
                            skyblue: "#87ceeb",
                            slateblue: "#6a5acd",
                            slategray: "#708090",
                            snow: "#fffafa",
                            springgreen: "#00ff7f",
                            steelblue: "#4682b4",
                            tan: "#d2b48c",
                            teal: "#008080",
                            thistle: "#d8bfd8",
                            tomato: "#ff6347",
                            turquoise: "#40e0d0",
                            violet: "#ee82ee",
                            wheat: "#f5deb3",
                            white: "#ffffff",
                            whitesmoke: "#f5f5f5",
                            yellow: "#ffff00",
                            yellowgreen: "#9acd32"
                        };
                        return void 0 !== e[t.toLowerCase()] && e[t.toLowerCase()]
                    }
                },
                "4bf8": function(t, e, n) {
                    var r = n("be13");
                    t.exports = function(t) {
                        return Object(r(t))
                    }
                },
                "4c95": function(t, e, n) {
                    "use strict";
                    var r = n("e53d"),
                        o = n("584a"),
                        d = n("d9f6"),
                        c = n("8e60"),
                        l = n("5168")("species");
                    t.exports = function(t) {
                        var e = "function" == typeof o[t] ? o[t] : r[t];
                        c && e && !e[l] && d.f(e, l, {
                            configurable: !0,
                            get: function() {
                                return this
                            }
                        })
                    }
                },
                "4ee1": function(t, e, n) {
                    var r = n("5168")("iterator"),
                        o = !1;
                    try {
                        var d = [7][r]();
                        d.return = function() {
                            o = !0
                        }, Array.from(d, (function() {
                            throw 2
                        }))
                    } catch (t) {}
                    t.exports = function(t, e) {
                        if (!e && !o) return !1;
                        var n = !1;
                        try {
                            var d = [7],
                                c = d[r]();
                            c.next = function() {
                                return {
                                    done: n = !0
                                }
                            }, d[r] = function() {
                                return c
                            }, t(d)
                        } catch (t) {}
                        return n
                    }
                },
                "50ed": function(t, e) {
                    t.exports = function(t, e) {
                        return {
                            value: e,
                            done: !!t
                        }
                    }
                },
                5147: function(t, e, n) {
                    var r = n("2b4c")("match");
                    t.exports = function(t) {
                        var e = /./;
                        try {
                            "/./" [t](e)
                        } catch (n) {
                            try {
                                return e[r] = !1, !"/./" [t](e)
                            } catch (t) {}
                        }
                        return !0
                    }
                },
                5168: function(t, e, n) {
                    var r = n("dbdb")("wks"),
                        o = n("62a0"),
                        d = n("e53d").Symbol,
                        c = "function" == typeof d;
                    (t.exports = function(t) {
                        return r[t] || (r[t] = c && d[t] || (c ? d : o)("Symbol." + t))
                    }).store = r
                },
                "52a7": function(t, e) {
                    e.f = {}.propertyIsEnumerable
                },
                "53e2": function(t, e, n) {
                    var r = n("07e3"),
                        o = n("241e"),
                        d = n("5559")("IE_PROTO"),
                        c = Object.prototype;
                    t.exports = Object.getPrototypeOf || function(t) {
                        return t = o(t), r(t, d) ? t[d] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
                    }
                },
                "549b": function(t, e, n) {
                    "use strict";
                    var r = n("d864"),
                        o = n("63b6"),
                        d = n("241e"),
                        c = n("b0dc"),
                        l = n("3702"),
                        f = n("b447"),
                        $ = n("20fd"),
                        h = n("7cd6");
                    o(o.S + o.F * !n("4ee1")((function(t) {
                        Array.from(t)
                    })), "Array", {
                        from: function(t) {
                            var e, n, o, v, y = d(t),
                                m = "function" == typeof this ? this : Array,
                                C = arguments.length,
                                S = C > 1 ? arguments[1] : void 0,
                                x = void 0 !== S,
                                w = 0,
                                N = h(y);
                            if (x && (S = r(S, C > 2 ? arguments[2] : void 0, 2)), null == N || m == Array && l(N))
                                for (n = new m(e = f(y.length)); e > w; w++) $(n, w, x ? S(y[w], w) : y[w]);
                            else
                                for (v = N.call(y), n = new m; !(o = v.next()).done; w++) $(n, w, x ? c(v, S, [o.value, w], !0) : o.value);
                            return n.length = w, n
                        }
                    })
                },
                "54a1": function(t, e, n) {
                    n("6c1c"), n("1654"), t.exports = n("95d5")
                },
                5537: function(t, e, n) {
                    var r = n("8378"),
                        o = n("7726"),
                        d = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
                    (t.exports = function(t, e) {
                        return d[t] || (d[t] = void 0 !== e ? e : {})
                    })("versions", []).push({
                        version: r.version,
                        mode: n("2d00") ? "pure" : "global",
                        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                    })
                },
                5559: function(t, e, n) {
                    var r = n("dbdb")("keys"),
                        o = n("62a0");
                    t.exports = function(t) {
                        return r[t] || (r[t] = o(t))
                    }
                },
                "584a": function(t, e) {
                    var n = t.exports = {
                        version: "2.6.11"
                    };
                    "number" == typeof __e && (__e = n)
                },
                "5b4e": function(t, e, n) {
                    var r = n("36c3"),
                        o = n("b447"),
                        d = n("0fc9");
                    t.exports = function(t) {
                        return function(e, n, c) {
                            var l, f = r(e),
                                $ = o(f.length),
                                h = d(c, $);
                            if (t && n != n) {
                                for (; $ > h;)
                                    if ((l = f[h++]) != l) return !0
                            } else
                                for (; $ > h; h++)
                                    if ((t || h in f) && f[h] === n) return t || h || 0;
                            return !t && -1
                        }
                    }
                },
                "5c95": function(t, e, n) {
                    var r = n("35e8");
                    t.exports = function(t, e, n) {
                        for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
                        return t
                    }
                },
                "5ca1": function(t, e, n) {
                    var r = n("7726"),
                        o = n("8378"),
                        d = n("32e9"),
                        c = n("2aba"),
                        l = n("9b43"),
                        f = function(t, e, source) {
                            var n, $, h, v, y = t & f.F,
                                m = t & f.G,
                                C = t & f.S,
                                S = t & f.P,
                                x = t & f.B,
                                w = m ? r : C ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                                N = m ? o : o[e] || (o[e] = {}),
                                _ = N.prototype || (N.prototype = {});
                            for (n in m && (source = e), source) h = (($ = !y && w && void 0 !== w[n]) ? w : source)[n], v = x && $ ? l(h, r) : S && "function" == typeof h ? l(Function.call, h) : h, w && c(w, n, h, t & f.U), N[n] != h && d(N, n, v), S && _[n] != h && (_[n] = h)
                        };
                    r.core = o, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, t.exports = f
                },
                "5dbc": function(t, e, n) {
                    var r = n("d3f4"),
                        o = n("8b97").set;
                    t.exports = function(t, e, n) {
                        var d, c = e.constructor;
                        return c !== n && "function" == typeof c && (d = c.prototype) !== n.prototype && r(d) && o && o(t, d), t
                    }
                },
                "5eda": function(t, e, n) {
                    var r = n("5ca1"),
                        o = n("8378"),
                        d = n("79e5");
                    t.exports = function(t, e) {
                        var n = (o.Object || {})[t] || Object[t],
                            c = {};
                        c[t] = e(n), r(r.S + r.F * d((function() {
                            n(1)
                        })), "Object", c)
                    }
                },
                "613b": function(t, e, n) {
                    var r = n("5537")("keys"),
                        o = n("ca5a");
                    t.exports = function(t) {
                        return r[t] || (r[t] = o(t))
                    }
                },
                "626a": function(t, e, n) {
                    var r = n("2d95");
                    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                        return "String" == r(t) ? t.split("") : Object(t)
                    }
                },
                "62a0": function(t, e) {
                    var n = 0,
                        r = Math.random();
                    t.exports = function(t) {
                        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
                    }
                },
                "63b6": function(t, e, n) {
                    var r = n("e53d"),
                        o = n("584a"),
                        d = n("d864"),
                        c = n("35e8"),
                        l = n("07e3"),
                        f = function(t, e, source) {
                            var n, $, h, v = t & f.F,
                                y = t & f.G,
                                m = t & f.S,
                                C = t & f.P,
                                S = t & f.B,
                                x = t & f.W,
                                w = y ? o : o[e] || (o[e] = {}),
                                N = w.prototype,
                                _ = y ? r : m ? r[e] : (r[e] || {}).prototype;
                            for (n in y && (source = e), source)($ = !v && _ && void 0 !== _[n]) && l(w, n) || (h = $ ? _[n] : source[n], w[n] = y && "function" != typeof _[n] ? source[n] : S && $ ? d(h, r) : x && _[n] == h ? function(t) {
                                var e = function(a, b, e) {
                                    if (this instanceof t) {
                                        switch (arguments.length) {
                                            case 0:
                                                return new t;
                                            case 1:
                                                return new t(a);
                                            case 2:
                                                return new t(a, b)
                                        }
                                        return new t(a, b, e)
                                    }
                                    return t.apply(this, arguments)
                                };
                                return e.prototype = t.prototype, e
                            }(h) : C && "function" == typeof h ? d(Function.call, h) : h, C && ((w.virtual || (w.virtual = {}))[n] = h, t & f.R && N && !N[n] && c(N, n, h)))
                        };
                    f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, t.exports = f
                },
                "656e": function(t, e, n) {
                    "use strict";
                    var r = n("79aa");

                    function o(t) {
                        var e, n;
                        this.promise = new t((function(t, r) {
                            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                            e = t, n = r
                        })), this.resolve = r(e), this.reject = r(n)
                    }
                    t.exports.f = function(t) {
                        return new o(t)
                    }
                },
                6718: function(t, e, n) {
                    var r = n("e53d"),
                        o = n("584a"),
                        d = n("b8e3"),
                        c = n("ccb9"),
                        l = n("d9f6").f;
                    t.exports = function(t) {
                        var e = o.Symbol || (o.Symbol = d ? {} : r.Symbol || {});
                        "_" == t.charAt(0) || t in e || l(e, t, {
                            value: c.f(t)
                        })
                    }
                },
                6762: function(t, e, n) {
                    "use strict";
                    var r = n("5ca1"),
                        o = n("c366")(!0);
                    r(r.P, "Array", {
                        includes: function(t) {
                            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), n("9c6c")("includes")
                },
                "67bb": function(t, e, n) {
                    t.exports = n("f921")
                },
                6821: function(t, e, n) {
                    var r = n("626a"),
                        o = n("be13");
                    t.exports = function(t) {
                        return r(o(t))
                    }
                },
                "696e": function(t, e, n) {
                    n("c207"), n("1654"), n("6c1c"), n("24c5"), n("3c11"), n("43fc"), t.exports = n("584a").Promise
                },
                6996: function(t, e, n) {
                    "use strict";
                    var r = n("92cc");
                    n.n(r).a
                },
                "69a8": function(t, e) {
                    var n = {}.hasOwnProperty;
                    t.exports = function(t, e) {
                        return n.call(t, e)
                    }
                },
                "69d3": function(t, e, n) {
                    n("6718")("asyncIterator")
                },
                "6a99": function(t, e, n) {
                    var r = n("d3f4");
                    t.exports = function(t, e) {
                        if (!r(t)) return t;
                        var n, o;
                        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
                        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                        throw TypeError("Can't convert object to primitive value")
                    }
                },
                "6abf": function(t, e, n) {
                    var r = n("e6f3"),
                        o = n("1691").concat("length", "prototype");
                    e.f = Object.getOwnPropertyNames || function(t) {
                        return r(t, o)
                    }
                },
                "6b4c": function(t, e) {
                    var n = {}.toString;
                    t.exports = function(t) {
                        return n.call(t).slice(8, -1)
                    }
                },
                "6b54": function(t, e, n) {
                    "use strict";
                    n("3846");
                    var r = n("cb7c"),
                        o = n("0bfb"),
                        d = n("9e1e"),
                        c = /./.toString,
                        l = function(t) {
                            n("2aba")(RegExp.prototype, "toString", t, !0)
                        };
                    n("79e5")((function() {
                        return "/a/b" != c.call({
                            source: "a",
                            flags: "b"
                        })
                    })) ? l((function() {
                        var t = r(this);
                        return "/".concat(t.source, "/", "flags" in t ? t.flags : !d && t instanceof RegExp ? o.call(t) : void 0)
                    })) : "toString" != c.name && l((function() {
                        return c.call(this)
                    }))
                },
                "6c1c": function(t, e, n) {
                    n("c367");
                    for (var r = n("e53d"), o = n("35e8"), d = n("481b"), c = n("5168")("toStringTag"), l = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), i = 0; i < l.length; i++) {
                        var f = l[i],
                            $ = r[f],
                            h = $ && $.prototype;
                        h && !h[c] && o(h, c, f), d[f] = d.Array
                    }
                },
                "71c1": function(t, e, n) {
                    var r = n("3a38"),
                        o = n("25eb");
                    t.exports = function(t) {
                        return function(e, n) {
                            var a, b, s = String(o(e)),
                                i = r(n),
                                d = s.length;
                            return i < 0 || i >= d ? t ? "" : void 0 : (a = s.charCodeAt(i)) < 55296 || a > 56319 || i + 1 === d || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? t ? s.charAt(i) : a : t ? s.slice(i, i + 2) : b - 56320 + (a - 55296 << 10) + 65536
                        }
                    }
                },
                7514: function(t, e, n) {
                    "use strict";
                    var r = n("5ca1"),
                        o = n("0a49")(5),
                        d = !0;
                    "find" in [] && Array(1).find((function() {
                        d = !1
                    })), r(r.P + r.F * d, "Array", {
                        find: function(t) {
                            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), n("9c6c")("find")
                },
                "765d": function(t, e, n) {
                    n("6718")("observable")
                },
                7726: function(t, e) {
                    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = n)
                },
                "774e": function(t, e, n) {
                    t.exports = n("d2d5")
                },
                "77f1": function(t, e, n) {
                    var r = n("4588"),
                        o = Math.max,
                        d = Math.min;
                    t.exports = function(t, e) {
                        return (t = r(t)) < 0 ? o(t + e, 0) : d(t, e)
                    }
                },
                "794b": function(t, e, n) {
                    t.exports = !n("8e60") && !n("294c")((function() {
                        return 7 != Object.defineProperty(n("1ec9")("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                },
                "795b": function(t, e, n) {
                    t.exports = n("696e")
                },
                "79aa": function(t, e) {
                    t.exports = function(t) {
                        if ("function" != typeof t) throw TypeError(t + " is not a function!");
                        return t
                    }
                },
                "79e5": function(t, e) {
                    t.exports = function(t) {
                        try {
                            return !!t()
                        } catch (t) {
                            return !0
                        }
                    }
                },
                "7cd6": function(t, e, n) {
                    var r = n("40c3"),
                        o = n("5168")("iterator"),
                        d = n("481b");
                    t.exports = n("584a").getIteratorMethod = function(t) {
                        if (null != t) return t[o] || t["@@iterator"] || d[r(t)]
                    }
                },
                "7e90": function(t, e, n) {
                    var r = n("d9f6"),
                        o = n("e4ae"),
                        d = n("c3a1");
                    t.exports = n("8e60") ? Object.defineProperties : function(t, e) {
                        o(t);
                        for (var n, c = d(e), l = c.length, i = 0; l > i;) r.f(t, n = c[i++], e[n]);
                        return t
                    }
                },
                "7f20": function(t, e, n) {
                    var r = n("86cc").f,
                        o = n("69a8"),
                        d = n("2b4c")("toStringTag");
                    t.exports = function(t, e, n) {
                        t && !o(t = n ? t : t.prototype, d) && r(t, d, {
                            configurable: !0,
                            value: e
                        })
                    }
                },
                "7f7f": function(t, e, n) {
                    var r = n("86cc").f,
                        o = Function.prototype,
                        d = /^\s*function ([^ (]*)/;
                    "name" in o || n("9e1e") && r(o, "name", {
                        configurable: !0,
                        get: function() {
                            try {
                                return ("" + this).match(d)[1]
                            } catch (t) {
                                return ""
                            }
                        }
                    })
                },
                8378: function(t, e) {
                    var n = t.exports = {
                        version: "2.6.11"
                    };
                    "number" == typeof __e && (__e = n)
                },
                8436: function(t, e) {
                    t.exports = function() {}
                },
                "84f2": function(t, e) {
                    t.exports = {}
                },
                "85f2": function(t, e, n) {
                    t.exports = n("454f")
                },
                "85fe": function(t, e, n) {
                    "use strict";
                    (function(t) {
                        function r(t) {
                            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }

                        function o(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        function d(t) {
                            return function(t) {
                                if (Array.isArray(t)) {
                                    for (var i = 0, e = new Array(t.length); i < t.length; i++) e[i] = t[i];
                                    return e
                                }
                            }(t) || function(t) {
                                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance")
                            }()
                        }
                        n.d(e, "a", (function() {
                            return $
                        }));
                        var c = function() {
                            function t(e, n, r) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), this.el = e, this.observer = null, this.frozen = !1, this.createObserver(n, r)
                            }
                            var e, n, r;
                            return e = t, (n = [{
                                key: "createObserver",
                                value: function(t, e) {
                                    var n = this;
                                    if (this.observer && this.destroyObserver(), !this.frozen) {
                                        var r;
                                        if (this.options = "function" == typeof(r = t) ? {
                                                callback: r
                                            } : r, this.callback = function(t, e) {
                                                n.options.callback(t, e), t && n.options.once && (n.frozen = !0, n.destroyObserver())
                                            }, this.callback && this.options.throttle) {
                                            var o = (this.options.throttleOptions || {}).leading;
                                            this.callback = function(t, e) {
                                                var n, r, o, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                                    l = function(l) {
                                                        for (var f = arguments.length, $ = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++) $[h - 1] = arguments[h];
                                                        if (o = $, !n || l !== r) {
                                                            var v = c.leading;
                                                            "function" == typeof v && (v = v(l, r)), n && l === r || !v || t.apply(void 0, [l].concat(d(o))), r = l, clearTimeout(n), n = setTimeout((function() {
                                                                t.apply(void 0, [l].concat(d(o))), n = 0
                                                            }), e)
                                                        }
                                                    };
                                                return l._clear = function() {
                                                    clearTimeout(n), n = null
                                                }, l
                                            }(this.callback, this.options.throttle, {
                                                leading: function(t) {
                                                    return "both" === o || "visible" === o && t || "hidden" === o && !t
                                                }
                                            })
                                        }
                                        this.oldResult = void 0, this.observer = new IntersectionObserver((function(t) {
                                            var e = t[0];
                                            if (t.length > 1) {
                                                var r = t.find((function(t) {
                                                    return t.isIntersecting
                                                }));
                                                r && (e = r)
                                            }
                                            if (n.callback) {
                                                var o = e.isIntersecting && e.intersectionRatio >= n.threshold;
                                                if (o === n.oldResult) return;
                                                n.oldResult = o, n.callback(o, e)
                                            }
                                        }), this.options.intersection), e.context.$nextTick((function() {
                                            n.observer && n.observer.observe(n.el)
                                        }))
                                    }
                                }
                            }, {
                                key: "destroyObserver",
                                value: function() {
                                    this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null)
                                }
                            }, {
                                key: "threshold",
                                get: function() {
                                    return this.options.intersection && this.options.intersection.threshold || 0
                                }
                            }]) && o(e.prototype, n), r && o(e, r), t
                        }();

                        function l(t, e, n) {
                            var r = e.value;
                            if (r)
                                if ("undefined" == typeof IntersectionObserver) console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
                                else {
                                    var o = new c(t, r, n);
                                    t._vue_visibilityState = o
                                }
                        }

                        function f(t) {
                            var e = t._vue_visibilityState;
                            e && (e.destroyObserver(), delete t._vue_visibilityState)
                        }
                        var $ = {
                            bind: l,
                            update: function(t, e, n) {
                                var o = e.value;
                                if (! function t(e, n) {
                                        if (e === n) return !0;
                                        if ("object" === r(e)) {
                                            for (var o in e)
                                                if (!t(e[o], n[o])) return !1;
                                            return !0
                                        }
                                        return !1
                                    }(o, e.oldValue)) {
                                    var d = t._vue_visibilityState;
                                    o ? d ? d.createObserver(o, n) : l(t, {
                                        value: o
                                    }, n) : f(t)
                                }
                            },
                            unbind: f
                        };
                        var h = {
                                version: "0.4.6",
                                install: function(t) {
                                    t.directive("observe-visibility", $)
                                }
                            },
                            v = null;
                        "undefined" != typeof window ? v = window.Vue : void 0 !== t && (v = t.Vue), v && v.use(h)
                    }).call(this, n("c8ba"))
                },
                "86cc": function(t, e, n) {
                    var r = n("cb7c"),
                        o = n("c69a"),
                        d = n("6a99"),
                        c = Object.defineProperty;
                    e.f = n("9e1e") ? Object.defineProperty : function(t, e, n) {
                        if (r(t), e = d(e, !0), r(n), o) try {
                            return c(t, e, n)
                        } catch (t) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                        return "value" in n && (t[e] = n.value), t
                    }
                },
                8875: function(t, e, n) {
                    var r, o, d;
                    "undefined" != typeof self && self, o = [], void 0 === (d = "function" == typeof(r = function() {
                        return function() {
                            if (document.currentScript) return document.currentScript;
                            try {
                                throw new Error
                            } catch (l) {
                                var t, e, n, r = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(l.stack) || /@([^@]*):(\d+):(\d+)\s*$/gi.exec(l.stack),
                                    o = r && r[1] || !1,
                                    line = r && r[2] || !1,
                                    d = document.location.href.replace(document.location.hash, ""),
                                    c = document.getElementsByTagName("script");
                                o === d && (t = document.documentElement.outerHTML, e = new RegExp("(?:[^\\n]+?\\n){0," + (line - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), n = t.replace(e, "$1").trim());
                                for (var i = 0; i < c.length; i++) {
                                    if ("interactive" === c[i].readyState) return c[i];
                                    if (c[i].src === o) return c[i];
                                    if (o === d && c[i].innerHTML && c[i].innerHTML.trim() === n) return c[i]
                                }
                                return null
                            }
                        }
                    }) ? r.apply(e, o) : r) || (t.exports = d)
                },
                "8b97": function(t, e, n) {
                    var r = n("d3f4"),
                        o = n("cb7c"),
                        d = function(t, e) {
                            if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
                        };
                    t.exports = {
                        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                            try {
                                (r = n("9b43")(Function.call, n("11e9").f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                            } catch (t) {
                                e = !0
                            }
                            return function(t, n) {
                                return d(t, n), e ? t.__proto__ = n : r(t, n), t
                            }
                        }({}, !1) : void 0),
                        check: d
                    }
                },
                "8bbf": function(t, e) {
                    t.exports = n(16)
                },
                "8e60": function(t, e, n) {
                    t.exports = !n("294c")((function() {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                },
                "8e6e": function(t, e, n) {
                    var r = n("5ca1"),
                        o = n("990b"),
                        d = n("6821"),
                        c = n("11e9"),
                        l = n("f1ae");
                    r(r.S, "Object", {
                        getOwnPropertyDescriptors: function(object) {
                            for (var t, desc, e = d(object), n = c.f, r = o(e), f = {}, i = 0; r.length > i;) void 0 !== (desc = n(e, t = r[i++])) && l(f, t, desc);
                            return f
                        }
                    })
                },
                "8f60": function(t, e, n) {
                    "use strict";
                    var r = n("a159"),
                        o = n("aebd"),
                        d = n("45f2"),
                        c = {};
                    n("35e8")(c, n("5168")("iterator"), (function() {
                        return this
                    })), t.exports = function(t, e, n) {
                        t.prototype = r(c, {
                            next: o(1, n)
                        }), d(t, e + " Iterator")
                    }
                },
                "8f82": function(t, e, n) {},
                9003: function(t, e, n) {
                    var r = n("6b4c");
                    t.exports = Array.isArray || function(t) {
                        return "Array" == r(t)
                    }
                },
                9093: function(t, e, n) {
                    var r = n("ce10"),
                        o = n("e11e").concat("length", "prototype");
                    e.f = Object.getOwnPropertyNames || function(t) {
                        return r(t, o)
                    }
                },
                9138: function(t, e, n) {
                    t.exports = n("35e8")
                },
                "92cc": function(t, e, n) {},
                "95d5": function(t, e, n) {
                    var r = n("40c3"),
                        o = n("5168")("iterator"),
                        d = n("481b");
                    t.exports = n("584a").isIterable = function(t) {
                        var e = Object(t);
                        return void 0 !== e[o] || "@@iterator" in e || d.hasOwnProperty(r(e))
                    }
                },
                "96cf": function(t, e, n) {
                    var r = function(t) {
                        "use strict";
                        var e = Object.prototype,
                            n = e.hasOwnProperty,
                            r = "function" == typeof Symbol ? Symbol : {},
                            o = r.iterator || "@@iterator",
                            d = r.asyncIterator || "@@asyncIterator",
                            c = r.toStringTag || "@@toStringTag";

                        function l(t, e, n, r) {
                            var o = e && e.prototype instanceof h ? e : h,
                                d = Object.create(o.prototype),
                                c = new k(r || []);
                            return d._invoke = function(t, e, n) {
                                var r = "suspendedStart";
                                return function(o, d) {
                                    if ("executing" === r) throw new Error("Generator is already running");
                                    if ("completed" === r) {
                                        if ("throw" === o) throw d;
                                        return T()
                                    }
                                    for (n.method = o, n.arg = d;;) {
                                        var c = n.delegate;
                                        if (c) {
                                            var l = _(c, n);
                                            if (l) {
                                                if (l === $) continue;
                                                return l
                                            }
                                        }
                                        if ("next" === n.method) n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                                            n.dispatchException(n.arg)
                                        } else "return" === n.method && n.abrupt("return", n.arg);
                                        r = "executing";
                                        var h = f(t, e, n);
                                        if ("normal" === h.type) {
                                            if (r = n.done ? "completed" : "suspendedYield", h.arg === $) continue;
                                            return {
                                                value: h.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === h.type && (r = "completed", n.method = "throw", n.arg = h.arg)
                                    }
                                }
                            }(t, n, c), d
                        }

                        function f(t, e, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: t.call(e, n)
                                }
                            } catch (t) {
                                return {
                                    type: "throw",
                                    arg: t
                                }
                            }
                        }
                        t.wrap = l;
                        var $ = {};

                        function h() {}

                        function v() {}

                        function y() {}
                        var m = {};
                        m[o] = function() {
                            return this
                        };
                        var C = Object.getPrototypeOf,
                            S = C && C(C(E([])));
                        S && S !== e && n.call(S, o) && (m = S);
                        var x = y.prototype = h.prototype = Object.create(m);

                        function w(t) {
                            ["next", "throw", "return"].forEach((function(e) {
                                t[e] = function(t) {
                                    return this._invoke(e, t)
                                }
                            }))
                        }

                        function N(t, e) {
                            var r;
                            this._invoke = function(o, d) {
                                function c() {
                                    return new e((function(r, c) {
                                        ! function r(o, d, c, l) {
                                            var $ = f(t[o], t, d);
                                            if ("throw" !== $.type) {
                                                var h = $.arg,
                                                    v = h.value;
                                                return v && "object" == typeof v && n.call(v, "__await") ? e.resolve(v.__await).then((function(t) {
                                                    r("next", t, c, l)
                                                }), (function(t) {
                                                    r("throw", t, c, l)
                                                })) : e.resolve(v).then((function(t) {
                                                    h.value = t, c(h)
                                                }), (function(t) {
                                                    return r("throw", t, c, l)
                                                }))
                                            }
                                            l($.arg)
                                        }(o, d, r, c)
                                    }))
                                }
                                return r = r ? r.then(c, c) : c()
                            }
                        }

                        function _(t, e) {
                            var n = t.iterator[e.method];
                            if (void 0 === n) {
                                if (e.delegate = null, "throw" === e.method) {
                                    if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return $;
                                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return $
                            }
                            var r = f(n, t.iterator, e.arg);
                            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, $;
                            var o = r.arg;
                            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, $) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, $)
                        }

                        function O(t) {
                            var e = {
                                tryLoc: t[0]
                            };
                            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                        }

                        function P(t) {
                            var e = t.completion || {};
                            e.type = "normal", delete e.arg, t.completion = e
                        }

                        function k(t) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], t.forEach(O, this), this.reset(!0)
                        }

                        function E(t) {
                            if (t) {
                                var e = t[o];
                                if (e) return e.call(t);
                                if ("function" == typeof t.next) return t;
                                if (!isNaN(t.length)) {
                                    var i = -1,
                                        r = function e() {
                                            for (; ++i < t.length;)
                                                if (n.call(t, i)) return e.value = t[i], e.done = !1, e;
                                            return e.value = void 0, e.done = !0, e
                                        };
                                    return r.next = r
                                }
                            }
                            return {
                                next: T
                            }
                        }

                        function T() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return v.prototype = x.constructor = y, y.constructor = v, y[c] = v.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                        }, t.mark = function(t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(x), t
                        }, t.awrap = function(t) {
                            return {
                                __await: t
                            }
                        }, w(N.prototype), N.prototype[d] = function() {
                            return this
                        }, t.AsyncIterator = N, t.async = function(e, n, r, o, d) {
                            void 0 === d && (d = Promise);
                            var c = new N(l(e, n, r, o), d);
                            return t.isGeneratorFunction(n) ? c : c.next().then((function(t) {
                                return t.done ? t.value : c.next()
                            }))
                        }, w(x), x[c] = "Generator", x[o] = function() {
                            return this
                        }, x.toString = function() {
                            return "[object Generator]"
                        }, t.keys = function(object) {
                            var t = [];
                            for (var e in object) t.push(e);
                            return t.reverse(),
                                function e() {
                                    for (; t.length;) {
                                        var n = t.pop();
                                        if (n in object) return e.value = n, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, t.values = E, k.prototype = {
                            constructor: k,
                            reset: function(t) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(P), !t)
                                    for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval
                            },
                            dispatchException: function(t) {
                                if (this.done) throw t;
                                var e = this;

                                function r(n, r) {
                                    return d.type = "throw", d.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                                }
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var o = this.tryEntries[i],
                                        d = o.completion;
                                    if ("root" === o.tryLoc) return r("end");
                                    if (o.tryLoc <= this.prev) {
                                        var c = n.call(o, "catchLoc"),
                                            l = n.call(o, "finallyLoc");
                                        if (c && l) {
                                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                        } else if (c) {
                                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                        } else {
                                            if (!l) throw new Error("try statement without catch or finally");
                                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, e) {
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var r = this.tryEntries[i];
                                    if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                        var o = r;
                                        break
                                    }
                                }
                                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                var d = o ? o.completion : {};
                                return d.type = t, d.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, $) : this.complete(d)
                            },
                            complete: function(t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), $
                            },
                            finish: function(t) {
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var e = this.tryEntries[i];
                                    if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), P(e), $
                                }
                            },
                            catch: function(t) {
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var e = this.tryEntries[i];
                                    if (e.tryLoc === t) {
                                        var n = e.completion;
                                        if ("throw" === n.type) {
                                            var r = n.arg;
                                            P(e)
                                        }
                                        return r
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(t, e, n) {
                                return this.delegate = {
                                    iterator: E(t),
                                    resultName: e,
                                    nextLoc: n
                                }, "next" === this.method && (this.arg = void 0), $
                            }
                        }, t
                    }(t.exports);
                    try {
                        regeneratorRuntime = r
                    } catch (t) {
                        Function("r", "regeneratorRuntime = r")(r)
                    }
                },
                "990b": function(t, e, n) {
                    var r = n("9093"),
                        o = n("2621"),
                        d = n("cb7c"),
                        c = n("7726").Reflect;
                    t.exports = c && c.ownKeys || function(t) {
                        var e = r.f(d(t)),
                            n = o.f;
                        return n ? e.concat(n(t)) : e
                    }
                },
                "9aa9": function(t, e) {
                    e.f = Object.getOwnPropertySymbols
                },
                "9b43": function(t, e, n) {
                    var r = n("d8e8");
                    t.exports = function(t, e, n) {
                        if (r(t), void 0 === e) return t;
                        switch (n) {
                            case 1:
                                return function(a) {
                                    return t.call(e, a)
                                };
                            case 2:
                                return function(a, b) {
                                    return t.call(e, a, b)
                                };
                            case 3:
                                return function(a, b, n) {
                                    return t.call(e, a, b, n)
                                }
                        }
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }
                },
                "9c6c": function(t, e, n) {
                    var r = n("2b4c")("unscopables"),
                        o = Array.prototype;
                    null == o[r] && n("32e9")(o, r, {}), t.exports = function(t) {
                        o[r][t] = !0
                    }
                },
                "9def": function(t, e, n) {
                    var r = n("4588"),
                        o = Math.min;
                    t.exports = function(t) {
                        return t > 0 ? o(r(t), 9007199254740991) : 0
                    }
                },
                "9e1e": function(t, e, n) {
                    t.exports = !n("79e5")((function() {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                },
                a159: function(t, e, n) {
                    var r = n("e4ae"),
                        o = n("7e90"),
                        d = n("1691"),
                        c = n("5559")("IE_PROTO"),
                        l = function() {},
                        f = function() {
                            var t, iframe = n("1ec9")("iframe"),
                                i = d.length;
                            for (iframe.style.display = "none", n("32fc").appendChild(iframe), iframe.src = "javascript:", (t = iframe.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), f = t.F; i--;) delete f.prototype[d[i]];
                            return f()
                        };
                    t.exports = Object.create || function(t, e) {
                        var n;
                        return null !== t ? (l.prototype = r(t), n = new l, l.prototype = null, n[c] = t) : n = f(), void 0 === e ? n : o(n, e)
                    }
                },
                a22a: function(t, e, n) {
                    var r = n("d864"),
                        o = n("b0dc"),
                        d = n("3702"),
                        c = n("e4ae"),
                        l = n("b447"),
                        f = n("7cd6"),
                        $ = {},
                        h = {};
                    (e = t.exports = function(t, e, n, v, y) {
                        var m, C, S, x, w = y ? function() {
                                return t
                            } : f(t),
                            N = r(n, v, e ? 2 : 1),
                            _ = 0;
                        if ("function" != typeof w) throw TypeError(t + " is not iterable!");
                        if (d(w)) {
                            for (m = l(t.length); m > _; _++)
                                if ((x = e ? N(c(C = t[_])[0], C[1]) : N(t[_])) === $ || x === h) return x
                        } else
                            for (S = w.call(t); !(C = S.next()).done;)
                                if ((x = o(S, N, C.value, e)) === $ || x === h) return x
                    }).BREAK = $, e.RETURN = h
                },
                a745: function(t, e, n) {
                    t.exports = n("f410")
                },
                aa77: function(t, e, n) {
                    var r = n("5ca1"),
                        o = n("be13"),
                        d = n("79e5"),
                        c = n("fdef"),
                        l = "[" + c + "]",
                        f = RegExp("^" + l + l + "*"),
                        $ = RegExp(l + l + "*$"),
                        h = function(t, e, n) {
                            var o = {},
                                l = d((function() {
                                    return !!c[t]() || "​" != "​" [t]()
                                })),
                                f = o[t] = l ? e(v) : c[t];
                            n && (o[n] = f), r(r.P + r.F * l, "String", o)
                        },
                        v = h.trim = function(t, e) {
                            return t = String(o(t)), 1 & e && (t = t.replace(f, "")), 2 & e && (t = t.replace($, "")), t
                        };
                    t.exports = h
                },
                aae3: function(t, e, n) {
                    var r = n("d3f4"),
                        o = n("2d95"),
                        d = n("2b4c")("match");
                    t.exports = function(t) {
                        var e;
                        return r(t) && (void 0 !== (e = t[d]) ? !!e : "RegExp" == o(t))
                    }
                },
                aba2: function(t, e, n) {
                    var r = n("e53d"),
                        o = n("4178").set,
                        d = r.MutationObserver || r.WebKitMutationObserver,
                        c = r.process,
                        l = r.Promise,
                        f = "process" == n("6b4c")(c);
                    t.exports = function() {
                        var head, t, e, n = function() {
                            var n, r;
                            for (f && (n = c.domain) && n.exit(); head;) {
                                r = head.fn, head = head.next;
                                try {
                                    r()
                                } catch (n) {
                                    throw head ? e() : t = void 0, n
                                }
                            }
                            t = void 0, n && n.enter()
                        };
                        if (f) e = function() {
                            c.nextTick(n)
                        };
                        else if (!d || r.navigator && r.navigator.standalone)
                            if (l && l.resolve) {
                                var $ = l.resolve(void 0);
                                e = function() {
                                    $.then(n)
                                }
                            } else e = function() {
                                o.call(r, n)
                            };
                        else {
                            var h = !0,
                                v = document.createTextNode("");
                            new d(n).observe(v, {
                                characterData: !0
                            }), e = function() {
                                v.data = h = !h
                            }
                        }
                        return function(n) {
                            var r = {
                                fn: n,
                                next: void 0
                            };
                            t && (t.next = r), head || (head = r, e()), t = r
                        }
                    }
                },
                ac6a: function(t, e, n) {
                    for (var r = n("cadf"), o = n("0d58"), d = n("2aba"), c = n("7726"), l = n("32e9"), f = n("84f2"), $ = n("2b4c"), h = $("iterator"), v = $("toStringTag"), y = f.Array, m = {
                            CSSRuleList: !0,
                            CSSStyleDeclaration: !1,
                            CSSValueList: !1,
                            ClientRectList: !1,
                            DOMRectList: !1,
                            DOMStringList: !1,
                            DOMTokenList: !0,
                            DataTransferItemList: !1,
                            FileList: !1,
                            HTMLAllCollection: !1,
                            HTMLCollection: !1,
                            HTMLFormElement: !1,
                            HTMLSelectElement: !1,
                            MediaList: !0,
                            MimeTypeArray: !1,
                            NamedNodeMap: !1,
                            NodeList: !0,
                            PaintRequestList: !1,
                            Plugin: !1,
                            PluginArray: !1,
                            SVGLengthList: !1,
                            SVGNumberList: !1,
                            SVGPathSegList: !1,
                            SVGPointList: !1,
                            SVGStringList: !1,
                            SVGTransformList: !1,
                            SourceBufferList: !1,
                            StyleSheetList: !0,
                            TextTrackCueList: !1,
                            TextTrackList: !1,
                            TouchList: !1
                        }, C = o(m), i = 0; i < C.length; i++) {
                        var S, x = C[i],
                            w = m[x],
                            N = c[x],
                            _ = N && N.prototype;
                        if (_ && (_[h] || l(_, h, y), _[v] || l(_, v, x), f[x] = y, w))
                            for (S in r) _[S] || d(_, S, r[S], !0)
                    }
                },
                aebd: function(t, e) {
                    t.exports = function(t, e) {
                        return {
                            enumerable: !(1 & t),
                            configurable: !(2 & t),
                            writable: !(4 & t),
                            value: e
                        }
                    }
                },
                b0dc: function(t, e, n) {
                    var r = n("e4ae");
                    t.exports = function(t, e, n, o) {
                        try {
                            return o ? e(r(n)[0], n[1]) : e(n)
                        } catch (e) {
                            var d = t.return;
                            throw void 0 !== d && r(d.call(t)), e
                        }
                    }
                },
                b447: function(t, e, n) {
                    var r = n("3a38"),
                        o = Math.min;
                    t.exports = function(t) {
                        return t > 0 ? o(r(t), 9007199254740991) : 0
                    }
                },
                b8ac: function(t, e, n) {
                    "use strict";
                    var r = n("d052");
                    n.n(r).a
                },
                b8e3: function(t, e) {
                    t.exports = !0
                },
                bc13: function(t, e, n) {
                    var r = n("e53d").navigator;
                    t.exports = r && r.userAgent || ""
                },
                be13: function(t, e) {
                    t.exports = function(t) {
                        if (null == t) throw TypeError("Can't call method on  " + t);
                        return t
                    }
                },
                bf0b: function(t, e, n) {
                    var r = n("355d"),
                        o = n("aebd"),
                        d = n("36c3"),
                        c = n("1bc3"),
                        l = n("07e3"),
                        f = n("794b"),
                        $ = Object.getOwnPropertyDescriptor;
                    e.f = n("8e60") ? $ : function(t, e) {
                        if (t = d(t), e = c(e, !0), f) try {
                            return $(t, e)
                        } catch (t) {}
                        if (l(t, e)) return o(!r.f.call(t, e), t[e])
                    }
                },
                c207: function(t, e) {},
                c366: function(t, e, n) {
                    var r = n("6821"),
                        o = n("9def"),
                        d = n("77f1");
                    t.exports = function(t) {
                        return function(e, n, c) {
                            var l, f = r(e),
                                $ = o(f.length),
                                h = d(c, $);
                            if (t && n != n) {
                                for (; $ > h;)
                                    if ((l = f[h++]) != l) return !0
                            } else
                                for (; $ > h; h++)
                                    if ((t || h in f) && f[h] === n) return t || h || 0;
                            return !t && -1
                        }
                    }
                },
                c367: function(t, e, n) {
                    "use strict";
                    var r = n("8436"),
                        o = n("50ed"),
                        d = n("481b"),
                        c = n("36c3");
                    t.exports = n("30f1")(Array, "Array", (function(t, e) {
                        this._t = c(t), this._i = 0, this._k = e
                    }), (function() {
                        var t = this._t,
                            e = this._k,
                            n = this._i++;
                        return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
                    }), "values"), d.Arguments = d.Array, r("keys"), r("values"), r("entries")
                },
                c3a1: function(t, e, n) {
                    var r = n("e6f3"),
                        o = n("1691");
                    t.exports = Object.keys || function(t) {
                        return r(t, o)
                    }
                },
                c5f6: function(t, e, n) {
                    "use strict";
                    var r = n("7726"),
                        o = n("69a8"),
                        d = n("2d95"),
                        c = n("5dbc"),
                        l = n("6a99"),
                        f = n("79e5"),
                        $ = n("9093").f,
                        h = n("11e9").f,
                        v = n("86cc").f,
                        y = n("aa77").trim,
                        m = r.Number,
                        C = m,
                        S = m.prototype,
                        x = "Number" == d(n("2aeb")(S)),
                        w = "trim" in String.prototype,
                        N = function(t) {
                            var e = l(t, !1);
                            if ("string" == typeof e && e.length > 2) {
                                var n, r, o, d = (e = w ? e.trim() : y(e, 3)).charCodeAt(0);
                                if (43 === d || 45 === d) {
                                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                                } else if (48 === d) {
                                    switch (e.charCodeAt(1)) {
                                        case 66:
                                        case 98:
                                            r = 2, o = 49;
                                            break;
                                        case 79:
                                        case 111:
                                            r = 8, o = 55;
                                            break;
                                        default:
                                            return +e
                                    }
                                    for (var code, c = e.slice(2), i = 0, f = c.length; i < f; i++)
                                        if ((code = c.charCodeAt(i)) < 48 || code > o) return NaN;
                                    return parseInt(c, r)
                                }
                            }
                            return +e
                        };
                    if (!m(" 0o1") || !m("0b1") || m("+0x1")) {
                        m = function(t) {
                            var e = arguments.length < 1 ? 0 : t,
                                n = this;
                            return n instanceof m && (x ? f((function() {
                                S.valueOf.call(n)
                            })) : "Number" != d(n)) ? c(new C(N(e)), n, m) : N(e)
                        };
                        for (var _, O = n("9e1e") ? $(C) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), P = 0; O.length > P; P++) o(C, _ = O[P]) && !o(m, _) && v(m, _, h(C, _));
                        m.prototype = S, S.constructor = m, n("2aba")(r, "Number", m)
                    }
                },
                c69a: function(t, e, n) {
                    t.exports = !n("9e1e") && !n("79e5")((function() {
                        return 7 != Object.defineProperty(n("230e")("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                },
                c8ba: function(t, e) {
                    var g;
                    g = function() {
                        return this
                    }();
                    try {
                        g = g || new Function("return this")()
                    } catch (t) {
                        "object" == typeof window && (g = window)
                    }
                    t.exports = g
                },
                c8bb: function(t, e, n) {
                    t.exports = n("54a1")
                },
                ca5a: function(t, e) {
                    var n = 0,
                        r = Math.random();
                    t.exports = function(t) {
                        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
                    }
                },
                cadf: function(t, e, n) {
                    "use strict";
                    var r = n("9c6c"),
                        o = n("d53b"),
                        d = n("84f2"),
                        c = n("6821");
                    t.exports = n("01f9")(Array, "Array", (function(t, e) {
                        this._t = c(t), this._i = 0, this._k = e
                    }), (function() {
                        var t = this._t,
                            e = this._k,
                            n = this._i++;
                        return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
                    }), "values"), d.Arguments = d.Array, r("keys"), r("values"), r("entries")
                },
                cb7c: function(t, e, n) {
                    var r = n("d3f4");
                    t.exports = function(t) {
                        if (!r(t)) throw TypeError(t + " is not an object!");
                        return t
                    }
                },
                ccb9: function(t, e, n) {
                    e.f = n("5168")
                },
                cd1c: function(t, e, n) {
                    var r = n("e853");
                    t.exports = function(t, e) {
                        return new(r(t))(e)
                    }
                },
                cd78: function(t, e, n) {
                    var r = n("e4ae"),
                        o = n("f772"),
                        d = n("656e");
                    t.exports = function(t, e) {
                        if (r(t), o(e) && e.constructor === t) return e;
                        var n = d.f(t);
                        return (0, n.resolve)(e), n.promise
                    }
                },
                ce10: function(t, e, n) {
                    var r = n("69a8"),
                        o = n("6821"),
                        d = n("c366")(!1),
                        c = n("613b")("IE_PROTO");
                    t.exports = function(object, t) {
                        var e, n = o(object),
                            i = 0,
                            l = [];
                        for (e in n) e != c && r(n, e) && l.push(e);
                        for (; t.length > i;) r(n, e = t[i++]) && (~d(l, e) || l.push(e));
                        return l
                    }
                },
                d052: function(t, e, n) {},
                d2c8: function(t, e, n) {
                    var r = n("aae3"),
                        o = n("be13");
                    t.exports = function(t, e, n) {
                        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
                        return String(o(t))
                    }
                },
                d2d5: function(t, e, n) {
                    n("1654"), n("549b"), t.exports = n("584a").Array.from
                },
                d391: function(t) {
                    t.exports = JSON.parse('{"AC":"40123","AD":"312345","AE":"501234567","AF":"701234567","AG":"2684641234","AI":"2642351234","AL":"672123456","AM":"77123456","AO":"923123456","AR":"91123456789","AS":"6847331234","AT":"664123456","AU":"412345678","AW":"5601234","AX":"412345678","AZ":"401234567","BA":"61123456","BB":"2462501234","BD":"1812345678","BE":"470123456","BF":"70123456","BG":"48123456","BH":"36001234","BI":"79561234","BJ":"90011234","BL":"690001234","BM":"4413701234","BN":"7123456","BO":"71234567","BQ":"3181234","BR":"11961234567","BS":"2423591234","BT":"17123456","BW":"71123456","BY":"294911911","BZ":"6221234","CA":"5062345678","CC":"412345678","CD":"991234567","CF":"70012345","CG":"061234567","CH":"781234567","CI":"01234567","CK":"71234","CL":"221234567","CM":"671234567","CN":"13123456789","CO":"3211234567","CR":"83123456","CU":"51234567","CV":"9911234","CW":"95181234","CX":"412345678","CY":"96123456","CZ":"601123456","DE":"15123456789","DJ":"77831001","DK":"32123456","DM":"7672251234","DO":"8092345678","DZ":"551234567","EC":"991234567","EE":"51234567","EG":"1001234567","EH":"650123456","ER":"7123456","ES":"612345678","ET":"911234567","FI":"412345678","FJ":"7012345","FK":"51234","FM":"3501234","FO":"211234","FR":"612345678","GA":"06031234","GB":"7400123456","GD":"4734031234","GE":"555123456","GF":"694201234","GG":"7781123456","GH":"231234567","GI":"57123456","GL":"221234","GM":"3012345","GN":"601123456","GP":"690001234","GQ":"222123456","GR":"6912345678","GT":"51234567","GU":"6713001234","GW":"955012345","GY":"6091234","HK":"51234567","HN":"91234567","HR":"921234567","HT":"34101234","HU":"201234567","ID":"812345678","IE":"850123456","IL":"502345678","IM":"7924123456","IN":"8123456789","IO":"3801234","IQ":"7912345678","IR":"9123456789","IS":"6111234","IT":"3123456789","JE":"7797712345","JM":"8762101234","JO":"790123456","JP":"9012345678","KE":"712123456","KG":"700123456","KH":"91234567","KI":"72001234","KM":"3212345","KN":"8697652917","KP":"1921234567","KR":"1020000000","KW":"50012345","KY":"3453231234","KZ":"7710009998","LA":"2023123456","LB":"71123456","LC":"7582845678","LI":"660234567","LK":"712345678","LR":"770123456","LS":"50123456","LT":"61234567","LU":"628123456","LV":"21234567","LY":"912345678","MA":"650123456","MC":"612345678","MD":"62112345","ME":"67622901","MF":"690001234","MG":"321234567","MH":"2351234","MK":"72345678","ML":"65012345","MM":"92123456","MN":"88123456","MO":"66123456","MP":"6702345678","MQ":"696201234","MR":"22123456","MS":"6644923456","MT":"96961234","MU":"52512345","MV":"7712345","MW":"991234567","MX":"12221234567","MY":"123456789","MZ":"821234567","NA":"811234567","NC":"751234","NE":"93123456","NF":"381234","NG":"8021234567","NI":"81234567","NL":"612345678","NO":"40612345","NP":"9841234567","NR":"5551234","NU":"8884012","NZ":"211234567","OM":"92123456","PA":"61234567","PE":"912345678","PF":"87123456","PG":"70123456","PH":"9051234567","PK":"3012345678","PL":"512345678","PM":"551234","PR":"7872345678","PS":"599123456","PT":"912345678","PW":"6201234","PY":"961456789","QA":"33123456","RE":"692123456","RO":"712034567","RS":"601234567","RU":"9123456789","RW":"720123456","SA":"512345678","SB":"7421234","SC":"2510123","SD":"911231234","SE":"701234567","SG":"81234567","SH":"51234","SI":"31234567","SJ":"41234567","SK":"912123456","SL":"25123456","SM":"66661212","SN":"701234567","SO":"71123456","SR":"7412345","SS":"977123456","ST":"9812345","SV":"70123456","SX":"7215205678","SY":"944567890","SZ":"76123456","TA":"8999","TC":"6492311234","TD":"63012345","TG":"90112345","TH":"812345678","TJ":"917123456","TK":"7290","TL":"77212345","TM":"66123456","TN":"20123456","TO":"7715123","TR":"5012345678","TT":"8682911234","TV":"901234","TW":"912345678","TZ":"621234567","UA":"501234567","UG":"712345678","US":"2015550123","UY":"94231234","UZ":"912345678","VA":"3123456789","VC":"7844301234","VE":"4121234567","VG":"2843001234","VI":"3406421234","VN":"912345678","VU":"5912345","WF":"501234","WS":"7212345","XK":"43201234","YE":"712345678","YT":"639012345","ZA":"711234567","ZM":"955123456","ZW":"712345678"}')
                },
                d3f4: function(t, e) {
                    t.exports = function(t) {
                        return "object" == typeof t ? null !== t : "function" == typeof t
                    }
                },
                d53b: function(t, e) {
                    t.exports = function(t, e) {
                        return {
                            value: e,
                            done: !!t
                        }
                    }
                },
                d864: function(t, e, n) {
                    var r = n("79aa");
                    t.exports = function(t, e, n) {
                        if (r(t), void 0 === e) return t;
                        switch (n) {
                            case 1:
                                return function(a) {
                                    return t.call(e, a)
                                };
                            case 2:
                                return function(a, b) {
                                    return t.call(e, a, b)
                                };
                            case 3:
                                return function(a, b, n) {
                                    return t.call(e, a, b, n)
                                }
                        }
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }
                },
                d8e8: function(t, e) {
                    t.exports = function(t) {
                        if ("function" != typeof t) throw TypeError(t + " is not a function!");
                        return t
                    }
                },
                d9f6: function(t, e, n) {
                    var r = n("e4ae"),
                        o = n("794b"),
                        d = n("1bc3"),
                        c = Object.defineProperty;
                    e.f = n("8e60") ? Object.defineProperty : function(t, e, n) {
                        if (r(t), e = d(e, !0), r(n), o) try {
                            return c(t, e, n)
                        } catch (t) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                        return "value" in n && (t[e] = n.value), t
                    }
                },
                dbdb: function(t, e, n) {
                    var r = n("584a"),
                        o = n("e53d"),
                        d = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
                    (t.exports = function(t, e) {
                        return d[t] || (d[t] = void 0 !== e ? e : {})
                    })("versions", []).push({
                        version: r.version,
                        mode: n("b8e3") ? "pure" : "global",
                        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                    })
                },
                e11e: function(t, e) {
                    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
                },
                e4ae: function(t, e, n) {
                    var r = n("f772");
                    t.exports = function(t) {
                        if (!r(t)) throw TypeError(t + " is not an object!");
                        return t
                    }
                },
                e508: function(t, e, n) {
                    "use strict";
                    (function(t) {
                        n.d(e, "a", (function() {
                            return k
                        }));
                        var r = n("252c"),
                            o = n("85fe"),
                            d = n("ed83"),
                            c = n.n(d),
                            l = (n("8bbf"), {
                                itemsLimit: 1e3
                            });

                        function f(t) {
                            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }

                        function $(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n, t
                        }

                        function h(object, t) {
                            var e = Object.keys(object);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(object);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                                }))), e.push.apply(e, n)
                            }
                            return e
                        }

                        function v(t) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? h(Object(source), !0).forEach((function(e) {
                                    $(t, e, source[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                                }))
                            }
                            return t
                        }

                        function y(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                            return n
                        }

                        function m(t) {
                            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                                if (Array.isArray(t) || (t = function(t, e) {
                                        if (t) {
                                            if ("string" == typeof t) return y(t, e);
                                            var n = Object.prototype.toString.call(t).slice(8, -1);
                                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0
                                        }
                                    }(t))) {
                                    var i = 0,
                                        e = function() {};
                                    return {
                                        s: e,
                                        n: function() {
                                            return i >= t.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: t[i++]
                                            }
                                        },
                                        e: function(t) {
                                            throw t
                                        },
                                        f: e
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var n, r, o = !0,
                                d = !1;
                            return {
                                s: function() {
                                    n = t[Symbol.iterator]()
                                },
                                n: function() {
                                    var t = n.next();
                                    return o = t.done, t
                                },
                                e: function(t) {
                                    d = !0, r = t
                                },
                                f: function() {
                                    try {
                                        o || null == n.return || n.return()
                                    } finally {
                                        if (d) throw r
                                    }
                                }
                            }
                        }
                        var C = {
                            items: {
                                type: Array,
                                required: !0
                            },
                            keyField: {
                                type: String,
                                default: "id"
                            },
                            direction: {
                                type: String,
                                default: "vertical",
                                validator: function(t) {
                                    return ["vertical", "horizontal"].includes(t)
                                }
                            }
                        };

                        function S() {
                            return this.items.length && "object" !== f(this.items[0])
                        }
                        var x = !1;
                        if ("undefined" != typeof window) {
                            x = !1;
                            try {
                                var w = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        x = !0
                                    }
                                });
                                window.addEventListener("test", null, w)
                            } catch (t) {}
                        }
                        var N = 0;

                        function _(template, style, script, t, e, n, r, o, d, c) {
                            "boolean" != typeof r && (d = o, o = r, r = !1);
                            const l = "function" == typeof script ? script.options : script;
                            let f;
                            if (template && template.render && (l.render = template.render, l.staticRenderFns = template.staticRenderFns, l._compiled = !0, e && (l.functional = !0)), t && (l._scopeId = t), n ? (f = function(t) {
                                    (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), style && style.call(this, d(t)), t && t._registeredComponents && t._registeredComponents.add(n)
                                }, l._ssrRegister = f) : style && (f = r ? function(t) {
                                    style.call(this, c(t, this.$root.$options.shadowRoot))
                                } : function(t) {
                                    style.call(this, o(t))
                                }), f)
                                if (l.functional) {
                                    const t = l.render;
                                    l.render = function(e, n) {
                                        return f.call(n), t(e, n)
                                    }
                                } else {
                                    const t = l.beforeCreate;
                                    l.beforeCreate = t ? [].concat(t, f) : [f]
                                }
                            return script
                        }
                        const O = {
                            name: "RecycleScroller",
                            components: {
                                ResizeObserver: r.a
                            },
                            directives: {
                                ObserveVisibility: o.a
                            },
                            props: v({}, C, {
                                itemSize: {
                                    type: Number,
                                    default: null
                                },
                                minItemSize: {
                                    type: [Number, String],
                                    default: null
                                },
                                sizeField: {
                                    type: String,
                                    default: "size"
                                },
                                typeField: {
                                    type: String,
                                    default: "type"
                                },
                                buffer: {
                                    type: Number,
                                    default: 200
                                },
                                pageMode: {
                                    type: Boolean,
                                    default: !1
                                },
                                prerender: {
                                    type: Number,
                                    default: 0
                                },
                                emitUpdate: {
                                    type: Boolean,
                                    default: !1
                                }
                            }),
                            data: function() {
                                return {
                                    pool: [],
                                    totalSize: 0,
                                    ready: !1,
                                    hoverKey: null
                                }
                            },
                            computed: {
                                sizes: function() {
                                    if (null === this.itemSize) {
                                        for (var t, e = {
                                                "-1": {
                                                    accumulator: 0
                                                }
                                            }, n = this.items, r = this.sizeField, o = this.minItemSize, d = 1e4, c = 0, i = 0, l = n.length; i < l; i++)(t = n[i][r] || o) < d && (d = t), c += t, e[i] = {
                                            accumulator: c,
                                            size: t
                                        };
                                        return this.$_computedMinItemSize = d, e
                                    }
                                    return []
                                },
                                simpleArray: S
                            },
                            watch: {
                                items: function() {
                                    this.updateVisibleItems(!0)
                                },
                                pageMode: function() {
                                    this.applyPageMode(), this.updateVisibleItems(!1)
                                },
                                sizes: {
                                    handler: function() {
                                        this.updateVisibleItems(!1)
                                    },
                                    deep: !0
                                }
                            },
                            created: function() {
                                this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = new Map, this.$_unusedViews = new Map, this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1))
                            },
                            mounted: function() {
                                var t = this;
                                this.applyPageMode(), this.$nextTick((function() {
                                    t.$_prerender = !1, t.updateVisibleItems(!0), t.ready = !0
                                }))
                            },
                            beforeDestroy: function() {
                                this.removeListeners()
                            },
                            methods: {
                                addView: function(t, e, n, r, o) {
                                    var view = {
                                            item: n,
                                            position: 0
                                        },
                                        d = {
                                            id: N++,
                                            index: e,
                                            used: !0,
                                            key: r,
                                            type: o
                                        };
                                    return Object.defineProperty(view, "nr", {
                                        configurable: !1,
                                        value: d
                                    }), t.push(view), view
                                },
                                unuseView: function(view) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        e = this.$_unusedViews,
                                        n = view.nr.type,
                                        r = e.get(n);
                                    r || (r = [], e.set(n, r)), r.push(view), t || (view.nr.used = !1, view.position = -9999, this.$_views.delete(view.nr.key))
                                },
                                handleResize: function() {
                                    this.$emit("resize"), this.ready && this.updateVisibleItems(!1)
                                },
                                handleScroll: function(t) {
                                    var e = this;
                                    this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame((function() {
                                        e.$_scrollDirty = !1, e.updateVisibleItems(!1, !0).continuous || (clearTimeout(e.$_refreshTimout), e.$_refreshTimout = setTimeout(e.handleScroll, 100))
                                    })))
                                },
                                handleVisibilityChange: function(t, e) {
                                    var n = this;
                                    this.ready && (t || 0 !== e.boundingClientRect.width || 0 !== e.boundingClientRect.height ? (this.$emit("visible"), requestAnimationFrame((function() {
                                        n.updateVisibleItems(!1)
                                    }))) : this.$emit("hidden"))
                                },
                                updateVisibleItems: function(t) {
                                    var e, n, r, view, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        d = this.itemSize,
                                        c = this.$_computedMinItemSize,
                                        f = this.typeField,
                                        $ = this.simpleArray ? null : this.keyField,
                                        h = this.items,
                                        v = h.length,
                                        y = this.sizes,
                                        m = this.$_views,
                                        C = this.$_unusedViews,
                                        S = this.pool;
                                    if (v)
                                        if (this.$_prerender) e = 0, n = this.prerender, r = null;
                                        else {
                                            var x = this.getScroll();
                                            if (o) {
                                                var w = x.start - this.$_lastUpdateScrollPosition;
                                                if (w < 0 && (w = -w), null === d && w < c || w < d) return {
                                                    continuous: !0
                                                }
                                            }
                                            this.$_lastUpdateScrollPosition = x.start;
                                            var N = this.buffer;
                                            if (x.start -= N, x.end += N, null === d) {
                                                var _, a = 0,
                                                    b = v - 1,
                                                    i = ~~(v / 2);
                                                do {
                                                    _ = i, y[i].accumulator < x.start ? a = i : i < v - 1 && y[i + 1].accumulator > x.start && (b = i), i = ~~((a + b) / 2)
                                                } while (i !== _);
                                                for (i < 0 && (i = 0), e = i, r = y[v - 1].accumulator, n = i; n < v && y[n].accumulator < x.end; n++); - 1 === n ? n = h.length - 1 : ++n > v && (n = v)
                                            } else(e = ~~(x.start / d)) < 0 && (e = 0), (n = Math.ceil(x.end / d)) > v && (n = v), r = v * d
                                        }
                                    else e = n = r = 0;
                                    n - e > l.itemsLimit && this.itemsLimitError(), this.totalSize = r;
                                    var O = e <= this.$_endIndex && n >= this.$_startIndex;
                                    if (this.$_continuous !== O) {
                                        if (O) {
                                            m.clear(), C.clear();
                                            for (var P = 0, k = S.length; P < k; P++) view = S[P], this.unuseView(view)
                                        }
                                        this.$_continuous = O
                                    } else if (O)
                                        for (var E = 0, T = S.length; E < T; E++)(view = S[E]).nr.used && (t && (view.nr.index = h.findIndex((function(t) {
                                            return $ ? t[$] === view.item[$] : t === view.item
                                        }))), (-1 === view.nr.index || view.nr.index < e || view.nr.index >= n) && this.unuseView(view));
                                    for (var I, A, L, R, F = O ? null : new Map, M = e; M < n; M++) {
                                        I = h[M];
                                        var D = $ ? I[$] : I;
                                        if (null == D) throw new Error("Key is ".concat(D, " on item (keyField is '").concat($, "')"));
                                        view = m.get(D), d || y[M].size ? (view ? (view.nr.used = !0, view.item = I) : (A = I[f], L = C.get(A), O ? L && L.length ? ((view = L.pop()).item = I, view.nr.used = !0, view.nr.index = M, view.nr.key = D, view.nr.type = A) : view = this.addView(S, M, I, D, A) : (R = F.get(A) || 0, (!L || R >= L.length) && (view = this.addView(S, M, I, D, A), this.unuseView(view, !0), L = C.get(A)), (view = L[R]).item = I, view.nr.used = !0, view.nr.index = M, view.nr.key = D, view.nr.type = A, F.set(A, R + 1), R++), m.set(D, view)), view.position = null === d ? y[M - 1].accumulator : M * d) : view && this.unuseView(view)
                                    }
                                    return this.$_startIndex = e, this.$_endIndex = n, this.emitUpdate && this.$emit("update", e, n), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
                                        continuous: O
                                    }
                                },
                                getListenerTarget: function() {
                                    var t = c()(this.$el);
                                    return !window.document || t !== window.document.documentElement && t !== window.document.body || (t = window), t
                                },
                                getScroll: function() {
                                    var t, e = this.$el,
                                        n = "vertical" === this.direction;
                                    if (this.pageMode) {
                                        var r = e.getBoundingClientRect(),
                                            o = n ? r.height : r.width,
                                            d = -(n ? r.top : r.left),
                                            c = n ? window.innerHeight : window.innerWidth;
                                        d < 0 && (c += d, d = 0), d + c > o && (c = o - d), t = {
                                            start: d,
                                            end: d + c
                                        }
                                    } else t = n ? {
                                        start: e.scrollTop,
                                        end: e.scrollTop + e.clientHeight
                                    } : {
                                        start: e.scrollLeft,
                                        end: e.scrollLeft + e.clientWidth
                                    };
                                    return t
                                },
                                applyPageMode: function() {
                                    this.pageMode ? this.addListeners() : this.removeListeners()
                                },
                                addListeners: function() {
                                    this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, !!x && {
                                        passive: !0
                                    }), this.listenerTarget.addEventListener("resize", this.handleResize)
                                },
                                removeListeners: function() {
                                    this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null)
                                },
                                scrollToItem: function(t) {
                                    var e;
                                    e = null === this.itemSize ? t > 0 ? this.sizes[t - 1].accumulator : 0 : t * this.itemSize, this.scrollToPosition(e)
                                },
                                scrollToPosition: function(t) {
                                    "vertical" === this.direction ? this.$el.scrollTop = t : this.$el.scrollLeft = t
                                },
                                itemsLimitError: function() {
                                    var t = this;
                                    throw setTimeout((function() {
                                        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", t.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")
                                    })), new Error("Rendered items limit reached")
                                },
                                sortViews: function() {
                                    this.pool.sort((function(t, e) {
                                        return t.nr.index - e.nr.index
                                    }))
                                }
                            }
                        };
                        var P = function() {
                            var t, e, n = this,
                                r = n.$createElement,
                                o = n._self._c || r;
                            return o("div", {
                                directives: [{
                                    name: "observe-visibility",
                                    rawName: "v-observe-visibility",
                                    value: n.handleVisibilityChange,
                                    expression: "handleVisibilityChange"
                                }],
                                staticClass: "vue-recycle-scroller",
                                class: (t = {
                                    ready: n.ready,
                                    "page-mode": n.pageMode
                                }, t["direction-" + n.direction] = !0, t),
                                on: {
                                    "&scroll": function(t) {
                                        return n.handleScroll(t)
                                    }
                                }
                            }, [n.$slots.before ? o("div", {
                                staticClass: "vue-recycle-scroller__slot"
                            }, [n._t("before")], 2) : n._e(), n._v(" "), o("div", {
                                ref: "wrapper",
                                staticClass: "vue-recycle-scroller__item-wrapper",
                                style: (e = {}, e["vertical" === n.direction ? "minHeight" : "minWidth"] = n.totalSize + "px", e)
                            }, n._l(n.pool, (function(view) {
                                return o("div", {
                                    key: view.nr.id,
                                    staticClass: "vue-recycle-scroller__item-view",
                                    class: {
                                        hover: n.hoverKey === view.nr.key
                                    },
                                    style: n.ready ? {
                                        transform: "translate" + ("vertical" === n.direction ? "Y" : "X") + "(" + view.position + "px)"
                                    } : null,
                                    on: {
                                        mouseenter: function(t) {
                                            n.hoverKey = view.nr.key
                                        },
                                        mouseleave: function(t) {
                                            n.hoverKey = null
                                        }
                                    }
                                }, [n._t("default", null, {
                                    item: view.item,
                                    index: view.nr.index,
                                    active: view.nr.used
                                })], 2)
                            })), 0), n._v(" "), n.$slots.after ? o("div", {
                                staticClass: "vue-recycle-scroller__slot"
                            }, [n._t("after")], 2) : n._e(), n._v(" "), o("ResizeObserver", {
                                on: {
                                    notify: n.handleResize
                                }
                            })], 1)
                        };
                        P._withStripped = !0;
                        const k = _({
                            render: P,
                            staticRenderFns: []
                        }, void 0, O, void 0, !1, void 0, !1, void 0, void 0, void 0);
                        const E = {
                            name: "DynamicScroller",
                            components: {
                                RecycleScroller: k
                            },
                            inheritAttrs: !1,
                            provide: function() {
                                return "undefined" != typeof ResizeObserver && (this.$_resizeObserver = new ResizeObserver((function(t) {
                                    var e, n = m(t);
                                    try {
                                        for (n.s(); !(e = n.n()).done;) {
                                            var r = e.value;
                                            if (r.target) {
                                                var o = new CustomEvent("resize", {
                                                    detail: {
                                                        contentRect: r.contentRect
                                                    }
                                                });
                                                r.target.dispatchEvent(o)
                                            }
                                        }
                                    } catch (t) {
                                        n.e(t)
                                    } finally {
                                        n.f()
                                    }
                                }))), {
                                    vscrollData: this.vscrollData,
                                    vscrollParent: this,
                                    vscrollResizeObserver: this.$_resizeObserver
                                }
                            },
                            props: v({}, C, {
                                minItemSize: {
                                    type: [Number, String],
                                    required: !0
                                }
                            }),
                            data: function() {
                                return {
                                    vscrollData: {
                                        active: !0,
                                        sizes: {},
                                        validSizes: {},
                                        keyField: this.keyField,
                                        simpleArray: !1
                                    }
                                }
                            },
                            computed: {
                                simpleArray: S,
                                itemsWithSize: function() {
                                    for (var t = [], e = this.items, n = this.keyField, r = this.simpleArray, o = this.vscrollData.sizes, i = 0; i < e.length; i++) {
                                        var d = e[i],
                                            c = r ? i : d[n],
                                            l = o[c];
                                        void 0 !== l || this.$_undefinedMap[c] || (l = 0), t.push({
                                            item: d,
                                            id: c,
                                            size: l
                                        })
                                    }
                                    return t
                                },
                                listeners: function() {
                                    var t = {};
                                    for (var e in this.$listeners) "resize" !== e && "visible" !== e && (t[e] = this.$listeners[e]);
                                    return t
                                }
                            },
                            watch: {
                                items: function() {
                                    this.forceUpdate(!1)
                                },
                                simpleArray: {
                                    handler: function(t) {
                                        this.vscrollData.simpleArray = t
                                    },
                                    immediate: !0
                                },
                                direction: function(t) {
                                    this.forceUpdate(!0)
                                }
                            },
                            created: function() {
                                this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}
                            },
                            activated: function() {
                                this.vscrollData.active = !0
                            },
                            deactivated: function() {
                                this.vscrollData.active = !1
                            },
                            methods: {
                                onScrollerResize: function() {
                                    this.$refs.scroller && this.forceUpdate(), this.$emit("resize")
                                },
                                onScrollerVisible: function() {
                                    this.$emit("vscroll:update", {
                                        force: !1
                                    }), this.$emit("visible")
                                },
                                forceUpdate: function() {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                    (t || this.simpleArray) && (this.vscrollData.validSizes = {}), this.$emit("vscroll:update", {
                                        force: !0
                                    })
                                },
                                scrollToItem: function(t) {
                                    var e = this.$refs.scroller;
                                    e && e.scrollToItem(t)
                                },
                                getItemSize: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                        n = this.simpleArray ? null != e ? e : this.items.indexOf(t) : t[this.keyField];
                                    return this.vscrollData.sizes[n] || 0
                                },
                                scrollToBottom: function() {
                                    var t = this;
                                    if (!this.$_scrollingToBottom) {
                                        this.$_scrollingToBottom = !0;
                                        var e = this.$el;
                                        this.$nextTick((function() {
                                            e.scrollTop = e.scrollHeight + 5e3;
                                            requestAnimationFrame((function n() {
                                                e.scrollTop = e.scrollHeight + 5e3, requestAnimationFrame((function() {
                                                    e.scrollTop = e.scrollHeight + 5e3, 0 === t.$_undefinedSizes ? t.$_scrollingToBottom = !1 : requestAnimationFrame(n)
                                                }))
                                            }))
                                        }))
                                    }
                                }
                            }
                        };
                        var T = function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("RecycleScroller", t._g(t._b({
                                ref: "scroller",
                                attrs: {
                                    items: t.itemsWithSize,
                                    "min-item-size": t.minItemSize,
                                    direction: t.direction,
                                    "key-field": "id"
                                },
                                on: {
                                    resize: t.onScrollerResize,
                                    visible: t.onScrollerVisible
                                },
                                scopedSlots: t._u([{
                                    key: "default",
                                    fn: function(e) {
                                        var n = e.item,
                                            r = e.index,
                                            o = e.active;
                                        return [t._t("default", null, null, {
                                            item: n.item,
                                            index: r,
                                            active: o,
                                            itemWithSize: n
                                        })]
                                    }
                                }], null, !0)
                            }, "RecycleScroller", t.$attrs, !1), t.listeners), [t._v(" "), n("template", {
                                slot: "before"
                            }, [t._t("before")], 2), t._v(" "), n("template", {
                                slot: "after"
                            }, [t._t("after")], 2)], 2)
                        };
                        T._withStripped = !0;
                        const I = _({
                            render: T,
                            staticRenderFns: []
                        }, void 0, E, void 0, !1, void 0, !1, void 0, void 0, void 0);
                        const A = _({}, void 0, {
                            name: "DynamicScrollerItem",
                            inject: ["vscrollData", "vscrollParent", "vscrollResizeObserver"],
                            props: {
                                item: {
                                    required: !0
                                },
                                watchData: {
                                    type: Boolean,
                                    default: !1
                                },
                                active: {
                                    type: Boolean,
                                    required: !0
                                },
                                index: {
                                    type: Number,
                                    default: void 0
                                },
                                sizeDependencies: {
                                    type: [Array, Object],
                                    default: null
                                },
                                emitResize: {
                                    type: Boolean,
                                    default: !1
                                },
                                tag: {
                                    type: String,
                                    default: "div"
                                }
                            },
                            computed: {
                                id: function() {
                                    return this.vscrollData.simpleArray ? this.index : this.item[this.vscrollData.keyField]
                                },
                                size: function() {
                                    return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0
                                },
                                finalActive: function() {
                                    return this.active && this.vscrollData.active
                                }
                            },
                            watch: {
                                watchData: "updateWatchData",
                                id: function() {
                                    this.size || this.onDataUpdate()
                                },
                                finalActive: function(t) {
                                    this.size || (t ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? t ? this.observeSize() : this.unobserveSize() : t && this.$_pendingVScrollUpdate === this.id && this.updateSize()
                                }
                            },
                            created: function() {
                                var t = this;
                                if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
                                    var e = function(e) {
                                        t.$watch((function() {
                                            return t.sizeDependencies[e]
                                        }), t.onDataUpdate)
                                    };
                                    for (var n in this.sizeDependencies) e(n);
                                    this.vscrollParent.$on("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$on("vscroll:update-size", this.onVscrollUpdateSize)
                                }
                            },
                            mounted: function() {
                                this.vscrollData.active && (this.updateSize(), this.observeSize())
                            },
                            beforeDestroy: function() {
                                this.vscrollParent.$off("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$off("vscroll:update-size", this.onVscrollUpdateSize), this.unobserveSize()
                            },
                            methods: {
                                updateSize: function() {
                                    this.finalActive ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id
                                },
                                updateWatchData: function() {
                                    var t = this;
                                    this.watchData ? this.$_watchData = this.$watch("data", (function() {
                                        t.onDataUpdate()
                                    }), {
                                        deep: !0
                                    }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null)
                                },
                                onVscrollUpdate: function(t) {
                                    var e = t.force;
                                    !this.finalActive && e && (this.$_pendingVScrollUpdate = this.id), this.$_forceNextVScrollUpdate !== this.id && !e && this.size || this.updateSize()
                                },
                                onDataUpdate: function() {
                                    this.updateSize()
                                },
                                computeSize: function(t) {
                                    var e = this;
                                    this.$nextTick((function() {
                                        if (e.id === t) {
                                            var n = e.$el.offsetWidth,
                                                r = e.$el.offsetHeight;
                                            e.applySize(n, r)
                                        }
                                        e.$_pendingSizeUpdate = null
                                    }))
                                },
                                applySize: function(t, e) {
                                    var n = Math.round("vertical" === this.vscrollParent.direction ? e : t);
                                    n && this.size !== n && (this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.$set(this.vscrollData.sizes, this.id, n), this.$set(this.vscrollData.validSizes, this.id, !0), this.emitResize && this.$emit("resize", this.id))
                                },
                                observeSize: function() {
                                    this.vscrollResizeObserver && (this.vscrollResizeObserver.observe(this.$el.parentNode), this.$el.parentNode.addEventListener("resize", this.onResize))
                                },
                                unobserveSize: function() {
                                    this.vscrollResizeObserver && (this.vscrollResizeObserver.unobserve(this.$el.parentNode), this.$el.parentNode.removeEventListener("resize", this.onResize))
                                },
                                onResize: function(t) {
                                    var e = t.detail.contentRect,
                                        n = e.width,
                                        r = e.height;
                                    this.applySize(n, r)
                                }
                            },
                            render: function(t) {
                                return t(this.tag, this.$slots.default)
                            }
                        }, void 0, void 0, void 0, !1, void 0, void 0, void 0);
                        var L = {
                                version: "1.0.10",
                                install: function(t, e) {
                                    var n = Object.assign({}, {
                                        installComponents: !0,
                                        componentsPrefix: ""
                                    }, e);
                                    for (var r in n) void 0 !== n[r] && (l[r] = n[r]);
                                    n.installComponents && function(t, e) {
                                        t.component("".concat(e, "recycle-scroller"), k), t.component("".concat(e, "RecycleScroller"), k), t.component("".concat(e, "dynamic-scroller"), I), t.component("".concat(e, "DynamicScroller"), I), t.component("".concat(e, "dynamic-scroller-item"), A), t.component("".concat(e, "DynamicScrollerItem"), A)
                                    }(t, n.componentsPrefix)
                                }
                            },
                            R = null;
                        "undefined" != typeof window ? R = window.Vue : void 0 !== t && (R = t.Vue), R && R.use(L)
                    }).call(this, n("c8ba"))
                },
                e53d: function(t, e) {
                    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = n)
                },
                e6f3: function(t, e, n) {
                    var r = n("07e3"),
                        o = n("36c3"),
                        d = n("5b4e")(!1),
                        c = n("5559")("IE_PROTO");
                    t.exports = function(object, t) {
                        var e, n = o(object),
                            i = 0,
                            l = [];
                        for (e in n) e != c && r(n, e) && l.push(e);
                        for (; t.length > i;) r(n, e = t[i++]) && (~d(l, e) || l.push(e));
                        return l
                    }
                },
                e853: function(t, e, n) {
                    var r = n("d3f4"),
                        o = n("1169"),
                        d = n("2b4c")("species");
                    t.exports = function(t) {
                        var e;
                        return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[d]) && (e = void 0)), void 0 === e ? Array : e
                    }
                },
                ebfd: function(t, e, n) {
                    var r = n("62a0")("meta"),
                        o = n("f772"),
                        d = n("07e3"),
                        c = n("d9f6").f,
                        l = 0,
                        f = Object.isExtensible || function() {
                            return !0
                        },
                        $ = !n("294c")((function() {
                            return f(Object.preventExtensions({}))
                        })),
                        h = function(t) {
                            c(t, r, {
                                value: {
                                    i: "O" + ++l,
                                    w: {}
                                }
                            })
                        },
                        meta = t.exports = {
                            KEY: r,
                            NEED: !1,
                            fastKey: function(t, e) {
                                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                                if (!d(t, r)) {
                                    if (!f(t)) return "F";
                                    if (!e) return "E";
                                    h(t)
                                }
                                return t[r].i
                            },
                            getWeak: function(t, e) {
                                if (!d(t, r)) {
                                    if (!f(t)) return !0;
                                    if (!e) return !1;
                                    h(t)
                                }
                                return t[r].w
                            },
                            onFreeze: function(t) {
                                return $ && meta.NEED && f(t) && !d(t, r) && h(t), t
                            }
                        }
                },
                ed83: function(t, e, n) {
                    var r, o, d;
                    o = [], void 0 === (d = "function" == typeof(r = function() {
                        var t = /(auto|scroll)/,
                            e = function(t, n) {
                                return null === t.parentNode ? n : e(t.parentNode, n.concat([t]))
                            },
                            style = function(t, e) {
                                return getComputedStyle(t, null).getPropertyValue(e)
                            },
                            n = function(e) {
                                return t.test(function(t) {
                                    return style(t, "overflow") + style(t, "overflow-y") + style(t, "overflow-x")
                                }(e))
                            };
                        return function(t) {
                            if (t instanceof HTMLElement || t instanceof SVGElement) {
                                for (var r = e(t.parentNode, []), i = 0; i < r.length; i += 1)
                                    if (n(r[i])) return r[i];
                                return document.scrollingElement || document.documentElement
                            }
                        }
                    }) ? r.apply(e, o) : r) || (t.exports = d)
                },
                f1ae: function(t, e, n) {
                    "use strict";
                    var r = n("86cc"),
                        o = n("4630");
                    t.exports = function(object, t, e) {
                        t in object ? r.f(object, t, o(0, e)) : object[t] = e
                    }
                },
                f201: function(t, e, n) {
                    var r = n("e4ae"),
                        o = n("79aa"),
                        d = n("5168")("species");
                    t.exports = function(t, e) {
                        var n, c = r(t).constructor;
                        return void 0 === c || null == (n = r(c)[d]) ? e : o(n)
                    }
                },
                f410: function(t, e, n) {
                    n("1af6"), t.exports = n("584a").Array.isArray
                },
                f559: function(t, e, n) {
                    "use strict";
                    var r = n("5ca1"),
                        o = n("9def"),
                        d = n("d2c8"),
                        c = "".startsWith;
                    r(r.P + r.F * n("5147")("startsWith"), "String", {
                        startsWith: function(t) {
                            var e = d(this, t, "startsWith"),
                                n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                                r = String(t);
                            return c ? c.call(e, r, n) : e.slice(n, n + r.length) === r
                        }
                    })
                },
                f772: function(t, e) {
                    t.exports = function(t) {
                        return "object" == typeof t ? null !== t : "function" == typeof t
                    }
                },
                f921: function(t, e, n) {
                    n("014b"), n("c207"), n("69d3"), n("765d"), t.exports = n("584a").Symbol
                },
                fa5b: function(t, e, n) {
                    t.exports = n("5537")("native-function-to-string", Function.toString)
                },
                fab2: function(t, e, n) {
                    var r = n("7726").document;
                    t.exports = r && r.documentElement
                },
                fb15: function(t, e, n) {
                    "use strict";
                    if (n.r(e), "undefined" != typeof window) {
                        var r = window.document.currentScript,
                            o = n("8875");
                        r = o(), "currentScript" in document || Object.defineProperty(document, "currentScript", {
                            get: o
                        });
                        var d = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                        d && (n.p = d[1])
                    }
                    n("8e6e"), n("ac6a"), n("cadf"), n("456d"), n("6b54"), n("96cf");
                    var c = n("795b"),
                        l = n.n(c);

                    function f(t, e, n, r, o, d, c) {
                        try {
                            var f = t[d](c),
                                $ = f.value
                        } catch (t) {
                            return void n(t)
                        }
                        f.done ? e($) : l.a.resolve($).then(r, o)
                    }

                    function $(t) {
                        return function() {
                            var e = this,
                                n = arguments;
                            return new l.a((function(r, o) {
                                var d = t.apply(e, n);

                                function c(t) {
                                    f(d, r, o, c, l, "next", t)
                                }

                                function l(t) {
                                    f(d, r, o, c, l, "throw", t)
                                }
                                c(void 0)
                            }))
                        }
                    }
                    var h = n("85f2"),
                        v = n.n(h);

                    function y(t, e, n) {
                        return e in t ? v()(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }
                    n("c5f6"), n("6762"), n("2fdb");
                    var m = [
                            ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                            ["Albania (Shqipëri)", "al", "355"],
                            ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                            ["American Samoa", "as", "1684"],
                            ["Andorra", "ad", "376"],
                            ["Angola", "ao", "244"],
                            ["Anguilla", "ai", "1264"],
                            ["Antigua and Barbuda", "ag", "1268"],
                            ["Argentina", "ar", "54"],
                            ["Armenia (Հայաստան)", "am", "374"],
                            ["Aruba", "aw", "297"],
                            ["Australia", "au", "61", 0],
                            ["Austria (Österreich)", "at", "43"],
                            ["Azerbaijan (Azərbaycan)", "az", "994"],
                            ["Bahamas", "bs", "1242"],
                            ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                            ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                            ["Barbados", "bb", "1246"],
                            ["Belarus (Беларусь)", "by", "375"],
                            ["Belgium (België)", "be", "32"],
                            ["Belize", "bz", "501"],
                            ["Benin (Bénin)", "bj", "229"],
                            ["Bermuda", "bm", "1441"],
                            ["Bhutan (འབྲུག)", "bt", "975"],
                            ["Bolivia", "bo", "591"],
                            ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                            ["Botswana", "bw", "267"],
                            ["Brazil (Brasil)", "br", "55"],
                            ["British Indian Ocean Territory", "io", "246"],
                            ["British Virgin Islands", "vg", "1284"],
                            ["Brunei", "bn", "673"],
                            ["Bulgaria (България)", "bg", "359"],
                            ["Burkina Faso", "bf", "226"],
                            ["Burundi (Uburundi)", "bi", "257"],
                            ["Cambodia (កម្ពុជា)", "kh", "855"],
                            ["Cameroon (Cameroun)", "cm", "237"],
                            ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
                            ["Cape Verde (Kabu Verdi)", "cv", "238"],
                            ["Caribbean Netherlands", "bq", "599", 1],
                            ["Cayman Islands", "ky", "1345"],
                            ["Central African Republic (République centrafricaine)", "cf", "236"],
                            ["Chad (Tchad)", "td", "235"],
                            ["Chile", "cl", "56"],
                            ["China (中国)", "cn", "86"],
                            ["Christmas Island", "cx", "61", 2],
                            ["Cocos (Keeling) Islands", "cc", "61", 1],
                            ["Colombia", "co", "57"],
                            ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                            ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                            ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                            ["Cook Islands", "ck", "682"],
                            ["Costa Rica", "cr", "506"],
                            ["Côte d’Ivoire", "ci", "225"],
                            ["Croatia (Hrvatska)", "hr", "385"],
                            ["Cuba", "cu", "53"],
                            ["Curaçao", "cw", "599", 0],
                            ["Cyprus (Κύπρος)", "cy", "357"],
                            ["Czech Republic (Česká republika)", "cz", "420"],
                            ["Denmark (Danmark)", "dk", "45"],
                            ["Djibouti", "dj", "253"],
                            ["Dominica", "dm", "1767"],
                            ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                            ["Ecuador", "ec", "593"],
                            ["Egypt (‫مصر‬‎)", "eg", "20"],
                            ["El Salvador", "sv", "503"],
                            ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                            ["Eritrea", "er", "291"],
                            ["Estonia (Eesti)", "ee", "372"],
                            ["Ethiopia", "et", "251"],
                            ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                            ["Faroe Islands (Føroyar)", "fo", "298"],
                            ["Fiji", "fj", "679"],
                            ["Finland (Suomi)", "fi", "358", 0],
                            ["France", "fr", "33"],
                            ["French Guiana (Guyane française)", "gf", "594"],
                            ["French Polynesia (Polynésie française)", "pf", "689"],
                            ["Gabon", "ga", "241"],
                            ["Gambia", "gm", "220"],
                            ["Georgia (საქართველო)", "ge", "995"],
                            ["Germany (Deutschland)", "de", "49"],
                            ["Ghana (Gaana)", "gh", "233"],
                            ["Gibraltar", "gi", "350"],
                            ["Greece (Ελλάδα)", "gr", "30"],
                            ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                            ["Grenada", "gd", "1473"],
                            ["Guadeloupe", "gp", "590", 0],
                            ["Guam", "gu", "1671"],
                            ["Guatemala", "gt", "502"],
                            ["Guernsey", "gg", "44", 1],
                            ["Guinea (Guinée)", "gn", "224"],
                            ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                            ["Guyana", "gy", "592"],
                            ["Haiti", "ht", "509"],
                            ["Honduras", "hn", "504"],
                            ["Hong Kong (香港)", "hk", "852"],
                            ["Hungary (Magyarország)", "hu", "36"],
                            ["Iceland (Ísland)", "is", "354"],
                            ["India (भारत)", "in", "91"],
                            ["Indonesia", "id", "62"],
                            ["Iran (‫ایران‬‎)", "ir", "98"],
                            ["Iraq (‫العراق‬‎)", "iq", "964"],
                            ["Ireland", "ie", "353"],
                            ["Isle of Man", "im", "44", 2],
                            ["Israel (‫ישראל‬‎)", "il", "972"],
                            ["Italy (Italia)", "it", "39", 0],
                            ["Jamaica", "jm", "1876"],
                            ["Japan (日本)", "jp", "81"],
                            ["Jersey", "je", "44", 3],
                            ["Jordan (‫الأردن‬‎)", "jo", "962"],
                            ["Kazakhstan (Казахстан)", "kz", "7", 1],
                            ["Kenya", "ke", "254"],
                            ["Kiribati", "ki", "686"],
                            ["Kosovo", "xk", "383"],
                            ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                            ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                            ["Laos (ລາວ)", "la", "856"],
                            ["Latvia (Latvija)", "lv", "371"],
                            ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                            ["Lesotho", "ls", "266"],
                            ["Liberia", "lr", "231"],
                            ["Libya (‫ليبيا‬‎)", "ly", "218"],
                            ["Liechtenstein", "li", "423"],
                            ["Lithuania (Lietuva)", "lt", "370"],
                            ["Luxembourg", "lu", "352"],
                            ["Macau (澳門)", "mo", "853"],
                            ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                            ["Madagascar (Madagasikara)", "mg", "261"],
                            ["Malawi", "mw", "265"],
                            ["Malaysia", "my", "60"],
                            ["Maldives", "mv", "960"],
                            ["Mali", "ml", "223"],
                            ["Malta", "mt", "356"],
                            ["Marshall Islands", "mh", "692"],
                            ["Martinique", "mq", "596"],
                            ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                            ["Mauritius (Moris)", "mu", "230"],
                            ["Mayotte", "yt", "262", 1],
                            ["Mexico (México)", "mx", "52"],
                            ["Micronesia", "fm", "691"],
                            ["Moldova (Republica Moldova)", "md", "373"],
                            ["Monaco", "mc", "377"],
                            ["Mongolia (Монгол)", "mn", "976"],
                            ["Montenegro (Crna Gora)", "me", "382"],
                            ["Montserrat", "ms", "1664"],
                            ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                            ["Mozambique (Moçambique)", "mz", "258"],
                            ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                            ["Namibia (Namibië)", "na", "264"],
                            ["Nauru", "nr", "674"],
                            ["Nepal (नेपाल)", "np", "977"],
                            ["Netherlands (Nederland)", "nl", "31"],
                            ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                            ["New Zealand", "nz", "64"],
                            ["Nicaragua", "ni", "505"],
                            ["Niger (Nijar)", "ne", "227"],
                            ["Nigeria", "ng", "234"],
                            ["Niue", "nu", "683"],
                            ["Norfolk Island", "nf", "672"],
                            ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                            ["Northern Mariana Islands", "mp", "1670"],
                            ["Norway (Norge)", "no", "47", 0],
                            ["Oman (‫عُمان‬‎)", "om", "968"],
                            ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                            ["Palau", "pw", "680"],
                            ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                            ["Panama (Panamá)", "pa", "507"],
                            ["Papua New Guinea", "pg", "675"],
                            ["Paraguay", "py", "595"],
                            ["Peru (Perú)", "pe", "51"],
                            ["Philippines", "ph", "63"],
                            ["Poland (Polska)", "pl", "48"],
                            ["Portugal", "pt", "351"],
                            ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                            ["Qatar (‫قطر‬‎)", "qa", "974"],
                            ["Réunion (La Réunion)", "re", "262", 0],
                            ["Romania (România)", "ro", "40"],
                            ["Russia (Россия)", "ru", "7", 0],
                            ["Rwanda", "rw", "250"],
                            ["Saint Barthélemy", "bl", "590", 1],
                            ["Saint Helena", "sh", "290"],
                            ["Saint Kitts and Nevis", "kn", "1869"],
                            ["Saint Lucia", "lc", "1758"],
                            ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
                            ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                            ["Saint Vincent and the Grenadines", "vc", "1784"],
                            ["Samoa", "ws", "685"],
                            ["San Marino", "sm", "378"],
                            ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                            ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                            ["Senegal (Sénégal)", "sn", "221"],
                            ["Serbia (Србија)", "rs", "381"],
                            ["Seychelles", "sc", "248"],
                            ["Sierra Leone", "sl", "232"],
                            ["Singapore", "sg", "65"],
                            ["Sint Maarten", "sx", "1721"],
                            ["Slovakia (Slovensko)", "sk", "421"],
                            ["Slovenia (Slovenija)", "si", "386"],
                            ["Solomon Islands", "sb", "677"],
                            ["Somalia (Soomaaliya)", "so", "252"],
                            ["South Africa", "za", "27"],
                            ["South Korea (대한민국)", "kr", "82"],
                            ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                            ["Spain (España)", "es", "34"],
                            ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                            ["Sudan (‫السودان‬‎)", "sd", "249"],
                            ["Suriname", "sr", "597"],
                            ["Svalbard and Jan Mayen", "sj", "47", 1],
                            ["Swaziland", "sz", "268"],
                            ["Sweden (Sverige)", "se", "46"],
                            ["Switzerland (Schweiz)", "ch", "41"],
                            ["Syria (‫سوريا‬‎)", "sy", "963"],
                            ["Taiwan (台灣)", "tw", "886"],
                            ["Tajikistan", "tj", "992"],
                            ["Tanzania", "tz", "255"],
                            ["Thailand (ไทย)", "th", "66"],
                            ["Timor-Leste", "tl", "670"],
                            ["Togo", "tg", "228"],
                            ["Tokelau", "tk", "690"],
                            ["Tonga", "to", "676"],
                            ["Trinidad and Tobago", "tt", "1868"],
                            ["Tunisia (‫تونس‬‎)", "tn", "216"],
                            ["Turkey (Türkiye)", "tr", "90"],
                            ["Turkmenistan", "tm", "993"],
                            ["Turks and Caicos Islands", "tc", "1649"],
                            ["Tuvalu", "tv", "688"],
                            ["U.S. Virgin Islands", "vi", "1340"],
                            ["Uganda", "ug", "256"],
                            ["Ukraine (Україна)", "ua", "380"],
                            ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
                            ["United Kingdom", "gb", "44", 0],
                            ["United States", "us", "1", 0],
                            ["Uruguay", "uy", "598"],
                            ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                            ["Vanuatu", "vu", "678"],
                            ["Vatican City (Città del Vaticano)", "va", "39", 1],
                            ["Venezuela", "ve", "58"],
                            ["Vietnam (Việt Nam)", "vn", "84"],
                            ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                            ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
                            ["Yemen (‫اليمن‬‎)", "ye", "967"],
                            ["Zambia", "zm", "260"],
                            ["Zimbabwe", "zw", "263"],
                            ["Åland Islands", "ax", "358", 1]
                        ],
                        C = m.map((function(t) {
                            return t[1].toUpperCase()
                        })),
                        S = m.map((function(t) {
                            return {
                                name: t[0],
                                iso2: t[1].toUpperCase(),
                                dialCode: t[2],
                                priority: t[3] || 0,
                                areaCodes: t[4] || null
                            }
                        })),
                        x = n("d391"),
                        w = {
                            version: "1.7.51",
                            country_calling_codes: {
                                1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                                7: ["RU", "KZ"],
                                20: ["EG"],
                                27: ["ZA"],
                                30: ["GR"],
                                31: ["NL"],
                                32: ["BE"],
                                33: ["FR"],
                                34: ["ES"],
                                36: ["HU"],
                                39: ["IT", "VA"],
                                40: ["RO"],
                                41: ["CH"],
                                43: ["AT"],
                                44: ["GB", "GG", "IM", "JE"],
                                45: ["DK"],
                                46: ["SE"],
                                47: ["NO", "SJ"],
                                48: ["PL"],
                                49: ["DE"],
                                51: ["PE"],
                                52: ["MX"],
                                53: ["CU"],
                                54: ["AR"],
                                55: ["BR"],
                                56: ["CL"],
                                57: ["CO"],
                                58: ["VE"],
                                60: ["MY"],
                                61: ["AU", "CC", "CX"],
                                62: ["ID"],
                                63: ["PH"],
                                64: ["NZ"],
                                65: ["SG"],
                                66: ["TH"],
                                81: ["JP"],
                                82: ["KR"],
                                84: ["VN"],
                                86: ["CN"],
                                90: ["TR"],
                                91: ["IN"],
                                92: ["PK"],
                                93: ["AF"],
                                94: ["LK"],
                                95: ["MM"],
                                98: ["IR"],
                                211: ["SS"],
                                212: ["MA", "EH"],
                                213: ["DZ"],
                                216: ["TN"],
                                218: ["LY"],
                                220: ["GM"],
                                221: ["SN"],
                                222: ["MR"],
                                223: ["ML"],
                                224: ["GN"],
                                225: ["CI"],
                                226: ["BF"],
                                227: ["NE"],
                                228: ["TG"],
                                229: ["BJ"],
                                230: ["MU"],
                                231: ["LR"],
                                232: ["SL"],
                                233: ["GH"],
                                234: ["NG"],
                                235: ["TD"],
                                236: ["CF"],
                                237: ["CM"],
                                238: ["CV"],
                                239: ["ST"],
                                240: ["GQ"],
                                241: ["GA"],
                                242: ["CG"],
                                243: ["CD"],
                                244: ["AO"],
                                245: ["GW"],
                                246: ["IO"],
                                247: ["AC"],
                                248: ["SC"],
                                249: ["SD"],
                                250: ["RW"],
                                251: ["ET"],
                                252: ["SO"],
                                253: ["DJ"],
                                254: ["KE"],
                                255: ["TZ"],
                                256: ["UG"],
                                257: ["BI"],
                                258: ["MZ"],
                                260: ["ZM"],
                                261: ["MG"],
                                262: ["RE", "YT"],
                                263: ["ZW"],
                                264: ["NA"],
                                265: ["MW"],
                                266: ["LS"],
                                267: ["BW"],
                                268: ["SZ"],
                                269: ["KM"],
                                290: ["SH", "TA"],
                                291: ["ER"],
                                297: ["AW"],
                                298: ["FO"],
                                299: ["GL"],
                                350: ["GI"],
                                351: ["PT"],
                                352: ["LU"],
                                353: ["IE"],
                                354: ["IS"],
                                355: ["AL"],
                                356: ["MT"],
                                357: ["CY"],
                                358: ["FI", "AX"],
                                359: ["BG"],
                                370: ["LT"],
                                371: ["LV"],
                                372: ["EE"],
                                373: ["MD"],
                                374: ["AM"],
                                375: ["BY"],
                                376: ["AD"],
                                377: ["MC"],
                                378: ["SM"],
                                380: ["UA"],
                                381: ["RS"],
                                382: ["ME"],
                                383: ["XK"],
                                385: ["HR"],
                                386: ["SI"],
                                387: ["BA"],
                                389: ["MK"],
                                420: ["CZ"],
                                421: ["SK"],
                                423: ["LI"],
                                500: ["FK"],
                                501: ["BZ"],
                                502: ["GT"],
                                503: ["SV"],
                                504: ["HN"],
                                505: ["NI"],
                                506: ["CR"],
                                507: ["PA"],
                                508: ["PM"],
                                509: ["HT"],
                                590: ["GP", "BL", "MF"],
                                591: ["BO"],
                                592: ["GY"],
                                593: ["EC"],
                                594: ["GF"],
                                595: ["PY"],
                                596: ["MQ"],
                                597: ["SR"],
                                598: ["UY"],
                                599: ["CW", "BQ"],
                                670: ["TL"],
                                672: ["NF"],
                                673: ["BN"],
                                674: ["NR"],
                                675: ["PG"],
                                676: ["TO"],
                                677: ["SB"],
                                678: ["VU"],
                                679: ["FJ"],
                                680: ["PW"],
                                681: ["WF"],
                                682: ["CK"],
                                683: ["NU"],
                                685: ["WS"],
                                686: ["KI"],
                                687: ["NC"],
                                688: ["TV"],
                                689: ["PF"],
                                690: ["TK"],
                                691: ["FM"],
                                692: ["MH"],
                                850: ["KP"],
                                852: ["HK"],
                                853: ["MO"],
                                855: ["KH"],
                                856: ["LA"],
                                880: ["BD"],
                                886: ["TW"],
                                960: ["MV"],
                                961: ["LB"],
                                962: ["JO"],
                                963: ["SY"],
                                964: ["IQ"],
                                965: ["KW"],
                                966: ["SA"],
                                967: ["YE"],
                                968: ["OM"],
                                970: ["PS"],
                                971: ["AE"],
                                972: ["IL"],
                                973: ["BH"],
                                974: ["QA"],
                                975: ["BT"],
                                976: ["MN"],
                                977: ["NP"],
                                992: ["TJ"],
                                993: ["TM"],
                                994: ["AZ"],
                                995: ["GE"],
                                996: ["KG"],
                                998: ["UZ"]
                            },
                            countries: {
                                AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
                                AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                                    [
                                        ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                                    ]
                                ],
                                AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                                    [
                                        ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                                        ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                                    ], "0"
                                ],
                                AF: ["93", "00", "[2-7]\\d{8}", [9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                                    ], "0"
                                ],
                                AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"],
                                AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"],
                                AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                                    [
                                        ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                                    ], "0"
                                ],
                                AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                                        ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                                        ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                                    ], "0"
                                ],
                                AO: ["244", "00", "[29]\\d{8}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                                    ]
                                ],
                                AR: ["54", "00", "11\\d{8}|(?:[2368]|9\\d)\\d{9}", [10, 11],
                                    [
                                        ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                                        ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                                        ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                                        ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                                    ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
                                ],
                                AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"],
                                AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                                    [
                                        ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                                        ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                                        ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                                        ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                                        ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                                        ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                                    ], "0"
                                ],
                                AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|(?:[2-478]\\d\\d|550)\\d{6}|1\\d{4,7}", [5, 6, 7, 8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                                    ], "0", 0, "0|(183[12])", 0, 0, 0, [
                                        ["(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", [9]],
                                        ["4(?:83[0-38]|93[01])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}", [9]],
                                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["16\\d{3,7}", [5, 6, 7, 8, 9]],
                                        ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]],
                                        ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                                    ], "0011"
                                ],
                                AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                                    ]
                                ],
                                AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
                                AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365|46", "1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"], "(0$1)"],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                                    ], "0"
                                ],
                                BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                                    ], "0"
                                ],
                                BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"],
                                BD: ["880", "00", "1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}", [6, 7, 8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                                        ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                                        ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"],
                                        ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                                    ], "0"
                                ],
                                BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                                    ], "0"
                                ],
                                BF: ["226", "00", "[025-7]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                                    ]
                                ],
                                BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9],
                                    [
                                        ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                                    ], "0"
                                ],
                                BH: ["973", "00", "[136-9]\\d{7}", [8],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                                    ]
                                ],
                                BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                                    ]
                                ],
                                BJ: ["229", "00", "(?:[2689]\\d|51)\\d{6}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25689]"]]
                                    ]
                                ],
                                BL: ["590", "00", "(?:590|69\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                                    ["590(?:2[7-9]|5[12]|87)\\d{4}"],
                                    ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"], 0, 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                                ]],
                                BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441"],
                                BN: ["673", "00", "[2-578]\\d{6}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                                    ]
                                ],
                                BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9],
                                    [
                                        ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                                        ["(\\d{8})", "$1", ["[67]"]],
                                        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                                    ], "0", 0, "0(1\\d)?"
                                ],
                                BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
                                BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                                        ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                                        ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                                    ], "0", 0, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
                                ],
                                BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"],
                                BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                                    [
                                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                                    ]
                                ],
                                BW: ["267", "00", "90\\d{5}|(?:[2-6]|7\\d)\\d{6}", [7, 8],
                                    [
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]
                                    ]
                                ],
                                BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                                    [
                                        ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                                        ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                                        ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                                        ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                                    ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
                                ],
                                BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                                        ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                                    ]
                                ],
                                CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], 0, "1", 0, 0, 0, 0, 0, [
                                    ["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"],
                                    [""],
                                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                                    ["900[2-9]\\d{6}"],
                                    ["52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]
                                ]],
                                CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                                    ["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                                    ["4(?:83[0-38]|93[01])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}", [9]],
                                    ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                                    ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]],
                                    ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                                ], "0011"],
                                CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                                    ], "0"
                                ],
                                CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                                    ]
                                ],
                                CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                                    ]
                                ],
                                CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                                    ], "0"
                                ],
                                CI: ["225", "00", "[02-9]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-9]"]]
                                    ]
                                ],
                                CK: ["682", "00", "[2-578]\\d{4}", [5],
                                    [
                                        ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                                    ]
                                ],
                                CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                                    [
                                        ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-3]"], "($1)"],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                                    ]
                                ],
                                CM: ["237", "00", "(?:[26]\\d\\d|88)\\d{6}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                                    ]
                                ],
                                CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12],
                                    [
                                        ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"],
                                        ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                                        ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                                        ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                                    ], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, 0, "00"
                                ],
                                CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", [8, 10, 11],
                                    [
                                        ["(\\d)(\\d{7})", "$1 $2", ["[14][2-9]|[25-8]"], "($1)"],
                                        ["(\\d{3})(\\d{7})", "$1 $2", ["3"]],
                                        ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                                    ], "0", 0, "0([3579]|4(?:[14]4|56))?"
                                ],
                                CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                                    ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
                                ],
                                CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10],
                                    [
                                        ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                                        ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                                        ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"],
                                        ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                                    ], "0"
                                ],
                                CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                                    ]
                                ],
                                CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                                    ], 0, 0, 0, 0, 0, "[69]"
                                ],
                                CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                                    ["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                                    ["4(?:83[0-38]|93[01])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}", [9]],
                                    ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                                    ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]],
                                    ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                                ], "0011"],
                                CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                                    [
                                        ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                                    ]
                                ],
                                CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                                        ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                                    ]
                                ],
                                DE: ["49", "00", "[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                                    [
                                        ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                                        ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                                        ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                                        ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                                        ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                                        ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                                        ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                                        ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                                        ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                        ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                                        ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                                        ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                                        ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                                        ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                                    ], "0"
                                ],
                                DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                                    ]
                                ],
                                DK: ["45", "00", "[2-9]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                                    ]
                                ],
                                DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767"],
                                DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8[024]9"],
                                DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                                    ], "0"
                                ],
                                EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                        ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                                    ], "0"
                                ],
                                EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                                        ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                                        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                                    ]
                                ],
                                EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                                    [
                                        ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                                        ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                                    ], "0"
                                ],
                                EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
                                ER: ["291", "00", "[178]\\d{6}", [7],
                                    [
                                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                                    ], "0"
                                ],
                                ES: ["34", "00", "(?:51|[6-9]\\d)\\d{7}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                                    ]
                                ],
                                ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                                    ], "0"
                                ],
                                FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                                    [
                                        ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                                        ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"],
                                        ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
                                        ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]
                                    ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
                                ],
                                FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                                    ], 0, 0, 0, 0, 0, 0, 0, "00"
                                ],
                                FK: ["500", "00", "[2-7]\\d{4}", [5]],
                                FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                                    ]
                                ],
                                FO: ["298", "00", "(?:[2-8]\\d|90)\\d{4}", [6],
                                    [
                                        ["(\\d{6})", "$1", ["[2-9]"]]
                                    ], 0, 0, "(10(?:01|[12]0|88))"
                                ],
                                FR: ["33", "00", "[1-9]\\d{8}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                                    ], "0"
                                ],
                                GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                                    [
                                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                                    ], 0, 0, "0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})", "$1"
                                ],
                                GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                                        ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                                        ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                                        ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                                        ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                                    ], "0", 0, 0, 0, 0, 0, [
                                        ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[03])|(?:4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])\\d\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:0\\d|20)))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                                        ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                                        ["80[08]\\d{7}|800\\d{6}|8001111"],
                                        ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                                        ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                                        ["76(?:0[0-2]|2[356]|34|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]],
                                        ["56\\d{8}", [10]]
                                    ], 0, " x"
                                ],
                                GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"],
                                GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                                    ], "0"
                                ],
                                GF: ["594", "00", "(?:[56]94|976)\\d{6}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]
                                    ], "0"
                                ],
                                GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [
                                    ["1481[25-9]\\d{5}", [10]],
                                    ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                                    ["80[08]\\d{7}|800\\d{6}|8001111"],
                                    ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                                    ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                                    ["76(?:0[0-2]|2[356]|34|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]],
                                    ["56\\d{8}", [10]]
                                ]],
                                GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                                    [
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                                    ], "0"
                                ],
                                GI: ["350", "00", "[256]\\d{7}", [8],
                                    [
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                                    ]
                                ],
                                GL: ["299", "00", "(?:19|[2-689]\\d)\\d{4}", [6],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]
                                    ]
                                ],
                                GM: ["220", "00", "[2-9]\\d{6}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                                    ]
                                ],
                                GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                                    ]
                                ],
                                GP: ["590", "00", "(?:590|69\\d|976)\\d{6}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]
                                    ], "0", 0, 0, 0, 0, 0, [
                                        ["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"],
                                        ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"], 0, 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                                    ]
                                ],
                                GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                                        ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                                    ]
                                ],
                                GR: ["30", "00", "5005000\\d{3}|(?:[2689]\\d|70)\\d{8}", [10],
                                    [
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                                        ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]
                                    ]
                                ],
                                GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                                    ]
                                ],
                                GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"],
                                GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                                    ]
                                ],
                                GY: ["592", "001", "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                                    ]
                                ],
                                HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", [5, 6, 7, 8, 9, 11],
                                    [
                                        ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                                        ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                                    ], 0, 0, 0, 0, 0, 0, 0, "00"
                                ],
                                HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                                    ]
                                ],
                                HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                                        ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                                    ], "0"
                                ],
                                HT: ["509", "00", "[2-489]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                                    ]
                                ],
                                HU: ["36", "00", "[2357]\\d{8}|[1-9]\\d{7}", [8, 9],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57-9]"], "06 $1"]
                                    ], "06"
                                ],
                                ID: ["62", "00[189]", "(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13],
                                    [
                                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                                        ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                                        ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                                        ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                                        ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                                        ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                                        ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                                        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                                    ], "0"
                                ],
                                IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                                        ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                                        ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                                    ], "0"
                                ],
                                IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                                    [
                                        ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                                        ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                                        ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                                        ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                                        ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                                        ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                                        ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                                    ], "0"
                                ],
                                IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([5-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"],
                                IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                                    [
                                        ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                                        ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                                        ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                                        ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                                        ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                                    ], "0"
                                ],
                                IO: ["246", "00", "3\\d{6}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                                    ]
                                ],
                                IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                                    ], "0"
                                ],
                                IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                                    [
                                        ["(\\d{4,5})", "$1", ["96"], "0$1"],
                                        ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                                    ], "0"
                                ],
                                IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                                    ], 0, 0, 0, 0, 0, 0, 0, "00"
                                ],
                                IT: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11],
                                    [
                                        ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                                        ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                                        ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]],
                                        ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                                        ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                                        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                                    ], 0, 0, 0, 0, 0, 0, [
                                        ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
                                        ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
                                        ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                                        ["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                                        ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                                        ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                                    ]
                                ],
                                JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [
                                    ["1534[0-24-8]\\d{5}"],
                                    ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                                    ["80(?:07(?:35|81)|8901)\\d{4}"],
                                    ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                                    ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                                    ["76(?:0[0-2]|2[356]|34|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}"],
                                    ["56\\d{8}"]
                                ]],
                                JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
                                JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                                        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                                        ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                                    ], "0"
                                ],
                                JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                                        ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]
                                    ], "0"
                                ],
                                KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                                        ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                                    ], "0"
                                ],
                                KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10],
                                    [
                                        ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                                    ], "0"
                                ],
                                KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                                    ], "0"
                                ],
                                KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
                                KM: ["269", "00", "[3478]\\d{6}", [7],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                                    ]
                                ],
                                KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"],
                                KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                                    ], "0"
                                ],
                                KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                                    [
                                        ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                                        ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                                        ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                                        ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                                    ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
                                ],
                                KW: ["965", "00", "(?:18|[2569]\\d\\d)\\d{5}", [7, 8],
                                    [
                                        ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]
                                    ]
                                ],
                                KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"],
                                KZ: ["7", "810", "33622\\d{5}|(?:7\\d|80)\\d{8}", [10], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
                                LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                                    ], "0"
                                ],
                                LB: ["961", "00", "[7-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                                    [
                                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]
                                    ], "0"
                                ],
                                LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758"],
                                LI: ["423", "00", "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}", [7, 9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                                    ], "0", 0, "0|(1001)"
                                ],
                                LK: ["94", "00", "[1-9]\\d{8}", [9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                                    ], "0"
                                ],
                                LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", [7, 8, 9],
                                    [
                                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
                                    ], "0"
                                ],
                                LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                                    ]
                                ],
                                LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
                                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                                        ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]
                                    ], "8", 0, "[08]"
                                ],
                                LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                                    [
                                        ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                                    ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
                                ],
                                LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                                    ]
                                ],
                                LY: ["218", "00", "[2-9]\\d{8}", [9],
                                    [
                                        ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                                    ], "0"
                                ],
                                MA: ["212", "00", "[5-8]\\d{8}", [9],
                                    [
                                        ["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]", "5(?:29|38)[89]0"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                                        ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"],
                                        ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                                        ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                                    ], "0", 0, 0, 0, 0, 0, [
                                        ["5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[015-7]\\d|2[02-9]|3[0-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                                        ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[016-8]|6[1267]|7[0-27]))\\d{6}"],
                                        ["80\\d{7}"],
                                        ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]
                                    ]
                                ],
                                MC: ["377", "00", "870\\d{5}|(?:[349]|6\\d)\\d{7}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                                    ], "0"
                                ],
                                MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                                    [
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                                    ], "0"
                                ],
                                ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                                    ], "0"
                                ],
                                MF: ["590", "00", "(?:590|69\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                                    ["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],
                                    ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"], 0, 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                                ]],
                                MG: ["261", "00", "[23]\\d{8}", [9],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                                    ], "0", 0, "0|([24-9]\\d{6})$", "20$1"
                                ],
                                MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                                    ], "1"
                                ],
                                MK: ["389", "00", "[2-578]\\d{7}", [8],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                                        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                                    ], "0"
                                ],
                                ML: ["223", "00", "[24-9]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                                    ]
                                ],
                                MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                                    [
                                        ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                                        ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                                    ], "0"
                                ],
                                MN: ["976", "001", "[12]\\d{7,9}|[57-9]\\d{7}", [8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
                                        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                                        ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                                        ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                                    ], "0"
                                ],
                                MO: ["853", "00", "(?:28|[68]\\d)\\d{6}", [8],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                                    ]
                                ],
                                MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"],
                                MQ: ["596", "00", "69\\d{7}|(?:59|97)6\\d{6}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]
                                    ], "0"
                                ],
                                MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                                    ]
                                ],
                                MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664"],
                                MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                                    ]
                                ],
                                MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[2-468]|5\\d)\\d{6}", [7, 8],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["5"]]
                                    ], 0, 0, 0, 0, 0, 0, 0, "020"
                                ],
                                MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                                    ], 0, 0, 0, 0, 0, 0, 0, "00"
                                ],
                                MW: ["265", "00", "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", [7, 9],
                                    [
                                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                                    ], "0"
                                ],
                                MX: ["52", "0[09]", "(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}", [10, 11],
                                    [
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                                        ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1],
                                        ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]
                                    ], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"
                                ],
                                MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9])|8"], "0$1"],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                                    ], "0"
                                ],
                                MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                                    ]
                                ],
                                NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                                    ], "0"
                                ],
                                NC: ["687", "00", "[2-57-9]\\d{5}", [6],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]
                                    ]
                                ],
                                NE: ["227", "00", "[0289]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]"]]
                                    ]
                                ],
                                NF: ["672", "00", "[13]\\d{5}", [6],
                                    [
                                        ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                                        ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                                    ], 0, 0, "([0-258]\\d{4})$", "3$1"
                                ],
                                NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                                        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                                        ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                                    ], "0"
                                ],
                                NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                                    ]
                                ],
                                NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", [5, 6, 7, 8, 9, 10],
                                    [
                                        ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                                        ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                                        ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
                                    ], "0"
                                ],
                                NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|5[89]"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                                    ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
                                ],
                                NP: ["977", "00", "9\\d{9}|[1-9]\\d{7}", [8, 10],
                                    [
                                        ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                                        ["(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"],
                                        ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                                    ], "0"
                                ],
                                NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
                                    ]
                                ],
                                NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                                    ]
                                ],
                                NZ: ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{3,8})", "$1 $2", ["83"], "0$1"],
                                        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[0367]|[89]0"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
                                    ], "0", 0, 0, 0, 0, 0, 0, "00"
                                ],
                                OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|8007\\d{4,5}", [7, 8, 9],
                                    [
                                        ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                                        ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                                    ]
                                ],
                                PA: ["507", "00", "(?:[1-57-9]|6\\d)\\d{6}", [7, 8],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                                        ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                                    ]
                                ],
                                PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                                    [
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                                        ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                                        ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                                    ], "0", 0, 0, 0, 0, 0, 0, 0, " Anexo "
                                ],
                                PF: ["689", "00", "[48]\\d{7}|4\\d{5}", [6, 8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]
                                    ]
                                ],
                                PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                                    ], 0, 0, 0, 0, 0, 0, 0, "00"
                                ],
                                PH: ["63", "00", "1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}", [6, 8, 9, 10, 11, 12, 13],
                                    [
                                        ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                                        ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                                        ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                        ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                                    ], "0"
                                ],
                                PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"],
                                        ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                                        ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                                        ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                                        ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                                        ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                                        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                                    ], "0"
                                ],
                                PL: ["48", "00", "[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}", [6, 7, 8, 9],
                                    [
                                        ["(\\d{5})", "$1", ["19"]],
                                        ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                                        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8[08]"]],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-8]|9[145]"]]
                                    ]
                                ],
                                PM: ["508", "00", "[45]\\d{5}", [6],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]
                                    ], "0"
                                ],
                                PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
                                PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                                    ], "0"
                                ],
                                PT: ["351", "00", "(?:[26-9]\\d|30)\\d{7}", [9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]
                                    ]
                                ],
                                PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                                    ]
                                ],
                                PY: ["595", "00", "59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9],
                                    [
                                        ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                                        ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                                        ["(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]
                                    ], "0"
                                ],
                                QA: ["974", "00", "[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}", [7, 8],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]
                                    ]
                                ],
                                RE: ["262", "00", "9769\\d{5}|(?:26|[68]\\d)\\d{7}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]
                                    ], "0", 0, 0, 0, 0, "26[23]|69|[89]"
                                ],
                                RO: ["40", "00", "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", [6, 9],
                                    [
                                        ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                                        ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                                    ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
                                ],
                                RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                                    [
                                        ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                                        ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                                    ], "0"
                                ],
                                RU: ["7", "810", "[347-9]\\d{9}", [10],
                                    [
                                        ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                                        ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", 1]
                                    ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
                                ],
                                RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]
                                    ], "0"
                                ],
                                SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                                    [
                                        ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                                    ], "0"
                                ],
                                SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                                    [
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                                    ]
                                ],
                                SC: ["248", "010|0[0-2]", "8000\\d{3}|(?:[249]\\d|64)\\d{5}", [7],
                                    [
                                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                                    ], 0, 0, 0, 0, 0, 0, 0, "00"
                                ],
                                SD: ["249", "00", "[19]\\d{8}", [9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                                    ], "0"
                                ],
                                SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                                        ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1", 0, "$1 $2"],
                                        ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                                        ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                                        ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                                        ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                                        ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                                        ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                                        ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                                    ], "0"
                                ],
                                SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:01|[1-9])"]],
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                                        ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                                    ]
                                ],
                                SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
                                SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                                    [
                                        ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                                    ], "0", 0, 0, 0, 0, 0, 0, "00"
                                ],
                                SJ: ["47", "00", "0\\d{4}|(?:[4589]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
                                SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                                    [
                                        ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                                        ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                                    ], "0"
                                ],
                                SL: ["232", "00", "(?:[2378]\\d|66|99)\\d{6}", [8],
                                    [
                                        ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                                    ], "0"
                                ],
                                SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                                        ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                                    ], 0, 0, "([89]\\d{5})$", "0549$1"
                                ],
                                SN: ["221", "00", "(?:[378]\\d{4}|93330)\\d{4}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                                    ]
                                ],
                                SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                                    [
                                        ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                                        ["(\\d{6})", "$1", ["[134]"]],
                                        ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                                        ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]],
                                        ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|9[2-9]"]]
                                    ], "0"
                                ],
                                SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                                        ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                                        ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                                    ]
                                ],
                                SS: ["211", "00", "[19]\\d{8}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                                    ], "0"
                                ],
                                ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                                    ]
                                ],
                                SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                                    ]
                                ],
                                SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"],
                                SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]
                                    ], "0"
                                ],
                                SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                                        ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                                    ]
                                ],
                                TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                                TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"],
                                TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                                    ], 0, 0, 0, 0, 0, 0, 0, "00"
                                ],
                                TG: ["228", "00", "[279]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                                    ]
                                ],
                                TH: ["66", "00[1-9]", "1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}", [8, 9, 10],
                                    [
                                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
                                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                                    ], "0"
                                ],
                                TJ: ["992", "810", "(?:00|11|[3-579]\\d|88)\\d{7}", [9],
                                    [
                                        ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"], 0, 1],
                                        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], 0, 1],
                                        ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"], 0, 1],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0457-9]|11"], 0, 1]
                                    ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                                ],
                                TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
                                TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                                    ]
                                ],
                                TM: ["993", "810", "[1-6]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                                        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                                        ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                                    ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                                ],
                                TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                                    ]
                                ],
                                TO: ["676", "00", "(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}", [5, 7],
                                    [
                                        ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                                        ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[5-8]"]]
                                    ]
                                ],
                                TR: ["90", "00", "(?:4|8\\d{5})\\d{6}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", 1],
                                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1],
                                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                                        ["(\\d{3})(\\d{3})(\\d{6})", "$1 $2 $3", ["80"], "0$1", 1]
                                    ], "0"
                                ],
                                TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"],
                                TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                                    [
                                        ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                                        ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                                    ]
                                ],
                                TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                                    [
                                        ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                                        ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                                        ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                                    ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
                                ],
                                TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9],
                                    [
                                        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                                    ], "0"
                                ],
                                UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"],
                                        ["(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                                    ], "0", 0, 0, 0, 0, 0, 0, "0~0"
                                ],
                                UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                                    [
                                        ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                                        ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                                        ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                                    ], "0"
                                ],
                                US: ["1", "011", "[2-9]\\d{9}", [10],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                                    ], "1", 0, 0, 0, 0, 0, [
                                        ["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                                        [""],
                                        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                                        ["900[2-9]\\d{6}"],
                                        ["52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                                    ]
                                ],
                                UY: ["598", "0(?:0|1[3-9]\\d)", "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", [7, 8],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]
                                    ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
                                ],
                                UZ: ["998", "810", "(?:[679]\\d|88)\\d{7}", [9],
                                    [
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[6-9]"], "8 $1"]
                                    ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                                ],
                                VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
                                VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"],
                                VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                                    [
                                        ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                                    ], "0"
                                ],
                                VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"],
                                VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"],
                                VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                                    [
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                                        ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                                        ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                                    ], "0"
                                ],
                                VU: ["678", "00", "(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}", [5, 7],
                                    [
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                                    ]
                                ],
                                WF: ["681", "00", "(?:[45]0|68|72|8\\d)\\d{4}", [6],
                                    [
                                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]
                                    ]
                                ],
                                WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                                    [
                                        ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                                        ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                                    ]
                                ],
                                XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9],
                                    [
                                        ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                                    ], "0"
                                ],
                                YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                                    [
                                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                                    ], "0"
                                ],
                                YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"],
                                ZA: ["27", "00", "[1-9]\\d{8}|8\\d{4,7}", [5, 6, 7, 8, 9],
                                    [
                                        ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]
                                    ], "0"
                                ],
                                ZM: ["260", "00", "(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                                        ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                                    ], "0"
                                ],
                                ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                                    [
                                        ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                                        ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                                        ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                                        ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                                        ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                                        ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                                        ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                                    ], "0"
                                ]
                            },
                            nonGeographic: {
                                800: ["800", 0, "[1-9]\\d{7}", [8],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                                    ], 0, 0, 0, 0, 0, 0, [0, 0, ["[1-9]\\d{7}"]]
                                ],
                                808: ["808", 0, "[1-9]\\d{7}", [8],
                                    [
                                        ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                                    ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
                                ],
                                870: ["870", 0, "[35-7]\\d{8}", [9],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                                    ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]\\d|7[6-8])\\d{7}"]]
                                ],
                                878: ["878", 0, "10\\d{10}", [12],
                                    [
                                        ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                                    ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
                                ],
                                881: ["881", 0, "[0-36-9]\\d{8}", [9],
                                    [
                                        ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]
                                    ], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]
                                ],
                                882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|[19]\\d{7}", [7, 8, 9, 10, 11, 12],
                                    [
                                        ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                                        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]],
                                        ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                                        ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]
                                    ], 0, 0, 0, 0, 0, 0, [0, ["3(?:37\\d\\d|42)\\d{4}|3(?:2|47|7\\d{3})\\d{7}", [7, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]
                                ],
                                883: ["883", 0, "51\\d{7}(?:\\d{3})?", [9, 12],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                                        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]],
                                        ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["5"]]
                                    ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["51[013]0\\d{8}|5100\\d{5}"]]
                                ],
                                888: ["888", 0, "\\d{11}", [11],
                                    [
                                        ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                                    ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
                                ],
                                979: ["979", 0, "[1359]\\d{8}", [9],
                                    [
                                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                                    ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
                                ]
                            }
                        },
                        N = "".concat("-‐-―−ー－").concat("／/").concat("．.").concat("  ­​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～");

                    function _(text, t) {
                        return text = text || "", new RegExp("^(?:" + t + ")$").test(text)
                    }
                    var O = function t(code) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.name = this.constructor.name, this.message = code, this.stack = new Error(code).stack
                    };
                    (O.prototype = Object.create(Error.prototype)).constructor = O;
                    var P = function(a, b) {
                        a = a.split("-"), b = b.split("-");
                        for (var t = a[0].split("."), e = b[0].split("."), i = 0; i < 3; i++) {
                            var n = Number(t[i]),
                                r = Number(e[i]);
                            if (n > r) return 1;
                            if (r > n) return -1;
                            if (!isNaN(n) && isNaN(r)) return 1;
                            if (isNaN(n) && !isNaN(r)) return -1
                        }
                        return a[1] && b[1] ? a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0 : !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0
                    };

                    function k(t) {
                        return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function E(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function T(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    function I(t, e, n) {
                        return e && T(t.prototype, e), n && T(t, n), t
                    }
                    var A = function() {
                            function t(e) {
                                E(this, t),
                                    function(t) {
                                        if (!t) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                                        if (!j(t) || !j(t.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(j(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + B(t) + ": " + t, "."))
                                    }(e), this.metadata = e, G.call(this, e)
                            }
                            return I(t, [{
                                key: "getCountries",
                                value: function() {
                                    return Object.keys(this.metadata.countries).filter((function(t) {
                                        return "001" !== t
                                    }))
                                }
                            }, {
                                key: "getCountryMetadata",
                                value: function(t) {
                                    return this.metadata.countries[t]
                                }
                            }, {
                                key: "nonGeographic",
                                value: function() {
                                    if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                                }
                            }, {
                                key: "hasCountry",
                                value: function(t) {
                                    return void 0 !== this.getCountryMetadata(t)
                                }
                            }, {
                                key: "hasCallingCode",
                                value: function(t) {
                                    if (this.getCountryCodesForCallingCode(t)) return !0;
                                    if (this.nonGeographic()) {
                                        if (this.nonGeographic()[t]) return !0
                                    } else {
                                        var e = this.countryCallingCodes()[t];
                                        if (e && 1 === e.length && "001" === e[0]) return !0
                                    }
                                }
                            }, {
                                key: "isNonGeographicCallingCode",
                                value: function(t) {
                                    return this.nonGeographic() ? !!this.nonGeographic()[t] : !this.getCountryCodesForCallingCode(t)
                                }
                            }, {
                                key: "country",
                                value: function(t) {
                                    return this.selectNumberingPlan(t)
                                }
                            }, {
                                key: "selectNumberingPlan",
                                value: function(t, e) {
                                    if (t && "001" !== t) {
                                        if (!this.hasCountry(t)) throw new Error("Unknown country: ".concat(t));
                                        this.numberingPlan = new L(this.getCountryMetadata(t), this)
                                    } else if (e) {
                                        if (!this.hasCallingCode(e)) throw new Error("Unknown calling code: ".concat(e));
                                        this.numberingPlan = new L(this.getNumberingPlanMetadata(e), this)
                                    } else this.numberingPlan = void 0;
                                    return this
                                }
                            }, {
                                key: "getCountryCodesForCallingCode",
                                value: function(t) {
                                    var e = this.countryCallingCodes()[t];
                                    if (e) {
                                        if (1 === e.length && 3 === e[0].length) return;
                                        return e
                                    }
                                }
                            }, {
                                key: "getCountryCodeForCallingCode",
                                value: function(t) {
                                    var e = this.getCountryCodesForCallingCode(t);
                                    if (e) return e[0]
                                }
                            }, {
                                key: "getNumberingPlanMetadata",
                                value: function(t) {
                                    var e = this.getCountryCodeForCallingCode(t);
                                    if (e) return this.getCountryMetadata(e);
                                    if (this.nonGeographic()) {
                                        var n = this.nonGeographic()[t];
                                        if (n) return n
                                    } else {
                                        var r = this.countryCallingCodes()[t];
                                        if (r && 1 === r.length && "001" === r[0]) return this.metadata.countries["001"]
                                    }
                                }
                            }, {
                                key: "countryCallingCode",
                                value: function() {
                                    return this.numberingPlan.callingCode()
                                }
                            }, {
                                key: "IDDPrefix",
                                value: function() {
                                    return this.numberingPlan.IDDPrefix()
                                }
                            }, {
                                key: "defaultIDDPrefix",
                                value: function() {
                                    return this.numberingPlan.defaultIDDPrefix()
                                }
                            }, {
                                key: "nationalNumberPattern",
                                value: function() {
                                    return this.numberingPlan.nationalNumberPattern()
                                }
                            }, {
                                key: "possibleLengths",
                                value: function() {
                                    return this.numberingPlan.possibleLengths()
                                }
                            }, {
                                key: "formats",
                                value: function() {
                                    return this.numberingPlan.formats()
                                }
                            }, {
                                key: "nationalPrefixForParsing",
                                value: function() {
                                    return this.numberingPlan.nationalPrefixForParsing()
                                }
                            }, {
                                key: "nationalPrefixTransformRule",
                                value: function() {
                                    return this.numberingPlan.nationalPrefixTransformRule()
                                }
                            }, {
                                key: "leadingDigits",
                                value: function() {
                                    return this.numberingPlan.leadingDigits()
                                }
                            }, {
                                key: "hasTypes",
                                value: function() {
                                    return this.numberingPlan.hasTypes()
                                }
                            }, {
                                key: "type",
                                value: function(t) {
                                    return this.numberingPlan.type(t)
                                }
                            }, {
                                key: "ext",
                                value: function() {
                                    return this.numberingPlan.ext()
                                }
                            }, {
                                key: "countryCallingCodes",
                                value: function() {
                                    return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                                }
                            }, {
                                key: "chooseCountryByCountryCallingCode",
                                value: function(t) {
                                    this.selectNumberingPlan(null, t)
                                }
                            }, {
                                key: "hasSelectedNumberingPlan",
                                value: function() {
                                    return void 0 !== this.numberingPlan
                                }
                            }]), t
                        }(),
                        L = function() {
                            function t(e, n) {
                                E(this, t), this.globalMetadataObject = n, this.metadata = e, G.call(this, n.metadata)
                            }
                            return I(t, [{
                                key: "callingCode",
                                value: function() {
                                    return this.metadata[0]
                                }
                            }, {
                                key: "getDefaultCountryMetadataForRegion",
                                value: function() {
                                    return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
                                }
                            }, {
                                key: "IDDPrefix",
                                value: function() {
                                    if (!this.v1 && !this.v2) return this.metadata[1]
                                }
                            }, {
                                key: "defaultIDDPrefix",
                                value: function() {
                                    if (!this.v1 && !this.v2) return this.metadata[12]
                                }
                            }, {
                                key: "nationalNumberPattern",
                                value: function() {
                                    return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
                                }
                            }, {
                                key: "possibleLengths",
                                value: function() {
                                    if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
                                }
                            }, {
                                key: "_getFormats",
                                value: function(t) {
                                    return t[this.v1 ? 2 : this.v2 ? 3 : 4]
                                }
                            }, {
                                key: "formats",
                                value: function() {
                                    var t = this,
                                        e = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                                    return e.map((function(e) {
                                        return new R(e, t)
                                    }))
                                }
                            }, {
                                key: "nationalPrefix",
                                value: function() {
                                    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                                }
                            }, {
                                key: "_getNationalPrefixFormattingRule",
                                value: function(t) {
                                    return t[this.v1 ? 4 : this.v2 ? 5 : 6]
                                }
                            }, {
                                key: "nationalPrefixFormattingRule",
                                value: function() {
                                    return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                                }
                            }, {
                                key: "_nationalPrefixForParsing",
                                value: function() {
                                    return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
                                }
                            }, {
                                key: "nationalPrefixForParsing",
                                value: function() {
                                    return this._nationalPrefixForParsing() || this.nationalPrefix()
                                }
                            }, {
                                key: "nationalPrefixTransformRule",
                                value: function() {
                                    return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                                }
                            }, {
                                key: "_getNationalPrefixIsOptionalWhenFormatting",
                                value: function() {
                                    return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                                }
                            }, {
                                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                                value: function() {
                                    return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                                }
                            }, {
                                key: "leadingDigits",
                                value: function() {
                                    return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                                }
                            }, {
                                key: "types",
                                value: function() {
                                    return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                                }
                            }, {
                                key: "hasTypes",
                                value: function() {
                                    return (!this.types() || 0 !== this.types().length) && !!this.types()
                                }
                            }, {
                                key: "type",
                                value: function(t) {
                                    if (this.hasTypes() && D(this.types(), t)) return new M(D(this.types(), t), this)
                                }
                            }, {
                                key: "ext",
                                value: function() {
                                    return this.v1 || this.v2 ? " ext. " : this.metadata[13] || " ext. "
                                }
                            }]), t
                        }(),
                        R = function() {
                            function t(e, n) {
                                E(this, t), this._format = e, this.metadata = n
                            }
                            return I(t, [{
                                key: "pattern",
                                value: function() {
                                    return this._format[0]
                                }
                            }, {
                                key: "format",
                                value: function() {
                                    return this._format[1]
                                }
                            }, {
                                key: "leadingDigitsPatterns",
                                value: function() {
                                    return this._format[2] || []
                                }
                            }, {
                                key: "nationalPrefixFormattingRule",
                                value: function() {
                                    return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                                }
                            }, {
                                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                                value: function() {
                                    return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                                }
                            }, {
                                key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                                value: function() {
                                    return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                                }
                            }, {
                                key: "usesNationalPrefix",
                                value: function() {
                                    return this.nationalPrefixFormattingRule() && !F.test(this.nationalPrefixFormattingRule())
                                }
                            }, {
                                key: "internationalFormat",
                                value: function() {
                                    return this._format[5] || this.format()
                                }
                            }]), t
                        }(),
                        F = /^\(?\$1\)?$/,
                        M = function() {
                            function t(e, n) {
                                E(this, t), this.type = e, this.metadata = n
                            }
                            return I(t, [{
                                key: "pattern",
                                value: function() {
                                    return this.metadata.v1 ? this.type : this.type[0]
                                }
                            }, {
                                key: "possibleLengths",
                                value: function() {
                                    if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                                }
                            }]), t
                        }();

                    function D(t, e) {
                        switch (e) {
                            case "FIXED_LINE":
                                return t[0];
                            case "MOBILE":
                                return t[1];
                            case "TOLL_FREE":
                                return t[2];
                            case "PREMIUM_RATE":
                                return t[3];
                            case "PERSONAL_NUMBER":
                                return t[4];
                            case "VOICEMAIL":
                                return t[5];
                            case "UAN":
                                return t[6];
                            case "PAGER":
                                return t[7];
                            case "VOIP":
                                return t[8];
                            case "SHARED_COST":
                                return t[9]
                        }
                    }
                    var j = function(t) {
                            return "object" === k(t)
                        },
                        B = function(t) {
                            return k(t)
                        };

                    function V(t, e) {
                        if ((e = new A(e)).hasCountry(t)) return e.country(t).countryCallingCode();
                        throw new Error("Unknown country: ".concat(t))
                    }

                    function z(t, e) {
                        return void 0 !== e.countries[t]
                    }

                    function G(t) {
                        this.v1 = !t.version, this.v2 = void 0 !== t.version && -1 === P(t.version, "1.2.0"), this.v3 = void 0 !== t.version && -1 === P(t.version, "1.7.35"), this.v4 = void 0 !== t.version
                    }

                    function U(t) {
                        var e = "xｘ#＃~～";
                        switch (t) {
                            case "parsing":
                                e = ",;" + e
                        }
                        return ";ext=([0-9０-９٠-٩۰-۹]{1,7})|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|[" + e + "]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*([0-9０-９٠-٩۰-۹]{1,7})#?|[- ]+([0-9０-９٠-٩۰-۹]{1,5})#"
                    }
                    var H = U("parsing"),
                        K = U("matching"),
                        W = new RegExp("(?:" + H + ")$", "i");
                    var Y = new RegExp("^[0-9０-９٠-٩۰-۹]{2}$|^" + ("[+＋]{0,1}(?:[" + N + "]*[0-9０-９٠-٩۰-۹]){3,}[" + N + "0-9０-９٠-٩۰-۹]*") + "(?:" + H + ")?$", "i");

                    function Z(t) {
                        return t.length >= 2 && Y.test(t)
                    }
                    var J = {
                        0: "0",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        "０": "0",
                        "１": "1",
                        "２": "2",
                        "３": "3",
                        "４": "4",
                        "５": "5",
                        "６": "6",
                        "７": "7",
                        "８": "8",
                        "９": "9",
                        "٠": "0",
                        "١": "1",
                        "٢": "2",
                        "٣": "3",
                        "٤": "4",
                        "٥": "5",
                        "٦": "6",
                        "٧": "7",
                        "٨": "8",
                        "٩": "9",
                        "۰": "0",
                        "۱": "1",
                        "۲": "2",
                        "۳": "3",
                        "۴": "4",
                        "۵": "5",
                        "۶": "6",
                        "۷": "7",
                        "۸": "8",
                        "۹": "9"
                    };

                    function X(t) {
                        return J[t]
                    }

                    function Q(t) {
                        var e = "",
                            n = t.split(""),
                            r = Array.isArray(n),
                            o = 0;
                        for (n = r ? n : n[Symbol.iterator]();;) {
                            var d;
                            if (r) {
                                if (o >= n.length) break;
                                d = n[o++]
                            } else {
                                if ((o = n.next()).done) break;
                                d = o.value
                            }
                            var c = X(d);
                            c && (e += c)
                        }
                        return e
                    }

                    function tt(t) {
                        var e = "",
                            n = t.split(""),
                            r = Array.isArray(n),
                            o = 0;
                        for (n = r ? n : n[Symbol.iterator]();;) {
                            var d;
                            if (r) {
                                if (o >= n.length) break;
                                d = n[o++]
                            } else {
                                if ((o = n.next()).done) break;
                                d = o.value
                            }
                            e += et(d, e) || ""
                        }
                        return e
                    }

                    function et(t, e) {
                        if ("+" === t) {
                            if (e) return;
                            return "+"
                        }
                        return X(t)
                    }
                    var nt = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

                    function it(input, t, e) {
                        if (t = t || {}, input.country) {
                            (e = new A(e)).selectNumberingPlan(input.country, input.countryCallingCode);
                            var n = t.v2 ? input.nationalNumber : input.phone;
                            if (_(n, e.nationalNumberPattern())) {
                                if (ot(n, "FIXED_LINE", e)) return e.type("MOBILE") && "" === e.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : e.type("MOBILE") ? ot(n, "MOBILE", e) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
                                for (var r = 0, o = nt; r < o.length; r++) {
                                    var d = o[r];
                                    if (ot(n, d, e)) return d
                                }
                            }
                        }
                    }

                    function ot(t, e, n) {
                        return !(!(e = n.type(e)) || !e.pattern()) && (!(e.possibleLengths() && e.possibleLengths().indexOf(t.length) < 0) && _(t, e.pattern()))
                    }

                    function at(t, e, n) {
                        var r = n.type(e),
                            o = r && r.possibleLengths() || n.possibleLengths();
                        if (!o) return "IS_POSSIBLE";
                        if ("FIXED_LINE_OR_MOBILE" === e) {
                            if (!n.type("FIXED_LINE")) return at(t, "MOBILE", n);
                            var d = n.type("MOBILE");
                            d && (o = function(a, b) {
                                var t = a.slice(),
                                    e = b,
                                    n = Array.isArray(e),
                                    r = 0;
                                for (e = n ? e : e[Symbol.iterator]();;) {
                                    var o;
                                    if (n) {
                                        if (r >= e.length) break;
                                        o = e[r++]
                                    } else {
                                        if ((r = e.next()).done) break;
                                        o = r.value
                                    }
                                    var element = o;
                                    a.indexOf(element) < 0 && t.push(element)
                                }
                                return t.sort((function(a, b) {
                                    return a - b
                                }))
                            }(o, d.possibleLengths()))
                        } else if (e && !r) return "INVALID_LENGTH";
                        var c = t.length,
                            l = o[0];
                        return l === c ? "IS_POSSIBLE" : l > c ? "TOO_SHORT" : o[o.length - 1] < c ? "TOO_LONG" : o.indexOf(c, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
                    }

                    function st(input, t, e) {
                        if (void 0 === t && (t = {}), e = new A(e), t.v2) {
                            if (!input.countryCallingCode) throw new Error("Invalid phone number object passed");
                            e.chooseCountryByCountryCallingCode(input.countryCallingCode)
                        } else {
                            if (!input.phone) return !1;
                            if (input.country) {
                                if (!e.hasCountry(input.country)) throw new Error("Unknown country: ".concat(input.country));
                                e.country(input.country)
                            } else {
                                if (!input.countryCallingCode) throw new Error("Invalid phone number object passed");
                                e.chooseCountryByCountryCallingCode(input.countryCallingCode)
                            }
                        }
                        if (e.possibleLengths()) return ut(input.phone || input.nationalNumber, void 0, e);
                        if (input.countryCallingCode && e.isNonGeographicCallingCode(input.countryCallingCode)) return !0;
                        throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
                    }

                    function ut(t, e, n) {
                        switch (at(t, void 0, n)) {
                            case "IS_POSSIBLE":
                                return !0;
                            default:
                                return !1
                        }
                    }
                    var ct = new RegExp("([0-9０-９٠-٩۰-۹])"),
                        lt = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

                    function ft(t, e, n, r) {
                        if (e) {
                            var o = new A(r);
                            o.selectNumberingPlan(e, n);
                            var d = new RegExp(o.IDDPrefix());
                            if (0 === t.search(d)) {
                                var c = (t = t.slice(t.match(d)[0].length)).match(ct);
                                if (!(c && null != c[1] && c[1].length > 0 && "0" === c[1])) return t
                            }
                        }
                    }

                    function $t(t, i) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, i) {
                            var e = [],
                                n = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var d, c = t[Symbol.iterator](); !(n = (d = c.next()).done) && (e.push(d.value), !i || e.length !== i); n = !0);
                            } catch (t) {
                                r = !0, o = t
                            } finally {
                                try {
                                    n || null == c.return || c.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            return e
                        }(t, i) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }()
                    }

                    function ht(text) {
                        var t, e, n = (text = text.replace(/^tel:/, "tel=")).split(";"),
                            r = Array.isArray(n),
                            o = 0;
                        for (n = r ? n : n[Symbol.iterator]();;) {
                            var d;
                            if (r) {
                                if (o >= n.length) break;
                                d = n[o++]
                            } else {
                                if ((o = n.next()).done) break;
                                d = o.value
                            }
                            var c = $t(d.split("="), 2),
                                l = c[0],
                                f = c[1];
                            switch (l) {
                                case "tel":
                                    t = f;
                                    break;
                                case "ext":
                                    e = f;
                                    break;
                                case "phone-context":
                                    "+" === f[0] && (t = f + t)
                            }
                        }
                        if (!Z(t)) return {};
                        var $ = {
                            number: t
                        };
                        return e && ($.ext = e), $
                    }

                    function pt(t) {
                        var e = t.number,
                            n = t.ext;
                        if (!e) return "";
                        if ("+" !== e[0]) throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
                        return "tel:".concat(e).concat(n ? ";ext=" + n : "")
                    }

                    function vt(input, t, e) {
                        return t = t || {}, e = new A(e), !!input.country && (e.selectNumberingPlan(input.country, input.countryCallingCode), e.hasTypes() ? void 0 !== it(input, t, e.metadata) : _(t.v2 ? input.nationalNumber : input.phone, e.nationalNumberPattern()))
                    }

                    function yt(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }
                    var mt = {
                        formatExtension: function(t, e, n) {
                            return "".concat(t).concat(n.ext()).concat(e)
                        }
                    };

                    function gt(input, t, e, n) {
                        if (e = e ? function(t) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {},
                                        e = Object.keys(source);
                                    "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(source).filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(source, t).enumerable
                                    })))), e.forEach((function(e) {
                                        yt(t, e, source[e])
                                    }))
                                }
                                return t
                            }({}, mt, e) : mt, n = new A(n), input.country && "001" !== input.country) {
                            if (!n.hasCountry(input.country)) throw new Error("Unknown country: ".concat(input.country));
                            n.country(input.country)
                        } else {
                            if (!input.countryCallingCode) return input.phone || "";
                            n.chooseCountryByCountryCallingCode(input.countryCallingCode)
                        }
                        var r, o = n.countryCallingCode(),
                            d = e.v2 ? input.nationalNumber : input.phone;
                        switch (t) {
                            case "NATIONAL":
                                return d ? wt(r = St(d, "NATIONAL", n, e), input.ext, n, e.formatExtension) : "";
                            case "INTERNATIONAL":
                                return d ? (r = St(d, "INTERNATIONAL", n, e), wt(r = "+".concat(o, " ").concat(r), input.ext, n, e.formatExtension)) : "+".concat(o);
                            case "E.164":
                                return "+".concat(o).concat(d);
                            case "RFC3966":
                                return pt({
                                    number: "+".concat(o).concat(d),
                                    ext: input.ext
                                });
                            case "IDD":
                                if (!e.fromCountry) return;
                                var c = function(t, e, n) {
                                    var r = new A(n);
                                    return r.selectNumberingPlan(t, e), lt.test(r.IDDPrefix()) ? r.IDDPrefix() : r.defaultIDDPrefix()
                                }(e.fromCountry, void 0, n.metadata);
                                if (!c) return;
                                if (e.humanReadable) {
                                    var l = o && function(t, e, n, r, o) {
                                        var d = new A(r.metadata);
                                        if (d.country(n), e === d.countryCallingCode()) return "1" === e ? e + " " + St(t, "NATIONAL", r, o) : St(t, "NATIONAL", r, o)
                                    }(d, n.countryCallingCode(), e.fromCountry, n, e);
                                    return wt(r = l || "".concat(c, " ").concat(o, " ").concat(St(d, "INTERNATIONAL", n, e)), input.ext, n, e.formatExtension)
                                }
                                return "".concat(c).concat(o).concat(d);
                            default:
                                throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'))
                        }
                    }
                    var bt = /(\$\d)/;

                    function Ct(t, e, n, r, o) {
                        var d = t.replace(new RegExp(e.pattern()), n ? e.internationalFormat() : r && e.nationalPrefixFormattingRule() ? e.format().replace(bt, e.nationalPrefixFormattingRule()) : e.format());
                        return n ? xt(d) : d
                    }

                    function St(t, e, n, r) {
                        var o = function(t, e) {
                            var n = t,
                                r = Array.isArray(n),
                                o = 0;
                            for (n = r ? n : n[Symbol.iterator]();;) {
                                var d;
                                if (r) {
                                    if (o >= n.length) break;
                                    d = n[o++]
                                } else {
                                    if ((o = n.next()).done) break;
                                    d = o.value
                                }
                                var c = d;
                                if (c.leadingDigitsPatterns().length > 0) {
                                    var l = c.leadingDigitsPatterns()[c.leadingDigitsPatterns().length - 1];
                                    if (0 !== e.search(l)) continue
                                }
                                if (_(e, c.pattern())) return c
                            }
                        }(n.formats(), t);
                        return o ? Ct(t, o, "INTERNATIONAL" === e, !o.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !1 !== r.nationalPrefix) : t
                    }

                    function xt(t) {
                        return t.replace(new RegExp("[".concat(N, "]+"), "g"), " ").trim()
                    }

                    function wt(t, e, n, r) {
                        return e ? r(t, e, n) : t
                    }

                    function Nt(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function _t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    var Ot = function() {
                            function t(e, n, r) {
                                if (function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t), !e) throw new TypeError("`country` or `countryCallingCode` not passed");
                                if (!n) throw new TypeError("`nationalNumber` not passed");
                                var o = new A(r);
                                Pt(e) && (this.country = e, o.country(e), e = o.countryCallingCode()), this.countryCallingCode = e, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = r
                            }
                            var e, n, r;
                            return e = t, (n = [{
                                key: "isPossible",
                                value: function() {
                                    return st(this, {
                                        v2: !0
                                    }, this.metadata)
                                }
                            }, {
                                key: "isValid",
                                value: function() {
                                    return vt(this, {
                                        v2: !0
                                    }, this.metadata)
                                }
                            }, {
                                key: "isNonGeographic",
                                value: function() {
                                    return new A(this.metadata).isNonGeographicCallingCode(this.countryCallingCode)
                                }
                            }, {
                                key: "isEqual",
                                value: function(t) {
                                    return this.number === t.number && this.ext === t.ext
                                }
                            }, {
                                key: "getType",
                                value: function() {
                                    return it(this, {
                                        v2: !0
                                    }, this.metadata)
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    return gt(this, t, e ? function(t) {
                                        for (var i = 1; i < arguments.length; i++) {
                                            var source = null != arguments[i] ? arguments[i] : {},
                                                e = Object.keys(source);
                                            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(source).filter((function(t) {
                                                return Object.getOwnPropertyDescriptor(source, t).enumerable
                                            })))), e.forEach((function(e) {
                                                Nt(t, e, source[e])
                                            }))
                                        }
                                        return t
                                    }({}, e, {
                                        v2: !0
                                    }) : {
                                        v2: !0
                                    }, this.metadata)
                                }
                            }, {
                                key: "formatNational",
                                value: function(t) {
                                    return this.format("NATIONAL", t)
                                }
                            }, {
                                key: "formatInternational",
                                value: function(t) {
                                    return this.format("INTERNATIONAL", t)
                                }
                            }, {
                                key: "getURI",
                                value: function(t) {
                                    return this.format("RFC3966", t)
                                }
                            }]) && _t(e.prototype, n), r && _t(e, r), t
                        }(),
                        Pt = function(t) {
                            return /^[A-Z]{2}$/.test(t)
                        },
                        kt = new RegExp("[+＋0-9０-９٠-٩۰-۹]"),
                        Et = new RegExp("[^0-9０-９٠-٩۰-۹]+$");

                    function Tt(text, t, e) {
                        if (t = t || {}, e = new A(e), t.defaultCountry && !e.hasCountry(t.defaultCountry)) {
                            if (t.v2) throw new O("INVALID_COUNTRY");
                            throw new Error("Unknown country: ".concat(t.defaultCountry))
                        }
                        var n = function(text, t) {
                                if (text && 0 === text.indexOf("tel:")) return ht(text);
                                var e = function(text, t) {
                                    if (!text) return;
                                    if (text.length > 250) {
                                        if (t) throw new O("TOO_LONG");
                                        return
                                    }
                                    var e = text.search(kt);
                                    if (e < 0) return;
                                    return text.slice(e).replace(Et, "")
                                }(text, t);
                                if (!e || !Z(e)) return {};
                                var n = function(t) {
                                    var e = t.search(W);
                                    if (e < 0) return {};
                                    for (var n = t.slice(0, e), r = t.match(W), i = 1; i < r.length;) {
                                        if (null != r[i] && r[i].length > 0) return {
                                            number: n,
                                            ext: r[i]
                                        };
                                        i++
                                    }
                                }(e);
                                if (n.ext) return n;
                                return {
                                    number: e
                                }
                            }(text, t.v2),
                            r = n.number,
                            o = n.ext;
                        if (!r) {
                            if (t.v2) throw new O("NOT_A_NUMBER");
                            return {}
                        }
                        var d = function(t, e, n, r) {
                                var o, d = Rt(tt(t), e, n, r.metadata),
                                    c = d.countryCallingCode,
                                    l = d.number;
                                if (c) r.chooseCountryByCountryCallingCode(c);
                                else {
                                    if (!l || !e && !n) return {};
                                    r.selectNumberingPlan(e, n), e && (o = e), c = n || V(e, r.metadata)
                                }
                                if (!l) return {
                                    countryCallingCode: c
                                };
                                var f = Lt(tt(l), r),
                                    $ = f.nationalNumber,
                                    h = f.carrierCode,
                                    v = At(c, $, r);
                                v && (o = v, "001" === v || r.country(o));
                                return {
                                    country: o,
                                    countryCallingCode: c,
                                    nationalNumber: $,
                                    carrierCode: h
                                }
                            }(r, t.defaultCountry, t.defaultCallingCode, e),
                            c = d.country,
                            l = d.nationalNumber,
                            f = d.countryCallingCode,
                            $ = d.carrierCode;
                        if (!e.hasSelectedNumberingPlan()) {
                            if (t.v2) throw new O("INVALID_COUNTRY");
                            return {}
                        }
                        if (!l || l.length < 2) {
                            if (t.v2) throw new O("TOO_SHORT");
                            return {}
                        }
                        if (l.length > 17) {
                            if (t.v2) throw new O("TOO_LONG");
                            return {}
                        }
                        if (t.v2) {
                            var h = new Ot(f, l, e.metadata);
                            return c && (h.country = c), $ && (h.carrierCode = $), o && (h.ext = o), h
                        }
                        var v = !!(t.extended ? e.hasSelectedNumberingPlan() : c) && _(l, e.nationalNumberPattern());
                        return t.extended ? {
                            country: c,
                            countryCallingCode: f,
                            carrierCode: $,
                            valid: v,
                            possible: !!v || !(!0 !== t.extended || !e.possibleLengths() || !ut(l, 0, e)),
                            phone: l,
                            ext: o
                        } : v ? function(t, e, n) {
                            var r = {
                                country: t,
                                phone: e
                            };
                            n && (r.ext = n);
                            return r
                        }(c, l, o) : {}
                    }

                    function It(t, e) {
                        if (t && e.nationalPrefixForParsing()) {
                            var n = new RegExp("^(?:" + e.nationalPrefixForParsing() + ")"),
                                r = n.exec(t);
                            if (r) {
                                var o, d, c = r.length - 1;
                                if (e.nationalPrefixTransformRule() && c > 0 && r[c]) o = t.replace(n, e.nationalPrefixTransformRule()), c > 1 && r[c] && (d = r[1]);
                                else {
                                    var l = r[0];
                                    o = t.slice(l.length), c > 0 && (d = r[1])
                                }
                                if (!_(t, e.nationalNumberPattern()) || _(o, e.nationalNumberPattern())) return {
                                    nationalNumber: o,
                                    carrierCode: d
                                }
                            }
                        }
                        return {
                            nationalNumber: t
                        }
                    }

                    function At(t, e, n) {
                        var r = n.getCountryCodesForCallingCode(t);
                        if (r) return 1 === r.length ? r[0] : function(t, e, n) {
                            n = new A(n);
                            var r = t,
                                o = Array.isArray(r),
                                d = 0;
                            for (r = o ? r : r[Symbol.iterator]();;) {
                                var c;
                                if (o) {
                                    if (d >= r.length) break;
                                    c = r[d++]
                                } else {
                                    if ((d = r.next()).done) break;
                                    c = d.value
                                }
                                var l = c;
                                if (n.country(l), n.leadingDigits()) {
                                    if (e && 0 === e.search(n.leadingDigits())) return l
                                } else if (it({
                                        phone: e,
                                        country: l
                                    }, void 0, n.metadata)) return l
                            }
                        }(r, e, n.metadata)
                    }

                    function Lt(t, e) {
                        var n = It(tt(t), e),
                            r = n.nationalNumber,
                            o = n.carrierCode;
                        if (r.length !== t.length + (o ? o.length : 0) && e.possibleLengths()) switch (at(r, void 0, e)) {
                            case "TOO_SHORT":
                            case "INVALID_LENGTH":
                                return {
                                    nationalNumber: t
                                }
                        }
                        return {
                            nationalNumber: r,
                            carrierCode: o
                        }
                    }

                    function Rt(t, e, n, r) {
                        if (!t) return {};
                        if ("+" !== t[0]) {
                            var o = ft(t, e, n, r);
                            if (!o || o === t) {
                                if (e || n) {
                                    var d = Ft(t, e, n, r),
                                        c = d.countryCallingCode,
                                        l = d.number;
                                    if (c) return {
                                        countryCallingCode: c,
                                        number: l
                                    }
                                }
                                return {
                                    number: t
                                }
                            }
                            t = "+" + o
                        }
                        if ("0" === t[1]) return {};
                        r = new A(r);
                        for (var i = 2; i - 1 <= 3 && i <= t.length;) {
                            var f = t.slice(1, i);
                            if (r.hasCallingCode(f)) return r.selectNumberingPlan(void 0, f), {
                                countryCallingCode: f,
                                number: t.slice(i)
                            };
                            i++
                        }
                        return {}
                    }

                    function Ft(t, e, n, r) {
                        var o = e ? V(e, r) : n;
                        if (0 === t.indexOf(o)) {
                            (r = new A(r)).selectNumberingPlan(e, n);
                            var d = t.slice(o.length),
                                c = It(d, r).nationalNumber,
                                l = It(t, r).nationalNumber;
                            if (!_(l, r.nationalNumberPattern()) && _(c, r.nationalNumberPattern()) || "TOO_LONG" === at(l, void 0, r)) return {
                                countryCallingCode: o,
                                number: d
                            }
                        }
                        return {
                            number: t
                        }
                    }

                    function Mt(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function Dt(text, t, e) {
                        return Tt(text, function(t) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {},
                                    e = Object.keys(source);
                                "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(source).filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(source, t).enumerable
                                })))), e.forEach((function(e) {
                                    Mt(t, e, source[e])
                                }))
                            }
                            return t
                        }({}, t, {
                            v2: !0
                        }), e)
                    }

                    function jt(t) {
                        return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function Bt(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function Vt(t, i) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, i) {
                            var e = [],
                                n = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var d, c = t[Symbol.iterator](); !(n = (d = c.next()).done) && (e.push(d.value), !i || e.length !== i); n = !0);
                            } catch (t) {
                                r = !0, o = t
                            } finally {
                                try {
                                    n || null == c.return || c.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            return e
                        }(t, i) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }()
                    }

                    function zt(t) {
                        var text, e, n, r = Vt(Array.prototype.slice.call(t), 4),
                            o = r[0],
                            d = r[1],
                            c = r[2],
                            l = r[3];
                        if ("string" != typeof o) throw new TypeError("A text for parsing must be a string.");
                        if (text = o, d && "string" != typeof d) {
                            if (!Gt(d)) throw new Error("Invalid second argument: ".concat(d));
                            c ? (e = d, n = c) : n = d
                        } else l ? (e = c, n = l) : (e = void 0, n = c), d && (e = function(t) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {},
                                    e = Object.keys(source);
                                "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(source).filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(source, t).enumerable
                                })))), e.forEach((function(e) {
                                    Bt(t, e, source[e])
                                }))
                            }
                            return t
                        }({
                            defaultCountry: d
                        }, e));
                        return {
                            text: text,
                            options: e,
                            metadata: n
                        }
                    }
                    var Gt = function(t) {
                        return "object" === jt(t)
                    };

                    function Ut(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function Ht(text, t, e) {
                        t && t.defaultCountry && !z(t.defaultCountry, e) && (t = function(t) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {},
                                    e = Object.keys(source);
                                "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(source).filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(source, t).enumerable
                                })))), e.forEach((function(e) {
                                    Ut(t, e, source[e])
                                }))
                            }
                            return t
                        }({}, t, {
                            defaultCountry: void 0
                        }));
                        try {
                            return Dt(text, t, e)
                        } catch (t) {
                            if (!(t instanceof O)) throw t
                        }
                    }

                    function Kt() {
                        var t = zt(arguments),
                            text = t.text,
                            e = t.options,
                            n = t.metadata;
                        return Ht(text, e, n)
                    }

                    function Wt(t, e, n) {
                        if (e[t]) return new Ot(t, e[t], n)
                    }

                    function qt(t, e) {
                        if (t < 0 || e <= 0 || e < t) throw new TypeError;
                        return "{".concat(t, ",").concat(e, "}")
                    }

                    function Yt(t, e) {
                        var n = e.search(t);
                        return n >= 0 ? e.slice(0, n) : e
                    }
                    var Zt = /[\\/] *x/;

                    function Jt(t) {
                        return Yt(Zt, t)
                    }
                    var Xt = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/,
                        Qt = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/,
                        te = /^:[0-5]\d/;

                    function ee(t, e, text) {
                        if (Xt.test(t)) return !1;
                        if (Qt.test(t)) {
                            var n = text.slice(e + t.length);
                            if (te.test(n)) return !1
                        }
                        return !0
                    }
                    var ne = "   ᠎ - \u2028\u2029  　",
                        re = "[".concat(ne, "]"),
                        ie = "[^".concat(ne, "]"),
                        oe = "[".concat("0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９", "]"),
                        ae = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                        de = "[".concat(ae, "]"),
                        se = new RegExp(de),
                        ue = "[".concat("$¢-¥֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦", "]"),
                        ce = new RegExp(ue),
                        le = "[".concat("̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦", "]"),
                        fe = new RegExp(le),
                        $e = new RegExp("[\0--ÿĀ-ſḀ-ỿƀ-ɏ̀-ͯ]");

                    function he(t) {
                        return !(!se.test(t) && !fe.test(t)) && $e.test(t)
                    }

                    function pe(t) {
                        return "%" === t || ce.test(t)
                    }
                    var ve = "[^".concat("(\\[（［").concat(")\\]）］", "]"),
                        ye = "[".concat("(\\[（［").concat("+＋", "]"),
                        me = new RegExp("^" + ye),
                        ge = qt(0, 3),
                        be = new RegExp("^(?:[(\\[（［])?(?:" + ve + "+[)\\]）］])?" + ve + "+(?:[(\\[（［]" + ve + "+[)\\]）］])" + ge + ve + "*$"),
                        Ce = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;

                    function Se(t, e, text, n) {
                        if (be.test(t) && !Ce.test(t)) {
                            if ("POSSIBLE" !== n) {
                                if (e > 0 && !me.test(t)) {
                                    var r = text[e - 1];
                                    if (pe(r) || he(r)) return !1
                                }
                                var o = e + t.length;
                                if (o < text.length) {
                                    var d = text[o];
                                    if (pe(d) || he(d)) return !1
                                }
                            }
                            return !0
                        }
                    }

                    function xe(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    function we(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }
                    var Ne = "[+＋]{0,1}(?:[" + N + "]*[0-9０-９٠-٩۰-۹]){3,}[" + N + "0-9０-９٠-٩۰-۹]*",
                        _e = new RegExp("^[  ­​⁠　]+"),
                        Oe = new RegExp("[" + N + "]+$");
                    var Pe = function() {
                        function t(text, e, n) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), we(this, "state", "NOT_READY"), this.text = text, this.options = e || {}, this.metadata = n, this.regexp = new RegExp(Ne + "(?:" + H + ")?", "ig")
                        }
                        var e, n, r;
                        return e = t, (n = [{
                            key: "find",
                            value: function() {
                                var t = this.regexp.exec(this.text);
                                if (t) {
                                    var e = t[0],
                                        n = t.index;
                                    e = e.replace(_e, ""), n += t[0].length - e.length, e = Jt(e = e.replace(Oe, ""));
                                    var r = this.parseCandidate(e, n);
                                    return r || this.find()
                                }
                            }
                        }, {
                            key: "parseCandidate",
                            value: function(t, e) {
                                if (ee(t, e, this.text) && Se(t, e, this.text, this.options.extended ? "POSSIBLE" : "VALID")) {
                                    var n = Tt(t, this.options, this.metadata);
                                    if (n.phone) return n.startsAt = e, n.endsAt = e + t.length, n
                                }
                            }
                        }, {
                            key: "hasNext",
                            value: function() {
                                return "NOT_READY" === this.state && (this.last_match = this.find(), this.last_match ? this.state = "READY" : this.state = "DONE"), "READY" === this.state
                            }
                        }, {
                            key: "next",
                            value: function() {
                                if (!this.hasNext()) throw new Error("No next element");
                                var t = this.last_match;
                                return this.last_match = null, this.state = "NOT_READY", t
                            }
                        }]) && xe(e.prototype, n), r && xe(e, r), t
                    }();

                    function ke(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    function Ee(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var Te = function t(e, n) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                            Ee(this, t), this.key = e, this.value = n, this.next = r, this.prev = o
                        },
                        Ie = function() {
                            function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                                Ee(this, t), this.size = 0, this.limit = e, this.head = null, this.tail = null, this.cache = {}
                            }
                            var e, n, r;
                            return e = t, (n = [{
                                key: "put",
                                value: function(t, e) {
                                    if (this.ensureLimit(), this.head) {
                                        var n = new Te(t, e, this.head);
                                        this.head.prev = n, this.head = n
                                    } else this.head = this.tail = new Te(t, e);
                                    this.cache[t] = this.head, this.size++
                                }
                            }, {
                                key: "get",
                                value: function(t) {
                                    if (this.cache[t]) {
                                        var e = this.cache[t].value;
                                        return this.remove(t), this.put(t, e), e
                                    }
                                    console.log("Item not available in cache for key ".concat(t))
                                }
                            }, {
                                key: "ensureLimit",
                                value: function() {
                                    this.size === this.limit && this.remove(this.tail.key)
                                }
                            }, {
                                key: "remove",
                                value: function(t) {
                                    var e = this.cache[t];
                                    null !== e.prev ? e.prev.next = e.next : this.head = e.next, null !== e.next ? e.next.prev = e.prev : this.tail = e.prev, delete this.cache[t], this.size--
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    this.head = null, this.tail = null, this.size = 0, this.cache = {}
                                }
                            }]) && ke(e.prototype, n), r && ke(e, r), t
                        }();

                    function Ae(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    var Le = function() {
                            function t(e) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), this.cache = new Ie(e)
                            }
                            var e, n, r;
                            return e = t, (n = [{
                                key: "getPatternForRegExp",
                                value: function(pattern) {
                                    var t = this.cache.get(pattern);
                                    return t || (t = new RegExp("^" + pattern), this.cache.put(pattern, t)), t
                                }
                            }]) && Ae(e.prototype, n), r && Ae(e, r), t
                        }(),
                        Re = {
                            POSSIBLE: function(t, e, n) {
                                return !0
                            },
                            VALID: function(t, e, n) {
                                return !(!vt(t, void 0, n) || !Fe(t, e.toString(), n))
                            },
                            STRICT_GROUPING: function(t, e, n, r) {
                                var o = e.toString();
                                return !(!vt(t, void 0, n) || !Fe(t, o, n) || De(t, o) || !Me(t, n)) && je(t, e, n, ze, r)
                            },
                            EXACT_GROUPING: function(t, e, n, r) {
                                var o = e.toString();
                                return !(!vt(t, void 0, n) || !Fe(t, o, n) || De(t, o) || !Me(t, n)) && je(t, e, n, Ve, r)
                            }
                        };

                    function Fe(t, e, n) {
                        for (var r = 0; r < e.length - 1; r++) {
                            var o = e.charAt(r);
                            if ("x" === o || "X" === o) {
                                var d = e.charAt(r + 1);
                                if ("x" === d || "X" === d) {
                                    if (r++, util.isNumberMatch(t, e.substring(r)) != MatchType.NSN_MATCH) return !1
                                } else if (Q(e.substring(r)) !== t.ext) return !1
                            }
                        }
                        return !0
                    }

                    function Me(t, e) {
                        if ("FROM_DEFAULT_COUNTRY" != t.getCountryCodeSource()) return !0;
                        var n = util.getRegionCodeForCountryCode(t.getCountryCode()),
                            r = util.getMetadataForRegion(n);
                        if (null == r) return !0;
                        var o = util.getNationalSignificantNumber(t),
                            d = util.chooseFormattingPatternForNumber(r.numberFormats(), o);
                        if (d && d.getNationalPrefixFormattingRule().length > 0) {
                            if (d.getNationalPrefixOptionalWhenFormatting()) return !0;
                            if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly(d.getNationalPrefixFormattingRule())) return !0;
                            var c = PhoneNumberUtil.normalizeDigitsOnly(t.getRawInput());
                            return util.maybeStripNationalPrefixAndCarrierCode(c, r, null)
                        }
                        return !0
                    }

                    function De(t, e) {
                        var n = e.indexOf("/");
                        if (n < 0) return !1;
                        var r = e.indexOf("/", n + 1);
                        return !(r < 0) && (!(t.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || t.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN) || PhoneNumberUtil.normalizeDigitsOnly(e.substring(0, n)) !== String(t.getCountryCode()) || e.slice(r + 1).indexOf("/") >= 0)
                    }

                    function je(t, e, n, r, o) {
                        var d = normalizeDigits(e, !0),
                            c = Be(n, t, null);
                        if (r(n, t, d, c)) return !0;
                        var l = MetadataManager.getAlternateFormatsForCountry(t.getCountryCode()),
                            f = util.getNationalSignificantNumber(t);
                        if (l) {
                            var $ = l.numberFormats(),
                                h = Array.isArray($),
                                v = 0;
                            for ($ = h ? $ : $[Symbol.iterator]();;) {
                                var y;
                                if (h) {
                                    if (v >= $.length) break;
                                    y = $[v++]
                                } else {
                                    if ((v = $.next()).done) break;
                                    y = v.value
                                }
                                var m = y;
                                if (m.leadingDigitsPatterns().length > 0)
                                    if (!o.getPatternForRegExp("^" + m.leadingDigitsPatterns()[0]).test(f)) continue;
                                if (r(n, t, d, c = Be(n, t, m))) return !0
                            }
                        }
                        return !1
                    }

                    function Be(t, e, n) {
                        if (n) {
                            var r = util.getNationalSignificantNumber(e);
                            return util.formatNsnUsingPattern(r, n, "RFC3966", t).split("-")
                        }
                        var o = formatNumber(e, "RFC3966", t),
                            d = o.indexOf(";");
                        d < 0 && (d = o.length);
                        var c = o.indexOf("-") + 1;
                        return o.slice(c, d).split("-")
                    }

                    function Ve(t, e, n, r) {
                        var o = n.split(NON_DIGITS_PATTERN),
                            d = e.hasExtension() ? o.length - 2 : o.length - 1;
                        if (1 == o.length || o[d].contains(util.getNationalSignificantNumber(e))) return !0;
                        for (var c, l, f = r.length - 1; f > 0 && d >= 0;) {
                            if (o[d] !== r[f]) return !1;
                            f--, d--
                        }
                        return d >= 0 && (c = o[d], l = r[0], c.indexOf(l, c.length - l.length) === c.length - l.length)
                    }

                    function ze(t, e, n, r) {
                        var o, d, c = 0;
                        if (e.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
                            var l = String(e.getCountryCode());
                            c = n.indexOf(l) + l.length()
                        }
                        for (var i = 0; i < r.length; i++) {
                            if ((c = n.indexOf(r[i], c)) < 0) return !1;
                            if (c += r[i].length(), 0 == i && c < n.length()) {
                                var f = util.getRegionCodeForCountryCode(e.getCountryCode());
                                if (null != util.getNddPrefixForRegion(f, !0) && Character.isDigit(n.charAt(c))) {
                                    var $ = util.getNationalSignificantNumber(e);
                                    return o = n.slice(c - r[i].length), d = $, 0 === o.indexOf(d)
                                }
                            }
                        }
                        return n.slice(c).contains(e.getExtension())
                    }

                    function Ge(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {},
                                e = Object.keys(source);
                            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(source).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(source, t).enumerable
                            })))), e.forEach((function(e) {
                                Ke(t, e, source[e])
                            }))
                        }
                        return t
                    }

                    function Ue(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function He(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    function Ke(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }
                    var We = ["\\/+(.*)/", "(\\([^(]*)", "(?:".concat(re, "-|-").concat(re, ")").concat(re, "*(.+)"), "[‒-―－]".concat(re, "*(.+)"), "\\.+".concat(re, "*([^.]+)"), "".concat(re, "+(").concat(ie, "+)")],
                        qe = qt(0, 2),
                        Ye = qt(0, 4),
                        Ze = qt(0, 20),
                        Je = "[".concat(N, "]") + Ye,
                        Xe = oe + qt(1, 20),
                        Qe = "(?:" + ye + Je + ")" + qe + Xe + "(?:" + Je + Xe + ")" + Ze + "(?:" + K + ")?",
                        tn = new RegExp("[^".concat("0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９").concat(ae, "#]+$")),
                        en = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
                        nn = function() {
                            function t() {
                                var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                if (Ue(this, t), Ke(this, "state", "NOT_READY"), Ke(this, "searchIndex", 0), Ke(this, "regExpCache", new Le(32)), !(e = Ge({}, e, {
                                        defaultCallingCode: e.defaultCallingCode,
                                        defaultCountry: e.defaultCountry && z(e.defaultCountry, n) ? e.defaultCountry : void 0,
                                        leniency: e.leniency || e.extended ? "POSSIBLE" : "VALID",
                                        maxTries: e.maxTries || en
                                    })).leniency) throw new TypeError("`Leniency` not supplied");
                                if (e.maxTries < 0) throw new TypeError("`maxTries` not supplied");
                                if (this.text = text, this.options = e, this.metadata = n, this.leniency = Re[e.leniency], !this.leniency) throw new TypeError("Unknown leniency: ".concat(e.leniency, "."));
                                this.maxTries = e.maxTries, this.PATTERN = new RegExp(Qe, "ig")
                            }
                            var e, n, r;
                            return e = t, (n = [{
                                key: "find",
                                value: function() {
                                    for (var t; this.maxTries > 0 && null !== (t = this.PATTERN.exec(this.text));) {
                                        var e = t[0],
                                            n = t.index;
                                        if (ee(e = Jt(e), n, this.text)) {
                                            var r = this.parseAndVerify(e, n, this.text) || this.extractInnerMatch(e, n, this.text);
                                            if (r) {
                                                if (this.options.v2) {
                                                    var o = new Ot(r.country || r.countryCallingCode, r.phone, this.metadata);
                                                    return r.ext && (o.ext = r.ext), {
                                                        startsAt: r.startsAt,
                                                        endsAt: r.endsAt,
                                                        number: o
                                                    }
                                                }
                                                return r
                                            }
                                        }
                                        this.maxTries--
                                    }
                                }
                            }, {
                                key: "extractInnerMatch",
                                value: function(t, e, text) {
                                    for (var n = 0, r = We; n < r.length; n++)
                                        for (var o = !0, d = void 0, c = new RegExp(r[n], "g"); null !== (d = c.exec(t)) && this.maxTries > 0;) {
                                            if (o) {
                                                var l = Yt(tn, t.slice(0, d.index)),
                                                    f = this.parseAndVerify(l, e, text);
                                                if (f) return f;
                                                this.maxTries--, o = !1
                                            }
                                            var $ = Yt(tn, d[1]),
                                                h = this.parseAndVerify($, e + d.index, text);
                                            if (h) return h;
                                            this.maxTries--
                                        }
                                }
                            }, {
                                key: "parseAndVerify",
                                value: function(t, e, text) {
                                    if (Se(t, e, text, this.options.leniency)) {
                                        var n = Tt(t, {
                                            extended: !0,
                                            defaultCountry: this.options.defaultCountry,
                                            defaultCallingCode: this.options.defaultCallingCode
                                        }, this.metadata);
                                        if (n.possible && this.leniency(n, t, this.metadata, this.regExpCache)) {
                                            var r = {
                                                startsAt: e,
                                                endsAt: e + t.length,
                                                phone: n.phone
                                            };
                                            return n.country && "001" !== n.country ? r.country = n.country : r.countryCallingCode = n.countryCallingCode, n.ext && (r.ext = n.ext), r
                                        }
                                    }
                                }
                            }, {
                                key: "hasNext",
                                value: function() {
                                    return "NOT_READY" === this.state && (this.lastMatch = this.find(), this.lastMatch ? this.state = "READY" : this.state = "DONE"), "READY" === this.state
                                }
                            }, {
                                key: "next",
                                value: function() {
                                    if (!this.hasNext()) throw new Error("No next element");
                                    var t = this.lastMatch;
                                    return this.lastMatch = null, this.state = "NOT_READY", t
                                }
                            }]) && He(e.prototype, n), r && He(e, r), t
                        }();

                    function rn(t) {
                        return (rn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function on(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    var an = yn("9", 15),
                        dn = new RegExp("x"),
                        sn = /[- ]/,
                        un = function() {
                            return /\[([^\[\]])*\]/g
                        },
                        cn = function() {
                            return /\d(?=[^,}][^,}])/g
                        },
                        ln = new RegExp("^[" + N + "]*(\\$\\d[" + N + "]*)+$"),
                        fn = new RegExp("^" + ("[" + N + "0-9０-９٠-٩۰-۹]+") + "$", "i"),
                        $n = "(?:[+＋][" + N + "0-9０-９٠-٩۰-۹]*|[" + N + "0-9０-９٠-٩۰-۹]+)",
                        hn = new RegExp("[^" + N + "0-9０-９٠-٩۰-۹]+.*$"),
                        pn = function() {
                            function t(e, n) {
                                var r, o, d, c, l;
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), d = {}, (o = "options") in (r = this) ? Object.defineProperty(r, o, {
                                    value: d,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[o] = d, this.metadata = new A(n), e && ("object" === rn(e) ? (c = e.defaultCountry, l = e.defaultCallingCode) : c = e), c && this.metadata.hasCountry(c) && (this.defaultCountry = c), l && (this.defaultCallingCode = l), this.reset()
                            }
                            var e, n, r;
                            return e = t, (n = [{
                                key: "reset",
                                value: function() {
                                    return this.formattedOutput = "", this.international = !1, this.internationalPrefix = void 0, this.countryCallingCode = void 0, this.digits = "", this.nationalNumberDigits = "", this.nationalPrefix = "", this.carrierCode = "", this.setCountry(this.defaultCountry, this.defaultCallingCode), this
                                }
                            }, {
                                key: "resetFormat",
                                value: function() {
                                    this.chosenFormat = void 0, this.template = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1
                                }
                            }, {
                                key: "isInternational",
                                value: function() {
                                    return this.international
                                }
                            }, {
                                key: "getCountryCallingCode",
                                value: function() {
                                    return this.countryCallingCode
                                }
                            }, {
                                key: "getCountry",
                                value: function() {
                                    if (this.digits) {
                                        var t = this.country;
                                        return t
                                    }
                                }
                            }, {
                                key: "setCountry",
                                value: function(t, e) {
                                    this.country = t, this.metadata.selectNumberingPlan(t, e), this.metadata.hasSelectedNumberingPlan() ? this.initializePhoneNumberFormatsForCountry() : this.matchingFormats = [], this.resetFormat()
                                }
                            }, {
                                key: "input",
                                value: function(text) {
                                    var t = this.extractFormattedDigits(text);
                                    return fn.test(t) && (this.formattedOutput = this.getFullNumber(this.inputDigits(Q(t)) || this.getNonFormattedNationalNumber())), this.formattedOutput
                                }
                            }, {
                                key: "extractFormattedDigits",
                                value: function(text) {
                                    var t = function(text) {
                                        var t, e = text.search($n);
                                        if (!(e < 0)) return "+" === (text = text.slice(e))[0] && (t = !0, text = text.slice("+".length)), text = text.replace(hn, ""), t && (text = "+" + text), text
                                    }(text) || "";
                                    return "+" === t[0] && (t = t.slice("+".length), this.digits || (this.formattedOutput = "+", this.startInternationalNumber())), t
                                }
                            }, {
                                key: "startInternationalNumber",
                                value: function() {
                                    this.international = !0, this.setCountry()
                                }
                            }, {
                                key: "inputDigits",
                                value: function(t) {
                                    if (!this.digits) {
                                        var e = ft(t, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
                                        e && e !== t && (this.internationalPrefix = t.slice(0, t.length - e.length), t = e, this.startInternationalNumber())
                                    }
                                    if (this.digits += t, this.isInternational())
                                        if (this.countryCallingCode) this.nationalNumberDigits += t, this.country && !this.isCountryCallingCodeAmbiguous() || this.determineTheCountry();
                                        else {
                                            if (!this.extractCountryCallingCode()) return;
                                            this.nationalNumberDigits = this.digits.slice(this.countryCallingCode.length), this.determineTheCountry()
                                        }
                                    else {
                                        this.nationalNumberDigits += t, this.country || this.determineTheCountry();
                                        var n = this.nationalPrefix;
                                        this.nationalNumberDigits = this.nationalPrefix + this.nationalNumberDigits, this.extractNationalPrefix(), this.nationalPrefix !== n && (this.initializePhoneNumberFormatsForCountry(), this.resetFormat())
                                    }
                                    return this.nationalNumberDigits && this.matchFormats(this.nationalNumberDigits), this.formatNationalNumberWithNextDigits(t)
                                }
                            }, {
                                key: "formatNationalNumberWithNextDigits",
                                value: function(t) {
                                    var e = this.attemptToFormatCompletePhoneNumber();
                                    if (e) return e;
                                    var n = this.chosenFormat,
                                        r = this.chooseFormat();
                                    return r ? r === n ? this.formatNextNationalNumberDigits(t) : this.reformatNationalNumber() : void 0
                                }
                            }, {
                                key: "chooseFormat",
                                value: function() {
                                    var t = this.matchingFormats,
                                        e = Array.isArray(t),
                                        n = 0;
                                    for (t = e ? t : t[Symbol.iterator]();;) {
                                        var r;
                                        if (e) {
                                            if (n >= t.length) break;
                                            r = t[n++]
                                        } else {
                                            if ((n = t.next()).done) break;
                                            r = n.value
                                        }
                                        var o = r;
                                        if (this.chosenFormat === o) break;
                                        if (this.createFormattingTemplate(o)) {
                                            this.chosenFormat = o, this.populatedNationalNumberTemplatePosition = -1;
                                            break
                                        }
                                    }
                                    return this.chosenFormat || this.resetFormat(), this.chosenFormat
                                }
                            }, {
                                key: "reformatNationalNumber",
                                value: function() {
                                    return this.formatNextNationalNumberDigits(this.nationalPrefix + this.nationalNumberDigits)
                                }
                            }, {
                                key: "initializePhoneNumberFormatsForCountry",
                                value: function() {
                                    this.matchingFormats = this.metadata.formats().filter((function(t) {
                                        return ln.test(t.internationalFormat())
                                    }))
                                }
                            }, {
                                key: "matchFormats",
                                value: function(t) {
                                    var e = this,
                                        n = t.length - 3;
                                    n < 0 && (n = 0), this.matchingFormats = this.matchingFormats.filter((function(r) {
                                        if (!e.isInternational() && !e.nationalPrefix && r.nationalPrefixIsMandatoryWhenFormattingInNationalFormat()) return !1;
                                        var o = r.leadingDigitsPatterns().length;
                                        if (0 === o) return !0;
                                        if (t.length < 3) return !0;
                                        n = Math.min(n, o - 1);
                                        var d = r.leadingDigitsPatterns()[n];
                                        return new RegExp("^(".concat(d, ")")).test(t)
                                    })), this.chosenFormat && -1 === this.matchingFormats.indexOf(this.chosenFormat) && this.resetFormat()
                                }
                            }, {
                                key: "getSeparatorAfterNationalPrefix",
                                value: function(t) {
                                    return "1" === this.metadata.countryCallingCode() || t && t.nationalPrefixFormattingRule() && sn.test(t.nationalPrefixFormattingRule()) ? " " : ""
                                }
                            }, {
                                key: "attemptToFormatCompletePhoneNumber",
                                value: function() {
                                    var t = this.matchingFormats,
                                        e = Array.isArray(t),
                                        n = 0;
                                    for (t = e ? t : t[Symbol.iterator]();;) {
                                        var r;
                                        if (e) {
                                            if (n >= t.length) break;
                                            r = t[n++]
                                        } else {
                                            if ((n = t.next()).done) break;
                                            r = n.value
                                        }
                                        var o = r;
                                        if (new RegExp("^(?:".concat(o.pattern(), ")$")).test(this.nationalNumberDigits)) {
                                            var d = Ct(this.nationalNumberDigits, o, this.isInternational(), !1, this.metadata);
                                            if (Q(d) === this.nationalNumberDigits) {
                                                if (this.nationalPrefix) {
                                                    var c = Ct(this.nationalNumberDigits, o, this.isInternational(), !0, this.metadata);
                                                    d = Q(c) === this.nationalPrefix + this.nationalNumberDigits ? c : this.nationalPrefix + this.getSeparatorAfterNationalPrefix(o) + d
                                                }
                                                return this.resetFormat(), this.chosenFormat = o, this.createFormattingTemplate(o) ? this.reformatNationalNumber() : (this.template = this.getFullNumber(d).replace(/[\d\+]/g, "x"), this.populatedNationalNumberTemplate = d, this.populatedNationalNumberTemplatePosition = this.populatedNationalNumberTemplate.length - 1), d
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "getInternationalPrefix",
                                value: function(t) {
                                    return this.internationalPrefix ? t && !1 === t.spacing ? this.internationalPrefix : this.internationalPrefix + " " : "+"
                                }
                            }, {
                                key: "getFullNumber",
                                value: function(t) {
                                    if (this.isInternational()) {
                                        var e = this.getInternationalPrefix();
                                        return this.countryCallingCode ? t ? "".concat(e).concat(this.countryCallingCode, " ").concat(t) : "".concat(e).concat(this.countryCallingCode) : "".concat(e).concat(this.digits)
                                    }
                                    return t
                                }
                            }, {
                                key: "getNonFormattedNationalNumber",
                                value: function() {
                                    return this.nationalPrefix + (this.nationalPrefix && this.nationalNumberDigits && this.getSeparatorAfterNationalPrefix()) + this.nationalNumberDigits
                                }
                            }, {
                                key: "extractCountryCallingCode",
                                value: function() {
                                    var t = Rt("+" + this.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                        e = t.countryCallingCode,
                                        n = t.number;
                                    if (e) return this.nationalNumberDigits = n, this.countryCallingCode = e, this.metadata.chooseCountryByCountryCallingCode(e), this.initializePhoneNumberFormatsForCountry(), this.resetFormat(), this.metadata.hasSelectedNumberingPlan()
                                }
                            }, {
                                key: "extractNationalPrefix",
                                value: function() {
                                    if (this.nationalPrefix = "", this.metadata.hasSelectedNumberingPlan()) {
                                        var t = It(this.nationalNumberDigits, this.metadata),
                                            e = t.nationalNumber,
                                            n = t.carrierCode;
                                        if (e) {
                                            var r = this.nationalNumberDigits.indexOf(e);
                                            if (r < 0 || r !== this.nationalNumberDigits.length - e.length) return
                                        }
                                        return n && (this.carrierCode = n), this.nationalPrefix = this.nationalNumberDigits.slice(0, this.nationalNumberDigits.length - e.length), this.nationalNumberDigits = e, this.nationalPrefix
                                    }
                                }
                            }, {
                                key: "isCountryCallingCodeAmbiguous",
                                value: function() {
                                    var t = this.metadata.getCountryCodesForCallingCode(this.countryCallingCode);
                                    return t && t.length > 1
                                }
                            }, {
                                key: "createFormattingTemplate",
                                value: function(t) {
                                    if (!(t.pattern().indexOf("|") >= 0)) {
                                        var template = this.getTemplateForNumberFormatPattern(t, this.nationalPrefix);
                                        if (template) return this.template = template, this.populatedNationalNumberTemplate = template, this.isInternational() && (this.template = this.getInternationalPrefix().replace(/[\d\+]/g, "x") + yn("x", this.countryCallingCode.length) + " " + template), this.template
                                    }
                                }
                            }, {
                                key: "getTemplateForNumberFormatPattern",
                                value: function(t, e) {
                                    var pattern = t.pattern();
                                    pattern = pattern.replace(un(), "\\d").replace(cn(), "\\d");
                                    var n = an.match(pattern)[0];
                                    if (!(this.nationalNumberDigits.length > n.length)) {
                                        var r = new RegExp("^" + pattern + "$"),
                                            o = this.nationalNumberDigits.replace(/\d/g, "9");
                                        r.test(o) && (n = o);
                                        var d, c = this.getFormatFormat(t);
                                        if (e && t.nationalPrefixFormattingRule()) {
                                            var l = c.replace(bt, t.nationalPrefixFormattingRule());
                                            if (Q(l) === e + Q(c)) {
                                                c = l, d = !0;
                                                for (var i = e.length; i > 0;) c = c.replace(/\d/, "x"), i--
                                            }
                                        }
                                        var template = n.replace(new RegExp(pattern), c).replace(new RegExp("9", "g"), "x");
                                        return e && (d || (template = yn("x", e.length) + this.getSeparatorAfterNationalPrefix(t) + template)), template
                                    }
                                }
                            }, {
                                key: "formatNextNationalNumberDigits",
                                value: function(t) {
                                    var e = t.split(""),
                                        n = Array.isArray(e),
                                        r = 0;
                                    for (e = n ? e : e[Symbol.iterator]();;) {
                                        var o;
                                        if (n) {
                                            if (r >= e.length) break;
                                            o = e[r++]
                                        } else {
                                            if ((r = e.next()).done) break;
                                            o = r.value
                                        }
                                        var d = o;
                                        if (this.populatedNationalNumberTemplate.slice(this.populatedNationalNumberTemplatePosition + 1).search(dn) < 0) return void this.resetFormat();
                                        this.populatedNationalNumberTemplatePosition = this.populatedNationalNumberTemplate.search(dn), this.populatedNationalNumberTemplate = this.populatedNationalNumberTemplate.replace(dn, d)
                                    }
                                    return vn(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)
                                }
                            }, {
                                key: "getFormatFormat",
                                value: function(t) {
                                    return this.isInternational() ? xt(t.internationalFormat()) : t.format()
                                }
                            }, {
                                key: "determineTheCountry",
                                value: function() {
                                    this.country = At(this.isInternational() ? this.countryCallingCode : this.defaultCallingCode, this.nationalNumberDigits, this.metadata)
                                }
                            }, {
                                key: "getNumber",
                                value: function() {
                                    if (this.isInternational()) {
                                        if (!this.countryCallingCode) return
                                    } else if (!this.country && !this.defaultCallingCode) return;
                                    if (this.nationalNumberDigits) {
                                        var t = this.getCountry(),
                                            e = this.getCountryCallingCode() || this.defaultCallingCode,
                                            n = this.nationalNumberDigits,
                                            r = this.carrierCode;
                                        if (!this.isInternational() && this.nationalNumberDigits === this.digits) {
                                            var o = Ft(this.digits, t, e, this.metadata.metadata),
                                                d = o.countryCallingCode,
                                                c = o.number;
                                            if (d) {
                                                var l = Lt(c, this.metadata);
                                                n = l.nationalNumber, r = l.carrierCode
                                            }
                                        }
                                        var f = new Ot(t || e, n, this.metadata.metadata);
                                        return r && (f.carrierCode = r), f
                                    }
                                }
                            }, {
                                key: "isPossible",
                                value: function() {
                                    var t = this.getNumber();
                                    return !!t && t.isPossible()
                                }
                            }, {
                                key: "isValid",
                                value: function() {
                                    var t = this.getNumber();
                                    return !!t && t.isValid()
                                }
                            }, {
                                key: "getNationalNumber",
                                value: function() {
                                    return this.nationalNumberDigits
                                }
                            }, {
                                key: "getNonFormattedTemplate",
                                value: function() {
                                    return this.getFullNumber(this.getNonFormattedNationalNumber()).replace(/[\+\d]/g, "x")
                                }
                            }, {
                                key: "getTemplate",
                                value: function() {
                                    if (!this.template) return this.getNonFormattedTemplate();
                                    for (var t = -1, i = 0; i < (this.isInternational() ? this.getInternationalPrefix({
                                            spacing: !1
                                        }).length : 0) + this.digits.length;) t = this.template.indexOf("x", t + 1), i++;
                                    return vn(this.template, t + 1)
                                }
                            }]) && on(e.prototype, n), r && on(e, r), t
                        }();

                    function vn(t, e) {
                        return ")" === t[e] && e++,
                            function(t) {
                                for (var e = [], i = 0; i < t.length;) "(" === t[i] ? e.push(i) : ")" === t[i] && e.pop(), i++;
                                var n = 0,
                                    r = "";
                                e.push(t.length);
                                for (var o = 0, d = e; o < d.length; o++) {
                                    var c = d[o];
                                    r += t.slice(n, c), n = c + 1
                                }
                                return r
                            }(t.slice(0, e))
                    }

                    function yn(t, e) {
                        if (e < 1) return "";
                        for (var n = ""; e > 1;) 1 & e && (n += t), e >>= 1, t += t;
                        return n + t
                    }

                    function mn() {
                        var t = Array.prototype.slice.call(arguments);
                        return t.push(w), Kt.apply(this, t)
                    }

                    function gn(text, t) {
                        Pe.call(this, text, t, w)
                    }

                    function bn(text, t) {
                        nn.call(this, text, t, w)
                    }

                    function Cn(t) {
                        pn.call(this, t, w)
                    }

                    function Sn(t) {
                        return V(t, w)
                    }
                    gn.prototype = Object.create(Pe.prototype, {}), gn.prototype.constructor = gn, bn.prototype = Object.create(nn.prototype, {}), bn.prototype.constructor = bn, Cn.prototype = Object.create(pn.prototype, {}), Cn.prototype.constructor = Cn;
                    var xn = {
                            props: {
                                theme: {
                                    type: Object,
                                    required: !0
                                }
                            },
                            computed: {
                                labelColorStyle: function() {
                                    return this.error ? this.theme.errorColor : this.valid ? this.theme.validColor : this.isFocus ? this.theme.color : this.dark ? this.theme.textDarkColor : null
                                },
                                inputBorderStyle: function() {
                                    return this.error ? this.theme.borderErrorColor : this.valid ? this.theme.borderValidColor : this.isHover || this.isFocus ? this.theme.borderColor : null
                                },
                                inputBoxShadowStyle: function() {
                                    return this.isFocus ? this.error ? this.theme.boxShadowError : this.valid ? this.theme.boxShadowValid : this.theme.boxShadowColor : null
                                },
                                inputBgColor: function() {
                                    return this.dark ? this.theme.bgDarkColor : null
                                },
                                textColor: function() {
                                    return this.dark ? this.theme.textDarkColor : null
                                },
                                inputCaretStyle: function() {
                                    return {
                                        caretColor: this.theme.colorValue
                                    }
                                },
                                radiusStyle: function() {
                                    return this.theme.borderRadius
                                },
                                radiusLeftStyle: function() {
                                    return this.theme.borderLeftRadius
                                },
                                radiusRightStyle: function() {
                                    return this.theme.borderRightRadius
                                },
                                bgItemSelectedStyle: function() {
                                    return this.theme.bgColor
                                },
                                loaderBgColor: function() {
                                    return this.theme.bgColor
                                }
                            }
                        },
                        wn = {
                            name: "InputTel",
                            mixins: [xn],
                            props: {
                                value: {
                                    type: [String, Number],
                                    default: null
                                },
                                label: {
                                    type: String,
                                    default: "Enter text"
                                },
                                hint: {
                                    type: String,
                                    default: null
                                },
                                error: {
                                    type: Boolean,
                                    default: Boolean
                                },
                                disabled: {
                                    type: Boolean,
                                    default: !1
                                },
                                dark: {
                                    type: Boolean,
                                    default: !1
                                },
                                id: {
                                    type: String,
                                    default: "InputTel"
                                },
                                size: {
                                    type: String,
                                    default: null
                                },
                                type: {
                                    type: String,
                                    default: "tel"
                                },
                                readonly: {
                                    type: Boolean,
                                    default: !1
                                },
                                valid: {
                                    type: Boolean,
                                    default: !1
                                },
                                required: {
                                    type: Boolean,
                                    default: !1
                                },
                                loader: {
                                    type: Boolean,
                                    default: !1
                                },
                                clearable: {
                                    type: Boolean,
                                    default: !1
                                },
                                noCountrySelector: {
                                    type: Boolean,
                                    default: !1
                                }
                            },
                            data: function() {
                                return {
                                    isFocus: !1,
                                    isHover: !1
                                }
                            },
                            computed: {
                                inputValue: {
                                    get: function() {
                                        return this.value
                                    },
                                    set: function(t) {
                                        this.$emit("input", t)
                                    }
                                },
                                labelValue: function() {
                                    var label = this.label;
                                    return this.required && label ? "".concat(label, " *") : label
                                },
                                hintValue: function() {
                                    var t = this.hint;
                                    return this.required && t ? "".concat(t, " *") : t
                                }
                            },
                            methods: {
                                updateHoverState: function(t) {
                                    this.isHover = t
                                },
                                focusInput: function() {
                                    this.$refs.InputTel.focus()
                                },
                                onFocus: function() {
                                    this.$emit("focus"), this.isFocus = !0
                                },
                                onBlur: function() {
                                    this.$emit("blur"), this.isFocus = !1
                                },
                                clear: function() {
                                    this.$emit("input", null), this.$emit("clear")
                                },
                                keyUp: function(t) {
                                    this.$emit("keyup", t)
                                },
                                keyDown: function(t) {
                                    this.$emit("keydown", t)
                                }
                            }
                        };
                    n("b8ac");

                    function Nn(t, e, n, r, o, d, c, l) {
                        var f, $ = "function" == typeof t ? t.options : t;
                        if (e && ($.render = e, $.staticRenderFns = n, $._compiled = !0), r && ($.functional = !0), d && ($._scopeId = "data-v-" + d), c ? (f = function(t) {
                                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(c)
                            }, $._ssrRegister = f) : o && (f = l ? function() {
                                o.call(this, this.$root.$options.shadowRoot)
                            } : o), f)
                            if ($.functional) {
                                $._injectStyles = f;
                                var h = $.render;
                                $.render = function(t, e) {
                                    return f.call(e), h(t, e)
                                }
                            } else {
                                var v = $.beforeCreate;
                                $.beforeCreate = v ? [].concat(v, f) : [f]
                            }
                        return {
                            exports: t,
                            options: $
                        }
                    }
                    var _n = Nn(wn, (function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("div", {
                                ref: "parent",
                                staticClass: "input-tel",
                                class: [{
                                    "is-focused": t.isFocus,
                                    "is-valid": t.valid,
                                    "has-value": t.value,
                                    "has-error": t.error,
                                    "is-disabled": t.disabled,
                                    "is-dark": t.dark,
                                    "has-hint": t.hint
                                }, t.size],
                                on: {
                                    click: t.focusInput,
                                    mouseenter: function(e) {
                                        return t.updateHoverState(!0)
                                    },
                                    mouseleave: function(e) {
                                        return t.updateHoverState(!1)
                                    }
                                }
                            }, ["checkbox" === t.type ? n("input", t._b({
                                directives: [{
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.inputValue,
                                    expression: "inputValue"
                                }],
                                ref: "InputTel",
                                staticClass: "input-tel__input",
                                class: {
                                    "no-country-selector": t.noCountrySelector
                                },
                                style: [t.noCountrySelector ? t.radiusStyle : t.radiusRightStyle, t.inputCaretStyle, t.inputBorderStyle, t.inputBoxShadowStyle, t.inputBgColor, t.textColor],
                                attrs: {
                                    id: t.id,
                                    placeholder: t.labelValue,
                                    disabled: t.disabled,
                                    required: t.required,
                                    type: "checkbox"
                                },
                                domProps: {
                                    checked: Array.isArray(t.inputValue) ? t._i(t.inputValue, null) > -1 : t.inputValue
                                },
                                on: {
                                    keydown: t.keyDown,
                                    keyup: t.keyUp,
                                    focus: t.onFocus,
                                    blur: t.onBlur,
                                    click: function(e) {
                                        return t.$emit("click", e)
                                    },
                                    change: function(e) {
                                        var n = t.inputValue,
                                            r = e.target,
                                            o = !!r.checked;
                                        if (Array.isArray(n)) {
                                            var d = t._i(n, null);
                                            r.checked ? d < 0 && (t.inputValue = n.concat([null])) : d > -1 && (t.inputValue = n.slice(0, d).concat(n.slice(d + 1)))
                                        } else t.inputValue = o
                                    }
                                }
                            }, "input", t.$attrs, !1)) : "radio" === t.type ? n("input", t._b({
                                directives: [{
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.inputValue,
                                    expression: "inputValue"
                                }],
                                ref: "InputTel",
                                staticClass: "input-tel__input",
                                class: {
                                    "no-country-selector": t.noCountrySelector
                                },
                                style: [t.noCountrySelector ? t.radiusStyle : t.radiusRightStyle, t.inputCaretStyle, t.inputBorderStyle, t.inputBoxShadowStyle, t.inputBgColor, t.textColor],
                                attrs: {
                                    id: t.id,
                                    placeholder: t.labelValue,
                                    disabled: t.disabled,
                                    required: t.required,
                                    type: "radio"
                                },
                                domProps: {
                                    checked: t._q(t.inputValue, null)
                                },
                                on: {
                                    keydown: t.keyDown,
                                    keyup: t.keyUp,
                                    focus: t.onFocus,
                                    blur: t.onBlur,
                                    click: function(e) {
                                        return t.$emit("click", e)
                                    },
                                    change: function(e) {
                                        t.inputValue = null
                                    }
                                }
                            }, "input", t.$attrs, !1)) : n("input", t._b({
                                directives: [{
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.inputValue,
                                    expression: "inputValue"
                                }],
                                ref: "InputTel",
                                staticClass: "input-tel__input",
                                class: {
                                    "no-country-selector": t.noCountrySelector
                                },
                                style: [t.noCountrySelector ? t.radiusStyle : t.radiusRightStyle, t.inputCaretStyle, t.inputBorderStyle, t.inputBoxShadowStyle, t.inputBgColor, t.textColor],
                                attrs: {
                                    id: t.id,
                                    placeholder: t.labelValue,
                                    disabled: t.disabled,
                                    required: t.required,
                                    type: t.type
                                },
                                domProps: {
                                    value: t.inputValue
                                },
                                on: {
                                    keydown: t.keyDown,
                                    keyup: t.keyUp,
                                    focus: t.onFocus,
                                    blur: t.onBlur,
                                    click: function(e) {
                                        return t.$emit("click", e)
                                    },
                                    input: function(e) {
                                        e.target.composing || (t.inputValue = e.target.value)
                                    }
                                }
                            }, "input", t.$attrs, !1)), n("label", {
                                ref: "label",
                                staticClass: "input-tel__label",
                                class: t.error ? "text-danger" : null,
                                style: [t.labelColorStyle],
                                attrs: {
                                    for: t.id
                                },
                                on: {
                                    click: t.focusInput
                                }
                            }, [t._v(" " + t._s(t.hintValue || t.labelValue) + " ")]), t.clearable && t.inputValue ? n("button", {
                                staticClass: "input-tel__clear",
                                attrs: {
                                    title: "clear",
                                    type: "button",
                                    tabindex: "-1"
                                },
                                on: {
                                    click: t.clear
                                }
                            }, [n("span", {
                                staticClass: "input-tel__clear__effect"
                            }), n("span", [t._v(" ✕ ")])]) : t._e(), t.loader ? n("div", {
                                staticClass: "input-tel__loader"
                            }, [n("div", {
                                staticClass: "input-tel__loader__progress-bar",
                                style: [t.loaderBgColor]
                            })]) : t._e()])
                        }), [], !1, null, "e59be3b4", null).exports,
                        On = (n("7f7f"), n("f559"), n("20d6"), n("a745")),
                        Pn = n.n(On);

                    function kn(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    var En = n("774e"),
                        Tn = n.n(En),
                        In = n("c8bb"),
                        An = n.n(In),
                        symbol = n("67bb"),
                        Ln = n.n(symbol);

                    function Rn(t) {
                        return function(t) {
                            if (Pn()(t)) return kn(t)
                        }(t) || function(t) {
                            if (void 0 !== Ln.a && An()(Object(t))) return Tn()(t)
                        }(t) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return kn(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Tn()(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kn(t, e) : void 0
                            }
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }
                    n("7514");
                    var Fn, Mn = {
                            name: "CountrySelector",
                            components: {
                                RecycleScroller: n("e508").a
                            },
                            mixins: [xn],
                            props: {
                                id: {
                                    type: String,
                                    default: "CountrySelector"
                                },
                                value: {
                                    type: [String, Object],
                                    default: null
                                },
                                label: {
                                    type: String,
                                    default: "Choose country"
                                },
                                hint: {
                                    type: String,
                                    default: String
                                },
                                size: {
                                    type: String,
                                    default: String
                                },
                                error: {
                                    type: Boolean,
                                    default: !1
                                },
                                disabled: {
                                    type: Boolean,
                                    default: !1
                                },
                                valid: {
                                    type: Boolean,
                                    default: !1
                                },
                                dark: {
                                    type: Boolean,
                                    default: !1
                                },
                                items: {
                                    type: Array,
                                    default: Array,
                                    required: !0
                                },
                                preferredCountries: {
                                    type: Array,
                                    default: null
                                },
                                onlyCountries: {
                                    type: Array,
                                    default: null
                                },
                                ignoredCountries: {
                                    type: Array,
                                    default: null
                                },
                                noFlags: {
                                    type: Boolean,
                                    default: !1
                                },
                                countriesHeight: {
                                    type: Number,
                                    default: 35
                                },
                                showCodeOnList: {
                                    type: Boolean,
                                    default: !1
                                }
                            },
                            data: function() {
                                return {
                                    isFocus: !1,
                                    hasListOpen: !1,
                                    selectedIndex: null,
                                    tmpValue: this.value,
                                    query: "",
                                    indexItemToShow: 0,
                                    isHover: !1
                                }
                            },
                            computed: {
                                itemHeight: function() {
                                    return {
                                        height: "".concat(this.countriesHeight, "px")
                                    }
                                },
                                listHeight: function() {
                                    return {
                                        height: "".concat(7 * (this.countriesHeight + 1), "px"),
                                        maxHeight: "".concat(7 * (this.countriesHeight + 1), "px")
                                    }
                                },
                                countriesList: function() {
                                    var t = this;
                                    return this.items.filter((function(e) {
                                        return !t.ignoredCountries.includes(e.iso2)
                                    }))
                                },
                                countriesFiltered: function() {
                                    var t = this;
                                    return (this.onlyCountries || this.preferredCountries).map((function(e) {
                                        return t.countriesList.find((function(t) {
                                            return t.iso2.includes(e)
                                        }))
                                    }))
                                },
                                otherCountries: function() {
                                    var t = this;
                                    return this.countriesList.filter((function(e) {
                                        return !t.preferredCountries.includes(e.iso2)
                                    }))
                                },
                                countriesSorted: function() {
                                    return this.preferredCountries ? [].concat(Rn(this.countriesFiltered), Rn(this.otherCountries)) : this.onlyCountries ? this.countriesFiltered : this.countriesList
                                },
                                selectedValueIndex: function() {
                                    var t = this;
                                    return this.value ? this.countriesSorted.findIndex((function(e) {
                                        return e.iso2 === t.value
                                    })) : null
                                },
                                tmpValueIndex: function() {
                                    var t = this;
                                    return this.countriesSorted.findIndex((function(e) {
                                        return e.iso2 === t.tmpValue
                                    }))
                                },
                                callingCode: function() {
                                    return this.value ? "+".concat(Sn(this.value)) : null
                                }
                            },
                            methods: {
                                updateHoverState: function(t) {
                                    this.isHover = t
                                },
                                handleBlur: function(t) {
                                    this.$el.contains(t.relatedTarget) || (this.isFocus = !1, this.closeList())
                                },
                                toggleList: function() {
                                    this.$refs.countriesList.offsetParent ? this.closeList() : this.openList()
                                },
                                openList: function() {
                                    this.disabled || (this.$refs.CountrySelector.focus(), this.$emit("open"), this.isFocus = !0, this.hasListOpen = !0, this.value && this.scrollToSelectedOnFocus(this.selectedValueIndex))
                                },
                                closeList: function() {
                                    this.$emit("close"), this.hasListOpen = !1
                                },
                                updateValue: (Fn = $(regeneratorRuntime.mark((function t(e) {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return this.tmpValue = e, this.$emit("input", e || null), t.next = 4, this.$nextTick();
                                            case 4:
                                                this.closeList();
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                }))), function(t) {
                                    return Fn.apply(this, arguments)
                                }),
                                scrollToSelectedOnFocus: function(t) {
                                    var e = this;
                                    this.$nextTick((function() {
                                        e.$refs.countriesList.scrollTop = t * (e.countriesHeight + 1) - 3 * (e.countriesHeight + 1)
                                    }))
                                },
                                keyboardNav: function(t) {
                                    var code = t.keyCode;
                                    if (40 === code || 38 === code) {
                                        t.view && t.view.event && t.view.event.preventDefault(), this.hasListOpen || this.openList();
                                        var e = 40 === code ? this.tmpValueIndex + 1 : this.tmpValueIndex - 1;
                                        (-1 === e || e >= this.countriesSorted.length) && (e = -1 === e ? this.countriesSorted.length - 1 : 0), this.tmpValue = this.countriesSorted[e].iso2, this.scrollToSelectedOnFocus(e)
                                    } else 13 === code ? this.hasListOpen ? this.updateValue(this.tmpValue) : this.openList() : 27 === code ? this.closeList() : this.searching(t)
                                },
                                searching: function(t) {
                                    var e = this,
                                        code = t.keyCode;
                                    clearTimeout(this.queryTimer), this.queryTimer = setTimeout((function() {
                                        e.query = ""
                                    }), 1e3);
                                    var q = String.fromCharCode(code);
                                    if (8 === code && "" !== this.query) this.query = this.query.substring(0, this.query.length - 1);
                                    else if (/[a-zA-Z-e ]/.test(q)) {
                                        this.hasListOpen || this.openList(), this.query += t.key;
                                        var n = (this.preferredCountries ? this.countriesSorted.slice(this.preferredCountries.length) : this.countriesSorted).findIndex((function(t) {
                                            return e.tmpValue = t.iso2, t.name.toLowerCase().startsWith(e.query)
                                        })); - 1 !== n && this.scrollToSelectedOnFocus(n + (this.preferredCountries ? this.preferredCountries.length : 0))
                                    }
                                }
                            }
                        },
                        Dn = (n("3314"), Nn(Mn, (function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("div", {
                                ref: "parent",
                                staticClass: "country-selector",
                                class: [{
                                    "is-focused": t.isFocus,
                                    "has-value": t.value,
                                    "has-hint": t.hint,
                                    "has-error": t.error,
                                    "is-disabled": t.disabled,
                                    "is-dark": t.dark,
                                    "no-flags": t.noFlags,
                                    "has-list-open": t.hasListOpen,
                                    "is-valid": t.valid
                                }, t.size],
                                on: {
                                    "!blur": function(e) {
                                        return t.handleBlur(e)
                                    },
                                    mouseenter: function(e) {
                                        return t.updateHoverState(!0)
                                    },
                                    mouseleave: function(e) {
                                        return t.updateHoverState(!1)
                                    }
                                }
                            }, [t.value && !t.noFlags ? n("div", {
                                staticClass: "country-selector__country-flag",
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.toggleList(e)
                                    }
                                }
                            }, [n("div", {
                                class: "iti-flag-small iti-flag " + t.value.toLowerCase()
                            })]) : t._e(), n("input", {
                                ref: "CountrySelector",
                                staticClass: "country-selector__input",
                                style: [t.radiusLeftStyle, t.inputBorderStyle, t.inputBoxShadowStyle, t.inputBgColor],
                                attrs: {
                                    id: t.id,
                                    placeholder: t.label,
                                    disabled: t.disabled,
                                    readonly: ""
                                },
                                domProps: {
                                    value: t.callingCode
                                },
                                on: {
                                    focus: function(e) {
                                        t.isFocus = !0
                                    },
                                    keydown: t.keyboardNav,
                                    click: function(e) {
                                        return e.stopPropagation(), t.toggleList(e)
                                    }
                                }
                            }), n("div", {
                                staticClass: "country-selector__toggle",
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.toggleList(e)
                                    }
                                }
                            }, [t._t("arrow", [n("svg", {
                                staticClass: "country-selector__toggle__arrow",
                                attrs: {
                                    mlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24"
                                }
                            }, [n("path", {
                                staticClass: "arrow",
                                attrs: {
                                    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                                }
                            }), n("path", {
                                attrs: {
                                    fill: "none",
                                    d: "M0 0h24v24H0V0z"
                                }
                            })])])], 2), n("label", {
                                ref: "label",
                                staticClass: "country-selector__label",
                                style: [t.labelColorStyle],
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.toggleList(e)
                                    }
                                }
                            }, [t._v(" " + t._s(t.hint || t.label) + " ")]), n("Transition", {
                                attrs: {
                                    name: "slide"
                                }
                            }, [n("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.hasListOpen,
                                    expression: "hasListOpen"
                                }],
                                ref: "countriesList",
                                staticClass: "country-selector__list",
                                class: {
                                    "has-calling-code": t.showCodeOnList
                                },
                                style: [t.radiusStyle, t.listHeight, t.inputBgColor]
                            }, [n("RecycleScroller", {
                                attrs: {
                                    items: t.countriesSorted,
                                    "item-size": 1,
                                    "key-field": "iso2"
                                },
                                scopedSlots: t._u([{
                                    key: "default",
                                    fn: function(e) {
                                        var r = e.item;
                                        return [n("button", {
                                            key: "item-" + r.code,
                                            staticClass: "flex align-center country-selector__list__item",
                                            class: [{
                                                selected: t.value === r.iso2
                                            }, {
                                                "keyboard-selected": t.value !== r.iso2 && t.tmpValue === r.iso2
                                            }],
                                            style: [t.itemHeight, t.value === r.iso2 ? t.bgItemSelectedStyle : null],
                                            attrs: {
                                                tabindex: "-1",
                                                type: "button"
                                            },
                                            on: {
                                                click: function(e) {
                                                    return e.stopPropagation(), t.updateValue(r.iso2)
                                                }
                                            }
                                        }, [t.noFlags ? t._e() : n("div", {
                                            staticClass: "country-selector__list__item__flag-container"
                                        }, [n("div", {
                                            class: "iti-flag-small iti-flag " + r.iso2.toLowerCase()
                                        })]), t.showCodeOnList ? n("span", {
                                            staticClass: "country-selector__list__item__calling-code flex-fixed"
                                        }, [t._v("+" + t._s(r.dialCode))]) : t._e(), n("div", {
                                            staticClass: "dots-text"
                                        }, [t._v(" " + t._s(r.name) + " ")])])]
                                    }
                                }])
                            })], 1)])], 1)
                        }), [], !1, null, "46e105de", null).exports),
                        jn = {
                            countrySelectorLabel: "Country code",
                            countrySelectorError: "Choose country",
                            phoneNumberLabel: "Phone number",
                            example: "Example:"
                        },
                        Bn = n("4883");

                    function Vn(object, t) {
                        var e = Object.keys(object);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(object);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(object, t).enumerable
                            }))), e.push.apply(e, n)
                        }
                        return e
                    }

                    function zn(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? Vn(source, !0).forEach((function(e) {
                                y(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Vn(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }
                    var Gn, Un, Hn = function(t) {
                            return Object(Bn.isColorName)(t) ? Object(Bn.HexToRgba)(Object(Bn.colorNameToHex)(t), .7) : Object(Bn.HexToRgba)(t, .7)
                        },
                        Kn = function() {
                            if (!window) return null;
                            var t = window.navigator.userLanguage || window.navigator.language,
                                e = t ? t.substr(3, 4).toUpperCase() : null;
                            return "" === e && (e = t.substr(0, 2).toUpperCase()), e
                        },
                        Wn = {
                            name: "MazPhoneNumberInput",
                            components: {
                                InputTel: _n,
                                CountrySelector: Dn
                            },
                            props: {
                                value: {
                                    type: String,
                                    default: null
                                },
                                id: {
                                    type: String,
                                    default: "MazPhoneNumberInput"
                                },
                                color: {
                                    type: String,
                                    default: "dodgerblue"
                                },
                                validColor: {
                                    type: String,
                                    default: "yellowgreen"
                                },
                                errorColor: {
                                    type: String,
                                    default: "orangered"
                                },
                                darkColor: {
                                    type: String,
                                    default: "#424242"
                                },
                                disabled: {
                                    type: Boolean,
                                    default: !1
                                },
                                defaultCountryCode: {
                                    type: String,
                                    default: null
                                },
                                size: {
                                    type: String,
                                    default: null
                                },
                                preferredCountries: {
                                    type: Array,
                                    default: null
                                },
                                onlyCountries: {
                                    type: Array,
                                    default: null
                                },
                                ignoredCountries: {
                                    type: Array,
                                    default: Array
                                },
                                translations: {
                                    type: Object,
                                    default: null
                                },
                                noValidatorState: {
                                    type: Boolean,
                                    default: !1
                                },
                                noFlags: {
                                    type: Boolean,
                                    default: !1
                                },
                                error: {
                                    type: Boolean,
                                    default: !1
                                },
                                noExample: {
                                    type: Boolean,
                                    default: !1
                                },
                                required: {
                                    type: Boolean,
                                    default: !1
                                },
                                countriesHeight: {
                                    type: Number,
                                    default: 30
                                },
                                noUseBrowserLocale: {
                                    type: Boolean,
                                    default: !1
                                },
                                fetchCountry: {
                                    type: Boolean,
                                    default: !1
                                },
                                noCountrySelector: {
                                    type: Boolean,
                                    default: !1
                                },
                                showCodeOnList: {
                                    type: Boolean,
                                    default: !1
                                },
                                dark: {
                                    type: Boolean,
                                    default: !1
                                },
                                borderRadius: {
                                    type: Number,
                                    default: 4
                                }
                            },
                            data: function() {
                                return {
                                    results: {},
                                    userLocale: this.defaultCountryCode,
                                    lastKeyPressed: null
                                }
                            },
                            computed: {
                                uniqueId: function() {
                                    return "".concat(this.id, "-").concat(this._uid)
                                },
                                t: function() {
                                    return zn({}, jn, {}, this.translations)
                                },
                                codesCountries: function() {
                                    return S
                                },
                                countryCode: {
                                    get: function() {
                                        return this.userLocale || this.results.countryCode
                                    },
                                    set: function(t) {
                                        this.setLocale(t), this.$refs.PhoneNumberInput.$el.querySelector("input").focus()
                                    }
                                },
                                phoneNumber: {
                                    get: function() {
                                        return this.value
                                    },
                                    set: function(t) {
                                        this.emitValues({
                                            countryCode: this.countryCode,
                                            phoneNumber: t
                                        })
                                    }
                                },
                                shouldChooseCountry: function() {
                                    return !this.countryCode && !!this.phoneNumber
                                },
                                phoneFormatted: function() {
                                    return this.results.formatInternational
                                },
                                isValid: function() {
                                    return this.results.isValid
                                },
                                phoneNumberExample: function() {
                                    var t = this.countryCode ? function() {
                                        var t = Array.prototype.slice.call(arguments);
                                        return t.push(w), Wt.apply(this, t)
                                    }(this.countryCode, x) : null;
                                    return t ? t.formatNational() : null
                                },
                                hasEmptyPhone: function() {
                                    return "" === this.phoneNumber || null === this.phoneNumber
                                },
                                hintValue: function() {
                                    return this.noExample || !this.phoneNumberExample || this.hasEmptyPhone || this.isValid ? null : "".concat(this.t.example, " ").concat(this.phoneNumberExample)
                                },
                                theme: function() {
                                    return {
                                        colorValue: this.color,
                                        color: {
                                            color: this.color
                                        },
                                        textColor: {
                                            color: "#747474"
                                        },
                                        textDarkColor: {
                                            color: "rgba(255, 255, 255, 0.7)"
                                        },
                                        validColor: {
                                            color: this.validColor
                                        },
                                        errorColor: {
                                            color: this.errorColor
                                        },
                                        darkColor: {
                                            color: this.darkColor
                                        },
                                        bgColor: {
                                            backgroundColor: this.color
                                        },
                                        bgValidColor: {
                                            backgroundColor: this.validColor
                                        },
                                        bgErrorColor: {
                                            backgroundColor: this.errorColor
                                        },
                                        bgDarkColor: {
                                            backgroundColor: this.darkColor
                                        },
                                        borderColor: {
                                            borderColor: this.color
                                        },
                                        borderValidColor: {
                                            borderColor: this.validColor
                                        },
                                        borderErrorColor: {
                                            borderColor: this.errorColor
                                        },
                                        borderDarkColor: {
                                            borderColor: this.darkColor
                                        },
                                        boxShadowColor: {
                                            boxShadow: "0 0 0 0.125rem ".concat(Hn(this.color))
                                        },
                                        boxShadowValid: {
                                            boxShadow: "0 0 0 0.125rem ".concat(Hn(this.validColor))
                                        },
                                        boxShadowError: {
                                            boxShadow: "0 0 0 0.125rem ".concat(Hn(this.errorColor))
                                        },
                                        borderRadius: {
                                            borderRadius: "".concat(this.borderRadius, "px")
                                        },
                                        borderLeftRadius: {
                                            borderTopLeftRadius: "".concat(this.borderRadius, "px"),
                                            borderBottomLeftRadius: "".concat(this.borderRadius, "px")
                                        },
                                        borderRightRadius: {
                                            borderTopRightRadius: "".concat(this.borderRadius, "px"),
                                            borderBottomRightRadius: "".concat(this.borderRadius, "px")
                                        }
                                    }
                                }
                            },
                            watch: {
                                defaultCountryCode: function(t, e) {
                                    t !== e && this.setLocale(t)
                                },
                                phoneNumber: {
                                    handler: function(t, e) {
                                        if (t && t !== e) {
                                            var n = mn(t);
                                            n && this.emitValues({
                                                phoneNumber: n.nationalNumber,
                                                countryCode: this.countryCode ? this.countryCode : n.country
                                            })
                                        }
                                    },
                                    immediate: !0
                                }
                            },
                            mounted: (Un = $(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, this.phoneNumber && this.defaultCountryCode && this.emitValues({
                                                    countryCode: this.defaultCountryCode,
                                                    phoneNumber: this.phoneNumber
                                                }), !this.defaultCountryCode || !this.fetchCountry) {
                                                t.next = 4;
                                                break
                                            }
                                            throw new Error('MazPhoneNumberInput: Do not use "fetch-country" and "default-country-code" options in the same time');
                                        case 4:
                                            if (!this.defaultCountryCode || !this.noUseBrowserLocale) {
                                                t.next = 6;
                                                break
                                            }
                                            throw new Error('MazPhoneNumberInput: If you use a "default-country-code", do not use "no-use-browser-locale" options');
                                        case 6:
                                            if (!this.defaultCountryCode) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 8:
                                            this.fetchCountry ? this.fetchCountryCode() : !this.noUseBrowserLocale && this.setLocale(Kn()), t.next = 14;
                                            break;
                                        case 11:
                                            throw t.prev = 11, t.t0 = t.catch(0), new Error(t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            }))), function() {
                                return Un.apply(this, arguments)
                            }),
                            methods: {
                                getAsYouTypeFormat: function(t) {
                                    var e = t.countryCode,
                                        n = t.phoneNumber,
                                        r = new Cn(e);
                                    return n ? r.input(n) : null
                                },
                                getParsePhoneNumberFromString: function(t) {
                                    var e = t.phoneNumber,
                                        n = t.countryCode,
                                        r = e && n ? mn(e, n) : null;
                                    return zn({
                                        countryCode: n,
                                        isValid: !1
                                    }, e && "" !== e ? {
                                        phoneNumber: e
                                    } : null, {}, r ? {
                                        countryCallingCode: r.countryCallingCode,
                                        formattedNumber: r.number,
                                        nationalNumber: r.nationalNumber,
                                        isValid: r.isValid(),
                                        type: r.getType(),
                                        formatInternational: r.formatInternational(),
                                        formatNational: r.formatNational(),
                                        uri: r.getURI(),
                                        e164: r.format("E.164")
                                    } : null)
                                },
                                emitValues: function(t) {
                                    var e = this,
                                        n = this.getAsYouTypeFormat(t),
                                        r = 8 === this.lastKeyPressed;
                                    this.$nextTick((function() {
                                        var o = !!e.phoneNumber && e.phoneNumber.trim().slice(-1);
                                        r && o && ")" === o.slice(-1) && (n = e.phoneNumber.slice(0, -2), t.phoneNumber = e.phoneNumber.slice(0, -2)), e.results = e.getParsePhoneNumberFromString(t), e.$emit("update", e.results), e.$emit("input", n)
                                    }))
                                },
                                setLocale: function(t) {
                                    var e = function(t) {
                                        return C.includes(t)
                                    }(t);
                                    e && t ? (this.userLocale = e ? t : null, this.emitValues({
                                        countryCode: t,
                                        phoneNumber: this.phoneNumber
                                    })) : !e && t && window.console.warn("The locale ".concat(t, " is not available"))
                                },
                                fetchCountryCode: (Gn = $(regeneratorRuntime.mark((function t() {
                                    var e, n, r;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, fetch("https://ip2c.org/s");
                                            case 3:
                                                return e = t.sent, t.next = 6, e.text();
                                            case 6:
                                                n = t.sent, (r = (n || "").toString()) && "1" === r[0] && this.setLocale(r.substr(2, 2)), t.next = 14;
                                                break;
                                            case 11:
                                                throw t.prev = 11, t.t0 = t.catch(0), new Error(t.t0);
                                            case 14:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this, [
                                        [0, 11]
                                    ])
                                }))), function() {
                                    return Gn.apply(this, arguments)
                                })
                            }
                        },
                        qn = (n("6996"), Nn(Wn, (function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("div", {
                                staticClass: "vue-phone-number-input flex",
                                class: [{
                                    dark: t.dark
                                }, t.size],
                                attrs: {
                                    id: t.id
                                }
                            }, [t.noCountrySelector ? t._e() : n("div", {
                                staticClass: "select-country-container"
                            }, [n("CountrySelector", {
                                ref: "CountrySelector",
                                staticClass: "input-country-selector",
                                attrs: {
                                    id: t.uniqueId + "_country_selector",
                                    items: t.codesCountries,
                                    "countries-height": t.countriesHeight,
                                    error: t.shouldChooseCountry,
                                    hint: t.shouldChooseCountry ? t.t.countrySelectorError : null,
                                    disabled: t.disabled,
                                    valid: t.isValid && !t.noValidatorState,
                                    "preferred-countries": t.preferredCountries,
                                    "only-countries": t.onlyCountries,
                                    "ignored-countries": t.ignoredCountries,
                                    label: t.t.countrySelectorLabel,
                                    "no-flags": t.noFlags,
                                    "show-code-on-list": t.showCodeOnList,
                                    size: t.size,
                                    dark: t.dark,
                                    theme: t.theme
                                },
                                model: {
                                    value: t.countryCode,
                                    callback: function(e) {
                                        t.countryCode = e
                                    },
                                    expression: "countryCode"
                                }
                            }, [t._t("arrow", null, {
                                slot: "arrow"
                            })], 2)], 1), n("div", {
                                staticClass: "flex-1"
                            }, [n("InputTel", t._b({
                                ref: "PhoneNumberInput",
                                staticClass: "input-phone-number",
                                attrs: {
                                    id: t.uniqueId + "_phone_number",
                                    label: t.t.phoneNumberLabel,
                                    hint: t.hintValue,
                                    dark: t.dark,
                                    disabled: t.disabled,
                                    size: t.size,
                                    error: t.error,
                                    valid: t.isValid && !t.noValidatorState,
                                    required: t.required,
                                    "no-country-selector": t.noCountrySelector,
                                    theme: t.theme
                                },
                                on: {
                                    keydown: function(e) {
                                        t.lastKeyPressed = e.keyCode
                                    },
                                    focus: function(e) {
                                        return t.$emit("phone-number-focused")
                                    },
                                    blur: function(e) {
                                        return t.$emit("phone-number-blur")
                                    }
                                },
                                model: {
                                    value: t.phoneNumber,
                                    callback: function(e) {
                                        t.phoneNumber = e
                                    },
                                    expression: "phoneNumber"
                                }
                            }, "InputTel", t.$attrs, !1))], 1)])
                        }), [], !1, null, "19c9a1c7", null).exports);
                    e.default = qn
                },
                fdef: function(t, e) {
                    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
                }
            }).default
        }
    }
]);