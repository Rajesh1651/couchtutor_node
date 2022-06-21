/** lang/en/default.js start **/
var PLEASE_ENTER_VALID_MOBILE_NO = "Please enter valid mobile number.";
var PASSWORD_REGX_ERROR_MESSAGE = "Password must be of minimum 8 characters and it should be combination of numeric, alphabet and special characters.";
var FAVOURAIT_PRODUCT_ADDED_CONFIRM_MSG = "Are you sure you want to add this product to wishlist?";
var FAVOURAIT_PRODUCT_REMOVED_CONFIRM_MSG = "Are you sure you want to remove this product from wishlist?";
var PASSWORD_AND_CONFIRM_PASSWOED_IDENTICAL_ERROR_MESSAGE = "Password and confirm password does not match.";
var ADD_TO_CART_CONFIRM_MSG = "Are you sure you want to add this product to cart?";
var REMOVE_TO_CART_CONFIRM_MSG = "Are you sure you want to remove this product from cart?";
var CLEAR_CART_CONFIRM_MSG = "Are you sure you want to remove all product from cart ?";
var GIFT_WRAP_CONFIRM_MSG = "Are you sure you want to gift wrap this product ?";
var REMOVE_GIFT_WRAP_CONFIRM_MSG = "Are you sure you want to remove gift wrap from this product ?";
var PLEASE_ENTER_VALID_REVIE_MESSAGE = "Please enter review message.";
var PLEASE_ENTER_VALID_REVIE_HEADING = "Please enter review heading.";
var ORDER_CANCELLATION_REASON = "Order Cancellation Reason";
var ORDER_RETURN_REASON = "Order Return Reason";
var ORDER_CANCELLATION_CONFIRM_MSG = "Are you sure you want to cancel this order item?";
var ORDER_RETURN_CONFIRM_MSG = "Are you sure you want to return this order item?";
var HOME_NEWSLETTER_SUBSCRIBE_SUCCESS = "You have successfully subscribed to our news letter.";
var HOME_NEWSLETTER_UNSUBSCRIBE_SUCCESS = "You have successfully unsubscribed from our news letter.";
var BOOKING_CANCELLATION_CONFIRM_MSG = "Are you sure you want to cancel this booking  item?";
var BOOKING_CANCELLATION_REASON = "Booking Cancellation Reason";
var BOOKING_CHANGE_TIME_CONFIRM_MSG = "You can request for change booking time only once. Are you sure you want to request to change booking time ?";
/** lang/en/default.js end **/

/** jquery-2.2.4.min.js start **/
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.4",
        n = function(a, b) { return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) { return b.toUpperCase() };
    n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() { return e.call(this) }, get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) }, pushStack: function(a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function(a) { return n.each(this, a) }, map: function(a) { return this.pushStack(n.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(e.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === n.type(a) }, isArray: Array.isArray, isWindow: function(a) { return null != a && a === a.window }, isNumeric: function(a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 }, isPlainObject: function(a) { var b; if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1; for (b in a); return void 0 === b || k.call(a, b) }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a }, globalEval: function(a) { var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a)) }, camelCase: function(a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b) { var c, d = 0; if (s(a)) { for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c }, inArray: function(a, b, c) { return null == b ? -1 : h.call(b, a, c) }, merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, e, g = 0,
                h = []; if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e); return f.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, f; return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() { return a.apply(b || this, d.concat(e.call(arguments))) }, f.guid = a.guid = a.guid || n.guid++, f) : void 0 }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { i["[object " + b + "]"] = b.toLowerCase() });

    function s(a) { var b = !!a && "length" in a && a.length,
            c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a }
    var t = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) { for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            da = function() { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) { H = { apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) { var c = a.length,
                        d = 0; while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function fa(a, b, d, e) { var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b } if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) {} finally { k === u && b.removeAttribute("id") } } } return i(a.replace(Q, "$1"), b, d, e) }

        function ga() { var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b }

        function ha(a) { return a[u] = !0, a }

        function ia(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ja(a, b) { var c = a.split("|"),
                e = c.length; while (e--) d.attrHandle[c[e]] = b }

        function ka(a, b) { var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function la(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function na(a) { return ha(function(b) { return b = +b, ha(function(c, d) { var e, f = a([], c.length, b),
                        g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function oa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = fa.support = {}, f = fa.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function(a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function(a) { var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return ka(a, b);
                c = a; while (c = c.parentNode) g.unshift(c);
                c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, fa.matches = function(a, b) { return fa(a, null, null, b) }, fa.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fa(b, n, null, [a]).length > 0 }, fa.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fa.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function(a) { var b, d = [],
                e = 0,
                f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fa.getText = function(a) { var b, c = "",
                d = 0,
                f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b); return c }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = fa.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) { var d, f = e(a, b),
                            g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: ha(function(a) { var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1")); return d[u] ? ha(function(a, b, c, e) { var f, g = d(a, null, e, []),
                            h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ha(function(a) { return function(b) { return fa(a, b).length > 0 } }), contains: ha(function(a) { return a = a.replace(ba, ca),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ha(function(a) { return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) { var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) { return a.disabled === !1 }, disabled: function(a) { return a.disabled === !0 }, checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return Y.test(a.nodeName) }, input: function(a) { return X.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: na(function() { return [0] }), last: na(function(a, b) { return [b - 1] }), eq: na(function(a, b, c) { return [0 > c ? c + b : c] }), even: na(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: na(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter; while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fa.error(a) : z(a, i).slice(0) };

        function qa(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function ra(a, b, c) { var d = b.dir,
                e = c && "parentNode" === d,
                f = x++; return b.first ? function(b, c, f) { while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) { var h, i, j, k = [w, f]; if (g) { while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 } } }

        function sa(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function ta(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c); return c }

        function ua(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function va(a, b, c, d, e, f) { return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) { var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length; while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) }

        function wa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) { return a === b }, h, !0), l = ra(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a)) }
                    m.push(c) }
            return sa(m) }

        function xa(a, b) { var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) { var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y) }
                        c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u) }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ha(f) : f } return h = fa.compile = function(a, b) { var c, d = [],
                e = [],
                f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a } return f }, i = fa.select = function(a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length) }
                i = W.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function(a) { return null == a.getAttribute("disabled") }) || ja(K, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) { var d = [],
                e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) { if (e && n(a).is(c)) break;
                    d.push(a) }
            return d },
        v = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) { if (n.isFunction(b)) return n.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function(a) { return a === b !== c }); if ("string" == typeof b) { if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a) } return n.grep(a, function(a) { return h.call(b, a) > -1 !== c }) }
    n.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function(a) { var b, c = this.length,
                d = [],
                e = this; if ("string" != typeof a) return this.pushStack(n(a).filter(function() { for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0 })); for (b = 0; c > b; b++) n.find(a, e[b], d); return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d }, filter: function(a) { return this.pushStack(z(this, a || [], !1)) }, not: function(a) { return this.pushStack(z(this, a || [], !0)) }, is: function(a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length } });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) { var e, f; if (!a) return this; if (c = c || A, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({ has: function(a) { var b = n(a, this),
                c = b.length; return this.filter(function() { for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0 }) }, closest: function(a, b) { for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function F(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    n.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return u(a, "parentNode") }, parentsUntil: function(a, b, c) { return u(a, "parentNode", c) }, next: function(a) { return F(a, "nextSibling") }, prev: function(a) { return F(a, "previousSibling") }, nextAll: function(a) { return u(a, "nextSibling") }, prevAll: function(a) { return u(a, "previousSibling") }, nextUntil: function(a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return u(a, "previousSibling", c) }, siblings: function(a) { return v((a.parentNode || {}).firstChild, a) }, children: function(a) { return v(a.firstChild) }, contents: function(a) { return a.contentDocument || n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e) } });
    var G = /\S+/g;

    function H(a) { var b = {}; return n.each(a.match(G) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) { a = "string" == typeof a ? H(a) : n.extend({}, a); var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function(b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return n.each(arguments, function(a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function(a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } }; return j }, n.extend({ Deferred: function(a) { var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() { return c }, always: function() { return e.done(arguments).fail(arguments), this }, then: function() { var a = arguments; return n.Deferred(function(c) { n.each(b, function(b, f) { var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() { var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) { return null != a ? n.extend(a, d) : d } },
                e = {}; return d.pipe = d.then, n.each(b, function(a, f) { var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) { var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) { return function(d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k; if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f; return f || g.resolveWith(k, c), g.promise() } });
    var I;
    n.fn.ready = function(a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) }, ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready")))) } });

    function J() { d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready() }
    n.ready.promise = function(b) { return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b) }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) K(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(n(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        L = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function M() { this.expando = n.expando + M.uid++ }
    M.uid = 1, M.prototype = { register: function(a, b) { var c = b || {}; return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando] }, cache: function(a) { if (!L(a)) return {}; var b = a[this.expando]; return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function(a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d]; return e }, get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b] }, access: function(a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function(a, b) { var c, d, e, f = a[this.expando]; if (void 0 !== f) { if (void 0 === b) this.register(a);
                else { n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length; while (c--) delete f[d[c]] }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !n.isEmptyObject(b) } };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({ hasData: function(a) { return O.hasData(a) || N.hasData(a) }, data: function(a, b, c) { return O.access(a, b, c) }, removeData: function(a, b) { O.remove(a, b) }, _data: function(a, b, c) { return N.access(a, b, c) }, _removeData: function(a, b) { N.remove(a, b) } }), n.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                g = f && f.attributes; if (void 0 === a) { if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { O.set(this, a) }) : K(this, function(b) { var c, d; if (f && void 0 === b) { if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c; if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c; if (c = R(f, d, void 0), void 0 !== c) return c } else d = n.camelCase(a), this.each(function() { var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function(a) { return this.each(function() { O.remove(this, a) }) } }), n.extend({ queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx"; var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function() { N.remove(a, [b + "queue", c]) }) }) } }), n.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { n.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) };

    function W(a, b, c, d) { var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return n.css(a, b, "") },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) { var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c }

    function aa(a, b) { for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval")) }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0; while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) { k = 0; while (f = g[k++]) Z.test(f.type || "") && c.push(f) } return l }! function() { var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() { return !0 }

    function ha() { return !1 }

    function ia() { try { return d.activeElement } catch (a) {} }

    function ja(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ja(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a; return 1 === f && (g = e, e = function(a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() { n.event.add(this, b, e, d, c) }) }
    n.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a); if (r) { c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) { return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(G) || [""], j = b.length; while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0) } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a); if (r && (i = r.events)) { b = (b || "").match(G) || [""], j = b.length; while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]) } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events") } }, dispatch: function(a) { a = n.event.fix(a); var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, b) { var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d }) }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, e, f, g = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, fix: function(a) { if (a[n.expando]) return a; var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; while (b--) c = e[b], a[c] = g[c]; return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a }, special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== ia() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === ia() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, n.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, n.Event = function(a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function() { var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function() { var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function() { var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj; return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), n.fn.extend({ on: function(a, b, c, d) { return ja(this, a, b, c, d) }, one: function(a, b, c, d) { return ja(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() { n.event.remove(this, a, c, b) }) } });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function qa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function ra(a) { var b = na.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function sa(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]) }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i)) } }

    function ta(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function ua(a, b, c, d) { b = f.apply([], b); var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q); if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) { var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d) }); if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) { for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m); if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, ""))) } return a }

    function va(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d)); return a }
    n.extend({ htmlPrefilter: function(a) { return a.replace(ka, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a); if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]); if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h }, cleanData: function(a) { for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) { if (b = c[N.expando]) { if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0 }
                    c[O.expando] && (c[O.expando] = void 0) } } }), n.fn.extend({ domManip: ua, detach: function(a) { return va(this, a, !0) }, remove: function(a) { return va(this, a) }, text: function(a) { return K(this, function(a) { return void 0 === a ? n.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function() { return ua(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = pa(this, a);
                    b.appendChild(a) } }) }, prepend: function() { return ua(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = pa(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return ua(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return ua(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = ""); return this }, clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return n.clone(this, a, b) }) }, html: function(a) { return K(this, function(a) { var b = this[0] || {},
                    c = 0,
                    d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) { a = n.htmlPrefilter(a); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return ua(this, arguments, function(b) { var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this)) }, a) } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) { for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get()); return this.pushStack(d) } });
    var wa, xa = { HTML: "block", BODY: "block" };

    function ya(a, b) { var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display"); return c.detach(), d }

    function za(a) { var b = d,
            c = xa[a]; return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) },
        Da = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e },
        Ea = d.documentElement;
    ! function() { var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div"); if (h.style) { h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() { h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g); var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g) }
            n.extend(l, { pixelPosition: function() { return i(), b }, boxSizingReliable: function() { return null == c && i(), c }, pixelMarginRight: function() { return null == c && i(), e }, reliableMarginLeft: function() { return null == c && i(), f }, reliableMarginRight: function() { var b, c = h.appendChild(d.createElement("div")); return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b } }) } }();

    function Fa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g }

    function Ga(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = { position: "absolute", visibility: "hidden", display: "block" },
        Ja = { letterSpacing: "0", fontWeight: "400" },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) { if (a in La) return a; var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length; while (c--)
            if (a = Ka[c] + b, a in La) return a }

    function Na(a, b, c) { var d = T.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Oa(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g }

    function Pa(a, b, c) { var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px" }

    function Qa(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }
    n.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Fa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b),
                    i = a.style; return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function(a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), n.each(["height", "width"], function(a, b) { n.cssHooks[b] = { get: function(a, c, d) { return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() { return Pa(a, b, d) }) : Pa(a, b, d) : void 0 }, set: function(a, c, d) { var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f); return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g) } } }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) { return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" : void 0 }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) { return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Aa.test(a) || (n.cssHooks[a + b].set = Na) }), n.fn.extend({ css: function(a, b) { return K(this, function(a, b, c) { var d, e, f = {},
                    g = 0; if (n.isArray(b)) { for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function() { return Qa(this, !0) }, hide: function() { return Qa(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { V(this) ? n(this).show() : n(this).hide() }) } });

    function Ra(a, b, c, d, e) { return new Ra.prototype.init(a, b, c, d, e) }
    n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() { var a = Ra.propHooks[this.prop]; return a && a.get ? a.get(this) : Ra.propHooks._default.get(this) }, run: function(a) { var b, c = Ra.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() { return a.setTimeout(function() { Sa = void 0 }), Sa = n.now() }

    function Xa(a, b) { var c, d = 0,
            e = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e }

    function Ya(a, b, c) { for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d }

    function Za(a, b, c) { var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, l.always(function() { l.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })); for (d in b)
            if (e = b[d], Ua.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0 }
                m[d] = q && q[d] || n.style(a, d) } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else { q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() { n(a).hide() }), l.done(function() { var b;
                N.remove(a, "fxshow"); for (b in m) n.style(a, b, m[b]) }); for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

    function $a(a, b) { var c, d, e, f, g; for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function _a(a, b, c) { var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                        d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
            k = j.props; for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    n.Animation = n.extend(_a, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return W(c.elem, a, T.exec(b), c), c }] }, tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b) }, prefilters: [Za], prefilter: function(a, b) { b ? _a.prefilters.unshift(a) : _a.prefilters.push(a) } }), n.speed = function(a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() { var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                    delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this); if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || n.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), n.each(["toggle", "show", "hide"], function(a, b) { var c = n.fn[b];
            n.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e) } }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() { var a, b = 0,
                c = n.timers; for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0 }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { a.clearInterval(Ta), Ta = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b, c) { return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) } }) },
        function() { var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({ attr: function(a, b) { return K(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function(a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function(a, b) { var c, d, e = 0,
                f = b && b.match(G); if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) } }), ab = { set: function(a, b, c) { return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) { var e, f; return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e } });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) { return K(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[n.propFix[a] || a] }) } }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: { tabIndex: { get: function(a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1 } } },
        propFix: { "for": "htmlFor", "class": "className" }
    }), l.optSelected || (n.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function(a) { var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this });
    var eb = /[\t\r\n\f]/g;

    function fb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    n.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, fb(this))) }); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, fb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) { g = 0; while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) { n(this).toggleClass(a.call(this, c, fb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(G) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0;
            b = " " + a + " "; while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1 } });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function(a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)).replace(hb, " ") } }, select: { get: function(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) { var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length; while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, { trigger: function(b, c, e, f) { var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) { if (!f && !o.noBubble && !n.isWindow(e)) { for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a) }
                g = 0; while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result } }, simulate: function(a, b, c) { var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b) } }), n.fn.extend({ trigger: function(a, b) { return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a)) };
        n.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b)) } } });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) { return JSON.parse(a + "") }, n.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                f = b.toLowerCase().match(G) || []; if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function xb(a, b, c, d) { var e = {},
            f = a === tb;

        function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function yb(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && n.extend(!0, a, d), a }

    function zb(a, b, c) { var d, e, f, g, h = a.contents,
            i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e) }
            f = f || g } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 }

    function Ab(a, b, c, d) { var e, f, g, h, i, j = {},
            k = a.dataTypes.slice(); if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift(); while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }
    n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a) }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = { readyState: 0, getResponseHeader: function(a) { var b; if (2 === v) { if (!h) { h = {}; while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return 2 === v ? g : null }, setRequestHeader: function(a, b) { var c = a.toLowerCase(); return v || (a = u[c] = u[c] || a, t[a] = b), this }, overrideMimeType: function(a) { return v || (m.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this }, abort: function(a) { var b = a || w; return e && e.abort(b), z(0, b), this } }; if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) { j = d.createElement("a"); try { j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host } catch (y) { m.crossDomain = !0 } } if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]); for (l in m.headers) x.setRequestHeader(l, m.headers[l]); if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort"; for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]); if (e = xb(tb, m, c, x)) { if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() { x.abort("timeout") }, m.timeout)); try { v = 1, e.send(t, z) } catch (y) { if (!(2 > v)) throw y;
                    z(-1, y) } } else z(-1, "No Transport");

            function z(b, c, d, h) { var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop"))) } return x }, getJSON: function(a, b, c) { return n.get(a, b, c, "json") }, getScript: function(a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function(a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function(a) { var b; return n.isFunction(a) ? this.each(function(b) { n(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this) }, wrapInner: function(a) { return n.isFunction(a) ? this.each(function(b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = n.isFunction(a); return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() { return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function(a) { return !n.expr.filters.visible(a) }, n.expr.filters.visible = function(a) { return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0 };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function(b, e) { c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d) }
    n.param = function(a, b) { var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Gb(c, a[c], b, e); return d.join("&").replace(Bb, "+") }, n.fn.extend({ serialize: function() { return n.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a)) }).map(function(a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function(a) { return { name: b.name, value: a.replace(Db, "\r\n") } }) : { name: b.name, value: c.replace(Db, "\r\n") } }).get() } }), n.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Hb = { 0: 200, 1223: 204 },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) { var c, d; return l.cors || Ib && !b.crossDomain ? { send: function(e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function() { c && c() } } : void 0 }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), n.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Jb.pop() || n.expando + "_" + kb++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function(a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || d; var e = x.exec(a),
            f = !c && []; return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes)) };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) { if ("string" != typeof a && Lb) return Lb.apply(this, arguments); var d, e, f, g = this,
            h = a.indexOf(" "); return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) { return this.on(b, a) } }), n.expr.filters.animated = function(a) { return n.grep(n.timers, function(b) { return a === b.elem }).length };

    function Mb(a) { return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    n.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) }); var b, c, d = this[0],
                e = { top: 0, left: 0 },
                f = d && d.ownerDocument; if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e }, position: function() { if (this[0]) { var a, b, c = this[0],
                    d = { top: 0, left: 0 }; return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === n.css(a, "position")) a = a.offsetParent; return a || Ea }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = "pageYOffset" === b;
        n.fn[a] = function(d) { return K(this, function(a, d, e) { var f = Mb(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) { return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function(a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { n.fn[d] = function(d, e) { var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border"); return K(this, function(b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) }, size: function() { return this.length } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return n });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) { return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n }, b || (a.jQuery = a.$ = n), n
});

/** jquery-2.2.4.min.js end **/

/** popper.min.js start **/
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function() { 'use strict';

    function e(e) { return e && '[object Function]' === {}.toString.call(e) }

    function t(e, t) { if (1 !== e.nodeType) return []; var o = getComputedStyle(e, null); return t ? o[t] : o }

    function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host }

    function n(e) { if (!e) return document.body; switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body; } var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY; return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e)) }

    function r(e) { return 11 === e ? re : 10 === e ? pe : re || pe }

    function p(e) { if (!e) return document.documentElement; for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement }

    function s(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e) }

    function d(e) { return null === e.parentNode ? e : d(e.parentNode) }

    function a(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0); var l = r.commonAncestorContainer; if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l); var f = d(e); return f.host ? a(f.host, t) : a(e, d(t).host) }

    function l(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            n = e.nodeName; if ('BODY' === n || 'HTML' === n) { var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i; return r[o] } return e[o] }

    function f(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, 'top'),
            i = l(t, 'left'),
            r = o ? -1 : 1; return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e }

    function m(e, t) { var o = 'x' === t ? 'Left' : 'Top',
            n = 'Left' == o ? 'Right' : 'Bottom'; return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10) }

    function h(e, t, o, n) { return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0) }

    function c() { var e = document.body,
            t = document.documentElement,
            o = r(10) && getComputedStyle(t); return { height: h('Height', e, t, o), width: h('Width', e, t, o) } }

    function g(e) { return le({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

    function u(e) { var o = {}; try { if (r(10)) { o = e.getBoundingClientRect(); var n = l(e, 'top'),
                    i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i } else o = e.getBoundingClientRect() } catch (t) {} var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
            s = 'HTML' === e.nodeName ? c() : {},
            d = s.width || e.clientWidth || p.right - p.left,
            a = s.height || e.clientHeight || p.bottom - p.top,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a; if (f || h) { var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h } return g(p) }

    function b(e, o) { var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = 'HTML' === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0)); var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height }); if (b.marginTop = 0, b.marginLeft = 0, !p && s) { var y = parseFloat(m.marginTop, 10),
                w = parseFloat(m.marginLeft, 10);
            b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w } return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b }

    function y(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = $(o.clientWidth, window.innerWidth || 0),
            r = $(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, 'left'),
            d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r }; return g(d) }

    function w(e) { var n = e.nodeName; return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e)) }

    function E(e) { if (!e || !e.parentElement || r()) return document.documentElement; for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement; return o || document.documentElement }

    function v(e, t, i, r) { var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = { top: 0, left: 0 },
            d = p ? E(e) : a(e, t); if ('viewport' === r) s = y(d, p);
        else { var l; 'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r; var f = b(l, d, p); if ('HTML' === l.nodeName && !w(d)) { var m = c(),
                    h = m.height,
                    g = m.width;
                s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left } else s = f } return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s }

    function x(e) { var t = e.width,
            o = e.height; return t * o }

    function O(e, t, o, n, i) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = v(o, n, r, i),
            s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
            d = Object.keys(s).map(function(e) { return le({ key: e }, s[e], { area: x(s[e]) }) }).sort(function(e, t) { return t.area - e.area }),
            a = d.filter(function(e) { var t = e.width,
                    n = e.height; return t >= o.clientWidth && n >= o.clientHeight }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1]; return l + (f ? '-' + f : '') }

    function L(e, t, o) { var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            i = n ? E(t) : a(t, o); return b(o, i, n) }

    function S(e) { var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            i = { width: e.offsetWidth + n, height: e.offsetHeight + o }; return i }

    function T(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

    function C(e, t, o) { o = o.split('-')[0]; var n = S(e),
            i = { width: n.width, height: n.height },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height'; return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i }

    function D(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

    function N(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === o }); var n = D(e, function(e) { return e[t] === o }); return e.indexOf(n) }

    function P(t, o, n) { var i = void 0 === n ? t : t.slice(0, N(t, 'name', n)); return i.forEach(function(t) { t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t)) }), o }

    function k() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } }

    function W(e, t) { return e.some(function(e) { var o = e.name,
                n = e.enabled; return n && o === t }) }

    function B(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) { var i = t[n],
                r = i ? '' + i + o : e; if ('undefined' != typeof document.body.style[r]) return r } return null }

    function H() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

    function A(e) { var t = e.ownerDocument; return t ? t.defaultView : window }

    function M(e, t, o, i) { var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p) }

    function I(e, t, o, i) { o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o }

    function F() { this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function R(e, t) { return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t }

    function U() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state)) }

    function Y(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) }

    function j(e, t) { Object.keys(t).forEach(function(o) { var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n }) }

    function K(e, t) { Object.keys(t).forEach(function(o) { var n = t[o];!1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) }

    function q(e, t, o) { var n = D(e, function(e) { var o = e.name; return o === t }),
            i = !!n && e.some(function(e) { return e.name === o && e.enabled && e.order < n.order }); if (!i) { var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return i }

    function G(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e }

    function z(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = me.indexOf(e),
            n = me.slice(o + 1).concat(me.slice(0, o)); return t ? n.reverse() : n }

    function V(e, t, o, n) { var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) {
                case '%p':
                    s = o; break;
                case '%':
                case '%r':
                default:
                    s = n; } var d = g(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r }

    function _(e, t, o, n) { var i = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(n),
            p = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
            s = p.indexOf(D(p, function(e) { return -1 !== e.search(/,|\s/) }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function(e, n) { var i = (1 === n ? !r : r) ? 'height' : 'width',
                p = !1; return e.reduce(function(e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function(e) { return V(e, i, t, o) }) }), a.forEach(function(e, t) { e.forEach(function(o, n) { Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1)) }) }), i }

    function X(e, t) { var o, n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split('-')[0]; return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
        if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) { oe = 1; break }
    var i = ee && window.Promise,
        ie = i ? function(e) { var t = !1; return function() { t || (t = !0, window.Promise.resolve().then(function() { t = !1, e() })) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, oe)) } },
        re = ee && !!(window.MSInputMethodContext && document.documentMode),
        pe = ee && /MSIE 10/.test(navigator.userAgent),
        se = function(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') },
        de = function() {
            function e(e, t) { for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function(t, o, n) { return o && e(t.prototype, o), n && e(t, n), t } }(),
        ae = function(e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e },
        le = Object.assign || function(e) { for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e },
        fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        me = fe.slice(3),
        he = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
        ce = function() {
            function t(o, n) { var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                se(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(i.update) }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) { i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return le({ name: e }, i.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(t) { t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) }), this.update(); var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p } return de(t, [{ key: 'update', value: function() { return k.call(this) } }, { key: 'destroy', value: function() { return H.call(this) } }, { key: 'enableEventListeners', value: function() { return F.call(this) } }, { key: 'disableEventListeners', value: function() { return U.call(this) } }]), t }(); return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(e) { var t = e.placement,
                        o = t.split('-')[0],
                        n = t.split('-')[1]; if (n) { var i = e.offsets,
                            r = i.reference,
                            p = i.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = { start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a]) };
                        e.offsets.popper = le({}, p, l[n]) } return e } }, offset: { order: 200, enabled: !0, fn: X, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(e, t) { var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o)); var n = B('transform'),
                        i = e.instance.popper.style,
                        r = i.top,
                        s = i.left,
                        d = i[n];
                    i.top = '', i.left = '', i[n] = ''; var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a; var l = t.priority,
                        f = e.offsets.popper,
                        m = { primary: function(e) { var o = f[e]; return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o) }, secondary: function(e) { var o = 'right' === e ? 'left' : 'top',
                                    n = f[o]; return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n) } }; return l.forEach(function(e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e)) }), e.offsets.popper = f, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function(e) { var t = e.offsets,
                        o = t.popper,
                        n = t.reference,
                        i = e.placement.split('-')[0],
                        r = Z,
                        p = -1 !== ['top', 'bottom'].indexOf(i),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height'; return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e } }, arrow: { order: 500, enabled: !0, fn: function(e, o) { var n; if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) { if (i = e.instance.popper.querySelector(i), !i) return e; } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0],
                        p = e.offsets,
                        s = p.popper,
                        d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width',
                        f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(),
                        h = a ? 'left' : 'top',
                        c = a ? 'bottom' : 'right',
                        u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper); var b = d[m] + d[l] / 2 - u / 2,
                        y = t(e.instance.popper),
                        w = parseFloat(y['margin' + f], 10),
                        E = parseFloat(y['border' + f + 'Width'], 10),
                        v = b - e.offsets.popper[m] - w - E; return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function(e, t) { if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0],
                        i = T(n),
                        r = e.placement.split('-')[1] || '',
                        p = []; switch (t.behavior) {
                        case he.FLIP:
                            p = [n, i]; break;
                        case he.CLOCKWISE:
                            p = z(n); break;
                        case he.COUNTERCLOCKWISE:
                            p = z(n, !0); break;
                        default:
                            p = t.behavior; } return p.forEach(function(s, d) { if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = T(n); var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = Z,
                            m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left),
                            c = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                            y = -1 !== ['top', 'bottom'].indexOf(n),
                            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function(e) { var t = e.placement,
                        o = t.split('-')[0],
                        n = e.offsets,
                        i = n.popper,
                        r = n.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o); return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e } }, hide: { order: 800, enabled: !0, fn: function(e) { if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference,
                        o = D(e.instance.modifiers, function(e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function(e, t) { var o = t.x,
                        n = t.y,
                        i = e.offsets.popper,
                        r = D(e.instance.modifiers, function(e) { return 'applyStyle' === e.name }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === r ? t.gpuAcceleration : r,
                        l = p(e.instance.popper),
                        f = u(l),
                        m = { position: i.position },
                        h = { left: Z(i.left), top: Q(i.top), bottom: Q(i.bottom), right: Z(i.right) },
                        c = 'bottom' === o ? 'top' : 'bottom',
                        g = 'right' === n ? 'left' : 'right',
                        b = B('transform'); if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
                    else { var y = 'bottom' == c ? -1 : 1,
                            w = 'right' == g ? -1 : 1;
                        m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g } var E = { "x-placement": e.placement }; return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function(e) { return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e }, onLoad: function(e, t, o, n, i) { var r = L(i, t, e, o.positionFixed),
                        p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o }, gpuAcceleration: void 0 } } }, ce });
//# sourceMappingURL=popper.min.js.map

/** popper.min.js end **/

/** notification.js start **/
$(document).ready(function() { $(document).on("click", ".view_notification_detail", function() { var e = $(this).attr("data-id"),
            t = $(this).attr("data-href");
        $.ajax({ data: { notification_id: e }, url: NotificationMarkAsReadUrl, beforeSend: function(e) { blockedUI() }, success: function(e) { unblockedUI(), "success" == e.status && (window.location.href = t) } }) }), $(document).on("click", "#deleteNotificationButton", function(e) { var t = [];
        $(".userNotificationCheckBox:checked").each(function() { $(this).is(":checked") && t.push($(this).val()) }), t.length > 0 ? (e.stopImmediatePropagation(), bootbox.confirm({ message: delete_msg, buttons: { confirm: { className: "btn btn-primary" }, cancel: { className: "btn btn-primary btn_theme_blue_color" } }, callback: function(e) { e && $.ajax({ url: delete_messages_url, type: "post", headers: { "X-CSRF-TOKEN": csrf_token }, data: { ids: t }, beforeSend: function() { blockedUI() }, success: function(e) { unblockedUI(), window.location.href = window.location.href } }) } }), e.preventDefault()) : showErrorMessageTopRight(please_select_atleast_one_message) }) });
/** notification.js end **/

/** wow.min.js start **/
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() { var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) { for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1 };
    b = function() {
        function a() {} return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function(a, b, c, d) { var e; return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function(a, b) { return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] } return a.prototype.get = function(a) { var b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function(a, b) { var c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b) }, a }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") } return a.notSupported = !0, a.prototype.observe = function() {}, a }()), d = this.getComputedStyle || function(a, b) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) } return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() { var b, c, d, e; if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() { var a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e)); return d }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function(b) { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.resetAnimation = function(a) { var b; return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) { var c, d, e, f;
            d = []; for (c in b) e = b[c], a["" + c] = e, d.push(function() { var b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e); return h }.call(this)); return d }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b); return g }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e }() }).call(this);
/** wow.min.js end **/

/** jquery.noty.js start **/
function noty(o) { return jQuery.noty(o) }! function(o) { o.noty = function(t, n) { var e = {},
            i = null,
            s = !1; return e.init = function(t) { return e.options = o.extend({}, o.noty.defaultOptions, t), e.options.type = e.options.cssPrefix + e.options.type, e.options.id = e.options.type + "_" + (new Date).getTime(), e.options.layout = e.options.cssPrefix + "layout_" + e.options.layout, e.options.custom.container && (n = e.options.custom.container), s = "object" === o.type(n), e.addQueue() }, e.addQueue = function() { var t = -1 != o.inArray(e.options.layout, o.noty.growls); return t || (e.options.force ? o.noty.queue.unshift({ options: e.options }) : o.noty.queue.push({ options: e.options })), e.render(t) }, e.render = function(t) { var a = s ? n.addClass(e.options.theme + " " + e.options.layout + " noty_custom_container") : o("body"); if (t) 0 == o("ul.noty_cont." + e.options.layout).length && a.prepend(o("<ul/>").addClass("noty_cont " + e.options.layout)), a = o("ul.noty_cont." + e.options.layout);
            else { if (!o.noty.available) return e.options.id; var y = o.noty.queue.shift(); if ("object" !== o.type(y)) return o.noty.available = !0, e.options.id;
                o.noty.available = !1, e.options = y.options } return e.container = a, e.bar = o('<div class="noty_bar"/>').attr("id", e.options.id).addClass(e.options.theme + " " + e.options.layout + " " + e.options.type), (i = e.bar).append(e.options.template).find(".noty_text").html(e.options.text), i.data("noty_options", e.options), e.options.closeButton ? i.addClass("noty_closable").find(".noty_close").show() : i.find(".noty_close").remove(), i.find(".noty_close").bind("click", function() { i.trigger("noty.close") }), e.options.buttons && (e.options.closeOnSelfClick = e.options.closeOnSelfOver = !1), e.options.closeOnSelfClick && i.bind("click", function() { i.trigger("noty.close") }).css("cursor", "pointer"), e.options.closeOnSelfOver && i.bind("mouseover", function() { i.trigger("noty.close") }).css("cursor", "pointer"), e.options.buttons && ($buttons = o("<div/>").addClass("noty_buttons"), i.find(".noty_message").append($buttons), o.each(e.options.buttons, function(t, n) { bclass = n.type ? n.type : "gray", $button = o("<button/>").addClass(bclass).html(n.text).appendTo(i.find(".noty_buttons")).bind("click", function() { o.isFunction(n.click) && n.click.call($button, i) }) })), e.show(t) }, e.show = function(t) { return e.options.modal && o("<div/>").addClass("noty_modal").addClass(e.options.theme).prependTo(o("body")).fadeIn("fast"), i.close = function() { return this.trigger("noty.close") }, t ? e.container.prepend(o("<li/>").append(i)) : e.container.prepend(i), "noty_layout_topCenter" != e.options.layout && "noty_layout_center" != e.options.layout || o.noty.reCenter(i), i.bind("noty.setText", function(t, n) { i.find(".noty_text").html(n), "noty_layout_topCenter" != e.options.layout && "noty_layout_center" != e.options.layout || o.noty.reCenter(i) }), i.bind("noty.setType", function(t, n) { i.removeClass(i.data("noty_options").type), n = i.data("noty_options").cssPrefix + n, i.data("noty_options").type = n, i.addClass(n), "noty_layout_topCenter" != e.options.layout && "noty_layout_center" != e.options.layout || o.noty.reCenter(i) }), i.bind("noty.getId", function(o) { return i.data("noty_options").id }), i.one("noty.close", function(t) { var n = i.data("noty_options");
                n.onClose && n.onClose(), n.modal && o(".noty_modal").fadeOut("fast", function() { o(this).remove() }), i.clearQueue().stop().animate(i.data("noty_options").animateClose, i.data("noty_options").speed, i.data("noty_options").easing, i.data("noty_options").onClosed).promise().done(function() { o.inArray(i.data("noty_options").layout, o.noty.growls) > -1 ? i.parent().remove() : (i.remove(), o.noty.available = !0, e.render(!1)) }) }), e.options.onShow && e.options.onShow(), i.animate(e.options.animateOpen, e.options.speed, e.options.easing, e.options.onShown), e.options.timeout && i.delay(e.options.timeout).promise().done(function() { i.trigger("noty.close") }), e.options.id }, e.init(t) }, o.noty.get = function(t) { return o("#" + t) }, o.noty.close = function(t) { for (var n = 0; n < o.noty.queue.length;) o.noty.queue[n].options.id == t ? o.noty.queue.splice(t, 1) : n++;
        o.noty.get(t).trigger("noty.close") }, o.noty.setText = function(t, n) { o.noty.get(t).trigger("noty.setText", n) }, o.noty.setType = function(t, n) { o.noty.get(t).trigger("noty.setType", n) }, o.noty.closeAll = function() { o.noty.clearQueue(), o(".noty_bar").trigger("noty.close") }, o.noty.reCenter = function(t) { t.css({ left: (o(window).width() - t.outerWidth()) / 2 + "px" }) }, o.noty.clearQueue = function() { o.noty.queue = [] }; var t = window.alert;
    o.noty.consumeAlert = function(t) { window.alert = function(n) { t ? t.text = n : t = { text: n }, o.noty(t) } }, o.noty.stopConsumeAlert = function() { window.alert = t }, o.noty.queue = [], o.noty.growls = ["noty_layout_topLeft", "noty_layout_topRight", "noty_layout_bottomLeft", "noty_layout_bottomRight"], o.noty.available = !0, o.noty.defaultOptions = { layout: "top", theme: "noty_theme_default", animateOpen: { height: "toggle" }, animateClose: { height: "toggle" }, easing: "swing", text: "", type: "alert", speed: 500, timeout: 5e3, closeButton: !1, closeOnSelfClick: !0, closeOnSelfOver: !1, force: !1, onShow: !1, onShown: !1, onClose: !1, onClosed: !1, buttons: !1, modal: !1, template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>', cssPrefix: "noty_", custom: { container: null } }, o.fn.noty = function(t) { return this.each(function() { new o.noty(t, o(this)) }) } }(jQuery);
/** jquery.noty.js end **/

/** bootbox.js start **/
! function(t, o) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], o) : "object" == typeof exports ? module.exports = o(require("jquery")) : t.bootbox = o(t.jQuery) }(this, function t(o, e) { "use strict"; var n = { dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body bggreen'><div class='bootbox-body'></div></div></div></div></div>", header: "<div class='modal-header'><h4 class='modal-title'></h4></div>", footer: "<div class='modal-footer'></div>", closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>", form: "<form class='bootbox-form'></form>", inputs: { text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />", textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>", email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />", select: "<select class='bootbox-input bootbox-input-select form-control'></select>", checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>", date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />", time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />", number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />", password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />" } },
        a = { locale: "en", backdrop: !0, animate: !0, className: null, closeButton: !0, show: !0, container: "body" },
        r = {};

    function l(t) { var o = d[a.locale]; return o ? o[t] : d.en[t] }

    function c(t, e, n) { t.stopPropagation(), t.preventDefault(), o.isFunction(n) && !1 === n(t) || e.modal("hide") }

    function i(t, e) { var n = 0;
        o.each(t, function(t, o) { e(t, o, n++) }) }

    function s(t, e, n) { return o.extend(!0, {}, t, function(t, o) { var e = t.length,
                n = {}; if (e < 1 || e > 2) throw new Error("Invalid argument length"); return 2 === e || "string" == typeof t[0] ? (n[o[0]] = t[0], n[o[1]] = t[1]) : n = t[0], n }(e, n)) }

    function u(t, o, e, n) { return b(s({ className: "bootbox-" + t, buttons: p.apply(null, o) }, n, e), o) }

    function p() { for (var t = {}, o = 0, e = arguments.length; o < e; o++) { var n = arguments[o],
                a = n.toLowerCase(),
                r = n.toUpperCase();
            t[a] = { label: l(r) } } return t }

    function b(t, o) { var n = {}; return i(o, function(t, o) { n[o] = !0 }), i(t.buttons, function(t) { if (n[t] === e) throw new Error("button key " + t + " is not allowed (options are " + o.join("\n") + ")") }), t }
    r.alert = function() { var t; if ((t = u("alert", ["ok"], ["message", "callback"], arguments)).callback && !o.isFunction(t.callback)) throw new Error("alert requires callback property to be a function when provided"); return t.buttons.ok.callback = t.onEscape = function() { return !o.isFunction(t.callback) || t.callback() }, r.dialog(t) }, r.confirm = function() { var t; if ((t = u("confirm", ["cancel", "confirm"], ["message", "callback"], arguments)).buttons.cancel.callback = t.onEscape = function() { return t.callback(!1) }, t.buttons.confirm.callback = function() { return t.callback(!0) }, !o.isFunction(t.callback)) throw new Error("confirm requires a callback"); return r.dialog(t) }, r.prompt = function() { var t, a, l, c, u, d, f; if (c = o(n.form), a = { className: "bootbox-prompt", buttons: p("cancel", "confirm"), value: "", inputType: "text" }, d = (t = b(s(a, arguments, ["title", "callback"]), ["cancel", "confirm"])).show === e || t.show, t.message = c, t.buttons.cancel.callback = t.onEscape = function() { return t.callback(null) }, t.buttons.confirm.callback = function() { var e; switch (t.inputType) {
                    case "text":
                    case "textarea":
                    case "email":
                    case "select":
                    case "date":
                    case "time":
                    case "number":
                    case "password":
                        e = u.val(); break;
                    case "checkbox":
                        var n = u.find("input:checked");
                        e = [], i(n, function(t, n) { e.push(o(n).val()) }) } return t.callback(e) }, t.show = !1, !t.title) throw new Error("prompt requires a title"); if (!o.isFunction(t.callback)) throw new Error("prompt requires a callback"); if (!n.inputs[t.inputType]) throw new Error("invalid prompt type"); switch (u = o(n.inputs[t.inputType]), t.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                u.val(t.value); break;
            case "select":
                var m = {}; if (!(f = t.inputOptions || []).length) throw new Error("prompt with select requires options");
                i(f, function(t, n) { var a = u; if (n.value === e || n.text === e) throw new Error("given options in wrong format");
                    n.group && (m[n.group] || (m[n.group] = o("<optgroup/>").attr("label", n.group)), a = m[n.group]), a.append("<option value='" + n.value + "'>" + n.text + "</option>") }), i(m, function(t, o) { u.append(o) }), u.val(t.value); break;
            case "checkbox":
                var C = o.isArray(t.value) ? t.value : [t.value]; if (!(f = t.inputOptions || []).length) throw new Error("prompt with checkbox requires options"); if (!f[0].value || !f[0].text) throw new Error("given options in wrong format");
                u = o("<div/>"), i(f, function(e, a) { var r = o(n.inputs[t.inputType]);
                    r.find("input").attr("value", a.value), r.find("label").append(a.text), i(C, function(t, o) { o === a.value && r.find("input").prop("checked", !0) }), u.append(r) }) } return t.placeholder && u.attr("placeholder", t.placeholder), t.pattern && u.attr("pattern", t.pattern), c.append(u), c.on("submit", function(t) { t.preventDefault(), t.stopPropagation(), l.find(".btn-primary").click() }), (l = r.dialog(t)).off("shown.bs.modal"), l.on("shown.bs.modal", function() { u.focus() }), !0 === d && l.modal("show"), l }, r.dialog = function(t) { t = function(t) { var e, n; if ("object" != typeof t) throw new Error("Please supply an object of options"); if (!t.message) throw new Error("Please specify a message"); return (t = o.extend({}, a, t)).buttons || (t.buttons = {}), t.backdrop = !!t.backdrop && "static", e = t.buttons, n = function(t) { var o, e = 0; for (o in t) e++; return e }(e), i(e, function(t, a, r) { if (o.isFunction(a) && (a = e[t] = { callback: a }), "object" !== o.type(a)) throw new Error("button with key " + t + " must be an object");
                a.label || (a.label = t), a.className || (a.className = n <= 2 && r === n - 1 ? "btn-danger" : "btn-default ml5") }), t }(t); var e = o(n.dialog),
            r = e.find(".modal-dialog"),
            l = e.find(".modal-body"),
            s = t.buttons,
            u = "",
            p = { onEscape: t.onEscape }; if (i(s, function(t, o) { u += "<button data-bb-handler='" + t + "' type='button' class='btn " + o.className + "'>" + o.label + "</button>", p[t] = o.callback }), l.find(".bootbox-body").html(t.message), !0 === t.animate && e.addClass("fade"), t.className && e.addClass(t.className), "large" === t.size && r.addClass("modal-lg"), "small" === t.size && r.addClass("modal-sm"), t.title && l.before(n.header), t.closeButton) { var b = o(n.closeButton);
            t.title ? e.find(".modal-header").prepend(b) : b.css("margin-top", "-10px").prependTo(l) } return t.title && e.find(".modal-title").html(t.title), u.length && (l.after(n.footer), e.find(".modal-footer").html(u)), e.on("hidden.bs.modal", function(t) { t.target === this && e.remove() }), e.on("shown.bs.modal", function() { e.find(".btn-primary:first").focus() }), e.on("escape.close.bb", function(t) { p.onEscape && c(t, e, p.onEscape) }), e.on("click", ".modal-footer button", function(t) { var n = o(this).data("bb-handler");
            c(t, e, p[n]) }), e.on("click", ".bootbox-close-button", function(t) { c(t, e, p.onEscape) }), e.on("keyup", function(t) { 27 === t.which && e.trigger("escape.close.bb") }), o(t.container).append(e), e.modal({ backdrop: t.backdrop, keyboard: !1, show: !1 }), t.show && e.modal("show"), e }, r.setDefaults = function() { var t = {};
        2 === arguments.length ? t[arguments[0]] = arguments[1] : t = arguments[0], o.extend(a, t) }, r.hideAll = function() { return o(".bootbox").modal("hide"), r }; var d = { br: { OK: "OK", CANCEL: "Cancelar", CONFIRM: "Sim" }, cs: { OK: "OK", CANCEL: "Zrušit", CONFIRM: "Potvrdit" }, da: { OK: "OK", CANCEL: "Annuller", CONFIRM: "Accepter" }, de: { OK: "OK", CANCEL: "Abbrechen", CONFIRM: "Akzeptieren" }, el: { OK: "Εντάξει", CANCEL: "Ακύρωση", CONFIRM: "Επιβεβαίωση" }, en: { OK: "OK", CANCEL: "Cancel", CONFIRM: "OK" }, es: { OK: "OK", CANCEL: "Cancelar", CONFIRM: "Aceptar" }, et: { OK: "OK", CANCEL: "Katkesta", CONFIRM: "OK" }, fi: { OK: "OK", CANCEL: "Peruuta", CONFIRM: "OK" }, fr: { OK: "OK", CANCEL: "Annuler", CONFIRM: "D'accord" }, he: { OK: "אישור", CANCEL: "ביטול", CONFIRM: "אישור" }, id: { OK: "OK", CANCEL: "Batal", CONFIRM: "OK" }, it: { OK: "OK", CANCEL: "Annulla", CONFIRM: "Conferma" }, ja: { OK: "OK", CANCEL: "キャンセル", CONFIRM: "確認" }, lt: { OK: "Gerai", CANCEL: "Atšaukti", CONFIRM: "Patvirtinti" }, lv: { OK: "Labi", CANCEL: "Atcelt", CONFIRM: "Apstiprināt" }, nl: { OK: "OK", CANCEL: "Annuleren", CONFIRM: "Accepteren" }, no: { OK: "OK", CANCEL: "Avbryt", CONFIRM: "OK" }, pl: { OK: "OK", CANCEL: "Anuluj", CONFIRM: "Potwierdź" }, pt: { OK: "OK", CANCEL: "Cancelar", CONFIRM: "Confirmar" }, ru: { OK: "OK", CANCEL: "Отмена", CONFIRM: "Применить" }, sv: { OK: "OK", CANCEL: "Avbryt", CONFIRM: "OK" }, tr: { OK: "Tamam", CANCEL: "İptal", CONFIRM: "Onayla" }, zh_CN: { OK: "OK", CANCEL: "取消", CONFIRM: "确认" }, zh_TW: { OK: "OK", CANCEL: "取消", CONFIRM: "確認" } }; return r.init = function(e) { return t(e || o) }, r });
/** bootbox.js end **/

/** FormValidation/formValidation.js start **/
if (window.FormValidation = { AddOn: {}, Framework: {}, I18n: {}, Validator: {} }, "undefined" == typeof jQuery) throw new Error("FormValidation requires jQuery");
! function(t) { var e = jQuery.fn.jquery.split(" ")[0].split("."); if (+e[0] < 2 && +e[1] < 9 || 1 == +e[0] && 9 == +e[1] && +e[2] < 1) throw new Error("FormValidation requires jQuery version 1.9.1 or higher") }(),
function(t) { FormValidation.Base = function(e, a, i) { this.$form = t(e), this.options = t.extend({}, t.fn.formValidation.DEFAULT_OPTIONS, a), this._namespace = i || "fv", this.$invalidFields = t([]), this.$submitButton = null, this.$hiddenButton = null, this.STATUS_NOT_VALIDATED = "NOT_VALIDATED", this.STATUS_VALIDATING = "VALIDATING", this.STATUS_INVALID = "INVALID", this.STATUS_VALID = "VALID", this.STATUS_IGNORED = "IGNORED"; var r = function() { for (var t = 3, e = document.createElement("div"), a = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><br><![endif]--\x3e", a[0];); return t > 4 ? t : !t }(),
            n = document.createElement("div");
        this._changeEvent = 9 !== r && "oninput" in n ? "input" : "keyup", this._submitIfValid = null, this._cacheFields = {}, this._init() }, FormValidation.Base.prototype = { constructor: FormValidation.Base, _exceedThreshold: function(e) { var a = this._namespace,
                i = e.attr("data-" + a + "-field"),
                r = this.options.fields[i].threshold || this.options.threshold; return !r || (-1 !== t.inArray(e.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]) || e.val().length >= r) }, _init: function() { var e = this,
                a = this._namespace,
                i = { addOns: {}, autoFocus: this.$form.attr("data-" + a + "-autofocus"), button: { selector: this.$form.attr("data-" + a + "-button-selector") || this.$form.attr("data-" + a + "-submitbuttons"), disabled: this.$form.attr("data-" + a + "-button-disabled") }, control: { valid: this.$form.attr("data-" + a + "-control-valid"), invalid: this.$form.attr("data-" + a + "-control-invalid") }, err: { clazz: this.$form.attr("data-" + a + "-err-clazz"), container: this.$form.attr("data-" + a + "-err-container") || this.$form.attr("data-" + a + "-container"), parent: this.$form.attr("data-" + a + "-err-parent") }, events: { formInit: this.$form.attr("data-" + a + "-events-form-init"), formError: this.$form.attr("data-" + a + "-events-form-error"), formSuccess: this.$form.attr("data-" + a + "-events-form-success"), fieldAdded: this.$form.attr("data-" + a + "-events-field-added"), fieldRemoved: this.$form.attr("data-" + a + "-events-field-removed"), fieldInit: this.$form.attr("data-" + a + "-events-field-init"), fieldError: this.$form.attr("data-" + a + "-events-field-error"), fieldSuccess: this.$form.attr("data-" + a + "-events-field-success"), fieldStatus: this.$form.attr("data-" + a + "-events-field-status"), localeChanged: this.$form.attr("data-" + a + "-events-locale-changed"), validatorError: this.$form.attr("data-" + a + "-events-validator-error"), validatorSuccess: this.$form.attr("data-" + a + "-events-validator-success"), validatorIgnored: this.$form.attr("data-" + a + "-events-validator-ignored") }, excluded: this.$form.attr("data-" + a + "-excluded"), icon: { valid: this.$form.attr("data-" + a + "-icon-valid") || this.$form.attr("data-" + a + "-feedbackicons-valid"), invalid: this.$form.attr("data-" + a + "-icon-invalid") || this.$form.attr("data-" + a + "-feedbackicons-invalid"), validating: this.$form.attr("data-" + a + "-icon-validating") || this.$form.attr("data-" + a + "-feedbackicons-validating"), feedback: this.$form.attr("data-" + a + "-icon-feedback") }, live: this.$form.attr("data-" + a + "-live"), locale: this.$form.attr("data-" + a + "-locale"), message: this.$form.attr("data-" + a + "-message"), onError: this.$form.attr("data-" + a + "-onerror"), onSuccess: this.$form.attr("data-" + a + "-onsuccess"), row: { selector: this.$form.attr("data-" + a + "-row-selector") || this.$form.attr("data-" + a + "-group"), valid: this.$form.attr("data-" + a + "-row-valid"), invalid: this.$form.attr("data-" + a + "-row-invalid"), feedback: this.$form.attr("data-" + a + "-row-feedback") }, threshold: this.$form.attr("data-" + a + "-threshold"), trigger: this.$form.attr("data-" + a + "-trigger"), verbose: this.$form.attr("data-" + a + "-verbose"), fields: {} }; for (var r in this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit." + a, function(t) { t.preventDefault(), e.validate() }).on("click." + a, this.options.button.selector, function() { e.$submitButton = t(this), e._submitIfValid = !0 }), !0 !== this.options.declarative && "true" !== this.options.declarative || this.$form.find("[name], [data-" + a + "-field]").each(function() { var r = t(this),
                        n = r.attr("name") || r.attr("data-" + a + "-field"),
                        s = e._parseOptions(r);
                    s && (r.attr("data-" + a + "-field", n), i.fields[n] = t.extend({}, s, i.fields[n])) }), this.options = t.extend(!0, this.options, i), "string" == typeof this.options.err.parent && (this.options.err.parent = new RegExp(this.options.err.parent)), this.options.container && (this.options.err.container = this.options.container, delete this.options.container), this.options.feedbackIcons && (this.options.icon = t.extend(!0, this.options.icon, this.options.feedbackIcons), delete this.options.feedbackIcons), this.options.group && (this.options.row.selector = this.options.group, delete this.options.group), this.options.submitButtons && (this.options.button.selector = this.options.submitButtons, delete this.options.submitButtons), FormValidation.I18n[this.options.locale] || (this.options.locale = t.fn.formValidation.DEFAULT_OPTIONS.locale), !0 !== this.options.declarative && "true" !== this.options.declarative || (this.options = t.extend(!0, this.options, { addOns: this._parseAddOnOptions() })), this.$hiddenButton = t("<button/>").attr("type", "submit").prependTo(this.$form).addClass("fv-hidden-submit").css({ display: "none", width: 0, height: 0 }), this.$form.on("click." + this._namespace, '[type="submit"]', function(a) { if (!a.isDefaultPrevented()) { var i = t(a.target),
                            r = i.is('[type="submit"]') ? i.eq(0) : i.parent('[type="submit"]').eq(0);!e.options.button.selector || r.is(e.options.button.selector) || r.is(e.$hiddenButton) || e.$form.off("submit." + e._namespace).submit() } }), this.options.fields) this._initField(r); for (var n in this.options.addOns) "function" == typeof FormValidation.AddOn[n].init && FormValidation.AddOn[n].init(this, this.options.addOns[n]);
            this.$form.trigger(t.Event(this.options.events.formInit), { bv: this, fv: this, options: this.options }), this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(t) { FormValidation.Helper.call(e.options.onSuccess, [t]) }), this.options.onError && this.$form.on(this.options.events.formError, function(t) { FormValidation.Helper.call(e.options.onError, [t]) }) }, _initField: function(e) { var a = this._namespace,
                i = t([]); switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-" + a + "-field"); break;
                case "string":
                    (i = this.getFieldElements(e)).attr("data-" + a + "-field", e) } if (0 !== i.length && null !== this.options.fields[e] && null !== this.options.fields[e].validators) { var r; for (r in this.options.fields[e].validators) FormValidation.Validator[r] || delete this.options.fields[e].validators[r];
                null === this.options.fields[e].enabled && (this.options.fields[e].enabled = !0); for (var n = this, s = i.length, o = i.attr("type"), l = 1 === s || "radio" === o || "checkbox" === o, d = this._getFieldTrigger(i.eq(0)), u = t.map(d, function(t) { return t + ".update." + a }).join(" "), f = 0; f < s; f++) { var c = i.eq(f),
                        h = this.options.fields[e].row || this.options.row.selector,
                        m = c.closest(h),
                        p = "function" == typeof(this.options.fields[e].container || this.options.fields[e].err || this.options.err.container) ? (this.options.fields[e].container || this.options.fields[e].err || this.options.err.container).call(this, c, this) : this.options.fields[e].container || this.options.fields[e].err || this.options.err.container,
                        v = p && "tooltip" !== p && "popover" !== p ? t(p) : this._getMessageContainer(c, h); for (r in p && "tooltip" !== p && "popover" !== p && v.addClass(this.options.err.clazz), v.find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + a + "-validator][data-" + a + '-for="' + e + '"]').remove(), m.find("i[data-" + a + '-icon-for="' + e + '"]').remove(), c.off(u).on(u, function() { n.updateStatus(t(this), n.STATUS_NOT_VALIDATED) }), c.data(a + ".messages", v), this.options.fields[e].validators) c.data(a + ".result." + r, this.STATUS_NOT_VALIDATED), l && f !== s - 1 || t("<small/>").css("display", "none").addClass(this.options.err.clazz).attr("data-" + a + "-validator", r).attr("data-" + a + "-for", e).attr("data-" + a + "-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(e, r)).appendTo(v), "function" == typeof FormValidation.Validator[r].init && FormValidation.Validator[r].init(this, c, this.options.fields[e].validators[r]); if (!1 !== this.options.fields[e].icon && "false" !== this.options.fields[e].icon && this.options.icon && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating && (!l || f === s - 1)) { m.addClass(this.options.row.feedback); var g = t("<i/>").css("display", "none").addClass(this.options.icon.feedback).attr("data-" + a + "-icon-for", e).insertAfter(c);
                        (l ? i : c).data(a + ".icon", g), "tooltip" !== p && "popover" !== p || ((l ? i : c).on(this.options.events.fieldError, function() { m.addClass("fv-has-tooltip") }).on(this.options.events.fieldSuccess, function() { m.removeClass("fv-has-tooltip") }), c.off("focus.container." + a).on("focus.container." + a, function() { n._showTooltip(c, p) }).off("blur.container." + a).on("blur.container." + a, function() { n._hideTooltip(c, p) })), "string" == typeof this.options.fields[e].icon && "true" !== this.options.fields[e].icon ? g.appendTo(t(this.options.fields[e].icon)) : this._fixIcon(c, g) } }
                i.on(this.options.events.fieldSuccess, function(t, e) { var a = n.getOptions(e.field, null, "onSuccess");
                    a && FormValidation.Helper.call(a, [t, e]) }).on(this.options.events.fieldError, function(t, e) { var a = n.getOptions(e.field, null, "onError");
                    a && FormValidation.Helper.call(a, [t, e]) }).on(this.options.events.fieldStatus, function(t, e) { var a = n.getOptions(e.field, null, "onStatus");
                    a && FormValidation.Helper.call(a, [t, e]) }).on(this.options.events.validatorError, function(t, e) { var a = n.getOptions(e.field, e.validator, "onError");
                    a && FormValidation.Helper.call(a, [t, e]) }).on(this.options.events.validatorSuccess, function(t, e) { var a = n.getOptions(e.field, e.validator, "onSuccess");
                    a && FormValidation.Helper.call(a, [t, e]) }), this.onLiveChange(i, "live", function() { n._exceedThreshold(t(this)) && n.validateField(t(this)) }), i.trigger(t.Event(this.options.events.fieldInit), { bv: this, fv: this, field: e, element: i }) } }, _isExcluded: function(e) { var a = this._namespace,
                i = e.attr("data-" + a + "-excluded"),
                r = e.attr("data-" + a + "-field") || e.attr("name"); switch (!0) {
                case !!r && this.options.fields && this.options.fields[r] && ("true" === this.options.fields[r].excluded || !0 === this.options.fields[r].excluded):
                case "true" === i:
                case "" === i:
                    return !0;
                case !!r && this.options.fields && this.options.fields[r] && ("false" === this.options.fields[r].excluded || !1 === this.options.fields[r].excluded):
                case "false" === i:
                    return !1;
                case !!r && this.options.fields && this.options.fields[r] && "function" == typeof this.options.fields[r].excluded:
                    return this.options.fields[r].excluded.call(this, e, this);
                case !!r && this.options.fields && this.options.fields[r] && "string" == typeof this.options.fields[r].excluded:
                case i:
                    return FormValidation.Helper.call(this.options.fields[r].excluded, [e, this]);
                default:
                    if (this.options.excluded) { "string" == typeof this.options.excluded && (this.options.excluded = t.map(this.options.excluded.split(","), function(e) { return t.trim(e) })); for (var n = this.options.excluded.length, s = 0; s < n; s++)
                            if ("string" == typeof this.options.excluded[s] && e.is(this.options.excluded[s]) || "function" == typeof this.options.excluded[s] && !0 === this.options.excluded[s].call(this, e, this)) return !0 } return !1 } }, _getFieldTrigger: function(t) { var e = this._namespace,
                a = t.data(e + ".trigger"); if (a) return a; var i = t.attr("type"),
                r = t.attr("data-" + e + "-field"),
                n = "radio" === i || "checkbox" === i || "file" === i || "SELECT" === t.get(0).tagName ? "change" : this._changeEvent; return a = ((this.options.fields[r] ? this.options.fields[r].trigger : null) || this.options.trigger || n).split(" "), t.data(e + ".trigger", a), a }, _getMessage: function(t, e) { if (!(this.options.fields[t] && FormValidation.Validator[e] && this.options.fields[t].validators && this.options.fields[t].validators[e])) return ""; switch (!0) {
                case !!this.options.fields[t].validators[e].message:
                    return this.options.fields[t].validators[e].message;
                case !!this.options.fields[t].message:
                    return this.options.fields[t].message;
                case !!FormValidation.I18n[this.options.locale] && !!FormValidation.I18n[this.options.locale][e] && !!FormValidation.I18n[this.options.locale][e].default:
                    return FormValidation.I18n[this.options.locale][e].default;
                default:
                    return this.options.message } }, _getMessageContainer: function(t, e) { if (!this.options.err.parent) throw new Error("The err.parent option is not defined"); var a = t.parent(); if (a.is(e)) return a; var i = a.attr("class"); return i && this.options.err.parent.test(i) ? a : this._getMessageContainer(a, e) }, _parseAddOnOptions: function() { var t, e, a, i, r = this._namespace,
                n = this.$form.attr("data-" + r + "-addons"),
                s = this.options.addOns || {}; if (n) { n = n.replace(/\s/g, "").split(","); for (var o = 0; o < n.length; o++) s[n[o]] || (s[n[o]] = {}) } for (t in s)
                if (FormValidation.AddOn[t]) { if (e = FormValidation.AddOn[t].html5Attributes)
                        for (a in e)(i = this.$form.attr("data-" + r + "-addons-" + t.toLowerCase() + "-" + a.toLowerCase())) && (s[t][e[a]] = i) } else delete s[t];
            return s }, _parseOptions: function(e) { var a, i, r, n, s, o, l, d, u, f = this._namespace,
                c = e.attr("name") || e.attr("data-" + f + "-field"),
                h = {}; for (i in FormValidation.Validator)
                if (a = FormValidation.Validator[i], r = "data-" + f + "-" + i.toLowerCase(), n = e.attr(r) + "", (u = "function" == typeof a.enableByHtml5 ? a.enableByHtml5(e) : null) && "false" !== n || !0 !== u && ("" === n || "true" === n || r === n.toLowerCase()))
                    for (d in a.html5Attributes = t.extend({}, { message: "message", onerror: "onError", onsuccess: "onSuccess", transformer: "transformer" }, a.html5Attributes), h[i] = t.extend({}, !0 === u ? {} : u, h[i]), a.html5Attributes) s = a.html5Attributes[d], o = "data-" + f + "-" + i.toLowerCase() + "-" + d, (l = e.attr(o)) && ("true" === l || o === l.toLowerCase() ? l = !0 : "false" === l && (l = !1), h[i][s] = l);
            var m = { autoFocus: e.attr("data-" + f + "-autofocus"), err: e.attr("data-" + f + "-err-container") || e.attr("data-" + f + "-container"), excluded: e.attr("data-" + f + "-excluded"), icon: e.attr("data-" + f + "-icon") || e.attr("data-" + f + "-feedbackicons") || (this.options.fields && this.options.fields[c] ? this.options.fields[c].feedbackIcons : null), message: e.attr("data-" + f + "-message"), onError: e.attr("data-" + f + "-onerror"), onStatus: e.attr("data-" + f + "-onstatus"), onSuccess: e.attr("data-" + f + "-onsuccess"), row: e.attr("data-" + f + "-row") || e.attr("data-" + f + "-group") || (this.options.fields && this.options.fields[c] ? this.options.fields[c].group : null), selector: e.attr("data-" + f + "-selector"), threshold: e.attr("data-" + f + "-threshold"), transformer: e.attr("data-" + f + "-transformer"), trigger: e.attr("data-" + f + "-trigger"), verbose: e.attr("data-" + f + "-verbose"), validators: h },
                p = t.isEmptyObject(m); return !t.isEmptyObject(h) || !p && this.options.fields && this.options.fields[c] ? (m.validators = h, m) : null }, _submit: function() { var e = this.isValid(); if (null !== e) { var a = e ? this.options.events.formSuccess : this.options.events.formError,
                    i = t.Event(a);
                this.$form.trigger(i), this.$submitButton && (e ? this._onSuccess(i) : this._onError(i)) } }, _onError: function(e) { if (!e.isDefaultPrevented()) { if ("submitted" === this.options.live) { this.options.live = "enabled"; var a = this; for (var i in this.options.fields) r = i, n = void 0, (n = a.getFieldElements(r)).length && a.onLiveChange(n, "live", function() { a._exceedThreshold(t(this)) && a.validateField(t(this)) }) } for (var r, n, s = this._namespace, o = 0; o < this.$invalidFields.length; o++) { var l = this.$invalidFields.eq(o); if (this.isOptionEnabled(l.attr("data-" + s + "-field"), "autoFocus")) { l.focus(); break } } } }, _onFieldValidated: function(e, a) { var i = this._namespace,
                r = e.attr("data-" + i + "-field"),
                n = this.options.fields[r].validators,
                s = {},
                o = 0,
                l = { bv: this, fv: this, field: r, element: e, validator: a, result: e.data(i + ".response." + a) }; if (a) switch (e.data(i + ".result." + a)) {
                case this.STATUS_INVALID:
                    e.trigger(t.Event(this.options.events.validatorError), l); break;
                case this.STATUS_VALID:
                    e.trigger(t.Event(this.options.events.validatorSuccess), l); break;
                case this.STATUS_IGNORED:
                    e.trigger(t.Event(this.options.events.validatorIgnored), l) }
            for (var d in s[this.STATUS_NOT_VALIDATED] = 0, s[this.STATUS_VALIDATING] = 0, s[this.STATUS_INVALID] = 0, s[this.STATUS_VALID] = 0, s[this.STATUS_IGNORED] = 0, n)
                if (!1 !== n[d].enabled) { o++; var u = e.data(i + ".result." + d);
                    u && s[u]++ }
            s[this.STATUS_VALID] + s[this.STATUS_IGNORED] === o ? (this.$invalidFields = this.$invalidFields.not(e), e.trigger(t.Event(this.options.events.fieldSuccess), l)) : (0 === s[this.STATUS_NOT_VALIDATED] || !this.isOptionEnabled(r, "verbose")) && 0 === s[this.STATUS_VALIDATING] && s[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(e), e.trigger(t.Event(this.options.events.fieldError), l)) }, _onSuccess: function(t) { t.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit() }, _fixIcon: function(t, e) {}, _createTooltip: function(t, e, a) {}, _destroyTooltip: function(t, e) {}, _hideTooltip: function(t, e) {}, _showTooltip: function(t, e) {}, defaultSubmit: function() { var e = this._namespace;
            this.$submitButton && t("<input/>").attr({ type: "hidden", name: this.$submitButton.attr("name") }).attr("data-" + e + "-submit-hidden", "").val(this.$submitButton.val()).appendTo(this.$form), this.$form.off("submit." + e).submit() }, disableSubmitButtons: function(t) { return t ? "disabled" !== this.options.live && this.$form.find(this.options.button.selector).attr("disabled", "disabled").addClass(this.options.button.disabled) : this.$form.find(this.options.button.selector).removeAttr("disabled").removeClass(this.options.button.disabled), this }, getFieldElements: function(e) { if (!this._cacheFields[e])
                if (this.options.fields[e] && this.options.fields[e].selector) { var a = this.$form.find(this.options.fields[e].selector);
                    this._cacheFields[e] = a.length ? a : t(this.options.fields[e].selector) } else this._cacheFields[e] = this.$form.find('[name="' + e + '"]');
            return this._cacheFields[e] }, getFieldValue: function(t, e) { var a, i = this._namespace; if ("string" == typeof t) { if (0 === (a = this.getFieldElements(t)).length) return null } else t = (a = t).attr("data-" + i + "-field"); if (!t || !this.options.fields[t]) return a.val(); var r = (this.options.fields[t].validators && this.options.fields[t].validators[e] ? this.options.fields[t].validators[e].transformer : null) || this.options.fields[t].transformer; return r ? FormValidation.Helper.call(r, [a, e, this]) : a.val() }, getNamespace: function() { return this._namespace }, getOptions: function(t, e, a) { var i = this._namespace; if (!t) return a ? this.options[a] : this.options; if ("object" == typeof t && (t = t.attr("data-" + i + "-field")), !this.options.fields[t]) return null; var r = this.options.fields[t]; return e ? r.validators && r.validators[e] ? a ? r.validators[e][a] : r.validators[e] : null : a ? r[a] : r }, getStatus: function(t, e) { var a = this._namespace; switch (typeof t) {
                case "object":
                    return t.data(a + ".result." + e);
                case "string":
                default:
                    return this.getFieldElements(t).eq(0).data(a + ".result." + e) } }, isOptionEnabled: function(t, e) { return !(!this.options.fields[t] || "true" !== this.options.fields[t][e] && !0 !== this.options.fields[t][e]) || (!this.options.fields[t] || "false" !== this.options.fields[t][e] && !1 !== this.options.fields[t][e]) && ("true" === this.options[e] || !0 === this.options[e]) }, isValid: function() { for (var t in this.options.fields) { var e = this.isValidField(t); if (null === e) return null; if (!1 === e) return !1 } return !0 }, isValidContainer: function(e) { var a = this,
                i = this._namespace,
                r = [],
                n = "string" == typeof e ? t(e) : e; if (0 === n.length) return !0;
            n.find("[data-" + i + "-field]").each(function() { var e = t(this);
                a._isExcluded(e) || r.push(e) }); for (var s = r.length, o = 0; o < s; o++) { var l = r[o],
                    d = l.attr("data-" + i + "-field"),
                    u = l.data(i + ".messages").find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + i + "-validator][data-" + i + '-for="' + d + '"]'); if (u.filter("[data-" + i + '-result="' + this.STATUS_INVALID + '"]').length > 0) return !1; if (u.filter("[data-" + i + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0 || u.filter("[data-" + i + '-result="' + this.STATUS_VALIDATING + '"]').length > 0) return null } return !0 }, isValidField: function(e) { var a = this._namespace,
                i = t([]); switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-" + a + "-field"); break;
                case "string":
                    i = this.getFieldElements(e) } if (0 === i.length || !this.options.fields[e] || !1 === this.options.fields[e].enabled) return !0; for (var r, n, s, o = i.attr("type"), l = "radio" === o || "checkbox" === o ? 1 : i.length, d = 0; d < l; d++)
                if (r = i.eq(d), !this._isExcluded(r))
                    for (n in this.options.fields[e].validators)
                        if (!1 !== this.options.fields[e].validators[n].enabled) { if ((s = r.data(a + ".result." + n)) === this.STATUS_VALIDATING || s === this.STATUS_NOT_VALIDATED) return null; if (s === this.STATUS_INVALID) return !1 }
            return !0 }, offLiveChange: function(e, a) { if (null === e || 0 === e.length) return this; var i = this._namespace,
                r = this._getFieldTrigger(e.eq(0)),
                n = t.map(r, function(t) { return t + "." + a + "." + i }).join(" "); return e.off(n), this }, onLiveChange: function(e, a, i) { if (null === e || 0 === e.length) return this; var r = this._namespace,
                n = this._getFieldTrigger(e.eq(0)),
                s = t.map(n, function(t) { return t + "." + a + "." + r }).join(" "); switch (this.options.live) {
                case "submitted":
                    break;
                case "disabled":
                    e.off(s); break;
                case "enabled":
                default:
                    e.off(s).on(s, function(t) { i.apply(this, arguments) }) } return this }, updateMessage: function(e, a, i) { var r = this,
                n = this._namespace,
                s = t([]); switch (typeof e) {
                case "object":
                    s = e, e = e.attr("data-" + n + "-field"); break;
                case "string":
                    s = this.getFieldElements(e) } return s.each(function() { t(this).data(n + ".messages").find("." + r.options.err.clazz + "[data-" + n + '-validator="' + a + '"][data-' + n + '-for="' + e + '"]').html(i) }), this }, updateStatus: function(e, a, i) { var r = this._namespace,
                n = t([]); switch (typeof e) {
                case "object":
                    n = e, e = e.attr("data-" + r + "-field"); break;
                case "string":
                    n = this.getFieldElements(e) } if (!e || !this.options.fields[e]) return this;
            a === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1); for (var s = n.attr("type"), o = this.options.fields[e].row || this.options.row.selector, l = "radio" === s || "checkbox" === s ? 1 : n.length, d = 0; d < l; d++) { var u = n.eq(d); if (!this._isExcluded(u)) { var f, c, h = u.closest(o),
                        m = u.data(r + ".messages").find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + r + "-validator][data-" + r + '-for="' + e + '"]'),
                        p = i ? m.filter("[data-" + r + '-validator="' + i + '"]') : m,
                        v = u.data(r + ".icon"),
                        g = "function" == typeof(this.options.fields[e].container || this.options.fields[e].err || this.options.err.container) ? (this.options.fields[e].container || this.options.fields[e].err || this.options.err.container).call(this, u, this) : this.options.fields[e].container || this.options.fields[e].err || this.options.err.container,
                        A = null; if (i) u.data(r + ".result." + i, a);
                    else
                        for (var b in this.options.fields[e].validators) u.data(r + ".result." + b, a); switch (p.attr("data-" + r + "-result", a), a) {
                        case this.STATUS_VALIDATING:
                            A = null, this.disableSubmitButtons(!0), u.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), h.removeClass(this.options.row.valid).removeClass(this.options.row.invalid), v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show(); break;
                        case this.STATUS_INVALID:
                            A = !1, this.disableSubmitButtons(!0), u.removeClass(this.options.control.valid).addClass(this.options.control.invalid), h.removeClass(this.options.row.valid).addClass(this.options.row.invalid), v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show(); break;
                        case this.STATUS_VALID:
                        case this.STATUS_IGNORED:
                            f = m.filter("[data-" + r + '-result="' + this.STATUS_VALIDATING + '"]').length > 0, c = m.filter("[data-" + r + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0, A = f || c ? null : m.filter("[data-" + r + '-result="' + this.STATUS_VALID + '"]').length + m.filter("[data-" + r + '-result="' + this.STATUS_IGNORED + '"]').length === m.length, u.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), !0 === A ? (this.disableSubmitButtons(!1 === this.isValid()), a === this.STATUS_VALID && u.addClass(this.options.control.valid)) : !1 === A && (this.disableSubmitButtons(!0), a === this.STATUS_VALID && u.addClass(this.options.control.invalid)), v && (v.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid), a === this.STATUS_VALID && v.addClass(null === A ? "" : A ? this.options.icon.valid : f ? this.options.icon.validating : this.options.icon.invalid).show()); var I = this.isValidContainer(h);
                            null !== I && (h.removeClass(this.options.row.valid).removeClass(this.options.row.invalid), (a === this.STATUS_VALID || m.length > 1) && h.addClass(I ? this.options.row.valid : this.options.row.invalid)); break;
                        case this.STATUS_NOT_VALIDATED:
                        default:
                            A = null, this.disableSubmitButtons(!1), u.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), h.removeClass(this.options.row.valid).removeClass(this.options.row.invalid), v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide() }!v || "tooltip" !== g && "popover" !== g ? a === this.STATUS_INVALID ? p.show() : p.hide() : !1 === A ? this._createTooltip(u, m.filter("[data-" + r + '-result="' + this.STATUS_INVALID + '"]').eq(0).html(), g) : this._destroyTooltip(u, g), u.trigger(t.Event(this.options.events.fieldStatus), { bv: this, fv: this, field: e, element: u, status: a }), this._onFieldValidated(u, i) } } return this }, validate: function() { if (t.isEmptyObject(this.options.fields)) return this._submit(), this; for (var e in this.disableSubmitButtons(!0), this._submitIfValid = !1, this.options.fields) this.validateField(e); return this._submit(), this._submitIfValid = !0, this }, validateField: function(e) { var a = this._namespace,
                i = t([]); switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-" + a + "-field"); break;
                case "string":
                    i = this.getFieldElements(e) } if (0 === i.length || !this.options.fields[e] || !1 === this.options.fields[e].enabled) return this; for (var r, n, s = this, o = i.attr("type"), l = "radio" === o || "checkbox" === o ? 1 : i.length, d = "radio" === o || "checkbox" === o, u = this.options.fields[e].validators, f = this.isOptionEnabled(e, "verbose"), c = 0; c < l; c++) { var h = i.eq(c); if (!this._isExcluded(h)) { var m = !1; for (r in u) { if (h.data(a + ".dfs." + r) && h.data(a + ".dfs." + r).reject(), m) break; var p = h.data(a + ".result." + r); if (p !== this.STATUS_VALID && p !== this.STATUS_INVALID)
                            if (!1 !== u[r].enabled)
                                if (h.data(a + ".result." + r, this.STATUS_VALIDATING), "object" == typeof(n = FormValidation.Validator[r].validate(this, h, u[r])) && n.resolve) this.updateStatus(d ? e : h, this.STATUS_VALIDATING, r), h.data(a + ".dfs." + r, n), n.done(function(t, e, i) { t.removeData(a + ".dfs." + e).data(a + ".response." + e, i), i.message && s.updateMessage(t, e, i.message), s.updateStatus(d ? t.attr("data-" + a + "-field") : t, !0 === i.valid ? s.STATUS_VALID : !1 === i.valid ? s.STATUS_INVALID : s.STATUS_IGNORED, e), i.valid && !0 === s._submitIfValid ? s._submit() : !1 !== i.valid || f || (m = !0) });
                                else if ("object" == typeof n && void 0 !== n.valid) { if (h.data(a + ".response." + r, n), n.message && this.updateMessage(d ? e : h, r, n.message), this.updateStatus(d ? e : h, !0 === n.valid ? this.STATUS_VALID : !1 === n.valid ? this.STATUS_INVALID : this.STATUS_IGNORED, r), !1 === n.valid && !f) break } else if ("boolean" == typeof n) { if (h.data(a + ".response." + r, n), this.updateStatus(d ? e : h, n ? this.STATUS_VALID : this.STATUS_INVALID, r), !n && !f) break } else null == n && (h.data(a + ".response." + r, n), this.updateStatus(d ? e : h, this.STATUS_IGNORED, r));
                        else this.updateStatus(d ? e : h, this.STATUS_VALID, r);
                        else this._onFieldValidated(h, r) } } } return this }, addField: function(e, a) { var i = this._namespace,
                r = t([]); switch (typeof e) {
                case "object":
                    r = e, e = e.attr("data-" + i + "-field") || e.attr("name"); break;
                case "string":
                    delete this._cacheFields[e], r = this.getFieldElements(e) }
            r.attr("data-" + i + "-field", e); for (var n = r.attr("type"), s = "radio" === n || "checkbox" === n ? 1 : r.length, o = 0; o < s; o++) { var l = r.eq(o),
                    d = this._parseOptions(l);
                d = null === d ? a : t.extend(!0, d, a), this.options.fields[e] = t.extend(!0, this.options.fields[e], d), this._cacheFields[e] = this._cacheFields[e] ? this._cacheFields[e].add(l) : l, this._initField("checkbox" === n || "radio" === n ? e : l) } return this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldAdded), { field: e, element: r, options: this.options.fields[e] }), this }, destroy: function() { var t, e, a, i, r, n, s, o = this._namespace; for (e in this.options.fields)
                for (a = this.getFieldElements(e), t = 0; t < a.length; t++)
                    for (r in i = a.eq(t), this.options.fields[e].validators) i.data(o + ".dfs." + r) && i.data(o + ".dfs." + r).reject(), i.removeData(o + ".result." + r).removeData(o + ".response." + r).removeData(o + ".dfs." + r), "function" == typeof FormValidation.Validator[r].destroy && FormValidation.Validator[r].destroy(this, i, this.options.fields[e].validators[r]); for (e in this.options.fields)
                for (a = this.getFieldElements(e), s = this.options.fields[e].row || this.options.row.selector, t = 0; t < a.length; t++) {
                    (i = a.eq(t)).data(o + ".messages").find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + o + "-validator][data-" + o + '-for="' + e + '"]').remove().end().end().removeData(o + ".messages").closest(s).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end().off("." + o).removeAttr("data-" + o + "-field"); var l = "function" == typeof(this.options.fields[e].container || this.options.fields[e].err || this.options.err.container) ? (this.options.fields[e].container || this.options.fields[e].err || this.options.err.container).call(this, i, this) : this.options.fields[e].container || this.options.fields[e].err || this.options.err.container; "tooltip" !== l && "popover" !== l || this._destroyTooltip(i, l), (n = i.data(o + ".icon")) && n.remove(), i.removeData(o + ".icon").removeData(o + ".trigger") }
            for (var d in this.options.addOns) "function" == typeof FormValidation.AddOn[d].destroy && FormValidation.AddOn[d].destroy(this, this.options.addOns[d]);
            this.disableSubmitButtons(!1), this.$hiddenButton.remove(), this.$form.removeClass(this.options.elementClass).off("." + o).removeData("bootstrapValidator").removeData("formValidation").find("[data-" + o + "-submit-hidden]").remove().end().find('[type="submit"]').off("click." + o) }, enableFieldValidators: function(t, e, a) { var i = this.options.fields[t].validators; if (a && i && i[a] && i[a].enabled !== e) this.options.fields[t].validators[a].enabled = e, this.updateStatus(t, this.STATUS_NOT_VALIDATED, a);
            else if (!a && this.options.fields[t].enabled !== e)
                for (var r in this.options.fields[t].enabled = e, i) this.enableFieldValidators(t, e, r); return this }, getDynamicOption: function(t, e) { var a = "string" == typeof t ? this.getFieldElements(t) : t,
                i = a.val(); if ("function" == typeof e) return FormValidation.Helper.call(e, [i, this, a]); if ("string" == typeof e) { var r = this.getFieldElements(e); return r.length ? r.val() : FormValidation.Helper.call(e, [i, this, a]) || e } return null }, getForm: function() { return this.$form }, getInvalidFields: function() { return this.$invalidFields }, getLocale: function() { return this.options.locale }, getMessages: function(e, a) { var i = this,
                r = this._namespace,
                n = [],
                s = t([]); switch (!0) {
                case e && "object" == typeof e:
                    s = e; break;
                case e && "string" == typeof e:
                    var o = this.getFieldElements(e); if (o.length > 0) { var l = o.attr("type");
                        s = "radio" === l || "checkbox" === l ? o.eq(0) : o } break;
                default:
                    s = this.$invalidFields } var d = a ? "[data-" + r + '-validator="' + a + '"]' : ""; return s.each(function() { n = n.concat(t(this).data(r + ".messages").find("." + i.options.err.clazz + "[data-" + r + '-for="' + t(this).attr("data-" + r + "-field") + '"][data-' + r + '-result="' + i.STATUS_INVALID + '"]' + d).map(function() { var e = t(this).attr("data-" + r + "-validator"),
                        a = t(this).attr("data-" + r + "-for"); return !1 === i.options.fields[a].validators[e].enabled ? "" : t(this).html() }).get()) }), n }, getSubmitButton: function() { return this.$submitButton }, removeField: function(e) { var a = this._namespace,
                i = t([]); switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-" + a + "-field") || e.attr("name"), i.attr("data-" + a + "-field", e); break;
                case "string":
                    i = this.getFieldElements(e) } if (0 === i.length) return this; for (var r = i.attr("type"), n = "radio" === r || "checkbox" === r ? 1 : i.length, s = 0; s < n; s++) { var o = i.eq(s);
                this.$invalidFields = this.$invalidFields.not(o), this._cacheFields[e] = this._cacheFields[e].not(o) } return this._cacheFields[e] && 0 !== this._cacheFields[e].length || delete this.options.fields[e], "checkbox" !== r && "radio" !== r || this._initField(e), this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldRemoved), { field: e, element: i }), this }, resetField: function(e, a) { var i = this._namespace,
                r = t([]); switch (typeof e) {
                case "object":
                    r = e, e = e.attr("data-" + i + "-field"); break;
                case "string":
                    r = this.getFieldElements(e) } var n = r.length; if (this.options.fields[e])
                for (var s = 0; s < n; s++)
                    for (var o in this.options.fields[e].validators) r.eq(s).removeData(i + ".dfs." + o); if (a) { var l = r.attr("type"); "radio" === l || "checkbox" === l ? r.prop("checked", !1).removeAttr("selected") : r.val("") } return this.updateStatus(e, this.STATUS_NOT_VALIDATED), this }, resetForm: function(e) { for (var a in this.options.fields) this.resetField(a, e); return this.$invalidFields = t([]), this.$submitButton = null, this.disableSubmitButtons(!1), this }, revalidateField: function(t) { return this.updateStatus(t, this.STATUS_NOT_VALIDATED).validateField(t), this }, setLocale: function(e) { return this.options.locale = e, this.$form.trigger(t.Event(this.options.events.localeChanged), { locale: e, bv: this, fv: this }), this }, updateOption: function(t, e, a, i) { var r = this._namespace; return "object" == typeof t && (t = t.attr("data-" + r + "-field")), this.options.fields[t] && this.options.fields[t].validators[e] && (this.options.fields[t].validators[e][a] = i, this.updateStatus(t, this.STATUS_NOT_VALIDATED, e)), this }, validateContainer: function(e) { var a = this,
                i = this._namespace,
                r = [],
                n = "string" == typeof e ? t(e) : e; if (0 === n.length) return this;
            n.find("[data-" + i + "-field]").each(function() { var e = t(this);
                a._isExcluded(e) || r.push(e) }); for (var s = r.length, o = 0; o < s; o++) this.validateField(r[o]); return this } }, t.fn.formValidation = function(e) { var a = arguments; return this.each(function() { var i = t(this),
                r = i.data("formValidation"),
                n = "object" == typeof e && e; if (!r) { var s = (n.framework || i.attr("data-fv-framework") || "bootstrap").toLowerCase(),
                    o = s.substr(0, 1).toUpperCase() + s.substr(1); if (void 0 === FormValidation.Framework[o]) throw new Error("The class FormValidation.Framework." + o + " is not implemented");
                r = new FormValidation.Framework[o](this, n), i.addClass("fv-form-" + s).data("formValidation", r) } "string" == typeof e && r[e].apply(r, Array.prototype.slice.call(a, 1)) }) }, t.fn.formValidation.Constructor = FormValidation.Base, t.fn.formValidation.DEFAULT_OPTIONS = { autoFocus: !0, declarative: !0, elementClass: "fv-form", events: { formInit: "init.form.fv", formError: "err.form.fv", formSuccess: "success.form.fv", fieldAdded: "added.field.fv", fieldRemoved: "removed.field.fv", fieldInit: "init.field.fv", fieldError: "err.field.fv", fieldSuccess: "success.field.fv", fieldStatus: "status.field.fv", localeChanged: "changed.locale.fv", validatorError: "err.validator.fv", validatorSuccess: "success.validator.fv", validatorIgnored: "ignored.validator.fv" }, excluded: [":disabled", ":hidden", ":not(:visible)"], fields: null, live: "enabled", locale: "en_US", message: "This value is not valid", threshold: null, verbose: !0, button: { selector: '[type="submit"]', disabled: "" }, control: { valid: "", invalid: "" }, err: { clazz: "", container: null, parent: null }, icon: { valid: null, invalid: null, validating: null, feedback: "" }, row: { selector: null, valid: "", invalid: "", feedback: "" } } }(jQuery),
function(t) { FormValidation.Helper = { call: function(t, e) { if ("function" == typeof t) return t.apply(this, e); if ("string" == typeof t) { "()" === t.substring(t.length - 2) && (t = t.substring(0, t.length - 2)); for (var a = t.split("."), i = a.pop(), r = window, n = 0; n < a.length; n++) r = r[a[n]]; return void 0 === r[i] ? null : r[i].apply(this, e) } }, date: function(t, e, a, i) { if (isNaN(t) || isNaN(e) || isNaN(a)) return !1; if (a.length > 2 || e.length > 2 || t.length > 4) return !1; if (a = parseInt(a, 10), e = parseInt(e, 10), (t = parseInt(t, 10)) < 1e3 || t > 9999 || e <= 0 || e > 12) return !1; var r = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; if ((t % 400 == 0 || t % 100 != 0 && t % 4 == 0) && (r[1] = 29), a <= 0 || a > r[e - 1]) return !1; if (!0 === i) { var n = new Date,
                    s = n.getFullYear(),
                    o = n.getMonth(),
                    l = n.getDate(); return t < s || t === s && e - 1 < o || t === s && e - 1 === o && a < l } return !0 }, format: function(e, a) { for (var i in t.isArray(a) || (a = [a]), a) e = e.replace("%s", a[i]); return e }, luhn: function(t) { for (var e = t.length, a = 0, i = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                ], r = 0; e--;) r += i[a][parseInt(t.charAt(e), 10)], a ^= 1; return r % 10 == 0 && r > 0 }, mod11And10: function(t) { for (var e = 5, a = t.length, i = 0; i < a; i++) e = (2 * (e || 10) % 11 + parseInt(t.charAt(i), 10)) % 10; return 1 === e }, mod37And36: function(t, e) { for (var a = (e = e || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").length, i = t.length, r = Math.floor(a / 2), n = 0; n < i; n++) r = (2 * (r || a) % (a + 1) + e.indexOf(t.charAt(n))) % a; return 1 === r } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { base64: { default: "Please enter a valid base 64 encoded" } } }), FormValidation.Validator.base64 = { validate: function(t, e, a) { var i = t.getFieldValue(e, "base64"); return "" === i || /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/.test(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { between: { default: "Please enter a value between %s and %s", notInclusive: "Please enter a value between %s and %s strictly" } } }), FormValidation.Validator.between = { html5Attributes: { message: "message", min: "min", max: "max", inclusive: "inclusive" }, enableByHtml5: function(t) { return "range" === t.attr("type") && { min: t.attr("min"), max: t.attr("max") } }, validate: function(e, a, i) { var r = e.getFieldValue(a, "between"); if ("" === r) return !0; if (r = this._format(r), !t.isNumeric(r)) return !1; var n = e.getLocale(),
                s = t.isNumeric(i.min) ? i.min : e.getDynamicOption(a, i.min),
                o = t.isNumeric(i.max) ? i.max : e.getDynamicOption(a, i.max),
                l = this._format(s),
                d = this._format(o); return r = parseFloat(r), !0 === i.inclusive || void 0 === i.inclusive ? { valid: r >= l && r <= d, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].between.default, [s, o]) } : { valid: r > l && r < d, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].between.notInclusive, [s, o]) } }, _format: function(t) { return (t + "").replace(",", ".") } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { bic: { default: "Please enter a valid BIC number" } } }), FormValidation.Validator.bic = { validate: function(t, e, a) { var i = t.getFieldValue(e, "bic"); return "" === i || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(i) } } }(jQuery), jQuery, FormValidation.Validator.blank = { validate: function(t, e, a) { return !0 } },
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { callback: { default: "Please enter a valid value" } } }), FormValidation.Validator.callback = { html5Attributes: { message: "message", callback: "callback" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "callback"),
                    n = new t.Deferred,
                    s = { valid: !0 }; if (i.callback) { var o = FormValidation.Helper.call(i.callback, [r, e, a]);
                    s = "boolean" == typeof o || null === o ? { valid: o } : o } return n.resolve(a, "callback", s), n } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { choice: { default: "Please enter a valid value", less: "Please choose %s options at minimum", more: "Please choose %s options at maximum", between: "Please choose %s - %s options" } } }), FormValidation.Validator.choice = { html5Attributes: { message: "message", min: "min", max: "max" }, validate: function(e, a, i) { var r = e.getLocale(),
                    n = e.getNamespace(),
                    s = a.is("select") ? e.getFieldElements(a.attr("data-" + n + "-field")).find("option").filter(":selected").length : e.getFieldElements(a.attr("data-" + n + "-field")).filter(":checked").length,
                    o = i.min ? t.isNumeric(i.min) ? i.min : e.getDynamicOption(a, i.min) : null,
                    l = i.max ? t.isNumeric(i.max) ? i.max : e.getDynamicOption(a, i.max) : null,
                    d = !0,
                    u = i.message || FormValidation.I18n[r].choice.default; switch ((o && s < parseInt(o, 10) || l && s > parseInt(l, 10)) && (d = !1), !0) {
                    case !!o && !!l:
                        u = FormValidation.Helper.format(i.message || FormValidation.I18n[r].choice.between, [parseInt(o, 10), parseInt(l, 10)]); break;
                    case !!o:
                        u = FormValidation.Helper.format(i.message || FormValidation.I18n[r].choice.less, parseInt(o, 10)); break;
                    case !!l:
                        u = FormValidation.Helper.format(i.message || FormValidation.I18n[r].choice.more, parseInt(l, 10)) } return { valid: d, message: u } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { color: { default: "Please enter a valid color" } } }), FormValidation.Validator.color = { html5Attributes: { message: "message", type: "type" }, enableByHtml5: function(t) { return "color" === t.attr("type") }, SUPPORTED_TYPES: ["hex", "rgb", "rgba", "hsl", "hsla", "keyword"], KEYWORD_COLORS: ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], validate: function(e, a, i) { var r = e.getFieldValue(a, "color"); if ("" === r) return !0; if (this.enableByHtml5(a)) return /^#[0-9A-F]{6}$/i.test(r); var n = i.type || this.SUPPORTED_TYPES;
                t.isArray(n) || (n = n.replace(/s/g, "").split(",")); for (var s, o = !1, l = 0; l < n.length; l++)
                    if (s = "_" + n[l].toLowerCase(), o = o || this[s](r)) return !0;
                return !1 }, _hex: function(t) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t) }, _hsl: function(t) { return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(t) }, _hsla: function(t) { return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t) }, _keyword: function(e) { return t.inArray(e, this.KEYWORD_COLORS) >= 0 }, _rgb: function(t) { return /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(t) || /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(t) }, _rgba: function(t) { return /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t) || /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { creditCard: { default: "Please enter a valid credit card number" } } }), FormValidation.Validator.creditCard = { validate: function(e, a, i) { var r = e.getFieldValue(a, "creditCard"); if ("" === r) return !0; if (/[^0-9-\s]+/.test(r)) return !1; if (r = r.replace(/\D/g, ""), !FormValidation.Helper.luhn(r)) return !1; var n, s, o = { AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] }, DINERS_CLUB: { length: [14], prefix: ["300", "301", "302", "303", "304", "305", "36"] }, DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] }, DISCOVER: { length: [16], prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"] }, JCB: { length: [16], prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"] }, LASER: { length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"] }, MAESTRO: { length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"] }, MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] }, SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] }, UNIONPAY: { length: [16, 17, 18, 19], prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"] }, VISA: { length: [16], prefix: ["4"] } }; for (n in o)
                    for (s in o[n].prefix)
                        if (r.substr(0, o[n].prefix[s].length) === o[n].prefix[s] && -1 !== t.inArray(r.length, o[n].length)) return { valid: !0, type: n };
                return !1 } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { cusip: { default: "Please enter a valid CUSIP number" } } }), FormValidation.Validator.cusip = { validate: function(e, a, i) { var r = e.getFieldValue(a, "cusip"); if ("" === r) return !0; if (r = r.toUpperCase(), !/^[0-9A-Z]{9}$/.test(r)) return !1; for (var n = t.map(r.split(""), function(t) { var e = t.charCodeAt(0); return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t }), s = n.length, o = 0, l = 0; l < s - 1; l++) { var d = parseInt(n[l], 10);
                    l % 2 != 0 && (d *= 2), d > 9 && (d -= 9), o += d } return (o = (10 - o % 10) % 10) === parseInt(n[s - 1], 10) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { cvv: { default: "Please enter a valid CVV number" } } }), FormValidation.Validator.cvv = { html5Attributes: { message: "message", ccfield: "creditCardField" }, init: function(t, e, a) { if (a.creditCardField) { var i = t.getFieldElements(a.creditCardField);
                    t.onLiveChange(i, "live_cvv", function() { t.getStatus(e, "cvv") !== t.STATUS_NOT_VALIDATED && t.revalidateField(e) }) } }, destroy: function(t, e, a) { if (a.creditCardField) { var i = t.getFieldElements(a.creditCardField);
                    t.offLiveChange(i, "live_cvv") } }, validate: function(e, a, i) { var r = e.getFieldValue(a, "cvv"); if ("" === r) return !0; if (!/^[0-9]{3,4}$/.test(r)) return !1; if (!i.creditCardField) return !0; var n = e.getFieldElements(i.creditCardField).val(); if ("" === n) return !0;
                n = n.replace(/\D/g, ""); var s, o, l = { AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] }, DINERS_CLUB: { length: [14], prefix: ["300", "301", "302", "303", "304", "305", "36"] }, DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] }, DISCOVER: { length: [16], prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"] }, JCB: { length: [16], prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"] }, LASER: { length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"] }, MAESTRO: { length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"] }, MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] }, SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] }, UNIONPAY: { length: [16, 17, 18, 19], prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"] }, VISA: { length: [16], prefix: ["4"] } },
                    d = null; for (s in l)
                    for (o in l[s].prefix)
                        if (n.substr(0, l[s].prefix[o].length) === l[s].prefix[o] && -1 !== t.inArray(n.length, l[s].length)) { d = s; break }
                return null !== d && ("AMERICAN_EXPRESS" === d ? 4 === r.length : 3 === r.length) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { date: { default: "Please enter a valid date", min: "Please enter a date after %s", max: "Please enter a date before %s", range: "Please enter a date in the range %s - %s" } } }), FormValidation.Validator.date = { html5Attributes: { message: "message", format: "format", min: "min", max: "max", separator: "separator" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "date"); if ("" === r) return !0;
                i.format = i.format || "MM/DD/YYYY", "date" === a.attr("type") && (i.format = "YYYY-MM-DD"); var n = e.getLocale(),
                    s = i.message || FormValidation.I18n[n].date.default,
                    o = i.format.split(" "),
                    l = o[0],
                    d = o.length > 1 ? o[1] : null,
                    u = o.length > 2 ? o[2] : null,
                    f = r.split(" "),
                    c = f[0],
                    h = f.length > 1 ? f[1] : null; if (o.length !== f.length) return { valid: !1, message: s }; var m = i.separator; if (m || (m = -1 !== c.indexOf("/") ? "/" : -1 !== c.indexOf("-") ? "-" : -1 !== c.indexOf(".") ? "." : null), null === m || -1 === c.indexOf(m)) return { valid: !1, message: s }; if (c = c.split(m), l = l.split(m), c.length !== l.length) return { valid: !1, message: s }; var p = c[t.inArray("YYYY", l)],
                    v = c[t.inArray("MM", l)],
                    g = c[t.inArray("DD", l)]; if (!p || !v || !g || 4 !== p.length) return { valid: !1, message: s }; var A = null,
                    b = null,
                    I = null; if (d) { if (d = d.split(":"), h = h.split(":"), d.length !== h.length) return { valid: !1, message: s }; if (b = h.length > 0 ? h[0] : null, A = h.length > 1 ? h[1] : null, I = h.length > 2 ? h[2] : null, "" === b || "" === A || "" === I) return { valid: !1, message: s }; if (I) { if (isNaN(I) || I.length > 2) return { valid: !1, message: s }; if ((I = parseInt(I, 10)) < 0 || I > 60) return { valid: !1, message: s } } if (b) { if (isNaN(b) || b.length > 2) return { valid: !1, message: s }; if ((b = parseInt(b, 10)) < 0 || b >= 24 || u && b > 12) return { valid: !1, message: s } } if (A) { if (isNaN(A) || A.length > 2) return { valid: !1, message: s }; if ((A = parseInt(A, 10)) < 0 || A > 59) return { valid: !1, message: s } } } var F = FormValidation.Helper.date(p, v, g),
                    V = null,
                    S = null,
                    T = i.min,
                    _ = i.max; switch (T && (isNaN(Date.parse(T)) && (T = e.getDynamicOption(a, T)), V = T instanceof Date ? T : this._parseDate(T, l, m), T = T instanceof Date ? this._formatDate(T, i.format) : T), _ && (isNaN(Date.parse(_)) && (_ = e.getDynamicOption(a, _)), S = _ instanceof Date ? _ : this._parseDate(_, l, m), _ = _ instanceof Date ? this._formatDate(_, i.format) : _), c = new Date(p, v - 1, g, b, A, I), !0) {
                    case T && !_ && F:
                        F = c.getTime() >= V.getTime(), s = i.message || FormValidation.Helper.format(FormValidation.I18n[n].date.min, T); break;
                    case _ && !T && F:
                        F = c.getTime() <= S.getTime(), s = i.message || FormValidation.Helper.format(FormValidation.I18n[n].date.max, _); break;
                    case _ && T && F:
                        F = c.getTime() <= S.getTime() && c.getTime() >= V.getTime(), s = i.message || FormValidation.Helper.format(FormValidation.I18n[n].date.range, [T, _]) } return { valid: F, message: s } }, _parseDate: function(e, a, i) { var r = 0,
                    n = 0,
                    s = 0,
                    o = e.split(" "),
                    l = o[0],
                    d = o.length > 1 ? o[1] : null,
                    u = (l = l.split(i))[t.inArray("YYYY", a)],
                    f = l[t.inArray("MM", a)],
                    c = l[t.inArray("DD", a)]; return d && (n = (d = d.split(":")).length > 0 ? d[0] : null, r = d.length > 1 ? d[1] : null, s = d.length > 2 ? d[2] : null), new Date(u, f - 1, c, n, r, s) }, _formatDate: function(t, e) { e = e.replace(/Y/g, "y").replace(/M/g, "m").replace(/D/g, "d").replace(/:m/g, ":M").replace(/:mm/g, ":MM").replace(/:S/, ":s").replace(/:SS/, ":ss"); var a = { d: function(t) { return t.getDate() }, dd: function(t) { var e = t.getDate(); return e < 10 ? "0" + e : e }, m: function(t) { return t.getMonth() + 1 }, mm: function(t) { var e = t.getMonth() + 1; return e < 10 ? "0" + e : e }, yy: function(t) { return ("" + t.getFullYear()).substr(2) }, yyyy: function(t) { return t.getFullYear() }, h: function(t) { return t.getHours() % 12 || 12 }, hh: function(t) { var e = t.getHours() % 12 || 12; return e < 10 ? "0" + e : e }, H: function(t) { return t.getHours() }, HH: function(t) { var e = t.getHours(); return e < 10 ? "0" + e : e }, M: function(t) { return t.getMinutes() }, MM: function(t) { var e = t.getMinutes(); return e < 10 ? "0" + e : e }, s: function(t) { return t.getSeconds() }, ss: function(t) { var e = t.getSeconds(); return e < 10 ? "0" + e : e } }; return e.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function(e) { return a[e] ? a[e](t) : e.slice(1, e.length - 1) }) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { different: { default: "Please enter a different value" } } }), FormValidation.Validator.different = { html5Attributes: { message: "message", field: "field" }, init: function(t, e, a) { for (var i = a.field.split(","), r = 0; r < i.length; r++) { var n = t.getFieldElements(i[r]);
                    t.onLiveChange(n, "live_different", function() { t.getStatus(e, "different") !== t.STATUS_NOT_VALIDATED && t.revalidateField(e) }) } }, destroy: function(t, e, a) { for (var i = a.field.split(","), r = 0; r < i.length; r++) { var n = t.getFieldElements(i[r]);
                    t.offLiveChange(n, "live_different") } }, validate: function(t, e, a) { var i = t.getFieldValue(e, "different"); if ("" === i) return !0; for (var r = a.field.split(","), n = !0, s = 0; s < r.length; s++) { var o = t.getFieldElements(r[s]); if (null != o && 0 !== o.length) { var l = t.getFieldValue(o, "different");
                        i === l ? n = !1 : "" !== l && t.updateStatus(o, t.STATUS_VALID, "different") } } return n } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { digits: { default: "Please enter only digits" } } }), FormValidation.Validator.digits = { validate: function(t, e, a) { var i = t.getFieldValue(e, "digits"); return "" === i || /^\d+$/.test(i) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { ean: { default: "Please enter a valid EAN number" } } }), FormValidation.Validator.ean = { validate: function(t, e, a) { var i = t.getFieldValue(e, "ean"); if ("" === i) return !0; if (!/^(\d{8}|\d{12}|\d{13})$/.test(i)) return !1; for (var r = i.length, n = 0, s = 8 === r ? [3, 1] : [1, 3], o = 0; o < r - 1; o++) n += parseInt(i.charAt(o), 10) * s[o % 2]; return (n = (10 - n % 10) % 10) + "" === i.charAt(r - 1) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { ein: { default: "Please enter a valid EIN number" } } }), FormValidation.Validator.ein = { CAMPUS: { ANDOVER: ["10", "12"], ATLANTA: ["60", "67"], AUSTIN: ["50", "53"], BROOKHAVEN: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"], CINCINNATI: ["30", "32", "35", "36", "37", "38", "61"], FRESNO: ["15", "24"], KANSAS_CITY: ["40", "44"], MEMPHIS: ["94", "95"], OGDEN: ["80", "90"], PHILADELPHIA: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"], INTERNET: ["20", "26", "27", "45", "46"], SMALL_BUSINESS_ADMINISTRATION: ["31"] }, validate: function(e, a, i) { var r = e.getFieldValue(a, "ein"); if ("" === r) return !0; if (!/^[0-9]{2}-?[0-9]{7}$/.test(r)) return !1; var n = r.substr(0, 2) + ""; for (var s in this.CAMPUS)
                    if (-1 !== t.inArray(n, this.CAMPUS[s])) return { valid: !0, campus: s };
                return !1 } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { emailAddress: { default: "Please enter a valid email address" } } }), FormValidation.Validator.emailAddress = { html5Attributes: { message: "message", multiple: "multiple", separator: "separator" }, enableByHtml5: function(t) { return "email" === t.attr("type") }, validate: function(t, e, a) { var i = t.getFieldValue(e, "emailAddress"); if ("" === i) return !0; var r = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; if (!0 === a.multiple || "true" === a.multiple) { for (var n = a.separator || /[,;]/, s = this._splitEmailAddresses(i, n), o = 0; o < s.length; o++)
                        if (!r.test(s[o])) return !1;
                    return !0 } return r.test(i) }, _splitEmailAddresses: function(t, e) { for (var a = t.split(/"/), i = a.length, r = [], n = "", s = 0; s < i; s++)
                    if (s % 2 == 0) { var o = a[s].split(e),
                            l = o.length; if (1 === l) n += o[0];
                        else { r.push(n + o[0]); for (var d = 1; d < l - 1; d++) r.push(o[d]);
                            n = o[l - 1] } } else n += '"' + a[s], s < i - 1 && (n += '"');
                return r.push(n), r } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { file: { default: "Please choose a valid file" } } }), FormValidation.Validator.file = { html5Attributes: { extension: "extension", maxfiles: "maxFiles", minfiles: "minFiles", maxsize: "maxSize", minsize: "minSize", maxtotalsize: "maxTotalSize", mintotalsize: "minTotalSize", message: "message", type: "type" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "file"); if ("" === r) return !0; var n, s = i.extension ? i.extension.toLowerCase().split(",") : null,
                    o = i.type ? i.type.toLowerCase().split(",") : null; if (window.File && window.FileList && window.FileReader) { var l = a.get(0).files,
                        d = l.length,
                        u = 0; if (i.maxFiles && d > parseInt(i.maxFiles, 10) || i.minFiles && d < parseInt(i.minFiles, 10)) return !1; for (var f = 0; f < d; f++)
                        if (u += l[f].size, n = l[f].name.substr(l[f].name.lastIndexOf(".") + 1), i.minSize && l[f].size < parseInt(i.minSize, 10) || i.maxSize && l[f].size > parseInt(i.maxSize, 10) || s && -1 === t.inArray(n.toLowerCase(), s) || l[f].type && o && -1 === t.inArray(l[f].type.toLowerCase(), o)) return !1;
                    if (i.maxTotalSize && u > parseInt(i.maxTotalSize, 10) || i.minTotalSize && u < parseInt(i.minTotalSize, 10)) return !1 } else if (n = r.substr(r.lastIndexOf(".") + 1), s && -1 === t.inArray(n.toLowerCase(), s)) return !1; return !0 } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { greaterThan: { default: "Please enter a value greater than or equal to %s", notInclusive: "Please enter a value greater than %s" } } }), FormValidation.Validator.greaterThan = { html5Attributes: { message: "message", value: "value", inclusive: "inclusive" }, enableByHtml5: function(t) { var e = t.attr("type"),
                    a = t.attr("min"); return !(!a || "date" === e) && { value: a } }, validate: function(e, a, i) { var r = e.getFieldValue(a, "greaterThan"); if ("" === r) return !0; if (r = this._format(r), !t.isNumeric(r)) return !1; var n = e.getLocale(),
                    s = t.isNumeric(i.value) ? i.value : e.getDynamicOption(a, i.value),
                    o = this._format(s); return r = parseFloat(r), !0 === i.inclusive || void 0 === i.inclusive ? { valid: r >= o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].greaterThan.default, s) } : { valid: r > o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].greaterThan.notInclusive, s) } }, _format: function(t) { return (t + "").replace(",", ".") } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { grid: { default: "Please enter a valid GRId number" } } }), FormValidation.Validator.grid = { validate: function(t, e, a) { var i = t.getFieldValue(e, "grid"); return "" === i || (i = i.toUpperCase(), !!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(i) && ("GRID:" === (i = i.replace(/\s/g, "").replace(/-/g, "")).substr(0, 5) && (i = i.substr(5)), FormValidation.Helper.mod37And36(i))) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { hex: { default: "Please enter a valid hexadecimal number" } } }), FormValidation.Validator.hex = { validate: function(t, e, a) { var i = t.getFieldValue(e, "hex"); return "" === i || /^[0-9a-fA-F]+$/.test(i) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { iban: { default: "Please enter a valid IBAN number", country: "Please enter a valid IBAN number in %s", countries: { AD: "Andorra", AE: "United Arab Emirates", AL: "Albania", AO: "Angola", AT: "Austria", AZ: "Azerbaijan", BA: "Bosnia and Herzegovina", BE: "Belgium", BF: "Burkina Faso", BG: "Bulgaria", BH: "Bahrain", BI: "Burundi", BJ: "Benin", BR: "Brazil", CH: "Switzerland", CI: "Ivory Coast", CM: "Cameroon", CR: "Costa Rica", CV: "Cape Verde", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", DO: "Dominican Republic", DZ: "Algeria", EE: "Estonia", ES: "Spain", FI: "Finland", FO: "Faroe Islands", FR: "France", GB: "United Kingdom", GE: "Georgia", GI: "Gibraltar", GL: "Greenland", GR: "Greece", GT: "Guatemala", HR: "Croatia", HU: "Hungary", IE: "Ireland", IL: "Israel", IR: "Iran", IS: "Iceland", IT: "Italy", JO: "Jordan", KW: "Kuwait", KZ: "Kazakhstan", LB: "Lebanon", LI: "Liechtenstein", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MC: "Monaco", MD: "Moldova", ME: "Montenegro", MG: "Madagascar", MK: "Macedonia", ML: "Mali", MR: "Mauritania", MT: "Malta", MU: "Mauritius", MZ: "Mozambique", NL: "Netherlands", NO: "Norway", PK: "Pakistan", PL: "Poland", PS: "Palestine", PT: "Portugal", QA: "Qatar", RO: "Romania", RS: "Serbia", SA: "Saudi Arabia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", SN: "Senegal", TN: "Tunisia", TR: "Turkey", VG: "Virgin Islands, British" } } } }), FormValidation.Validator.iban = { html5Attributes: { message: "message", country: "country" }, REGEX: { AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}", AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}", AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}", AO: "AO[0-9]{2}[0-9]{21}", AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}", AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}", BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}", BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}", BF: "BF[0-9]{2}[0-9]{23}", BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}", BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}", BI: "BI[0-9]{2}[0-9]{12}", BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}", BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]", CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}", CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}", CM: "CM[0-9]{2}[0-9]{23}", CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}", CV: "CV[0-9]{2}[0-9]{21}", CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}", CZ: "CZ[0-9]{2}[0-9]{20}", DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}", DK: "DK[0-9]{2}[0-9]{14}", DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}", DZ: "DZ[0-9]{2}[0-9]{20}", EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}", ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}", FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}", FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}", FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}", GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}", GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}", GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}", GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}", GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}", GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}", HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}", HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}", IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}", IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}", IR: "IR[0-9]{2}[0-9]{22}", IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}", IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}", JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}", KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}", KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}", LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}", LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}", LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}", LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}", LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}", MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}", MD: "MD[0-9]{2}[A-Z0-9]{20}", ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", MG: "MG[0-9]{2}[0-9]{23}", MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}", ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}", MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}", MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}", MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}", MZ: "MZ[0-9]{2}[0-9]{21}", NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}", NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}", PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}", PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}", PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}", PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}", QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}", RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}", RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}", SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}", SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}", SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}", SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}", SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}", TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}", VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "iban"); if ("" === r) return !0;
                r = r.replace(/[^a-zA-Z0-9]/g, "").toUpperCase(); var n = i.country;
                n ? "string" == typeof n && this.REGEX[n] || (n = e.getDynamicOption(a, n)) : n = r.substr(0, 2); var s = e.getLocale(); if (!this.REGEX[n]) return !0; if (!new RegExp("^" + this.REGEX[n] + "$").test(r)) return { valid: !1, message: FormValidation.Helper.format(i.message || FormValidation.I18n[s].iban.country, FormValidation.I18n[s].iban.countries[n]) };
                r = r.substr(4) + r.substr(0, 4), r = (r = t.map(r.split(""), function(t) { var e = t.charCodeAt(0); return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t })).join(""); for (var o = parseInt(r.substr(0, 1), 10), l = r.length, d = 1; d < l; ++d) o = (10 * o + parseInt(r.substr(d, 1), 10)) % 97; return { valid: 1 === o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[s].iban.country, FormValidation.I18n[s].iban.countries[n]) } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { id: { default: "Please enter a valid identification number", country: "Please enter a valid identification number in %s", countries: { BA: "Bosnia and Herzegovina", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CL: "Chile", CN: "China", CZ: "Czech Republic", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", HR: "Croatia", IE: "Ireland", IS: "Iceland", LT: "Lithuania", LV: "Latvia", ME: "Montenegro", MK: "Macedonia", NL: "Netherlands", PL: "Poland", RO: "Romania", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", TH: "Thailand", ZA: "South Africa" } } } }), FormValidation.Validator.id = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["BA", "BG", "BR", "CH", "CL", "CN", "CZ", "DK", "EE", "ES", "FI", "HR", "IE", "IS", "LT", "LV", "ME", "MK", "NL", "PL", "RO", "RS", "SE", "SI", "SK", "SM", "TH", "ZA"], validate: function(e, a, i) { var r = e.getFieldValue(a, "id"); if ("" === r) return !0; var n = e.getLocale(),
                    s = i.country; return s ? "string" == typeof s && -1 !== t.inArray(s.toUpperCase(), this.COUNTRY_CODES) || (s = e.getDynamicOption(a, s)) : s = r.substr(0, 2), -1 === t.inArray(s, this.COUNTRY_CODES) || (!!this[["_", s.toLowerCase()].join("")](r) || { valid: !1, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].id.country, FormValidation.I18n[n].id.countries[s.toUpperCase()]) }) }, _validateJMBG: function(t, e) { if (!/^\d{13}$/.test(t)) return !1; var a = parseInt(t.substr(0, 2), 10),
                    i = parseInt(t.substr(2, 2), 10),
                    r = (parseInt(t.substr(4, 3), 10), parseInt(t.substr(7, 2), 10)),
                    n = parseInt(t.substr(12, 1), 10); if (a > 31 || i > 12) return !1; for (var s = 0, o = 0; o < 6; o++) s += (7 - o) * (parseInt(t.charAt(o), 10) + parseInt(t.charAt(o + 6), 10)); if (10 !== (s = 11 - s % 11) && 11 !== s || (s = 0), s !== n) return !1; switch (e.toUpperCase()) {
                    case "BA":
                        return 10 <= r && r <= 19;
                    case "MK":
                        return 41 <= r && r <= 49;
                    case "ME":
                        return 20 <= r && r <= 29;
                    case "RS":
                        return 70 <= r && r <= 99;
                    case "SI":
                        return 50 <= r && r <= 59;
                    default:
                        return !0 } }, _ba: function(t) { return this._validateJMBG(t, "BA") }, _mk: function(t) { return this._validateJMBG(t, "MK") }, _me: function(t) { return this._validateJMBG(t, "ME") }, _rs: function(t) { return this._validateJMBG(t, "RS") }, _si: function(t) { return this._validateJMBG(t, "SI") }, _bg: function(t) { if (!/^\d{10}$/.test(t) && !/^\d{6}\s\d{3}\s\d{1}$/.test(t)) return !1;
                t = t.replace(/\s/g, ""); var e = parseInt(t.substr(0, 2), 10) + 1900,
                    a = parseInt(t.substr(2, 2), 10),
                    i = parseInt(t.substr(4, 2), 10); if (a > 40 ? (e += 100, a -= 40) : a > 20 && (e -= 100, a -= 20), !FormValidation.Helper.date(e, a, i)) return !1; for (var r = 0, n = [2, 4, 8, 5, 10, 9, 7, 3, 6], s = 0; s < 9; s++) r += parseInt(t.charAt(s), 10) * n[s]; return (r = r % 11 % 10) + "" === t.substr(9, 1) }, _br: function(t) { if (t = t.replace(/\D/g, ""), !/^\d{11}$/.test(t) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t)) return !1; for (var e = 0, a = 0; a < 9; a++) e += (10 - a) * parseInt(t.charAt(a), 10); if (10 !== (e = 11 - e % 11) && 11 !== e || (e = 0), e + "" !== t.charAt(9)) return !1; var i = 0; for (a = 0; a < 10; a++) i += (11 - a) * parseInt(t.charAt(a), 10); return 10 !== (i = 11 - i % 11) && 11 !== i || (i = 0), i + "" === t.charAt(10) }, _ch: function(t) { if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t)) return !1; for (var e = (t = t.replace(/\D/g, "").substr(3)).length, a = 0, i = 8 === e ? [3, 1] : [1, 3], r = 0; r < e - 1; r++) a += parseInt(t.charAt(r), 10) * i[r % 2]; return (a = 10 - a % 10) + "" === t.charAt(e - 1) }, _cl: function(t) { if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t)) return !1; for (t = t.replace(/\-/g, ""); t.length < 9;) t = "0" + t; for (var e = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return 11 === (e = 11 - e % 11) ? e = 0 : 10 === e && (e = "K"), e + "" === t.charAt(8).toUpperCase() }, _cn: function(e) { if (e = e.trim(), !/^\d{15}$/.test(e) && !/^\d{17}[\dXx]{1}$/.test(e)) return !1; var a = { 11: { 0: [0], 1: [
                                [0, 9],
                                [11, 17]
                            ], 2: [0, 28, 29] }, 12: { 0: [0], 1: [
                                [0, 16]
                            ], 2: [0, 21, 23, 25] }, 13: { 0: [0], 1: [
                                [0, 5], 7, 8, 21, [23, 33],
                                [81, 85]
                            ], 2: [
                                [0, 5],
                                [7, 9],
                                [23, 25], 27, 29, 30, 81, 83
                            ], 3: [
                                [0, 4],
                                [21, 24]
                            ], 4: [
                                [0, 4], 6, 21, [23, 35], 81
                            ], 5: [
                                [0, 3],
                                [21, 35], 81, 82
                            ], 6: [
                                [0, 4],
                                [21, 38],
                                [81, 84]
                            ], 7: [
                                [0, 3], 5, 6, [21, 33]
                            ], 8: [
                                [0, 4],
                                [21, 28]
                            ], 9: [
                                [0, 3],
                                [21, 30],
                                [81, 84]
                            ], 10: [
                                [0, 3],
                                [22, 26], 28, 81, 82
                            ], 11: [
                                [0, 2],
                                [21, 28], 81, 82
                            ] }, 14: { 0: [0], 1: [0, 1, [5, 10],
                                [21, 23], 81
                            ], 2: [
                                [0, 3], 11, 12, [21, 27]
                            ], 3: [
                                [0, 3], 11, 21, 22
                            ], 4: [
                                [0, 2], 11, 21, [23, 31], 81
                            ], 5: [
                                [0, 2], 21, 22, 24, 25, 81
                            ], 6: [
                                [0, 3],
                                [21, 24]
                            ], 7: [
                                [0, 2],
                                [21, 29], 81
                            ], 8: [
                                [0, 2],
                                [21, 30], 81, 82
                            ], 9: [
                                [0, 2],
                                [21, 32], 81
                            ], 10: [
                                [0, 2],
                                [21, 34], 81, 82
                            ], 11: [
                                [0, 2],
                                [21, 30], 81, 82
                            ], 23: [
                                [0, 3], 22, 23, [25, 30], 32, 33
                            ] }, 15: { 0: [0], 1: [
                                [0, 5],
                                [21, 25]
                            ], 2: [
                                [0, 7],
                                [21, 23]
                            ], 3: [
                                [0, 4]
                            ], 4: [
                                [0, 4],
                                [21, 26],
                                [28, 30]
                            ], 5: [
                                [0, 2],
                                [21, 26], 81
                            ], 6: [
                                [0, 2],
                                [21, 27]
                            ], 7: [
                                [0, 3],
                                [21, 27],
                                [81, 85]
                            ], 8: [
                                [0, 2],
                                [21, 26]
                            ], 9: [
                                [0, 2],
                                [21, 29], 81
                            ], 22: [
                                [0, 2],
                                [21, 24]
                            ], 25: [
                                [0, 2],
                                [22, 31]
                            ], 26: [
                                [0, 2],
                                [24, 27],
                                [29, 32], 34
                            ], 28: [0, 1, [22, 27]], 29: [0, [21, 23]] }, 21: { 0: [0], 1: [
                                [0, 6],
                                [11, 14],
                                [22, 24], 81
                            ], 2: [
                                [0, 4],
                                [11, 13], 24, [81, 83]
                            ], 3: [
                                [0, 4], 11, 21, 23, 81
                            ], 4: [
                                [0, 4], 11, [21, 23]
                            ], 5: [
                                [0, 5], 21, 22
                            ], 6: [
                                [0, 4], 24, 81, 82
                            ], 7: [
                                [0, 3], 11, 26, 27, 81, 82
                            ], 8: [
                                [0, 4], 11, 81, 82
                            ], 9: [
                                [0, 5], 11, 21, 22
                            ], 10: [
                                [0, 5], 11, 21, 81
                            ], 11: [
                                [0, 3], 21, 22
                            ], 12: [
                                [0, 2], 4, 21, 23, 24, 81, 82
                            ], 13: [
                                [0, 3], 21, 22, 24, 81, 82
                            ], 14: [
                                [0, 4], 21, 22, 81
                            ] }, 22: { 0: [0], 1: [
                                [0, 6], 12, 22, [81, 83]
                            ], 2: [
                                [0, 4], 11, 21, [81, 84]
                            ], 3: [
                                [0, 3], 22, 23, 81, 82
                            ], 4: [
                                [0, 3], 21, 22
                            ], 5: [
                                [0, 3], 21, 23, 24, 81, 82
                            ], 6: [
                                [0, 2], 4, 5, [21, 23], 25, 81
                            ], 7: [
                                [0, 2],
                                [21, 24], 81
                            ], 8: [
                                [0, 2], 21, 22, 81, 82
                            ], 24: [
                                [0, 6], 24, 26
                            ] }, 23: { 0: [0], 1: [
                                [0, 12], 21, [23, 29],
                                [81, 84]
                            ], 2: [
                                [0, 8], 21, [23, 25], 27, [29, 31], 81
                            ], 3: [
                                [0, 7], 21, 81, 82
                            ], 4: [
                                [0, 7], 21, 22
                            ], 5: [
                                [0, 3], 5, 6, [21, 24]
                            ], 6: [
                                [0, 6],
                                [21, 24]
                            ], 7: [
                                [0, 16], 22, 81
                            ], 8: [
                                [0, 5], 11, 22, 26, 28, 33, 81, 82
                            ], 9: [
                                [0, 4], 21
                            ], 10: [
                                [0, 5], 24, 25, 81, [83, 85]
                            ], 11: [
                                [0, 2], 21, 23, 24, 81, 82
                            ], 12: [
                                [0, 2],
                                [21, 26],
                                [81, 83]
                            ], 27: [
                                [0, 4],
                                [21, 23]
                            ] }, 31: { 0: [0], 1: [0, 1, [3, 10],
                                [12, 20]
                            ], 2: [0, 30] }, 32: { 0: [0], 1: [
                                [0, 7], 11, [13, 18], 24, 25
                            ], 2: [
                                [0, 6], 11, 81, 82
                            ], 3: [
                                [0, 5], 11, 12, [21, 24], 81, 82
                            ], 4: [
                                [0, 2], 4, 5, 11, 12, 81, 82
                            ], 5: [
                                [0, 9],
                                [81, 85]
                            ], 6: [
                                [0, 2], 11, 12, 21, 23, [81, 84]
                            ], 7: [0, 1, 3, 5, 6, [21, 24]], 8: [
                                [0, 4], 11, 26, [29, 31]
                            ], 9: [
                                [0, 3],
                                [21, 25], 28, 81, 82
                            ], 10: [
                                [0, 3], 11, 12, 23, 81, 84, 88
                            ], 11: [
                                [0, 2], 11, 12, [81, 83]
                            ], 12: [
                                [0, 4],
                                [81, 84]
                            ], 13: [
                                [0, 2], 11, [21, 24]
                            ] }, 33: { 0: [0], 1: [
                                [0, 6],
                                [8, 10], 22, 27, 82, 83, 85
                            ], 2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]], 3: [
                                [0, 4], 22, 24, [26, 29], 81, 82
                            ], 4: [
                                [0, 2], 11, 21, 24, [81, 83]
                            ], 5: [
                                [0, 3],
                                [21, 23]
                            ], 6: [
                                [0, 2], 21, 24, [81, 83]
                            ], 7: [
                                [0, 3], 23, 26, 27, [81, 84]
                            ], 8: [
                                [0, 3], 22, 24, 25, 81
                            ], 9: [
                                [0, 3], 21, 22
                            ], 10: [
                                [0, 4],
                                [21, 24], 81, 82
                            ], 11: [
                                [0, 2],
                                [21, 27], 81
                            ] }, 34: { 0: [0], 1: [
                                [0, 4], 11, [21, 24], 81
                            ], 2: [
                                [0, 4], 7, 8, [21, 23], 25
                            ], 3: [
                                [0, 4], 11, [21, 23]
                            ], 4: [
                                [0, 6], 21
                            ], 5: [
                                [0, 4], 6, [21, 23]
                            ], 6: [
                                [0, 4], 21
                            ], 7: [
                                [0, 3], 11, 21
                            ], 8: [
                                [0, 3], 11, [22, 28], 81
                            ], 10: [
                                [0, 4],
                                [21, 24]
                            ], 11: [
                                [0, 3], 22, [24, 26], 81, 82
                            ], 12: [
                                [0, 4], 21, 22, 25, 26, 82
                            ], 13: [
                                [0, 2],
                                [21, 24]
                            ], 14: [
                                [0, 2],
                                [21, 24]
                            ], 15: [
                                [0, 3],
                                [21, 25]
                            ], 16: [
                                [0, 2],
                                [21, 23]
                            ], 17: [
                                [0, 2],
                                [21, 23]
                            ], 18: [
                                [0, 2],
                                [21, 25], 81
                            ] }, 35: { 0: [0], 1: [
                                [0, 5], 11, [21, 25], 28, 81, 82
                            ], 2: [
                                [0, 6],
                                [11, 13]
                            ], 3: [
                                [0, 5], 22
                            ], 4: [
                                [0, 3], 21, [23, 30], 81
                            ], 5: [
                                [0, 5], 21, [24, 27],
                                [81, 83]
                            ], 6: [
                                [0, 3],
                                [22, 29], 81
                            ], 7: [
                                [0, 2],
                                [21, 25],
                                [81, 84]
                            ], 8: [
                                [0, 2],
                                [21, 25], 81
                            ], 9: [
                                [0, 2],
                                [21, 26], 81, 82
                            ] }, 36: { 0: [0], 1: [
                                [0, 5], 11, [21, 24]
                            ], 2: [
                                [0, 3], 22, 81
                            ], 3: [
                                [0, 2], 13, [21, 23]
                            ], 4: [
                                [0, 3], 21, [23, 30], 81, 82
                            ], 5: [
                                [0, 2], 21
                            ], 6: [
                                [0, 2], 22, 81
                            ], 7: [
                                [0, 2],
                                [21, 35], 81, 82
                            ], 8: [
                                [0, 3],
                                [21, 30], 81
                            ], 9: [
                                [0, 2],
                                [21, 26],
                                [81, 83]
                            ], 10: [
                                [0, 2],
                                [21, 30]
                            ], 11: [
                                [0, 2],
                                [21, 30], 81
                            ] }, 37: { 0: [0], 1: [
                                [0, 5], 12, 13, [24, 26], 81
                            ], 2: [
                                [0, 3], 5, [11, 14],
                                [81, 85]
                            ], 3: [
                                [0, 6],
                                [21, 23]
                            ], 4: [
                                [0, 6], 81
                            ], 5: [
                                [0, 3],
                                [21, 23]
                            ], 6: [
                                [0, 2],
                                [11, 13], 34, [81, 87]
                            ], 7: [
                                [0, 5], 24, 25, [81, 86]
                            ], 8: [
                                [0, 2], 11, [26, 32],
                                [81, 83]
                            ], 9: [
                                [0, 3], 11, 21, 23, 82, 83
                            ], 10: [
                                [0, 2],
                                [81, 83]
                            ], 11: [
                                [0, 3], 21, 22
                            ], 12: [
                                [0, 3]
                            ], 13: [
                                [0, 2], 11, 12, [21, 29]
                            ], 14: [
                                [0, 2],
                                [21, 28], 81, 82
                            ], 15: [
                                [0, 2],
                                [21, 26], 81
                            ], 16: [
                                [0, 2],
                                [21, 26]
                            ], 17: [
                                [0, 2],
                                [21, 28]
                            ] }, 41: { 0: [0], 1: [
                                [0, 6], 8, 22, [81, 85]
                            ], 2: [
                                [0, 5], 11, [21, 25]
                            ], 3: [
                                [0, 7], 11, [22, 29], 81
                            ], 4: [
                                [0, 4], 11, [21, 23], 25, 81, 82
                            ], 5: [
                                [0, 3], 5, 6, 22, 23, 26, 27, 81
                            ], 6: [
                                [0, 3], 11, 21, 22
                            ], 7: [
                                [0, 4], 11, 21, [24, 28], 81, 82
                            ], 8: [
                                [0, 4], 11, [21, 23], 25, [81, 83]
                            ], 9: [
                                [0, 2], 22, 23, [26, 28]
                            ], 10: [
                                [0, 2],
                                [23, 25], 81, 82
                            ], 11: [
                                [0, 4],
                                [21, 23]
                            ], 12: [
                                [0, 2], 21, 22, 24, 81, 82
                            ], 13: [
                                [0, 3],
                                [21, 30], 81
                            ], 14: [
                                [0, 3],
                                [21, 26], 81
                            ], 15: [
                                [0, 3],
                                [21, 28]
                            ], 16: [
                                [0, 2],
                                [21, 28], 81
                            ], 17: [
                                [0, 2],
                                [21, 29]
                            ], 90: [0, 1] }, 42: { 0: [0], 1: [
                                [0, 7],
                                [11, 17]
                            ], 2: [
                                [0, 5], 22, 81
                            ], 3: [
                                [0, 3],
                                [21, 25], 81
                            ], 5: [
                                [0, 6],
                                [25, 29],
                                [81, 83]
                            ], 6: [
                                [0, 2], 6, 7, [24, 26],
                                [82, 84]
                            ], 7: [
                                [0, 4]
                            ], 8: [
                                [0, 2], 4, 21, 22, 81
                            ], 9: [
                                [0, 2],
                                [21, 23], 81, 82, 84
                            ], 10: [
                                [0, 3],
                                [22, 24], 81, 83, 87
                            ], 11: [
                                [0, 2],
                                [21, 27], 81, 82
                            ], 12: [
                                [0, 2],
                                [21, 24], 81
                            ], 13: [
                                [0, 3], 21, 81
                            ], 28: [
                                [0, 2], 22, 23, [25, 28]
                            ], 90: [0, [4, 6], 21] }, 43: { 0: [0], 1: [
                                [0, 5], 11, 12, 21, 22, 24, 81
                            ], 2: [
                                [0, 4], 11, 21, [23, 25], 81
                            ], 3: [
                                [0, 2], 4, 21, 81, 82
                            ], 4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82], 5: [
                                [0, 3], 11, [21, 25],
                                [27, 29], 81
                            ], 6: [
                                [0, 3], 11, 21, 23, 24, 26, 81, 82
                            ], 7: [
                                [0, 3],
                                [21, 26], 81
                            ], 8: [
                                [0, 2], 11, 21, 22
                            ], 9: [
                                [0, 3],
                                [21, 23], 81
                            ], 10: [
                                [0, 3],
                                [21, 28], 81
                            ], 11: [
                                [0, 3],
                                [21, 29]
                            ], 12: [
                                [0, 2],
                                [21, 30], 81
                            ], 13: [
                                [0, 2], 21, 22, 81, 82
                            ], 31: [0, 1, [22, 27], 30] }, 44: { 0: [0], 1: [
                                [0, 7],
                                [11, 16], 83, 84
                            ], 2: [
                                [0, 5], 21, 22, 24, 29, 32, 33, 81, 82
                            ], 3: [0, 1, [3, 8]], 4: [
                                [0, 4]
                            ], 5: [0, 1, [6, 15], 23, 82, 83], 6: [0, 1, [4, 8]], 7: [0, 1, [3, 5], 81, [83, 85]], 8: [
                                [0, 4], 11, 23, 25, [81, 83]
                            ], 9: [
                                [0, 3], 23, [81, 83]
                            ], 12: [
                                [0, 3],
                                [23, 26], 83, 84
                            ], 13: [
                                [0, 3],
                                [22, 24], 81
                            ], 14: [
                                [0, 2],
                                [21, 24], 26, 27, 81
                            ], 15: [
                                [0, 2], 21, 23, 81
                            ], 16: [
                                [0, 2],
                                [21, 25]
                            ], 17: [
                                [0, 2], 21, 23, 81
                            ], 18: [
                                [0, 3], 21, 23, [25, 27], 81, 82
                            ], 19: [0], 20: [0], 51: [
                                [0, 3], 21, 22
                            ], 52: [
                                [0, 3], 21, 22, 24, 81
                            ], 53: [
                                [0, 2],
                                [21, 23], 81
                            ] }, 45: { 0: [0], 1: [
                                [0, 9],
                                [21, 27]
                            ], 2: [
                                [0, 5],
                                [21, 26]
                            ], 3: [
                                [0, 5], 11, 12, [21, 32]
                            ], 4: [0, 1, [3, 6], 11, [21, 23], 81], 5: [
                                [0, 3], 12, 21
                            ], 6: [
                                [0, 3], 21, 81
                            ], 7: [
                                [0, 3], 21, 22
                            ], 8: [
                                [0, 4], 21, 81
                            ], 9: [
                                [0, 3],
                                [21, 24], 81
                            ], 10: [
                                [0, 2],
                                [21, 31]
                            ], 11: [
                                [0, 2],
                                [21, 23]
                            ], 12: [
                                [0, 2],
                                [21, 29], 81
                            ], 13: [
                                [0, 2],
                                [21, 24], 81
                            ], 14: [
                                [0, 2],
                                [21, 25], 81
                            ] }, 46: { 0: [0], 1: [0, 1, [5, 8]], 2: [0, 1], 3: [0, [21, 23]], 90: [
                                [0, 3],
                                [5, 7],
                                [21, 39]
                            ] }, 50: { 0: [0], 1: [
                                [0, 19]
                            ], 2: [0, [22, 38],
                                [40, 43]
                            ], 3: [0, [81, 84]] }, 51: { 0: [0], 1: [0, 1, [4, 8],
                                [12, 15],
                                [21, 24], 29, 31, 32, [81, 84]
                            ], 3: [
                                [0, 4], 11, 21, 22
                            ], 4: [
                                [0, 3], 11, 21, 22
                            ], 5: [
                                [0, 4], 21, 22, 24, 25
                            ], 6: [0, 1, 3, 23, 26, [81, 83]], 7: [0, 1, 3, 4, [22, 27], 81], 8: [
                                [0, 2], 11, 12, [21, 24]
                            ], 9: [
                                [0, 4],
                                [21, 23]
                            ], 10: [
                                [0, 2], 11, 24, 25, 28
                            ], 11: [
                                [0, 2],
                                [11, 13], 23, 24, 26, 29, 32, 33, 81
                            ], 13: [
                                [0, 4],
                                [21, 25], 81
                            ], 14: [
                                [0, 2],
                                [21, 25]
                            ], 15: [
                                [0, 3],
                                [21, 29]
                            ], 16: [
                                [0, 3],
                                [21, 23], 81
                            ], 17: [
                                [0, 3],
                                [21, 25], 81
                            ], 18: [
                                [0, 3],
                                [21, 27]
                            ], 19: [
                                [0, 3],
                                [21, 23]
                            ], 20: [
                                [0, 2], 21, 22, 81
                            ], 32: [0, [21, 33]], 33: [0, [21, 38]], 34: [0, 1, [22, 37]] }, 52: { 0: [0], 1: [
                                [0, 3],
                                [11, 15],
                                [21, 23], 81
                            ], 2: [0, 1, 3, 21, 22], 3: [
                                [0, 3],
                                [21, 30], 81, 82
                            ], 4: [
                                [0, 2],
                                [21, 25]
                            ], 5: [
                                [0, 2],
                                [21, 27]
                            ], 6: [
                                [0, 3],
                                [21, 28]
                            ], 22: [0, 1, [22, 30]], 23: [0, 1, [22, 28]], 24: [0, 1, [22, 28]], 26: [0, 1, [22, 36]], 27: [
                                [0, 2], 22, 23, [25, 32]
                            ] }, 53: { 0: [0], 1: [
                                [0, 3],
                                [11, 14], 21, 22, [24, 29], 81
                            ], 3: [
                                [0, 2],
                                [21, 26], 28, 81
                            ], 4: [
                                [0, 2],
                                [21, 28]
                            ], 5: [
                                [0, 2],
                                [21, 24]
                            ], 6: [
                                [0, 2],
                                [21, 30]
                            ], 7: [
                                [0, 2],
                                [21, 24]
                            ], 8: [
                                [0, 2],
                                [21, 29]
                            ], 9: [
                                [0, 2],
                                [21, 27]
                            ], 23: [0, 1, [22, 29], 31], 25: [
                                [0, 4],
                                [22, 32]
                            ], 26: [0, 1, [21, 28]], 27: [0, 1, [22, 30]], 28: [0, 1, 22, 23], 29: [0, 1, [22, 32]], 31: [0, 2, 3, [22, 24]], 34: [0, [21, 23]], 33: [0, 21, [23, 25]], 35: [0, [21, 28]] }, 54: { 0: [0], 1: [
                                [0, 2],
                                [21, 27]
                            ], 21: [0, [21, 29], 32, 33], 22: [0, [21, 29],
                                [31, 33]
                            ], 23: [0, 1, [22, 38]], 24: [0, [21, 31]], 25: [0, [21, 27]], 26: [0, [21, 27]] }, 61: { 0: [0], 1: [
                                [0, 4],
                                [11, 16], 22, [24, 26]
                            ], 2: [
                                [0, 4], 22
                            ], 3: [
                                [0, 4],
                                [21, 24],
                                [26, 31]
                            ], 4: [
                                [0, 4],
                                [22, 31], 81
                            ], 5: [
                                [0, 2],
                                [21, 28], 81, 82
                            ], 6: [
                                [0, 2],
                                [21, 32]
                            ], 7: [
                                [0, 2],
                                [21, 30]
                            ], 8: [
                                [0, 2],
                                [21, 31]
                            ], 9: [
                                [0, 2],
                                [21, 29]
                            ], 10: [
                                [0, 2],
                                [21, 26]
                            ] }, 62: { 0: [0], 1: [
                                [0, 5], 11, [21, 23]
                            ], 2: [0, 1], 3: [
                                [0, 2], 21
                            ], 4: [
                                [0, 3],
                                [21, 23]
                            ], 5: [
                                [0, 3],
                                [21, 25]
                            ], 6: [
                                [0, 2],
                                [21, 23]
                            ], 7: [
                                [0, 2],
                                [21, 25]
                            ], 8: [
                                [0, 2],
                                [21, 26]
                            ], 9: [
                                [0, 2],
                                [21, 24], 81, 82
                            ], 10: [
                                [0, 2],
                                [21, 27]
                            ], 11: [
                                [0, 2],
                                [21, 26]
                            ], 12: [
                                [0, 2],
                                [21, 28]
                            ], 24: [0, 21, [24, 29]], 26: [0, 21, [23, 30]], 29: [0, 1, [21, 27]], 30: [0, 1, [21, 27]] }, 63: { 0: [0], 1: [
                                [0, 5],
                                [21, 23]
                            ], 2: [0, 2, [21, 25]], 21: [0, [21, 23],
                                [26, 28]
                            ], 22: [0, [21, 24]], 23: [0, [21, 24]], 25: [0, [21, 25]], 26: [0, [21, 26]], 27: [0, 1, [21, 26]], 28: [
                                [0, 2],
                                [21, 23]
                            ] }, 64: { 0: [0], 1: [0, 1, [4, 6], 21, 22, 81], 2: [
                                [0, 3], 5, [21, 23]
                            ], 3: [
                                [0, 3],
                                [21, 24], 81
                            ], 4: [
                                [0, 2],
                                [21, 25]
                            ], 5: [
                                [0, 2], 21, 22
                            ] }, 65: { 0: [0], 1: [
                                [0, 9], 21
                            ], 2: [
                                [0, 5]
                            ], 21: [0, 1, 22, 23], 22: [0, 1, 22, 23], 23: [
                                [0, 3],
                                [23, 25], 27, 28
                            ], 28: [0, 1, [22, 29]], 29: [0, 1, [22, 29]], 30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]], 32: [0, 1, [21, 27]], 40: [0, 2, 3, [21, 28]], 42: [
                                [0, 2], 21, [23, 26]
                            ], 43: [0, 1, [21, 26]], 90: [
                                [0, 4]
                            ], 27: [
                                [0, 2], 22, 23
                            ] }, 71: { 0: [0] }, 81: { 0: [0] }, 82: { 0: [0] } },
                    i = parseInt(e.substr(0, 2), 10),
                    r = parseInt(e.substr(2, 2), 10),
                    n = parseInt(e.substr(4, 2), 10); if (!a[i] || !a[i][r]) return !1; for (var s, o = !1, l = a[i][r], d = 0; d < l.length; d++)
                    if (t.isArray(l[d]) && l[d][0] <= n && n <= l[d][1] || !t.isArray(l[d]) && n === l[d]) { o = !0; break }
                if (!o) return !1;
                s = 18 === e.length ? e.substr(6, 8) : "19" + e.substr(6, 6); var u = parseInt(s.substr(0, 4), 10),
                    f = parseInt(s.substr(4, 2), 10),
                    c = parseInt(s.substr(6, 2), 10); if (!FormValidation.Helper.date(u, f, c)) return !1; if (18 === e.length) { var h = 0,
                        m = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; for (d = 0; d < 17; d++) h += parseInt(e.charAt(d), 10) * m[d]; return h = (12 - h % 11) % 11, ("X" !== e.charAt(17).toUpperCase() ? parseInt(e.charAt(17), 10) : 10) === h } return !0 }, _cz: function(t) { if (!/^\d{9,10}$/.test(t)) return !1; var e = 1900 + parseInt(t.substr(0, 2), 10),
                    a = parseInt(t.substr(2, 2), 10) % 50 % 20,
                    i = parseInt(t.substr(4, 2), 10); if (9 === t.length) { if (e >= 1980 && (e -= 100), e > 1953) return !1 } else e < 1954 && (e += 100); if (!FormValidation.Helper.date(e, a, i)) return !1; if (10 === t.length) { var r = parseInt(t.substr(0, 9), 10) % 11; return e < 1985 && (r %= 10), r + "" === t.substr(9, 1) } return !0 }, _dk: function(t) { if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t)) return !1;
                t = t.replace(/-/g, ""); var e = parseInt(t.substr(0, 2), 10),
                    a = parseInt(t.substr(2, 2), 10),
                    i = parseInt(t.substr(4, 2), 10); switch (!0) {
                    case -1 !== "5678".indexOf(t.charAt(6)) && i >= 58:
                        i += 1800; break;
                    case -1 !== "0123".indexOf(t.charAt(6)):
                    case -1 !== "49".indexOf(t.charAt(6)) && i >= 37:
                        i += 1900; break;
                    default:
                        i += 2e3 } return FormValidation.Helper.date(i, a, e) }, _ee: function(t) { return this._lt(t) }, _es: function(t) { var e, a = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t),
                    i = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t),
                    r = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(t); if (!a && !i && !r) return !1; if (t = t.replace(/-/g, ""), a || i) { var n = "XYZ".indexOf(t.charAt(0)); return -1 !== n && (t = n + t.substr(1) + ""), (e = "TRWAGMYFPDXBNJZSQVHLCKE" [(e = parseInt(t.substr(0, 8), 10)) % 23]) === t.substr(8, 1) }
                e = t.substr(1, 7); for (var s = t[0], o = t.substr(-1), l = 0, d = 0; d < e.length; d++)
                    if (d % 2 != 0) l += parseInt(e[d], 10);
                    else { var u = "" + 2 * parseInt(e[d], 10);
                        l += parseInt(u[0], 10), 2 === u.length && (l += parseInt(u[1], 10)) }
                var f = l - 10 * Math.floor(l / 10); return 0 !== f && (f = 10 - f), -1 !== "KQS".indexOf(s) ? o === "JABCDEFGHI" [f] : -1 !== "ABEH".indexOf(s) ? o === "" + f : o === "" + f || o === "JABCDEFGHI" [f] }, _fi: function(t) { if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(t)) return !1; var e = parseInt(t.substr(0, 2), 10),
                    a = parseInt(t.substr(2, 2), 10),
                    i = parseInt(t.substr(4, 2), 10); if (i = { "+": 1800, "-": 1900, A: 2e3 }[t.charAt(6)] + i, !FormValidation.Helper.date(i, a, e)) return !1; if (parseInt(t.substr(7, 3), 10) < 2) return !1; var r = t.substr(0, 6) + t.substr(7, 3) + ""; return r = parseInt(r, 10), "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(r % 31) === t.charAt(10) }, _hr: function(t) { return !!/^[0-9]{11}$/.test(t) && FormValidation.Helper.mod11And10(t) }, _ie: function(t) { if (!/^\d{7}[A-W][AHWTX]?$/.test(t)) return !1; var e = function(t) { for (; t.length < 7;) t = "0" + t; for (var e = 0, a = 0; a < 7; a++) e += parseInt(t.charAt(a), 10) * (8 - a); return "WABCDEFGHIJKLMNOPQRSTUV" [(e += 9 * "WABCDEFGHIJKLMNOPQRSTUV".indexOf(t.substr(7))) % 23] }; return 9 !== t.length || "A" !== t.charAt(8) && "H" !== t.charAt(8) ? t.charAt(7) === e(t.substr(0, 7)) : t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") }, _is: function(t) { if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t)) return !1;
                t = t.replace(/-/g, ""); var e = parseInt(t.substr(0, 2), 10),
                    a = parseInt(t.substr(2, 2), 10),
                    i = parseInt(t.substr(4, 2), 10),
                    r = parseInt(t.charAt(9), 10); if (i = 9 === r ? 1900 + i : 100 * (20 + r) + i, !FormValidation.Helper.date(i, a, e, !0)) return !1; for (var n = 0, s = [3, 2, 7, 6, 5, 4, 3, 2], o = 0; o < 8; o++) n += parseInt(t.charAt(o), 10) * s[o]; return (n = 11 - n % 11) + "" === t.charAt(8) }, _lt: function(t) { if (!/^[0-9]{11}$/.test(t)) return !1; var e = parseInt(t.charAt(0), 10),
                    a = parseInt(t.substr(1, 2), 10),
                    i = parseInt(t.substr(3, 2), 10),
                    r = parseInt(t.substr(5, 2), 10); if (a = 100 * (e % 2 == 0 ? 17 + e / 2 : 17 + (e + 1) / 2) + a, !FormValidation.Helper.date(a, i, r, !0)) return !1; for (var n = 0, s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], o = 0; o < 10; o++) n += parseInt(t.charAt(o), 10) * s[o]; if (10 !== (n %= 11)) return n + "" === t.charAt(10); for (n = 0, s = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], o = 0; o < 10; o++) n += parseInt(t.charAt(o), 10) * s[o]; return 10 === (n %= 11) && (n = 0), n + "" === t.charAt(10) }, _lv: function(t) { if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(t)) return !1;
                t = t.replace(/\D/g, ""); var e = parseInt(t.substr(0, 2), 10),
                    a = parseInt(t.substr(2, 2), 10),
                    i = parseInt(t.substr(4, 2), 10); if (i = i + 1800 + 100 * parseInt(t.charAt(6), 10), !FormValidation.Helper.date(i, a, e, !0)) return !1; for (var r = 0, n = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], s = 0; s < 10; s++) r += parseInt(t.charAt(s), 10) * n[s]; return (r = (r + 1) % 11 % 10) + "" === t.charAt(10) }, _nl: function(t) { for (; t.length < 9;) t = "0" + t; if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t)) return !1; if (t = t.replace(/\./g, ""), 0 === parseInt(t, 10)) return !1; for (var e = 0, a = t.length, i = 0; i < a - 1; i++) e += (9 - i) * parseInt(t.charAt(i), 10); return 10 === (e %= 11) && (e = 0), e + "" === t.charAt(a - 1) }, _pl: function(t) { if (!/^[0-9]{11}$/.test(t)) return !1; for (var e = 0, a = t.length, i = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7], r = 0; r < a - 1; r++) e += i[r] * parseInt(t.charAt(r), 10); return 0 === (e %= 10) && (e = 10), (e = 10 - e) + "" === t.charAt(a - 1) }, _ro: function(t) { if (!/^[0-9]{13}$/.test(t)) return !1; var e = parseInt(t.charAt(0), 10); if (0 === e || 7 === e || 8 === e) return !1; var a = parseInt(t.substr(1, 2), 10),
                    i = parseInt(t.substr(3, 2), 10),
                    r = parseInt(t.substr(5, 2), 10); if (r > 31 && i > 12) return !1; if (9 !== e && (a = { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 }[e + ""] + a, !FormValidation.Helper.date(a, i, r))) return !1; for (var n = 0, s = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], o = t.length, l = 0; l < o - 1; l++) n += parseInt(t.charAt(l), 10) * s[l]; return 10 === (n %= 11) && (n = 1), n + "" === t.charAt(o - 1) }, _se: function(t) { if (!/^[0-9]{10}$/.test(t) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(t)) return !1;
                t = t.replace(/[^0-9]/g, ""); var e = parseInt(t.substr(0, 2), 10) + 1900,
                    a = parseInt(t.substr(2, 2), 10),
                    i = parseInt(t.substr(4, 2), 10); return !!FormValidation.Helper.date(e, a, i) && FormValidation.Helper.luhn(t) }, _sk: function(t) { return this._cz(t) }, _sm: function(t) { return /^\d{5}$/.test(t) }, _th: function(t) { if (13 !== t.length) return !1; for (var e = 0, a = 0; a < 12; a++) e += parseInt(t.charAt(a), 10) * (13 - a); return (11 - e % 11) % 10 === parseInt(t.charAt(12), 10) }, _za: function(t) { if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(t)) return !1; var e = parseInt(t.substr(0, 2), 10),
                    a = (new Date).getFullYear() % 100,
                    i = parseInt(t.substr(2, 2), 10),
                    r = parseInt(t.substr(4, 2), 10); return e = e >= a ? e + 1900 : e + 2e3, !!FormValidation.Helper.date(e, i, r) && FormValidation.Helper.luhn(t) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { identical: { default: "Please enter the same value" } } }), FormValidation.Validator.identical = { html5Attributes: { message: "message", field: "field" }, init: function(t, e, a) { var i = t.getFieldElements(a.field);
                t.onLiveChange(i, "live_identical", function() { t.getStatus(e, "identical") !== t.STATUS_NOT_VALIDATED && t.revalidateField(e) }) }, destroy: function(t, e, a) { var i = t.getFieldElements(a.field);
                t.offLiveChange(i, "live_identical") }, validate: function(t, e, a) { var i = t.getFieldValue(e, "identical"),
                    r = t.getFieldElements(a.field); return null === r || 0 === r.length || i === t.getFieldValue(r, "identical") && (t.updateStatus(r, t.STATUS_VALID, "identical"), !0) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { imei: { default: "Please enter a valid IMEI number" } } }), FormValidation.Validator.imei = { validate: function(t, e, a) { var i = t.getFieldValue(e, "imei"); if ("" === i) return !0; switch (!0) {
                    case /^\d{15}$/.test(i):
                    case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(i):
                    case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(i):
                        return i = i.replace(/[^0-9]/g, ""), FormValidation.Helper.luhn(i);
                    case /^\d{14}$/.test(i):
                    case /^\d{16}$/.test(i):
                    case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(i):
                    case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(i):
                        return !0;
                    default:
                        return !1 } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { imo: { default: "Please enter a valid IMO number" } } }), FormValidation.Validator.imo = { validate: function(t, e, a) { var i = t.getFieldValue(e, "imo"); if ("" === i) return !0; if (!/^IMO \d{7}$/i.test(i)) return !1; for (var r = 0, n = i.replace(/^.*(\d{7})$/, "$1"), s = 6; s >= 1; s--) r += n.slice(6 - s, -s) * (s + 1); return r % 10 === parseInt(n.charAt(6), 10) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { integer: { default: "Please enter numbers only" } } }), FormValidation.Validator.integer = { enableByHtml5: function(t) { return "number" === t.attr("type") && (void 0 === t.attr("step") || t.attr("step") % 1 == 0) }, validate: function(t, e, a) { if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput) return !1; var i = t.getFieldValue(e, "integer"); return "" === i || /^(?:-?(?:0|[1-9][0-9]*))$/.test(i) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { ip: { default: "Please enter a valid IP address", ipv4: "Please enter a valid IPv4 address", ipv6: "Please enter a valid IPv6 address" } } }), FormValidation.Validator.ip = { html5Attributes: { message: "message", ipv4: "ipv4", ipv6: "ipv6" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "ip"); if ("" === r) return !0;
                i = t.extend({}, { ipv4: !0, ipv6: !0 }, i); var n, s = e.getLocale(),
                    o = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                    l = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                    d = !1; switch (!0) {
                    case i.ipv4 && !i.ipv6:
                        d = o.test(r), n = i.message || FormValidation.I18n[s].ip.ipv4; break;
                    case !i.ipv4 && i.ipv6:
                        d = l.test(r), n = i.message || FormValidation.I18n[s].ip.ipv6; break;
                    case i.ipv4 && i.ipv6:
                    default:
                        d = o.test(r) || l.test(r), n = i.message || FormValidation.I18n[s].ip.default } return { valid: d, message: n } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { isbn: { default: "Please enter a valid ISBN number" } } }), FormValidation.Validator.isbn = { validate: function(t, e, a) { var i, r = t.getFieldValue(e, "isbn"); if ("" === r) return !0; switch (!0) {
                    case /^\d{9}[\dX]$/.test(r):
                    case 13 === r.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):
                    case 13 === r.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):
                        i = "ISBN10"; break;
                    case /^(978|979)\d{9}[\dX]$/.test(r):
                    case 17 === r.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):
                    case 17 === r.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):
                        i = "ISBN13"; break;
                    default:
                        return !1 } var n, s, o = (r = r.replace(/[^0-9X]/gi, "")).split(""),
                    l = o.length,
                    d = 0; switch (i) {
                    case "ISBN10":
                        for (d = 0, n = 0; n < l - 1; n++) d += parseInt(o[n], 10) * (10 - n); return 11 === (s = 11 - d % 11) ? s = 0 : 10 === s && (s = "X"), s + "" === o[l - 1];
                    case "ISBN13":
                        for (d = 0, n = 0; n < l - 1; n++) d += n % 2 == 0 ? parseInt(o[n], 10) : 3 * parseInt(o[n], 10); return 10 === (s = 10 - d % 10) && (s = "0"), s + "" === o[l - 1];
                    default:
                        return !1 } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { isin: { default: "Please enter a valid ISIN number" } } }), FormValidation.Validator.isin = { COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW", validate: function(t, e, a) { var i = t.getFieldValue(e, "isin"); if ("" === i) return !0; if (i = i.toUpperCase(), !new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$").test(i)) return !1; for (var r = "", n = i.length, s = 0; s < n - 1; s++) { var o = i.charCodeAt(s);
                    r += o > 57 ? (o - 55).toString() : i.charAt(s) } var l = "",
                    d = r.length,
                    u = d % 2 != 0 ? 0 : 1; for (s = 0; s < d; s++) l += parseInt(r[s], 10) * (s % 2 === u ? 2 : 1) + ""; var f = 0; for (s = 0; s < l.length; s++) f += parseInt(l.charAt(s), 10); return (f = (10 - f % 10) % 10) + "" === i.charAt(n - 1) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { ismn: { default: "Please enter a valid ISMN number" } } }), FormValidation.Validator.ismn = { validate: function(t, e, a) { var i, r = t.getFieldValue(e, "ismn"); if ("" === r) return !0; switch (!0) {
                    case /^M\d{9}$/.test(r):
                    case /^M-\d{4}-\d{4}-\d{1}$/.test(r):
                    case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(r):
                        i = "ISMN10"; break;
                    case /^9790\d{9}$/.test(r):
                    case /^979-0-\d{4}-\d{4}-\d{1}$/.test(r):
                    case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(r):
                        i = "ISMN13"; break;
                    default:
                        return !1 } "ISMN10" === i && (r = "9790" + r.substr(1)); for (var n = (r = r.replace(/[^0-9]/gi, "")).length, s = 0, o = [1, 3], l = 0; l < n - 1; l++) s += parseInt(r.charAt(l), 10) * o[l % 2]; return (s = 10 - s % 10) + "" === r.charAt(n - 1) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { issn: { default: "Please enter a valid ISSN number" } } }), FormValidation.Validator.issn = { validate: function(t, e, a) { var i = t.getFieldValue(e, "issn"); if ("" === i) return !0; if (!/^\d{4}\-\d{3}[\dX]$/.test(i)) return !1; var r = (i = i.replace(/[^0-9X]/gi, "")).split(""),
                    n = r.length,
                    s = 0; "X" === r[7] && (r[7] = 10); for (var o = 0; o < n; o++) s += parseInt(r[o], 10) * (8 - o); return s % 11 == 0 } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { lessThan: { default: "Please enter a value less than or equal to %s", notInclusive: "Please enter a value less than %s" } } }), FormValidation.Validator.lessThan = { html5Attributes: { message: "message", value: "value", inclusive: "inclusive" }, enableByHtml5: function(t) { var e = t.attr("type"),
                    a = t.attr("max"); return !(!a || "date" === e) && { value: a } }, validate: function(e, a, i) { var r = e.getFieldValue(a, "lessThan"); if ("" === r) return !0; if (r = this._format(r), !t.isNumeric(r)) return !1; var n = e.getLocale(),
                    s = t.isNumeric(i.value) ? i.value : e.getDynamicOption(a, i.value),
                    o = this._format(s); return r = parseFloat(r), !0 === i.inclusive || void 0 === i.inclusive ? { valid: r <= o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].lessThan.default, s) } : { valid: r < o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].lessThan.notInclusive, s) } }, _format: function(t) { return (t + "").replace(",", ".") } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { mac: { default: "Please enter a valid MAC address" } } }), FormValidation.Validator.mac = { validate: function(t, e, a) { var i = t.getFieldValue(e, "mac"); return "" === i || /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(i) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { meid: { default: "Please enter a valid MEID number" } } }), FormValidation.Validator.meid = { validate: function(t, e, a) { var i = t.getFieldValue(e, "meid"); if ("" === i) return !0; switch (!0) {
                    case /^[0-9A-F]{15}$/i.test(i):
                    case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(i):
                    case /^\d{19}$/.test(i):
                    case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(i):
                        var r = i.charAt(i.length - 1); if ((i = i.replace(/[- ]/g, "")).match(/^\d*$/i)) return FormValidation.Helper.luhn(i);
                        i = i.slice(0, -1); for (var n = "", s = 1; s <= 13; s += 2) n += (2 * parseInt(i.charAt(s), 16)).toString(16); var o = 0; for (s = 0; s < n.length; s++) o += parseInt(n.charAt(s), 16); return o % 10 == 0 ? "0" === r : r === (2 * (10 * Math.floor((o + 10) / 10) - o)).toString(16);
                    case /^[0-9A-F]{14}$/i.test(i):
                    case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(i):
                    case /^\d{18}$/.test(i):
                    case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(i):
                        return !0;
                    default:
                        return !1 } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { notEmpty: { default: "Please enter a value" } } }), FormValidation.Validator.notEmpty = { enableByHtml5: function(t) { var e = t.attr("required") + ""; return "required" === e || "true" === e }, validate: function(e, a, i) { var r = a.attr("type"); if ("radio" === r || "checkbox" === r) { var n = e.getNamespace(); return e.getFieldElements(a.attr("data-" + n + "-field")).filter(":checked").length > 0 } if ("number" === r && a.get(0).validity && !0 === a.get(0).validity.badInput) return !0; var s = e.getFieldValue(a, "notEmpty"); return "" !== t.trim(s) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { numeric: { default: "Please enter a valid float number" } } }), FormValidation.Validator.numeric = { html5Attributes: { message: "message", separator: "separator" }, enableByHtml5: function(t) { return "number" === t.attr("type") && void 0 !== t.attr("step") && t.attr("step") % 1 != 0 }, validate: function(t, e, a) { if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput) return !1; var i = t.getFieldValue(e, "numeric"); if ("" === i) return !0; var r = a.separator || "."; return "." !== r && (i = i.replace(r, ".")), !isNaN(parseFloat(i)) && isFinite(i) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { phone: { default: "Please enter a valid phone number", country: "Please enter a valid phone number in %s", countries: { AE: "United Arab Emirates", BG: "Bulgaria", BR: "Brazil", CN: "China", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", ES: "Spain", FR: "France", GB: "United Kingdom", IN: "India", MA: "Morocco", NL: "Netherlands", PK: "Pakistan", RO: "Romania", RU: "Russia", SK: "Slovakia", TH: "Thailand", US: "USA", VE: "Venezuela" } } } }), FormValidation.Validator.phone = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["AE", "BG", "BR", "CN", "CZ", "DE", "DK", "ES", "FR", "GB", "IN", "MA", "NL", "PK", "RO", "RU", "SK", "TH", "US", "VE"], validate: function(e, a, i) { var r = e.getFieldValue(a, "phone"); if ("" === r) return !0; var n = e.getLocale(),
                    s = i.country; if ("string" == typeof s && -1 !== t.inArray(s, this.COUNTRY_CODES) || (s = e.getDynamicOption(a, s)), !s || -1 === t.inArray(s.toUpperCase(), this.COUNTRY_CODES)) return !0; var o = !0; switch (s.toUpperCase()) {
                    case "AE":
                        r = t.trim(r), o = /^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(r); break;
                    case "BG":
                        r = r.replace(/\+|\s|-|\/|\(|\)/gi, ""), o = /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(r); break;
                    case "BR":
                        r = t.trim(r), o = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(r); break;
                    case "CN":
                        r = t.trim(r), o = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(r); break;
                    case "CZ":
                        o = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r); break;
                    case "DE":
                        r = t.trim(r), o = /^(((((((00|\+)49[ \-\/]?)|0)[1-9][0-9]{1,4})[ \-\/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-\/]?))[0-9]{1,7}([ \-\/]?[0-9]{1,5})?)$/.test(r); break;
                    case "DK":
                        r = t.trim(r), o = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(r); break;
                    case "ES":
                        r = t.trim(r), o = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(r); break;
                    case "FR":
                        r = t.trim(r), o = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(r); break;
                    case "GB":
                        r = t.trim(r), o = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(r); break;
                    case "IN":
                        r = t.trim(r), o = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(r); break;
                    case "MA":
                        r = t.trim(r), o = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(r); break;
                    case "NL":
                        r = t.trim(r), o = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(r); break;
                    case "PK":
                        r = t.trim(r), o = /^0?3[0-9]{2}[0-9]{7}$/.test(r); break;
                    case "RO":
                        o = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(r); break;
                    case "RU":
                        o = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(r); break;
                    case "SK":
                        o = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r); break;
                    case "TH":
                        o = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(r); break;
                    case "VE":
                        r = t.trim(r), o = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(r); break;
                    case "US":
                    default:
                        o = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(r) } return { valid: o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].phone.country, FormValidation.I18n[n].phone.countries[s]) } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { regexp: { default: "Please enter a value matching the pattern" } } }), FormValidation.Validator.regexp = { html5Attributes: { message: "message", regexp: "regexp" }, enableByHtml5: function(t) { var e = t.attr("pattern"); return !!e && { regexp: e } }, validate: function(t, e, a) { var i = t.getFieldValue(e, "regexp"); return "" === i || ("string" == typeof a.regexp ? new RegExp(a.regexp) : a.regexp).test(i) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { remote: { default: "Please enter a valid value" } } }), FormValidation.Validator.remote = { html5Attributes: { crossdomain: "crossDomain", data: "data", datatype: "dataType", delay: "delay", message: "message", name: "name", type: "type", url: "url", validkey: "validKey" }, destroy: function(t, e, a) { var i = t.getNamespace(),
                    r = e.data(i + ".remote.timer");
                r && (clearTimeout(r), e.removeData(i + ".remote.timer")) }, validate: function(e, a, i) { var r = e.getNamespace(),
                    n = e.getFieldValue(a, "remote"),
                    s = new t.Deferred; if ("" === n) return s.resolve(a, "remote", { valid: !0 }), s; var o = a.attr("data-" + r + "-field"),
                    l = i.data || {},
                    d = i.url,
                    u = i.validKey || "valid"; "function" == typeof l && (l = l.call(this, e)), "string" == typeof l && (l = JSON.parse(l)), "function" == typeof d && (d = d.call(this, e)), l[i.name || o] = n; var f = { data: l, dataType: i.dataType || "json", headers: i.headers || {}, type: i.type || "GET", url: d };

                function c() { var e = t.ajax(f); return e.success(function(t) { t.valid = !0 === t[u] || "true" === t[u] || !1 !== t[u] && "false" !== t[u] && null, s.resolve(a, "remote", t) }).error(function(t) { s.resolve(a, "remote", { valid: !1 }) }), s.fail(function() { e.abort() }), s } return null !== i.crossDomain && (f.crossDomain = !0 === i.crossDomain || "true" === i.crossDomain), i.delay ? (a.data(r + ".remote.timer") && clearTimeout(a.data(r + ".remote.timer")), a.data(r + ".remote.timer", setTimeout(c, i.delay)), s) : c() } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { rtn: { default: "Please enter a valid RTN number" } } }), FormValidation.Validator.rtn = { validate: function(t, e, a) { var i = t.getFieldValue(e, "rtn"); if ("" === i) return !0; if (!/^\d{9}$/.test(i)) return !1; for (var r = 0, n = 0; n < i.length; n += 3) r += 3 * parseInt(i.charAt(n), 10) + 7 * parseInt(i.charAt(n + 1), 10) + parseInt(i.charAt(n + 2), 10); return 0 !== r && r % 10 == 0 } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { sedol: { default: "Please enter a valid SEDOL number" } } }), FormValidation.Validator.sedol = { validate: function(t, e, a) { var i = t.getFieldValue(e, "sedol"); if ("" === i) return !0; if (i = i.toUpperCase(), !/^[0-9A-Z]{7}$/.test(i)) return !1; for (var r = 0, n = [1, 3, 1, 7, 3, 9, 1], s = i.length, o = 0; o < s - 1; o++) r += n[o] * parseInt(i.charAt(o), 36); return (r = (10 - r % 10) % 10) + "" === i.charAt(s - 1) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { siren: { default: "Please enter a valid SIREN number" } } }), FormValidation.Validator.siren = { validate: function(t, e, a) { var i = t.getFieldValue(e, "siren"); return "" === i || !!/^\d{9}$/.test(i) && FormValidation.Helper.luhn(i) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { siret: { default: "Please enter a valid SIRET number" } } }), FormValidation.Validator.siret = { validate: function(t, e, a) { var i = t.getFieldValue(e, "siret"); if ("" === i) return !0; for (var r, n = 0, s = i.length, o = 0; o < s; o++) r = parseInt(i.charAt(o), 10), o % 2 == 0 && (r *= 2) > 9 && (r -= 9), n += r; return n % 10 == 0 } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { step: { default: "Please enter a valid step of %s" } } }), FormValidation.Validator.step = { html5Attributes: { message: "message", base: "baseValue", step: "step" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "step"); if ("" === r) return !0; if (i = t.extend({}, { baseValue: 0, step: 1 }, i), r = parseFloat(r), !t.isNumeric(r)) return !1; var n = e.getLocale(),
                    s = function(t, e) { if (0 === e) return 1; var a = (t + "").split("."),
                            i = (e + "").split("."),
                            r = (1 === a.length ? 0 : a[1].length) + (1 === i.length ? 0 : i[1].length); return function(t, e) { var a = Math.pow(10, e),
                                i = (t *= a) > 0 | -(t < 0); return t % 1 == .5 * i ? (Math.floor(t) + (i > 0)) / a : Math.round(t) / a }(t - e * Math.floor(t / e), r) }(r - i.baseValue, i.step); return { valid: 0 === s || s === i.step, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].step.default, [i.step]) } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { stringCase: { default: "Please enter only lowercase characters", upper: "Please enter only uppercase characters" } } }), FormValidation.Validator.stringCase = { html5Attributes: { message: "message", case: "case" }, validate: function(t, e, a) { var i = t.getFieldValue(e, "stringCase"); if ("" === i) return !0; var r = t.getLocale(),
                    n = (a.case || "lower").toLowerCase(); return { valid: "upper" === n ? i === i.toUpperCase() : i === i.toLowerCase(), message: a.message || ("upper" === n ? FormValidation.I18n[r].stringCase.upper : FormValidation.I18n[r].stringCase.default) } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { stringLength: { default: "Please enter a value with valid length", less: "Please enter less than %s characters", more: "Please enter more than %s characters", between: "Please enter value between %s and %s characters long" } } }), FormValidation.Validator.stringLength = { html5Attributes: { message: "message", min: "min", max: "max", trim: "trim", utf8bytes: "utf8Bytes" }, enableByHtml5: function(e) { var a = {},
                    i = e.attr("maxlength"),
                    r = e.attr("minlength"); return i && (a.max = parseInt(i, 10)), r && (a.min = parseInt(r, 10)), !t.isEmptyObject(a) && a }, validate: function(e, a, i) { var r = e.getFieldValue(a, "stringLength"); if (!0 !== i.trim && "true" !== i.trim || (r = t.trim(r)), "" === r) return !0; var n = e.getLocale(),
                    s = t.isNumeric(i.min) ? i.min : e.getDynamicOption(a, i.min),
                    o = t.isNumeric(i.max) ? i.max : e.getDynamicOption(a, i.max),
                    l = i.utf8Bytes ? function(t) { for (var e = t.length, a = t.length - 1; a >= 0; a--) { var i = t.charCodeAt(a);
                            i > 127 && i <= 2047 ? e++ : i > 2047 && i <= 65535 && (e += 2), i >= 56320 && i <= 57343 && a-- } return e }(r) : r.length,
                    d = !0,
                    u = i.message || FormValidation.I18n[n].stringLength.default; switch ((s && l < parseInt(s, 10) || o && l > parseInt(o, 10)) && (d = !1), !0) {
                    case !!s && !!o:
                        u = FormValidation.Helper.format(i.message || FormValidation.I18n[n].stringLength.between, [parseInt(s, 10), parseInt(o, 10)]); break;
                    case !!s:
                        u = FormValidation.Helper.format(i.message || FormValidation.I18n[n].stringLength.more, parseInt(s, 10)); break;
                    case !!o:
                        u = FormValidation.Helper.format(i.message || FormValidation.I18n[n].stringLength.less, parseInt(o, 10)) } return { valid: d, message: u } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { uri: { default: "Please enter a valid URI" } } }), FormValidation.Validator.uri = { html5Attributes: { message: "message", allowlocal: "allowLocal", allowemptyprotocol: "allowEmptyProtocol", protocol: "protocol" }, enableByHtml5: function(t) { return "url" === t.attr("type") }, validate: function(t, e, a) { var i = t.getFieldValue(e, "uri"); if ("" === i) return !0; var r = !0 === a.allowLocal || "true" === a.allowLocal,
                    n = !0 === a.allowEmptyProtocol || "true" === a.allowEmptyProtocol,
                    s = (a.protocol || "http, https, ftp").split(",").join("|").replace(/\s/g, ""); return new RegExp("^(?:(?:" + s + ")://)" + (n ? "?" : "") + "(?:\\S+(?::\\S*)?@)?(?:" + (r ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (r ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$", "i").test(i) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { uuid: { default: "Please enter a valid UUID number", version: "Please enter a valid UUID version %s number" } } }), FormValidation.Validator.uuid = { html5Attributes: { message: "message", version: "version" }, validate: function(t, e, a) { var i = t.getFieldValue(e, "uuid"); if ("" === i) return !0; var r = t.getLocale(),
                    n = { 3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, 5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i },
                    s = a.version ? a.version + "" : "all"; return { valid: null === n[s] || n[s].test(i), message: a.version ? FormValidation.Helper.format(a.message || FormValidation.I18n[r].uuid.version, a.version) : a.message || FormValidation.I18n[r].uuid.default } } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { vat: { default: "Please enter a valid VAT number", country: "Please enter a valid VAT number in %s", countries: { AT: "Austria", BE: "Belgium", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", FR: "France", GB: "United Kingdom", GR: "Greek", EL: "Greek", HU: "Hungary", HR: "Croatia", IE: "Ireland", IS: "Iceland", IT: "Italy", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MT: "Malta", NL: "Netherlands", NO: "Norway", PL: "Poland", PT: "Portugal", RO: "Romania", RU: "Russia", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", VE: "Venezuela", ZA: "South Africa" } } } }), FormValidation.Validator.vat = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA"], validate: function(e, a, i) { var r = e.getFieldValue(a, "vat"); if ("" === r) return !0; var n = e.getLocale(),
                    s = i.country; return s ? "string" == typeof s && -1 !== t.inArray(s.toUpperCase(), this.COUNTRY_CODES) || (s = e.getDynamicOption(a, s)) : s = r.substr(0, 2), -1 === t.inArray(s, this.COUNTRY_CODES) || (!!this[["_", s.toLowerCase()].join("")](r) || { valid: !1, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].vat.country, FormValidation.I18n[n].vat.countries[s.toUpperCase()]) }) }, _at: function(t) { if (/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^U[0-9]{8}$/.test(t)) return !1;
                t = t.substr(1); for (var e = 0, a = [1, 2, 1, 2, 1, 2, 1], i = 0, r = 0; r < 7; r++)(i = parseInt(t.charAt(r), 10) * a[r]) > 9 && (i = Math.floor(i / 10) + i % 10), e += i; return 10 === (e = 10 - (e + 4) % 10) && (e = 0), e + "" === t.substr(7, 1) }, _be: function(t) { return /^BE[0]{0,1}[0-9]{9}$/.test(t) && (t = t.substr(2)), !!/^[0]{0,1}[0-9]{9}$/.test(t) && (9 === t.length && (t = "0" + t), "0" !== t.substr(1, 1) && (parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10)) % 97 == 0) }, _bg: function(t) { if (/^BG[0-9]{9,10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9,10}$/.test(t)) return !1; var e = 0,
                    a = 0; if (9 === t.length) { for (a = 0; a < 8; a++) e += parseInt(t.charAt(a), 10) * (a + 1); if (10 === (e %= 11))
                        for (e = 0, a = 0; a < 8; a++) e += parseInt(t.charAt(a), 10) * (a + 3); return (e %= 10) + "" === t.substr(8) } if (10 === t.length) { return function(t) { var e = parseInt(t.substr(0, 2), 10) + 1900,
                            a = parseInt(t.substr(2, 2), 10),
                            i = parseInt(t.substr(4, 2), 10); if (a > 40 ? (e += 100, a -= 40) : a > 20 && (e -= 100, a -= 20), !FormValidation.Helper.date(e, a, i)) return !1; for (var r = 0, n = [2, 4, 8, 5, 10, 9, 7, 3, 6], s = 0; s < 9; s++) r += parseInt(t.charAt(s), 10) * n[s]; return (r = r % 11 % 10) + "" === t.substr(9, 1) }(t) || function(t) { for (var e = 0, a = [21, 19, 17, 13, 11, 9, 7, 3, 1], i = 0; i < 9; i++) e += parseInt(t.charAt(i), 10) * a[i]; return (e %= 10) + "" === t.substr(9, 1) }(t) || function(t) { for (var e = 0, a = [4, 3, 2, 7, 6, 5, 4, 3, 2], i = 0; i < 9; i++) e += parseInt(t.charAt(i), 10) * a[i]; return 10 != (e = 11 - e % 11) && (11 === e && (e = 0), e + "" === t.substr(9, 1)) }(t) } return !1 }, _br: function(t) { if ("" === t) return !0; var e = t.replace(/[^\d]+/g, ""); if ("" === e || 14 !== e.length) return !1; if ("00000000000000" === e || "11111111111111" === e || "22222222222222" === e || "33333333333333" === e || "44444444444444" === e || "55555555555555" === e || "66666666666666" === e || "77777777777777" === e || "88888888888888" === e || "99999999999999" === e) return !1; for (var a = e.length - 2, i = e.substring(0, a), r = e.substring(a), n = 0, s = a - 7, o = a; o >= 1; o--) n += parseInt(i.charAt(a - o), 10) * s--, s < 2 && (s = 9); var l = n % 11 < 2 ? 0 : 11 - n % 11; if (l !== parseInt(r.charAt(0), 10)) return !1; for (a += 1, i = e.substring(0, a), n = 0, s = a - 7, o = a; o >= 1; o--) n += parseInt(i.charAt(a - o), 10) * s--, s < 2 && (s = 9); return (l = n % 11 < 2 ? 0 : 11 - n % 11) === parseInt(r.charAt(1), 10) }, _ch: function(t) { if (/^CHE[0-9]{9}(MWST)?$/.test(t) && (t = t.substr(2)), !/^E[0-9]{9}(MWST)?$/.test(t)) return !1;
                t = t.substr(1); for (var e = 0, a = [5, 4, 3, 2, 7, 6, 5, 4], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return 10 != (e = 11 - e % 11) && (11 === e && (e = 0), e + "" === t.substr(8, 1)) }, _cy: function(t) { if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t) && (t = t.substr(2)), !/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t)) return !1; if ("12" === t.substr(0, 2)) return !1; for (var e = 0, a = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 }, i = 0; i < 8; i++) { var r = parseInt(t.charAt(i), 10);
                    i % 2 == 0 && (r = a[r + ""]), e += r } return (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [e % 26]) + "" === t.substr(8, 1) }, _cz: function(t) { if (/^CZ[0-9]{8,10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8,10}$/.test(t)) return !1; var e = 0,
                    a = 0; if (8 === t.length) { if (t.charAt(0) + "" == "9") return !1; for (e = 0, a = 0; a < 7; a++) e += parseInt(t.charAt(a), 10) * (8 - a); return 10 === (e = 11 - e % 11) && (e = 0), 11 === e && (e = 1), e + "" === t.substr(7, 1) } if (9 === t.length && t.charAt(0) + "" == "6") { for (e = 0, a = 0; a < 7; a++) e += parseInt(t.charAt(a + 1), 10) * (8 - a); return 10 === (e = 11 - e % 11) && (e = 0), 11 === e && (e = 1), (e = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][e - 1]) + "" === t.substr(8, 1) } if (9 === t.length || 10 === t.length) { var i = 1900 + parseInt(t.substr(0, 2), 10),
                        r = parseInt(t.substr(2, 2), 10) % 50 % 20,
                        n = parseInt(t.substr(4, 2), 10); if (9 === t.length) { if (i >= 1980 && (i -= 100), i > 1953) return !1 } else i < 1954 && (i += 100); if (!FormValidation.Helper.date(i, r, n)) return !1; if (10 === t.length) { var s = parseInt(t.substr(0, 9), 10) % 11; return i < 1985 && (s %= 10), s + "" === t.substr(9, 1) } return !0 } return !1 }, _de: function(t) { return /^DE[0-9]{9}$/.test(t) && (t = t.substr(2)), !!/^[0-9]{9}$/.test(t) && FormValidation.Helper.mod11And10(t) }, _dk: function(t) { if (/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1; for (var e = 0, a = [2, 7, 6, 5, 4, 3, 2, 1], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 11 == 0 }, _ee: function(t) { if (/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1; for (var e = 0, a = [3, 7, 1, 3, 7, 1, 3, 7, 1], i = 0; i < 9; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 10 == 0 }, _es: function(t) { if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)), !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t)) return !1; var e = t.charAt(0); return /^[0-9]$/.test(e) ? function(t) { var e = parseInt(t.substr(0, 8), 10); return (e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23]) + "" === t.substr(8, 1) }(t) : /^[XYZ]$/.test(e) ? function(t) { var e = ["XYZ".indexOf(t.charAt(0)), t.substr(1)].join(""); return (e = "TRWAGMYFPDXBNJZSQVHLCKE" [(e = parseInt(e, 10)) % 23]) + "" === t.substr(8, 1) }(t) : function(t) { var e = t.charAt(0); if (-1 !== "KLM".indexOf(e)) return "TRWAGMYFPDXBNJZSQVHLCKE" [parseInt(t.substr(1, 8), 10) % 23] + "" === t.substr(8, 1); if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(e)) { for (var a = 0, i = [2, 1, 2, 1, 2, 1, 2], r = 0, n = 0; n < 7; n++)(r = parseInt(t.charAt(n + 1), 10) * i[n]) > 9 && (r = Math.floor(r / 10) + r % 10), a += r; return 10 == (a = 10 - a % 10) && (a = 0), a + "" === t.substr(8, 1) || "JABCDEFGHI" [a] === t.substr(8, 1) } return !1 }(t) }, _fi: function(t) { if (/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1; for (var e = 0, a = [7, 9, 10, 5, 8, 4, 2, 1], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 11 == 0 }, _fr: function(t) { if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9A-Z]{2}[0-9]{9}$/.test(t)) return !1; if (!FormValidation.Helper.luhn(t.substr(2))) return !1; if (/^[0-9]{2}$/.test(t.substr(0, 2))) return t.substr(0, 2) === parseInt(t.substr(2) + "12", 10) % 97 + ""; var e, a = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"; return e = /^[0-9]{1}$/.test(t.charAt(0)) ? 24 * a.indexOf(t.charAt(0)) + a.indexOf(t.charAt(1)) - 10 : 34 * a.indexOf(t.charAt(0)) + a.indexOf(t.charAt(1)) - 100, (parseInt(t.substr(2), 10) + 1 + Math.floor(e / 11)) % 11 == e % 11 }, _gb: function(t) { if ((/^GB[0-9]{9}$/.test(t) || /^GB[0-9]{12}$/.test(t) || /^GBGD[0-9]{3}$/.test(t) || /^GBHA[0-9]{3}$/.test(t) || /^GB(GD|HA)8888[0-9]{5}$/.test(t)) && (t = t.substr(2)), !(/^[0-9]{9}$/.test(t) || /^[0-9]{12}$/.test(t) || /^GD[0-9]{3}$/.test(t) || /^HA[0-9]{3}$/.test(t) || /^(GD|HA)8888[0-9]{5}$/.test(t))) return !1; var e = t.length; if (5 === e) { var a = t.substr(0, 2),
                        i = parseInt(t.substr(2), 10); return "GD" === a && i < 500 || "HA" === a && i >= 500 } if (11 === e && ("GD8888" === t.substr(0, 6) || "HA8888" === t.substr(0, 6))) return !("GD" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) >= 500 || "HA" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) < 500) && parseInt(t.substr(6, 3), 10) % 97 === parseInt(t.substr(9, 2), 10); if (9 === e || 12 === e) { for (var r = 0, n = [8, 7, 6, 5, 4, 3, 2, 10, 1], s = 0; s < 9; s++) r += parseInt(t.charAt(s), 10) * n[s]; return r %= 97, parseInt(t.substr(0, 3), 10) >= 100 ? 0 === r || 42 === r || 55 === r : 0 === r } return !0 }, _gr: function(t) { if (/^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
                8 === t.length && (t = "0" + t); for (var e = 0, a = [256, 128, 64, 32, 16, 8, 4, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return (e = e % 11 % 10) + "" === t.substr(8, 1) }, _el: function(t) { return this._gr(t) }, _hu: function(t) { if (/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1; for (var e = 0, a = [9, 7, 3, 1, 9, 7, 3, 1], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 10 == 0 }, _hr: function(t) { return /^HR[0-9]{11}$/.test(t) && (t = t.substr(2)), !!/^[0-9]{11}$/.test(t) && FormValidation.Helper.mod11And10(t) }, _ie: function(t) { if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)), !/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t)) return !1; var e = function(t) { for (; t.length < 7;) t = "0" + t; for (var e = 0, a = 0; a < 7; a++) e += parseInt(t.charAt(a), 10) * (8 - a); return "WABCDEFGHIJKLMNOPQRSTUV" [(e += 9 * "WABCDEFGHIJKLMNOPQRSTUV".indexOf(t.substr(7))) % 23] }; return /^[0-9]+$/.test(t.substr(0, 7)) ? t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") : -1 === "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(t.charAt(1)) || t.charAt(7) === e(t.substr(2, 5) + t.substr(0, 1) + "") }, _is: function(t) { return /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)), /^[0-9]{5,6}$/.test(t) }, _it: function(t) { if (/^IT[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)) return !1; if (0 === parseInt(t.substr(0, 7), 10)) return !1; var e = parseInt(t.substr(7, 3), 10); return !(e < 1 || e > 201 && 999 !== e && 888 !== e) && FormValidation.Helper.luhn(t) }, _lt: function(t) { if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t) && (t = t.substr(2)), !/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t)) return !1; var e, a = t.length,
                    i = 0; for (e = 0; e < a - 1; e++) i += parseInt(t.charAt(e), 10) * (1 + e % 9); var r = i % 11; if (10 === r)
                    for (i = 0, e = 0; e < a - 1; e++) i += parseInt(t.charAt(e), 10) * (1 + (e + 2) % 9); return (r = r % 11 % 10) + "" === t.charAt(a - 1) }, _lu: function(t) { return /^LU[0-9]{8}$/.test(t) && (t = t.substr(2)), !!/^[0-9]{8}$/.test(t) && parseInt(t.substr(0, 6), 10) % 89 + "" === t.substr(6, 2) }, _lv: function(t) { if (/^LV[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)) return !1; var e, a = parseInt(t.charAt(0), 10),
                    i = 0,
                    r = [],
                    n = t.length; if (a > 3) { for (i = 0, r = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], e = 0; e < n; e++) i += parseInt(t.charAt(e), 10) * r[e]; return 3 === (i %= 11) } var s = parseInt(t.substr(0, 2), 10),
                    o = parseInt(t.substr(2, 2), 10),
                    l = parseInt(t.substr(4, 2), 10); if (l = l + 1800 + 100 * parseInt(t.charAt(6), 10), !FormValidation.Helper.date(l, o, s)) return !1; for (i = 0, r = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], e = 0; e < n - 1; e++) i += parseInt(t.charAt(e), 10) * r[e]; return (i = (i + 1) % 11 % 10) + "" === t.charAt(n - 1) }, _mt: function(t) { if (/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1; for (var e = 0, a = [3, 4, 6, 7, 8, 9, 10, 1], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 37 == 0 }, _nl: function(t) { if (/^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}B[0-9]{2}$/.test(t)) return !1; for (var e = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return (e %= 11) > 9 && (e = 0), e + "" === t.substr(8, 1) }, _no: function(t) { if (/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1; for (var e = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return 11 === (e = 11 - e % 11) && (e = 0), e + "" === t.substr(8, 1) }, _pl: function(t) { if (/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{10}$/.test(t)) return !1; for (var e = 0, a = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], i = 0; i < 10; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 11 == 0 }, _pt: function(t) { if (/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1; for (var e = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return (e = 11 - e % 11) > 9 && (e = 0), e + "" === t.substr(8, 1) }, _ro: function(t) { if (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)), !/^[1-9][0-9]{1,9}$/.test(t)) return !1; for (var e = t.length, a = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - e), i = 0, r = 0; r < e - 1; r++) i += parseInt(t.charAt(r), 10) * a[r]; return (i = 10 * i % 11 % 10) + "" === t.substr(e - 1, 1) }, _ru: function(t) { if (/^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2)), !/^([0-9]{10}|[0-9]{12})$/.test(t)) return !1; var e = 0; if (10 === t.length) { var a = 0,
                        i = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0]; for (e = 0; e < 10; e++) a += parseInt(t.charAt(e), 10) * i[e]; return (a %= 11) > 9 && (a %= 10), a + "" === t.substr(9, 1) } if (12 === t.length) { var r = 0,
                        n = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                        s = 0,
                        o = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]; for (e = 0; e < 11; e++) r += parseInt(t.charAt(e), 10) * n[e], s += parseInt(t.charAt(e), 10) * o[e]; return (r %= 11) > 9 && (r %= 10), (s %= 11) > 9 && (s %= 10), r + "" === t.substr(10, 1) && s + "" === t.substr(11, 1) } return !1 }, _rs: function(t) { if (/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1; for (var e = 10, a = 0, i = 0; i < 8; i++) 0 === (a = (parseInt(t.charAt(i), 10) + e) % 10) && (a = 10), e = 2 * a % 11; return (e + parseInt(t.substr(8, 1), 10)) % 10 == 1 }, _se: function(t) { return /^SE[0-9]{10}01$/.test(t) && (t = t.substr(2)), !!/^[0-9]{10}01$/.test(t) && (t = t.substr(0, 10), FormValidation.Helper.luhn(t)) }, _si: function(t) { var e = t.match(/^(SI)?([1-9][0-9]{7})$/); if (!e) return !1;
                e[1] && (t = t.substr(2)); for (var a = 0, i = [8, 7, 6, 5, 4, 3, 2], r = 0; r < 7; r++) a += parseInt(t.charAt(r), 10) * i[r]; return 10 === (a = 11 - a % 11) && (a = 0), a + "" === t.substr(7, 1) }, _sk: function(t) { return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)), !!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && parseInt(t, 10) % 11 == 0 }, _ve: function(t) { if (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[VEJPG][0-9]{9}$/.test(t)) return !1; for (var e = { V: 4, E: 8, J: 12, P: 16, G: 20 }[t.charAt(0)], a = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i + 1), 10) * a[i]; return 11 !== (e = 11 - e % 11) && 10 !== e || (e = 0), e + "" === t.substr(9, 1) }, _za: function(t) { return /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)), /^4[0-9]{9}$/.test(t) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { vin: { default: "Please enter a valid VIN number" } } }), FormValidation.Validator.vin = { validate: function(t, e, a) { var i = t.getFieldValue(e, "vin"); if ("" === i) return !0; if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(i)) return !1; for (var r = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9, S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 }, n = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], s = 0, o = (i = i.toUpperCase()).length, l = 0; l < o; l++) s += r[i.charAt(l) + ""] * n[l]; var d = s % 11; return 10 === d && (d = "X"), d + "" === i.charAt(8) } } }(jQuery),
    function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { zipCode: { default: "Please enter a valid postal code", country: "Please enter a valid postal code in %s", countries: { AT: "Austria", BG: "Bulgaria", BR: "Brazil", CA: "Canada", CH: "Switzerland", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", ES: "Spain", FR: "France", GB: "United Kingdom", IE: "Ireland", IN: "India", IT: "Italy", MA: "Morocco", NL: "Netherlands", PL: "Poland", PT: "Portugal", RO: "Romania", RU: "Russia", SE: "Sweden", SG: "Singapore", SK: "Slovakia", US: "USA" } } } }), FormValidation.Validator.zipCode = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["AT", "BG", "BR", "CA", "CH", "CZ", "DE", "DK", "ES", "FR", "GB", "IE", "IN", "IT", "MA", "NL", "PL", "PT", "RO", "RU", "SE", "SG", "SK", "US"], validate: function(e, a, i) { var r = e.getFieldValue(a, "zipCode"); if ("" === r || !i.country) return !0; var n = e.getLocale(),
                    s = i.country; if ("string" == typeof s && -1 !== t.inArray(s, this.COUNTRY_CODES) || (s = e.getDynamicOption(a, s)), !s || -1 === t.inArray(s.toUpperCase(), this.COUNTRY_CODES)) return !0; var o = !1; switch (s = s.toUpperCase()) {
                    case "AT":
                        o = /^([1-9]{1})(\d{3})$/.test(r); break;
                    case "BG":
                        o = /^([1-9]{1}[0-9]{3})$/.test(t.trim(r)); break;
                    case "BR":
                        o = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(r); break;
                    case "CA":
                        o = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(r); break;
                    case "CH":
                        o = /^([1-9]{1})(\d{3})$/.test(r); break;
                    case "CZ":
                        o = /^(\d{3})([ ]?)(\d{2})$/.test(r); break;
                    case "DE":
                        o = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(r); break;
                    case "DK":
                        o = /^(DK(-|\s)?)?\d{4}$/i.test(r); break;
                    case "ES":
                        o = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(r); break;
                    case "FR":
                        o = /^[0-9]{5}$/i.test(r); break;
                    case "GB":
                        o = this._gb(r); break;
                    case "IN":
                        o = /^\d{3}\s?\d{3}$/.test(r); break;
                    case "IE":
                        o = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(r); break;
                    case "IT":
                        o = /^(I-|IT-)?\d{5}$/i.test(r); break;
                    case "MA":
                        o = /^[1-9][0-9]{4}$/i.test(r); break;
                    case "NL":
                        o = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(r); break;
                    case "PL":
                        o = /^[0-9]{2}\-[0-9]{3}$/.test(r); break;
                    case "PT":
                        o = /^[1-9]\d{3}-\d{3}$/.test(r); break;
                    case "RO":
                        o = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(r); break;
                    case "RU":
                        o = /^[0-9]{6}$/i.test(r); break;
                    case "SE":
                        o = /^(S-)?\d{3}\s?\d{2}$/i.test(r); break;
                    case "SG":
                        o = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(r); break;
                    case "SK":
                        o = /^(\d{3})([ ]?)(\d{2})$/.test(r); break;
                    case "US":
                    default:
                        o = /^\d{4,5}([\-]?\d{4})?$/.test(r) } return { valid: o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].zipCode.country, FormValidation.I18n[n].zipCode.countries[s]) } }, _gb: function(t) { for (var e = "[ABCDEFGHIJKLMNOPRSTUWYZ]", a = "[ABDEFGHJLNPQRSTUWXYZ]", i = [new RegExp("^(" + e + "{1}[ABCDEFGHKLMNOPQRSTUVWXY]?[0-9]{1,2})(\\s*)([0-9]{1}" + a + "{2})$", "i"), new RegExp("^(" + e + "{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}" + a + "{2})$", "i"), new RegExp("^(" + e + "{1}[ABCDEFGHKLMNOPQRSTUVWXY]{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}" + a + "{2})$", "i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$", "i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], r = 0; r < i.length; r++)
                    if (i[r].test(t)) return !0;
                return !1 } } }(jQuery);
/** FormValidation/formValidation.js end **/

/** FormValidation/bootstrap.js start **/
! function(o) { FormValidation.Framework.Bootstrap = function(t, e, a) { e = o.extend(!0, { button: { selector: '[type="submit"]', disabled: "disabled" }, err: { clazz: "help-block", parent: "^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$" }, icon: { valid: null, invalid: null, validating: null, feedback: "form-control-feedback" }, row: { selector: ".form-group", valid: "has-success", invalid: "has-error", feedback: "has-feedback" } }, e), FormValidation.Base.apply(this, [t, e, a]) }, FormValidation.Framework.Bootstrap.prototype = o.extend({}, FormValidation.Base.prototype, { _fixIcon: function(o, t) { var e = this._namespace,
                a = o.attr("type"),
                r = o.attr("data-" + e + "-field"),
                i = this.options.fields[r].row || this.options.row.selector,
                s = o.closest(i); if ("checkbox" === a || "radio" === a) { var n = o.parent();
                n.hasClass(a) ? t.insertAfter(n) : n.parent().hasClass(a) && t.insertAfter(n.parent()) }
            0 === s.find("label").length && t.addClass("fv-icon-no-label"), 0 !== s.find(".input-group").length && t.addClass("fv-bootstrap-icon-input-group").insertAfter(s.find(".input-group").eq(0)) }, _createTooltip: function(o, t, e) { var a = this._namespace,
                r = o.data(a + ".icon"); if (r) switch (e) {
                case "popover":
                    r.css({ cursor: "pointer", "pointer-events": "auto" }).popover("destroy").popover({ container: "body", content: t, html: !0, placement: "auto top", trigger: "hover click" }); break;
                case "tooltip":
                default:
                    r.css({ cursor: "pointer", "pointer-events": "auto" }).tooltip("destroy").tooltip({ container: "body", html: !0, placement: "auto top", title: t }) } }, _destroyTooltip: function(o, t) { var e = this._namespace,
                a = o.data(e + ".icon"); if (a) switch (t) {
                case "popover":
                    a.css({ cursor: "", "pointer-events": "none" }).popover("destroy"); break;
                case "tooltip":
                default:
                    a.css({ cursor: "", "pointer-events": "none" }).tooltip("destroy") } }, _hideTooltip: function(o, t) { var e = this._namespace,
                a = o.data(e + ".icon"); if (a) switch (t) {
                case "popover":
                    a.popover("hide"); break;
                case "tooltip":
                default:
                    a.tooltip("hide") } }, _showTooltip: function(o, t) { var e = this._namespace,
                a = o.data(e + ".icon"); if (a) switch (t) {
                case "popover":
                    a.popover("show"); break;
                case "tooltip":
                default:
                    a.tooltip("show") } } }), o.fn.bootstrapValidator = function(t) { var e = arguments; return this.each(function() { var a = o(this),
                r = a.data("formValidation") || a.data("bootstrapValidator"),
                i = "object" == typeof t && t;
            r || (r = new FormValidation.Framework.Bootstrap(this, o.extend({}, { events: { formInit: "init.form.bv", formError: "error.form.bv", formSuccess: "success.form.bv", fieldAdded: "added.field.bv", fieldRemoved: "removed.field.bv", fieldInit: "init.field.bv", fieldError: "error.field.bv", fieldSuccess: "success.field.bv", fieldStatus: "status.field.bv", localeChanged: "changed.locale.bv", validatorError: "error.validator.bv", validatorSuccess: "success.validator.bv" } }, i), "bv"), a.addClass("fv-form-bootstrap").data("formValidation", r).data("bootstrapValidator", r)), "string" == typeof t && r[t].apply(r, Array.prototype.slice.call(e, 1)) }) }, o.fn.bootstrapValidator.Constructor = FormValidation.Framework.Bootstrap }(jQuery);
/** FormValidation/bootstrap.js end **/

/** jquery.form.js start **/
! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto) }(function(e) { "use strict";

    function t(t) { var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r)) }

    function r(t) { var r = t.target,
            a = e(r); if (!a.is("[type=submit],[type=image]")) { var n = a.closest("[type=submit]"); if (0 === n.length) return;
            r = n[0] } var i = this; if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) { var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() { i.clk = i.clk_x = i.clk_y = null }, 100) }

    function a() { if (e.fn.ajaxSubmit.debug) { var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t) } } var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData; var i = !!e.fn.prop;
    e.fn.attr2 = function() { if (!i) return this.attr.apply(this, arguments); var e = this.prop.apply(this, arguments); return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments) }, e.fn.ajaxSubmit = function(t) {
        function r(r) { var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = []; for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]); return s }

        function o(a) { for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value); if (t.extraData) { var o = r(t.extraData); for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]) }
            t.data = null; var s = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: u || "POST" });
            t.uploadProgress && (s.xhr = function() { var r = e.ajaxSettings.xhr(); return r.upload && r.upload.addEventListener("progress", function(e) { var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r) }, !1), r }), s.data = null; var c = s.beforeSend; return s.beforeSend = function(e, r) { r.data = t.formData ? t.formData : n, c && c.call(this, e, r) }, e.ajax(s) }

        function s(r) {
            function n(e) { var t = null; try { e.contentWindow && (t = e.contentWindow.document) } catch (r) { a("cannot get iframe.contentWindow document: " + r) } if (t) return t; try { t = e.contentDocument ? e.contentDocument : e.document } catch (r) { a("cannot get iframe.contentDocument: " + r), t = e.document } return t }

            function o() {
                function t() { try { var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50) } catch (r) { a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0 } } var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), m.timeout && (j = setTimeout(function() { T = !0, s(D) }, m.timeout)); var l = []; try { if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15); try { w.submit() } catch (h) { var x = document.createElement("form").submit;
                        x.apply(w) } } finally { w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove() } }

            function s(t) { if (!x.aborted && !F) { if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout"); if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort"); if (M && M.location.href != m.iframeSrc || T) { g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1); var r, i = "success"; try { if (T) throw "timeout"; var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M); if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250); var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) { var t = { "content-type": m.dataType }; return t[e.toLowerCase()] }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText); var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c); if (l || m.textarea) { var f = M.getElementsByTagName("textarea")[0]; if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) { var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText) } } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText)); try { E = _(x, c, m) } catch (y) { i = "parsererror", x.error = r = y || i } } catch (y) { a("error caught: ", y), i = "error", x.error = r = y || i }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() { m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null }, 100) } } } var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred(); if (S.abort = function(e) { x.abort(e) }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled"); if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({ position: "absolute", top: "-1000px", left: "-1000px" })), g = v[0], x = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {}, getResponseHeader: function() {}, setRequestHeader: function() {}, abort: function(t) { var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1; try { g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop") } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r) } }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S; if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y))); var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10); var E, M, F, O = 50,
                X = e.parseXML || function(e, t) { return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null },
                C = e.parseJSON || function(e) { return window.eval("(" + e + ")") },
                _ = function(t, r, a) { var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText; return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o }; return S } if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this; var u, c, l, f = this; "function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t); var m = {}; if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this; if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this; var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional); var p, h = [],
            v = this.formToArray(t.semantic, h); if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this; if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this; var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g; var x = []; if (t.resetForm && x.push(function() { f.resetForm() }), t.clearForm && x.push(function() { f.clearForm(t.includeHidden) }), !t.dataType && t.target) { var y = t.success || function() {};
            x.push(function(r) { var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments) }) } else t.success && x.push(t.success); if (t.success = function(e, r, a) { for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f]) }, t.error) { var b = t.error;
            t.error = function(e, r, a) { var n = t.context || this;
                b.apply(n, [e, r, a, f]) } } if (t.complete) { var T = t.complete;
            t.complete = function(e, r) { var a = t.context || this;
                T.apply(a, [e, r, f]) } } var j = e("input[type=file]:enabled", this).filter(function() { return "" !== e(this).val() }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k); var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() { A = s(v) }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A); for (var E = 0; E < h.length; E++) h[E] = null; return this.trigger("form-submit-notify", [this, t]), this }, e.fn.ajaxForm = function(n) { if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) { var i = { s: this.selector, c: this.context }; return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() { e(i.s, i.c).ajaxForm(n) }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) } return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r) }, e.fn.ajaxFormUnbind = function() { return this.unbind("submit.form-plugin click.form-plugin") }, e.fn.formToArray = function(t, r) { var a = []; if (0 === this.length) return a; var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements; if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a; var c, l, f, m, d, p, h; for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({ name: f, value: e(d).val(), type: d.type }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({ name: f, value: m[l] });
        else if (n.fileapi && "file" == d.type) { r && r.push(d); var v = d.files; if (v.length)
                for (l = 0; l < v.length; l++) a.push({ name: f, value: v[l], type: d.type });
            else a.push({ name: f, value: "", type: d.type }) } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({ name: f, value: m, type: d.type, required: d.required })); if (!t && o.clk) { var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({ name: f, value: g.val() }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y })) } return a }, e.fn.formSerialize = function(t) { return e.param(this.formToArray(t)) }, e.fn.fieldSerialize = function(t) { var r = []; return this.each(function() { var a = this.name; if (a) { var n = e.fieldValue(this, t); if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({ name: a, value: n[i] });
                else null !== n && "undefined" != typeof n && r.push({ name: this.name, value: n }) } }), e.param(r) }, e.fn.fieldValue = function(t) { for (var r = [], a = 0, n = this.length; n > a; a++) { var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o)) } return r }, e.fieldValue = function(t, r) { var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase(); if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null; if ("select" == i) { var o = t.selectedIndex; if (0 > o) return null; for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) { var m = u[f]; if (m.selected) { var d = m.value; if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d) } } return s } return e(t).val() }, e.fn.clearForm = function(t) { return this.each(function() { e("input,select,textarea", this).clearFields(t) }) }, e.fn.clearFields = e.fn.clearInputs = function(t) { var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; return this.each(function() { var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "") }) }, e.fn.resetForm = function() { return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset() }) }, e.fn.enable = function(e) { return void 0 === e && (e = !0), this.each(function() { this.disabled = !e }) }, e.fn.selected = function(t) { return void 0 === t && (t = !0), this.each(function() { var r = this.type; if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) { var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t } }) }, e.fn.ajaxSubmit.debug = !1 });

/** jquery.form.js end **/

/** admin/select2/select2.min.js start **/
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function(b, c) { return void 0 === c && (c = "undefined" != typeof window ? require("jquery") : require("jquery")(b)), a(c), c } : a(jQuery) }(function(a) {
    var b = function() {
            if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
            var b;
            return function() { if (!b || !b.requirejs) { b ? c = b : b = {}; var a, c, d;! function(b) {
                        function e(a, b) { return u.call(a, b) }

                        function f(a, b) { var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                                o = s.map,
                                p = o && o["*"] || {}; if (a && "." === a.charAt(0))
                                if (b) { for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                                        if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                                        else if (".." === m) { if (1 === k && (".." === a[2] || ".." === a[0])) break;
                                        k > 0 && (a.splice(k - 1, 2), k -= 2) }
                                    a = a.join("/") } else 0 === a.indexOf("./") && (a = a.substring(2));
                            if ((n || p) && o) { for (c = a.split("/"), k = c.length; k > 0; k -= 1) { if (d = c.slice(0, k).join("/"), n)
                                        for (l = n.length; l > 0; l -= 1)
                                            if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) { f = e, h = k; break }
                                    if (f) break;!i && p && p[d] && (i = p[d], j = k) }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/")) } return a }

                        function g(a, c) { return function() { var d = v.call(arguments, 0); return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c])) } }

                        function h(a) { return function(b) { return f(b, a) } }

                        function i(a) { return function(b) { q[a] = b } }

                        function j(a) { if (e(r, a)) { var c = r[a];
                                delete r[a], t[a] = !0, m.apply(b, c) } if (!e(q, a) && !e(t, a)) throw new Error("No " + a); return q[a] }

                        function k(a) { var b, c = a ? a.indexOf("!") : -1; return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a] }

                        function l(a) { return function() { return s && s.config && s.config[a] || {} } } var m, n, o, p, q = {},
                            r = {},
                            s = {},
                            t = {},
                            u = Object.prototype.hasOwnProperty,
                            v = [].slice,
                            w = /\.js$/;
                        o = function(a, b) { var c, d = k(a),
                                e = d[0]; return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c } }, p = { require: function(a) { return g(a) }, exports: function(a) { var b = q[a]; return "undefined" != typeof b ? b : q[a] = {} }, module: function(a) { return { id: a, uri: "", exports: q[a], config: l(a) } } }, m = function(a, c, d, f) { var h, k, l, m, n, s, u = [],
                                v = typeof d; if (f = f || a, "undefined" === v || "function" === v) { for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                                    if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                                    else if ("exports" === k) u[n] = p.exports(a), s = !0;
                                else if ("module" === k) h = u[n] = p.module(a);
                                else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                                else { if (!m.p) throw new Error(a + " missing " + k);
                                    m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k] }
                                l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l)) } else a && (q[a] = d) }, a = c = n = function(a, c, d, e, f) { if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f); if (!a.splice) { if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                                c.splice ? (a = c, c = d, d = null) : a = b } return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() { m(b, a, c, d) }, 4), n }, n.config = function(a) { return n(a) }, a._defined = q, d = function(a, b, c) { if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                            b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]) }, d.amd = { jQuery: !0 } }(), b.requirejs = a, b.require = c, b.define = d } }(), b.define("almond", function() {}), b.define("jquery", [], function() { var b = a || $; return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b }), b.define("select2/utils", ["jquery"], function(a) {
                function b(a) { var b = a.prototype,
                        c = []; for (var d in b) { var e = b[d]; "function" == typeof e && "constructor" !== d && c.push(d) } return c } var c = {};
                c.Extend = function(a, b) {
                    function c() { this.constructor = a } var d = {}.hasOwnProperty; for (var e in b) d.call(b, e) && (a[e] = b[e]); return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a }, c.Decorate = function(a, c) {
                    function d() { var b = Array.prototype.unshift,
                            d = c.prototype.constructor.length,
                            e = a.prototype.constructor;
                        d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments) }

                    function e() { this.constructor = d } var f = b(c),
                        g = b(a);
                    c.displayName = a.displayName, d.prototype = new e; for (var h = 0; h < g.length; h++) { var i = g[h];
                        d.prototype[i] = a.prototype[i] } for (var j = (function(a) { var b = function() {};
                            a in d.prototype && (b = d.prototype[a]); var e = c.prototype[a]; return function() { var a = Array.prototype.unshift; return a.call(arguments, b), e.apply(this, arguments) } }), k = 0; k < f.length; k++) { var l = f[k];
                        d.prototype[l] = j(l) } return d }; var d = function() { this.listeners = {} }; return d.prototype.on = function(a, b) { this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b] }, d.prototype.trigger = function(a) { var b = Array.prototype.slice,
                        c = b.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, d.prototype.invoke = function(a, b) { for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b) }, c.Observable = d, c.generateChars = function(a) { for (var b = "", c = 0; a > c; c++) { var d = Math.floor(36 * Math.random());
                        b += d.toString(36) } return b }, c.bind = function(a, b) { return function() { a.apply(b, arguments) } }, c._convertData = function(a) { for (var b in a) { var c = b.split("-"),
                            d = a; if (1 !== c.length) { for (var e = 0; e < c.length; e++) { var f = c[e];
                                f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f] }
                            delete a[b] } } return a }, c.hasScroll = function(b, c) { var d = a(c),
                        e = c.style.overflowX,
                        f = c.style.overflowY; return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1 }, c.escapeMarkup = function(a) { var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) { return b[a] }) }, c.appendMany = function(b, c) { if ("1.7" === a.fn.jquery.substr(0, 3)) { var d = a();
                        a.map(c, function(a) { d = d.add(a) }), c = d }
                    b.append(c) }, c }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                function c(a, b, d) { this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this) } return b.Extend(c, b.Observable), c.prototype.render = function() { var b = a('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b }, c.prototype.clear = function() { this.$results.empty() }, c.prototype.displayMessage = function(b) { var c = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading(); var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        e = this.options.get("translations").get(b.message);
                    d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d) }, c.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, c.prototype.append = function(a) { this.hideLoading(); var b = []; if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));
                    a.results = this.sort(a.results); for (var c = 0; c < a.results.length; c++) { var d = a.results[c],
                            e = this.option(d);
                        b.push(e) }
                    this.$results.append(b) }, c.prototype.position = function(a, b) { var c = b.find(".select2-results");
                    c.append(a) }, c.prototype.sort = function(a) { var b = this.options.get("sorter"); return b(a) }, c.prototype.highlightFirstItem = function() { var a = this.$results.find(".select2-results__option[aria-selected]"),
                        b = a.filter("[aria-selected=true]");
                    b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible() }, c.prototype.setClasses = function() { var b = this;
                    this.data.current(function(c) { var d = a.map(c, function(a) { return a.id.toString() }),
                            e = b.$results.find(".select2-results__option[aria-selected]");
                        e.each(function() { var b = a(this),
                                c = a.data(this, "data"),
                                e = "" + c.id;
                            null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false") }) }) }, c.prototype.showLoading = function(a) { this.hideLoading(); var b = this.options.get("translations").get("searching"),
                        c = { disabled: !0, loading: !0, text: b(a) },
                        d = this.option(c);
                    d.className += " loading-results", this.$results.prepend(d) }, c.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, c.prototype.option = function(b) { var c = document.createElement("li");
                    c.className = "select2-results__option"; var d = { role: "treeitem", "aria-selected": "false" };
                    b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]); for (var e in d) { var f = d[e];
                        c.setAttribute(e, f) } if (b.children) { var g = a(c),
                            h = document.createElement("strong");
                        h.className = "select2-results__group";
                        a(h);
                        this.template(b, h); for (var i = [], j = 0; j < b.children.length; j++) { var k = b.children[j],
                                l = this.option(k);
                            i.push(l) } var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" });
                        m.append(i), g.append(h), g.append(m) } else this.template(b, c); return a.data(c, "data", b), c }, c.prototype.bind = function(b, c) { var d = this,
                        e = b.id + "-results";
                    this.$results.attr("id", e), b.on("results:all", function(a) { d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("results:append", function(a) { d.append(a.data), b.isOpen() && d.setClasses() }), b.on("query", function(a) { d.hideMessages(), d.showLoading(a) }), b.on("select", function() { b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("unselect", function() { b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("open", function() { d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible() }), b.on("close", function() { d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant") }), b.on("results:toggle", function() { var a = d.getHighlightedResults();
                        0 !== a.length && a.trigger("mouseup") }), b.on("results:select", function() { var a = d.getHighlightedResults(); if (0 !== a.length) { var b = a.data("data"); "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b }) } }), b.on("results:previous", function() { var a = d.getHighlightedResults(),
                            b = d.$results.find("[aria-selected]"),
                            c = b.index(a); if (0 !== c) { var e = c - 1;
                            0 === a.length && (e = 0); var f = b.eq(e);
                            f.trigger("mouseenter"); var g = d.$results.offset().top,
                                h = f.offset().top,
                                i = d.$results.scrollTop() + (h - g);
                            0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i) } }), b.on("results:next", function() { var a = d.getHighlightedResults(),
                            b = d.$results.find("[aria-selected]"),
                            c = b.index(a),
                            e = c + 1; if (!(e >= b.length)) { var f = b.eq(e);
                            f.trigger("mouseenter"); var g = d.$results.offset().top + d.$results.outerHeight(!1),
                                h = f.offset().top + f.outerHeight(!1),
                                i = d.$results.scrollTop() + h - g;
                            0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i) } }), b.on("results:focus", function(a) { a.element.addClass("select2-results__option--highlighted") }), b.on("results:message", function(a) { d.displayMessage(a) }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) { var b = d.$results.scrollTop(),
                            c = d.$results.get(0).scrollHeight - b + a.deltaY,
                            e = a.deltaY > 0 && b - a.deltaY <= 0,
                            f = a.deltaY < 0 && c <= d.$results.height();
                        e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation()) }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) { var c = a(this),
                            e = c.data("data"); return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})) : void d.trigger("select", { originalEvent: b, data: e }) }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) { var c = a(this).data("data");
                        d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) }) }) }, c.prototype.getHighlightedResults = function() { var a = this.$results.find(".select2-results__option--highlighted"); return a }, c.prototype.destroy = function() { this.$results.remove() }, c.prototype.ensureHighlightVisible = function() { var a = this.getHighlightedResults(); if (0 !== a.length) { var b = this.$results.find("[aria-selected]"),
                            c = b.index(a),
                            d = this.$results.offset().top,
                            e = a.offset().top,
                            f = this.$results.scrollTop() + (e - d),
                            g = e - d;
                        f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f) } }, c.prototype.template = function(b, c) { var d = this.options.get("templateResult"),
                        e = this.options.get("escapeMarkup"),
                        f = d(b, c);
                    null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f) }, c }), b.define("select2/keys", [], function() { var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }; return a }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) } return b.Extend(d, b.Observable), d.prototype.render = function() { var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b }, d.prototype.bind = function(a, b) { var d = this,
                        e = (a.id + "-container", a.id + "-results");
                    this.container = a, this.$selection.on("focus", function(a) { d.trigger("focus", a) }), this.$selection.on("blur", function(a) { d._handleBlur(a) }), this.$selection.on("keydown", function(a) { d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault() }), a.on("results:focus", function(a) { d.$selection.attr("aria-activedescendant", a.data._resultId) }), a.on("selection:update", function(a) { d.update(a.data) }), a.on("open", function() { d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a) }), a.on("close", function() { d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a) }), a.on("enable", function() { d.$selection.attr("tabindex", d._tabindex) }), a.on("disable", function() { d.$selection.attr("tabindex", "-1") }) }, d.prototype._handleBlur = function(b) { var c = this;
                    window.setTimeout(function() { document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b) }, 1) }, d.prototype._attachCloseHandler = function(b) { a(document.body).on("mousedown.select2." + b.id, function(b) { var c = a(b.target),
                            d = c.closest(".select2"),
                            e = a(".select2.select2-container--open");
                        e.each(function() { var b = a(this); if (this != d[0]) { var c = b.data("element");
                                c.select2("close") } }) }) }, d.prototype._detachCloseHandler = function(b) { a(document.body).off("mousedown.select2." + b.id) }, d.prototype.position = function(a, b) { var c = b.find(".selection");
                    c.append(a) }, d.prototype.destroy = function() { this._detachCloseHandler(this.container) }, d.prototype.update = function(a) { throw new Error("The `update` method must be defined in child classes.") }, d }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
                function e() { e.__super__.constructor.apply(this, arguments) } return c.Extend(e, b), e.prototype.render = function() { var a = e.__super__.render.call(this); return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a }, e.prototype.bind = function(a, b) { var c = this;
                    e.__super__.bind.apply(this, arguments); var d = a.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) { 1 === a.which && c.trigger("toggle", { originalEvent: a }) }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("focus", function(b) { a.isOpen() || c.$selection.focus() }), a.on("selection:update", function(a) { c.update(a.data) }) }, e.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, e.prototype.display = function(a, b) { var c = this.options.get("templateSelection"),
                        d = this.options.get("escapeMarkup"); return d(c(a, b)) }, e.prototype.selectionContainer = function() { return a("<span></span>") }, e.prototype.update = function(a) { if (0 === a.length) return void this.clear(); var b = a[0],
                        c = this.$selection.find(".select2-selection__rendered"),
                        d = this.display(b, c);
                    c.empty().append(d), c.prop("title", b.title || b.text) }, e }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                function d(a, b) { d.__super__.constructor.apply(this, arguments) } return c.Extend(d, b), d.prototype.render = function() { var a = d.__super__.render.call(this); return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a }, d.prototype.bind = function(b, c) { var e = this;
                    d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) { e.trigger("toggle", { originalEvent: a }) }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) { if (!e.options.get("disabled")) { var c = a(this),
                                d = c.parent(),
                                f = d.data("data");
                            e.trigger("unselect", { originalEvent: b, data: f }) } }) }, d.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, d.prototype.display = function(a, b) { var c = this.options.get("templateSelection"),
                        d = this.options.get("escapeMarkup"); return d(c(a, b)) }, d.prototype.selectionContainer = function() { var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'); return b }, d.prototype.update = function(a) { if (this.clear(), 0 !== a.length) { for (var b = [], d = 0; d < a.length; d++) { var e = a[d],
                                f = this.selectionContainer(),
                                g = this.display(e, f);
                            f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f) } var h = this.$selection.find(".select2-selection__rendered");
                        c.appendMany(h, b) } }, d }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
                function b(a, b, c) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c) } return b.prototype.normalizePlaceholder = function(a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, b.prototype.createPlaceholder = function(a, b) { var c = this.selectionContainer(); return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c }, b.prototype.update = function(a, b) { var c = 1 == b.length && b[0].id != this.placeholder.id,
                        d = b.length > 1; if (d || c) return a.call(this, b);
                    this.clear(); var e = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(e) }, b }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                function c() {} return c.prototype.bind = function(a, b, c) { var d = this;
                    a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) { d._handleClear(a) }), b.on("keypress", function(a) { d._handleKeyboardClear(a, b) }) }, c.prototype._handleClear = function(a, b) { if (!this.options.get("disabled")) { var c = this.$selection.find(".select2-selection__clear"); if (0 !== c.length) { b.stopPropagation(); for (var d = c.data("data"), e = 0; e < d.length; e++) { var f = { data: d[e] }; if (this.trigger("unselect", f), f.prevented) return }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {}) } } }, c.prototype._handleKeyboardClear = function(a, c, d) { d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c) }, c.prototype.update = function(b, c) { if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) { var d = a('<span class="select2-selection__clear">&times;</span>');
                        d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d) } }, c }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                function d(a, b, c) { a.call(this, b, c) } return d.prototype.render = function(b) { var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = c, this.$search = c.find("input"); var d = b.call(this); return this._transferTabIndex(), d }, d.prototype.bind = function(a, b, d) { var e = this;
                    a.call(this, b, d), b.on("open", function() { e.$search.trigger("focus") }), b.on("close", function() { e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus") }), b.on("enable", function() { e.$search.prop("disabled", !1), e._transferTabIndex() }), b.on("disable", function() { e.$search.prop("disabled", !0) }), b.on("focus", function(a) { e.$search.trigger("focus") }), b.on("results:focus", function(a) { e.$search.attr("aria-activedescendant", a.id) }), this.$selection.on("focusin", ".select2-search--inline", function(a) { e.trigger("focus", a) }), this.$selection.on("focusout", ".select2-search--inline", function(a) { e._handleBlur(a) }), this.$selection.on("keydown", ".select2-search--inline", function(a) { a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(); var b = a.which; if (b === c.BACKSPACE && "" === e.$search.val()) { var d = e.$searchContainer.prev(".select2-selection__choice"); if (d.length > 0) { var f = d.data("data");
                                e.searchRemoveChoice(f), a.preventDefault() } } }); var f = document.documentMode,
                        g = f && 11 >= f;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) { return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) { if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck"); var b = a.which;
                        b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a) }) }, d.prototype._transferTabIndex = function(a) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, d.prototype.createPlaceholder = function(a, b) { this.$search.attr("placeholder", b.text) }, d.prototype.update = function(a, b) { var c = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus() }, d.prototype.handleSearch = function() { if (this.resizeSearch(), !this._keyUpPrevented) { var a = this.$search.val();
                        this.trigger("query", { term: a }) }
                    this._keyUpPrevented = !1 }, d.prototype.searchRemoveChoice = function(a, b) { this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch() }, d.prototype.resizeSearch = function() { this.$search.css("width", "25px"); var a = ""; if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                    else { var b = this.$search.val().length + 1;
                        a = .75 * b + "em" }
                    this.$search.css("width", a) }, d }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                function b() {} return b.prototype.bind = function(b, c, d) { var e = this,
                        f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        g = ["opening", "closing", "selecting", "unselecting"];
                    b.call(this, c, d), c.on("*", function(b, c) { if (-1 !== a.inArray(b, f)) { c = c || {}; var d = a.Event("select2:" + b, { params: c });
                            e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented()) } }) }, b }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                function c(a) { this.dict = a || {} } return c.prototype.all = function() { return this.dict }, c.prototype.get = function(a) { return this.dict[a] }, c.prototype.extend = function(b) { this.dict = a.extend({}, b.all(), this.dict) }, c._cache = {}, c.loadPath = function(a) { if (!(a in c._cache)) { var d = b(a);
                        c._cache[a] = d } return new c(c._cache[a]) }, c }), b.define("select2/diacritics", [], function() { var a = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" }; return a }), b.define("select2/data/base", ["../utils"], function(a) {
                function b(a, c) { b.__super__.constructor.call(this) } return a.Extend(b, a.Observable), b.prototype.current = function(a) { throw new Error("The `current` method must be defined in child classes.") }, b.prototype.query = function(a, b) { throw new Error("The `query` method must be defined in child classes.") }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) { var d = b.id + "-result-"; return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4) }, b }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) }
                return b.Extend(d, a), d.prototype.current = function(a) { var b = [],
                        d = this;
                    this.$element.find(":selected").each(function() { var a = c(this),
                            e = d.item(a);
                        b.push(e) }), a(b) }, d.prototype.select = function(a) {
                    var b = this;
                    if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(d) { var e = [];
                        a = [a], a.push.apply(a, d); for (var f = 0; f < a.length; f++) { var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g) }
                        b.$element.val(e), b.$element.trigger("change") });
                    else { var d = a.id;
                        this.$element.val(d), this.$element.trigger("change") }
                }, d.prototype.unselect = function(a) { var b = this; if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(d) { for (var e = [], f = 0; f < d.length; f++) { var g = d[f].id;
                            g !== a.id && -1 === c.inArray(g, e) && e.push(g) }
                        b.$element.val(e), b.$element.trigger("change") }) }, d.prototype.bind = function(a, b) { var c = this;
                    this.container = a, a.on("select", function(a) { c.select(a.data) }), a.on("unselect", function(a) { c.unselect(a.data) }) }, d.prototype.destroy = function() { this.$element.find("*").each(function() { c.removeData(this, "data") }) }, d.prototype.query = function(a, b) { var d = [],
                        e = this,
                        f = this.$element.children();
                    f.each(function() { var b = c(this); if (b.is("option") || b.is("optgroup")) { var f = e.item(b),
                                g = e.matches(a, f);
                            null !== g && d.push(g) } }), b({ results: d }) }, d.prototype.addOptions = function(a) { b.appendMany(this.$element, a) }, d.prototype.option = function(a) { var b;
                    a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), void 0 !== a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title); var d = c(b),
                        e = this._normalizeItem(a); return e.element = b, c.data(b, "data", e), d }, d.prototype.item = function(a) { var b = {}; if (b = c.data(a[0], "data"), null != b) return b; if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };
                    else if (a.is("optgroup")) { b = { text: a.prop("label"), children: [], title: a.prop("title") }; for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) { var g = c(d[f]),
                                h = this.item(g);
                            e.push(h) }
                        b.children = e } return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b }, d.prototype._normalizeItem = function(a) { c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a); var b = { selected: !1, disabled: !1 }; return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a) }, d.prototype.matches = function(a, b) { var c = this.options.get("matcher"); return c(a, b) }, d
            }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                function d(a, b) { var c = b.get("data") || [];
                    d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c)) } return b.Extend(d, a), d.prototype.select = function(a) { var b = this.$element.find("option").filter(function(b, c) { return c.value == a.id.toString() });
                    0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a) }, d.prototype.convertToOptions = function(a) {
                    function d(a) { return function() { return c(this).val() == a.id } } for (var e = this, f = this.$element.find("option"), g = f.map(function() { return e.item(c(this)).id }).get(), h = [], i = 0; i < a.length; i++) { var j = this._normalizeItem(a[i]); if (c.inArray(j.id, g) >= 0) { var k = f.filter(d(j)),
                                l = this.item(k),
                                m = c.extend(!0, {}, j, l),
                                n = this.option(m);
                            k.replaceWith(n) } else { var o = this.option(j); if (j.children) { var p = this.convertToOptions(j.children);
                                b.appendMany(o, p) }
                            h.push(o) } } return h }, d }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                function d(a, b) { this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b) } return b.Extend(d, a), d.prototype._applyDefaults = function(a) { var b = { data: function(a) { return c.extend({}, a, { q: a.term }) }, transport: function(a, b, d) { var e = c.ajax(a); return e.then(b), e.fail(d), e } }; return c.extend({}, b, a, !0) }, d.prototype.processResults = function(a) { return a }, d.prototype.query = function(a, b) {
                    function d() { var d = f.transport(f, function(d) { var f = e.processResults(d, a);
                            e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f) }, function() { d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" }) });
                        e._request = d } var e = this;
                    null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null); var f = c.extend({ type: "GET" }, this.ajaxOptions); "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d() }, d }), b.define("select2/data/tags", ["jquery"], function(a) {
                function b(b, c, d) { var e = d.get("tags"),
                        f = d.get("createTag");
                    void 0 !== f && (this.createTag = f); var g = d.get("insertTag"); if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                        for (var h = 0; h < e.length; h++) { var i = e[h],
                                j = this._normalizeItem(i),
                                k = this.option(j);
                            this.$element.append(k) } } return b.prototype.query = function(a, b, c) {
                    function d(a, f) { for (var g = a.results, h = 0; h < g.length; h++) { var i = g[h],
                                j = null != i.children && !d({ results: i.children }, !0),
                                k = (i.text || "").toUpperCase(),
                                l = (b.term || "").toUpperCase(),
                                m = k === l; if (m || j) return f ? !1 : (a.data = g, void c(a)) } if (f) return !0; var n = e.createTag(b); if (null != n) { var o = e.option(n);
                            o.attr("data-select2-tag", !0), e.addOptions([o]), e.insertTag(g, n) }
                        a.results = g, c(a) } var e = this; return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d) }, b.prototype.createTag = function(b, c) { var d = a.trim(c.term); return "" === d ? null : { id: d, text: d } }, b.prototype.insertTag = function(a, b, c) { b.unshift(c) }, b.prototype._removeOldTags = function(b) { var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                    c.each(function() { this.selected || a(this).remove() }) }, b }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                function b(a, b, c) { var d = c.get("tokenizer");
                    void 0 !== d && (this.tokenizer = d), a.call(this, b, c) } return b.prototype.bind = function(a, b, c) { a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field") }, b.prototype.query = function(b, c, d) {
                    function e(b) { var c = g._normalizeItem(b),
                            d = g.$element.find("option").filter(function() { return a(this).val() === c.id }); if (!d.length) { var e = g.option(c);
                            e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e]) }
                        f(c) }

                    function f(a) { g.trigger("select", { data: a }) } var g = this;
                    c.term = c.term || ""; var h = this.tokenizer(c, this.options, e);
                    h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d) }, b.prototype.tokenizer = function(b, c, d, e) { for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) { return { id: a.term, text: a.term } }; h < g.length;) { var j = g[h]; if (-1 !== a.inArray(j, f)) { var k = g.substr(0, h),
                                l = a.extend({}, c, { term: k }),
                                m = i(l);
                            null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++ } else h++ } return { term: g } }, b }), b.define("select2/data/minimumInputLength", [], function() {
                function a(a, b, c) { this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c) } return a.prototype.query = function(a, b, c) { return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c) }, a }), b.define("select2/data/maximumInputLength", [], function() {
                function a(a, b, c) { this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c) } return a.prototype.query = function(a, b, c) { return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c) }, a }), b.define("select2/data/maximumSelectionLength", [], function() {
                function a(a, b, c) { this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c) } return a.prototype.query = function(a, b, c) { var d = this;
                    this.current(function(e) { var f = null != e ? e.length : 0; return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c) }) }, a }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                function c(a, b) { this.$element = a, this.options = b, c.__super__.constructor.call(this) } return b.Extend(c, b.Observable), c.prototype.render = function() { var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() { this.$dropdown.remove() }, c }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                function c() {} return c.prototype.render = function(b) { var c = b.call(this),
                        d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'); return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c }, c.prototype.bind = function(b, c, d) { var e = this;
                    b.call(this, c, d), this.$search.on("keydown", function(a) { e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented() }), this.$search.on("input", function(b) { a(this).off("keyup") }), this.$search.on("keyup input", function(a) { e.handleSearch(a) }), c.on("open", function() { e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() { e.$search.focus() }, 0) }), c.on("close", function() { e.$search.attr("tabindex", -1), e.$search.val("") }), c.on("focus", function() { c.isOpen() && e.$search.focus() }), c.on("results:all", function(a) { if (null == a.query.term || "" === a.query.term) { var b = e.showSearch(a);
                            b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide") } }) }, c.prototype.handleSearch = function(a) { if (!this._keyUpPrevented) { var b = this.$search.val();
                        this.trigger("query", { term: b }) }
                    this._keyUpPrevented = !1 }, c.prototype.showSearch = function(a, b) { return !0 }, c }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                function a(a, b, c, d) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d) } return a.prototype.append = function(a, b) { b.results = this.removePlaceholder(b.results), a.call(this, b) }, a.prototype.normalizePlaceholder = function(a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, a.prototype.removePlaceholder = function(a, b) { for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) { var e = b[d];
                        this.placeholder.id === e.id && c.splice(d, 1) } return c }, a }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                function b(a, b, c, d) { this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return b.prototype.append = function(a, b) { this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore) }, b.prototype.bind = function(b, c, d) { var e = this;
                    b.call(this, c, d), c.on("query", function(a) { e.lastParams = a, e.loading = !0 }), c.on("query:append", function(a) { e.lastParams = a, e.loading = !0 }), this.$results.on("scroll", function() { var b = a.contains(document.documentElement, e.$loadingMore[0]); if (!e.loading && b) { var c = e.$results.offset().top + e.$results.outerHeight(!1),
                                d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                            c + 50 >= d && e.loadMore() } }) }, b.prototype.loadMore = function() { this.loading = !0; var b = a.extend({}, { page: 1 }, this.lastParams);
                    b.page++, this.trigger("query:append", b) }, b.prototype.showLoadingMore = function(a, b) { return b.pagination && b.pagination.more }, b.prototype.createLoadingMore = function() { var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        c = this.options.get("translations").get("loadingMore"); return b.html(c(this.lastParams)), b }, b }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                function c(b, c, d) { this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d) } return c.prototype.bind = function(a, b, c) { var d = this,
                        e = !1;
                    a.call(this, b, c), b.on("open", function() { d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() { d._positionDropdown(), d._resizeDropdown() }), b.on("results:append", function() { d._positionDropdown(), d._resizeDropdown() })) }), b.on("close", function() { d._hideDropdown(), d._detachPositioningHandler(b) }), this.$dropdownContainer.on("mousedown", function(a) { a.stopPropagation() }) }, c.prototype.destroy = function(a) { a.call(this), this.$dropdownContainer.remove() }, c.prototype.position = function(a, b, c) { b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c }, c.prototype.render = function(b) { var c = a("<span></span>"),
                        d = b.call(this); return c.append(d), this.$dropdownContainer = c, c }, c.prototype._hideDropdown = function(a) { this.$dropdownContainer.detach() }, c.prototype._attachPositioningHandler = function(c, d) { var e = this,
                        f = "scroll.select2." + d.id,
                        g = "resize.select2." + d.id,
                        h = "orientationchange.select2." + d.id,
                        i = this.$container.parents().filter(b.hasScroll);
                    i.each(function() { a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() }) }), i.on(f, function(b) { var c = a(this).data("select2-scroll-position");
                        a(this).scrollTop(c.y) }), a(window).on(f + " " + g + " " + h, function(a) { e._positionDropdown(), e._resizeDropdown() }) }, c.prototype._detachPositioningHandler = function(c, d) { var e = "scroll.select2." + d.id,
                        f = "resize.select2." + d.id,
                        g = "orientationchange.select2." + d.id,
                        h = this.$container.parents().filter(b.hasScroll);
                    h.off(e), a(window).off(e + " " + f + " " + g) }, c.prototype._positionDropdown = function() { var b = a(window),
                        c = this.$dropdown.hasClass("select2-dropdown--above"),
                        d = this.$dropdown.hasClass("select2-dropdown--below"),
                        e = null,
                        f = this.$container.offset();
                    f.bottom = f.top + this.$container.outerHeight(!1); var g = { height: this.$container.outerHeight(!1) };
                    g.top = f.top, g.bottom = f.top + g.height; var h = { height: this.$dropdown.outerHeight(!1) },
                        i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
                        j = i.top < f.top - h.height,
                        k = i.bottom > f.bottom + h.height,
                        l = { left: f.left, top: g.bottom },
                        m = this.$dropdownParent; "static" === m.css("position") && (m = m.offsetParent()); var n = m.offset();
                    l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l) }, c.prototype._resizeDropdown = function() { var a = { width: this.$container.outerWidth(!1) + "px" };
                    this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a) }, c.prototype._showDropdown = function(a) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, c }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function a(b) { for (var c = 0, d = 0; d < b.length; d++) { var e = b[d];
                        e.children ? c += a(e.children) : c++ } return c }

                function b(a, b, c, d) { this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d) } return b.prototype.showSearch = function(b, c) { return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c) }, b }), b.define("select2/dropdown/selectOnClose", [], function() {
                function a() {} return a.prototype.bind = function(a, b, c) { var d = this;
                    a.call(this, b, c), b.on("close", function(a) { d._handleSelectOnClose(a) }) }, a.prototype._handleSelectOnClose = function(a, b) { if (b && null != b.originalSelect2Event) { var c = b.originalSelect2Event; if ("select" === c._type || "unselect" === c._type) return } var d = this.getHighlightedResults(); if (!(d.length < 1)) { var e = d.data("data");
                        null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e }) } }, a }), b.define("select2/dropdown/closeOnSelect", [], function() {
                function a() {} return a.prototype.bind = function(a, b, c) { var d = this;
                    a.call(this, b, c), b.on("select", function(a) { d._selectTriggered(a) }), b.on("unselect", function(a) { d._selectTriggered(a) }) }, a.prototype._selectTriggered = function(a, b) { var c = b.originalEvent;
                    c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b }) }, a }), b.define("select2/i18n/en", [], function() { return { errorLoading: function() { return "The results could not be loaded." }, inputTooLong: function(a) { var b = a.input.length - a.maximum,
                            c = "Please delete " + b + " character"; return 1 != b && (c += "s"), c }, inputTooShort: function(a) { var b = a.minimum - a.input.length,
                            c = "Please enter " + b + " or more characters"; return c }, loadingMore: function() { return "Loading more results…" }, maximumSelected: function(a) { var b = "You can only select " + a.maximum + " item"; return 1 != a.maximum && (b += "s"), b }, noResults: function() { return "No results found" }, searching: function() { return "Searching…" } } }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                function D() { this.reset() }
                D.prototype.apply = function(l) { if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) { if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) { var C = b(l.amdBase + "compat/query");
                            l.dataAdapter = j.Decorate(l.dataAdapter, C) } if (null != l.initSelection) { var D = b(l.amdBase + "compat/initSelection");
                            l.dataAdapter = j.Decorate(l.dataAdapter, D) } } if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) { if (l.multiple) l.dropdownAdapter = u;
                        else { var E = j.Decorate(u, v);
                            l.dropdownAdapter = E } if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) { var F = b(l.amdBase + "compat/dropdownCss");
                            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F) }
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y) } if (null == l.selectionAdapter) { if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) { var G = b(l.amdBase + "compat/containerCss");
                            l.selectionAdapter = j.Decorate(l.selectionAdapter, G) }
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, i) } if ("string" == typeof l.language)
                        if (l.language.indexOf("-") > 0) { var H = l.language.split("-"),
                                I = H[0];
                            l.language = [l.language, I] } else l.language = [l.language];
                    if (a.isArray(l.language)) { var J = new k;
                        l.language.push("en"); for (var K = l.language, L = 0; L < K.length; L++) { var M = K[L],
                                N = {}; try { N = k.loadPath(M) } catch (O) { try { M = this.defaults.amdLanguageBase + M, N = k.loadPath(M) } catch (P) { l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.'); continue } }
                            J.extend(N) }
                        l.translations = J } else { var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                            R = new k(l.language);
                        R.extend(Q), l.translations = R } return l }, D.prototype.reset = function() {
                    function b(a) {
                        function b(a) { return l[a] || a } return a.replace(/[^\u0000-\u007E]/g, b) }

                    function c(d, e) { if ("" === a.trim(d.term)) return e; if (e.children && e.children.length > 0) { for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) { var h = e.children[g],
                                    i = c(d, h);
                                null == i && f.children.splice(g, 1) } return f.children.length > 0 ? f : c(d, f) } var j = b(e.text).toUpperCase(),
                            k = b(d.term).toUpperCase(); return j.indexOf(k) > -1 ? e : null }
                    this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function(a) { return a }, templateResult: function(a) { return a.text }, templateSelection: function(a) { return a.text }, theme: "default", width: "resolve" } }, D.prototype.set = function(b, c) { var d = a.camelCase(b),
                        e = {};
                    e[d] = c; var f = j._convertData(e);
                    a.extend(this.defaults, f) }; var E = new D; return E }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                function e(b, e) { if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) { var f = a(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f) } } return e.prototype.fromElement = function(a) { var c = ["select2"];
                    null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl"))); var e = {};
                    e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data(); var f = b.extend(!0, {}, e);
                    f = d._convertData(f); for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]); return this }, e.prototype.get = function(a) { return this.options[a] }, e.prototype.set = function(a, b) { this.options[a] = b }, e }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                var e = function(a, c) { null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this); var d = a.attr("tabindex") || 0;
                    a.data("old-tabindex", d), a.attr("tabindex", "-1"); var f = this.options.get("dataAdapter");
                    this.dataAdapter = new f(a, this.options); var g = this.render();
                    this._placeContainer(g); var h = this.options.get("selectionAdapter");
                    this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g); var i = this.options.get("dropdownAdapter");
                    this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g); var j = this.options.get("resultsAdapter");
                    this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var k = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) { k.trigger("selection:update", { data: a }) }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this) };
                return c.Extend(e, c.Observable), e.prototype._generateId = function(a) { var b = ""; return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b }, e.prototype._placeContainer = function(a) { a.insertAfter(this.$element); var b = this._resolveWidth(this.$element, this.options.get("width"));
                    null != b && a.css("width", b) }, e.prototype._resolveWidth = function(a, b) { var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == b) { var d = this._resolveWidth(a, "style"); return null != d ? d : this._resolveWidth(a, "element") } if ("element" == b) { var e = a.outerWidth(!1); return 0 >= e ? "auto" : e + "px" } if ("style" == b) { var f = a.attr("style"); if ("string" != typeof f) return null; for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) { var j = g[h].replace(/\s/g, ""),
                                k = j.match(c); if (null !== k && k.length >= 1) return k[1] } return null } return b }, e.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, e.prototype._registerDomEvents = function() { var b = this;
                    this.$element.on("change.select2", function() { b.dataAdapter.current(function(a) { b.trigger("selection:update", { data: a }) }) }), this.$element.on("focus.select2", function(a) { b.trigger("focus", a) }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA); var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != d ? (this._observer = new d(function(c) { a.each(c, b._syncA), a.each(c, b._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1)) }, e.prototype._registerDataEvents = function() { var a = this;
                    this.dataAdapter.on("*", function(b, c) { a.trigger(b, c) }) }, e.prototype._registerSelectionEvents = function() { var b = this,
                        c = ["toggle", "focus"];
                    this.selection.on("toggle", function() { b.toggleDropdown() }), this.selection.on("focus", function(a) { b.focus(a) }), this.selection.on("*", function(d, e) {-1 === a.inArray(d, c) && b.trigger(d, e) }) }, e.prototype._registerDropdownEvents = function() { var a = this;
                    this.dropdown.on("*", function(b, c) { a.trigger(b, c) }) }, e.prototype._registerResultsEvents = function() { var a = this;
                    this.results.on("*", function(b, c) { a.trigger(b, c) }) }, e.prototype._registerEvents = function() { var a = this;
                    this.on("open", function() { a.$container.addClass("select2-container--open") }), this.on("close", function() { a.$container.removeClass("select2-container--open") }), this.on("enable", function() { a.$container.removeClass("select2-container--disabled") }), this.on("disable", function() { a.$container.addClass("select2-container--disabled") }), this.on("blur", function() { a.$container.removeClass("select2-container--focus") }), this.on("query", function(b) { a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) { a.trigger("results:all", { data: c, query: b }) }) }), this.on("query:append", function(b) { this.dataAdapter.query(b, function(c) { a.trigger("results:append", { data: c, query: b }) }) }), this.on("keypress", function(b) { var c = b.which;
                        a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault()) }) }, e.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, e.prototype._syncSubtree = function(a, b) { var c = !1,
                        d = this; if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) { if (b)
                            if (b.addedNodes && b.addedNodes.length > 0)
                                for (var e = 0; e < b.addedNodes.length; e++) { var f = b.addedNodes[e];
                                    f.selected && (c = !0) } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                            else c = !0;
                        c && this.dataAdapter.current(function(a) { d.trigger("selection:update", { data: a }) }) } }, e.prototype.trigger = function(a, b) { var c = e.__super__.trigger,
                        d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" }; if (void 0 === b && (b = {}), a in d) { var f = d[a],
                            g = { prevented: !1, name: a, args: b }; if (c.call(this, f, g), g.prevented) return void(b.prevented = !0) }
                    c.call(this, a, b) }, e.prototype.toggleDropdown = function() { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, e.prototype.open = function() { this.isOpen() || this.trigger("query", {}) }, e.prototype.close = function() { this.isOpen() && this.trigger("close", {}) }, e.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, e.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, e.prototype.focus = function(a) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, e.prototype.enable = function(a) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]); var b = !a[0];
                    this.$element.prop("disabled", b) }, e.prototype.data = function() { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var a = []; return this.dataAdapter.current(function(b) { a = b }), a }, e.prototype.val = function(b) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val(); var c = b[0];
                    a.isArray(c) && (c = a.map(c, function(a) { return a.toString() })), this.$element.val(c).trigger("change") }, e.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"),
                        this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, e.prototype.render = function() { var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b }, e
            }), b.define("jquery-mousewheel", ["jquery"], function(a) { return a }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) { if (null == a.fn.select2) { var e = ["open", "close", "destroy"];
                    a.fn.select2 = function(b) { if (b = b || {}, "object" == typeof b) return this.each(function() { var d = a.extend(!0, {}, b);
                            new c(a(this), d) }), this; if ("string" == typeof b) { var d, f = Array.prototype.slice.call(arguments, 1); return this.each(function() { var c = a(this).data("select2");
                                null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f) }), a.inArray(b, e) > -1 ? this : d } throw new Error("Invalid arguments for Select2: " + b) } } return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c }), { define: b.define, require: b.require }
        }(),
        c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});
/** admin/select2/select2.min.js end **/

/** lightbox.js start **/
(function() { var t = jQuery,
        i = function() {
            function t() { this.fadeDuration = 500, this.fitImagesInViewport = !0, this.resizeDuration = 700, this.positionFromTop = 50, this.showImageNumberLabel = !0, this.alwaysShowNavOnTouchDevices = !1, this.wrapAround = !1 } return t.prototype.albumLabel = function(t, i) { return "Image " + t + " of " + i }, t }(),
        e = function() {
            function i(t) { this.options = t, this.album = [], this.currentImageIndex = void 0, this.init() } return i.prototype.init = function() { this.enable(), this.build() }, i.prototype.enable = function() { var i = this;
                t("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(e) { return i.start(t(e.currentTarget)), !1 }) }, i.prototype.build = function() { var i = this;
                t("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><!--a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a--></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><!--div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div--><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(t("body")), this.$lightbox = t("#lightbox"), this.$overlay = t("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() { return i.end(), !1 }), this.$lightbox.hide().on("click", function(e) { return "lightbox" === t(e.target).attr("id") && i.end(), !1 }), this.$outerContainer.on("click", function(e) { return "lightbox" === t(e.target).attr("id") && i.end(), !1 }), this.$lightbox.find(".lb-prev").on("click", function() { return 0 === i.currentImageIndex ? i.changeImage(i.album.length - 1) : i.changeImage(i.currentImageIndex - 1), !1 }), this.$lightbox.find(".lb-next").on("click", function() { return i.currentImageIndex === i.album.length - 1 ? i.changeImage(0) : i.changeImage(i.currentImageIndex + 1), !1 }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() { return i.end(), !1 }) }, i.prototype.start = function(i) { var e = this,
                    n = t(window);
                n.on("resize", t.proxy(this.sizeOverlay, this)), t("select, object, embed").css({ visibility: "hidden" }), this.sizeOverlay(), this.album = []; var a = 0;

                function o(t) { e.album.push({ link: t.attr("href"), title: t.attr("data-title") || t.attr("title") }) } var h, s = i.attr("data-lightbox"); if (s) { h = t(i.prop("tagName") + '[data-lightbox="' + s + '"]'); for (var r = 0; r < h.length; r = ++r) o(t(h[r])), h[r] === i[0] && (a = r) } else if ("lightbox" === i.attr("rel")) o(i);
                else { h = t(i.prop("tagName") + '[rel="' + i.attr("rel") + '"]'); for (var l = 0; l < h.length; l = ++l) o(t(h[l])), h[l] === i[0] && (a = l) } var d = n.scrollTop() + this.options.positionFromTop,
                    c = n.scrollLeft();
                this.$lightbox.css({ top: d + "px", left: c + "px" }).fadeIn(this.options.fadeDuration), this.changeImage(a) }, i.prototype.changeImage = function(i) { var e = this;
                this.disableKeyboardNav(); var n = this.$lightbox.find(".lb-image");
                this.$overlay.fadeIn(this.options.fadeDuration), t(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating"); var a = new Image;
                a.onload = function() { var o, h, s, r, l, d;
                    n.attr("src", e.album[i].link), t(a), n.width(a.width), n.height(a.height), e.options.fitImagesInViewport && (d = t(window).width(), l = t(window).height(), r = d - e.containerLeftPadding - e.containerRightPadding - 20, s = l - e.containerTopPadding - e.containerBottomPadding - 120, (a.width > r || a.height > s) && (a.width / r > a.height / s ? (h = r, o = parseInt(a.height / (a.width / h), 10), n.width(h), n.height(o)) : (o = s, h = parseInt(a.width / (a.height / o), 10), n.width(h), n.height(o)))), e.sizeContainer(n.width(), n.height()) }, a.src = this.album[i].link, this.currentImageIndex = i }, i.prototype.sizeOverlay = function() { this.$overlay.width(t(window).width()).height(t(document).height()) }, i.prototype.sizeContainer = function(t, i) { var e = this,
                    n = this.$outerContainer.outerWidth(),
                    a = this.$outerContainer.outerHeight(),
                    o = t + this.containerLeftPadding + this.containerRightPadding,
                    h = i + this.containerTopPadding + this.containerBottomPadding;

                function s() { e.$lightbox.find(".lb-dataContainer").width(o), e.$lightbox.find(".lb-prevLink").height(h), e.$lightbox.find(".lb-nextLink").height(h), e.showImage() }
                n !== o || a !== h ? this.$outerContainer.animate({ width: o, height: h }, this.options.resizeDuration, "swing", function() { s() }) : s() }, i.prototype.showImage = function() { this.$lightbox.find(".lb-loader").hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav() }, i.prototype.updateNav = function() { var t = !1; try { document.createEvent("TouchEvent"), t = !!this.options.alwaysShowNavOnTouchDevices } catch (t) {}
                this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (t && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), t && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), t && this.$lightbox.find(".lb-next").css("opacity", "1")))) }, i.prototype.updateDetails = function() { var i = this;
                void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function(i) { location.href = t(this).attr("href") }), this.album.length > 1 && this.options.showImageNumberLabel ? this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") : this.$lightbox.find(".lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() { return i.sizeOverlay() }) }, i.prototype.preloadNeighboringImages = function() { this.album.length > this.currentImageIndex + 1 && ((new Image).src = this.album[this.currentImageIndex + 1].link);
                this.currentImageIndex > 0 && ((new Image).src = this.album[this.currentImageIndex - 1].link) }, i.prototype.enableKeyboardNav = function() { t(document).on("keyup.keyboard", t.proxy(this.keyboardAction, this)) }, i.prototype.disableKeyboardNav = function() { t(document).off(".keyboard") }, i.prototype.keyboardAction = function(t) { var i = t.keyCode,
                    e = String.fromCharCode(i).toLowerCase();
                27 === i || e.match(/x|o|c/) ? this.end() : "p" === e || 37 === i ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : "n" !== e && 39 !== i || (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0)) }, i.prototype.end = function() { this.disableKeyboardNav(), t(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), t("select, object, embed").css({ visibility: "visible" }) }, i }();
    t(function() { var t = new i;
        new e(t) }) }).call(this);
/** lightbox.js end **/

/** jquery-ui.js start **/
! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) { t.ui = t.ui || {};
    t.ui.version = "1.12.1"; var e, i = 0,
        s = Array.prototype.slice;
    t.cleanData = (e = t.cleanData, function(i) { var s, n, o; for (o = 0; null != (n = i[o]); o++) try {
            (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove") } catch (t) {}
        e(i) }), t.widget = function(e, i, s) { var n, o, a, r = {},
            h = e.split(".")[0],
            l = h + "-" + (e = e.split(".")[1]); return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function(e) { return !!t.data(e, l) }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) { if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e) }, t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }), (a = new i).options = t.widget.extend({}, a.options), t.each(s, function(e, s) { t.isFunction(s) ? r[e] = function() {
                function t() { return i.prototype[e].apply(this, arguments) }

                function n(t) { return i.prototype[e].apply(this, t) } return function() { var e, i = this._super,
                        o = this._superApply; return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e } }() : r[e] = s }), o.prototype = t.widget.extend(a, { widgetEventPrefix: n && a.widgetEventPrefix || e }, r, { constructor: o, namespace: h, widgetName: e, widgetFullName: l }), n ? (t.each(n._childConstructors, function(e, i) { var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto) }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o }, t.widget.extend = function(e) { for (var i, n, o = s.call(arguments, 1), a = 0, r = o.length; a < r; a++)
            for (i in o[a]) n = o[a][i], o[a].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n); return e }, t.widget.bridge = function(e, i) { var n = i.prototype.widgetFullName || e;
        t.fn[e] = function(o) { var a = "string" == typeof o,
                r = s.call(arguments, 1),
                h = this; return a ? this.length || "instance" !== o ? this.each(function() { var i, s = t.data(this, n); return "instance" === o ? (h = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r)) !== s && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'") }) : h = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function() { var e = t.data(this, n);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this)) })), h } }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function(e, s) { s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, { remove: function(t) { t.target === s && this.destroy() } }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: function() { return {} }, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function() { var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) { e._removeClass(i, t) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace) }, _destroy: t.noop, widget: function() { return this.element }, option: function(e, i) { var s, n, o, a = e; if (0 === arguments.length) return t.widget.extend({}, this.options); if ("string" == typeof e)
                if (a = {}, s = e.split("."), e = s.shift(), s.length) { for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]]; if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                    n[e] = i } else { if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i }
            return this._setOptions(a), this }, _setOptions: function(t) { var e; for (e in t) this._setOption(e, t[e]); return this }, _setOption: function(t, e) { return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this }, _setOptionClasses: function(e) { var i, s, n; for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 }))) }, _setOptionDisabled: function(t) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) }, enable: function() { return this._setOptions({ disabled: !1 }) }, disable: function() { return this._setOptions({ disabled: !0 }) }, _classes: function(e) { var i = [],
                s = this;

            function n(n, o) { var a, r; for (r = 0; r < n.length; r++) a = s.classesElementLookup[n[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), s.classesElementLookup[n[r]] = a, i.push(n[r]), o && e.classes[n[r]] && i.push(e.classes[n[r]]) } return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ") }, _untrackClassesElement: function(e) { var i = this;
            t.each(i.classesElementLookup, function(s, n) {-1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get())) }) }, _removeClass: function(t, e, i) { return this._toggleClass(t, e, i, !1) }, _addClass: function(t, e, i) { return this._toggleClass(t, e, i, !0) }, _toggleClass: function(t, e, i, s) { s = "boolean" == typeof s ? s : i; var n = "string" == typeof t || null === t,
                o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s }; return o.element.toggleClass(this._classes(o), s), this }, _on: function(e, i, s) { var n, o = this; "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
                function r() { if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments) } "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++); var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + o.eventNamespace,
                    c = h[2];
                c ? n.on(l, c, r) : i.on(l, r) }) }, _off: function(e, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get()) }, _delay: function(t, e) { var i = this; return setTimeout(function() { return ("string" == typeof t ? i[t] : t).apply(i, arguments) }, e || 0) }, _hoverable: function(e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-hover") }, mouseleave: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-hover") } }) }, _focusable: function(e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-focus") }, focusout: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-focus") } }) }, _trigger: function(e, i, s) { var n, o, a = this.options[e]; if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]); return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented()) } }, t.each({ show: "fadeIn", hide: "fadeOut" }, function(e, i) { t.Widget.prototype["_" + e] = function(s, n, o) { var a; "string" == typeof n && (n = { effect: n }); var r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e; "number" == typeof(n = n || {}) && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) { t(this)[e](), o && o.call(s[0]), i() }) } });
    t.widget;! function() { var e, i = Math.max,
            s = Math.abs,
            n = /left|center|right/,
            o = /top|center|bottom/,
            a = /[\+\-]\d+(\.[\d]+)?%?/,
            r = /^\w+/,
            h = /%$/,
            l = t.fn.position;

        function c(t, e, i) { return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? i / 100 : 1)] }

        function u(e, i) { return parseInt(t.css(e, i), 10) || 0 }
        t.position = { scrollbarWidth: function() { if (void 0 !== e) return e; var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = n.children()[0]; return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), i === (s = o.offsetWidth) && (s = n[0].clientWidth), n.remove(), e = i - s }, getScrollInfo: function(e) { var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth; return { width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 } }, getWithinInfo: function(e) { var i = t(e || window),
                    s = t.isWindow(i[0]),
                    n = !!i[0] && 9 === i[0].nodeType; return { element: i, isWindow: s, isDocument: n, offset: !s && !n ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() } } }, t.fn.position = function(e) { if (!e || !e.of) return l.apply(this, arguments);
            e = t.extend({}, e); var h, d, p, f, g, m, _, v, b = t(e.of),
                y = t.position.getWithinInfo(e.within),
                w = t.position.getScrollInfo(y),
                k = (e.collision || "flip").split(" "),
                x = {}; return m = 9 === (v = (_ = b)[0]).nodeType ? { width: _.width(), height: _.height(), offset: { top: 0, left: 0 } } : t.isWindow(v) ? { width: _.width(), height: _.height(), offset: { top: _.scrollTop(), left: _.scrollLeft() } } : v.preventDefault ? { width: 0, height: 0, offset: { top: v.pageY, left: v.pageX } } : { width: _.outerWidth(), height: _.outerHeight(), offset: _.offset() }, b[0].preventDefault && (e.at = "left top"), d = m.width, p = m.height, f = m.offset, g = t.extend({}, f), t.each(["my", "at"], function() { var t, i, s = (e[this] || "").split(" ");
                1 === s.length && (s = n.test(s[0]) ? s.concat(["center"]) : o.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = n.test(s[0]) ? s[0] : "center", s[1] = o.test(s[1]) ? s[1] : "center", t = a.exec(s[0]), i = a.exec(s[1]), x[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [r.exec(s[0])[0], r.exec(s[1])[0]] }), 1 === k.length && (k[1] = k[0]), "right" === e.at[0] ? g.left += d : "center" === e.at[0] && (g.left += d / 2), "bottom" === e.at[1] ? g.top += p : "center" === e.at[1] && (g.top += p / 2), h = c(x.at, d, p), g.left += h[0], g.top += h[1], this.each(function() { var n, o, a = t(this),
                    r = a.outerWidth(),
                    l = a.outerHeight(),
                    m = u(this, "marginLeft"),
                    _ = u(this, "marginTop"),
                    v = r + m + u(this, "marginRight") + w.width,
                    C = l + _ + u(this, "marginBottom") + w.height,
                    D = t.extend({}, g),
                    I = c(x.my, a.outerWidth(), a.outerHeight()); "right" === e.my[0] ? D.left -= r : "center" === e.my[0] && (D.left -= r / 2), "bottom" === e.my[1] ? D.top -= l : "center" === e.my[1] && (D.top -= l / 2), D.left += I[0], D.top += I[1], n = { marginLeft: m, marginTop: _ }, t.each(["left", "top"], function(i, s) { t.ui.position[k[i]] && t.ui.position[k[i]][s](D, { targetWidth: d, targetHeight: p, elemWidth: r, elemHeight: l, collisionPosition: n, collisionWidth: v, collisionHeight: C, offset: [h[0] + I[0], h[1] + I[1]], my: e.my, at: e.at, within: y, elem: a }) }), e.using && (o = function(t) { var n = f.left - D.left,
                        o = n + d - r,
                        h = f.top - D.top,
                        c = h + p - l,
                        u = { target: { element: b, left: f.left, top: f.top, width: d, height: p }, element: { element: a, left: D.left, top: D.top, width: r, height: l }, horizontal: o < 0 ? "left" : n > 0 ? "right" : "center", vertical: c < 0 ? "top" : h > 0 ? "bottom" : "middle" };
                    d < r && s(n + o) < d && (u.horizontal = "center"), p < l && s(h + c) < p && (u.vertical = "middle"), i(s(n), s(o)) > i(s(h), s(c)) ? u.important = "horizontal" : u.important = "vertical", e.using.call(this, t, u) }), a.offset(t.extend(D, { using: o })) }) }, t.ui.position = { fit: { left: function(t, e) { var s, n = e.within,
                        o = n.isWindow ? n.scrollLeft : n.offset.left,
                        a = n.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        h = o - r,
                        l = r + e.collisionWidth - a - o;
                    e.collisionWidth > a ? h > 0 && l <= 0 ? (s = t.left + h + e.collisionWidth - a - o, t.left += h - s) : t.left = l > 0 && h <= 0 ? o : h > l ? o + a - e.collisionWidth : o : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = i(t.left - r, t.left) }, top: function(t, e) { var s, n = e.within,
                        o = n.isWindow ? n.scrollTop : n.offset.top,
                        a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        h = o - r,
                        l = r + e.collisionHeight - a - o;
                    e.collisionHeight > a ? h > 0 && l <= 0 ? (s = t.top + h + e.collisionHeight - a - o, t.top += h - s) : t.top = l > 0 && h <= 0 ? o : h > l ? o + a - e.collisionHeight : o : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = i(t.top - r, t.top) } }, flip: { left: function(t, e) { var i, n, o = e.within,
                        a = o.offset.left + o.scrollLeft,
                        r = o.width,
                        h = o.isWindow ? o.scrollLeft : o.offset.left,
                        l = t.left - e.collisionPosition.marginLeft,
                        c = l - h,
                        u = l + e.collisionWidth - r - h,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    c < 0 ? ((i = t.left + d + p + f + e.collisionWidth - r - a) < 0 || i < s(c)) && (t.left += d + p + f) : u > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - h) > 0 || s(n) < u) && (t.left += d + p + f) }, top: function(t, e) { var i, n, o = e.within,
                        a = o.offset.top + o.scrollTop,
                        r = o.height,
                        h = o.isWindow ? o.scrollTop : o.offset.top,
                        l = t.top - e.collisionPosition.marginTop,
                        c = l - h,
                        u = l + e.collisionHeight - r - h,
                        d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        f = -2 * e.offset[1];
                    c < 0 ? ((n = t.top + d + p + f + e.collisionHeight - r - a) < 0 || n < s(c)) && (t.top += d + p + f) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + d + p + f - h) > 0 || s(i) < u) && (t.top += d + p + f) } }, flipfit: { left: function() { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function() { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } } } }();
    t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function(e) { return function(i) { return !!t.data(i, e) } }) : function(e, i, s) { return !!t.data(e, s[3]) } }), t.fn.extend({ disableSelection: (n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() { return this.on(n + ".ui-disableSelection", function(t) { t.preventDefault() }) }), enableSelection: function() { return this.off(".ui-disableSelection") } }); var n, o, a = "ui-effects-animated",
        r = t;
    t.effects = { effect: {} },
        function(t, e) { var i, s = /^([\-+])=\s*(\d+\.?\d*)/,
                n = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }],
                o = t.Color = function(e, i, s, n) { return new t.Color.fn.parse(e, i, s, n) },
                a = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                r = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                h = o.support = {},
                l = t("<p>")[0],
                c = t.each;

            function u(t, e, i) { var s = r[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t) }

            function d(e) { var s = o(),
                    r = s._rgba = []; return e = e.toLowerCase(), c(n, function(t, i) { var n, o = i.re.exec(e),
                        h = o && i.parse(o),
                        l = i.space || "rgba"; if (h) return n = s[l](h), s[a[l].cache] = n[a[l].cache], r = s._rgba = n._rgba, !1 }), r.length ? ("0,0,0,0" === r.join() && t.extend(r, i.transparent), s) : i[e] }

            function p(t, e, i) { return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t }
            l.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = l.style.backgroundColor.indexOf("rgba") > -1, c(a, function(t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), o.fn = t.extend(o.prototype, { parse: function(e, s, n, r) { if (void 0 === e) return this._rgba = [null, null, null, null], this;
                    (e.jquery || e.nodeType) && (e = t(e).css(s), s = void 0); var h = this,
                        l = t.type(e),
                        p = this._rgba = []; return void 0 !== s && (e = [e, s, n, r], l = "array"), "string" === l ? this.parse(d(e) || i._default) : "array" === l ? (c(a.rgba.props, function(t, i) { p[i.idx] = u(e[i.idx], i) }), this) : "object" === l ? (c(a, e instanceof o ? function(t, i) { e[i.cache] && (h[i.cache] = e[i.cache].slice()) } : function(i, s) { var n = s.cache;
                        c(s.props, function(t, i) { if (!h[n] && s.to) { if ("alpha" === t || null == e[t]) return;
                                h[n] = s.to(h._rgba) }
                            h[n][i.idx] = u(e[t], i, !0) }), h[n] && t.inArray(null, h[n].slice(0, 3)) < 0 && (h[n][3] = 1, s.from && (h._rgba = s.from(h[n]))) }), this) : void 0 }, is: function(t) { var e = o(t),
                        i = !0,
                        s = this; return c(a, function(t, n) { var o, a = e[n.cache]; return a && (o = s[n.cache] || n.to && n.to(s._rgba) || [], c(n.props, function(t, e) { if (null != a[e.idx]) return i = a[e.idx] === o[e.idx] })), i }), i }, _space: function() { var t = [],
                        e = this; return c(a, function(i, s) { e[s.cache] && t.push(i) }), t.pop() }, transition: function(t, e) { var i = o(t),
                        s = i._space(),
                        n = a[s],
                        h = 0 === this.alpha() ? o("transparent") : this,
                        l = h[n.cache] || n.to(h._rgba),
                        d = l.slice(); return i = i[n.cache], c(n.props, function(t, s) { var n = s.idx,
                            o = l[n],
                            a = i[n],
                            h = r[s.type] || {};
                        null !== a && (null === o ? d[n] = a : (h.mod && (a - o > h.mod / 2 ? o += h.mod : o - a > h.mod / 2 && (o -= h.mod)), d[n] = u((a - o) * e + o, s))) }), this[s](d) }, blend: function(e) { if (1 === this._rgba[3]) return this; var i = this._rgba.slice(),
                        s = i.pop(),
                        n = o(e)._rgba; return o(t.map(i, function(t, e) { return (1 - s) * n[e] + s * t })) }, toRgbaString: function() { var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) { return null == t ? e > 2 ? 1 : 0 : t }); return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")" }, toHslaString: function() { var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) { return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t }); return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")" }, toHexString: function(e) { var i = this._rgba.slice(),
                        s = i.pop(); return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) { return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t }).join("") }, toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } }), o.fn.parse.prototype = o.fn, a.hsla.to = function(t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    o = t[2] / 255,
                    a = t[3],
                    r = Math.max(s, n, o),
                    h = Math.min(s, n, o),
                    l = r - h,
                    c = r + h,
                    u = .5 * c; return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : u <= .5 ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a] }, a.hsla.from = function(t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    n = t[3],
                    o = s <= .5 ? s * (1 + i) : s + i - s * i,
                    a = 2 * s - o; return [Math.round(255 * p(a, o, e + 1 / 3)), Math.round(255 * p(a, o, e)), Math.round(255 * p(a, o, e - 1 / 3)), n] }, c(a, function(e, i) { var n = i.props,
                    a = i.cache,
                    r = i.to,
                    h = i.from;
                o.fn[e] = function(e) { if (r && !this[a] && (this[a] = r(this._rgba)), void 0 === e) return this[a].slice(); var i, s = t.type(e),
                        l = "array" === s || "object" === s ? e : arguments,
                        d = this[a].slice(); return c(n, function(t, e) { var i = l["object" === s ? t : e.idx];
                        null == i && (i = d[e.idx]), d[e.idx] = u(i, e) }), h ? ((i = o(h(d)))[a] = d, i) : o(d) }, c(n, function(i, n) { o.fn[i] || (o.fn[i] = function(o) { var a, r = t.type(o),
                            h = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e,
                            l = this[h](),
                            c = l[n.idx]; return "undefined" === r ? c : ("function" === r && (o = o.call(this, c), r = t.type(o)), null == o && n.empty ? this : ("string" === r && (a = s.exec(o)) && (o = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1)), l[n.idx] = o, this[h](l))) }) }) }), o.hook = function(e) { var i = e.split(" ");
                c(i, function(e, i) { t.cssHooks[i] = { set: function(e, s) { var n, a, r = ""; if ("transparent" !== s && ("string" !== t.type(s) || (n = d(s)))) { if (s = o(n || s), !h.rgba && 1 !== s._rgba[3]) { for (a = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && a && a.style;) try { r = t.css(a, "backgroundColor"), a = a.parentNode } catch (t) {}
                                    s = s.blend(r && "transparent" !== r ? r : "_default") }
                                s = s.toRgbaString() } try { e.style[i] = s } catch (t) {} } }, t.fx.step[i] = function(e) { e.colorInit || (e.start = o(e.elem, i), e.end = o(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) } }) }, o.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = { expand: function(t) { var e = {}; return c(["Top", "Right", "Bottom", "Left"], function(i, s) { e["border" + s + "Color"] = t }), e } }, i = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(r),
        function() { var e, i = ["add", "remove", "toggle"],
                s = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };

            function n(e) { var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {}; if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) "string" == typeof n[i = n[s]] && (o[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (o[i] = n[i]); return o }
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) { t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (r.style(t.elem, i, t.end), t.setAttr = !0) } }), t.fn.addBack || (t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function(e, o, a, r) { var h = t.speed(o, a, r); return this.queue(function() { var o, a = t(this),
                        r = a.attr("class") || "",
                        l = h.children ? a.find("*").addBack() : a;
                    l = l.map(function() { return { el: t(this), start: n(this) } }), (o = function() { t.each(i, function(t, i) { e[i] && a[i + "Class"](e[i]) }) })(), l = l.map(function() { return this.end = n(this.el[0]), this.diff = function(e, i) { var n, o, a = {}; for (n in i) o = i[n], e[n] !== o && (s[n] || !t.fx.step[n] && isNaN(parseFloat(o)) || (a[n] = o)); return a }(this.start, this.end), this }), a.attr("class", r), l = l.map(function() { var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, h, { queue: !1, complete: function() { i.resolve(e) } }); return this.el.animate(this.diff, s), i.promise() }), t.when.apply(t, l.get()).done(function() { o(), t.each(arguments, function() { var e = this.el;
                            t.each(this.diff, function(t) { e.css(t, "") }) }), h.complete.call(a[0]) }) }) }, t.fn.extend({ addClass: (e = t.fn.addClass, function(i, s, n, o) { return s ? t.effects.animateClass.call(this, { add: i }, s, n, o) : e.apply(this, arguments) }), removeClass: function(e) { return function(i, s, n, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function(e) { return function(i, s, n, o, a) { return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, s, n, o) } }(t.fn.toggleClass), switchClass: function(e, i, s, n, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, o) } }) }(),
        function() { var e;

            function i(e, i, s, n) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e }

            function s(e) { return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect)) }

            function n(t, e) { var i = e.outerWidth(),
                    s = e.outerHeight(),
                    n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0]; return { top: parseFloat(n[1]) || 0, right: "auto" === n[2] ? i : parseFloat(n[2]), bottom: "auto" === n[3] ? s : parseFloat(n[3]), left: parseFloat(n[4]) || 0 } }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (e = t.expr.filters.animated, function(i) { return !!t(i).data(a) || e(i) })), !1 !== t.uiBackCompat && t.extend(t.effects, { save: function(t, e) { for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data("ui-effects-" + e[i], t[0].style[e[i]]) }, restore: function(t, e) { for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && (i = t.data("ui-effects-" + e[s]), t.css(e[s], i)) }, setMode: function(t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e }, createWrapper: function(e) { if (e.parent().is(".ui-effects-wrapper")) return e.parent(); var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        n = { width: e.width(), height: e.height() },
                        o = document.activeElement; try { o.id } catch (t) { o = document.body } return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function(t, s) { i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(n), s.css(i).show() }, removeWrapper: function(e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e } }), t.extend(t.effects, { version: "1.12.1", define: function(e, i, s) { return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s }, scaledDimensions: function(t, e, i) { if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; var s = "horizontal" !== i ? (e || 100) / 100 : 1,
                        n = "vertical" !== i ? (e || 100) / 100 : 1; return { height: t.height() * n, width: t.width() * s, outerHeight: t.outerHeight() * n, outerWidth: t.outerWidth() * s } }, clipToBox: function(t) { return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top } }, unshift: function(t, e, i) { var s = t.queue();
                    e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue() }, saveStyle: function(t) { t.data("ui-effects-style", t[0].style.cssText) }, restoreStyle: function(t) { t[0].style.cssText = t.data("ui-effects-style") || "", t.removeData("ui-effects-style") }, mode: function(t, e) { var i = t.is(":hidden"); return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e }, getBaseline: function(t, e) { var i, s; switch (t[0]) {
                        case "top":
                            i = 0; break;
                        case "middle":
                            i = .5; break;
                        case "bottom":
                            i = 1; break;
                        default:
                            i = t[0] / e.height } switch (t[1]) {
                        case "left":
                            s = 0; break;
                        case "center":
                            s = .5; break;
                        case "right":
                            s = 1; break;
                        default:
                            s = t[1] / e.width } return { x: s, y: i } }, createPlaceholder: function(e) { var i, s = e.css("position"),
                        n = e.position(); return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), float: e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data("ui-effects-placeholder", i)), e.css({ position: s, left: n.left, top: n.top }), i }, removePlaceholder: function(t) { var e = "ui-effects-placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e)) }, cleanUp: function(e) { t.effects.restoreStyle(e), t.effects.removePlaceholder(e) }, setTransition: function(e, i, s, n) { return n = n || {}, t.each(i, function(t, i) { var o = e.cssUnit(i);
                        o[0] > 0 && (n[i] = o[0] * s + o[1]) }), n } }), t.fn.extend({ effect: function() { var e = i.apply(this, arguments),
                        s = t.effects.effect[e.effect],
                        n = s.mode,
                        o = e.queue,
                        r = o || "fx",
                        h = e.complete,
                        l = e.mode,
                        c = [],
                        u = function(e) { var i = t(this),
                                s = t.effects.mode(i, l) || n;
                            i.data(a, !0), c.push(s), n && ("show" === s || s === n && "hide" === s) && i.show(), n && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e() }; if (t.fx.off || !s) return l ? this[l](e.duration, h) : this.each(function() { h && h.call(this) });

                    function d(i) { var o = t(this);

                        function r() { t.isFunction(h) && h.call(o[0]), t.isFunction(i) && i() }
                        e.mode = c.shift(), !1 === t.uiBackCompat || n ? "none" === e.mode ? (o[l](), r()) : s.call(o[0], e, function() { o.removeData(a), t.effects.cleanUp(o), "hide" === e.mode && o.hide(), r() }) : (o.is(":hidden") ? "hide" === l : "show" === l) ? (o[l](), r()) : s.call(o[0], e, r) } return !1 === o ? this.each(u).each(d) : this.queue(r, u).queue(r, d) }, show: function(t) { return function(e) { if (s(e)) return t.apply(this, arguments); var n = i.apply(this, arguments); return n.mode = "show", this.effect.call(this, n) } }(t.fn.show), hide: function(t) { return function(e) { if (s(e)) return t.apply(this, arguments); var n = i.apply(this, arguments); return n.mode = "hide", this.effect.call(this, n) } }(t.fn.hide), toggle: function(t) { return function(e) { if (s(e) || "boolean" == typeof e) return t.apply(this, arguments); var n = i.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) } }(t.fn.toggle), cssUnit: function(e) { var i = this.css(e),
                        s = []; return t.each(["em", "px", "%", "pt"], function(t, e) { i.indexOf(e) > 0 && (s = [parseFloat(i), e]) }), s }, cssClip: function(t) { return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this) }, transfer: function(e, i) { var s = t(this),
                        n = t(e.to),
                        o = "fixed" === n.css("position"),
                        a = t("body"),
                        r = o ? a.scrollTop() : 0,
                        h = o ? a.scrollLeft() : 0,
                        l = n.offset(),
                        c = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() },
                        u = s.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: u.top - r, left: u.left - h, height: s.innerHeight(), width: s.innerWidth(), position: o ? "fixed" : "absolute" }).animate(c, e.duration, e.easing, function() { d.remove(), t.isFunction(i) && i() }) } }), t.fx.step.clip = function(e) { e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left }) } }(), o = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, e) { o[e] = function(e) { return Math.pow(e, t + 2) } }), t.extend(o, { Sine: function(t) { return 1 - Math.cos(t * Math.PI / 2) }, Circ: function(t) { return 1 - Math.sqrt(1 - t * t) }, Elastic: function(t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) }, Back: function(t) { return t * t * (3 * t - 2) }, Bounce: function(t) { for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2) } }), t.each(o, function(e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function(t) { return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2 } });
    t.effects, t.effects.define("blind", "hide", function(e, i) { var s = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            n = t(this),
            o = e.direction || "up",
            a = n.cssClip(),
            r = { clip: t.extend({}, a) },
            h = t.effects.createPlaceholder(n);
        r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("bounce", function(e, i) { var s, n, o, a = t(this),
            r = e.mode,
            h = "hide" === r,
            l = "show" === r,
            c = e.direction || "up",
            u = e.distance,
            d = e.times || 5,
            p = 2 * d + (l || h ? 1 : 0),
            f = e.duration / p,
            g = e.easing,
            m = "up" === c || "down" === c ? "top" : "left",
            _ = "up" === c || "left" === c,
            v = 0,
            b = a.queue().length; for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && ((n = { opacity: 1 })[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), (n = {})[m] = o; v < d; v++)(s = {})[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
        h && ((s = { opacity: 0 })[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1) }), t.effects.define("clip", "hide", function(e, i) { var s, n = {},
            o = t(this),
            a = e.direction || "vertical",
            r = "both" === a,
            h = r || "horizontal" === a,
            l = r || "vertical" === a;
        s = o.cssClip(), n.clip = { top: l ? (s.bottom - s.top) / 2 : s.top, right: h ? (s.right - s.left) / 2 : s.right, bottom: l ? (s.bottom - s.top) / 2 : s.bottom, left: h ? (s.right - s.left) / 2 : s.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("drop", "hide", function(e, i) { var s, n = t(this),
            o = "show" === e.mode,
            a = e.direction || "left",
            r = "up" === a || "down" === a ? "top" : "left",
            h = "up" === a || "left" === a ? "-=" : "+=",
            l = "+=" === h ? "-=" : "+=",
            c = { opacity: 0 };
        t.effects.createPlaceholder(n), s = e.distance || n["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, c[r] = h + s, o && (n.css(c), c[r] = l + s, c.opacity = 1), n.animate(c, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("explode", "hide", function(e, i) { var s, n, o, a, r, h, l = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            c = l,
            u = t(this),
            d = "show" === e.mode,
            p = u.show().css("visibility", "hidden").offset(),
            f = Math.ceil(u.outerWidth() / c),
            g = Math.ceil(u.outerHeight() / l),
            m = [];

        function _() { m.push(this), m.length === l * c && (u.css({ visibility: "visible" }), t(m).remove(), i()) } for (s = 0; s < l; s++)
            for (a = p.top + s * g, h = s - (l - 1) / 2, n = 0; n < c; n++) o = p.left + n * f, r = n - (c - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -n * f, top: -s * g }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: f, height: g, left: o + (d ? r * f : 0), top: a + (d ? h * g : 0), opacity: d ? 0 : 1 }).animate({ left: o + (d ? 0 : r * f), top: a + (d ? 0 : h * g), opacity: d ? 1 : 0 }, e.duration || 500, e.easing, _) }), t.effects.define("fade", "toggle", function(e, i) { var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({ opacity: s ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("fold", "hide", function(e, i) { var s = t(this),
            n = e.mode,
            o = "show" === n,
            a = "hide" === n,
            r = e.size || 15,
            h = /([0-9]+)%/.exec(r),
            l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
            c = e.duration / 2,
            u = t.effects.createPlaceholder(s),
            d = s.cssClip(),
            p = { clip: t.extend({}, d) },
            f = { clip: t.extend({}, d) },
            g = [d[l[0]], d[l[1]]],
            m = s.queue().length;
        h && (r = parseInt(h[1], 10) / 100 * g[a ? 0 : 1]), p.clip[l[0]] = r, f.clip[l[0]] = r, f.clip[l[1]] = 0, o && (s.cssClip(f.clip), u && u.css(t.effects.clipToBox(f)), f.clip = d), s.queue(function(i) { u && u.animate(t.effects.clipToBox(p), c, e.easing).animate(t.effects.clipToBox(f), c, e.easing), i() }).animate(p, c, e.easing).animate(f, c, e.easing).queue(i), t.effects.unshift(s, m, 4) }), t.effects.define("highlight", "show", function(e, i) { var s = t(this),
            n = { backgroundColor: s.css("backgroundColor") }; "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("size", function(e, i) { var s, n, o, a = t(this),
            r = ["fontSize"],
            h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            c = e.mode,
            u = "effect" !== c,
            d = e.scale || "both",
            p = e.origin || ["middle", "center"],
            f = a.css("position"),
            g = a.position(),
            m = t.effects.scaledDimensions(a),
            _ = e.from || m,
            v = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = { from: { y: _.height / m.height, x: _.width / m.width }, to: { y: v.height / m.height, x: v.width / m.width } }, "box" !== d && "both" !== d || (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), "content" !== d && "both" !== d || n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), "content" !== d && "both" !== d || (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() { var i = t(this),
                s = t.effects.scaledDimensions(i),
                o = { height: s.height * n.from.y, width: s.width * n.from.x, outerHeight: s.outerHeight * n.from.y, outerWidth: s.outerWidth * n.from.x },
                a = { height: s.height * n.to.y, width: s.width * n.to.x, outerHeight: s.height * n.to.y, outerWidth: s.width * n.to.x };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() { u && t.effects.restoreStyle(i) }) })), a.animate(v, { queue: !1, duration: e.duration, easing: e.easing, complete: function() { var e = a.offset();
                0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i() } }) }), t.effects.define("scale", function(e, i) { var s = t(this),
            n = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
            a = t.extend(!0, { from: t.effects.scaledDimensions(s), to: t.effects.scaledDimensions(s, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);
        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i) }), t.effects.define("puff", "hide", function(e, i) { var s = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
        t.effects.effect.scale.call(this, s, i) }), t.effects.define("pulsate", "show", function(e, i) { var s = t(this),
            n = e.mode,
            o = "show" === n,
            a = o || "hide" === n,
            r = 2 * (e.times || 5) + (a ? 1 : 0),
            h = e.duration / r,
            l = 0,
            c = 1,
            u = s.queue().length; for (!o && s.is(":visible") || (s.css("opacity", 0).show(), l = 1); c < r; c++) s.animate({ opacity: l }, h, e.easing), l = 1 - l;
        s.animate({ opacity: l }, h, e.easing), s.queue(i), t.effects.unshift(s, u, r + 1) }), t.effects.define("shake", function(e, i) { var s = 1,
            n = t(this),
            o = e.direction || "left",
            a = e.distance || 20,
            r = e.times || 3,
            h = 2 * r + 1,
            l = Math.round(e.duration / h),
            c = "up" === o || "down" === o ? "top" : "left",
            u = "up" === o || "left" === o,
            d = {},
            p = {},
            f = {},
            g = n.queue().length; for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); s < r; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);
        n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1) }), t.effects.define("slide", "show", function(e, i) { var s, n, o = t(this),
            a = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            r = e.mode,
            h = e.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left",
            c = "up" === h || "left" === h,
            u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
            d = {};
        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) });!1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) { t(this).transfer(e, i) });
    t.ui.focusable = function(e, i) { var s, n, o, a, r, h = e.nodeName.toLowerCase(); return "area" === h ? (n = (s = e.parentNode).name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + n + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(h) ? (a = !e.disabled) && (r = t(e).closest("fieldset")[0]) && (a = !r.disabled) : a = "a" === h && e.href || i, a && t(e).is(":visible") && function(t) { var e = t.css("visibility"); for (;
                "inherit" === e;) t = t.parent(), e = t.css("visibility"); return "hidden" !== e }(t(e))) }, t.extend(t.expr[":"], { focusable: function(e) { return t.ui.focusable(e, null != t.attr(e, "tabindex")) } });
    t.ui.focusable, t.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form) }, t.ui.formResetMixin = { _formResetHandler: function() { var e = t(this);
            setTimeout(function() { var i = e.data("ui-form-reset-instances");
                t.each(i, function() { this.refresh() }) }) }, _bindFormResetHandler: function() { if (this.form = this.element.form(), this.form.length) { var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t) } }, _unbindFormResetHandler: function() { if (this.form.length) { var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset") } } }; "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) { var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            n = i.toLowerCase(),
            o = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };

        function a(e, i, n, o) { return t.each(s, function() { i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i }
        t.fn["inner" + i] = function(e) { return void 0 === e ? o["inner" + i].call(this) : this.each(function() { t(this).css(n, a(this, e) + "px") }) }, t.fn["outer" + i] = function(e, s) { return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() { t(this).css(n, a(this, e, !0, s) + "px") }) } }), t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }); var h, l;
    t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = (h = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, function(t) { return t.replace(h, "\\$1") }), t.fn.labels = function() { var e, i, s, n, o; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (s = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n)) }, t.fn.scrollParent = function(e) { var i = this.css("position"),
            s = "absolute" === i,
            n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents().filter(function() { var e = t(this); return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")) }).eq(0); return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document) }, t.extend(t.expr[":"], { tabbable: function(e) { var i = t.attr(e, "tabindex"),
                s = null != i; return (!s || i >= 0) && t.ui.focusable(e, s) } }), t.fn.extend({ uniqueId: (l = 0, function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++l) }) }), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id") }) } }), t.widget("ui.accordion", { version: "1.12.1", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function() { var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh() }, _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : t() } }, _createIcons: function() { var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons")) }, _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() }, _destroy: function() { var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "") }, _setOption: function(t, e) { "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons())) : this._activate(e) }, _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t) }, _keydown: function(e) { if (!e.altKey && !e.ctrlKey) { var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    o = !1; switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s]; break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s]; break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e); break;
                    case i.HOME:
                        o = this.headers[0]; break;
                    case i.END:
                        o = this.headers[s - 1] }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault()) } }, _panelKeyDown: function(e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus") }, refresh: function() { var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh() }, _processPanels: function() { var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels))) }, _refresh: function() { var e, i = this.options,
                s = i.heightStyle,
                n = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() { var e = t(this),
                    i = e.uniqueId().attr("id"),
                    s = e.next(),
                    n = s.uniqueId().attr("id");
                e.attr("aria-controls", n), s.attr("aria-labelledby", i) }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() { var i = t(this),
                    s = i.css("position"); "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0)) }), this.headers.each(function() { e -= t(this).outerHeight(!0) }), this.headers.next().each(function() { t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() { var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide() }).height(e)) }, _activate: function(e) { var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop })) }, _findActive: function(e) { return "number" == typeof e ? this.headers.eq(e) : t() }, _setupEvents: function(e) { var i = { keydown: "_keydown" };
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers) }, _eventHandler: function(e) { var i, s, n = this.options,
                o = this.active,
                a = t(e.currentTarget),
                r = a[0] === o[0],
                h = r && n.collapsible,
                l = h ? t() : a.next(),
                c = o.next(),
                u = { oldHeader: o, oldPanel: c, newHeader: h ? t() : a, newPanel: l };
            e.preventDefault(), r && !n.collapsible || !1 === this._trigger("beforeActivate", e, u) || (n.active = !h && this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active"))) }, _toggle: function(e) { var i = e.newPanel,
                s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(t(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _animate: function(t, e, i) { var s, n, o, a = this,
                r = 0,
                h = t.css("box-sizing"),
                l = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {},
                u = l && c.down || c,
                d = function() { a._toggleComplete(i) }; return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: n, step: function(t, e) { e.now = Math.round(t) } }), void t.hide().animate(this.showProps, { duration: o, easing: n, complete: d, step: function(t, i) { i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0) } })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d) }, _toggleComplete: function(t) { var e = t.oldPanel,
                i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t) } }), t.ui.safeActiveElement = function(t) { var e; try { e = t.activeElement } catch (i) { e = t.body } return e || (e = t.body), e.nodeName || (e = t.body), e }, t.widget("ui.menu", { version: "1.12.1", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function() { this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({ "mousedown .ui-menu-item": function(t) { t.preventDefault() }, "click .ui-menu-item": function(e) { var i = t(e.target),
                        s = t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) }, "mouseenter .ui-menu-item": function(e) { if (!this.previousFilter) { var i = t(e.target).closest(".ui-menu-item"),
                            s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s)) } }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function(t, e) { var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i) }, blur: function(e) { this._delay(function() {!t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e) }) }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function(t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } }) }, _destroy: function() { var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() { var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove() }) }, _keydown: function(e) { var i, s, n, o, a = !0; switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e); break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e); break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e); break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e); break;
                case t.ui.keyCode.UP:
                    this.previous(e); break;
                case t.ui.keyCode.DOWN:
                    this.next(e); break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e); break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e); break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e); break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e); break;
                default:
                    a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter }
            a && e.preventDefault() }, _activate: function(t) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) }, refresh: function() { var e, i, s, n, o = this,
                a = this.options.icons.submenu,
                r = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = r.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() { var e = t(this),
                    i = e.prev(),
                    s = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(s, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id")) }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() { var e = t(this);
                o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content") }), n = (s = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(s, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur() }, _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] }, _setOption: function(t, e) { if ("icons" === t) { var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu) }
            this._super(t, e) }, _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t) }, focus: function(t, e) { var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e }) }, _scrollIntoView: function(e) { var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), n < 0 ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r)) }, blur: function(t, e) { e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null) }, _startOpening: function(t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay)) }, _open: function(e) { var i = t.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i) }, collapseAll: function(e, i) { clearTimeout(this.timer), this.timer = this._delay(function() { var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s }, this.delay) }, _close: function(t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") }, _closeOnDocumentClick: function(e) { return !t(e.target).closest(".ui-menu").length }, _isDivider: function(t) { return !/[^\-\u2014\u2013\s]/.test(t.text()) }, collapse: function(t) { var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e)) }, expand: function(t) { var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) })) }, next: function(t) { this._move("next", "first", t) }, previous: function(t) { this._move("prev", "last", t) }, isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length }, _move: function(t, e, i) { var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s) }, nextPage: function(e) { var i, s, n;
            this.active ? this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return (i = t(this)).offset().top - s - n < 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(e) }, previousPage: function(e) { var i, s, n;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return (i = t(this)).offset().top - s + n > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())) : this.next(e) }, _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function(e) { this.active = this.active || t(e.target).closest(".ui-menu-item"); var i = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i) }, _filterMenuItems: function(e) { var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                s = new RegExp("^" + i, "i"); return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text())) }) } });
    t.widget("ui.autocomplete", { version: "1.12.1", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function() { var e, i, s, n = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === n,
                a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, { keydown: function(n) { if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                    e = !1, s = !1, i = !1; var o = t.ui.keyCode; switch (n.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", n); break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", n); break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", n); break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", n); break;
                        case o.ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n)); break;
                        case o.TAB:
                            this.menu.active && this.menu.select(n); break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault()); break;
                        default:
                            i = !0, this._searchTimeout(n) } }, keypress: function(s) { if (e) return e = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || s.preventDefault()); if (!i) { var n = t.ui.keyCode; switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s); break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s); break;
                            case n.UP:
                                this._keyEvent("previous", s); break;
                            case n.DOWN:
                                this._keyEvent("next", s) } } }, input: function(t) { if (s) return s = !1, void t.preventDefault();
                    this._searchTimeout(t) }, focus: function() { this.selectedItem = null, this.previous = this._value() }, blur: function(t) { this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), this._change(t)) } }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, { mousedown: function(e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) }, menufocus: function(e, i) { var s, n; if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() { t(e.target).trigger(e.originalEvent) });
                    n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: n }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), (s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)) }, menuselect: function(e, i) { var s = i.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() { this.previous = n, this.selectedItem = s })), !1 !== this._trigger("select", e, { item: s }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s } }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) }, _destroy: function() { clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() }, _setOption: function(t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() }, _isEventTargetInWidget: function(e) { var i = this.menu.element[0]; return e.target === this.element[0] || e.target === i || t.contains(i, e.target) }, _closeOnClickOutside: function(t) { this._isEventTargetInWidget(t) || this.close() }, _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e }, _initSource: function() { var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) { s(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) { s.xhr && s.xhr.abort(), s.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function(t) { n(t) }, error: function() { n([]) } }) }) : this.source = this.options.source }, _searchTimeout: function(t) { clearTimeout(this.searching), this.searching = this._delay(function() { var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                e && (!e || i || s) || (this.selectedItem = null, this.search(null, t)) }, this.options.delay) }, search: function(t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0 }, _search: function(t) { this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) }, _response: function() { var e = ++this.requestIndex; return t.proxy(function(t) { e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading") }, this) }, __response: function(t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() }, close: function(t) { this.cancelSearch = !0, this._close(t) }, _close: function(t) { this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) }, _change: function(t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) }, _normalize: function(e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) { return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label }) }) }, _suggest: function(e) { var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" }) }, _resizeMenu: function() { var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function(e, i) { var s = this;
            t.each(i, function(t, i) { s._renderItemData(e, i) }) }, _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) }, _renderItem: function(e, i) { return t("<li>").append(t("<div>").text(i.label)).appendTo(e) }, _move: function(t, e) { if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e);
            this.search(null, e) }, widget: function() { return this.menu.element }, _value: function() { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function(t, e) { this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault()) }, _isContentEditable: function(t) { if (!t.length) return !1; var e = t.prop("contentEditable"); return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e } }), t.extend(t.ui.autocomplete, { escapeRegex: function(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(e, i) { var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function(t) { return s.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function(t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function(e) { var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion)) } });
    t.ui.autocomplete; var c = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", { version: "1.12.1", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function() { this._enhance() }, _enhance: function() { this.element.attr("role", "toolbar"), this.refresh() }, _destroy: function() { this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() }, _initWidgets: function() { var e = this,
                i = [];
            t.each(this.options.items, function(s, n) { var o, a = {}; if (n) return "controlgroupLabel" === s ? ((o = e.element.find(n)).each(function() { var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>") }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : { classes: {} }, e.element.find(n).each(function() { var n = t(this),
                        o = n[s]("instance"),
                        r = t.widget.extend({}, a); if ("button" !== s || !n.parent(".ui-spinner").length) { o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r); var h = n[s]("widget");
                        t.data(h[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(h[0]) } }))) }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item") }, _callChildMethod: function(e) { this.childWidgets.each(function() { var i = t(this).data("ui-controlgroup-data");
                i && i[e] && i[e]() }) }, _updateCornerClass: function(t, e) { var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i) }, _buildSimpleOptions: function(t, e) { var i = "vertical" === this.options.direction,
                s = { classes: {} }; return s.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], s }, _spinnerOptions: function(t) { var e = this._buildSimpleOptions(t, "ui-spinner"); return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e }, _buttonOptions: function(t) { return this._buildSimpleOptions(t, "ui-button") }, _checkboxradioOptions: function(t) { return this._buildSimpleOptions(t, "ui-checkboxradio-label") }, _selectmenuOptions: function(t) { var e = "vertical" === this.options.direction; return { width: !!e && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] } }, _resolveClassesValues: function(e, i) { var s = {}; return t.each(e, function(n) { var o = i.options.classes[n] || "";
                o = t.trim(o.replace(c, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ") }), s }, _setOption: function(t, e) { "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable") }, refresh: function() { var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) { var n = e[s]().data("ui-controlgroup-data"); if (n && i["_" + n.widgetName + "Options"]) { var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o) } else i._updateCornerClass(e[s](), s) }), this._callChildMethod("refresh")) } });
    t.widget("ui.checkboxradio", [t.ui.formResetMixin, { version: "1.12.1", options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function() { var e, i, s = this,
                n = this._super() || {}; return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() { s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML }), this.originalLabel && (n.label = this.originalLabel), null != (e = this.element[0].disabled) && (n.disabled = e), n }, _create: function() { var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } }) }, _readType: function() { var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type) }, _enhance: function() { this._updateIcon(this.element[0].checked) }, widget: function() { return this.label }, _getRadioGroup: function() { var e = this.element[0].name,
                i = "input[name='" + t.ui.escapeSelector(e) + "']"; return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() { return 0 === t(this).form().length })).not(this.element) : t([]) }, _toggleClasses: function() { var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() { var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active") }) }, _destroy: function() { this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove()) }, _setOption: function(t, e) { if ("label" !== t || e) { if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e);
                this.refresh() } }, _updateIcon: function(e) { var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon) }, _updateLabel: function() { var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label) }, refresh: function() { var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e }) } }]);
    t.ui.checkboxradio;
    t.widget("ui.button", { version: "1.12.1", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 }, _getCreateOptions: function() { var t, e = this._super() || {}; return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e }, _create: function() {!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(e) { e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) }, _enhance: function() { this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) }, _updateTooltip: function() { this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label) }, _updateIcon: function(e, i) { var s = "iconPosition" !== e,
                n = s ? this.options.iconPosition : i,
                o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n)) }, _destroy: function() { this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title") }, _attachIconSpace: function(t) { this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace) }, _attachIcon: function(t) { this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon) }, _setOptions: function(t) { var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t) }, _setOption: function(t, e) { "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur()) }, refresh: function() { var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip() } }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function() { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super() }, _setOption: function(t, e) { "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e) } }), t.fn.button = function(e) { return function() { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(t.fn.button), t.fn.buttonset = function() { return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) }); var u;
    t.ui.button;

    function d() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = p(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function p(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.on("mouseout", i, function() { t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, f) }

    function f() { t.datepicker._isDisabledDatepicker(u.inline ? u.dpDiv.parent()[0] : u.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover")) }

    function g(e, i) { for (var s in t.extend(e, i), i) null == i[s] && (e[s] = i[s]); return e }
    t.extend(t.ui, { datepicker: { version: "1.12.1" } }), t.extend(d.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function() { return this.dpDiv }, setDefaults: function(t) { return g(this._defaults, t || {}), this }, _attachDatepicker: function(e, i) { var s, n, o;
            n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o) }, _newInst: function(e, i) { return { id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? p(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } }, _connectDatepicker: function(e, i) { var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e)) }, _attachments: function(e, i) { var s, n, o, a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), "focus" !== (s = this._get(i, "showOn")) && "both" !== s || e.on("focus", this._showDatepicker), "button" !== s && "both" !== s || (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 })) }, _autoSize: function(t) { if (this._get(t, "autoSize") && !t.inline) { var e, i, s, n, o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) { for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n); return s }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length) } }, _inlineDatepicker: function(e, i) { var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block")) }, _dialogDatepicker: function(e, i, s, n, o) { var a, r, h, l, c, u = this._dialogInst; return u || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", u)), g(u.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(u, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (r = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [r / 2 - 100 + l, h / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", u), this }, _destroyDatepicker: function(e) { var i, s = t(e),
                n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || s.removeClass(this.markerClassName).empty(), u === n && (u = null)) }, _enableDatepicker: function(e) { var i, s, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : "div" !== i && "span" !== i || ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t })) }, _disableDatepicker: function(e) { var i, s, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : "div" !== i && "span" !== i || ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e) }, _isDisabledDatepicker: function(t) { if (!t) return !1; for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1 }, _getInst: function(e) { try { return t.data(e, "datepicker") } catch (t) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function(e, i, s) { var n, o, a, r, h = this._getInst(e); if (2 === arguments.length && "string" == typeof i) return "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null;
            n = i || {}, "string" == typeof i && ((n = {})[i] = s), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(h, "min"), r = this._getMinMaxDate(h, "max"), g(h.settings, n), null !== a && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, a)), null !== r && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, r)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)) }, _changeDatepicker: function(t, e, i) { this._optionDatepicker(t, e, i) }, _refreshDatepicker: function(t) { var e = this._getInst(t);
            e && this._updateDatepicker(e) }, _setDateDatepicker: function(t, e) { var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i)) }, _getDateDatepicker: function(t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null }, _doKeyDown: function(e) { var i, s, n, o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl"); if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1; break;
                case 13:
                    return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker(); break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M"); break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M"); break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey; break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey; break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M"); break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey; break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M"); break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey; break;
                default:
                    a = !1 } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation()) }, _doKeyPress: function(e) { var i, s, n = t.datepicker._getInst(e.target); if (t.datepicker._get(n, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1 }, _doKeyUp: function(e) { var i = t.datepicker._getInst(e.target); if (i.input.val() !== i.lastVal) try { t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i)) } catch (t) {}
            return !0 }, _showDatepicker: function(e) { var i, s, n, o, a, r, h;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (n = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (g(i.settings, n), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), o = !1, t(e).parents().each(function() { return !(o |= "fixed" === t(this).css("position")) }), a = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, o), i.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: a.left + "px", top: a.top + "px" }), i.inline || (r = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function(t) { for (var e, i; t.length && t[0] !== document;) { if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    t = t.parent() } return 0 }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[r] ? i.dpDiv.show(r, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[r || "show"](r ? h : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i))) }, _updateDatepicker: function(e) { this.maxRows = 4, u = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e); var i, s = this._getNumberOfMonths(e),
                n = s[1],
                o = e.dpDiv.find("." + this._dayOverClass + " a");
            o.length > 0 && f.apply(o.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0)) }, _shouldFocusInput: function(t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") }, _checkOffset: function(e, i, s) { var n = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop()); return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i }, _findPos: function(e) { for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"]; return [(i = t(e).offset()).left, i.top] }, _hideDatepicker: function(e) { var i, s, n, o, a = this._curInst;!a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() { t.datepicker._tidyDialog(a) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) }, _tidyDialog: function(t) { t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") }, _checkExternalClick: function(e) { if (t.datepicker._curInst) { var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);
                (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === s) || t.datepicker._hideDatepicker() } }, _adjustDate: function(e, i, s) { var n = t(e),
                o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o)) }, _gotoToday: function(e) { var i, s = t(e),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s) }, _selectMonthYear: function(e, i, s) { var n = t(e),
                o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n) }, _selectDay: function(e, i, s, n) { var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))) }, _clearDate: function(e) { var i = t(e);
            this._selectDate(i, "") }, _selectDate: function(e, i) { var s, n = t(e),
                o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null) }, _updateAlternate: function(e) { var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n)) }, noWeekends: function(t) { var e = t.getDay(); return [e > 0 && e < 6, ""] }, iso8601Week: function(t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 }, parseDate: function(e, i, s) { if (null == e || null == i) throw "Invalid arguments"; if ("" === (i = "object" == typeof i ? i.toString() : i + "")) return null; var n, o, a, r, h = 0,
                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                _ = -1,
                v = -1,
                b = !1,
                y = function(t) { var i = n + 1 < e.length && e.charAt(n + 1) === t; return i && n++, i },
                w = function(t) { var e = y(t),
                        s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = new RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}"),
                        o = i.substring(h).match(n); if (!o) throw "Missing number at position " + h; return h += o[0].length, parseInt(o[0], 10) },
                k = function(e, s, n) { var o = -1,
                        a = t.map(y(e) ? n : s, function(t, e) { return [
                                [e, t]
                            ] }).sort(function(t, e) { return -(t[1].length - e[1].length) }); if (t.each(a, function(t, e) { var s = e[1]; if (i.substr(h, s.length).toLowerCase() === s.toLowerCase()) return o = e[0], h += s.length, !1 }), -1 !== o) return o + 1; throw "Unknown name at position " + h },
                x = function() { if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
                    h++ }; for (n = 0; n < e.length; n++)
                if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;
                else switch (e.charAt(n)) {
                    case "d":
                        _ = w("d"); break;
                    case "D":
                        k("D", u, d); break;
                    case "o":
                        v = w("o"); break;
                    case "m":
                        m = w("m"); break;
                    case "M":
                        m = k("M", p, f); break;
                    case "y":
                        g = w("y"); break;
                    case "@":
                        g = (r = new Date(w("@"))).getFullYear(), m = r.getMonth() + 1, _ = r.getDate(); break;
                    case "!":
                        g = (r = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = r.getMonth() + 1, _ = r.getDate(); break;
                    case "'":
                        y("'") ? x() : b = !0; break;
                    default:
                        x() }
                if (h < i.length && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= c ? 0 : -100)), v > -1)
                for (m = 1, _ = v;;) { if (_ <= (o = this._getDaysInMonth(g, m - 1))) break;
                    m++, _ -= o }
            if ((r = this._daylightSavingAdjust(new Date(g, m - 1, _))).getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date"; return r }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7, formatDate: function(t, e, i) { if (!e) return ""; var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(e) { var i = s + 1 < t.length && t.charAt(s + 1) === e; return i && s++, i },
                l = function(t, e, i) { var s = "" + e; if (h(t))
                        for (; s.length < i;) s = "0" + s; return s },
                c = function(t, e, i, s) { return h(t) ? s[e] : i[e] },
                u = "",
                d = !1; if (e)
                for (s = 0; s < t.length; s++)
                    if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2); break;
                        case "D":
                            u += c("D", e.getDay(), n, o); break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3); break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2); break;
                        case "M":
                            u += c("M", e.getMonth(), a, r); break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100; break;
                        case "@":
                            u += e.getTime(); break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970; break;
                        case "'":
                            h("'") ? u += "'" : d = !0; break;
                        default:
                            u += t.charAt(s) }
                    return u }, _possibleChars: function(t) { var e, i = "",
                s = !1,
                n = function(i) { var s = e + 1 < t.length && t.charAt(e + 1) === i; return s && e++, s }; for (e = 0; e < t.length; e++)
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789"; break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0; break;
                    default:
                        i += t.charAt(e) }
                return i }, _get: function(t, e) { return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e] }, _setDateFromField: function(t, e) { if (t.input.val() !== t.lastVal) { var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    o = n,
                    a = this._getFormatConfig(t); try { o = this.parseDate(i, s, a) || n } catch (t) { s = e ? "" : s }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t) } }, _getDefaultDate: function(t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) }, _determineDate: function(e, i, s) { var n = null == i || "" === i ? s : "string" == typeof i ? function(i) { try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (t) {} for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), a = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = r.exec(i); h;) { switch (h[2] || "d") {
                        case "d":
                        case "D":
                            a += parseInt(h[1], 10); break;
                        case "w":
                        case "W":
                            a += 7 * parseInt(h[1], 10); break;
                        case "m":
                        case "M":
                            o += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o)); break;
                        case "y":
                        case "Y":
                            n += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o)) }
                    h = r.exec(i) } return new Date(n, o, a) }(i) : "number" == typeof i ? isNaN(i) ? s : function(t) { var e = new Date; return e.setDate(e.getDate() + t), e }(i) : new Date(i.getTime()); return (n = n && "Invalid Date" === n.toString() ? s : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n) }, _daylightSavingAdjust: function(t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null }, _setDate: function(t, e, i) { var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t)) }, _getDate: function(t) { return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)) }, _attachHandlers: function(e) { var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() { var e = { prev: function() { t.datepicker._adjustDate(s, -i, "M") }, next: function() { t.datepicker._adjustDate(s, +i, "M") }, hide: function() { t.datepicker._hideDatepicker() }, today: function() { t.datepicker._gotoToday(s) }, selectDay: function() { return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return t.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function() { return t.datepicker._selectMonthYear(s, this, "Y"), !1 } };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]) }) }, _generateHTML: function(t) { var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
                B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                Y = this._get(t, "isRTL"),
                j = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                K = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                $ = this._get(t, "stepMonths"),
                X = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                tt = t.drawYear; if (Z < 0 && (Z += 12, tt--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) --Z < 0 && (Z = 11, tt--); for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; k < U[0]; k++) { for (x = "", this.maxRows = 4, C = 0; C < U[1]; C++) { if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) { if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left"); break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right"); break;
                            default:
                                T += " ui-datepicker-group-middle", I = "" }
                        T += "'>" } for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M = (w + c) % 7] + "'>" + p[M] + "</span></th>"; for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X && this.maxRows > z ? this.maxRows : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(tt, Z, 1 - H)), N = 0; N < O; N++) { for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; w < 7; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], L = (F = A.getMonth() !== Z) && !v || !E[0] || Q && A < Q || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                        T += W + "</tr>" }++Z > 11 && (Z = 0, tt++), x += T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "") }
                y += x } return y += l, t._keyEvent = !1, y }, _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) { var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                _ = this._get(t, "changeYear"),
                v = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = ""; if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else { for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!h || c >= s.getMonth()) && (!l || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>" } if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else { for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function(t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e })(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null }
            return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>" }, _adjustInstDate: function(t, e, i) { var s = t.selectedYear + ("Y" === i ? e : 0),
                n = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t) }, _restrictMinMax: function(t, e) { var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && e < i ? i : e; return s && n > s ? s : n }, _notifyChange: function(t) { var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]) }, _getNumberOfMonths: function(t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e }, _getMinMaxDate: function(t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) }, _getDaysInMonth: function(t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() }, _getFirstDayOfMonth: function(t, e) { return new Date(t, e, 1).getDay() }, _canAdjustMonth: function(t, e, i, s) { var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1)); return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o) }, _isInRange: function(t, e) { var i, s, n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                h = this._get(t, "yearRange"); return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r) }, _getFormatConfig: function(t) { var e = this._get(t, "shortYearCutoff"); return { shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } }, _formatDate: function(t, e, i, s) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t)) } }), t.fn.datepicker = function(e) { if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) }, t.datepicker = new d, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1";
    t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()); var m = !1;
    t(document).on("mouseup", function() { m = !1 });
    t.widget("ui.mouse", { version: "1.12.1", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() { var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) { return e._mouseDown(t) }).on("click." + this.widgetName, function(i) { if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1 }), this.started = !1 }, _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function(e) { if (!m) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e; var i = this,
                    s = 1 === e.which,
                    n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length; return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) { return i._mouseMove(t) }, this._mouseUpDelegate = function(t) { return i._mouseUp(t) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), m = !0, !0)) } }, _mouseMove: function(e) { if (this._mouseMoved) { if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e); if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e) } return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) }, _mouseUp: function(e) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, m = !1, e.preventDefault() }, _mouseDistanceMet: function(t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance }, _mouseDelayMet: function() { return this.mouseDelayMet }, _mouseStart: function() {}, _mouseDrag: function() {}, _mouseStop: function() {}, _mouseCapture: function() { return !0 } }), t.ui.plugin = { add: function(e, i, s) { var n, o = t.ui[e].prototype; for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]) }, call: function(t, e, i, s) { var n, o = t.plugins[e]; if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i) } }, t.ui.safeBlur = function(e) { e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur") };
    t.widget("ui.draggable", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() }, _setOption: function(t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy()) }, _mouseCapture: function(e) { var i = this.options; return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0)) }, _blockFrames: function(e) { this.iframeBlocks = this.document.find(e).map(function() { var e = t(this); return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0] }) }, _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _blurActiveElement: function(e) { var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i) }, _mouseStart: function(e) { var i = this.options; return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === t(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) }, _refreshOffsets: function(t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } }, _mouseDrag: function(e, i) { if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) { var s = this._uiHash(); if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = s.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1 }, _mouseStop: function(e) { var i = this,
                s = !1; return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {!1 !== i._trigger("stop", e) && i._clear() }) : !1 !== this._trigger("stop", e) && this._clear(), !1 }, _mouseUp: function(e) { return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e) }, cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this }, _getHandle: function(e) { return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length }, _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") }, _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") }, _createHelper: function(e) { var i = this.options,
                s = t.isFunction(i.helper),
                n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element; return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n }, _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") }, _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) }, _isRootNode: function(t) { return /(html|body)/i.test(t.tagName) || t === this.document[0] }, _getParentOffset: function() { var e = this.offsetParent.offset(),
                i = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) } }, _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var e, i, s, n = this.options,
                o = this.document[0];
            this.relativeContainer = null, n.containment ? "window" !== n.containment ? "document" !== n.containment ? n.containment.constructor !== Array ? ("parent" === n.containment && (n.containment = this.helper[0].parentNode), (s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i)) : this.containment = n.containment : this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null }, _convertPositionTo: function(t, e) { e || (e = this.position); var i = "absolute" === t ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]); return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i } }, _generatePosition: function(t, e) { var i, s, n, o, a = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                h = t.pageX,
                l = t.pageY; return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) } }, _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() }, _trigger: function(e, i, s) { return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s) }, plugins: {}, _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } } }), t.ui.plugin.add("draggable", "connectToSortable", { start: function(e, i, s) { var n = t.extend({}, i, { item: s.element });
            s.sortables = [], t(s.options.connectToSortable).each(function() { var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n)) }) }, stop: function(e, i, s) { var n = t.extend({}, i, { item: s.element });
            s.cancelHelperRemoval = !1, t.each(s.sortables, function() { this.isOver ? (this.isOver = 0, s.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = { position: this.placeholder.css("position"), top: this.placeholder.css("top"), left: this.placeholder.css("left") }, this._mouseStop(e), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", e, n)) }) }, drag: function(e, i, s) { t.each(s.sortables, function() { var n = !1,
                    o = this;
                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() { return i.helper[0] }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() { this.refreshPositions() }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() { this.refreshPositions() })) }) } }), t.ui.plugin.add("draggable", "cursor", { start: function(e, i, s) { var n = t("body"),
                o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor) }, stop: function(e, i, s) { var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor) } }), t.ui.plugin.add("draggable", "opacity", { start: function(e, i, s) { var n = t(i.helper),
                o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity) }, stop: function(e, i, s) { var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity) } }), t.ui.plugin.add("draggable", "scroll", { start: function(t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) }, drag: function(e, i, s) { var n = s.options,
                o = !1,
                a = s.scrollParentNotHidden[0],
                r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e) } }), t.ui.plugin.add("draggable", "snap", { start: function(e, i, s) { var n = s.options;
            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() { var e = t(this),
                    i = e.offset();
                this !== s.element[0] && s.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left }) }) }, drag: function(e, i, s) { var n, o, a, r, h, l, c, u, d, p, f = s.options,
                g = f.snapTolerance,
                m = i.offset.left,
                _ = m + s.helperProportions.width,
                v = i.offset.top,
                b = v + s.helperProportions.height; for (d = s.snapElements.length - 1; d >= 0; d--) l = (h = s.snapElements[d].left - s.margins.left) + s.snapElements[d].width, u = (c = s.snapElements[d].top - s.margins.top) + s.snapElements[d].height, _ < h - g || m > l + g || b < c - g || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(c - b) <= g, o = Math.abs(u - v) <= g, a = Math.abs(h - _) <= g, r = Math.abs(l - m) <= g, n && (i.position.top = s._convertPositionTo("relative", { top: c - s.helperProportions.height, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = Math.abs(c - v) <= g, o = Math.abs(u - b) <= g, a = Math.abs(h - m) <= g, r = Math.abs(l - _) <= g, n && (i.position.top = s._convertPositionTo("relative", { top: c, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = n || o || a || r || p) } }), t.ui.plugin.add("draggable", "stack", { start: function(e, i, s) { var n, o = s.options,
                a = t.makeArray(t(o.stack)).sort(function(e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) });
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) { t(this).css("zIndex", n + e) }), this.css("zIndex", n + a.length)) } }), t.ui.plugin.add("draggable", "zIndex", { start: function(e, i, s) { var n = t(i.helper),
                o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex) }, stop: function(e, i, s) { var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex) } });
    t.ui.draggable;
    t.widget("ui.resizable", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function(t) { return parseFloat(t) || 0 }, _isNumber: function(t) { return !isNaN(parseFloat(t)) }, _hasScroll: function(e, i) { if ("hidden" === t(e).css("overflow")) return !1; var s, n = i && "left" === i ? "scrollLeft" : "scrollTop"; return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s) }, _create: function() { var e, i = this.options,
                s = this;
            this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() { i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show()) }).on("mouseleave", function() { i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide()) }), this._mouseInit() }, _destroy: function() { this._mouseDestroy(); var e, i = function(e) { t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this }, _setOption: function(t, e) { switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles() } }, _setupHandles: function() { var e, i, s, n, o, a = this.options,
                r = this; if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; i < s.length; i++) n = "ui-resizable-" + (e = t.trim(s[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({ zIndex: a.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) { var i, s, n, o; for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: r._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]) }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() { r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se") }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide")) }, _removeHandles: function() { this._handles.remove() }, _mouseCapture: function(e) { var i, s, n = !1; for (i in this.handles)((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0); return !this.options.disabled && n }, _mouseStart: function(e) { var i, s, n, o = this.options,
                a = this.element; return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: a.width(), height: a.height() }, this.originalSize = this._helper ? { width: a.outerWidth(), height: a.outerHeight() } : { width: a.width(), height: a.height() }, this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0 }, _mouseDrag: function(e) { var i, s, n = this.originalMousePosition,
                o = this.axis,
                a = e.pageX - n.left || 0,
                r = e.pageY - n.top || 0,
                h = this._change[o]; return this._updatePrevProperties(), !!h && (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) }, _mouseStop: function(e) { this.resizing = !1; var i, s, n, o, a, r, h, l = this.options; return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : this.sizeDiff.height, o = s ? 0 : this.sizeDiff.width, a = { width: this.helper.width() - o, height: this.helper.height() - n }, r = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null, h = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, { top: h, left: r })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1 }, _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function() { var t = {}; return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t }, _updateVirtualBoundaries: function(t) { var e, i, s, n, o, a = this.options;
            o = { minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0, maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0, minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0, maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), i < o.maxWidth && (o.maxWidth = i), n < o.maxHeight && (o.maxHeight = n)), this._vBoundaries = o }, _updateCache: function(t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) }, _updateRatio: function(t) { var e = this.position,
                i = this.size,
                s = this.axis; return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t }, _respectSize: function(t) { var e = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                h = this.originalPosition.top + this.originalSize.height,
                l = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i); return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t }, _getPaddingPlusBorderDimensions: function(t) { for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } }, _proportionallyResize: function() { if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function() { var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function(t, e) { return { width: this.originalSize.width + e } }, w: function(t, e) { var i = this.originalSize; return { left: this.originalPosition.left + e, width: i.width - e } }, n: function(t, e, i) { var s = this.originalSize; return { top: this.originalPosition.top + i, height: s.height - i } }, s: function(t, e, i) { return { height: this.originalSize.height + i } }, se: function(e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s])) }, sw: function(e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s])) }, ne: function(e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s])) }, nw: function(e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s])) } }, _propagate: function(e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) }, plugins: {}, ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } }), t.ui.plugin.add("resizable", "animate", { stop: function(e) { var i = t(this).resizable("instance"),
                s = i.options,
                n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = o ? 0 : i.sizeDiff.width,
                h = { width: i.size.width - r, height: i.size.height - a },
                l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? { top: c, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function() { var s = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                    n && n.length && t(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", e) } }) } }), t.ui.plugin.add("resizable", "containment", { start: function() { var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
                l = h.options,
                c = h.element,
                u = l.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) { i[t] = h._num(e.css("padding" + s)) }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = { element: d, left: s.left, top: s.top, width: a, height: r })) }, resize: function(e) { var i, s, n, o, a = t(this).resizable("instance"),
                r = a.options,
                h = a.containerOffset,
                l = a.position,
                c = a._aspectRatio || e.shiftKey,
                u = { top: 0, left: 0 },
                d = a.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height) }, stop: function() { var e = t(this).resizable("instance"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                o = e.containerElement,
                a = t(e.helper),
                r = a.offset(),
                h = a.outerWidth() - e.sizeDiff.width,
                l = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l }) } }), t.ui.plugin.add("resizable", "alsoResize", { start: function() { var e = t(this).resizable("instance").options;
            t(e.alsoResize).each(function() { var e = t(this);
                e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) }) }) }, resize: function(e, i) { var s = t(this).resizable("instance"),
                n = s.options,
                o = s.originalSize,
                a = s.originalPosition,
                r = { height: s.size.height - o.height || 0, width: s.size.width - o.width || 0, top: s.position.top - a.top || 0, left: s.position.left - a.left || 0 };
            t(n.alsoResize).each(function() { var e = t(this),
                    s = t(this).data("ui-resizable-alsoresize"),
                    n = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) { var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null) }), e.css(n) }) }, stop: function() { t(this).removeData("ui-resizable-alsoresize") } }), t.ui.plugin.add("resizable", "ghost", { start: function() { var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper) }, resize: function() { var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width }) }, stop: function() { var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0)) } }), t.ui.plugin.add("resizable", "grid", { resize: function() { var e, i = t(this).resizable("instance"),
                s = i.options,
                n = i.size,
                o = i.originalSize,
                a = i.originalPosition,
                r = i.axis,
                h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                l = h[0] || 1,
                c = h[1] || 1,
                u = Math.round((n.width - o.width) / l) * l,
                d = Math.round((n.height - o.height) / c) * c,
                p = o.width + u,
                f = o.height + d,
                g = s.maxWidth && s.maxWidth < p,
                m = s.maxHeight && s.maxHeight < f,
                _ = s.minWidth && s.minWidth > p,
                v = s.minHeight && s.minHeight > f;
            s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((f - c <= 0 || p - l <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p)) } });
    t.ui.resizable;
    t.widget("ui.dialog", { version: "1.12.1", options: { appendTo: "body", autoOpen: !0, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: !0, closeText: "Close", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function(e) { var i = t(this).css(e).offset().top;
                    i < 0 && t(this).css("top", e.top - i) } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() }, _init: function() { this.options.autoOpen && this.open() }, _appendTo: function() { var e = this.options.appendTo; return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0) }, _destroy: function() { var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element) }, widget: function() { return this.uiDialog }, disable: t.noop, enable: t.noop, close: function(e) { var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", e) })) }, isOpen: function() { return this._isOpen }, moveToTop: function() { this._moveToTop() }, _moveToTop: function(e, i) { var s = !1,
                n = this.uiDialog.siblings(".ui-front:visible").map(function() { return +t(this).css("z-index") }).get(),
                o = Math.max.apply(null, n); return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s }, open: function() { var e = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { e._focusTabbable(), e._trigger("focus") }), this._makeFocusTarget(), this._trigger("open")) }, _focusTabbable: function() { var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus") }, _keepFocus: function(e) {
            function i() { var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable() }
            e.preventDefault(), i.call(this), this._delay(i) }, _createWrapper: function() { this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, { keydown: function(e) { if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e); if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) { var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() { n.trigger("focus") }), e.preventDefault()) : (this._delay(function() { s.trigger("focus") }), e.preventDefault()) } }, mousedown: function(t) { this._moveToTop(t) && this._focusTabbable() } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") }) }, _createTitlebar: function() { var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function(t) { t.preventDefault(), this.close(t) } }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") }) }, _title: function(t) { this.options.title ? t.text(this.options.title) : t.html("&#160;") }, _createButtonPane: function() { this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons() }, _createButtons: function() { var e = this,
                i = this.options.buttons;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, s) { var n, o;
                s = t.isFunction(s) ? { click: s, text: i } : s, s = t.extend({ type: "button" }, s), n = s.click, o = { icon: s.icon, iconPosition: s.iconPosition, showLabel: s.showLabel, icons: s.icons, text: s.text }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() { n.apply(e.element[0], arguments) }) }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) }, _makeDraggable: function() { var e = this,
                i = this.options;

            function s(t) { return { position: t.position, offset: t.offset } }
            this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(i, n) { e._addClass(t(this), "ui-dialog-dragging"), e._blockFrames(), e._trigger("dragStart", i, s(n)) }, drag: function(t, i) { e._trigger("drag", t, s(i)) }, stop: function(n, o) { var a = o.offset.left - e.document.scrollLeft(),
                        r = o.offset.top - e.document.scrollTop();
                    i.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r, of: e.window }, e._removeClass(t(this), "ui-dialog-dragging"), e._unblockFrames(), e._trigger("dragStop", n, s(o)) } }) }, _makeResizable: function() { var e = this,
                i = this.options,
                s = i.resizable,
                n = this.uiDialog.css("position"),
                o = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";

            function a(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } }
            this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: i.maxWidth, maxHeight: i.maxHeight, minWidth: i.minWidth, minHeight: this._minHeight(), handles: o, start: function(i, s) { e._addClass(t(this), "ui-dialog-resizing"), e._blockFrames(), e._trigger("resizeStart", i, a(s)) }, resize: function(t, i) { e._trigger("resize", t, a(i)) }, stop: function(s, n) { var o = e.uiDialog.offset(),
                        r = o.left - e.document.scrollLeft(),
                        h = o.top - e.document.scrollTop();
                    i.height = e.uiDialog.height(), i.width = e.uiDialog.width(), i.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (h >= 0 ? "+" : "") + h, of: e.window }, e._removeClass(t(this), "ui-dialog-resizing"), e._unblockFrames(), e._trigger("resizeStop", s, a(n)) } }).css("position", n) }, _trackFocus: function() { this._on(this.widget(), { focusin: function(e) { this._makeFocusTarget(), this._focusedElement = t(e.target) } }) }, _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) }, _untrackInstance: function() { var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1) }, _trackingInstances: function() { var t = this.document.data("ui-dialog-instances"); return t || (t = [], this.document.data("ui-dialog-instances", t)), t }, _minHeight: function() { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) }, _position: function() { var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide() }, _setOptions: function(e) { var i = this,
                s = !1,
                n = {};
            t.each(e, function(t, e) { i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e) }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n) }, _setOption: function(e, i) { var s, n, o = this.uiDialog; "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && ((s = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((n = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) }, _size: function() { var t, e, i, s = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight()) }, _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) }, _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _allowInteraction: function(e) { return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length }, _createOverlay: function() { if (this.options.modal) { var e = !0;
                this._delay(function() { e = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(t) { e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1) } }, _destroyOverlay: function() { if (this.options.modal && this.overlay) { var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null } } }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super(), this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(t, e) { "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments) } });
    t.ui.dialog;
    t.widget("ui.droppable", { version: "1.12.1", widgetEventPrefix: "drop", options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function() { var e, i = this.options,
                s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) { return t.is(s) }, this.proportions = function() { if (!arguments.length) return e || (e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight });
                e = arguments[0] }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable") }, _addToManager: function(e) { t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this) }, _splice: function(t) { for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1) }, _destroy: function() { var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e) }, _setOption: function(e, i) { if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) { return t.is(i) };
            else if ("scope" === e) { var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i) }
            this._super(e, i) }, _activate: function(e) { var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i)) }, _deactivate: function(e) { var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i)) }, _over: function(e) { var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i))) }, _out: function(e) { var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i))) }, _drop: function(e, i) { var s = i || t.ui.ddmanager.current,
                n = !1; return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = t(this).droppable("instance"); if (i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && _(s, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e)) return n = !0, !1 }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element))) }, ui: function(t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } }, _addHoverClass: function() { this._addClass("ui-droppable-hover") }, _removeHoverClass: function() { this._removeClass("ui-droppable-hover") }, _addActiveClass: function() { this._addClass("ui-droppable-active") }, _removeActiveClass: function() { this._removeClass("ui-droppable-active") } }); var _ = t.ui.intersect = function() {
        function t(t, e, i) { return t >= e && t < e + i } return function(e, i, s, n) { if (!i.offset) return !1; var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                r = o + e.helperProportions.width,
                h = a + e.helperProportions.height,
                l = i.offset.left,
                c = i.offset.top,
                u = l + i.proportions().width,
                d = c + i.proportions().height; switch (s) {
                case "fit":
                    return l <= o && r <= u && c <= a && h <= d;
                case "intersect":
                    return l < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && h - e.helperProportions.height / 2 < d;
                case "pointer":
                    return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
                case "touch":
                    return (a >= c && a <= d || h >= c && h <= d || a < c && h > d) && (o >= l && o <= u || r >= l && r <= u || o < l && r > u);
                default:
                    return !1 } } }();
    t.ui.ddmanager = { current: null, droppables: { default: [] }, prepareOffsets: function(e, i) { var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; s < o.length; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) { for (n = 0; n < r.length; n++)
                        if (r[n] === o[s].element[0]) { o[s].proportions().height = 0; continue t }
                    o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({ width: o[s].element[0].offsetWidth, height: o[s].element[0].offsetHeight })) } }, drop: function(e, i) { var s = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && _(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s }, dragStart: function(e, i) { e.element.parentsUntil("body").on("scroll.droppable", function() { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) }, drag: function(e, i) { e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() { if (!this.options.disabled && !this.greedyChild && this.visible) { var s, n, o, a = _(e, this, this.options.tolerance, i),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() { return t(this).droppable("instance").options.scope === n })).length && ((s = t(o[0]).droppable("instance")).greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i))) } }) }, dragStop: function(e, i) { e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) } }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } });
    t.ui.droppable, t.widget("ui.progressbar", { version: "1.12.1", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() }, _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() }, value: function(t) { if (void 0 === t) return this.options.value;
            this.options.value = this._constrainedValue(t), this._refreshValue() }, _constrainedValue: function(t) { return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t)) }, _setOptions: function(t) { var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue() }, _setOption: function(t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) }, _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t) }, _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function() { var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete") } }), t.widget("ui.selectable", t.ui.mouse, { version: "1.12.1", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function() { var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() { e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() { var i = t(this),
                        s = i.offset(),
                        n = { left: s.left - e.elementPos.left, top: s.top - e.elementPos.top };
                    t.data(this, "selectable-item", { element: this, $element: i, left: n.left, top: n.top, right: n.left + i.outerWidth(), bottom: n.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") }) }) }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper") }, _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() }, _mouseStart: function(e) { var i = this,
                s = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() { var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, { unselecting: s.element })) }), t(e.target).parents().addBack().each(function() { var s, n = t.data(this, "selectable-item"); if (n) return s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, { selecting: n.element }) : i._trigger("unselecting", e, { unselecting: n.element }), !1 })) }, _mouseDrag: function(e) { if (this.dragged = !0, !this.options.disabled) { var i, s = this,
                    n = this.options,
                    o = this.opos[0],
                    a = this.opos[1],
                    r = e.pageX,
                    h = e.pageY; return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({ left: o, top: a, width: r - o, height: h - a }), this.selectees.each(function() { var i = t.data(this, "selectable-item"),
                        l = !1,
                        c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || c.right < o || c.top > h || c.bottom < a) : "fit" === n.tolerance && (l = c.left > o && c.right < r && c.top > a && c.bottom < h), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, { unselecting: i.element }))))) }), !1 } }, _mouseStop: function(e) { var i = this; return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() { var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, { unselected: s.element }) }), t(".ui-selecting", this.element[0]).each(function() { var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, { selected: s.element }) }), this._trigger("stop", e), this.helper.remove(), !1 } }), t.widget("ui.selectmenu", [t.ui.formResetMixin, { version: "1.12.1", defaultElement: "<select>", options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null }, _create: function() { var e = this.element.uniqueId().attr("id");
            this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t() }, _drawButton: function() { var e, i = this,
                s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { i._rendered || i._refreshMenu() }) }, _drawMenu: function() { var e = this;
            this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function(t, i) { t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t) }, focus: function(t, i) { var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, { item: s }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id")) } }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 } }, refresh: function() { this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton() }, _refreshMenu: function() { var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled"))) }, open: function(t) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))) }, _position: function() { this.menuWrap.position(t.extend({ of: this.button }, this.options.position)) }, close: function(t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) }, widget: function() { return this.button }, menuWidget: function() { return this.menu }, _renderButtonItem: function(e) { var i = t("<span>"); return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i }, _renderMenu: function(e, i) { var s = this,
                n = "";
            t.each(i, function(i, o) { var a;
                o.optgroup !== n && (a = t("<li>", { text: o.optgroup }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o) }) }, _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-selectmenu-item", e) }, _renderItem: function(e, i) { var s = t("<li>"),
                n = t("<div>", { title: i.element.attr("title") }); return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e) }, _setText: function(t, e) { e ? t.text(e) : t.html("&#160;") }, _move: function(t, e) { var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s) }, _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") }, _toggle: function(t) { this[this.isOpen ? "close" : "open"](t) }, _setSelection: function() { var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus()) }, _documentClick: { mousedown: function(e) { this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e)) } }, _buttonEvents: { mousedown: function() { var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange() }, click: function(t) { this._setSelection(), this._toggle(t) }, keydown: function(e) { var i = !0; switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1; break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e); break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e); break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e); break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e); break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e); break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e); break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e); break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e); break;
                    default:
                        this.menu.trigger(e), i = !1 }
                i && e.preventDefault() } }, _selectFocusedItem: function(t) { var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t) }, _select: function(t, e) { var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e) }, _setAria: function(t) { var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e) }, _setOption: function(t, e) { if ("icons" === t) { var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button) }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton() }, _setOptionDisabled: function(t) { this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) }, _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e }, _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) }, _resizeButton: function() { var t = this.options.width;!1 !== t ? (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)) : this.button.css("width", "") }, _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) }, _getCreateOptions: function() { var t = this._super(); return t.disabled = this.element.prop("disabled"), t }, _parseOptions: function(e) { var i = this,
                s = [];
            e.each(function(e, n) { s.push(i._parseOption(t(n), e)) }), this.items = s }, _parseOption: function(t, e) { var i = t.parent("optgroup"); return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") } }, _destroy: function() { this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element) } }]), t.widget("ui.slider", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "slide", options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 }, _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() }, _createHandles: function() { var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle"),
                o = []; for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; e < i; e++) o.push("<span tabindex='0'></span>");
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) { t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0) }) }, _createRange: function() { var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null) }, _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) }, _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() }, _mouseCapture: function(e) { var i, s, n, o, a, r, h, l = this,
                c = this.options; return !c.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) { var i = Math.abs(s - l.values(e));
                (n > i || n === i && (e === l._lastChangedValue || l.values(e) === c.min)) && (n = i, o = t(this), a = e) }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? { left: 0, top: 0 } : { left: e.pageX - r.left - o.width() / 2, top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0)) }, _mouseStart: function() { return !0 }, _mouseDrag: function(t) { var e = { x: t.pageX, y: t.pageY },
                i = this._normValueFromMouse(e); return this._slide(t, this._handleIndex, i), !1 }, _mouseStop: function(t) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function(t) { var e, i, s, n, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o) }, _uiHash: function(t, e, i) { var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() }; return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s }, _hasMultipleValues: function() { return this.options.values && this.options.values.length }, _start: function(t, e) { return this._trigger("start", t, this._uiHash(e)) }, _slide: function(t, e, i) { var s, n = this.value(),
                o = this.values();
            this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)) }, _stop: function(t, e) { this._trigger("stop", t, this._uiHash(e)) }, _change: function(t, e) { this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e))) }, value: function(t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value() }, values: function(e, i) { var s, n, o; if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e); if (!arguments.length) return this._values(); if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value(); for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue() }, _setOption: function(e, i) { var s, n = 0; switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", ""); break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1; break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1; break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1 } }, _setOptionDisabled: function(t) { this._super(t), this._toggleClass(null, "ui-state-disabled", !!t) }, _value: function() { var t = this.options.value; return t = this._trimAlignValue(t) }, _values: function(t) { var e, i, s; if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e); if (this._hasMultipleValues()) { for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]); return i } return [] }, _trimAlignValue: function(t) { if (t <= this._valueMin()) return this._valueMin(); if (t >= this._valueMax()) return this._valueMax(); var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i; return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5)) }, _calculateNewMax: function() { var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision())) }, _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t }, _precisionOf: function(t) { var e = t.toString(),
                i = e.indexOf("."); return -1 === i ? 0 : e.length - i - 1 }, _valueMin: function() { return this.options.min }, _valueMax: function() { return this.max }, _refreshRange: function(t) { "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" }) }, _refreshValue: function() { var e, i, s, n, o, a = this.options.range,
                r = this.options,
                h = this,
                l = !this._animateOff && r.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) { i = (h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100, c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), !0 === h.options.range && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate)) }, _handleEvents: { keydown: function(e) { var i, s, n, o = t(e.target).data("ui-slider-handle-index"); switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return } switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        s = this._valueMin(); break;
                    case t.ui.keyCode.END:
                        s = this._valueMax(); break;
                    case t.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages); break;
                    case t.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages); break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + n); break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - n) }
                this._slide(e, o, s) }, keyup: function(e) { var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active")) } } }), t.widget("ui.sortable", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function(t, e, i) { return t >= e && t < e + i }, _isFloating: function(t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) }, _create: function() { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 }, _setOption: function(t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() }, _setHandleClassName: function() { var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() { e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") }) }, _destroy: function() { this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item"); return this }, _mouseCapture: function(e, i) { var s = null,
                n = !1,
                o = this; return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() { if (t.data(this, o.widgetName + "-item") === o) return s = t(this), !1 }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() { this === e.target && (n = !0) }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0)))) }, _mouseStart: function(e, i, s) { var n, o, a = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this)); return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0 }, _mouseDrag: function(e) { var i, s, n, o, a = this.options,
                r = !1; for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = (s = this.items[i]).item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && !(n === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === n || t.contains(this.placeholder[0], n) || "semi-dynamic" === this.options.type && t.contains(this.element[0], n))) { if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash()); break }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1 }, _mouseStop: function(e, i) { if (e) { if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) { var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() { s._clear(e) }) } else this._clear(e, i); return !1 } }, cancel: function() { if (this.dragging) { this._mouseUp(new t.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this }, serialize: function(e) { var i = this._getItemsAsjQuery(e && e.connected),
                s = []; return e = e || {}, t(i).each(function() { var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2])) }), !s.length && e.key && s.push(e.key + "="), s.join("&") }, toArray: function(e) { var i = this._getItemsAsjQuery(e && e.connected),
                s = []; return e = e || {}, i.each(function() { s.push(t(e.item || this).attr(e.attribute || "id") || "") }), s }, _intersectsWith: function(t) { var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                h = r + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + l > r && s + l < h,
                d = "y" === this.options.axis || e + c > o && e + c < a,
                p = u && d; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h }, _intersectsWithPointer: function(t) { var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width); return !(!s || !n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) }, _intersectsWithSides: function(t) { var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                n = this._getDragHorizontalDirection(); return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e) }, _getDragVerticalDirection: function() { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") }, _getDragHorizontalDirection: function() { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") }, refresh: function(t) { return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this }, _connectWith: function() { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith }, _getItemsAsjQuery: function(e) { var i, s, n, o, a = [],
                r = [],
                h = this._connectWith(); if (h && e)
                for (i = h.length - 1; i >= 0; i--)
                    for (s = (n = t(h[i], this.document[0])).length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && r.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);

            function l() { a.push(this) } for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(l); return t(a) }, _removeCurrentsFromItems: function() { var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) { for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0 }) }, _refreshItems: function(e) { this.items = [], this.containers = [this]; var i, s, n, o, a, r, h, l, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith(); if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = (n = t(d[i], this.document[0])).length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o)); for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], s = 0, l = (r = u[i][0]).length; s < l; s++)(h = t(r[s])).data(this.widgetName + "-item", a), c.push({ item: h, instance: a, width: 0, height: 0, left: 0, top: 0 }) }, refreshPositions: function(e) { var i, s, n, o; for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); return this }, _createPlaceholder: function(e) { var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = { element: function() { var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]); return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n }, update: function(t, n) { i && !s.forcePlaceholderSize || (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10))) } }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder) }, _createTrPlaceholder: function(e, i) { var s = this;
            e.children().each(function() { t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i) }) }, _contactContainers: function(e) { var i, s, n, o, a, r, h, l, c, u, d = null,
                p = null; for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) { if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else { for (n = 1e4, o = null, a = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), Math.abs(e[u] - h) < n && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down")); if (!o && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1 } }, _createHelper: function(e) { var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem; return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), s[0].style.width && !i.forceHelperSize || s.width(this.currentItem.width()), s[0].style.height && !i.forceHelperSize || s.height(this.currentItem.height()), s }, _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) }, _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var e, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), "document" !== n.containment && "window" !== n.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) }, _convertPositionTo: function(e, i) { i || (i = this.position); var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName); return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s } }, _generatePosition: function(e) { var i, s, n = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) } }, _rearrange: function(t, e, i, s) { i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var n = this.counter;
            this._delay(function() { n === this.counter && this.refreshPositions(!s) }) }, _clear: function(t, e) { this.reverting = !1; var i, s = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper") } else this.currentItem.show();

            function n(t, e, i) { return function(s) { i._trigger(t, s, e._uiHash(e)) } } for (this.fromOutside && !e && s.push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (s.push(function(t) { this._trigger("remove", t, this._uiHash()) }), s.push(function(t) { return function(e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), s.push(function(t) { return function(e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) { for (i = 0; i < s.length; i++) s[i].call(this, t);
                this._trigger("stop", t, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval }, _trigger: function() {!1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel() }, _uiHash: function(e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } } });

    function v(t) { return function() { var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change") } }
    t.widget("ui.spinner", { version: "1.12.1", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) }, _getCreateOptions: function() { var e = this._super(),
                i = this.element; return t.each(["min", "max", "step"], function(t, s) { var n = i.attr(s);
                null != n && n.length && (e[s] = n) }), e }, _events: { keydown: function(t) { this._start(t) && this._keydown(t) && t.preventDefault() }, keyup: "_stop", focus: function() { this.previous = this.element.val() }, blur: function(t) { this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t)) }, mousewheel: function(t, e) { if (e) { if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(t) }, 100), t.preventDefault() } }, "mousedown .ui-spinner-button": function(e) { var i;

                function s() { this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = i, this._delay(function() { this.previous = i })) }
                i = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), s.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, s.call(this) }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function(e) { if (t(e.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) }, "mouseleave .ui-spinner-button": "_stop" }, _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") }, _draw: function() { this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) }, _keydown: function(e) { var i = this.options,
                s = t.ui.keyCode; switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0 } return !1 }, _start: function(t) { return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0) }, _repeat: function(t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) }, _spin: function(t, e) { var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, { value: i }) || (this._value(i), this.counter++) }, _increment: function(e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 }, _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t }, _precisionOf: function(t) { var e = t.toString(),
                i = e.indexOf("."); return -1 === i ? 0 : e.length - i - 1 }, _adjustValue: function(t) { var e, i, s = this.options; return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t }, _stop: function(t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) }, _setOption: function(t, e) { var i, s, n; if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i)); "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e) }, _setOptionDisabled: function(t) { this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable") }, _setOptions: v(function(t) { this._super(t) }), _parse: function(t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t }, _format: function(t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t }, _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, isValid: function() { var t = this.value(); return null !== t && t === this._adjustValue(t) }, _value: function(t, e) { var i; "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh() }, _destroy: function() { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element) }, stepUp: v(function(t) { this._stepUp(t) }), _stepUp: function(t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) }, stepDown: v(function(t) { this._stepDown(t) }), _stepDown: function(t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) }, pageUp: v(function(t) { this._stepUp((t || 1) * this.options.page) }), pageDown: v(function(t) { this._stepDown((t || 1) * this.options.page) }), value: function(t) { if (!arguments.length) return this._parse(this.element.val());
            v(this._value).call(this, t) }, widget: function() { return this.uiSpinner } }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a></a><a></a>" } }); var b;
    t.ui.spinner;
    t.widget("ui.tabs", { version: "1.12.1", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: (b = /#.*$/, function(t) { var e, i;
            e = t.href.replace(b, ""), i = location.href.replace(b, ""); try { e = decodeURIComponent(e) } catch (t) {} try { i = decodeURIComponent(i) } catch (t) {} return t.hash.length > 1 && e === i }), _create: function() { var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) { return e.tabs.index(t) }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active) }, _initialActive: function() { var e = this.options.active,
                i = this.options.collapsible,
                s = location.hash.substring(1); return null === e && (s && this.tabs.each(function(i, n) { if (t(n).attr("aria-controls") === s) return e = i, !1 }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && -1 !== e || (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e }, _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } }, _tabKeydown: function(e) { var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                s = this.tabs.index(i),
                n = !0; if (!this._handlePageNav(e)) { switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++; break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--; break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1; break;
                    case t.ui.keyCode.HOME:
                        s = 0; break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                    default:
                        return }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", s) }, this.delay)) } }, _panelKeydown: function(e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")) }, _handlePageNav: function(e) { return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 }, _findNextTab: function(e, i) { var s = this.tabs.length - 1; for (; - 1 !== t.inArray((e > s && (e = 0), e < 0 && (e = s), e), this.options.disabled);) e = i ? e + 1 : e - 1; return e }, _focusNextTab: function(t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t }, _setOption: function(t, e) { "active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e) }, _sanitizeSelector: function(t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" }, refresh: function() { var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) { return i.index(t) }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh() }, _refresh: function() { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) }, _processTabs: function() { var e = this,
                i = this.tabs,
                s = this.anchors,
                n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() { return t("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) { var n, o, a, r = t(s).uniqueId().attr("id"),
                    h = t(s).closest("li"),
                    l = h.attr("aria-controls");
                e._isLocal(s) ? (a = (n = s.hash).substring(1), o = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (a = h.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(n)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": a, "aria-labelledby": r }), o.attr("aria-labelledby", r) }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels))) }, _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) }, _createPanel: function(e) { return t("<div>").attr("id", e).data("ui-tabs-destroy", !0) }, _setOptionDisabled: function(e) { var i, s, n; for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e) }, _setupEvents: function(e) { var i = {};
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(t) { t.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs) }, _setupHeightStyle: function(e) { var i, s = this.element.parent(); "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() { var e = t(this),
                    s = e.css("position"); "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0)) }), this.element.children().not(this.panels).each(function() { i -= t(this).outerHeight(!0) }), this.panels.each(function() { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() { i = Math.max(i, t(this).height("").height()) }).height(i)) }, _eventHandler: function(e) { var i = this.options,
                s = this.active,
                n = t(e.currentTarget).closest("li"),
                o = n[0] === s[0],
                a = o && i.collapsible,
                r = a ? t() : this._getPanelForTab(n),
                h = s.length ? this._getPanelForTab(s) : t(),
                l = { oldTab: s, oldPanel: h, newTab: a ? t() : n, newPanel: r };
            e.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, l) || (i.active = !a && this.tabs.index(n), this.active = o ? t() : n, this.xhr && this.xhr.abort(), h.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), e), this._toggle(e, l)) }, _toggle: function(e, i) { var s = this,
                n = i.newPanel,
                o = i.oldPanel;

            function a() { s.running = !1, s._trigger("activate", e, i) }

            function r() { s._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), n.length && s.options.show ? s._show(n, s.options.show, a) : (n.show(), a()) }
            this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function() { s._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.hide(), r()), o.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), n.length && o.length ? i.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter(function() { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), n.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _activate: function(e) { var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop })) }, _findActive: function(e) { return !1 === e ? t() : this.tabs.eq(e) }, _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e }, _destroy: function() { this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function() { var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls") }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "") }, enable: function(e) { var i = this.options.disabled;!1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) { return t !== e ? t : null }) : t.map(this.tabs, function(t, i) { return i !== e ? i : null })), this._setOptionDisabled(i)) }, disable: function(e) { var i = this.options.disabled; if (!0 !== i) { if (void 0 === e) i = !0;
                else { if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e] }
                this._setOptionDisabled(i) } }, load: function(e, i) { e = this._getIndex(e); var s = this,
                n = this.tabs.eq(e),
                o = n.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(n),
                r = { tab: n, panel: a },
                h = function(t, e) { "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) { setTimeout(function() { a.html(t), s._trigger("load", i, r), h(n, e) }, 1) }).fail(function(t, e) { setTimeout(function() { h(t, e) }, 1) }))) }, _ajaxSettings: function(e, i, s) { var n = this; return { url: e.attr("href").replace(/#.*$/, ""), beforeSend: function(e, o) { return n._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, s)) } } }, _getPanelForTab: function(e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) } }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function() { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } });
    t.ui.tabs;
    t.widget("ui.tooltip", { version: "1.12.1", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null }, _addDescribedBy: function(e, i) { var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" "))) }, _removeDescribedBy: function(e) { var i = e.data("ui-tooltip-id"),
                s = (e.attr("aria-describedby") || "").split(/\s+/),
                n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby") }, _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]) }, _setOption: function(e, i) { var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) { s._updateContent(e.element) }) }, _setOptionDisabled: function(t) { this[t ? "_disable" : "_enable"]() }, _disable: function() { var e = this;
            t.each(this.tooltips, function(i, s) { var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0) }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var e = t(this); if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") })) }, _enable: function() { this.disabledTitles.each(function() { var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")) }), this.disabledTitles = t([]) }, open: function(e) { var i = this,
                s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() { var e, s = t(this);
                s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", "")) }), this._registerCloseHandlers(e, s), this._updateContent(s, e)) }, _updateContent: function(t, e) { var i, s = this.options.content,
                n = this,
                o = e ? e.type : null; if ("string" == typeof s || s.nodeType || s.jquery) return this._open(e, t, s);
            (i = s.call(t[0], function(i) { n._delay(function() { t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i)) }) })) && this._open(e, t, i) }, _open: function(e, i, s) { var n, o, a, r, h = t.extend({}, this.options.position);

            function l(t) { h.of = t, o.is(":hidden") || o.position(h) }
            s && ((n = this._find(i)) ? n.tooltip.find(".ui-tooltip-content").html(s) : (i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), n = this._tooltip(i), o = n.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), (r = t("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), r.removeAttr("id").find("[id]").removeAttr("id"), r.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: l }), l(e)) : o.position(t.extend({ of: i }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() { o.is(":visible") && (l(h.of), clearInterval(a)) }, t.fx.interval)), this._trigger("open", e, { tooltip: o }))) }, _registerCloseHandlers: function(e, i) { var s = { keyup: function(e) { if (e.keyCode === t.ui.keyCode.ESCAPE) { var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0) } } };
            i[0] !== this.element[0] && (s.remove = function() { this._removeTooltip(this._find(i).tooltip) }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s) }, close: function(e) { var i, s = this,
                n = t(e ? e.currentTarget : this.element),
                o = this._find(n);
            o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { s._removeTooltip(t(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) { t(i.element).attr("title", i.title), delete s.parents[e] }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1))) : n.removeData("ui-tooltip-open") }, _tooltip: function(e) { var i = t("<div>").attr("role", "tooltip"),
                s = t("<div>").appendTo(i),
                n = i.uniqueId().attr("id"); return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = { element: e, tooltip: i } }, _find: function(t) { var e = t.data("ui-tooltip-id"); return e ? this.tooltips[e] : null }, _removeTooltip: function(t) { t.remove(), delete this.tooltips[t.attr("id")] }, _appendTo: function(t) { var e = t.closest(".ui-front, dialog"); return e.length || (e = this.document[0].body), e }, _destroy: function() { var e = this;
            t.each(this.tooltips, function(i, s) { var n = t.Event("blur"),
                    o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title")) }), this.liveRegion.remove() } }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var t = this._superApply(arguments); return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t } });
    t.ui.tooltip });
/** jquery-ui.js end **/

/** bootstrap.min.js start **/
/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function l(t){var n=this,i=!1;return e(this).one(c.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||c.triggerTransitionEnd(n)}),t),this}var c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&c.isElement(s)?"element":null===(a=s)||"undefined"==typeof a?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};c.jQueryDetection(),e.fn.emulateTransitionEnd=l,e.event.special[c.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var h="alert",u=e.fn[h],d=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=c.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=c.getTransitionDurationFromElement(t);e(t).one(c.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[h]=d._jQueryInterface,e.fn[h].Constructor=d,e.fn[h].noConflict=function(){return e.fn[h]=u,d._jQueryInterface};var f=e.fn.button,g=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"LABEL"===i.tagName&&o&&"checkbox"===o.type&&t.preventDefault(),g._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=g._jQueryInterface,e.fn.button.Constructor=g,e.fn.button.noConflict=function(){return e.fn.button=f,g._jQueryInterface};var m="carousel",p=".bs.carousel",_=e.fn[m],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},b={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},y={TOUCH:"touch",PEN:"pen"},E=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(p),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=a(a({},v),t),c.typeCheckConfig(m,t,b),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,a=this._element.querySelector(".active.carousel-item"),l=this._getItemIndex(a),h=n||a&&this._getItemByDirection(t,a),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&a&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:l,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),c.reflow(h),e(a).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=c.getTransitionDurationFromElement(a);e(a).one(c.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(a).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(a).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=a(a({},v),e(this).data());"object"==typeof n&&(o=a(a({},o),n));var s="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if("undefined"==typeof i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=c.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var s=a(a({},e(o).data()),e(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),t._jQueryInterface.call(e(o),s),r&&e(o).data("bs.carousel").to(r),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return v}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",E._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);E._jQueryInterface.call(o,o.data())}})),e.fn[m]=E._jQueryInterface,e.fn[m].Constructor=E,e.fn[m].noConflict=function(){return e.fn[m]=_,E._jQueryInterface};var w="collapse",T=e.fn[w],C={toggle:!0,parent:""},S={toggle:"boolean",parent:"(string|element)"},D=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=c.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=c.getSelectorFromElement(r);if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=a(a({},C),t)).toggle=Boolean(t.toggle),c.typeCheckConfig(w,t,S),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;c.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=c.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),s=a(a(a({},C),i.data()),"object"==typeof n&&n?n:{});if(!o&&s.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return C}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=c.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();D._jQueryInterface.call(t,i)}))})),e.fn[w]=D._jQueryInterface,e.fn[w].Constructor=D,e.fn[w].noConflict=function(){return e.fn[w]=T,D._jQueryInterface};var k="dropdown",N=e.fn[k],A=new RegExp("38|40|27"),I={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},j=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:c.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=a(a(a({},this.constructor.Default),e(this._element).data()),t),c.typeCheckConfig(k,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a(a({},t),this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=c.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!A.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return I}},{key:"DefaultType",get:function(){return O}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",j._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),j._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[k]=j._jQueryInterface,e.fn[k].Constructor=j,e.fn[k].noConflict=function(){return e.fn[k]=N,j._jQueryInterface};var P=e.fn.modal,x={backdrop:!0,keyboard:!0,focus:!0,show:!0},L={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},R=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=a(a({},x),t),c.typeCheckConfig("modal",t,L),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add("modal-static");var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t._element.classList.remove("modal-static")})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&c.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var a=c.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(c.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&c.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),s=a(a(a({},x),e(this).data()),"object"==typeof n&&n?n:{});if(o||(o=new t(this,s),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else s.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return x}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=c.getSelectorFromElement(this);o&&(n=document.querySelector(o));var s=e(n).data("bs.modal")?"toggle":a(a({},e(n).data()),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));R._jQueryInterface.call(e(n),s,this)})),e.fn.modal=R._jQueryInterface,e.fn.modal.Constructor=R,e.fn.modal.noConflict=function(){return e.fn.modal=P,R._jQueryInterface};var q=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],F={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,B=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===q.indexOf(n)||Boolean(t.nodeValue.match(Q)||t.nodeValue.match(B));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var U="tooltip",M=e.fn[U],W=new RegExp("(^|\\s)bs-tooltip\\S+","g"),V=["sanitize","whiteList","sanitizeFn"],z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},K={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},X={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:F,popperConfig:null},Y={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},$=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=c.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=c.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=c.getTransitionDurationFromElement(this.tip);e(this.tip).one(c.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=c.getTransitionDurationFromElement(i);e(i).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=H(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return a(a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return K[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a(a({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==V.indexOf(t)&&delete n[t]})),"number"==typeof(t=a(a(a({},this.constructor.Default),n),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c.typeCheckConfig(U,t,this.constructor.DefaultType),t.sanitize&&(t.template=H(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(W);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return X}},{key:"NAME",get:function(){return U}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Y}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return z}}]),t}();e.fn[U]=$._jQueryInterface,e.fn[U].Constructor=$,e.fn[U].noConflict=function(){return e.fn[U]=M,$._jQueryInterface};var J="popover",G=e.fn[J],Z=new RegExp("(^|\\s)bs-popover\\S+","g"),tt=a(a({},$.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),et=a(a({},$.DefaultType),{},{content:"(string|element|function)"}),nt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},it=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Z);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return tt}},{key:"NAME",get:function(){return J}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return nt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return et}}]),s}($);e.fn[J]=it._jQueryInterface,e.fn[J].Constructor=it,e.fn[J].noConflict=function(){return e.fn[J]=G,it._jQueryInterface};var ot="scrollspy",st=e.fn[ot],rt={offset:10,method:"auto",target:""},at={offset:"number",method:"string",target:"(string|element)"},lt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=c.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=a(a({},rt),"object"==typeof t&&t?t:{})).target&&c.isElement(t.target)){var n=e(t.target).attr("id");n||(n=c.getUID(ot),e(t.target).attr("id",n)),t.target="#"+n}return c.typeCheckConfig(ot,t,at),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return rt}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);lt._jQueryInterface.call(i,i.data())}})),e.fn[ot]=lt._jQueryInterface,e.fn[ot].Constructor=lt,e.fn[ot].noConflict=function(){return e.fn[ot]=st,lt._jQueryInterface};var ct=e.fn.tab,ht=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=c.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var a=e.Event("hide.bs.tab",{relatedTarget:this._element}),l=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),a=function(){return o._transitionComplete(t,s,i)};if(s&&r){var l=c.getTransitionDurationFromElement(s);e(s).removeClass("show").one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),ht._jQueryInterface.call(e(this),"show")})),e.fn.tab=ht._jQueryInterface,e.fn.tab.Constructor=ht,e.fn.tab.noConflict=function(){return e.fn.tab=ct,ht._jQueryInterface};var ut=e.fn.toast,dt={animation:"boolean",autohide:"boolean",delay:"number"},ft={animation:!0,autohide:!0,delay:500},gt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),c.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=a(a(a({},ft),e(this._element).data()),"object"==typeof t&&t?t:{}),c.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"DefaultType",get:function(){return dt}},{key:"Default",get:function(){return ft}}]),t}();e.fn.toast=gt._jQueryInterface,e.fn.toast.Constructor=gt,e.fn.toast.noConflict=function(){return e.fn.toast=ut,gt._jQueryInterface},t.Alert=d,t.Button=g,t.Carousel=E,t.Collapse=D,t.Dropdown=j,t.Modal=R,t.Popover=it,t.Scrollspy=lt,t.Tab=ht,t.Toast=gt,t.Tooltip=$,t.Util=c,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=bootstrap.min.js.map
/** bootstrap.min.js end **/

/** global.js start **/
function handleSearch(e) { var t = $("#header_search_type").val(),
        o = $("#header_keyword").val(),
        a = "?search_type=" + t; if ("" != a || "" != o) { "product" == t ? e = product_url : "service" == t && (e = vendor_url); var r = e + a + ("&keyword=" + o);
        window.location.replace(r) } else showErrorMessageTopRight("Please enter keyword for searching.") }

function phoneNumValidate(e, t, o) { var a, r, n;
    a = $("#" + e), r = $("." + t), n = $("#" + o); var l = 0;
    a.intlTelInput({ utilsScript: WEBSITE_URL + "/js/intl-tel-input/utils.js", formatOnDisplay: !1, initialCountry: "ae" });
    a.blur(function() { if ($.trim(a.val())) { var e = a.intlTelInput("isValidNumber"); if (0 == e) return $(r).html(PLEASE_ENTER_VALID_MOBILE_NO), n.val(""), !1; if (1 == e) { var t = a.intlTelInput("getSelectedCountryData").dialCode; "" != (t = "+" + t) && $(".dial_code").val(t); var o = a.intlTelInput("getNumberType"); return o != intlTelInputUtils.numberType.MOBILE && o != intlTelInputUtils.numberType.FIXED_LINE_OR_MOBILE || (l = 1), 0 == l ? ($(r).html(PLEASE_ENTER_VALID_MOBILE_NO), n.val(""), !1) : (a.val(a.intlTelInput("getNumber")), n.length && n.val(a.intlTelInput("getNumber")), $(r).html(""), !0) } } }).trigger("blur"), a.on("keyup change", function() { a.removeClass("error"), n.length && n.val("") }), a.keyup(function() { $.trim(a.val()) || $(r).html("") }) }

function ajax_submit_custom_function(e, t, o, a, r, n, l) { blockedUI(); var i = $("#" + t);
    i.hide(), i.html(""); var s = { success: function(a) { if ("success" == a.status) return "" != o ? (window.location.href = o || a.link, !1) : (location.reload(!0), !1); if ("redirect" == a.status) "" != a.link && (location.href = a.link);
            else { try { switch (data = a, data.status) {
                        case "redirect":
                            return location.href = data.link, !1;
                        case "error":
                            var n = ""; return "error" == data.status && ($(".error-msg").html(""), $(".error-message").html(""), $("#" + e).find(".border-red").removeClass("border-red"), $.each(data.errors, function(t, o) { data.errors[t] && (n = "" == n ? t : n, $("#" + e).find("input[name=" + t + "]").addClass("border-red"), $("#" + e).find("#" + t).addClass("border-red"), $("#" + e).find(".error_" + t).html(o)) })), "modal-error" == r ? $("#" + e + " .error_" + n).length > 0 && $("#" + e).closest(".modal-scroll-on-error").animate({ scrollTop: $("#" + e + " .error_" + n).offset().top - 10 }, "slow") : goToByScroll(t, e), "function" == typeof l && l(!1, {}), !1;
                        default:
                            var s = '<ul class="client-side-error">';
                            $("#" + e).find("input,select,textarea,text").removeClass("border-red"), $.each(data, function(t, o) { s += "<li>" + o + "</li>", $("#" + e).find("#" + t).addClass("border-red") }), s += "</ul>", error_msg = '<div class="alert alert-danger alert-dismissible site-color" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + s + "</div>", i.html(error_msg), i.show(), "modal-error" == r ? $("#" + t).length > 0 && $("#" + e).closest(".modal-scroll-on-error").animate({ scrollTop: $("#" + t).offset().top - 80 }, "slow") : goToByScroll(t, e), "function" == typeof l && l(!1, {}) } } catch (o) { $("#" + t).html('<div class="alert alert-danger alert-dismissible site-color" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + a + "</div>"), i.html(a), i.show(), "modal-error" == r ? $("#" + t).length > 0 && $("#" + e).closest(".modal-scroll-on-error").animate({ scrollTop: $("#" + t).offset().top - 80 }, "slow") : $("#" + t).length > 0 && goToByScroll(t, e), "function" == typeof l && l(!1, {}) }
                unblockedUI() } return !1 }, resetForm: !1 }; return $("form#" + e).ajaxSubmit(s), !1 }

function checkImageSize(e, t, o, a) { void 0 === a && (a = "");
    e = e; var r = 1024 * t * 1024;
    o = o, a = a; if (parseFloat($("#" + e)[0].files[0].size).toFixed(2) > r) { var n = "File size should not be greater than " + t + " MB. Please compress your file using online compression tools and try again."; return "ajax" == o ? ($("#" + e).val(""), showErrorMessageTopRight(n)) : ($("#" + e).val(""), $("#" + a).html(""), $("#" + a).html(n)), !1 } var l = $("#" + e)[0].files ? $("#" + e)[0].files : []; if (l.length && window.FileReader) { if (/^image/.test(l[0].type)) { var i = new FileReader;
            i.readAsDataURL(l[0]), i.onloadend = function() { $("#pImage").html("<img src='" + this.result + "' class='profileImage' >") } } return "" != a && $("#" + a).html(""), !0 } }

function autocomplete() { var e = $("#header_search_type").val();
    $("#header_keyword").autocomplete({ minLength: 1, source: function(t, o) { "" != e && "product" == e && $.ajax({ url: search_product_url, headers: { "X-CSRF-TOKEN": csrf_token }, data: { keyword: t.term, search_type: e }, type: "POST", dataType: "json", success: function(e) { o(e.data) } }) } }) }

function resizeequalheight() { equalHeight($(".makeequal")) }

function equalHeight(e) { tallest = 0, e.height(""), e.each(function() { thisHeight = $(this).height(), thisHeight > tallest && (tallest = thisHeight) }), e.height(tallest) }

function blockedUI() { $(".loading-cntant").fadeIn(100) }

function unblockedUI() { $(".loading-cntant").fadeOut(1e3) }
$(document).ready(function() { $(".autocomplete").select2({ width: "100%"}),$(".autocomplete-home-subject").select2({ width: "100%",  minimumInputLength: 1 }), $('[data-toggle="tooltip"]').tooltip(), $("#forgotPasswordForm").formValidation({ message: "This value is not valid", fields: { email: { row: ".form-group", validators: { notEmpty: { message: ERROR_ENTER_EMAIL_ADDRESS }, emailAddress: { message: ERROR_ENTER_VALID_EMAIL_ADDRESS } } } } }), $("#resetForm").formValidation({ message: "This value is not valid", fields: { new_password: { row: ".form-group", validators: { notEmpty: { message: ERROR_ENTER_PASSWORD }, regexp: { regexp: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, message: PASSWORD_REGX_ERROR_MESSAGE } } }, new_password_confirmation: { row: ".form-group", validators: { identical: { field: "new_password", message: ERROR_PASSWORD_CONFIRM_PASSWORD_NOT_MATCH } } } } }), $(".header_search_link").click(function(e) { e.stopImmediatePropagation(), handleSearch($(this).attr("href")), e.preventDefault() }), $("#headerSearchForm").on("submit", function(e) { e.stopImmediatePropagation(), handleSearch($(this).attr("action")), e.preventDefault() }), $(document).on("keyup", "#userMobile", function() { $(".error_phone").html("") }), $(document).on("keyup", "#email", function() { $(".error_email").html("") }), $(document).on("keyup", "#otp_verify", function() { $(".otp_verify").html("") }), $(document).on("keyup", "#otp", function() { $(".otp_err").html("") }) }), $(document).on("click", ".img-profile-add", function(e) { $("#profileImage").trigger("click") }), $("document").ready(function() { $("#profileImage").change(function(e) { if (e.stopImmediatePropagation(), 1 == checkImageSize("profileImage", IMAGE_UPLOAD_FILE_MAX_SIZE_TWO, "ajax")) { blockedUI(); var t = { url: $("#UserProfileForm").attr("action"), beforeSend: function(e) { blockedUI() }, success: function(e) { unblockedUI(); var t = JSON.parse(e); "0" == t.error ? (showSuccessMessageTopRight(t.msg), $(".userProfileImageFigure").html(t.img)) : showErrorMessageTopRight(t.msg) }, resetForm: !1 };
            $("#UserProfileForm").ajaxSubmit(t), e.preventDefault() } }) }), $(document).on("click", ".delete_review", function(e) { e.stopImmediatePropagation(); var t = $(this).attr("data-rel"),
        o = $(this).attr("href");
    bootbox.confirm({ message: t, buttons: { confirm: { className: "btn btn-primary" }, cancel: { className: "btn btn-primary btn_theme_blue_color" } }, callback: function(e) { e && window.location.replace(o) } }), e.preventDefault() }), $(document).on("click", "#load_moremydata", function() { var e = $(this).data("href"),
        t = $(".myid").attr("data-id");
    $.ajax({ url: e, method: "POST", headers: { "X-CSRF-TOKEN": csrf_token }, data: { id: t }, beforeSend: function(e) { blockedUI() }, success: function(e) { unblockedUI(), $(".myid").attr("data-id", e.remain), $(".rating-name-box").append(e.html), e.count <= e.remain && $("#load_moremydata").hide() } }) }), $(document).on("keyup", "#header_keyword", function() { autocomplete() }), $(function() { $(document).on("click", ".del_confirm_box", function(e) { var t = $(this).data("href");
        msg = DELETE_CONFIRM_MESSAGE, bootbox.confirm({ message: msg, buttons: { confirm: { className: "btn btn-primary" }, cancel: { className: "btn btn-primary btn_theme_blue_color" } }, callback: function(e) { e && $.ajax({ url: t, beforeSend: function(e) { blockedUI() }, success: function(e) { unblockedUI(), window.location.reload() } }) } }) }) }), $(function() { $(document).on("click", ".alert_confirm_box", function(e) { var t = $(this).data("href"),
            o = $(this).data("alert");
        bootbox.confirm({ message: o, buttons: { confirm: { className: "btn btn-primary" }, cancel: { className: "btn btn-primary btn_theme_blue_color" } }, callback: function(e) { e && (blockedUI(), window.location.replace(t)) } }) }) }), $(function() { $(window).resize(function() { setTimeout("resizeequalheight()", 250) }), setTimeout("resizeequalheight()", 250) }), $(document).ready(function() { $(".navbar-toggler").on("click", function() { $("body").toggleClass("open-menu"), $(".navbar_menu").toggleClass("show"), $("header").toggleClass("show"), $(this).toggleClass("open") }), $(".dashboard_toggle").on("click", function() { $("body").toggleClass("open-menu"), $(".sidebar_menu").toggleClass("show"), $(".overlay_bg").toggleClass("show") }), $(".close_menu_btn").on("click", function() { $("body").removeClass("open-menu"), $(".sidebar_menu").removeClass("show"), $(".overlay_bg").removeClass("show") }) }), $(document).ready(function() { $(".multi_select_check").length && $(".multi_select_check").multiselect({ columns: 1, placeholder: "Please Select", search: !0, searchOptions: { default: "Please Select" }, selectAll: !1, maxPlaceholderOpts: 1 }) }), $(document).ready(function() { $("#book_session_form, #tutor_availability_form").submit(function(e) { blockedUI() }) });
/** global.js end **/


