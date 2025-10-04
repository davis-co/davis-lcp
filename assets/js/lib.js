/* baseVar */
var baseURL = "assets";
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[i.call(e)] || "object"
      : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = ue.call(t, "constructor") && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += ce.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
          ? e.documentElement.textContent
          : 3 === i || 4 === i
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ge +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      M = function () {
        V();
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function F(e) {
      return (e[S] = !0), e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector &&
            ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", M),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*");
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope");
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && !!e.checked) ||
              (fe(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button");
          },
          text: function (e) {
            var t;
            return (
              fe(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: X(function () {
            return [0];
          }),
          last: X(function (e, t) {
            return [t - 1];
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: X(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = B(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(ve, " ") }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r)
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && U(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n;
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t),
        n
      );
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r;
        })
      : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          "string" == typeof e && b.test(e) ? ce(e) : e || [],
          !1
        ).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return d(e, "nextSibling");
        },
        prevAll: function (e) {
          return d(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ce.Callbacks("memory"),
              ce.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P),
        ie.addEventListener("load", P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(U, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : X.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              z.set(this, n);
            })
          : M(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = z.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  z.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = { composed: !0 };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && K(e) && "none" === ce.css(e, "display"))
    );
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ("px" !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = _.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Se(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(D) || [""]).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, "input") &&
              _.get(t, "click")) ||
            fe(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, "handle"),
            n = ce.event.fix(e);
          (n.type = "focusin" === e.type ? "focus" : "blur"),
            (n.isSimulated = !0),
            t(e),
            n.target === n.currentTarget && t(n);
        } else ce.event.simulate(i, e.target, ce.event.fix(e));
      }
      (ce.event.special[r] = {
        setup: function () {
          var e;
          if ((He(this, r, !0), !C.documentMode)) return !1;
          (e = _.get(this, i)) || this.addEventListener(i, o),
            _.set(this, i, (e || 0) + 1);
        },
        trigger: function () {
          return He(this, r), !0;
        },
        teardown: function () {
          var e;
          if (!C.documentMode) return !1;
          (e = _.get(this, i) - 1)
            ? _.set(this, i, e)
            : (this.removeEventListener(i, o), _.remove(this, i));
        },
        _default: function (e) {
          return _.get(e.target, r);
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i);
            n ||
              (C.documentMode
                ? this.addEventListener(i, o)
                : e.addEventListener(r, o, !0)),
              _.set(t, i, (n || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1;
            n
              ? _.set(t, i, n)
              : (C.documentMode
                  ? this.removeEventListener(i, o)
                  : e.removeEventListener(r, o, !0),
                _.remove(t, i));
          },
        });
    }),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return (
      (fe(e, "table") &&
        fe(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    );
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function We(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[z.expando] && (n[z.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n &&
              (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            "padding" !== n
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    );
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (ce.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (ce.cssHooks[i + o].set = rt);
    }),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          { specialEasing: {}, easing: ce.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this;
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (
                ((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = Tt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = Tt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = Ct(this)) && _.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : _.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(St, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value");
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Et = ie.location,
    jt = { guid: Date.now() },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e)
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== x(e)) i(n, e);
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements");
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Lt, "\r\n") };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            $t,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < ce.inArray("script", v.dataTypes) &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script");
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              ce.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = { 0: 200, 1223: 204 },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Zt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ce.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function (e) {
          return M(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t;
      });
    }),
    ce.each({ Height: "height", Width: "width" }, function (a, s) {
      ce.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          ce.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return M(
              this,
              function (e, t, n) {
                var r;
                return y(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? ce.css(e, t, i)
                  : ce.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    ce.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});
/*download and save to fileSystem*/ FSAndDFS = {
  l: {},
  gS: function (a, b) {
    var c = new XMLHttpRequest();
    c.open("HEAD", a, !0),
      (c.onload = function () {
        var a =
          "bytes" === c.getResponseHeader("Accept-Ranges") &&
          ~~c.getResponseHeader("Content-Length");
        b(a);
      }),
      c.send();
  },
  fE: function (a, b, c) {
    window.webkitResolveLocalFileSystemURL(
      a,
      function (a) {
        b(a);
      },
      function (a) {
        c(a);
      }
    );
  },
  gFS: function (a, b, c, d) {
    a == PERSISTENT
      ? navigator.webkitPersistentStorage.queryUsageAndQuota(function (e) {
          navigator.webkitPersistentStorage.requestQuota(
            e + b + 2097152,
            function (b) {
              window.webkitRequestFileSystem(
                a,
                b,
                function (a) {
                  c(a);
                },
                d
              );
            },
            d
          );
        })
      : a == TEMPORARY &&
        navigator.webkitTemporaryStorage.queryUsageAndQuota(
          b,
          function (b) {
            window.webkitRequestFileSystem(
              a,
              b,
              function (a) {
                c(a);
              },
              d
            );
          },
          d
        );
  },
  aD: function (a, b, c, d, e) {
    a.root.getFile(
      b,
      { create: !0 },
      function (a) {
        a.createWriter(function (a) {
          (a.onwriteend = function (a) {
            c(a);
          }),
            (a.onwrite = function (a) {}),
            (a.onerror = function (a) {
              console.log(a);
            }),
            d(a);
        }, e);
      },
      e
    );
  },
  dF: function (a, a1, a2, b, c) {
    FSAndDFS.l[a1] = a2;
    var d = new XMLHttpRequest();
    d.open("GET", a, !0),
      (d.responseType = "blob"),
      (d.onprogress = function (a) {
        a.lengthComputable && b(((a.loaded / a.total) * 100).toFixed(2));
      }),
      (d.onload = function (a) {
        200 == this.status && c(d.response);
      }),
      d.send();
  },
};
/*! alertifyjs - v1.14.0 - Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) */
!(function (a) {
  "use strict";
  function b(a, b) {
    a.className += " " + b;
  }
  function c(a, b) {
    for (
      var c = a.className.split(" "), d = b.split(" "), e = 0;
      e < d.length;
      e += 1
    ) {
      var f = c.indexOf(d[e]);
      f > -1 && c.splice(f, 1);
    }
    a.className = c.join(" ");
  }
  function d() {
    return "rtl" === a.getComputedStyle(document.body).direction;
  }
  function e() {
    return (
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    );
  }
  function f() {
    return (
      (document.documentElement && document.documentElement.scrollLeft) ||
      document.body.scrollLeft
    );
  }
  function g(a) {
    for (; a.lastChild; ) a.removeChild(a.lastChild);
  }
  function h(a) {
    return "[object String]" === Object.prototype.toString.call(a);
  }
  function i(a) {
    if (null === a) return a;
    var b;
    if (Array.isArray(a)) {
      b = [];
      for (var c = 0; c < a.length; c += 1) b.push(i(a[c]));
      return b;
    }
    if (a instanceof Date) return new Date(a.getTime());
    if (a instanceof RegExp)
      return (
        (b = new RegExp(a.source)),
        (b.global = a.global),
        (b.ignoreCase = a.ignoreCase),
        (b.multiline = a.multiline),
        (b.lastIndex = a.lastIndex),
        b
      );
    if ("object" == typeof a) {
      b = {};
      for (var d in a) a.hasOwnProperty(d) && (b[d] = i(a[d]));
      return b;
    }
    return a;
  }
  function j(a, b) {
    if (a.elements) {
      var c = a.elements.root;
      c.parentNode.removeChild(c),
        delete a.elements,
        (a.settings = i(a.__settings)),
        (a.__init = b),
        delete a.__internal;
    }
  }
  function k(a, b) {
    return function () {
      if (arguments.length > 0) {
        for (var c = [], d = 0; d < arguments.length; d += 1)
          c.push(arguments[d]);
        return c.push(a), b.apply(a, c);
      }
      return b.apply(a, [null, a]);
    };
  }
  function l(a, b) {
    return { index: a, button: b, cancel: !1 };
  }
  function m(a, b) {
    if ("function" == typeof b.get(a)) return b.get(a).call(b);
  }
  function n() {
    function a(a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
      return a;
    }
    function b(a) {
      var b = d[a].dialog;
      return b && "function" == typeof b.__init && b.__init(b), b;
    }
    function c(b, c, e, f) {
      var g = { dialog: null, factory: c };
      return (
        void 0 !== f &&
          (g.factory = function () {
            return a(new d[f].factory(), new c());
          }),
        e || (g.dialog = a(new g.factory(), x)),
        (d[b] = g)
      );
    }
    var d = {};
    return {
      defaults: q,
      dialog: function (d, e, f, g) {
        if ("function" != typeof e) return b(d);
        if (this.hasOwnProperty(d))
          throw new Error("alertify.dialog: name already exists");
        var h = c(d, e, f, g);
        this[d] = f
          ? function () {
              if (0 === arguments.length) return h.dialog;
              var b = a(new h.factory(), x);
              return (
                b && "function" == typeof b.__init && b.__init(b),
                b.main.apply(b, arguments),
                b.show.apply(b)
              );
            }
          : function () {
              if (
                (h.dialog &&
                  "function" == typeof h.dialog.__init &&
                  h.dialog.__init(h.dialog),
                0 === arguments.length)
              )
                return h.dialog;
              var a = h.dialog;
              return a.main.apply(h.dialog, arguments), a.show.apply(h.dialog);
            };
      },
      closeAll: function (a) {
        for (var b = r.slice(0), c = 0; c < b.length; c += 1) {
          var d = b[c];
          (void 0 !== a && a === d) || d.close();
        }
      },
      setting: function (a, c, d) {
        if ("notifier" === a) return y.setting(c, d);
        var e = b(a);
        return e ? e.setting(c, d) : void 0;
      },
      set: function (a, b, c) {
        return this.setting(a, b, c);
      },
      get: function (a, b) {
        return this.setting(a, b);
      },
      notify: function (a, b, c, d) {
        return y.create(b, d).push(a, c);
      },
      message: function (a, b, c) {
        return y.create(null, c).push(a, b);
      },
      success: function (a, b, c) {
        return y.create("success", c).push(a, b);
      },
      error: function (a, b, c) {
        return y.create("error", c).push(a, b);
      },
      warning: function (a, b, c) {
        return y.create("warning", c).push(a, b);
      },
      dismissAll: function () {
        y.dismissAll();
      },
    };
  }
  var o = ":not(:disabled):not(.ajs-reset)",
    p = { ENTER: 13, ESC: 27, F1: 112, F12: 123, LEFT: 37, RIGHT: 39, TAB: 9 },
    q = {
      autoReset: !0,
      basic: !1,
      closable: !0,
      closableByDimmer: !0,
      invokeOnCloseOff: !1,
      frameless: !1,
      defaultFocusOff: !1,
      maintainFocus: !0,
      maximizable: !0,
      modal: !0,
      movable: !0,
      moveBounded: !1,
      overflow: !0,
      padding: !0,
      pinnable: !0,
      pinned: !0,
      preventBodyShift: !1,
      resizable: !0,
      startMaximized: !1,
      transition: "pulse",
      transitionOff: !1,
      tabbable: [
        "button",
        "[href]",
        "input",
        "select",
        "textarea",
        '[tabindex]:not([tabindex^="-"])' + o,
      ].join(o + ","),
      notifier: {
        delay: 5,
        position: "bottom-right",
        closeButton: !1,
        classes: {
          base: "alertify-notifier",
          prefix: "ajs-",
          message: "ajs-message",
          top: "ajs-top",
          right: "ajs-right",
          bottom: "ajs-bottom",
          left: "ajs-left",
          center: "ajs-center",
          visible: "ajs-visible",
          hidden: "ajs-hidden",
          close: "ajs-close",
        },
      },
      glossary: {
        title: "AlertifyJS",
        ok: "OK",
        cancel: "Cancel",
        acccpt: "Accept",
        deny: "Deny",
        confirm: "Confirm",
        decline: "Decline",
        close: "Close",
        maximize: "Maximize",
        restore: "Restore",
      },
      theme: { input: "ajs-input", ok: "ajs-ok", cancel: "ajs-cancel" },
      hooks: { preinit: function () {}, postinit: function () {} },
    },
    r = [],
    s = !1;
  try {
    var t = Object.defineProperty({}, "passive", {
      get: function () {
        s = !0;
      },
    });
    a.addEventListener("test", t, t), a.removeEventListener("test", t, t);
  } catch (A) {}
  var u = function (a, b, c, d, e) {
      a.addEventListener(b, c, s ? { capture: d, passive: e } : !0 === d);
    },
    v = function (a, b, c, d, e) {
      a.removeEventListener(b, c, s ? { capture: d, passive: e } : !0 === d);
    },
    w = (function () {
      var a,
        b,
        c = !1,
        d = {
          animation: "animationend",
          OAnimation: "oAnimationEnd oanimationend",
          msAnimation: "MSAnimationEnd",
          MozAnimation: "animationend",
          WebkitAnimation: "webkitAnimationEnd",
        };
      for (a in d)
        if (void 0 !== document.documentElement.style[a]) {
          (b = d[a]), (c = !0);
          break;
        }
      return { type: b, supported: c };
    })(),
    x = (function () {
      function n(a) {
        if (!a.__internal) {
          z.defaults.hooks.preinit(a),
            delete a.__init,
            a.__settings || (a.__settings = i(a.settings));
          var c;
          "function" == typeof a.setup
            ? ((c = a.setup()),
              (c.options = c.options || {}),
              (c.focus = c.focus || {}))
            : (c = {
                buttons: [],
                focus: { element: null, select: !1 },
                options: {},
              }),
            "object" != typeof a.hooks && (a.hooks = {});
          var d = [];
          if (Array.isArray(c.buttons))
            for (var e = 0; e < c.buttons.length; e += 1) {
              var f = c.buttons[e],
                g = {};
              for (var h in f) f.hasOwnProperty(h) && (g[h] = f[h]);
              d.push(g);
            }
          var j = (a.__internal = {
              isOpen: !1,
              activeElement: document.body,
              timerIn: void 0,
              timerOut: void 0,
              buttons: d,
              focus: c.focus,
              options: {
                title: void 0,
                modal: void 0,
                basic: void 0,
                frameless: void 0,
                defaultFocusOff: void 0,
                pinned: void 0,
                movable: void 0,
                moveBounded: void 0,
                resizable: void 0,
                autoReset: void 0,
                closable: void 0,
                closableByDimmer: void 0,
                invokeOnCloseOff: void 0,
                maximizable: void 0,
                startMaximized: void 0,
                pinnable: void 0,
                transition: void 0,
                transitionOff: void 0,
                padding: void 0,
                overflow: void 0,
                onshow: void 0,
                onclosing: void 0,
                onclose: void 0,
                onfocus: void 0,
                onmove: void 0,
                onmoved: void 0,
                onresize: void 0,
                onresized: void 0,
                onmaximize: void 0,
                onmaximized: void 0,
                onrestore: void 0,
                onrestored: void 0,
              },
              resetHandler: void 0,
              beginMoveHandler: void 0,
              beginResizeHandler: void 0,
              bringToFrontHandler: void 0,
              modalClickHandler: void 0,
              buttonsClickHandler: void 0,
              commandsClickHandler: void 0,
              transitionInHandler: void 0,
              transitionOutHandler: void 0,
              destroy: void 0,
            }),
            l = {};
          (l.root = document.createElement("div")),
            (l.root.style.display = "none"),
            (l.root.className = Ia.base + " " + Ia.hidden + " "),
            (l.root.innerHTML = Ha.dimmer + Ha.modal),
            (l.dimmer = l.root.firstChild),
            (l.modal = l.root.lastChild),
            (l.modal.innerHTML = Ha.dialog),
            (l.dialog = l.modal.firstChild),
            (l.dialog.innerHTML =
              Ha.reset +
              Ha.commands +
              Ha.header +
              Ha.body +
              Ha.footer +
              Ha.resizeHandle +
              Ha.reset),
            (l.reset = []),
            l.reset.push(l.dialog.firstChild),
            l.reset.push(l.dialog.lastChild),
            (l.commands = {}),
            (l.commands.container = l.reset[0].nextSibling),
            (l.commands.pin = l.commands.container.firstChild),
            (l.commands.maximize = l.commands.pin.nextSibling),
            (l.commands.close = l.commands.maximize.nextSibling),
            (l.header = l.commands.container.nextSibling),
            (l.body = l.header.nextSibling),
            (l.body.innerHTML = Ha.content),
            (l.content = l.body.firstChild),
            (l.footer = l.body.nextSibling),
            (l.footer.innerHTML = Ha.buttons.auxiliary + Ha.buttons.primary),
            (l.resizeHandle = l.footer.nextSibling),
            (l.buttons = {}),
            (l.buttons.auxiliary = l.footer.firstChild),
            (l.buttons.primary = l.buttons.auxiliary.nextSibling),
            (l.buttons.primary.innerHTML = Ha.button),
            (l.buttonTemplate = l.buttons.primary.firstChild),
            l.buttons.primary.removeChild(l.buttonTemplate);
          for (var m = 0; m < a.__internal.buttons.length; m += 1) {
            var n = a.__internal.buttons[m];
            Da.indexOf(n.key) < 0 && Da.push(n.key),
              (n.element = l.buttonTemplate.cloneNode()),
              (n.element.innerHTML = n.text),
              "string" == typeof n.className &&
                "" !== n.className &&
                b(n.element, n.className);
            for (var o in n.attrs)
              "className" !== o &&
                n.attrs.hasOwnProperty(o) &&
                n.element.setAttribute(o, n.attrs[o]);
            "auxiliary" === n.scope
              ? l.buttons.auxiliary.appendChild(n.element)
              : l.buttons.primary.appendChild(n.element);
          }
          (a.elements = l),
            (j.resetHandler = k(a, $)),
            (j.beginMoveHandler = k(a, fa)),
            (j.beginResizeHandler = k(a, la)),
            (j.bringToFrontHandler = k(a, E)),
            (j.modalClickHandler = k(a, U)),
            (j.buttonsClickHandler = k(a, W)),
            (j.commandsClickHandler = k(a, I)),
            (j.transitionInHandler = k(a, ba)),
            (j.transitionOutHandler = k(a, ca));
          for (var p in j.options)
            void 0 !== c.options[p]
              ? a.set(p, c.options[p])
              : z.defaults.hasOwnProperty(p)
              ? a.set(p, z.defaults[p])
              : "title" === p && a.set(p, z.defaults.glossary[p]);
          "function" == typeof a.build && a.build(),
            z.defaults.hooks.postinit(a);
        }
        document.body.appendChild(a.elements.root);
      }
      function o() {
        (Ba = f()), (Ca = e());
      }
      function s() {
        a.scrollTo(Ba, Ca);
      }
      function t() {
        for (var a = 0, d = 0; d < r.length; d += 1) {
          var e = r[d];
          (e.isModal() || e.isMaximized()) && (a += 1);
        }
        0 === a && document.body.className.indexOf(Ia.noOverflow) >= 0
          ? (c(document.body, Ia.noOverflow), x(!1))
          : a > 0 &&
            document.body.className.indexOf(Ia.noOverflow) < 0 &&
            (x(!0), b(document.body, Ia.noOverflow));
      }
      function x(d) {
        z.defaults.preventBodyShift &&
          (d &&
          document.documentElement.scrollHeight >
            document.documentElement.clientHeight
            ? ((Ka = Ca),
              (Ja = a.getComputedStyle(document.body).top),
              b(document.body, Ia.fixed),
              (document.body.style.top = -Ca + "px"))
            : d ||
              ((Ca = Ka),
              (document.body.style.top = Ja),
              c(document.body, Ia.fixed),
              s()));
      }
      function y(a, d, e) {
        h(e) && c(a.elements.root, Ia.prefix + e),
          b(a.elements.root, Ia.prefix + d),
          (Ea = a.elements.root.offsetWidth);
      }
      function A(a) {
        a.get("transitionOff")
          ? b(a.elements.root, Ia.noTransition)
          : c(a.elements.root, Ia.noTransition);
      }
      function B(a) {
        a.get("modal")
          ? (c(a.elements.root, Ia.modeless), a.isOpen() && (ua(a), Q(a), t()))
          : (b(a.elements.root, Ia.modeless), a.isOpen() && (ta(a), Q(a), t()));
      }
      function C(a) {
        a.get("basic")
          ? b(a.elements.root, Ia.basic)
          : c(a.elements.root, Ia.basic);
      }
      function D(a) {
        a.get("frameless")
          ? b(a.elements.root, Ia.frameless)
          : c(a.elements.root, Ia.frameless);
      }
      function E(a, b) {
        for (var c = r.indexOf(b), d = c + 1; d < r.length; d += 1)
          if (r[d].isModal()) return;
        return (
          document.body.lastChild !== b.elements.root &&
            (document.body.appendChild(b.elements.root),
            r.splice(r.indexOf(b), 1),
            r.push(b),
            Z(b)),
          !1
        );
      }
      function F(a, d, e, f) {
        switch (d) {
          case "title":
            a.setHeader(f);
            break;
          case "modal":
            B(a);
            break;
          case "basic":
            C(a);
            break;
          case "frameless":
            D(a);
            break;
          case "pinned":
            R(a);
            break;
          case "closable":
            T(a);
            break;
          case "maximizable":
            S(a);
            break;
          case "pinnable":
            N(a);
            break;
          case "movable":
            ja(a);
            break;
          case "resizable":
            pa(a);
            break;
          case "padding":
            f
              ? c(a.elements.root, Ia.noPadding)
              : a.elements.root.className.indexOf(Ia.noPadding) < 0 &&
                b(a.elements.root, Ia.noPadding);
            break;
          case "overflow":
            f
              ? c(a.elements.root, Ia.noOverflow)
              : a.elements.root.className.indexOf(Ia.noOverflow) < 0 &&
                b(a.elements.root, Ia.noOverflow);
            break;
          case "transition":
            y(a, f, e);
            break;
          case "transitionOff":
            A(a);
        }
        "function" == typeof a.hooks.onupdate &&
          a.hooks.onupdate.call(a, d, e, f);
      }
      function G(a, b, c, d, e) {
        var f = { op: void 0, items: [] };
        if (void 0 === e && "string" == typeof d)
          (f.op = "get"),
            b.hasOwnProperty(d)
              ? ((f.found = !0), (f.value = b[d]))
              : ((f.found = !1), (f.value = void 0));
        else {
          var g;
          if (((f.op = "set"), "object" == typeof d)) {
            var h = d;
            for (var i in h)
              b.hasOwnProperty(i)
                ? (b[i] !== h[i] &&
                    ((g = b[i]), (b[i] = h[i]), c.call(a, i, g, h[i])),
                  f.items.push({ key: i, value: h[i], found: !0 }))
                : f.items.push({ key: i, value: h[i], found: !1 });
          } else {
            if ("string" != typeof d)
              throw new Error("args must be a string or object");
            b.hasOwnProperty(d)
              ? (b[d] !== e && ((g = b[d]), (b[d] = e), c.call(a, d, g, e)),
                f.items.push({ key: d, value: e, found: !0 }))
              : f.items.push({ key: d, value: e, found: !1 });
          }
        }
        return f;
      }
      function H(a) {
        var b;
        V(a, function (c) {
          return (b =
            !0 !== a.get("invokeOnCloseOff") && !0 === c.invokeOnClose);
        }),
          !b && a.isOpen() && a.close();
      }
      function I(a, b) {
        switch (a.srcElement || a.target) {
          case b.elements.commands.pin:
            b.isPinned() ? K(b) : J(b);
            break;
          case b.elements.commands.maximize:
            b.isMaximized() ? M(b) : L(b);
            break;
          case b.elements.commands.close:
            H(b);
        }
        return !1;
      }
      function J(a) {
        a.set("pinned", !0);
      }
      function K(a) {
        a.set("pinned", !1);
      }
      function L(a) {
        m("onmaximize", a),
          b(a.elements.root, Ia.maximized),
          a.isOpen() && t(),
          m("onmaximized", a);
      }
      function M(a) {
        m("onrestore", a),
          c(a.elements.root, Ia.maximized),
          a.isOpen() && t(),
          m("onrestored", a);
      }
      function N(a) {
        a.get("pinnable")
          ? b(a.elements.root, Ia.pinnable)
          : c(a.elements.root, Ia.pinnable);
      }
      function O(a) {
        var b = f();
        (a.elements.modal.style.marginTop = e() + "px"),
          (a.elements.modal.style.marginLeft = b + "px"),
          (a.elements.modal.style.marginRight = -b + "px");
      }
      function P(a) {
        var b = parseInt(a.elements.modal.style.marginTop, 10),
          c = parseInt(a.elements.modal.style.marginLeft, 10);
        if (
          ((a.elements.modal.style.marginTop = ""),
          (a.elements.modal.style.marginLeft = ""),
          (a.elements.modal.style.marginRight = ""),
          a.isOpen())
        ) {
          var d = 0,
            g = 0;
          "" !== a.elements.dialog.style.top &&
            (d = parseInt(a.elements.dialog.style.top, 10)),
            (a.elements.dialog.style.top = d + (b - e()) + "px"),
            "" !== a.elements.dialog.style.left &&
              (g = parseInt(a.elements.dialog.style.left, 10)),
            (a.elements.dialog.style.left = g + (c - f()) + "px");
        }
      }
      function Q(a) {
        a.get("modal") || a.get("pinned") ? P(a) : O(a);
      }
      function R(a) {
        a.get("pinned")
          ? (c(a.elements.root, Ia.unpinned), a.isOpen() && P(a))
          : (b(a.elements.root, Ia.unpinned),
            a.isOpen() && !a.isModal() && O(a));
      }
      function S(a) {
        a.get("maximizable")
          ? b(a.elements.root, Ia.maximizable)
          : c(a.elements.root, Ia.maximizable);
      }
      function T(a) {
        a.get("closable")
          ? (b(a.elements.root, Ia.closable), za(a))
          : (c(a.elements.root, Ia.closable), Aa(a));
      }
      function U(a, b) {
        if (a.timeStamp - Ma > 200 && (Ma = a.timeStamp) && !La) {
          var c = a.srcElement || a.target;
          !0 === b.get("closableByDimmer") && c === b.elements.modal && H(b);
        }
        La = !1;
      }
      function V(a, b) {
        if (Date.now() - Na > 200 && (Na = Date.now()))
          for (var c = 0; c < a.__internal.buttons.length; c += 1) {
            var d = a.__internal.buttons[c];
            if (!d.element.disabled && b(d)) {
              var e = l(c, d);
              "function" == typeof a.callback && a.callback.apply(a, [e]),
                !1 === e.cancel && a.close();
              break;
            }
          }
      }
      function W(a, b) {
        var c = a.srcElement || a.target;
        V(b, function (a) {
          return a.element.contains(c) && (Oa = !0);
        });
      }
      function X(a) {
        if (Oa) return void (Oa = !1);
        var b = r[r.length - 1],
          c = a.keyCode;
        return 0 === b.__internal.buttons.length &&
          c === p.ESC &&
          !0 === b.get("closable")
          ? (H(b), !1)
          : Da.indexOf(c) > -1
          ? (V(b, function (a) {
              return a.key === c;
            }),
            !1)
          : void 0;
      }
      function Y(a) {
        var b = r[r.length - 1],
          c = a.keyCode;
        if (c === p.LEFT || c === p.RIGHT) {
          for (var d = b.__internal.buttons, e = 0; e < d.length; e += 1)
            if (document.activeElement === d[e].element)
              switch (c) {
                case p.LEFT:
                  return void d[(e || d.length) - 1].element.focus();
                case p.RIGHT:
                  return void d[(e + 1) % d.length].element.focus();
              }
        } else if (c < p.F12 + 1 && c > p.F1 - 1 && Da.indexOf(c) > -1)
          return (
            a.preventDefault(),
            a.stopPropagation(),
            V(b, function (a) {
              return a.key === c;
            }),
            !1
          );
      }
      function Z(a, b) {
        if (b) b.focus();
        else {
          var c = a.__internal.focus,
            d = c.element;
          switch (typeof c.element) {
            case "number":
              a.__internal.buttons.length > c.element &&
                (d =
                  !0 === a.get("basic")
                    ? a.elements.reset[0]
                    : a.__internal.buttons[c.element].element);
              break;
            case "string":
              d = a.elements.body.querySelector(c.element);
              break;
            case "function":
              d = c.element.call(a);
          }
          (!0 !== a.get("defaultFocusOff") &&
            ((void 0 !== d && null !== d) ||
              0 !== a.__internal.buttons.length)) ||
            (d = a.elements.reset[0]),
            d && d.focus && (d.focus(), c.select && d.select && d.select());
        }
      }
      function $(a, b) {
        if (!b)
          for (var c = r.length - 1; c > -1; c -= 1)
            if (r[c].isModal()) {
              b = r[c];
              break;
            }
        if (b && b.isModal()) {
          var d,
            e = b.elements.reset[0],
            f = b.elements.reset[1],
            g = a.relatedTarget,
            h = b.elements.root.contains(g),
            i = a.srcElement || a.target;
          if ((i === e && !h) || (i === f && g === e)) return;
          i === f || i === document.body
            ? (d = e)
            : i === e && g === f
            ? (d = _(b))
            : i === e && h && (d = _(b, !0)),
            Z(b, d);
        }
      }
      function _(a, b) {
        var c = [].slice.call(a.elements.dialog.querySelectorAll(q.tabbable));
        b && c.reverse();
        for (var d = 0; d < c.length; d += 1) {
          var e = c[d];
          if (
            e.offsetParent ||
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          )
            return e;
        }
      }
      function aa(a) {
        var b = r[r.length - 1];
        b && a.shiftKey && a.keyCode === p.TAB && b.elements.reset[1].focus();
      }
      function ba(a, b) {
        clearTimeout(b.__internal.timerIn),
          Z(b),
          (Oa = !1),
          m("onfocus", b),
          v(b.elements.dialog, w.type, b.__internal.transitionInHandler),
          c(b.elements.root, Ia.animationIn);
      }
      function ca(a, b) {
        clearTimeout(b.__internal.timerOut),
          v(b.elements.dialog, w.type, b.__internal.transitionOutHandler),
          ia(b),
          oa(b),
          b.isMaximized() && !b.get("startMaximized") && M(b),
          "function" == typeof b.__internal.destroy &&
            b.__internal.destroy.apply(b);
      }
      function da(a, b) {
        var c = a[Sa] - Qa,
          d = a[Ta] - Ra;
        Va && (d -= document.body.scrollTop),
          (b.style.left = c + "px"),
          (b.style.top = d + "px");
      }
      function ea(a, b) {
        var c = a[Sa] - Qa,
          d = a[Ta] - Ra;
        Va && (d -= document.body.scrollTop),
          (b.style.left = Math.min(Ua.maxLeft, Math.max(Ua.minLeft, c)) + "px"),
          (b.style.top = Va
            ? Math.min(Ua.maxTop, Math.max(Ua.minTop, d)) + "px"
            : Math.max(Ua.minTop, d) + "px");
      }
      function fa(a, c) {
        if (null === Xa && !c.isMaximized() && c.get("movable")) {
          var d,
            e = 0,
            f = 0;
          if (
            ("touchstart" === a.type
              ? (a.preventDefault(),
                (d = a.targetTouches[0]),
                (Sa = "clientX"),
                (Ta = "clientY"))
              : 0 === a.button && (d = a),
            d)
          ) {
            var g = c.elements.dialog;
            if (
              (b(g, Ia.capture),
              g.style.left && (e = parseInt(g.style.left, 10)),
              g.style.top && (f = parseInt(g.style.top, 10)),
              (Qa = d[Sa] - e),
              (Ra = d[Ta] - f),
              c.isModal()
                ? (Ra += c.elements.modal.scrollTop)
                : c.isPinned() && (Ra -= document.body.scrollTop),
              c.get("moveBounded"))
            ) {
              var h = g,
                i = -e,
                j = -f;
              do {
                (i += h.offsetLeft), (j += h.offsetTop);
              } while ((h = h.offsetParent));
              (Ua = {
                maxLeft: i,
                minLeft: -i,
                maxTop:
                  document.documentElement.clientHeight - g.clientHeight - j,
                minTop: -j,
              }),
                (Wa = ea);
            } else (Ua = null), (Wa = da);
            return (
              m("onmove", c),
              (Va = !c.isModal() && c.isPinned()),
              (Pa = c),
              Wa(d, g),
              b(document.body, Ia.noSelection),
              !1
            );
          }
        }
      }
      function ga(a) {
        if (Pa) {
          var b;
          "touchmove" === a.type
            ? (a.preventDefault(), (b = a.targetTouches[0]))
            : 0 === a.button && (b = a),
            b && Wa(b, Pa.elements.dialog);
        }
      }
      function ha() {
        if (Pa) {
          var a = Pa;
          (Pa = Ua = null),
            c(document.body, Ia.noSelection),
            c(a.elements.dialog, Ia.capture),
            m("onmoved", a);
        }
      }
      function ia(a) {
        Pa = null;
        var b = a.elements.dialog;
        b.style.left = b.style.top = "";
      }
      function ja(a) {
        a.get("movable")
          ? (b(a.elements.root, Ia.movable), a.isOpen() && va(a))
          : (ia(a), c(a.elements.root, Ia.movable), a.isOpen() && wa(a));
      }
      function ka(a, b, c) {
        var e = b,
          f = 0,
          g = 0;
        do {
          (f += e.offsetLeft), (g += e.offsetTop);
        } while ((e = e.offsetParent));
        var h, i;
        !0 === c
          ? ((h = a.pageX), (i = a.pageY))
          : ((h = a.clientX), (i = a.clientY));
        var j = d();
        if (
          (j &&
            ((h = document.body.offsetWidth - h),
            isNaN(Ya) || (f = document.body.offsetWidth - f - b.offsetWidth)),
          (b.style.height = i - g + _a + "px"),
          (b.style.width = h - f + _a + "px"),
          !isNaN(Ya))
        ) {
          var k = 0.5 * Math.abs(b.offsetWidth - Za);
          j && (k *= -1),
            b.offsetWidth > Za
              ? (b.style.left = Ya + k + "px")
              : b.offsetWidth >= $a && (b.style.left = Ya - k + "px");
        }
      }
      function la(a, c) {
        if (!c.isMaximized()) {
          var d;
          if (
            ("touchstart" === a.type
              ? (a.preventDefault(), (d = a.targetTouches[0]))
              : 0 === a.button && (d = a),
            d)
          ) {
            m("onresize", c),
              (Xa = c),
              (_a = c.elements.resizeHandle.offsetHeight / 2);
            var e = c.elements.dialog;
            return (
              b(e, Ia.capture),
              (Ya = parseInt(e.style.left, 10)),
              (e.style.height = e.offsetHeight + "px"),
              (e.style.minHeight =
                c.elements.header.offsetHeight +
                c.elements.footer.offsetHeight +
                "px"),
              (e.style.width = (Za = e.offsetWidth) + "px"),
              "none" !== e.style.maxWidth &&
                (e.style.minWidth = ($a = e.offsetWidth) + "px"),
              (e.style.maxWidth = "none"),
              b(document.body, Ia.noSelection),
              !1
            );
          }
        }
      }
      function ma(a) {
        if (Xa) {
          var b;
          "touchmove" === a.type
            ? (a.preventDefault(), (b = a.targetTouches[0]))
            : 0 === a.button && (b = a),
            b &&
              ka(b, Xa.elements.dialog, !Xa.get("modal") && !Xa.get("pinned"));
        }
      }
      function na() {
        if (Xa) {
          var a = Xa;
          (Xa = null),
            c(document.body, Ia.noSelection),
            c(a.elements.dialog, Ia.capture),
            (La = !0),
            m("onresized", a);
        }
      }
      function oa(a) {
        Xa = null;
        var b = a.elements.dialog;
        "none" === b.style.maxWidth &&
          ((b.style.maxWidth =
            b.style.minWidth =
            b.style.width =
            b.style.height =
            b.style.minHeight =
            b.style.left =
              ""),
          (Ya = Number.Nan),
          (Za = $a = _a = 0));
      }
      function pa(a) {
        a.get("resizable")
          ? (b(a.elements.root, Ia.resizable), a.isOpen() && xa(a))
          : (oa(a), c(a.elements.root, Ia.resizable), a.isOpen() && ya(a));
      }
      function qa() {
        for (var a = 0; a < r.length; a += 1) {
          var b = r[a];
          b.get("autoReset") && (ia(b), oa(b));
        }
      }
      function ra(b) {
        1 === r.length &&
          (u(a, "resize", qa),
          u(document.body, "keyup", X),
          u(document.body, "keydown", Y),
          u(document.body, "focus", $),
          u(document.documentElement, "mousemove", ga),
          u(document.documentElement, "touchmove", ga, !1, !1),
          u(document.documentElement, "mouseup", ha),
          u(document.documentElement, "touchend", ha),
          u(document.documentElement, "mousemove", ma),
          u(document.documentElement, "touchmove", ma, !1, !1),
          u(document.documentElement, "mouseup", na),
          u(document.documentElement, "touchend", na)),
          u(
            b.elements.commands.container,
            "click",
            b.__internal.commandsClickHandler
          ),
          u(b.elements.footer, "click", b.__internal.buttonsClickHandler),
          u(b.elements.reset[0], "focusin", b.__internal.resetHandler),
          u(b.elements.reset[0], "keydown", aa),
          u(b.elements.reset[1], "focusin", b.__internal.resetHandler),
          (Oa = !0),
          u(b.elements.dialog, w.type, b.__internal.transitionInHandler),
          b.get("modal") || ta(b),
          b.get("resizable") && xa(b),
          b.get("movable") && va(b);
      }
      function sa(b) {
        1 === r.length &&
          (v(a, "resize", qa),
          v(document.body, "keyup", X),
          v(document.body, "keydown", Y),
          v(document.body, "focus", $),
          v(document.documentElement, "mousemove", ga),
          v(document.documentElement, "mouseup", ha),
          v(document.documentElement, "mousemove", ma),
          v(document.documentElement, "mouseup", na)),
          v(
            b.elements.commands.container,
            "click",
            b.__internal.commandsClickHandler
          ),
          v(b.elements.footer, "click", b.__internal.buttonsClickHandler),
          v(b.elements.reset[0], "focusin", b.__internal.resetHandler),
          v(b.elements.reset[0], "keydown", aa),
          v(b.elements.reset[1], "focusin", b.__internal.resetHandler),
          u(b.elements.dialog, w.type, b.__internal.transitionOutHandler),
          b.get("modal") || ua(b),
          b.get("movable") && wa(b),
          b.get("resizable") && ya(b);
      }
      function ta(a) {
        u(a.elements.dialog, "focus", a.__internal.bringToFrontHandler, !0);
      }
      function ua(a) {
        v(a.elements.dialog, "focus", a.__internal.bringToFrontHandler, !0);
      }
      function va(a) {
        u(a.elements.header, "mousedown", a.__internal.beginMoveHandler),
          u(
            a.elements.header,
            "touchstart",
            a.__internal.beginMoveHandler,
            !1,
            !1
          );
      }
      function wa(a) {
        v(a.elements.header, "mousedown", a.__internal.beginMoveHandler),
          v(
            a.elements.header,
            "touchstart",
            a.__internal.beginMoveHandler,
            !1,
            !1
          );
      }
      function xa(a) {
        u(
          a.elements.resizeHandle,
          "mousedown",
          a.__internal.beginResizeHandler
        ),
          u(
            a.elements.resizeHandle,
            "touchstart",
            a.__internal.beginResizeHandler,
            !1,
            !1
          );
      }
      function ya(a) {
        v(
          a.elements.resizeHandle,
          "mousedown",
          a.__internal.beginResizeHandler
        ),
          v(
            a.elements.resizeHandle,
            "touchstart",
            a.__internal.beginResizeHandler,
            !1,
            !1
          );
      }
      function za(a) {
        u(a.elements.modal, "click", a.__internal.modalClickHandler);
      }
      function Aa(a) {
        v(a.elements.modal, "click", a.__internal.modalClickHandler);
      }
      var Ba,
        Ca,
        Da = [],
        Ea = null,
        Fa = !1,
        Ga =
          a.navigator.userAgent.indexOf("Safari") > -1 &&
          a.navigator.userAgent.indexOf("Chrome") < 0,
        Ha = {
          dimmer: '<div class="ajs-dimmer"></div>',
          modal: '<div class="ajs-modal" tabindex="0"></div>',
          dialog: '<div class="ajs-dialog" tabindex="0"></div>',
          reset: '<button class="ajs-reset"></button>',
          commands:
            '<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',
          header: '<div class="ajs-header"></div>',
          body: '<div class="ajs-body"></div>',
          content: '<div class="ajs-content"></div>',
          footer: '<div class="ajs-footer"></div>',
          buttons: {
            primary: '<div class="ajs-primary ajs-buttons"></div>',
            auxiliary: '<div class="ajs-auxiliary ajs-buttons"></div>',
          },
          button: '<button class="ajs-button"></button>',
          resizeHandle: '<div class="ajs-handle"></div>',
        },
        Ia = {
          animationIn: "ajs-in",
          animationOut: "ajs-out",
          base: "alertify",
          basic: "ajs-basic",
          capture: "ajs-capture",
          closable: "ajs-closable",
          fixed: "ajs-fixed",
          frameless: "ajs-frameless",
          hidden: "ajs-hidden",
          maximize: "ajs-maximize",
          maximized: "ajs-maximized",
          maximizable: "ajs-maximizable",
          modeless: "ajs-modeless",
          movable: "ajs-movable",
          noSelection: "ajs-no-selection",
          noOverflow: "ajs-no-overflow",
          noPadding: "ajs-no-padding",
          pin: "ajs-pin",
          pinnable: "ajs-pinnable",
          prefix: "ajs-",
          resizable: "ajs-resizable",
          restore: "ajs-restore",
          shake: "ajs-shake",
          unpinned: "ajs-unpinned",
          noTransition: "ajs-no-transition",
        },
        Ja = "",
        Ka = 0,
        La = !1,
        Ma = 0,
        Na = 0,
        Oa = !1,
        Pa = null,
        Qa = 0,
        Ra = 0,
        Sa = "pageX",
        Ta = "pageY",
        Ua = null,
        Va = !1,
        Wa = null,
        Xa = null,
        Ya = Number.Nan,
        Za = 0,
        $a = 0,
        _a = 0;
      return {
        __init: n,
        isOpen: function () {
          return this.__internal.isOpen;
        },
        isModal: function () {
          return this.elements.root.className.indexOf(Ia.modeless) < 0;
        },
        isMaximized: function () {
          return this.elements.root.className.indexOf(Ia.maximized) > -1;
        },
        isPinned: function () {
          return this.elements.root.className.indexOf(Ia.unpinned) < 0;
        },
        maximize: function () {
          return this.isMaximized() || L(this), this;
        },
        restore: function () {
          return this.isMaximized() && M(this), this;
        },
        pin: function () {
          return this.isPinned() || J(this), this;
        },
        unpin: function () {
          return this.isPinned() && K(this), this;
        },
        bringToFront: function () {
          return E(null, this), this;
        },
        moveTo: function (a, b) {
          if (!isNaN(a) && !isNaN(b)) {
            m("onmove", this);
            var c = this.elements.dialog,
              e = c,
              f = 0,
              g = 0;
            c.style.left && (f -= parseInt(c.style.left, 10)),
              c.style.top && (g -= parseInt(c.style.top, 10));
            do {
              (f += e.offsetLeft), (g += e.offsetTop);
            } while ((e = e.offsetParent));
            var h = a - f,
              i = b - g;
            d() && (h *= -1),
              (c.style.left = h + "px"),
              (c.style.top = i + "px"),
              m("onmoved", this);
          }
          return this;
        },
        resizeTo: function (a, b) {
          var c = parseFloat(a),
            d = parseFloat(b),
            e = /(\d*\.\d+|\d+)%/;
          if (!isNaN(c) && !isNaN(d) && !0 === this.get("resizable")) {
            m("onresize", this),
              ("" + a).match(e) &&
                (c = (c / 100) * document.documentElement.clientWidth),
              ("" + b).match(e) &&
                (d = (d / 100) * document.documentElement.clientHeight);
            var f = this.elements.dialog;
            "none" !== f.style.maxWidth &&
              (f.style.minWidth = ($a = f.offsetWidth) + "px"),
              (f.style.maxWidth = "none"),
              (f.style.minHeight =
                this.elements.header.offsetHeight +
                this.elements.footer.offsetHeight +
                "px"),
              (f.style.width = c + "px"),
              (f.style.height = d + "px"),
              m("onresized", this);
          }
          return this;
        },
        setting: function (a, b) {
          var c = this,
            d = G(
              this,
              this.__internal.options,
              function (a, b, d) {
                F(c, a, b, d);
              },
              a,
              b
            );
          if ("get" === d.op)
            return d.found
              ? d.value
              : void 0 !== this.settings
              ? G(
                  this,
                  this.settings,
                  this.settingUpdated || function () {},
                  a,
                  b
                ).value
              : void 0;
          if ("set" === d.op) {
            if (d.items.length > 0)
              for (
                var e = this.settingUpdated || function () {}, f = 0;
                f < d.items.length;
                f += 1
              ) {
                var g = d.items[f];
                g.found ||
                  void 0 === this.settings ||
                  G(this, this.settings, e, g.key, g.value);
              }
            return this;
          }
        },
        set: function (a, b) {
          return this.setting(a, b), this;
        },
        get: function (a) {
          return this.setting(a);
        },
        setHeader: function (b) {
          return (
            h(b)
              ? (g(this.elements.header), (this.elements.header.innerHTML = b))
              : b instanceof a.HTMLElement &&
                this.elements.header.firstChild !== b &&
                (g(this.elements.header), this.elements.header.appendChild(b)),
            this
          );
        },
        setContent: function (b) {
          return (
            h(b)
              ? (g(this.elements.content),
                (this.elements.content.innerHTML = b))
              : b instanceof a.HTMLElement &&
                this.elements.content.firstChild !== b &&
                (g(this.elements.content),
                this.elements.content.appendChild(b)),
            this
          );
        },
        showModal: function (a) {
          return this.show(!0, a);
        },
        show: function (a, d) {
          if ((n(this), this.__internal.isOpen)) {
            ia(this), oa(this), b(this.elements.dialog, Ia.shake);
            var e = this;
            setTimeout(function () {
              c(e.elements.dialog, Ia.shake);
            }, 200);
          } else {
            if (
              ((this.__internal.isOpen = !0),
              r.push(this),
              z.defaults.maintainFocus &&
                (this.__internal.activeElement = document.activeElement),
              document.body.hasAttribute("tabindex") ||
                document.body.setAttribute("tabindex", (Fa = "0")),
              "function" == typeof this.prepare && this.prepare(),
              ra(this),
              void 0 !== a && this.set("modal", a),
              o(),
              t(),
              "string" == typeof d &&
                "" !== d &&
                ((this.__internal.className = d), b(this.elements.root, d)),
              this.get("startMaximized")
                ? this.maximize()
                : this.isMaximized() && M(this),
              Q(this),
              this.elements.root.removeAttribute("style"),
              c(this.elements.root, Ia.animationOut),
              b(this.elements.root, Ia.animationIn),
              clearTimeout(this.__internal.timerIn),
              (this.__internal.timerIn = setTimeout(
                this.__internal.transitionInHandler,
                w.supported ? 1e3 : 100
              )),
              Ga)
            ) {
              var f = this.elements.root;
              (f.style.display = "none"),
                setTimeout(function () {
                  f.style.display = "block";
                }, 0);
            }
            (Ea = this.elements.root.offsetWidth),
              c(this.elements.root, Ia.hidden),
              s(),
              "function" == typeof this.hooks.onshow &&
                this.hooks.onshow.call(this),
              m("onshow", this);
          }
          return this;
        },
        close: function () {
          return (
            this.__internal.isOpen &&
              !1 !== m("onclosing", this) &&
              (sa(this),
              c(this.elements.root, Ia.animationIn),
              b(this.elements.root, Ia.animationOut),
              clearTimeout(this.__internal.timerOut),
              (this.__internal.timerOut = setTimeout(
                this.__internal.transitionOutHandler,
                w.supported ? 1e3 : 100
              )),
              b(this.elements.root, Ia.hidden),
              (Ea = this.elements.modal.offsetWidth),
              z.defaults.maintainFocus &&
                this.__internal.activeElement &&
                (this.__internal.activeElement.focus(),
                (this.__internal.activeElement = null)),
              void 0 !== this.__internal.className &&
                "" !== this.__internal.className &&
                c(this.elements.root, this.__internal.className),
              "function" == typeof this.hooks.onclose &&
                this.hooks.onclose.call(this),
              m("onclose", this),
              r.splice(r.indexOf(this), 1),
              (this.__internal.isOpen = !1),
              t()),
            r.length || "0" !== Fa || document.body.removeAttribute("tabindex"),
            this
          );
        },
        closeOthers: function () {
          return z.closeAll(this), this;
        },
        destroy: function () {
          return (
            this.__internal &&
              (this.__internal.isOpen
                ? ((this.__internal.destroy = function () {
                    j(this, n);
                  }),
                  this.close())
                : this.__internal.destroy || j(this, n)),
            this
          );
        },
      };
    })(),
    y = (function () {
      function d(a) {
        if (!a.__internal) {
          (a.__internal = {
            position: z.defaults.notifier.position,
            delay: z.defaults.notifier.delay,
          }),
            (m = document.createElement("DIV"));
          ("transitionOff" in q.notifier
            ? q.notifier.transitionOff
            : q.transitionOff) && (p = o.base + " ajs-no-transition"),
            i(a);
        }
        m.parentNode !== document.body && document.body.appendChild(m);
      }
      function e(a) {
        (a.__internal.pushed = !0), n.push(a);
      }
      function f(a) {
        n.splice(n.indexOf(a), 1), (a.__internal.pushed = !1);
      }
      function i(a) {
        switch (((m.className = p), a.__internal.position)) {
          case "top-right":
            b(m, o.top + " " + o.right);
            break;
          case "top-left":
            b(m, o.top + " " + o.left);
            break;
          case "top-center":
            b(m, o.top + " " + o.center);
            break;
          case "bottom-left":
            b(m, o.bottom + " " + o.left);
            break;
          case "bottom-center":
            b(m, o.bottom + " " + o.center);
            break;
          default:
          case "bottom-right":
            b(m, o.bottom + " " + o.right);
        }
      }
      function j(d, i) {
        function j(a, b) {
          (b.__internal.closeButton &&
            "true" !== a.target.getAttribute("data-close")) ||
            b.dismiss(!0);
        }
        function n(a, b) {
          v(b.element, w.type, n), m.removeChild(b.element);
        }
        function p(a) {
          return (
            a.__internal ||
              ((a.__internal = {
                pushed: !1,
                delay: void 0,
                timer: void 0,
                clickHandler: void 0,
                transitionEndHandler: void 0,
                transitionTimeout: void 0,
              }),
              (a.__internal.clickHandler = k(a, j)),
              (a.__internal.transitionEndHandler = k(a, n))),
            a
          );
        }
        function q(a) {
          clearTimeout(a.__internal.timer),
            clearTimeout(a.__internal.transitionTimeout);
        }
        return p({
          element: d,
          push: function (a, c) {
            if (!this.__internal.pushed) {
              e(this), q(this);
              var d, f;
              switch (arguments.length) {
                case 0:
                  f = this.__internal.delay;
                  break;
                case 1:
                  "number" == typeof a
                    ? (f = a)
                    : ((d = a), (f = this.__internal.delay));
                  break;
                case 2:
                  (d = a), (f = c);
              }
              return (
                (this.__internal.closeButton = z.defaults.notifier.closeButton),
                void 0 !== d && this.setContent(d),
                y.__internal.position.indexOf("top") < 0
                  ? m.appendChild(this.element)
                  : m.insertBefore(this.element, m.firstChild),
                (l = this.element.offsetWidth),
                b(this.element, o.visible),
                u(this.element, "click", this.__internal.clickHandler),
                this.delay(f)
              );
            }
            return this;
          },
          ondismiss: function () {},
          callback: i,
          dismiss: function (a) {
            return (
              this.__internal.pushed &&
                (q(this),
                ("function" == typeof this.ondismiss &&
                  !1 === this.ondismiss.call(this)) ||
                  (v(this.element, "click", this.__internal.clickHandler),
                  void 0 !== this.element &&
                    this.element.parentNode === m &&
                    ((this.__internal.transitionTimeout = setTimeout(
                      this.__internal.transitionEndHandler,
                      w.supported ? 1e3 : 100
                    )),
                    c(this.element, o.visible),
                    "function" == typeof this.callback &&
                      this.callback.call(this, a)),
                  f(this))),
              this
            );
          },
          delay: function (a) {
            if (
              (q(this),
              (this.__internal.delay =
                void 0 === a || isNaN(+a) ? y.__internal.delay : +a),
              this.__internal.delay > 0)
            ) {
              var b = this;
              this.__internal.timer = setTimeout(function () {
                b.dismiss();
              }, 1e3 * this.__internal.delay);
            }
            return this;
          },
          setContent: function (c) {
            if (
              (h(c)
                ? (g(this.element), (this.element.innerHTML = c))
                : c instanceof a.HTMLElement &&
                  this.element.firstChild !== c &&
                  (g(this.element), this.element.appendChild(c)),
              this.__internal.closeButton)
            ) {
              var d = document.createElement("span");
              b(d, o.close),
                d.setAttribute("data-close", !0),
                this.element.appendChild(d);
            }
            return this;
          },
          dismissOthers: function () {
            return y.dismissAll(this), this;
          },
        });
      }
      var l,
        m,
        n = [],
        o = q.notifier.classes,
        p = o.base;
      return {
        setting: function (a, b) {
          if ((d(this), void 0 === b)) return this.__internal[a];
          switch (a) {
            case "position":
              (this.__internal.position = b), i(this);
              break;
            case "delay":
              this.__internal.delay = b;
          }
          return this;
        },
        set: function (a, b) {
          return this.setting(a, b), this;
        },
        get: function (a) {
          return this.setting(a);
        },
        create: function (a, b) {
          d(this);
          var c = document.createElement("div");
          return (
            (c.className =
              o.message +
              ("string" == typeof a && "" !== a ? " " + o.prefix + a : "")),
            j(c, b)
          );
        },
        dismissAll: function (a) {
          for (var b = n.slice(0), c = 0; c < b.length; c += 1) {
            var d = b[c];
            (void 0 !== a && a === d) || d.dismiss();
          }
        },
      };
    })(),
    z = new n();
  z.dialog("alert", function () {
    return {
      main: function (a, b, c) {
        var d, e, f;
        switch (arguments.length) {
          case 1:
            e = a;
            break;
          case 2:
            "function" == typeof b ? ((e = a), (f = b)) : ((d = a), (e = b));
            break;
          case 3:
            (d = a), (e = b), (f = c);
        }
        return (
          this.set("title", d),
          this.set("message", e),
          this.set("onok", f),
          this
        );
      },
      setup: function () {
        return {
          buttons: [
            {
              text: z.defaults.glossary.ok,
              key: p.ESC,
              invokeOnClose: !0,
              className: z.defaults.theme.ok,
            },
          ],
          focus: { element: 0, select: !1 },
          options: { maximizable: !1, resizable: !1 },
        };
      },
      build: function () {},
      prepare: function () {},
      setMessage: function (a) {
        this.setContent(a);
      },
      settings: { message: void 0, onok: void 0, label: void 0 },
      settingUpdated: function (a, b, c) {
        switch (a) {
          case "message":
            this.setMessage(c);
            break;
          case "label":
            this.__internal.buttons[0].element &&
              (this.__internal.buttons[0].element.innerHTML = c);
        }
      },
      callback: function (a) {
        if ("function" == typeof this.get("onok")) {
          var b = this.get("onok").call(this, a);
          void 0 !== b && (a.cancel = !b);
        }
      },
    };
  }),
    z.dialog("confirm", function () {
      function a(a) {
        null !== c.timer &&
          (clearInterval(c.timer),
          (c.timer = null),
          (a.__internal.buttons[c.index].element.innerHTML = c.text));
      }
      function b(b, d, e) {
        a(b),
          (c.duration = e),
          (c.index = d),
          (c.text = b.__internal.buttons[d].element.innerHTML),
          (c.timer = setInterval(k(b, c.task), 1e3)),
          c.task(null, b);
      }
      var c = {
        timer: null,
        index: null,
        text: null,
        duration: null,
        task: function (b, d) {
          if (d.isOpen()) {
            if (
              ((d.__internal.buttons[c.index].element.innerHTML =
                c.text + " (&#8207;" + c.duration + "&#8207;) "),
              (c.duration -= 1),
              -1 === c.duration)
            ) {
              a(d);
              var e = d.__internal.buttons[c.index],
                f = l(c.index, e);
              "function" == typeof d.callback && d.callback.apply(d, [f]),
                !1 !== f.close && d.close();
            }
          } else a(d);
        },
      };
      return {
        main: function (a, b, c, d) {
          var e, f, g, h;
          switch (arguments.length) {
            case 1:
              f = a;
              break;
            case 2:
              (f = a), (g = b);
              break;
            case 3:
              (f = a), (g = b), (h = c);
              break;
            case 4:
              (e = a), (f = b), (g = c), (h = d);
          }
          return (
            this.set("title", e),
            this.set("message", f),
            this.set("onok", g),
            this.set("oncancel", h),
            this
          );
        },
        setup: function () {
          return {
            buttons: [
              {
                text: z.defaults.glossary.ok,
                key: p.ENTER,
                className: z.defaults.theme.ok,
              },
              {
                text: z.defaults.glossary.cancel,
                key: p.ESC,
                invokeOnClose: !0,
                className: z.defaults.theme.cancel,
              },
            ],
            focus: { element: 0, select: !1 },
            options: { maximizable: !1, resizable: !1 },
          };
        },
        build: function () {},
        prepare: function () {},
        setMessage: function (a) {
          this.setContent(a);
        },
        settings: {
          message: null,
          labels: null,
          onok: null,
          oncancel: null,
          defaultFocus: null,
          reverseButtons: null,
        },
        settingUpdated: function (a, b, c) {
          switch (a) {
            case "message":
              this.setMessage(c);
              break;
            case "labels":
              "ok" in c &&
                this.__internal.buttons[0].element &&
                ((this.__internal.buttons[0].text = c.ok),
                (this.__internal.buttons[0].element.innerHTML = c.ok)),
                "cancel" in c &&
                  this.__internal.buttons[1].element &&
                  ((this.__internal.buttons[1].text = c.cancel),
                  (this.__internal.buttons[1].element.innerHTML = c.cancel));
              break;
            case "reverseButtons":
              !0 === c
                ? this.elements.buttons.primary.appendChild(
                    this.__internal.buttons[0].element
                  )
                : this.elements.buttons.primary.appendChild(
                    this.__internal.buttons[1].element
                  );
              break;
            case "defaultFocus":
              this.__internal.focus.element = "ok" === c ? 0 : 1;
          }
        },
        callback: function (b) {
          a(this);
          var c;
          switch (b.index) {
            case 0:
              "function" == typeof this.get("onok") &&
                void 0 !== (c = this.get("onok").call(this, b)) &&
                (b.cancel = !c);
              break;
            case 1:
              "function" == typeof this.get("oncancel") &&
                void 0 !== (c = this.get("oncancel").call(this, b)) &&
                (b.cancel = !c);
          }
        },
        autoOk: function (a) {
          return b(this, 0, a), this;
        },
        autoCancel: function (a) {
          return b(this, 1, a), this;
        },
      };
    }),
    z.dialog("prompt", function () {
      var b = document.createElement("INPUT"),
        c = document.createElement("P");
      return {
        main: function (a, b, c, d, e) {
          var f, g, h, i, j;
          switch (arguments.length) {
            case 1:
              g = a;
              break;
            case 2:
              (g = a), (h = b);
              break;
            case 3:
              (g = a), (h = b), (i = c);
              break;
            case 4:
              (g = a), (h = b), (i = c), (j = d);
              break;
            case 5:
              (f = a), (g = b), (h = c), (i = d), (j = e);
          }
          return (
            this.set("title", f),
            this.set("message", g),
            this.set("value", h),
            this.set("onok", i),
            this.set("oncancel", j),
            this
          );
        },
        setup: function () {
          return {
            buttons: [
              {
                text: z.defaults.glossary.ok,
                key: p.ENTER,
                className: z.defaults.theme.ok,
              },
              {
                text: z.defaults.glossary.cancel,
                key: p.ESC,
                invokeOnClose: !0,
                className: z.defaults.theme.cancel,
              },
            ],
            focus: { element: b, select: !0 },
            options: { maximizable: !1, resizable: !1 },
          };
        },
        build: function () {
          (b.className = z.defaults.theme.input),
            b.setAttribute("type", "text"),
            (b.value = this.get("value")),
            this.elements.content.appendChild(c),
            this.elements.content.appendChild(b);
        },
        prepare: function () {},
        setMessage: function (b) {
          h(b)
            ? (g(c), (c.innerHTML = b))
            : b instanceof a.HTMLElement &&
              c.firstChild !== b &&
              (g(c), c.appendChild(b));
        },
        settings: {
          message: void 0,
          labels: void 0,
          onok: void 0,
          oncancel: void 0,
          value: "",
          type: "text",
          reverseButtons: void 0,
        },
        settingUpdated: function (a, c, d) {
          switch (a) {
            case "message":
              this.setMessage(d);
              break;
            case "value":
              b.value = d;
              break;
            case "type":
              switch (d) {
                case "text":
                case "color":
                case "date":
                case "datetime-local":
                case "email":
                case "month":
                case "number":
                case "password":
                case "search":
                case "tel":
                case "time":
                case "week":
                  b.type = d;
                  break;
                default:
                  b.type = "text";
              }
              break;
            case "labels":
              d.ok &&
                this.__internal.buttons[0].element &&
                (this.__internal.buttons[0].element.innerHTML = d.ok),
                d.cancel &&
                  this.__internal.buttons[1].element &&
                  (this.__internal.buttons[1].element.innerHTML = d.cancel);
              break;
            case "reverseButtons":
              !0 === d
                ? this.elements.buttons.primary.appendChild(
                    this.__internal.buttons[0].element
                  )
                : this.elements.buttons.primary.appendChild(
                    this.__internal.buttons[1].element
                  );
          }
        },
        callback: function (a) {
          var c;
          switch (a.index) {
            case 0:
              (this.settings.value = b.value),
                "function" == typeof this.get("onok") &&
                  void 0 !==
                    (c = this.get("onok").call(this, a, this.settings.value)) &&
                  (a.cancel = !c);
              break;
            case 1:
              "function" == typeof this.get("oncancel") &&
                void 0 !== (c = this.get("oncancel").call(this, a)) &&
                (a.cancel = !c),
                a.cancel || (b.value = this.settings.value);
          }
        },
      };
    }),
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = z)
      : "function" == typeof define && define.amd
      ? define([], function () {
          return z;
        })
      : a.alertify || (a.alertify = z);
})("undefined" != typeof window ? window : this);
// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, n, f) {
  a instanceof String && (a = String(a));
  for (var p = a.length, k = 0; k < p; k++) {
    var b = a[k];
    if (n.call(f, b, k, a)) return { i: k, v: b };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, n, f) {
        a != Array.prototype && a != Object.prototype && (a[n] = f.value);
      };
$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a
    ? a
    : "undefined" != typeof global && null != global
    ? global
    : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, n, f, p) {
  if (n) {
    f = $jscomp.global;
    a = a.split(".");
    for (p = 0; p < a.length - 1; p++) {
      var k = a[p];
      k in f || (f[k] = {});
      f = f[k];
    }
    a = a[a.length - 1];
    p = f[a];
    n = n(p);
    n != p &&
      null != n &&
      $jscomp.defineProperty(f, a, {
        configurable: !0,
        writable: !0,
        value: n,
      });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
    return a
      ? a
      : function (a, f) {
          return $jscomp.findInternal(this, a, f).v;
        };
  },
  "es6",
  "es3"
);
(function (a, n, f) {
  "function" === typeof define && define.amd
    ? define(["jquery"], a)
    : "object" === typeof exports && "undefined" === typeof Meteor
    ? (module.exports = a(require("jquery")))
    : a(n || f);
})(
  function (a) {
    var n = function (b, d, e) {
      var c = {
        invalid: [],
        getCaret: function () {
          try {
            var a = 0,
              r = b.get(0),
              h = document.selection,
              d = r.selectionStart;
            if (h && -1 === navigator.appVersion.indexOf("MSIE 10")) {
              var e = h.createRange();
              e.moveStart("character", -c.val().length);
              a = e.text.length;
            } else if (d || "0" === d) a = d;
            return a;
          } catch (C) {}
        },
        setCaret: function (a) {
          try {
            if (b.is(":focus")) {
              var c = b.get(0);
              if (c.setSelectionRange) c.setSelectionRange(a, a);
              else {
                var g = c.createTextRange();
                g.collapse(!0);
                g.moveEnd("character", a);
                g.moveStart("character", a);
                g.select();
              }
            }
          } catch (B) {}
        },
        events: function () {
          b.on("keydown.mask", function (a) {
            b.data("mask-keycode", a.keyCode || a.which);
            b.data("mask-previus-value", b.val());
            b.data("mask-previus-caret-pos", c.getCaret());
            c.maskDigitPosMapOld = c.maskDigitPosMap;
          })
            .on(
              a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask",
              c.behaviour
            )
            .on("paste.mask drop.mask", function () {
              setTimeout(function () {
                b.keydown().keyup();
              }, 100);
            })
            .on("change.mask", function () {
              b.data("changed", !0);
            })
            .on("blur.mask", function () {
              f === c.val() || b.data("changed") || b.trigger("change");
              b.data("changed", !1);
            })
            .on("blur.mask", function () {
              f = c.val();
            })
            .on("focus.mask", function (b) {
              !0 === e.selectOnFocus && a(b.target).select();
            })
            .on("focusout.mask", function () {
              e.clearIfNotMatch && !k.test(c.val()) && c.val("");
            });
        },
        getRegexMask: function () {
          for (var a = [], b, c, e, t, f = 0; f < d.length; f++)
            (b = l.translation[d.charAt(f)])
              ? ((c = b.pattern.toString().replace(/.{1}$|^.{1}/g, "")),
                (e = b.optional),
                (b = b.recursive)
                  ? (a.push(d.charAt(f)),
                    (t = { digit: d.charAt(f), pattern: c }))
                  : a.push(e || b ? c + "?" : c))
              : a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
          a = a.join("");
          t &&
            (a = a
              .replace(
                new RegExp("(" + t.digit + "(.*" + t.digit + ")?)"),
                "($1)?"
              )
              .replace(new RegExp(t.digit, "g"), t.pattern));
          return new RegExp(a);
        },
        destroyEvents: function () {
          b.off(
            "input keydown keyup paste drop blur focusout "
              .split(" ")
              .join(".mask ")
          );
        },
        val: function (a) {
          var c = b.is("input") ? "val" : "text";
          if (0 < arguments.length) {
            if (b[c]() !== a) b[c](a);
            c = b;
          } else c = b[c]();
          return c;
        },
        calculateCaretPosition: function (a) {
          var d = c.getMasked(),
            h = c.getCaret();
          if (a !== d) {
            var e = b.data("mask-previus-caret-pos") || 0;
            d = d.length;
            var g = a.length,
              f = (a = 0),
              l = 0,
              k = 0,
              m;
            for (m = h; m < d && c.maskDigitPosMap[m]; m++) f++;
            for (m = h - 1; 0 <= m && c.maskDigitPosMap[m]; m--) a++;
            for (m = h - 1; 0 <= m; m--) c.maskDigitPosMap[m] && l++;
            for (m = e - 1; 0 <= m; m--) c.maskDigitPosMapOld[m] && k++;
            h > g
              ? (h = 10 * d)
              : e >= h && e !== g
              ? c.maskDigitPosMapOld[h] ||
                ((e = h),
                (h = h - (k - l) - a),
                c.maskDigitPosMap[h] && (h = e))
              : h > e && (h = h + (l - k) + f);
          }
          return h;
        },
        behaviour: function (d) {
          d = d || window.event;
          c.invalid = [];
          var e = b.data("mask-keycode");
          if (-1 === a.inArray(e, l.byPassKeys)) {
            e = c.getMasked();
            var h = c.getCaret(),
              g = b.data("mask-previus-value") || "";
            setTimeout(function () {
              c.setCaret(c.calculateCaretPosition(g));
            }, a.jMaskGlobals.keyStrokeCompensation);
            c.val(e);
            c.setCaret(h);
            return c.callbacks(d);
          }
        },
        getMasked: function (a, b) {
          var h = [],
            f = void 0 === b ? c.val() : b + "",
            g = 0,
            k = d.length,
            n = 0,
            p = f.length,
            m = 1,
            r = "push",
            u = -1,
            w = 0;
          b = [];
          if (e.reverse) {
            r = "unshift";
            m = -1;
            var x = 0;
            g = k - 1;
            n = p - 1;
            var A = function () {
              return -1 < g && -1 < n;
            };
          } else
            (x = k - 1),
              (A = function () {
                return g < k && n < p;
              });
          for (var z; A(); ) {
            var y = d.charAt(g),
              v = f.charAt(n),
              q = l.translation[y];
            if (q)
              v.match(q.pattern)
                ? (h[r](v),
                  q.recursive &&
                    (-1 === u ? (u = g) : g === x && g !== u && (g = u - m),
                    x === u && (g -= m)),
                  (g += m))
                : v === z
                ? (w--, (z = void 0))
                : q.optional
                ? ((g += m), (n -= m))
                : q.fallback
                ? (h[r](q.fallback), (g += m), (n -= m))
                : c.invalid.push({ p: n, v: v, e: q.pattern }),
                (n += m);
            else {
              if (!a) h[r](y);
              v === y ? (b.push(n), (n += m)) : ((z = y), b.push(n + w), w++);
              g += m;
            }
          }
          a = d.charAt(x);
          k !== p + 1 || l.translation[a] || h.push(a);
          h = h.join("");
          c.mapMaskdigitPositions(h, b, p);
          return h;
        },
        mapMaskdigitPositions: function (a, b, d) {
          a = e.reverse ? a.length - d : 0;
          c.maskDigitPosMap = {};
          for (d = 0; d < b.length; d++) c.maskDigitPosMap[b[d] + a] = 1;
        },
        callbacks: function (a) {
          var g = c.val(),
            h = g !== f,
            k = [g, a, b, e],
            l = function (a, b, c) {
              "function" === typeof e[a] && b && e[a].apply(this, c);
            };
          l("onChange", !0 === h, k);
          l("onKeyPress", !0 === h, k);
          l("onComplete", g.length === d.length, k);
          l("onInvalid", 0 < c.invalid.length, [g, a, b, c.invalid, e]);
        },
      };
      b = a(b);
      var l = this,
        f = c.val(),
        k;
      d = "function" === typeof d ? d(c.val(), void 0, b, e) : d;
      l.mask = d;
      l.options = e;
      l.remove = function () {
        var a = c.getCaret();
        l.options.placeholder && b.removeAttr("placeholder");
        b.data("mask-maxlength") && b.removeAttr("maxlength");
        c.destroyEvents();
        c.val(l.getCleanVal());
        c.setCaret(a);
        return b;
      };
      l.getCleanVal = function () {
        return c.getMasked(!0);
      };
      l.getMaskedVal = function (a) {
        return c.getMasked(!1, a);
      };
      l.init = function (g) {
        g = g || !1;
        e = e || {};
        l.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
        l.byPassKeys = a.jMaskGlobals.byPassKeys;
        l.translation = a.extend({}, a.jMaskGlobals.translation, e.translation);
        l = a.extend(!0, {}, l, e);
        k = c.getRegexMask();
        if (g) c.events(), c.val(c.getMasked());
        else {
          e.placeholder && b.attr("placeholder", e.placeholder);
          b.data("mask") && b.attr("autocomplete", "off");
          g = 0;
          for (var f = !0; g < d.length; g++) {
            var h = l.translation[d.charAt(g)];
            if (h && h.recursive) {
              f = !1;
              break;
            }
          }
          f && b.attr("maxlength", d.length).data("mask-maxlength", !0);
          c.destroyEvents();
          c.events();
          g = c.getCaret();
          c.val(c.getMasked());
          c.setCaret(g);
        }
      };
      l.init(!b.is("input"));
    };
    a.maskWatchers = {};
    var f = function () {
        var b = a(this),
          d = {},
          e = b.attr("data-mask");
        b.attr("data-mask-reverse") && (d.reverse = !0);
        b.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0);
        "true" === b.attr("data-mask-selectonfocus") && (d.selectOnFocus = !0);
        if (p(b, e, d)) return b.data("mask", new n(this, e, d));
      },
      p = function (b, d, e) {
        e = e || {};
        var c = a(b).data("mask"),
          f = JSON.stringify;
        b = a(b).val() || a(b).text();
        try {
          return (
            "function" === typeof d && (d = d(b)),
            "object" !== typeof c || f(c.options) !== f(e) || c.mask !== d
          );
        } catch (w) {}
      },
      k = function (a) {
        var b = document.createElement("div");
        a = "on" + a;
        var e = a in b;
        e || (b.setAttribute(a, "return;"), (e = "function" === typeof b[a]));
        return e;
      };
    a.fn.mask = function (b, d) {
      d = d || {};
      var e = this.selector,
        c = a.jMaskGlobals,
        f = c.watchInterval;
      c = d.watchInputs || c.watchInputs;
      var k = function () {
        if (p(this, b, d)) return a(this).data("mask", new n(this, b, d));
      };
      a(this).each(k);
      e &&
        "" !== e &&
        c &&
        (clearInterval(a.maskWatchers[e]),
        (a.maskWatchers[e] = setInterval(function () {
          a(document).find(e).each(k);
        }, f)));
      return this;
    };
    a.fn.masked = function (a) {
      return this.data("mask").getMaskedVal(a);
    };
    a.fn.unmask = function () {
      clearInterval(a.maskWatchers[this.selector]);
      delete a.maskWatchers[this.selector];
      return this.each(function () {
        var b = a(this).data("mask");
        b && b.remove().removeData("mask");
      });
    };
    a.fn.cleanVal = function () {
      return this.data("mask").getCleanVal();
    };
    a.applyDataMask = function (b) {
      b = b || a.jMaskGlobals.maskElements;
      (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f);
    };
    k = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "*[data-mask]",
      dataMask: !0,
      watchInterval: 300,
      watchInputs: !0,
      keyStrokeCompensation: 10,
      useInput:
        !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) &&
        k("input"),
      watchDataMask: !1,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: { pattern: /\d/ },
        9: { pattern: /\d/, optional: !0 },
        "#": { pattern: /\d/, recursive: !0 },
        A: { pattern: /[a-zA-Z0-9]/ },
        S: { pattern: /[a-zA-Z]/ },
      },
    };
    a.jMaskGlobals = a.jMaskGlobals || {};
    k = a.jMaskGlobals = a.extend(!0, {}, k, a.jMaskGlobals);
    k.dataMask && a.applyDataMask();
    setInterval(function () {
      a.jMaskGlobals.watchDataMask && a.applyDataMask();
    }, k.watchInterval);
  },
  window.jQuery,
  window.Zepto
);
