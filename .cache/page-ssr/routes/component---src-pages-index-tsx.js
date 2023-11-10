exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./src/components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   CardGrid: () => (/* binding */ CardGrid),
/* harmony export */   CardRow: () => (/* binding */ CardRow),
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.css */ "./src/components/Card/card.css");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SmartLink */ "./src/components/SmartLink.tsx");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.tsx");





function createCard(content) {
  if ("meeting" in content) {
    const {
      meeting,
      timezone
    } = content;
    return {
      heading: meeting.semester + " Week " + (0,_utils_util__WEBPACK_IMPORTED_MODULE_3__.weekNumber)(meeting.week_number) + " • " + (0,_utils_util__WEBPACK_IMPORTED_MODULE_3__.convertDate)(meeting.time_start, "YYYY-MM-DD", timezone),
      title: meeting.title,
      image: meeting.image,
      // TODO: REPLACE
      link: meeting.slug
    };
  } else if ("event" in content) {
    const {
      event,
      timezone
    } = content;
    return {
      heading: (0,_utils_util__WEBPACK_IMPORTED_MODULE_3__.convertDate)(event.time_start, "YYYY-MM-DD", timezone),
      title: event.title,
      card_image: event.card_image,
      link: event.slug
    };
  } else if ("publication" in content) {
    const {
      publication
    } = content;
    return {
      heading: publication.publication_type.toUpperCase() + (publication.publisher ? " • " + publication.publisher : ""),
      title: publication.title,
      card_image: publication.card_image,
      link: publication.slug
    };
  } else if ("sponsor" in content) {
    const {
      sponsor
    } = content;
    return {
      card_image: sponsor.card_image
    };
  }
  throw new Error("invalid argument: content");
}
const Card = ({
  heading,
  title,
  image,
  overlay_image,
  card_image,
  link
}) => {
  var _card_image$backgroun, _card_image$backgroun2, _card_image$backgroun3, _card_image$alt, _card_image$backgroun4, _card_image$alt2, _card_image$foregroun, _card_image$foregroun2, _card_image$foregroun3, _card_image$alt3, _card_image$foregroun4, _card_image$alt4;
  const card_component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aspect-video grid pointer-events-none select-none"
  }, image || overlay_image || card_image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (image === null || image === void 0 ? void 0 : image.path) && (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(image.path) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(image.path),
    alt: image.alt,
    className: "row-span-full col-span-full"
  }), (overlay_image === null || overlay_image === void 0 ? void 0 : overlay_image.path) && (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(overlay_image.path) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row-span-full col-span-full overflow-hidden p-4 grid items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(overlay_image.path),
    alt: overlay_image.alt,
    className: "max-h-full",
    objectFit: "scale-down"
  })), card_image !== null && card_image !== void 0 && (_card_image$backgroun = card_image.background_image) !== null && _card_image$backgroun !== void 0 && _card_image$backgroun.childImageSharp || card_image !== null && card_image !== void 0 && (_card_image$backgroun2 = card_image.background) !== null && _card_image$backgroun2 !== void 0 && _card_image$backgroun2.publicURL ? (_card_image$backgroun3 = card_image.background_image) !== null && _card_image$backgroun3 !== void 0 && _card_image$backgroun3.childImageSharp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(card_image.background_image),
    alt: (_card_image$alt = card_image.alt) !== null && _card_image$alt !== void 0 ? _card_image$alt : "",
    className: "row-span-full col-span-full"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (_card_image$backgroun4 = card_image.background) === null || _card_image$backgroun4 === void 0 ? void 0 : _card_image$backgroun4.publicURL,
    alt: (_card_image$alt2 = card_image.alt) !== null && _card_image$alt2 !== void 0 ? _card_image$alt2 : "",
    className: "row-span-full col-span-full"
  }) : card_image !== null && card_image !== void 0 && card_image.background_color ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row-span-full col-span-full",
    style: {
      backgroundColor: card_image.background_color
    }
  }) : undefined, card_image !== null && card_image !== void 0 && (_card_image$foregroun = card_image.foreground_image) !== null && _card_image$foregroun !== void 0 && _card_image$foregroun.childImageSharp || card_image !== null && card_image !== void 0 && (_card_image$foregroun2 = card_image.foreground) !== null && _card_image$foregroun2 !== void 0 && _card_image$foregroun2.publicURL ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row-span-full col-span-full overflow-hidden p-[5%] grid items-center"
  }, (_card_image$foregroun3 = card_image.foreground_image) !== null && _card_image$foregroun3 !== void 0 && _card_image$foregroun3.childImageSharp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(card_image.foreground_image),
    alt: (_card_image$alt3 = card_image.alt) !== null && _card_image$alt3 !== void 0 ? _card_image$alt3 : "",
    className: "max-h-full",
    objectFit: "scale-down"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-full w-full overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (_card_image$foregroun4 = card_image.foreground) === null || _card_image$foregroun4 === void 0 ? void 0 : _card_image$foregroun4.publicURL,
    alt: (_card_image$alt4 = card_image.alt) !== null && _card_image$alt4 !== void 0 ? _card_image$alt4 : "",
    className: "object-contain mx-auto"
  }))) : undefined) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "./placeholder.png",
    alt: "Placeholder image",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2010699272.json */ "./.cache/caches/gatsby-plugin-image/2010699272.json")
  })), (title || heading) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-2"
  }, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "line-clamp-1 leading-4 m-0 font-mono font-size-small"
  }, heading), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "line-clamp-2 leading-5 mb-1"
  }, title)));
  if (link) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: link,
      className: "card-hover flex grow rounded-xl"
    }, card_component);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-grow"
  }, card_component);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);
const CardGrid = ({
  cards
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  }, cards.map((card, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: idx,
    className: "flex grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, card))));
};
const CardRow = ({
  cards,
  maxFour
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" + (maxFour ? "" : " 2xl:grid-cols-5")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grow flex"
  }, cards[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, cards[0]) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grow flex"
  }, cards[1] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, cards[1]) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grow hidden lg:flex"
  }, cards[2] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, cards[2]) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grow hidden xl:flex"
  }, cards[3] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, cards[3]) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grow hidden" + (maxFour ? "" : " 2xl:flex")
  }, cards[4] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, cards[4]) : null));
};

/***/ }),

/***/ "./src/components/Seo.tsx":
/*!********************************!*\
  !*** ./src/components/Seo.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1987709663_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1987709663.json */ "./public/page-data/sq/d/1987709663.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Seo = props => {
  const query = _public_page_data_sq_d_1987709663_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const site_name = query.site.siteMetadata.title;
  const title = props.title ? props.title : site_name;
  const description = props.description || query.site.siteMetadata.description;
  const twitter_card_type = props.image ? "summary_large_image" : "summary";
  const image = props.image ? query.site.siteMetadata.siteUrl + props.image : query.site.siteMetadata.image;
  const type = props.type || "website";
  const color = props.color || "#33cc55";
  const robots = props.disable_robots ? "noindex, nofollow" : "index, follow";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:site_name",
    content: site_name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:image",
    content: image
  }), props.video ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:video",
    content: props.video
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:video:type",
    content: "text/html"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:video:url",
    content: props.video
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:video:width",
    content: "1280"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:video:height",
    content: "720"
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "og:type",
    content: type
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "twitter:card",
    content: twitter_card_type
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "twitter:site",
    content: query.site.siteMetadata.twitterUsername
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "twitter:image",
    content: image
  }), props.video ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "twitter:player",
    content: props.video
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "twitter:player:width",
    content: "1280"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "twitter:player:height",
    content: "720"
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    property: "twitter:description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    name: "robots",
    content: robots
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    name: "format-detection",
    content: "telephone=no"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
    rel: "preload",
    as: "font",
    type: "font/woff2",
    href: "/fonts/helveticaneue.woff2",
    crossOrigin: "anonymous"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/components/SmartLink.tsx":
/*!**************************************!*\
  !*** ./src/components/SmartLink.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const SmartLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({
      to: to,
      activeClassName: activeClassName,
      partiallyActive: partiallyActive
    }, other), children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", Object.assign({
    href: to
  }, other), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartLink);

/***/ }),

/***/ "./src/pages/index.tsx?export=default":
/*!********************************************!*\
  !*** ./src/pages/index.tsx?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ "./src/components/Seo.tsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_Icons_fluentui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Icons/fluentui */ "./src/components/Icons/fluentui.tsx");






const Head = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Home"
  });
};
const IndexPage = ({
  data
}) => {
  var _data$site;
  const meeting_cards = data.allMeeting.nodes.map(meeting => (0,_components_Card__WEBPACK_IMPORTED_MODULE_3__.createCard)({
    meeting,
    timezone: meeting.timezone
  }));
  const event_cards = data.allEvent.nodes.map(event => (0,_components_Card__WEBPACK_IMPORTED_MODULE_3__.createCard)({
    event,
    timezone: event.timezone
  }));
  const publication_cards = data.allPublication.nodes.map(p => (0,_components_Card__WEBPACK_IMPORTED_MODULE_3__.createCard)({
    publication: p
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "welcome",
    className: "pb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg:order-2 pb-6 lg:w-2/3 lg:p-0 xl:w-1/2 mx-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "lg:text-6xl"
  }, "Hacking @ UIUC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (_data$site = data.site) === null || _data$site === void 0 ? void 0 : _data$site.siteMetadata.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about/",
    className: "btn-primary"
  }, "Learn more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex lg:order-1 gap-8 pr-20 sm:columns-2 sm:p-0 md:pr-20 lg:columns-3 lg:gap-12 lg:p-0 lg:pb-2 xl:gap-16 2xl:gap-16 2xl:px-28"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-6 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    className: "rounded-xl pointer-events-none select-none border-surface-100 border-2",
    src: "../images/home-promo/home-1.jpg",
    alt: "SIGPwny members concentrated on solving challenges during a CTF",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3211405681.json */ "./.cache/caches/gatsby-plugin-image/3211405681.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-0 w-full hidden sm:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    className: "rounded-xl pointer-events-none select-none border-surface-100 border-2",
    src: "../images/home-promo/home-2.jpg",
    alt: "Two SIGPwny members taking a pizza break during Fall CTF 2023",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/168800395.json */ "./.cache/caches/gatsby-plugin-image/168800395.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-12 w-full hidden lg:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    className: "rounded-xl pointer-events-none select-none border-surface-100 border-2",
    src: "../images/home-promo/home-3.jpg",
    alt: "SIGPwny helpers present on web hacking during a weekly meting",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2556337466.json */ "./.cache/caches/gatsby-plugin-image/2556337466.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex lg:order-3 gap-8 pl-20 pb-2 sm:columns-2 sm:p-0 md:pl-20 lg:columns-3 lg:gap-12 lg:p-0 xl:gap-16 2xl:gap-16 2xl:px-28"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-0 w-full hidden lg:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    className: "rounded-xl pointer-events-none select-none border-surface-100 border-2",
    src: "../images/home-promo/home-4.jpg",
    alt: "A presentation on reverse engineering during Fall CTF 2023",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4270390489.json */ "./.cache/caches/gatsby-plugin-image/4270390489.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-12 w-full hidden sm:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    className: "rounded-xl pointer-events-none select-none border-surface-100 border-2",
    src: "../images/home-promo/home-5.jpg",
    alt: "SIGPwny members laughing in front of grafitti during a spray paint social event",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/604394669.json */ "./.cache/caches/gatsby-plugin-image/604394669.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-6 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    className: "rounded-xl pointer-events-none select-none border-surface-100 border-2",
    src: "../images/home-promo/home-6.jpg",
    alt: "Two SIGPwny members solving Fall CTF 2023 challenges",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/455376248.json */ "./.cache/caches/gatsby-plugin-image/455376248.json")
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "meetings",
    className: "pb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row gap-1 justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "m-0"
  }, "Meetings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/meetings/",
    className: "self-start button !text-white bg-surface-100 hover:bg-surface-150"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "View all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Icons_fluentui__WEBPACK_IMPORTED_MODULE_4__.ChevronRightRegular, {
    className: "flex-none"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Card__WEBPACK_IMPORTED_MODULE_3__.CardRow, {
    cards: meeting_cards
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "publications",
    className: "pb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row gap-1 justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "m-0"
  }, "Publications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/publications/",
    className: "self-start button !text-white bg-surface-100 hover:bg-surface-150"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "View all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Icons_fluentui__WEBPACK_IMPORTED_MODULE_4__.ChevronRightRegular, {
    className: "flex-none"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Card__WEBPACK_IMPORTED_MODULE_3__.CardRow, {
    cards: publication_cards
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "events",
    className: "pb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row gap-1 justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "m-0"
  }, "Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/events/",
    className: "self-start button !text-white bg-surface-100 hover:bg-surface-150"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "View all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Icons_fluentui__WEBPACK_IMPORTED_MODULE_4__.ChevronRightRegular, {
    className: "flex-none"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Card__WEBPACK_IMPORTED_MODULE_3__.CardRow, {
    cards: event_cards
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const query = "3587503168";

/***/ }),

/***/ "./src/components/Card/card.css":
/*!**************************************!*\
  !*** ./src/components/Card/card.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/168800395.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/168800395.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAACAAGCf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/2gAMAwEAAhADEAAAAT4pAtuRc1rihaEf/8QAHhAAAQQBBQAAAAAAAAAAAAAABgMEBQcAAQIRFBb/2gAIAQEAAQUCY2y9ZY4KZZAfjrtLBpOuIWMI9imnXSK+PS//xAAgEQACAgMAAQUAAAAAAAAAAAABAwIRBBIhAAUVIlGB/9oACAEDAQE/AcrEZj+ne4a47VAMiIHdLRNcVq3pICjpNyysEaaiVwHISsx+NHhrjIkfloBr6vvn/8QAIBEAAgEDBAMAAAAAAAAAAAAAAQIDBRESAAQhIyIxQf/aAAgBAgEBPwGmybOo1UUxlngnVo5S6rFNCyyO0saXl7rBUfLyyyxGbhiyiNSAesggWJhkBI4sSBu7An6BwPQ41//EACQQAAICAQQCAQUAAAAAAAAAAAIDAQQFERITFAAhMQYiQlFi/9oACAEBAAY/AsUxmWv1VHikYO8dha7ZQVZHQvJNvXCH64sa9mHgwXTbGIBbhmIOaWCzS84vIOr2aqxr44bnObErXaax5VFgpdRyz+9XEMLIijWJ0fiaX0/UyakW3l3LhJU5hMKC28NfKipQJHahcRJyYLh0lqzaOboZqoF2nj7mOuU0bmIBNmwwlvZHVNJFzLQkGCckBgEDI6a+P4ZJfq+cCJlsGYvXExxr12LEVKWAgsRARGIiI8zkbQ9ZBselhH4h/Pz+5+Zn3Pn/xAAYEAEBAQEBAAAAAAAAAAAAAAABEQAhMf/aAAgBAQABPyHcoONAZF6kw8GkE/xL2LfrxavNz5axtBw3b6HXrekS6GpIpLkCOtJggOxoEMEOFTsFSqlQord//9oADAMBAAIAAwAAABDbH//EABcRAQEBAQAAAAAAAAAAAAAAAAERIQD/2gAIAQMBAT8QxEXkktAVO1R8FijWQARiJAIiAiKC5//EABcRAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQIBAT8Qo0xdWQCjRFZjGu4LsKOM6tao9b//xAAXEAEBAQEAAAAAAAAAAAAAAAABABEx/9oACAEBAAE/EDVa+AVrsO9silziW0x5pstomprbWRoRobSm4TKVnMUrr02fh5fCGMYq4HMh1ABD1KPYeX//2Q=="},"images":{"fallback":{"src":"/static/2b695c609c871033588960c0d3811fab/fda31/home-2.jpg","srcSet":"/static/2b695c609c871033588960c0d3811fab/4a9d8/home-2.jpg 360w,\\n/static/2b695c609c871033588960c0d3811fab/b19bf/home-2.jpg 480w,\\n/static/2b695c609c871033588960c0d3811fab/5d504/home-2.jpg 720w,\\n/static/2b695c609c871033588960c0d3811fab/bc134/home-2.jpg 1280w,\\n/static/2b695c609c871033588960c0d3811fab/8cf01/home-2.jpg 1920w,\\n/static/2b695c609c871033588960c0d3811fab/fda31/home-2.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/2b695c609c871033588960c0d3811fab/c27d8/home-2.webp 360w,\\n/static/2b695c609c871033588960c0d3811fab/0df1a/home-2.webp 480w,\\n/static/2b695c609c871033588960c0d3811fab/ddf6e/home-2.webp 720w,\\n/static/2b695c609c871033588960c0d3811fab/c2dd8/home-2.webp 1280w,\\n/static/2b695c609c871033588960c0d3811fab/702da/home-2.webp 1920w,\\n/static/2b695c609c871033588960c0d3811fab/cbb32/home-2.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":1701}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2010699272.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2010699272.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/d3185a8fd9474deeb9d243c59fbf9eef/49e4e/placeholder.png","srcSet":"/static/d3185a8fd9474deeb9d243c59fbf9eef/67ff5/placeholder.png 360w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/c6b60/placeholder.png 480w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/1dc00/placeholder.png 720w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/49e4e/placeholder.png 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/d3185a8fd9474deeb9d243c59fbf9eef/c27d8/placeholder.webp 360w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/0df1a/placeholder.webp 480w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/ddf6e/placeholder.webp 720w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/c2dd8/placeholder.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":720}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2556337466.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2556337466.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAYJA//EABQBAQAAAAAAAAAAAAAAAAAAAAb/2gAMAwEAAhADEAAAAVCcdRlcckmaaiM7/8QAGxAAAwACAwAAAAAAAAAAAAAAAwQFAgYBBxX/2gAIAQEAAQUCl7efwdiXrVKy7eXC9TEY+nSxJOUewmsF/wD/xAAeEQABBAMAAwAAAAAAAAAAAAABAgMREgAhMQQiwf/aAAgBAwEBPwHyG23bWsDRpaI5s1XcnewJTE1UT3Ckyfc9PI+jP//EACARAAIBBAEFAAAAAAAAAAAAAAECEQADBBIhEyIxUYH/2gAIAQIBAT8Bxsl7EAKpHXu2nmZgKrIE8AAFjPsRSqGAbZhtzHbwD8r/xAAiEAACAgEEAgMBAAAAAAAAAAACAwEEEgAFERMhMQYUIiT/2gAIAQEABj8Cub4NPc7l1DnwpTrfb9VBjAS627uE7cwQ939ATahZworMSAzqzdtISzc9wI3PUKxQXatfLBgXEQlM4/lK2keHmOfUIi1uFxLIUEYBYsmOA/kJie/iPEcYj4DjGPWn3VprrtN+P1HE5ddAH224QNlgYriFE2DLKVQHuZjidbVuU0UfdubXRdYfjORsdUWTSx5wDMpmShYjHMz486clS8VKIlrDM5gQFh4jHJTPEa//xAAYEAEBAQEBAAAAAAAAAAAAAAABESEAMf/aAAgBAQABPyGsaHJwvZy2GV6yABjBNGppnoNPWEEhFikUAQH766t8a5RfYORXlMH8BeI6PSxU1AkETHAVh3//2gAMAwEAAgADAAAAEHPv/8QAGREBAQEBAQEAAAAAAAAAAAAAAREhMUFR/9oACAEDAQE/EAVSKYp7AThARlk1g+GBvCrhlVft9//EABkRAQADAQEAAAAAAAAAAAAAAAEAESExcf/aAAgBAgEBPxAEvpJgUC1QoJDKgsAAg4CGpws6+s//xAAXEAEBAQEAAAAAAAAAAAAAAAABEQBx/9oACAEBAAE/EEnuHxr5rwyEm39BuslmVwOdgf6cXUUiCEHuohRD6xy4Uu1m5NAFa2J8qxy49JInbBUgZv/Z"},"images":{"fallback":{"src":"/static/49f7c049b348606a4f03b1b06a16c06f/6d04a/home-3.jpg","srcSet":"/static/49f7c049b348606a4f03b1b06a16c06f/4a9d8/home-3.jpg 360w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/b19bf/home-3.jpg 480w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/5d504/home-3.jpg 720w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/bc134/home-3.jpg 1280w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/8cf01/home-3.jpg 1920w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/6d04a/home-3.jpg 3207w","sizes":"(min-width: 3207px) 3207px, 100vw"},"sources":[{"srcSet":"/static/49f7c049b348606a4f03b1b06a16c06f/c27d8/home-3.webp 360w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/0df1a/home-3.webp 480w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/ddf6e/home-3.webp 720w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/c2dd8/home-3.webp 1280w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/702da/home-3.webp 1920w,\\n/static/49f7c049b348606a4f03b1b06a16c06f/c36bd/home-3.webp 3207w","type":"image/webp","sizes":"(min-width: 3207px) 3207px, 100vw"}]},"width":3207,"height":1804}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3211405681.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3211405681.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAkFBgcI/8QAFgEBAQEAAAAAAAAAAAAAAAAABQQH/9oADAMBAAIQAxAAAAGSz3jypnKMiF7EOkf/xAAaEAEAAgMBAAAAAAAAAAAAAAAEAQMFBgcC/9oACAEBAAEFAkdktmDdV3bE+Lu7OhRGKAbH7Lm9kW1zbrP/xAAjEQEAAgEDAgcAAAAAAAAAAAABAgMRBAUhEkEABhMUIjEy/9oACAEDAQE/AYVanX7hRVG0jbrLOplL85trjdyQrImS0EK0EenhMPkOuHxd0nJAzL2cI5cC8eu474Mvbl+/H//EACIRAAIBAwMFAQAAAAAAAAAAAAECAwQREgATIRQxUXGBkf/aAAgBAgEBPwHboaKhY9MGip0EaqcmYCKUxAB3lMnBjJDbmTKRn20ShPEKqPG5I1vtxf8AB61//8QAJRAAAgIBAwQBBQAAAAAAAAAAAgMBBAUREhMABiEjMRQVIjJR/9oACAEBAAY/AsPT7ZwOWu31XCvXUTTZ9Jdx5qZEVyuVmnuiJsgxiOIzh6gjZGzXqzlsjha7sWfcEIG/drTWp4v7gPHaxo2K737VVmBACgue3XKGrNTHGaxu157eFQU7b6iOUbwmxCi9bCXs9ZaFtIfiSCTjQTgR7cGk46ka2I0rTw/q1sQc8e3VvnXmn2yX5ye6InrC4zNXyu46nkUPr0JVXRTF5mbGWCr1kpU2ww9SY9om5kke853lqD2W7BOeqGuZzM3MYRHuMtC8lPjz/IiPiOv/xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAhMUH/2gAIAQEAAT8h1YLuN6VpapG4O8iaPo+jj/b5E9hvdLQqgfIgN/vFnwhErSLJSt0GejYr8mFqKxgV4hIBXgaA/9oADAMBAAIAAwAAABCYz//EABcRAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQMBAT8QIKhIBbgLO08DpMqGZw59aHCFqv/EABcRAQEBAQAAAAAAAAAAAAAAAAEhETH/2gAIAQIBAT8QSdI01EAVCQOlCkXjGoGGdqNtI4f/xAAYEAEBAQEBAAAAAAAAAAAAAAABEQAQIf/aAAgBAQABPxAfVINbN0u/24QWS2oBqIH2F6oWtA2MbZkUkwpQBSSEC7wwdpcNVNHszvyhm3GAOQqKQGJ//9k="},"images":{"fallback":{"src":"/static/9820ab273158daea2322d3d2b723df1f/3336e/home-1.jpg","srcSet":"/static/9820ab273158daea2322d3d2b723df1f/fb1dd/home-1.jpg 360w,\\n/static/9820ab273158daea2322d3d2b723df1f/b19bf/home-1.jpg 480w,\\n/static/9820ab273158daea2322d3d2b723df1f/5d504/home-1.jpg 720w,\\n/static/9820ab273158daea2322d3d2b723df1f/bc134/home-1.jpg 1280w,\\n/static/9820ab273158daea2322d3d2b723df1f/8cf01/home-1.jpg 1920w,\\n/static/9820ab273158daea2322d3d2b723df1f/3336e/home-1.jpg 2783w","sizes":"(min-width: 2783px) 2783px, 100vw"},"sources":[{"srcSet":"/static/9820ab273158daea2322d3d2b723df1f/52337/home-1.webp 360w,\\n/static/9820ab273158daea2322d3d2b723df1f/0df1a/home-1.webp 480w,\\n/static/9820ab273158daea2322d3d2b723df1f/ddf6e/home-1.webp 720w,\\n/static/9820ab273158daea2322d3d2b723df1f/c2dd8/home-1.webp 1280w,\\n/static/9820ab273158daea2322d3d2b723df1f/702da/home-1.webp 1920w,\\n/static/9820ab273158daea2322d3d2b723df1f/aafc0/home-1.webp 2783w","type":"image/webp","sizes":"(min-width: 2783px) 2783px, 100vw"}]},"width":2783,"height":1565}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4270390489.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4270390489.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBAUH/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgME/9oADAMBAAIQAxAAAAGZMxK2wop0ocP/xAAbEAEAAgIDAAAAAAAAAAAAAAAFBAcCBgMTFv/aAAgBAQABBQJVms4UY9OuRMeOOb0bSMWQMwvP8fWp8NDUv//EACMRAAIBAwMEAwAAAAAAAAAAAAECAwQREgUTIwAVISIxUXH/2gAIAQMBAT8BqK59OranT5wZJ6OeGnLxMNnmu4YZxiSQCJApXhu7H2xWz97jFst4NZSQI42HkA/O6t/3EX+uv//EACARAAICAgICAwAAAAAAAAAAAAECAwQSExExAAUGFiL/2gAIAQIBAT8BT43WvUa3sKra4b9e1OiT7NmdRoonEgjkwUPPKxVxsIiQfnNzr+rKScMCuTAFrMwJxbjkgQsB11keOufP/8QAIRAAAwEAAgICAwEAAAAAAAAAAQIDBAUSABMGFBEhMRX/2gAIAQEABj8C2ZX4fkCJ5wv3ZP2Ye0WqOmmm17U0hHdi8vfUvZypLFz5pz24vl9B6Ns1/b5njtX+f9aWdmzJQcqO6aM95NH+LQr6ZK5RgsK8rD5bh06kfXOXH25T6j49F7PivM6tMmJplM+/qBzhwyyYgHz49Dj8coz3tyWrWH7aDa35iVJfU1nWcu7CEUZY51ZlhOakjz0d4BM/GX2QYYsQtLSkHcVnpGf7C/snsor0dSUdWQ9fMN9mdL1D1iHPZfxKJE5IAhVQqIAq/r+Dz//EABkQAQEBAQEBAAAAAAAAAAAAAAERACExQf/aAAgBAQABPyF9MtVylSC9F8dmAr/KEm43cD29yHY1hLnIai5fTlEiVjUIKRFl/YXTkLslwmGyFah8CEfN/9oADAMBAAIAAwAAABAY/wD/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAh/9oACAEDAQE/EJ64AyLsjHSwRzEDBDrHG5LKqrF5/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREhAP/aAAgBAgEBPxBfuLZs04EqaBcoYJp5bLXciECNP//EABcQAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQEAAT8QSEpTwjc5t1wxvKKBhVYpedEa4RNKDQrH1RlUZPsp5L8H0ps12yTal1aMuqFU761FHXQX/9k="},"images":{"fallback":{"src":"/static/9a37877b1ae9183a43b77f044063175d/7d4d1/home-4.jpg","srcSet":"/static/9a37877b1ae9183a43b77f044063175d/4a9d8/home-4.jpg 360w,\\n/static/9a37877b1ae9183a43b77f044063175d/b19bf/home-4.jpg 480w,\\n/static/9a37877b1ae9183a43b77f044063175d/5d504/home-4.jpg 720w,\\n/static/9a37877b1ae9183a43b77f044063175d/bc134/home-4.jpg 1280w,\\n/static/9a37877b1ae9183a43b77f044063175d/8cf01/home-4.jpg 1920w,\\n/static/9a37877b1ae9183a43b77f044063175d/7d4d1/home-4.jpg 3312w","sizes":"(min-width: 3312px) 3312px, 100vw"},"sources":[{"srcSet":"/static/9a37877b1ae9183a43b77f044063175d/c27d8/home-4.webp 360w,\\n/static/9a37877b1ae9183a43b77f044063175d/0df1a/home-4.webp 480w,\\n/static/9a37877b1ae9183a43b77f044063175d/ddf6e/home-4.webp 720w,\\n/static/9a37877b1ae9183a43b77f044063175d/c2dd8/home-4.webp 1280w,\\n/static/9a37877b1ae9183a43b77f044063175d/702da/home-4.webp 1920w,\\n/static/9a37877b1ae9183a43b77f044063175d/28bae/home-4.webp 3312w","type":"image/webp","sizes":"(min-width: 3312px) 3312px, 100vw"}]},"width":3312,"height":1863}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/455376248.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/455376248.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAgFBgf/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/aAAwDAQACEAMQAAABq2lSybyVe2AuA+L/AP/EABwQAAEEAwEAAAAAAAAAAAAAAAUCAwQGAAEVB//aAAgBAQABBQKXb7B13rwwGKJtV5H6eGRIQ70IXA485KXM/8QAHhEAAwACAwADAAAAAAAAAAAAAQIDBBESEyEAImH/2gAIAQMBAT8BfDfD7MllxslhJlvKk1RNPB1LpRJks4FgRymh2vjj6la41EpRVsnFXYDljknW/NnvGz+6G/n/xAAgEQACAgICAgMAAAAAAAAAAAABAgMRBBIFEwAxIjJB/9oACAECAQE/AeJ5zEz5ocNo8yKKVikLpIpfseVYl7Fd21jQxNrq7/fbW7BXLBUFoflQupEAJ/SAcc1furNer8//xAAlEAACAgEEAQMFAAAAAAAAAAACAwEEBQAGERIUEyIxITI0UVL/2gAIAQEABj8Cv44s3n1zi5tg26++yqNiwvILlyVt/HCWJSZ9fGhkB1OJgJiTqoPdFv3oXWszbdbNtJVvt3VYkVgnmTYPuSJhzLfXAYDg/Cq7pw9ZNcmAIlurDEZ8sI5afk7gxzoKZPrIlTRx1+g8awSEi4lP3gdJo2bly9JVUYvNEpHa6+wYgMoT9pRJCoAKZAYjTctFcRyMXKa/JAmARBLOOpiBwtkcf2Bfv51VNgAZlTTJEYCRTPJ/MzGv/8QAGRABAQEBAQEAAAAAAAAAAAAAAREAITGR/9oACAEBAAE/IRPKtkekEIhN/nu+PNsTyI2y5Nm7HG3S9BpOLStSyH5QvlCo+9oOtc5AnIkTrJuZFldXX7v/2gAMAwEAAgADAAAAEE8v/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREhAP/aAAgBAwEBPxB1HG6MENEQZHyx7wRlwYgAIwWDA//EABcRAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQIBAT8QORXzjQBqAwQL0fSpnMnQZVp2Qgu//8QAGBABAQEBAQAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8QkGwchlVGtNRsW4/kpbGPNxPDx0g0z+ShWyCSBUUnAEheHbGKHZMhew0yxXX5THUMqvfS3//Z"},"images":{"fallback":{"src":"/static/a36f9936708b21815867b7c7feab8ba9/ff80e/home-6.jpg","srcSet":"/static/a36f9936708b21815867b7c7feab8ba9/4a9d8/home-6.jpg 360w,\\n/static/a36f9936708b21815867b7c7feab8ba9/b19bf/home-6.jpg 480w,\\n/static/a36f9936708b21815867b7c7feab8ba9/5d504/home-6.jpg 720w,\\n/static/a36f9936708b21815867b7c7feab8ba9/bc134/home-6.jpg 1280w,\\n/static/a36f9936708b21815867b7c7feab8ba9/8cf01/home-6.jpg 1920w,\\n/static/a36f9936708b21815867b7c7feab8ba9/ff80e/home-6.jpg 2935w","sizes":"(min-width: 2935px) 2935px, 100vw"},"sources":[{"srcSet":"/static/a36f9936708b21815867b7c7feab8ba9/c27d8/home-6.webp 360w,\\n/static/a36f9936708b21815867b7c7feab8ba9/0df1a/home-6.webp 480w,\\n/static/a36f9936708b21815867b7c7feab8ba9/ddf6e/home-6.webp 720w,\\n/static/a36f9936708b21815867b7c7feab8ba9/c2dd8/home-6.webp 1280w,\\n/static/a36f9936708b21815867b7c7feab8ba9/702da/home-6.webp 1920w,\\n/static/a36f9936708b21815867b7c7feab8ba9/99498/home-6.webp 2935w","type":"image/webp","sizes":"(min-width: 2935px) 2935px, 100vw"}]},"width":2935,"height":1651}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/604394669.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/604394669.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAcJBv/EABYBAQEBAAAAAAAAAAAAAAAAAAYDBP/aAAwDAQACEAMQAAABUbVn4stlaymjEBL/xAAZEAADAQEBAAAAAAAAAAAAAAADBAUGARH/2gAIAQEAAQUCm6B+ukC+wnPm+up1jmFN5dsIgwpzFif/xAAfEQACAgMAAgMAAAAAAAAAAAACAwEEERMhABIFMWH/2gAIAQMBAT8BvaGV2Unp902aSa1hexpLfkkPEyFjC1smVhsYiVmQE1BeyWGJj8NWiIhaFwH3ESxme9nPJ7n9nz//xAAgEQADAAEEAgMAAAAAAAAAAAABAgMRAAQSIQUxIzNC/9oACAECAQE/AfGPefzSqoKbnc1nylImWHomJkIPWVCigf60bIIxo08sxyN2GB/T0srH12wQcQTjvj1r/8QAJBAAAwABBAMAAQUAAAAAAAAAAQIDBAUREhMAISIUFTEyM0L/2gAIAQEABj8C0uuBrObpn5pz+nTsnPATFx/1DGweqS/BJrkF+qhkX5VDF9l+Ms1yL2vL6zKafirW8Uihi9Hur0iIvkUI/wApiqf2BfyWTnx1rGrUB0nLJ7E6HAeTDi0ynJW+kdA4fkfalT49JUadOdk5zPBws9cgVVWXZkAJ3+SORALblV2fBxNRyoY2bjWXKnOhBqr9fNTT+0ButCQrjdlDfy9+HttWpTOyUU0o1GCASIXk5J4jc7Df0PQ9ef/EABgQAQEBAQEAAAAAAAAAAAAAAAERIQAx/9oACAEBAAE/IdzqC5Rmg5lwuyIb77UEV7ZLnGyPqNJ6UHAikk5wbptYANogcW31EWjqZ4pThvAC0g6NtQ2YA//aAAwDAQACAAMAAAAQnP8A/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxB2tzDjrgccrp5R4QpjLJRSVVF1VWf/xAAZEQEAAwEBAAAAAAAAAAAAAAABESExAGH/2gAIAQIBAT8Qa3HWfgiE0b4QauqQJ+q0RQtTvf/EABgQAQEBAQEAAAAAAAAAAAAAAAEAERAx/9oACAEBAAE/EPZlaq/SB1LvIGBlXPHiFF7m2bdKW9X0EARzWUjumyDiWpx8slnKOudUFeNZh0dFXuGBff/Z"},"images":{"fallback":{"src":"/static/17d7444d813f80a38c298a46a1973396/adc2a/home-5.jpg","srcSet":"/static/17d7444d813f80a38c298a46a1973396/4a9d8/home-5.jpg 360w,\\n/static/17d7444d813f80a38c298a46a1973396/b19bf/home-5.jpg 480w,\\n/static/17d7444d813f80a38c298a46a1973396/5d504/home-5.jpg 720w,\\n/static/17d7444d813f80a38c298a46a1973396/bc134/home-5.jpg 1280w,\\n/static/17d7444d813f80a38c298a46a1973396/8cf01/home-5.jpg 1920w,\\n/static/17d7444d813f80a38c298a46a1973396/adc2a/home-5.jpg 3587w","sizes":"(min-width: 3587px) 3587px, 100vw"},"sources":[{"srcSet":"/static/17d7444d813f80a38c298a46a1973396/c27d8/home-5.webp 360w,\\n/static/17d7444d813f80a38c298a46a1973396/0df1a/home-5.webp 480w,\\n/static/17d7444d813f80a38c298a46a1973396/ddf6e/home-5.webp 720w,\\n/static/17d7444d813f80a38c298a46a1973396/c2dd8/home-5.webp 1280w,\\n/static/17d7444d813f80a38c298a46a1973396/702da/home-5.webp 1920w,\\n/static/17d7444d813f80a38c298a46a1973396/454e8/home-5.webp 3587w","type":"image/webp","sizes":"(min-width: 3587px) 3587px, 100vw"}]},"width":3587,"height":2018}');

/***/ }),

/***/ "./public/page-data/sq/d/1987709663.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1987709663.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"SIGPwny","description":"SIGPwny is a student-run organization at the University of Illinois Urbana-Champaign focused on information security and privacy.","image":"https://sigpwny.com/pwny8-dark-512x512.png","siteUrl":"https://sigpwny.com","twitterUsername":"@sigpwny"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map