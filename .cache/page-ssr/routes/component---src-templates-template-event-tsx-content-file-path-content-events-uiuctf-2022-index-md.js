exports.id = "component---src-templates-template-event-tsx-content-file-path-content-events-uiuctf-2022-index-md";
exports.ids = ["component---src-templates-template-event-tsx-content-file-path-content-events-uiuctf-2022-index-md"];
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

/***/ "./content/events/uiuctf/2022/index.md":
/*!*********************************************!*\
  !*** ./content/events/uiuctf/2022/index.md ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/


function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a",
    br: "br",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h2, null, "Information"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://youtu.be/Wl8TsiUgzmk"
  }, "Trailer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.br), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://youtu.be/OYjxHoWDhxE"
  }, "Closing ceremony")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h2, null, "Writeups"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "For UIUCTF 2022 we paid out $1,300 in writeup prizes. We prioritize concise technical communication and writeups that are fun to read and learn from, including those written from/for the perspective of beginners. Here are all writeups that won."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.thead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.th, null, "Challenge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.th, null, "Author"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tbody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://hackmd.io/cqdzQizWRvSzCwY926S1ZA"
  }, "Bro-key-n")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "idek - EggRoll")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://imp.ress.me/blog/2022-08-01/uiuctf-2022/#bro-key-n"
  }, "Bro-key-n")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "/bad - /bad")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://imp.ress.me/blog/2022-08-01/uiuctf-2022/#sussy-ml"
  }, "Sussy ML")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "/bad - /bad")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://imp.ress.me/blog/2022-08-01/uiuctf-2022/#blackboxwarrior"
  }, "blackboxwarrior")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "/bad - /bad")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://docs.google.com/document/d/1ZBxBOPXPwhuA40-57mup6j7NHM2EOHdASWq73i7GZqI/"
  }, "Collection")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "ohm - BigMoneyBenjamin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/zolutal/ctf-writeups/blob/main/2022/uiuctf/odd-shell/README.md"
  }, "odd shell")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Kernel Sanders - Kernel Sanders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://spclr.ch/uiuctf-2022-revop-1-solve"
  }, "revop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "m0unt41n - TheBadGod")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/knittingirl/CTF-Writeups/tree/main/pwn_challs/UIUCTF22/no-syscalls-allowed.c"
  }, "no-syscalls-allowed.c")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "KnightSec - knittingirl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/peace-ranger/CTF-WriteUps/blob/main/2022/UIUCTF/odd-shell/README.md"
  }, "odd shell")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "IUT GENESIS - PEACE RANGER")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://nomnom-ctf.github.io/website/uiuctf-2022/"
  }, "asr")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "NestingDoll - nomnom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/silly-lily/ctf-writeups/tree/main/2022%20UIUCTF/Everyones%20A%20Critic%201"
  }, "Everyone's A Critic 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Rainbow_Unicorns<3 - li16ly")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/f4c31e55/writeups/tree/main/odd-shell#odd-shell"
  }, "odd shell")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "侍 - f4c31e55")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/knittingirl/CTF-Writeups/blob/main/reversing_challs/UIUCTF22/Pierated%20Art/ReadMe.md"
  }, "Pierated Art")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "KnightSec - knittingirl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://hackmd.io/@kiona/SyEOq9Lac"
  }, "Wringing Rings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "TTT - kiona")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/flocto/writeups/tree/main/2022/UIUCTF/pierated"
  }, "Pierated Art")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "CHCC - flocto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/flocto/writeups/tree/main/2022/UIUCTF/rings"
  }, "Wringing Rings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "CHCC - flocto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://ctf0.de/posts/uiuctf2022-mom-can-we-have-aes/"
  }, "Mom can we have AES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "CyberTaskForceZero - Minei3oat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/daeMOn63/ctf-writeups/tree/main/uiuctf22/Dads_Rules"
  }, "Dad's Rules")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "FluffyPwny - daeMOn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/daeMOn63/ctf-writeups/tree/main/uiuctf22/Dads_Rules_Fixed"
  }, "Dad's Rules Fixed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "FluffyPwny - daeMOn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/BYU-CTF-group/writeups/tree/main/UIUCTF_2022/a%20horse%20with%20no%20names"
  }, "A Horse with No Names")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "BYU Cyberia - Legoclones")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/BYU-CTF-group/writeups/tree/main/UIUCTF_2022/easy%20math%201"
  }, "Easy Math 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "BYU Cyberia - Legoclones")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/BYU-CTF-group/writeups/tree/main/UIUCTF_2022/safepy"
  }, "safepy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "BYU Cyberia - Legoclones")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/bijoy26/ctf-journal/blob/main/uiuctf-2022/web/ARPwny/README.md#-solution-tldr"
  }, "AR Pwny")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "F!NDERS_KEEPERS - CryptoSec26")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/BYU-CTF-group/writeups/tree/main/UIUCTF_2022/odd%20shell"
  }, "odd shell")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "BYU Cyberia - Legoclones")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/nikosChalk/ctf-writeups/blob/master/uiuctf22/jail/a-horse-with-no-names/README.md"
  }, "A Horse with No Names")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "vubar - Fane")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/nikosChalk/ctf-writeups/blob/master/uiuctf22/jail/a-horse-with-no-neighs/README.md"
  }, "A Horse with No Neighs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "vubar - Fane")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/nikosChalk/ctf-writeups/blob/master/uiuctf22/jail/safepy/README.md"
  }, "safepy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "vubar - Fane")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://spicy-walnut-eb5.notion.site/Collection-50pts-47-solves-f3ff1a9b719d46b3ba98ae35135ed5ee"
  }, "Collection")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Belgian Red Daemons - snocc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/krystof1119/ctf-writeups/blob/master/uiuctf/2022/woeby.md#initial-reconnaissance"
  }, "woeby")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "MMUs_are_overrated - krystof1119")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://hackmd.io/@cupr1c/ByUSL1j6q"
  }, "Bro-key-n")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Phiat Lux - cupr1c")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://pagabuc.me/blog/smm-cowsay-1-and-2-uiuctf-2022"
  }, "SMM Cowsay 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Shellphish - pagabuc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://pagabuc.me/blog/smm-cowsay-1-and-2-uiuctf-2022"
  }, "SMM Cowsay 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Shellphish - pagabuc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://irissec.xyz/articles/categories/netsec/2022-08-07/A-Dive-Into-IPv6-Forcing-Hosts-to-Change-IPs-Using-Rogue-Router-Advertisements"
  }, "Dad's Rules")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "IrisSec - skat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://irissec.xyz/articles/categories/netsec/2022-08-07/A-Dive-Into-IPv6-Forcing-Hosts-to-Change-IPs-Using-Rogue-Router-Advertisements#systemsdads-rules-fixed"
  }, "Dad's Rules Fixed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "IrisSec - skat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://hackmd.io/@cupr1c/BkRB5dTa5"
  }, "Easy Math 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Phiat Lux - cupr1c")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://gist.github.com/downbtn/6f37dd42504f01d2b2ba84bbb8216110"
  }, "Frame")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "down_button - down_button")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://irissec.xyz/articles/categories/re/2022-08-03/Pierated-Art"
  }, "Pierated Art")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "IrisSec - [[nope]]")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://github.com/IrisSec/irissec.github.io/blob/master/_posts/2022-08-07-easy-math.md#easy-math-1-3-pwn"
  }, "Easy Math 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "IrisSec - sjfbskbvsefs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://hackmd.io/XEBnIbIrQ8OoXdITGvo61A?view#Easy-Math-1"
  }, "Easy Math 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Phiat Lux - cupr1c")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://hackmd.io/XEBnIbIrQ8OoXdITGvo61A?view#Easy-Math-2-and-3"
  }, "Easy Math 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "Phiat Lux - cupr1c")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://irissec.xyz/articles/categories/re/2022-08-03/CPSC?note=obviously+this+isnt+vast+cornfields+but+there+isnt+a+cpsc+dropdown+option"
  }, "CPSC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.td, null, "IrisSec - [[nope]]")))));
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_createMdxContent, props)) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

/***/ }),

/***/ "./src/templates/template-event.tsx?__contentFilePath=/workspaces/sisccoders.com/content/events/uiuctf/2022/index.md&export=default":
/*!******************************************************************************************************************************************!*\
  !*** ./src/templates/template-event.tsx?__contentFilePath=/workspaces/sisccoders.com/content/events/uiuctf/2022/index.md&export=default ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ GatsbyMDXWrapper)
/* harmony export */ });
/* harmony import */ var _workspaces_sisccoders_com_content_events_uiuctf_2022_index_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/events/uiuctf/2022/index.md */ "./content/events/uiuctf/2022/index.md");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ "./src/components/Seo.tsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_MDXProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MDXProvider */ "./src/components/MDXProvider.tsx");
/* harmony import */ var _components_Icons_fluentui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Icons/fluentui */ "./src/components/Icons/fluentui.tsx");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.tsx");








const Head = ({
  data
}) => {
  var _ref, _event$card_image$for, _event$card_image$for2, _event$card_image$bac;
  const {
    event
  } = data;
  if (!event) {
    throw new Error(`invalid argument: "event" is undefined`);
  }
  const meta_image = (_ref = (_event$card_image$for = (_event$card_image$for2 = event.card_image.foreground) === null || _event$card_image$for2 === void 0 ? void 0 : _event$card_image$for2.publicURL) !== null && _event$card_image$for !== void 0 ? _event$card_image$for : (_event$card_image$bac = event.card_image.background) === null || _event$card_image$bac === void 0 ? void 0 : _event$card_image$bac.publicURL) !== null && _ref !== void 0 ? _ref : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: event.title,
    description: event.description,
    image: meta_image
  });
};
const getLinkName = name => {
  if (name === 'ctftime') return 'CTFtime';
  if (name === 'website') return 'Event Site';
  return name;
};
const EventTemplate = ({
  data,
  children
}) => {
  var _event$sponsors_profi;
  if (!data.event) {
    throw new Error(`invalid argument: "event" is undefined`);
  }
  const event = data.event;
  const sponsor_cards = (_event$sponsors_profi = event.sponsors_profiles) === null || _event$sponsors_profi === void 0 ? void 0 : _event$sponsors_profi.map(sponsor => (0,_components_Card__WEBPACK_IMPORTED_MODULE_3__.createCard)({
    sponsor
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex lg:flex-row flex-col gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("aside", {
    className: "flex shrink-0 xl:w-96 lg:w-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col gap-4 sticky top-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Card__WEBPACK_IMPORTED_MODULE_3__.Card, {
    card_image: event.card_image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, event.title), (event.time_start || event.time_close) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-row mb-2"
  }, event.time_start && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex-1 flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0 font-bold"
  }, "Time Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0 text-xl"
  }, (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.convertDate)(event.time_start, "MMM DD, YYYY", event.timezone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0"
  }, (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.convertDate)(event.time_start, "h:mm A z", event.timezone))), event.time_close && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex-1 flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0 font-bold"
  }, "Time End"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0 text-xl"
  }, (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.convertDate)(event.time_close, "MMM DD, YYYY", event.timezone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0"
  }, (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.convertDate)(event.time_close, "h:mm A z", event.timezone)))), event.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-row gap-2 items-center mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Icons_fluentui__WEBPACK_IMPORTED_MODULE_5__.LocationRegular, {
    className: "flex-none text-primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "inline align-middle"
  }, event.location)), event.links && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "flex flex-col gap-3"
  }, event.links.map((link, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    key: idx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: link.url,
    className: "flex flex-row items-center justify-between btn-primary w-full",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, getLinkName(link.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Icons_fluentui__WEBPACK_IMPORTED_MODULE_5__.OpenRegular, {
    className: "flex-none ml-2"
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "grid gap-4"
  }, data.event.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    id: "description",
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Event Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, data.event.description)) : null, data.event.stats ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    id: "stats",
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Event Statistics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2"
  }, data.event.stats.map((stat, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    key: i,
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0 font-bold"
  }, stat === null || stat === void 0 ? void 0 : stat.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0 font-mono text-4xl"
  }, stat === null || stat === void 0 ? void 0 : stat.value))))) : null, sponsor_cards ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    id: "sponsors",
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Sponsors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "This event would not be possible without the support of our sponsors!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
  }, sponsor_cards.map((card, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    key: idx,
    className: "flex grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Card__WEBPACK_IMPORTED_MODULE_3__.Card, card))))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    id: "content",
    className: "panel overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_MDXProvider__WEBPACK_IMPORTED_MODULE_4__.MDXProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "md-root"
  }, children))))));
};
EventTemplate;
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(EventTemplate, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_workspaces_sisccoders_com_content_events_uiuctf_2022_index_md__WEBPACK_IMPORTED_MODULE_0__["default"], props));
}
const query = "619134888";

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

/***/ "./src/components/MDXProvider.tsx":
/*!****************************************!*\
  !*** ./src/components/MDXProvider.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");


const WrapperTableOverflow = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "overflow-auto my-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", props));
const components = {
  table: WrapperTableOverflow
};
const MDXProvider = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.MDXProvider, {
  components: components
}, children);

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

/***/ "./src/components/Card/card.css":
/*!**************************************!*\
  !*** ./src/components/Card/card.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@mdx-js/react/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* binding */ MDXContext),
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2010699272.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2010699272.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/d3185a8fd9474deeb9d243c59fbf9eef/49e4e/placeholder.png","srcSet":"/static/d3185a8fd9474deeb9d243c59fbf9eef/67ff5/placeholder.png 360w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/c6b60/placeholder.png 480w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/1dc00/placeholder.png 720w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/49e4e/placeholder.png 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/d3185a8fd9474deeb9d243c59fbf9eef/c27d8/placeholder.webp 360w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/0df1a/placeholder.webp 480w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/ddf6e/placeholder.webp 720w,\\n/static/d3185a8fd9474deeb9d243c59fbf9eef/c2dd8/placeholder.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":720}');

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
//# sourceMappingURL=component---src-templates-template-event-tsx-content-file-path-content-events-uiuctf-2022-index-md.js.map