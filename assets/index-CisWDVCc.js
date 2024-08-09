function Xc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var _s = { exports: {} },
  vl = {},
  xs = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar = Symbol.for('react.element'),
  Zc = Symbol.for('react.portal'),
  Jc = Symbol.for('react.fragment'),
  qc = Symbol.for('react.strict_mode'),
  bc = Symbol.for('react.profiler'),
  ef = Symbol.for('react.provider'),
  tf = Symbol.for('react.context'),
  nf = Symbol.for('react.forward_ref'),
  rf = Symbol.for('react.suspense'),
  lf = Symbol.for('react.memo'),
  of = Symbol.for('react.lazy'),
  lu = Symbol.iterator;
function uf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (lu && e[lu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Es = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cs = Object.assign,
  Ps = {};
function vn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ps),
    (this.updater = n || Es);
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ns() {}
Ns.prototype = vn.prototype;
function ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ps),
    (this.updater = n || Es);
}
var ci = (ai.prototype = new Ns());
ci.constructor = ai;
Cs(ci, vn.prototype);
ci.isPureReactComponent = !0;
var ou = Array.isArray,
  zs = Object.prototype.hasOwnProperty,
  fi = { current: null },
  Ts = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ls(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      zs.call(t, r) && !Ts.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ar,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: fi.current,
  };
}
function sf(e, t) {
  return {
    $$typeof: ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function di(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ar;
}
function af(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var iu = /\/+/g;
function $l(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? af('' + e.key)
    : t.toString(36);
}
function Or(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ar:
          case Zc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + $l(i, 0) : r),
      ou(l)
        ? ((n = ''),
          e != null && (n = e.replace(iu, '$&/') + '/'),
          Or(l, t, n, '', function (a) {
            return a;
          }))
        : l != null &&
          (di(l) &&
            (l = sf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(iu, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), ou(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + $l(o, u);
      i += Or(o, t, n, s, l);
    }
  else if (((s = uf(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + $l(o, u++)), (i += Or(o, t, n, s, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Or(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function cf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Ir = { transition: null },
  ff = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: fi,
  };
function Rs() {
  throw Error('act(...) is not supported in production builds of React.');
}
I.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!di(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
I.Component = vn;
I.Fragment = Jc;
I.Profiler = bc;
I.PureComponent = ai;
I.StrictMode = qc;
I.Suspense = rf;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ff;
I.act = Rs;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Cs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = fi.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      zs.call(t, s) &&
        !Ts.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: ar, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: tf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ef, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Ls;
I.createFactory = function (e) {
  var t = Ls.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: nf, render: e };
};
I.isValidElement = di;
I.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: cf };
};
I.memo = function (e, t) {
  return { $$typeof: lf, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Ir.transition;
  Ir.transition = {};
  try {
    e();
  } finally {
    Ir.transition = t;
  }
};
I.unstable_act = Rs;
I.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
I.useContext = function (e) {
  return ce.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
I.useId = function () {
  return ce.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return ce.current.useRef(e);
};
I.useState = function (e) {
  return ce.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return ce.current.useTransition();
};
I.version = '18.3.1';
xs.exports = I;
var k = xs.exports;
const js = Gc(k),
  df = Xc({ __proto__: null, default: js }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf = k,
  hf = Symbol.for('react.element'),
  mf = Symbol.for('react.fragment'),
  vf = Object.prototype.hasOwnProperty,
  gf = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Os(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) vf.call(t, r) && !yf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: hf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: gf.current,
  };
}
vl.Fragment = mf;
vl.jsx = Os;
vl.jsxs = Os;
_s.exports = vl;
var T = _s.exports,
  ho = {},
  Is = { exports: {} },
  ke = {},
  Ms = { exports: {} },
  Fs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, j) {
    var O = C.length;
    C.push(j);
    e: for (; 0 < O; ) {
      var K = (O - 1) >>> 1,
        q = C[K];
      if (0 < l(q, j)) (C[K] = j), (C[O] = q), (O = K);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var j = C[0],
      O = C.pop();
    if (O !== j) {
      C[0] = O;
      e: for (var K = 0, q = C.length, hr = q >>> 1; K < hr; ) {
        var Et = 2 * (K + 1) - 1,
          Dl = C[Et],
          Ct = Et + 1,
          mr = C[Ct];
        if (0 > l(Dl, O))
          Ct < q && 0 > l(mr, Dl)
            ? ((C[K] = mr), (C[Ct] = O), (K = Ct))
            : ((C[K] = Dl), (C[Et] = O), (K = Et));
        else if (Ct < q && 0 > l(mr, O)) (C[K] = mr), (C[Ct] = O), (K = Ct);
        else break e;
      }
    }
    return j;
  }
  function l(C, j) {
    var O = C.sortIndex - j.sortIndex;
    return O !== 0 ? O : C.id - j.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    v = !1,
    y = !1,
    w = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= C)
        r(a), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(a);
    }
  }
  function g(C) {
    if (((w = !1), d(C), !y))
      if (n(s) !== null) (y = !0), kn(_);
      else {
        var j = n(a);
        j !== null && Fl(g, j.startTime - C);
      }
  }
  function _(C, j) {
    (y = !1), w && ((w = !1), f(L), (L = -1)), (v = !0);
    var O = m;
    try {
      for (
        d(j), p = n(s);
        p !== null && (!(p.expirationTime > j) || (C && !$()));

      ) {
        var K = p.callback;
        if (typeof K == 'function') {
          (p.callback = null), (m = p.priorityLevel);
          var q = K(p.expirationTime <= j);
          (j = e.unstable_now()),
            typeof q == 'function' ? (p.callback = q) : p === n(s) && r(s),
            d(j);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var hr = !0;
      else {
        var Et = n(a);
        Et !== null && Fl(g, Et.startTime - j), (hr = !1);
      }
      return hr;
    } finally {
      (p = null), (m = O), (v = !1);
    }
  }
  var N = !1,
    z = null,
    L = -1,
    R = 5,
    P = -1;
  function $() {
    return !(e.unstable_now() - P < R);
  }
  function De() {
    if (z !== null) {
      var C = e.unstable_now();
      P = C;
      var j = !0;
      try {
        j = z(!0, C);
      } finally {
        j ? be() : ((N = !1), (z = null));
      }
    } else N = !1;
  }
  var be;
  if (typeof c == 'function')
    be = function () {
      c(De);
    };
  else if (typeof MessageChannel < 'u') {
    var _t = new MessageChannel(),
      xt = _t.port2;
    (_t.port1.onmessage = De),
      (be = function () {
        xt.postMessage(null);
      });
  } else
    be = function () {
      x(De, 0);
    };
  function kn(C) {
    (z = C), N || ((N = !0), be());
  }
  function Fl(C, j) {
    L = x(function () {
      C(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), kn(_));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (R = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var O = m;
      m = j;
      try {
        return C();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, j) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var O = m;
      m = C;
      try {
        return j();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (C, j, O) {
      var K = e.unstable_now();
      switch (
        (typeof O == 'object' && O !== null
          ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? K + O : K))
          : (O = K),
        C)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = O + q),
        (C = {
          id: h++,
          callback: j,
          priorityLevel: C,
          startTime: O,
          expirationTime: q,
          sortIndex: -1,
        }),
        O > K
          ? ((C.sortIndex = O),
            t(a, C),
            n(s) === null &&
              C === n(a) &&
              (w ? (f(L), (L = -1)) : (w = !0), Fl(g, O - K)))
          : ((C.sortIndex = q), t(s, C), y || v || ((y = !0), kn(_))),
        C
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (C) {
      var j = m;
      return function () {
        var O = m;
        m = j;
        try {
          return C.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    });
})(Fs);
Ms.exports = Fs;
var wf = Ms.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sf = k,
  Se = wf;
function S(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Ds = new Set(),
  Hn = {};
function Ut(e, t) {
  an(e, t), an(e + 'Capture', t);
}
function an(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) Ds.add(t[e]);
}
var Xe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  mo = Object.prototype.hasOwnProperty,
  kf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uu = {},
  su = {};
function _f(e) {
  return mo.call(su, e)
    ? !0
    : mo.call(uu, e)
    ? !1
    : kf.test(e)
    ? (su[e] = !0)
    : ((uu[e] = !0), !1);
}
function xf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Ef(e, t, n, r) {
  if (t === null || typeof t > 'u' || xf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pi = /[\-:]([a-z])/g;
function hi(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(pi, hi);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(pi, hi);
    re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(pi, hi);
  re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mi(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Ef(t, n, l, r) && (n = null),
    r || l === null
      ? _f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qe = Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for('react.element'),
  Ht = Symbol.for('react.portal'),
  Qt = Symbol.for('react.fragment'),
  vi = Symbol.for('react.strict_mode'),
  vo = Symbol.for('react.profiler'),
  $s = Symbol.for('react.provider'),
  Us = Symbol.for('react.context'),
  gi = Symbol.for('react.forward_ref'),
  go = Symbol.for('react.suspense'),
  yo = Symbol.for('react.suspense_list'),
  yi = Symbol.for('react.memo'),
  nt = Symbol.for('react.lazy'),
  Bs = Symbol.for('react.offscreen'),
  au = Symbol.iterator;
function _n(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (au && e[au]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var H = Object.assign,
  Ul;
function Rn(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = (t && t[1]) || '';
    }
  return (
    `
` +
    Ul +
    e
  );
}
var Bl = !1;
function Vl(e, t) {
  if (!e || Bl) return '';
  Bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Rn(e) : '';
}
function Cf(e) {
  switch (e.tag) {
    case 5:
      return Rn(e.type);
    case 16:
      return Rn('Lazy');
    case 13:
      return Rn('Suspense');
    case 19:
      return Rn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Vl(e.type, !1)), e;
    case 11:
      return (e = Vl(e.type.render, !1)), e;
    case 1:
      return (e = Vl(e.type, !0)), e;
    default:
      return '';
  }
}
function wo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Qt:
      return 'Fragment';
    case Ht:
      return 'Portal';
    case vo:
      return 'Profiler';
    case vi:
      return 'StrictMode';
    case go:
      return 'Suspense';
    case yo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Us:
        return (e.displayName || 'Context') + '.Consumer';
      case $s:
        return (e._context.displayName || 'Context') + '.Provider';
      case gi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case yi:
        return (
          (t = e.displayName || null), t !== null ? t : wo(e.type) || 'Memo'
        );
      case nt:
        (t = e._payload), (e = e._init);
        try {
          return wo(e(t));
        } catch {}
    }
  return null;
}
function Pf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return wo(t);
    case 8:
      return t === vi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Vs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Nf(e) {
  var t = Vs(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yr(e) {
  e._valueTracker || (e._valueTracker = Nf(e));
}
function As(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Vs(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function So(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Ws(e, t) {
  (t = t.checked), t != null && mi(e, 'checked', t, !1);
}
function ko(e, t) {
  Ws(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? _o(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && _o(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function fu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function _o(e, t, n) {
  (t !== 'number' || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var jn = Array.isArray;
function nn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function xo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function du(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (jn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: gt(n) };
}
function Hs(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Qs(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Eo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Qs(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var wr,
  Ks = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        wr = wr || document.createElement('div'),
          wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Mn).forEach(function (e) {
  zf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]);
  });
});
function Ys(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Xs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ys(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Tf = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Co(e, t) {
  if (t) {
    if (Tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(S(62));
  }
}
function Po(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var No = null;
function wi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zo = null,
  rn = null,
  ln = null;
function hu(e) {
  if ((e = dr(e))) {
    if (typeof zo != 'function') throw Error(S(280));
    var t = e.stateNode;
    t && ((t = kl(t)), zo(e.stateNode, e.type, t));
  }
}
function Gs(e) {
  rn ? (ln ? ln.push(e) : (ln = [e])) : (rn = e);
}
function Zs() {
  if (rn) {
    var e = rn,
      t = ln;
    if (((ln = rn = null), hu(e), t)) for (e = 0; e < t.length; e++) hu(t[e]);
  }
}
function Js(e, t) {
  return e(t);
}
function qs() {}
var Al = !1;
function bs(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return Js(e, t, n);
  } finally {
    (Al = !1), (rn !== null || ln !== null) && (qs(), Zs());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(S(231, t, typeof n));
  return n;
}
var To = !1;
if (Xe)
  try {
    var xn = {};
    Object.defineProperty(xn, 'passive', {
      get: function () {
        To = !0;
      },
    }),
      window.addEventListener('test', xn, xn),
      window.removeEventListener('test', xn, xn);
  } catch {
    To = !1;
  }
function Lf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Fn = !1,
  Kr = null,
  Yr = !1,
  Lo = null,
  Rf = {
    onError: function (e) {
      (Fn = !0), (Kr = e);
    },
  };
function jf(e, t, n, r, l, o, i, u, s) {
  (Fn = !1), (Kr = null), Lf.apply(Rf, arguments);
}
function Of(e, t, n, r, l, o, i, u, s) {
  if ((jf.apply(this, arguments), Fn)) {
    if (Fn) {
      var a = Kr;
      (Fn = !1), (Kr = null);
    } else throw Error(S(198));
    Yr || ((Yr = !0), (Lo = a));
  }
}
function Bt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ea(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mu(e) {
  if (Bt(e) !== e) throw Error(S(188));
}
function If(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return mu(l), e;
        if (o === r) return mu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function ta(e) {
  return (e = If(e)), e !== null ? na(e) : null;
}
function na(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = na(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ra = Se.unstable_scheduleCallback,
  vu = Se.unstable_cancelCallback,
  Mf = Se.unstable_shouldYield,
  Ff = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  Df = Se.unstable_getCurrentPriorityLevel,
  Si = Se.unstable_ImmediatePriority,
  la = Se.unstable_UserBlockingPriority,
  Xr = Se.unstable_NormalPriority,
  $f = Se.unstable_LowPriority,
  oa = Se.unstable_IdlePriority,
  gl = null,
  Ve = null;
function Uf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == 'function')
    try {
      Ve.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Af,
  Bf = Math.log,
  Vf = Math.LN2;
function Af(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bf(e) / Vf) | 0)) | 0;
}
var Sr = 64,
  kr = 4194304;
function On(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = On(u)) : ((o &= i), o !== 0 && (r = On(o)));
  } else (i = n & ~l), i !== 0 ? (r = On(i)) : o !== 0 && (r = On(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Wf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ie(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Wf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Ro(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ia() {
  var e = Sr;
  return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Qf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ki(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function ua(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sa,
  _i,
  aa,
  ca,
  fa,
  jo = !1,
  _r = [],
  at = null,
  ct = null,
  ft = null,
  Yn = new Map(),
  Xn = new Map(),
  lt = [],
  Kf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function gu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      at = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ct = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ft = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Yn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Xn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = dr(t)), t !== null && _i(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Yf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (at = En(at, e, t, n, r, l)), !0;
    case 'dragenter':
      return (ct = En(ct, e, t, n, r, l)), !0;
    case 'mouseover':
      return (ft = En(ft, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return Yn.set(o, En(Yn.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Xn.set(o, En(Xn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function da(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ea(n)), t !== null)) {
          (e.blockedOn = t),
            fa(e.priority, function () {
              aa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (No = r), n.target.dispatchEvent(r), (No = null);
    } else return (t = dr(n)), t !== null && _i(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function yu(e, t, n) {
  Mr(e) && n.delete(t);
}
function Xf() {
  (jo = !1),
    at !== null && Mr(at) && (at = null),
    ct !== null && Mr(ct) && (ct = null),
    ft !== null && Mr(ft) && (ft = null),
    Yn.forEach(yu),
    Xn.forEach(yu);
}
function Cn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    jo ||
      ((jo = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Xf)));
}
function Gn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < _r.length) {
    Cn(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    at !== null && Cn(at, e),
      ct !== null && Cn(ct, e),
      ft !== null && Cn(ft, e),
      Yn.forEach(t),
      Xn.forEach(t),
      n = 0;
    n < lt.length;
    n++
  )
    (r = lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lt.length && ((n = lt[0]), n.blockedOn === null); )
    da(n), n.blockedOn === null && lt.shift();
}
var on = qe.ReactCurrentBatchConfig,
  Zr = !0;
function Gf(e, t, n, r) {
  var l = F,
    o = on.transition;
  on.transition = null;
  try {
    (F = 1), xi(e, t, n, r);
  } finally {
    (F = l), (on.transition = o);
  }
}
function Zf(e, t, n, r) {
  var l = F,
    o = on.transition;
  on.transition = null;
  try {
    (F = 4), xi(e, t, n, r);
  } finally {
    (F = l), (on.transition = o);
  }
}
function xi(e, t, n, r) {
  if (Zr) {
    var l = Oo(e, t, n, r);
    if (l === null) bl(e, t, r, Jr, n), gu(e, r);
    else if (Yf(l, e, t, n, r)) r.stopPropagation();
    else if ((gu(e, r), t & 4 && -1 < Kf.indexOf(e))) {
      for (; l !== null; ) {
        var o = dr(l);
        if (
          (o !== null && sa(o),
          (o = Oo(e, t, n, r)),
          o === null && bl(e, t, r, Jr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else bl(e, t, r, null, n);
  }
}
var Jr = null;
function Oo(e, t, n, r) {
  if (((Jr = null), (e = wi(r)), (e = zt(e)), e !== null))
    if (((t = Bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ea(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Jr = e), null;
}
function pa(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Df()) {
        case Si:
          return 1;
        case la:
          return 4;
        case Xr:
        case $f:
          return 16;
        case oa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null,
  Ei = null,
  Fr = null;
function ha() {
  if (Fr) return Fr;
  var e,
    t = Ei,
    n = t.length,
    r,
    l = 'value' in it ? it.value : it.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Fr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Dr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xr() {
  return !0;
}
function wu() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? xr
        : wu),
      (this.isPropagationStopped = wu),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = xr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = xr));
      },
      persist: function () {},
      isPersistent: xr,
    }),
    t
  );
}
var gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ci = _e(gn),
  fr = H({}, gn, { view: 0, detail: 0 }),
  Jf = _e(fr),
  Hl,
  Ql,
  Pn,
  yl = H({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Pn &&
            (Pn && e.type === 'mousemove'
              ? ((Hl = e.screenX - Pn.screenX), (Ql = e.screenY - Pn.screenY))
              : (Ql = Hl = 0),
            (Pn = e)),
          Hl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ql;
    },
  }),
  Su = _e(yl),
  qf = H({}, yl, { dataTransfer: 0 }),
  bf = _e(qf),
  ed = H({}, fr, { relatedTarget: 0 }),
  Kl = _e(ed),
  td = H({}, gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nd = _e(td),
  rd = H({}, gn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ld = _e(rd),
  od = H({}, gn, { data: 0 }),
  ku = _e(od),
  id = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  ud = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  sd = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ad(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sd[e]) ? !!t[e] : !1;
}
function Pi() {
  return ad;
}
var cd = H({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = id[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Dr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? ud[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pi,
    charCode: function (e) {
      return e.type === 'keypress' ? Dr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Dr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  fd = _e(cd),
  dd = H({}, yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _u = _e(dd),
  pd = H({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pi,
  }),
  hd = _e(pd),
  md = H({}, gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vd = _e(md),
  gd = H({}, yl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yd = _e(gd),
  wd = [9, 13, 27, 32],
  Ni = Xe && 'CompositionEvent' in window,
  Dn = null;
Xe && 'documentMode' in document && (Dn = document.documentMode);
var Sd = Xe && 'TextEvent' in window && !Dn,
  ma = Xe && (!Ni || (Dn && 8 < Dn && 11 >= Dn)),
  xu = ' ',
  Eu = !1;
function va(e, t) {
  switch (e) {
    case 'keyup':
      return wd.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ga(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Kt = !1;
function kd(e, t) {
  switch (e) {
    case 'compositionend':
      return ga(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Eu = !0), xu);
    case 'textInput':
      return (e = t.data), e === xu && Eu ? null : e;
    default:
      return null;
  }
}
function _d(e, t) {
  if (Kt)
    return e === 'compositionend' || (!Ni && va(e, t))
      ? ((e = ha()), (Fr = Ei = it = null), (Kt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ma && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var xd = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!xd[e.type] : t === 'textarea';
}
function ya(e, t, n, r) {
  Gs(r),
    (t = qr(t, 'onChange')),
    0 < t.length &&
      ((n = new Ci('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $n = null,
  Zn = null;
function Ed(e) {
  Ta(e, 0);
}
function wl(e) {
  var t = Gt(e);
  if (As(t)) return e;
}
function Cd(e, t) {
  if (e === 'change') return t;
}
var wa = !1;
if (Xe) {
  var Yl;
  if (Xe) {
    var Xl = 'oninput' in document;
    if (!Xl) {
      var Pu = document.createElement('div');
      Pu.setAttribute('oninput', 'return;'),
        (Xl = typeof Pu.oninput == 'function');
    }
    Yl = Xl;
  } else Yl = !1;
  wa = Yl && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
  $n && ($n.detachEvent('onpropertychange', Sa), (Zn = $n = null));
}
function Sa(e) {
  if (e.propertyName === 'value' && wl(Zn)) {
    var t = [];
    ya(t, Zn, e, wi(e)), bs(Ed, t);
  }
}
function Pd(e, t, n) {
  e === 'focusin'
    ? (Nu(), ($n = t), (Zn = n), $n.attachEvent('onpropertychange', Sa))
    : e === 'focusout' && Nu();
}
function Nd(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return wl(Zn);
}
function zd(e, t) {
  if (e === 'click') return wl(t);
}
function Td(e, t) {
  if (e === 'input' || e === 'change') return wl(t);
}
function Ld(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == 'function' ? Object.is : Ld;
function Jn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!mo.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function zu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tu(e, t) {
  var n = zu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zu(n);
  }
}
function ka(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ka(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _a() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function zi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Rd(e) {
  var t = _a(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ka(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Tu(n, o));
        var i = Tu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var jd = Xe && 'documentMode' in document && 11 >= document.documentMode,
  Yt = null,
  Io = null,
  Un = null,
  Mo = !1;
function Lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mo ||
    Yt == null ||
    Yt !== Qr(r) ||
    ((r = Yt),
    'selectionStart' in r && zi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && Jn(Un, r)) ||
      ((Un = r),
      (r = qr(Io, 'onSelect')),
      0 < r.length &&
        ((t = new Ci('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yt))));
}
function Er(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Xt = {
    animationend: Er('Animation', 'AnimationEnd'),
    animationiteration: Er('Animation', 'AnimationIteration'),
    animationstart: Er('Animation', 'AnimationStart'),
    transitionend: Er('Transition', 'TransitionEnd'),
  },
  Gl = {},
  xa = {};
Xe &&
  ((xa = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  'TransitionEvent' in window || delete Xt.transitionend.transition);
function Sl(e) {
  if (Gl[e]) return Gl[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xa) return (Gl[e] = t[n]);
  return e;
}
var Ea = Sl('animationend'),
  Ca = Sl('animationiteration'),
  Pa = Sl('animationstart'),
  Na = Sl('transitionend'),
  za = new Map(),
  Ru =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function wt(e, t) {
  za.set(e, t), Ut(t, [e]);
}
for (var Zl = 0; Zl < Ru.length; Zl++) {
  var Jl = Ru[Zl],
    Od = Jl.toLowerCase(),
    Id = Jl[0].toUpperCase() + Jl.slice(1);
  wt(Od, 'on' + Id);
}
wt(Ea, 'onAnimationEnd');
wt(Ca, 'onAnimationIteration');
wt(Pa, 'onAnimationStart');
wt('dblclick', 'onDoubleClick');
wt('focusin', 'onFocus');
wt('focusout', 'onBlur');
wt(Na, 'onTransitionEnd');
an('onMouseEnter', ['mouseout', 'mouseover']);
an('onMouseLeave', ['mouseout', 'mouseover']);
an('onPointerEnter', ['pointerout', 'pointerover']);
an('onPointerLeave', ['pointerout', 'pointerover']);
Ut(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Ut(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Ut('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ut(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Ut(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Ut(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var In =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Md = new Set('cancel close invalid load scroll toggle'.split(' ').concat(In));
function ju(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Of(r, t, void 0, e), (e.currentTarget = null);
}
function Ta(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          ju(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          ju(l, u, a), (o = s);
        }
    }
  }
  if (Yr) throw ((e = Lo), (Yr = !1), (Lo = null), e);
}
function U(e, t) {
  var n = t[Bo];
  n === void 0 && (n = t[Bo] = new Set());
  var r = e + '__bubble';
  n.has(r) || (La(t, e, 2, !1), n.add(r));
}
function ql(e, t, n) {
  var r = 0;
  t && (r |= 4), La(n, e, r, t);
}
var Cr = '_reactListening' + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[Cr]) {
    (e[Cr] = !0),
      Ds.forEach(function (n) {
        n !== 'selectionchange' && (Md.has(n) || ql(n, !1, e), ql(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cr] || ((t[Cr] = !0), ql('selectionchange', !1, t));
  }
}
function La(e, t, n, r) {
  switch (pa(t)) {
    case 1:
      var l = Gf;
      break;
    case 4:
      l = Zf;
      break;
    default:
      l = xi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !To ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function bl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = zt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  bs(function () {
    var a = o,
      h = wi(n),
      p = [];
    e: {
      var m = za.get(e);
      if (m !== void 0) {
        var v = Ci,
          y = e;
        switch (e) {
          case 'keypress':
            if (Dr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = fd;
            break;
          case 'focusin':
            (y = 'focus'), (v = Kl);
            break;
          case 'focusout':
            (y = 'blur'), (v = Kl);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Kl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Su;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = bf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = hd;
            break;
          case Ea:
          case Ca:
          case Pa:
            v = nd;
            break;
          case Na:
            v = vd;
            break;
          case 'scroll':
            v = Jf;
            break;
          case 'wheel':
            v = yd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = ld;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = _u;
        }
        var w = (t & 4) !== 0,
          x = !w && e === 'scroll',
          f = w ? (m !== null ? m + 'Capture' : null) : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = Kn(c, f)), g != null && w.push(bn(c, g, d)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new v(m, y, null, n, h)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== No &&
            (y = n.relatedTarget || n.fromElement) &&
            (zt(y) || y[Ge]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = a),
              (y = y ? zt(y) : null),
              y !== null &&
                ((x = Bt(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = a)),
          v !== y)
        ) {
          if (
            ((w = Su),
            (g = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = _u),
              (g = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (x = v == null ? m : Gt(v)),
            (d = y == null ? m : Gt(y)),
            (m = new w(g, c + 'leave', v, n, h)),
            (m.target = x),
            (m.relatedTarget = d),
            (g = null),
            zt(h) === a &&
              ((w = new w(f, c + 'enter', y, n, h)),
              (w.target = d),
              (w.relatedTarget = x),
              (g = w)),
            (x = g),
            v && y)
          )
            t: {
              for (w = v, f = y, c = 0, d = w; d; d = Vt(d)) c++;
              for (d = 0, g = f; g; g = Vt(g)) d++;
              for (; 0 < c - d; ) (w = Vt(w)), c--;
              for (; 0 < d - c; ) (f = Vt(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Vt(w)), (f = Vt(f));
              }
              w = null;
            }
          else w = null;
          v !== null && Ou(p, m, v, w, !1),
            y !== null && x !== null && Ou(p, x, y, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? Gt(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && m.type === 'file'))
        )
          var _ = Cd;
        else if (Cu(m))
          if (wa) _ = Td;
          else {
            _ = Nd;
            var N = Pd;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (_ = zd);
        if (_ && (_ = _(e, a))) {
          ya(p, _, n, h);
          break e;
        }
        N && N(e, m, a),
          e === 'focusout' &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === 'number' &&
            _o(m, 'number', m.value);
      }
      switch (((N = a ? Gt(a) : window), e)) {
        case 'focusin':
          (Cu(N) || N.contentEditable === 'true') &&
            ((Yt = N), (Io = a), (Un = null));
          break;
        case 'focusout':
          Un = Io = Yt = null;
          break;
        case 'mousedown':
          Mo = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Mo = !1), Lu(p, n, h);
          break;
        case 'selectionchange':
          if (jd) break;
        case 'keydown':
        case 'keyup':
          Lu(p, n, h);
      }
      var z;
      if (Ni)
        e: {
          switch (e) {
            case 'compositionstart':
              var L = 'onCompositionStart';
              break e;
            case 'compositionend':
              L = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              L = 'onCompositionUpdate';
              break e;
          }
          L = void 0;
        }
      else
        Kt
          ? va(e, n) && (L = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (L = 'onCompositionStart');
      L &&
        (ma &&
          n.locale !== 'ko' &&
          (Kt || L !== 'onCompositionStart'
            ? L === 'onCompositionEnd' && Kt && (z = ha())
            : ((it = h),
              (Ei = 'value' in it ? it.value : it.textContent),
              (Kt = !0))),
        (N = qr(a, L)),
        0 < N.length &&
          ((L = new ku(L, e, null, n, h)),
          p.push({ event: L, listeners: N }),
          z ? (L.data = z) : ((z = ga(n)), z !== null && (L.data = z)))),
        (z = Sd ? kd(e, n) : _d(e, n)) &&
          ((a = qr(a, 'onBeforeInput')),
          0 < a.length &&
            ((h = new ku('onBeforeInput', 'beforeinput', null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = z)));
    }
    Ta(p, t);
  });
}
function bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Kn(e, n)),
      o != null && r.unshift(bn(e, o, l)),
      (o = Kn(e, t)),
      o != null && r.push(bn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Kn(n, o)), s != null && i.unshift(bn(n, s, u)))
        : l || ((s = Kn(n, o)), s != null && i.push(bn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Fd = /\r\n?/g,
  Dd = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Fd,
      `
`
    )
    .replace(Dd, '');
}
function Pr(e, t, n) {
  if (((t = Iu(t)), Iu(e) !== t && n)) throw Error(S(425));
}
function br() {}
var Fo = null,
  Do = null;
function $o(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Uo = typeof setTimeout == 'function' ? setTimeout : void 0,
  $d = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Mu = typeof Promise == 'function' ? Promise : void 0,
  Ud =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Mu < 'u'
      ? function (e) {
          return Mu.resolve(null).then(e).catch(Bd);
        }
      : Uo;
function Bd(e) {
  setTimeout(function () {
    throw e;
  });
}
function eo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Gn(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Gn(t);
}
function dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Fu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yn = Math.random().toString(36).slice(2),
  Be = '__reactFiber$' + yn,
  er = '__reactProps$' + yn,
  Ge = '__reactContainer$' + yn,
  Bo = '__reactEvents$' + yn,
  Vd = '__reactListeners$' + yn,
  Ad = '__reactHandles$' + yn;
function zt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fu(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = Fu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dr(e) {
  return (
    (e = e[Be] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function kl(e) {
  return e[er] || null;
}
var Vo = [],
  Zt = -1;
function St(e) {
  return { current: e };
}
function B(e) {
  0 > Zt || ((e.current = Vo[Zt]), (Vo[Zt] = null), Zt--);
}
function D(e, t) {
  Zt++, (Vo[Zt] = e.current), (e.current = t);
}
var yt = {},
  ue = St(yt),
  he = St(!1),
  It = yt;
function cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function el() {
  B(he), B(ue);
}
function Du(e, t, n) {
  if (ue.current !== yt) throw Error(S(168));
  D(ue, t), D(he, n);
}
function Ra(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Pf(e) || 'Unknown', l));
  return H({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yt),
    (It = ue.current),
    D(ue, e),
    D(he, he.current),
    !0
  );
}
function $u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Ra(e, t, It)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(he),
      B(ue),
      D(ue, e))
    : B(he),
    D(he, n);
}
var He = null,
  _l = !1,
  to = !1;
function ja(e) {
  He === null ? (He = [e]) : He.push(e);
}
function Wd(e) {
  (_l = !0), ja(e);
}
function kt() {
  if (!to && He !== null) {
    to = !0;
    var e = 0,
      t = F;
    try {
      var n = He;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (_l = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), ra(Si, kt), l);
    } finally {
      (F = t), (to = !1);
    }
  }
  return null;
}
var Jt = [],
  qt = 0,
  nl = null,
  rl = 0,
  Ee = [],
  Ce = 0,
  Mt = null,
  Qe = 1,
  Ke = '';
function Pt(e, t) {
  (Jt[qt++] = rl), (Jt[qt++] = nl), (nl = e), (rl = t);
}
function Oa(e, t, n) {
  (Ee[Ce++] = Qe), (Ee[Ce++] = Ke), (Ee[Ce++] = Mt), (Mt = e);
  var r = Qe;
  e = Ke;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Qe = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Ke = o + e);
  } else (Qe = (1 << o) | (n << l) | r), (Ke = e);
}
function Ti(e) {
  e.return !== null && (Pt(e, 1), Oa(e, 1, 0));
}
function Li(e) {
  for (; e === nl; )
    (nl = Jt[--qt]), (Jt[qt] = null), (rl = Jt[--qt]), (Jt[qt] = null);
  for (; e === Mt; )
    (Mt = Ee[--Ce]),
      (Ee[Ce] = null),
      (Ke = Ee[--Ce]),
      (Ee[Ce] = null),
      (Qe = Ee[--Ce]),
      (Ee[Ce] = null);
}
var we = null,
  ye = null,
  V = !1,
  Oe = null;
function Ia(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Uu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mt !== null ? { id: Qe, overflow: Ke } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wo(e) {
  if (V) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Uu(e, t)) {
        if (Ao(e)) throw Error(S(418));
        t = dt(n.nextSibling);
        var r = we;
        t && Uu(e, t)
          ? Ia(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (we = e));
      }
    } else {
      if (Ao(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (we = e);
    }
  }
}
function Bu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Nr(e) {
  if (e !== we) return !1;
  if (!V) return Bu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !$o(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Ao(e)) throw (Ma(), Error(S(418)));
    for (; t; ) Ia(e, t), (t = dt(t.nextSibling));
  }
  if ((Bu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ye = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ma() {
  for (var e = ye; e; ) e = dt(e.nextSibling);
}
function fn() {
  (ye = we = null), (V = !1);
}
function Ri(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Hd = qe.ReactCurrentBatchConfig;
function Nn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Vu(e) {
  var t = e._init;
  return t(e._payload);
}
function Fa(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = vt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, g) {
    return c === null || c.tag !== 6
      ? ((c = so(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, g) {
    var _ = d.type;
    return _ === Qt
      ? h(f, c, d.props.children, g, d.key)
      : c !== null &&
        (c.elementType === _ ||
          (typeof _ == 'object' &&
            _ !== null &&
            _.$$typeof === nt &&
            Vu(_) === c.type))
      ? ((g = l(c, d.props)), (g.ref = Nn(f, c, d)), (g.return = f), g)
      : ((g = Hr(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = Nn(f, c, d)),
        (g.return = f),
        g);
  }
  function a(f, c, d, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ao(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, g, _) {
    return c === null || c.tag !== 7
      ? ((c = jt(d, f.mode, g, _)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = so('' + c, f.mode, d)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case gr:
          return (
            (d = Hr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = Nn(f, null, c)),
            (d.return = f),
            d
          );
        case Ht:
          return (c = ao(c, f.mode, d)), (c.return = f), c;
        case nt:
          var g = c._init;
          return p(f, g(c._payload), d);
      }
      if (jn(c) || _n(c))
        return (c = jt(c, f.mode, d, null)), (c.return = f), c;
      zr(f, c);
    }
    return null;
  }
  function m(f, c, d, g) {
    var _ = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return _ !== null ? null : u(f, c, '' + d, g);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case gr:
          return d.key === _ ? s(f, c, d, g) : null;
        case Ht:
          return d.key === _ ? a(f, c, d, g) : null;
        case nt:
          return (_ = d._init), m(f, c, _(d._payload), g);
      }
      if (jn(d) || _n(d)) return _ !== null ? null : h(f, c, d, g, null);
      zr(f, d);
    }
    return null;
  }
  function v(f, c, d, g, _) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (f = f.get(d) || null), u(c, f, '' + g, _);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case gr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(c, f, g, _);
        case Ht:
          return (f = f.get(g.key === null ? d : g.key) || null), a(c, f, g, _);
        case nt:
          var N = g._init;
          return v(f, c, d, N(g._payload), _);
      }
      if (jn(g) || _n(g)) return (f = f.get(d) || null), h(c, f, g, _, null);
      zr(c, g);
    }
    return null;
  }
  function y(f, c, d, g) {
    for (
      var _ = null, N = null, z = c, L = (c = 0), R = null;
      z !== null && L < d.length;
      L++
    ) {
      z.index > L ? ((R = z), (z = null)) : (R = z.sibling);
      var P = m(f, z, d[L], g);
      if (P === null) {
        z === null && (z = R);
        break;
      }
      e && z && P.alternate === null && t(f, z),
        (c = o(P, c, L)),
        N === null ? (_ = P) : (N.sibling = P),
        (N = P),
        (z = R);
    }
    if (L === d.length) return n(f, z), V && Pt(f, L), _;
    if (z === null) {
      for (; L < d.length; L++)
        (z = p(f, d[L], g)),
          z !== null &&
            ((c = o(z, c, L)), N === null ? (_ = z) : (N.sibling = z), (N = z));
      return V && Pt(f, L), _;
    }
    for (z = r(f, z); L < d.length; L++)
      (R = v(z, f, L, d[L], g)),
        R !== null &&
          (e && R.alternate !== null && z.delete(R.key === null ? L : R.key),
          (c = o(R, c, L)),
          N === null ? (_ = R) : (N.sibling = R),
          (N = R));
    return (
      e &&
        z.forEach(function ($) {
          return t(f, $);
        }),
      V && Pt(f, L),
      _
    );
  }
  function w(f, c, d, g) {
    var _ = _n(d);
    if (typeof _ != 'function') throw Error(S(150));
    if (((d = _.call(d)), d == null)) throw Error(S(151));
    for (
      var N = (_ = null), z = c, L = (c = 0), R = null, P = d.next();
      z !== null && !P.done;
      L++, P = d.next()
    ) {
      z.index > L ? ((R = z), (z = null)) : (R = z.sibling);
      var $ = m(f, z, P.value, g);
      if ($ === null) {
        z === null && (z = R);
        break;
      }
      e && z && $.alternate === null && t(f, z),
        (c = o($, c, L)),
        N === null ? (_ = $) : (N.sibling = $),
        (N = $),
        (z = R);
    }
    if (P.done) return n(f, z), V && Pt(f, L), _;
    if (z === null) {
      for (; !P.done; L++, P = d.next())
        (P = p(f, P.value, g)),
          P !== null &&
            ((c = o(P, c, L)), N === null ? (_ = P) : (N.sibling = P), (N = P));
      return V && Pt(f, L), _;
    }
    for (z = r(f, z); !P.done; L++, P = d.next())
      (P = v(z, f, L, P.value, g)),
        P !== null &&
          (e && P.alternate !== null && z.delete(P.key === null ? L : P.key),
          (c = o(P, c, L)),
          N === null ? (_ = P) : (N.sibling = P),
          (N = P));
    return (
      e &&
        z.forEach(function (De) {
          return t(f, De);
        }),
      V && Pt(f, L),
      _
    );
  }
  function x(f, c, d, g) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Qt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case gr:
          e: {
            for (var _ = d.key, N = c; N !== null; ) {
              if (N.key === _) {
                if (((_ = d.type), _ === Qt)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = l(N, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === nt &&
                    Vu(_) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = l(N, d.props)),
                    (c.ref = Nn(f, N, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Qt
              ? ((c = jt(d.props.children, f.mode, g, d.key)),
                (c.return = f),
                (f = c))
              : ((g = Hr(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = Nn(f, c, d)),
                (g.return = f),
                (f = g));
          }
          return i(f);
        case Ht:
          e: {
            for (N = d.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ao(d, f.mode, g)), (c.return = f), (f = c);
          }
          return i(f);
        case nt:
          return (N = d._init), x(f, c, N(d._payload), g);
      }
      if (jn(d)) return y(f, c, d, g);
      if (_n(d)) return w(f, c, d, g);
      zr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = so(d, f.mode, g)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return x;
}
var dn = Fa(!0),
  Da = Fa(!1),
  ll = St(null),
  ol = null,
  bt = null,
  ji = null;
function Oi() {
  ji = bt = ol = null;
}
function Ii(e) {
  var t = ll.current;
  B(ll), (e._currentValue = t);
}
function Ho(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function un(e, t) {
  (ol = e),
    (ji = bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (ji !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bt === null)) {
      if (ol === null) throw Error(S(308));
      (bt = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else bt = bt.next = e;
  return t;
}
var Tt = null;
function Mi(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function $a(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Mi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function Fi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ua(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ye(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Mi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ki(e, n);
  }
}
function Au(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function il(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var m = u.lane,
        v = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((m = t), (v = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                p = y.call(v, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == 'function' ? y.call(v, p, m) : y),
                m == null)
              )
                break e;
              p = H({}, p, m);
              break e;
            case 2:
              rt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = v), (s = p)) : (h = h.next = v),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Dt |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var pr = {},
  Ae = St(pr),
  tr = St(pr),
  nr = St(pr);
function Lt(e) {
  if (e === pr) throw Error(S(174));
  return e;
}
function Di(e, t) {
  switch ((D(nr, t), D(tr, e), D(Ae, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Eo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Eo(t, e));
  }
  B(Ae), D(Ae, t);
}
function pn() {
  B(Ae), B(tr), B(nr);
}
function Ba(e) {
  Lt(nr.current);
  var t = Lt(Ae.current),
    n = Eo(t, e.type);
  t !== n && (D(tr, e), D(Ae, n));
}
function $i(e) {
  tr.current === e && (B(Ae), B(tr));
}
var A = St(0);
function ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var no = [];
function Ui() {
  for (var e = 0; e < no.length; e++)
    no[e]._workInProgressVersionPrimary = null;
  no.length = 0;
}
var Ur = qe.ReactCurrentDispatcher,
  ro = qe.ReactCurrentBatchConfig,
  Ft = 0,
  W = null,
  G = null,
  b = null,
  sl = !1,
  Bn = !1,
  rr = 0,
  Qd = 0;
function le() {
  throw Error(S(321));
}
function Bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Vi(e, t, n, r, l, o) {
  if (
    ((Ft = o),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? Gd : Zd),
    (e = n(r, l)),
    Bn)
  ) {
    o = 0;
    do {
      if (((Bn = !1), (rr = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (b = G = null),
        (t.updateQueue = null),
        (Ur.current = Jd),
        (e = n(r, l));
    } while (Bn);
  }
  if (
    ((Ur.current = al),
    (t = G !== null && G.next !== null),
    (Ft = 0),
    (b = G = W = null),
    (sl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Ai() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (W.memoizedState = b = e) : (b = b.next = e), b;
}
function Te() {
  if (G === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = b === null ? W.memoizedState : b.next;
  if (t !== null) (b = t), (G = e);
  else {
    if (e === null) throw Error(S(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      b === null ? (W.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function lr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function lo(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if ((Ft & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          (W.lanes |= h),
          (Dt |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Fe(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (W.lanes |= o), (Dt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oo(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Fe(o, t.memoizedState) || (pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Va() {}
function Aa(e, t) {
  var n = W,
    r = Te(),
    l = t(),
    o = !Fe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Wi(Qa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      or(9, Ha.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(S(349));
    Ft & 30 || Wa(n, t, l);
  }
  return l;
}
function Wa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ha(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ka(t) && Ya(e);
}
function Qa(e, t, n) {
  return n(function () {
    Ka(t) && Ya(e);
  });
}
function Ka(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Ya(e) {
  var t = Ze(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Hu(e) {
  var t = Ue();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xd.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function or(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xa() {
  return Te().memoizedState;
}
function Br(e, t, n, r) {
  var l = Ue();
  (W.flags |= e),
    (l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r));
}
function xl(e, t, n, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (((o = i.destroy), r !== null && Bi(r, i.deps))) {
      l.memoizedState = or(t, n, o, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = or(1 | t, n, o, r));
}
function Qu(e, t) {
  return Br(8390656, 8, e, t);
}
function Wi(e, t) {
  return xl(2048, 8, e, t);
}
function Ga(e, t) {
  return xl(4, 2, e, t);
}
function Za(e, t) {
  return xl(4, 4, e, t);
}
function Ja(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xl(4, 4, Ja.bind(null, t, e), n)
  );
}
function Hi() {}
function ba(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ec(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tc(e, t, n) {
  return Ft & 21
    ? (Fe(n, t) || ((n = ia()), (W.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Kd(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ro.transition;
  ro.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (ro.transition = r);
  }
}
function nc() {
  return Te().memoizedState;
}
function Yd(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    rc(e))
  )
    lc(t, n);
  else if (((n = $a(e, t, n, r)), n !== null)) {
    var l = ae();
    Me(n, e, r, l), oc(n, t, r);
  }
}
function Xd(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rc(e)) lc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Fe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Mi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = $a(e, t, l, r)),
      n !== null && ((l = ae()), Me(n, e, r, l), oc(n, t, r));
  }
}
function rc(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function lc(e, t) {
  Bn = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function oc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ki(e, n);
  }
}
var al = {
    readContext: ze,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Gd = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: Qu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Br(4194308, 4, Ja.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yd.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hu,
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Hu(!1),
        t = e[0];
      return (e = Kd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Ue();
      if (V) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(S(349));
        Ft & 30 || Wa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Qu(Qa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        or(9, Ha.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = ee.identifierPrefix;
      if (V) {
        var n = Ke,
          r = Qe;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = rr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Qd++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zd = {
    readContext: ze,
    useCallback: ba,
    useContext: ze,
    useEffect: Wi,
    useImperativeHandle: qa,
    useInsertionEffect: Ga,
    useLayoutEffect: Za,
    useMemo: ec,
    useReducer: lo,
    useRef: Xa,
    useState: function () {
      return lo(lr);
    },
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      var t = Te();
      return tc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = lo(lr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Va,
    useSyncExternalStore: Aa,
    useId: nc,
    unstable_isNewReconciler: !1,
  },
  Jd = {
    readContext: ze,
    useCallback: ba,
    useContext: ze,
    useEffect: Wi,
    useImperativeHandle: qa,
    useInsertionEffect: Ga,
    useLayoutEffect: Za,
    useMemo: ec,
    useReducer: oo,
    useRef: Xa,
    useState: function () {
      return oo(lr);
    },
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      var t = Te();
      return G === null ? (t.memoizedState = e) : tc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(lr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Va,
    useSyncExternalStore: Aa,
    useId: nc,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = mt(e),
      o = Ye(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, l)),
      t !== null && (Me(t, e, l, r), $r(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = mt(e),
      o = Ye(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, l)),
      t !== null && (Me(t, e, l, r), $r(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = mt(e),
      l = Ye(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = pt(e, l, r)),
      t !== null && (Me(t, e, r, n), $r(t, e, r));
  },
};
function Ku(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jn(n, r) || !Jn(l, o)
      : !0
  );
}
function ic(e, t, n) {
  var r = !1,
    l = yt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = ze(o))
      : ((l = me(t) ? It : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? cn(e, l) : yt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Yu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Ko(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fi(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = ze(o))
    : ((o = me(t) ? It : ue.current), (l.context = cn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Qo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && El.enqueueReplaceState(l, l.state, null),
      il(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Cf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function io(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qd = typeof WeakMap == 'function' ? WeakMap : Map;
function uc(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fl || ((fl = !0), (ri = r)), Yo(e, t);
    }),
    n
  );
}
function sc(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Yo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Yo(e, t),
          typeof r != 'function' &&
            (ht === null ? (ht = new Set([this])) : ht.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = dp.bind(null, e, t, n)), t.then(e, e));
}
function Gu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ye(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bd = qe.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? Da(t, null, n, r) : dn(t, e.child, n, r);
}
function Ju(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    un(t, l),
    (r = Vi(e, t, n, r, o, l)),
    (n = Ai()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (V && n && Ti(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function qu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !qi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ac(e, t, o, r, l))
      : ((e = Hr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref)
    )
      return Je(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ac(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jn(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Je(e, t, l);
  }
  return Xo(e, t, n, r, l);
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(tn, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(tn, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(tn, ge),
        (ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(tn, ge),
      (ge |= r);
  return se(e, t, l, n), t.child;
}
function fc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xo(e, t, n, r, l) {
  var o = me(n) ? It : ue.current;
  return (
    (o = cn(t, o)),
    un(t, l),
    (n = Vi(e, t, n, r, o, l)),
    (r = Ai()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (V && r && Ti(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function bu(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if ((un(t, l), t.stateNode === null))
    Vr(e, t), ic(t, n, r), Ko(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = ze(a))
      : ((a = me(n) ? It : ue.current), (a = cn(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Yu(t, i, r, a)),
      (rt = !1);
    var m = t.memoizedState;
    (i.state = m),
      il(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || he.current || rt
        ? (typeof h == 'function' && (Qo(t, n, h, r), (s = t.memoizedState)),
          (u = rt || Ku(t, n, u, r, m, s, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ua(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Re(t.type, u)),
      (i.props = a),
      (p = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = ze(s))
        : ((s = me(n) ? It : ue.current), (s = cn(t, s)));
    var v = n.getDerivedStateFromProps;
    (h =
      typeof v == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== p || m !== s) && Yu(t, i, r, s)),
      (rt = !1),
      (m = t.memoizedState),
      (i.state = m),
      il(t, r, i, l);
    var y = t.memoizedState;
    u !== p || m !== y || he.current || rt
      ? (typeof v == 'function' && (Qo(t, n, v, r), (y = t.memoizedState)),
        (a = rt || Ku(t, n, a, r, m, y, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, y, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, y, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Go(e, t, n, r, o, l);
}
function Go(e, t, n, r, l, o) {
  fc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && $u(t, n, !1), Je(e, t, o);
  (r = t.stateNode), (bd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = dn(t, e.child, null, o)), (t.child = dn(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && $u(t, n, !0),
    t.child
  );
}
function dc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Du(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Du(e, t.context, !1),
    Di(e, t.containerInfo);
}
function es(e, t, n, r, l) {
  return fn(), Ri(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Jo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pc(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(A, l & 1),
    e === null)
  )
    return (
      Wo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Nl(i, r, 0, null)),
              (e = jt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Jo(n)),
              (t.memoizedState = Zo),
              e)
            : Qi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ep(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = vt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = vt(u, o)) : ((o = jt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Jo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = vt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qi(e, t) {
  return (
    (t = Nl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tr(e, t, n, r) {
  return (
    r !== null && Ri(r),
    dn(t, e.child, null, n),
    (e = Qi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ep(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = io(Error(S(422)))), Tr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Nl({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = jt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && dn(t, e.child, null, i),
        (t.child.memoizedState = Jo(i)),
        (t.memoizedState = Zo),
        o);
  if (!(t.mode & 1)) return Tr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(S(419))), (r = io(o, r, void 0)), Tr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), pe || u)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ze(e, l), Me(r, e, l, -1));
    }
    return Ji(), (r = io(Error(S(421)))), Tr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = pp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = dt(l.nextSibling)),
      (we = t),
      (V = !0),
      (Oe = null),
      e !== null &&
        ((Ee[Ce++] = Qe),
        (Ee[Ce++] = Ke),
        (Ee[Ce++] = Mt),
        (Qe = e.id),
        (Ke = e.overflow),
        (Mt = t)),
      (t = Qi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ts(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ho(e.return, t, n);
}
function uo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function hc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ts(e, n, t);
        else if (e.tag === 19) ts(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ul(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          uo(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ul(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        uo(t, !0, n, null, o);
        break;
      case 'together':
        uo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tp(e, t, n) {
  switch (t.tag) {
    case 3:
      dc(t), fn();
      break;
    case 5:
      Ba(t);
      break;
    case 1:
      me(t.type) && tl(t);
      break;
    case 4:
      Di(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(ll, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pc(e, t, n)
          : (D(A, A.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      D(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cc(e, t, n);
  }
  return Je(e, t, n);
}
var mc, qo, vc, gc;
mc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qo = function () {};
vc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Lt(Ae.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = So(e, l)), (r = So(e, r)), (o = []);
        break;
      case 'select':
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = xo(e, l)), (r = xo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = br);
    }
    Co(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === 'style') {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Hn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Hn.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && U('scroll', e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push('style', n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
gc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function np(e, t, n) {
  var r = t.pendingProps;
  switch ((Li(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return me(t.type) && el(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pn(),
        B(he),
        B(ue),
        Ui(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (ii(Oe), (Oe = null)))),
        qo(e, t),
        oe(t),
        null
      );
    case 5:
      $i(t);
      var l = Lt(nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return oe(t), null;
        }
        if (((e = Lt(Ae.current)), Nr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Be] = t), (r[er] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              U('cancel', r), U('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              U('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < In.length; l++) U(In[l], r);
              break;
            case 'source':
              U('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              U('error', r), U('load', r);
              break;
            case 'details':
              U('toggle', r);
              break;
            case 'input':
              cu(r, o), U('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U('invalid', r);
              break;
            case 'textarea':
              du(r, o), U('invalid', r);
          }
          Co(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Hn.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  U('scroll', r);
            }
          switch (n) {
            case 'input':
              yr(r), fu(r, o, !0);
              break;
            case 'textarea':
              yr(r), pu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Qs(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Be] = t),
            (e[er] = r),
            mc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Po(n, r)), n)) {
              case 'dialog':
                U('cancel', e), U('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                U('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < In.length; l++) U(In[l], e);
                l = r;
                break;
              case 'source':
                U('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                U('error', e), U('load', e), (l = r);
                break;
              case 'details':
                U('toggle', e), (l = r);
                break;
              case 'input':
                cu(e, r), (l = So(e, r)), U('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  U('invalid', e);
                break;
              case 'textarea':
                du(e, r), (l = xo(e, r)), U('invalid', e);
                break;
              default:
                l = r;
            }
            Co(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? Xs(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Ks(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Qn(e, s)
                    : typeof s == 'number' && Qn(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Hn.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && U('scroll', e)
                      : s != null && mi(e, o, s, i));
              }
            switch (n) {
              case 'input':
                yr(e), fu(e, r, !1);
                break;
              case 'textarea':
                yr(e), pu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + gt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? nn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      nn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = br);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) gc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(S(166));
        if (((n = Lt(nr.current)), Lt(Ae.current), Nr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (o = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (B(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ye !== null && t.mode & 1 && !(t.flags & 128))
          Ma(), fn(), (t.flags |= 98560), (o = !1);
        else if (((o = Nr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[Be] = t;
          } else
            fn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Oe !== null && (ii(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? Z === 0 && (Z = 3) : Ji())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        pn(), qo(e, t), e === null && qn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Ii(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && el(), oe(t), null;
    case 19:
      if ((B(A), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) zn(o, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ul(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    zn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > mn &&
            ((t.flags |= 128), (r = !0), zn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ul(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !V)
            )
              return oe(t), null;
          } else
            2 * Y() - o.renderingStartTime > mn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = A.current),
          D(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        Zi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function rp(e, t) {
  switch ((Li(t), t.tag)) {
    case 1:
      return (
        me(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pn(),
        B(he),
        B(ue),
        Ui(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $i(t), null;
    case 13:
      if ((B(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        fn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(A), null;
    case 4:
      return pn(), null;
    case 10:
      return Ii(t.type._context), null;
    case 22:
    case 23:
      return Zi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1,
  ie = !1,
  lp = typeof WeakSet == 'function' ? WeakSet : Set,
  E = null;
function en(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function bo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ns = !1;
function op(e, t) {
  if (((Fo = Zr), (e = _a()), zi(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (m = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++h === r && (s = i),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Do = { focusedElem: e, selectionRange: n }, Zr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    x = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Re(t.type, w),
                      x
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (g) {
          Q(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (y = ns), (ns = !1), y;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && bo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ei(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function yc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[er], delete t[Bo], delete t[Vd], delete t[Ad])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ti(e, t, n), e = e.sibling; e !== null; ) ti(e, t, n), (e = e.sibling);
}
function ni(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ni(e, t, n), e = e.sibling; e !== null; ) ni(e, t, n), (e = e.sibling);
}
var te = null,
  je = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Sc(e, t, n), (n = n.sibling);
}
function Sc(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == 'function')
    try {
      Ve.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || en(n, t);
    case 6:
      var r = te,
        l = je;
      (te = null),
        et(e, t, n),
        (te = r),
        (je = l),
        te !== null &&
          (je
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (je
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? eo(e.parentNode, n)
              : e.nodeType === 1 && eo(e, n),
            Gn(e))
          : eo(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = je),
        (te = n.stateNode.containerInfo),
        (je = !0),
        et(e, t, n),
        (te = r),
        (je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && bo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (en(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), et(e, t, n), (ie = r))
        : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lp()),
      t.forEach(function (r) {
        var l = hp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (te = u.stateNode), (je = !1);
              break e;
            case 3:
              (te = u.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (te = u.stateNode.containerInfo), (je = !0);
              break e;
          }
          u = u.return;
        }
        if (te === null) throw Error(S(160));
        Sc(o, i, l), (te = null), (je = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kc(t, e), (t = t.sibling);
}
function kc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), $e(e), r & 4)) {
        try {
          Vn(3, e, e.return), Cl(3, e);
        } catch (w) {
          Q(e, e.return, w);
        }
        try {
          Vn(5, e, e.return);
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 1:
      Le(t, e), $e(e), r & 512 && n !== null && en(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        $e(e),
        r & 512 && n !== null && en(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Qn(l, '');
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && Ws(l, o),
              Po(u, i);
            var a = Po(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                p = s[i + 1];
              h === 'style'
                ? Xs(l, p)
                : h === 'dangerouslySetInnerHTML'
                ? Ks(l, p)
                : h === 'children'
                ? Qn(l, p)
                : mi(l, h, p, a);
            }
            switch (u) {
              case 'input':
                ko(l, o);
                break;
              case 'textarea':
                Hs(l, o);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? nn(l, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? nn(l, !!o.multiple, o.defaultValue, !0)
                      : nn(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[er] = o;
          } catch (w) {
            Q(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Le(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gn(t.containerInfo);
        } catch (w) {
          Q(e, e.return, w);
        }
      break;
    case 4:
      Le(t, e), $e(e);
      break;
    case 13:
      Le(t, e),
        $e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Xi = Y())),
        r & 4 && ls(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Le(t, e), (ie = a)) : Le(t, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (E = e, h = e.child; h !== null; ) {
            for (p = E = h; E !== null; ) {
              switch (((m = E), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, m, m.return);
                  break;
                case 1:
                  en(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      Q(r, n, w);
                    }
                  }
                  break;
                case 5:
                  en(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    is(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (E = v)) : is(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Ys('display', i)));
              } catch (w) {
                Q(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps;
              } catch (w) {
                Q(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), $e(e), r & 4 && ls(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ''), (r.flags &= -33));
          var o = rs(e);
          ni(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = rs(e);
          ti(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ip(e, t, n) {
  (E = e), _c(e);
}
function _c(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Lr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Lr;
        var a = ie;
        if (((Lr = i), (ie = s) && !a))
          for (E = l; E !== null; )
            (i = E),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? us(l)
                : s !== null
                ? ((s.return = i), (E = s))
                : us(l);
        for (; o !== null; ) (E = o), _c(o), (o = o.sibling);
        (E = l), (Lr = u), (ie = a);
      }
      os(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : os(e);
  }
}
function os(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Wu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Gn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ie || (t.flags & 512 && ei(t));
      } catch (m) {
        Q(t, t.return, m);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function is(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function us(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            ei(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ei(t);
          } catch (s) {
            Q(t, i, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (E = u);
      break;
    }
    E = t.return;
  }
}
var up = Math.ceil,
  cl = qe.ReactCurrentDispatcher,
  Ki = qe.ReactCurrentOwner,
  Ne = qe.ReactCurrentBatchConfig,
  M = 0,
  ee = null,
  X = null,
  ne = 0,
  ge = 0,
  tn = St(0),
  Z = 0,
  ir = null,
  Dt = 0,
  Pl = 0,
  Yi = 0,
  An = null,
  de = null,
  Xi = 0,
  mn = 1 / 0,
  We = null,
  fl = !1,
  ri = null,
  ht = null,
  Rr = !1,
  ut = null,
  dl = 0,
  Wn = 0,
  li = null,
  Ar = -1,
  Wr = 0;
function ae() {
  return M & 6 ? Y() : Ar !== -1 ? Ar : (Ar = Y());
}
function mt(e) {
  return e.mode & 1
    ? M & 2 && ne !== 0
      ? ne & -ne
      : Hd.transition !== null
      ? (Wr === 0 && (Wr = ia()), Wr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pa(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Wn) throw ((Wn = 0), (li = null), Error(S(185)));
  cr(e, n, r),
    (!(M & 2) || e !== ee) &&
      (e === ee && (!(M & 2) && (Pl |= n), Z === 4 && ot(e, ne)),
      ve(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((mn = Y() + 500), _l && kt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Hf(e, t);
  var r = Gr(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && vu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vu(n), t === 1))
      e.tag === 0 ? Wd(ss.bind(null, e)) : ja(ss.bind(null, e)),
        Ud(function () {
          !(M & 6) && kt();
        }),
        (n = null);
    else {
      switch (ua(r)) {
        case 1:
          n = Si;
          break;
        case 4:
          n = la;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = oa;
          break;
        default:
          n = Xr;
      }
      n = Lc(n, xc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xc(e, t) {
  if (((Ar = -1), (Wr = 0), M & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = Cc();
    (ee !== e || ne !== t) && ((We = null), (mn = Y() + 500), Rt(e, t));
    do
      try {
        cp();
        break;
      } catch (u) {
        Ec(e, u);
      }
    while (!0);
    Oi(),
      (cl.current = o),
      (M = l),
      X !== null ? (t = 0) : ((ee = null), (ne = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ro(e)), l !== 0 && ((r = l), (t = oi(e, l)))), t === 1)
    )
      throw ((n = ir), Rt(e, 0), ot(e, r), ve(e, Y()), n);
    if (t === 6) ot(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !sp(l) &&
          ((t = pl(e, r)),
          t === 2 && ((o = Ro(e)), o !== 0 && ((r = o), (t = oi(e, o)))),
          t === 1))
      )
        throw ((n = ir), Rt(e, 0), ot(e, r), ve(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Nt(e, de, We);
          break;
        case 3:
          if (
            (ot(e, r), (r & 130023424) === r && ((t = Xi + 500 - Y()), 10 < t))
          ) {
            if (Gr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Uo(Nt.bind(null, e, de, We), t);
            break;
          }
          Nt(e, de, We);
          break;
        case 4:
          if ((ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * up(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Uo(Nt.bind(null, e, de, We), r);
            break;
          }
          Nt(e, de, We);
          break;
        case 5:
          Nt(e, de, We);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ve(e, Y()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function oi(e, t) {
  var n = An;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && ii(t)),
    e
  );
}
function ii(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function sp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ot(e, t) {
  for (
    t &= ~Yi,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ss(e) {
  if (M & 6) throw Error(S(327));
  sn();
  var t = Gr(e, 0);
  if (!(t & 1)) return ve(e, Y()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ro(e);
    r !== 0 && ((t = r), (n = oi(e, r)));
  }
  if (n === 1) throw ((n = ir), Rt(e, 0), ot(e, t), ve(e, Y()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, de, We),
    ve(e, Y()),
    null
  );
}
function Gi(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((mn = Y() + 500), _l && kt());
  }
}
function $t(e) {
  ut !== null && ut.tag === 0 && !(M & 6) && sn();
  var t = M;
  M |= 1;
  var n = Ne.transition,
    r = F;
  try {
    if (((Ne.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Ne.transition = n), (M = t), !(M & 6) && kt();
  }
}
function Zi() {
  (ge = tn.current), B(tn);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $d(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Li(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          pn(), B(he), B(ue), Ui();
          break;
        case 5:
          $i(r);
          break;
        case 4:
          pn();
          break;
        case 13:
          B(A);
          break;
        case 19:
          B(A);
          break;
        case 10:
          Ii(r.type._context);
          break;
        case 22:
        case 23:
          Zi();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (X = e = vt(e.current, null)),
    (ne = ge = t),
    (Z = 0),
    (ir = null),
    (Yi = Pl = Dt = 0),
    (de = An = null),
    Tt !== null)
  ) {
    for (t = 0; t < Tt.length; t++)
      if (((n = Tt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Tt = null;
  }
  return e;
}
function Ec(e, t) {
  do {
    var n = X;
    try {
      if ((Oi(), (Ur.current = al), sl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        ((Ft = 0),
        (b = G = W = null),
        (Bn = !1),
        (rr = 0),
        (Ki.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (ir = t), (X = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ne),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var v = Gu(i);
          if (v !== null) {
            (v.flags &= -257),
              Zu(v, i, u, o, t),
              v.mode & 1 && Xu(o, a, t),
              (t = v),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Xu(o, a, t), Ji();
              break e;
            }
            s = Error(S(426));
          }
        } else if (V && u.mode & 1) {
          var x = Gu(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Zu(x, i, u, o, t),
              Ri(hn(s, u));
            break e;
          }
        }
        (o = s = hn(s, u)),
          Z !== 4 && (Z = 2),
          An === null ? (An = [o]) : An.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = uc(o, s, t);
              Au(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (ht === null || !ht.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = sc(o, u, t);
                Au(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Nc(n);
    } catch (_) {
      (t = _), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cc() {
  var e = cl.current;
  return (cl.current = al), e === null ? al : e;
}
function Ji() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    ee === null || (!(Dt & 268435455) && !(Pl & 268435455)) || ot(ee, ne);
}
function pl(e, t) {
  var n = M;
  M |= 2;
  var r = Cc();
  (ee !== e || ne !== t) && ((We = null), Rt(e, t));
  do
    try {
      ap();
      break;
    } catch (l) {
      Ec(e, l);
    }
  while (!0);
  if ((Oi(), (M = n), (cl.current = r), X !== null)) throw Error(S(261));
  return (ee = null), (ne = 0), Z;
}
function ap() {
  for (; X !== null; ) Pc(X);
}
function cp() {
  for (; X !== null && !Mf(); ) Pc(X);
}
function Pc(e) {
  var t = Tc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nc(e) : (X = t),
    (Ki.current = null);
}
function Nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rp(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (X = null);
        return;
      }
    } else if (((n = np(n, t, ge)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Nt(e, t, n) {
  var r = F,
    l = Ne.transition;
  try {
    (Ne.transition = null), (F = 1), fp(e, t, n, r);
  } finally {
    (Ne.transition = l), (F = r);
  }
  return null;
}
function fp(e, t, n, r) {
  do sn();
  while (ut !== null);
  if (M & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Qf(e, o),
    e === ee && ((X = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rr ||
      ((Rr = !0),
      Lc(Xr, function () {
        return sn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var i = F;
    F = 1;
    var u = M;
    (M |= 4),
      (Ki.current = null),
      op(e, n),
      kc(n, e),
      Rd(Do),
      (Zr = !!Fo),
      (Do = Fo = null),
      (e.current = n),
      ip(n),
      Ff(),
      (M = u),
      (F = i),
      (Ne.transition = o);
  } else e.current = n;
  if (
    (Rr && ((Rr = !1), (ut = e), (dl = l)),
    (o = e.pendingLanes),
    o === 0 && (ht = null),
    Uf(n.stateNode),
    ve(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw ((fl = !1), (e = ri), (ri = null), e);
  return (
    dl & 1 && e.tag !== 0 && sn(),
    (o = e.pendingLanes),
    o & 1 ? (e === li ? Wn++ : ((Wn = 0), (li = e))) : (Wn = 0),
    kt(),
    null
  );
}
function sn() {
  if (ut !== null) {
    var e = ua(dl),
      t = Ne.transition,
      n = F;
    try {
      if (((Ne.transition = null), (F = 16 > e ? 16 : e), ut === null))
        var r = !1;
      else {
        if (((e = ut), (ut = null), (dl = 0), M & 6)) throw Error(S(331));
        var l = M;
        for (M |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (E = p);
                  else
                    for (; E !== null; ) {
                      h = E;
                      var m = h.sibling,
                        v = h.return;
                      if ((yc(h), h === a)) {
                        E = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (E = m);
                        break;
                      }
                      E = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
          else
            e: for (i = c; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, u);
                  }
                } catch (_) {
                  Q(u, u.return, _);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (E = g);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((M = l), kt(), Ve && typeof Ve.onPostCommitFiberRoot == 'function')
        )
          try {
            Ve.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Ne.transition = t);
    }
  }
  return !1;
}
function as(e, t, n) {
  (t = hn(n, t)),
    (t = uc(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = ae()),
    e !== null && (cr(e, 1, t), ve(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) as(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        as(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ht === null || !ht.has(r)))
        ) {
          (e = hn(n, e)),
            (e = sc(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = ae()),
            t !== null && (cr(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > Y() - Xi)
        ? Rt(e, 0)
        : (Yi |= n)),
    ve(e, t);
}
function zc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Ze(e, t)), e !== null && (cr(e, t, n), ve(e, n));
}
function pp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function hp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), zc(e, n);
}
var Tc;
Tc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), tp(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), V && t.flags & 1048576 && Oa(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vr(e, t), (e = t.pendingProps);
      var l = cn(t, ue.current);
      un(t, n), (l = Vi(null, t, r, e, l, n));
      var o = Ai();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), tl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Fi(t),
            (l.updater = El),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ko(t, r, e, n),
            (t = Go(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && Ti(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = vp(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Xo(null, t, r, e, n);
            break e;
          case 1:
            t = bu(null, t, r, e, n);
            break e;
          case 11:
            t = Ju(null, t, r, e, n);
            break e;
          case 14:
            t = qu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Xo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        bu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((dc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ua(e, t),
          il(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = hn(Error(S(423)), t)), (t = es(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = hn(Error(S(424)), t)), (t = es(e, t, r, n, l));
            break e;
          } else
            for (
              ye = dt(t.stateNode.containerInfo.firstChild),
                we = t,
                V = !0,
                Oe = null,
                n = Da(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fn(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ba(t),
        e === null && Wo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        $o(r, l) ? (i = null) : o !== null && $o(r, o) && (t.flags |= 32),
        fc(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Wo(t), null;
    case 13:
      return pc(e, t, n);
    case 4:
      return (
        Di(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = dn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ju(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(ll, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Fe(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ye(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Ho(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Ho(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        qu(e, t, r, l, n)
      );
    case 15:
      return ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Vr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), tl(t)) : (e = !1),
        un(t, n),
        ic(t, r, l),
        Ko(t, r, l, n),
        Go(null, t, r, !0, e, n)
      );
    case 19:
      return hc(e, t, n);
    case 22:
      return cc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Lc(e, t) {
  return ra(e, t);
}
function mp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pe(e, t, n, r) {
  return new mp(e, t, n, r);
}
function qi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == 'function') return qi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gi)) return 11;
    if (e === yi) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Hr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) qi(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Qt:
        return jt(n.children, l, o, t);
      case vi:
        (i = 8), (l |= 8);
        break;
      case vo:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = vo), (e.lanes = o), e
        );
      case go:
        return (e = Pe(13, n, t, l)), (e.elementType = go), (e.lanes = o), e;
      case yo:
        return (e = Pe(19, n, t, l)), (e.elementType = yo), (e.lanes = o), e;
      case Bs:
        return Nl(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case $s:
              i = 10;
              break e;
            case Us:
              i = 9;
              break e;
            case gi:
              i = 11;
              break e;
            case yi:
              i = 14;
              break e;
            case nt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Pe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function jt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = Bs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function so(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function ao(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wl(0)),
    (this.expirationTimes = Wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function bi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new gp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Pe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fi(o),
    e
  );
}
function yp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ht,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rc(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if (Bt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return Ra(e, n, t);
  }
  return t;
}
function jc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = bi(n, r, !0, e, l, o, i, u, s)),
    (e.context = Rc(null)),
    (n = e.current),
    (r = ae()),
    (l = mt(n)),
    (o = Ye(r, l)),
    (o.callback = t ?? null),
    pt(n, o, l),
    (e.current.lanes = l),
    cr(e, l, r),
    ve(e, r),
    e
  );
}
function zl(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = mt(l);
  return (
    (n = Rc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ye(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pt(l, t, i)),
    e !== null && (Me(e, l, i, o), $r(e, l, i)),
    i
  );
}
function hl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function eu(e, t) {
  cs(e, t), (e = e.alternate) && cs(e, t);
}
function wp() {
  return null;
}
var Oc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function tu(e) {
  this._internalRoot = e;
}
Tl.prototype.render = tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  zl(e, t, null, null);
};
Tl.prototype.unmount = tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function () {
      zl(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ca();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++);
    lt.splice(n, 0, e), n === 0 && da(e);
  }
};
function nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function fs() {}
function Sp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var a = hl(i);
        o.call(a);
      };
    }
    var i = jc(t, r, e, 0, null, !1, !1, '', fs);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = hl(s);
      u.call(a);
    };
  }
  var s = bi(e, 0, !1, null, null, !1, !1, '', fs);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      zl(t, s, n, r);
    }),
    s
  );
}
function Rl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = hl(i);
        u.call(s);
      };
    }
    zl(t, i, e, l);
  } else i = Sp(n, t, e, l, r);
  return hl(i);
}
sa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = On(t.pendingLanes);
        n !== 0 &&
          (ki(t, n | 1), ve(t, Y()), !(M & 6) && ((mn = Y() + 500), kt()));
      }
      break;
    case 13:
      $t(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ae();
          Me(r, e, 1, l);
        }
      }),
        eu(e, 1);
  }
};
_i = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ae();
      Me(t, e, 134217728, n);
    }
    eu(e, 134217728);
  }
};
aa = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ae();
      Me(n, e, t, r);
    }
    eu(e, t);
  }
};
ca = function () {
  return F;
};
fa = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
zo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ko(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = kl(r);
            if (!l) throw Error(S(90));
            As(r), ko(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Hs(e, n);
      break;
    case 'select':
      (t = n.value), t != null && nn(e, !!n.multiple, t, !1);
  }
};
Js = Gi;
qs = $t;
var kp = { usingClientEntryPoint: !1, Events: [dr, Gt, kl, Gs, Zs, Gi] },
  Tn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  _p = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ta(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || wp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      (gl = jr.inject(_p)), (Ve = jr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kp;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nu(t)) throw Error(S(200));
  return yp(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!nu(e)) throw Error(S(299));
  var n = !1,
    r = '',
    l = Oc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = bi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    new tu(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(S(188))
      : ((e = Object.keys(e).join(',')), Error(S(268, e)));
  return (e = ta(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return $t(e);
};
ke.hydrate = function (e, t, n) {
  if (!Ll(t)) throw Error(S(200));
  return Rl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!nu(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Oc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = jc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ge] = t.current),
    qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Tl(t);
};
ke.render = function (e, t, n) {
  if (!Ll(t)) throw Error(S(200));
  return Rl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Ll(e)) throw Error(S(40));
  return e._reactRootContainer
    ? ($t(function () {
        Rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Gi;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ll(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Rl(e, t, n, !1, r);
};
ke.version = '18.3.1-next-f1338f8080-20240426';
function Ic() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
    } catch (e) {
      console.error(e);
    }
}
Ic(), (Is.exports = ke);
var xp = Is.exports,
  ds = xp;
(ho.createRoot = ds.createRoot), (ho.hydrateRoot = ds.hydrateRoot);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ur() {
  return (
    (ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ur.apply(this, arguments)
  );
}
var st;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(st || (st = {}));
const ps = 'popstate';
function Ep(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ui(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : Fc(l);
  }
  return Pp(t, n, null, e);
}
function J(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Mc(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Cp() {
  return Math.random().toString(36).substr(2, 8);
}
function hs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ui(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ur(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? wn(t) : t,
      { state: n, key: (t && t.key) || r || Cp() }
    )
  );
}
function Fc(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function wn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Pp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = st.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), i.replaceState(ur({}, i.state, { idx: a }), ''));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    u = st.Pop;
    let x = h(),
      f = x == null ? null : x - a;
    (a = x), s && s({ action: u, location: w.location, delta: f });
  }
  function m(x, f) {
    u = st.Push;
    let c = ui(w.location, x, f);
    a = h() + 1;
    let d = hs(c, a),
      g = w.createHref(c);
    try {
      i.pushState(d, '', g);
    } catch (_) {
      if (_ instanceof DOMException && _.name === 'DataCloneError') throw _;
      l.location.assign(g);
    }
    o && s && s({ action: u, location: w.location, delta: 1 });
  }
  function v(x, f) {
    u = st.Replace;
    let c = ui(w.location, x, f);
    a = h();
    let d = hs(c, a),
      g = w.createHref(c);
    i.replaceState(d, '', g),
      o && s && s({ action: u, location: w.location, delta: 0 });
  }
  function y(x) {
    let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof x == 'string' ? x : Fc(x);
    return (
      (c = c.replace(/ $/, '%20')),
      J(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(x) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(ps, p),
        (s = x),
        () => {
          l.removeEventListener(ps, p), (s = null);
        }
      );
    },
    createHref(x) {
      return t(l, x);
    },
    createURL: y,
    encodeLocation(x) {
      let f = y(x);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: v,
    go(x) {
      return i.go(x);
    },
  };
  return w;
}
var ms;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ms || (ms = {}));
function Np(e, t, n) {
  return n === void 0 && (n = '/'), zp(e, t, n, !1);
}
function zp(e, t, n, r) {
  let l = typeof t == 'string' ? wn(t) : t,
    o = Uc(l.pathname || '/', n);
  if (o == null) return null;
  let i = Dc(e);
  Tp(i);
  let u = null;
  for (let s = 0; u == null && s < i.length; ++s) {
    let a = Bp(o);
    u = $p(i[s], a, r);
  }
  return u;
}
function Dc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith('/') &&
      (J(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = Ot([r, s.relativePath]),
      h = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (J(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      Dc(o.children, t, h, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Fp(a, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let s of $c(o.path)) l(o, i, s);
    }),
    t
  );
}
function $c(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = $c(r.join('/')),
    u = [];
  return (
    u.push(...i.map((s) => (s === '' ? o : [o, s].join('/')))),
    l && u.push(...i),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function Tp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Dp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Lp = /^:[\w-]+$/,
  Rp = 3,
  jp = 2,
  Op = 1,
  Ip = 10,
  Mp = -2,
  vs = (e) => e === '*';
function Fp(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(vs) && (r += Mp),
    t && (r += jp),
    n
      .filter((l) => !vs(l))
      .reduce((l, o) => l + (Lp.test(o) ? Rp : o === '' ? Op : Ip), r)
  );
}
function Dp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $p(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    o = '/',
    i = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      h = o === '/' ? t : t.slice(o.length) || '/',
      p = gs(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        h
      ),
      m = s.route;
    if (
      (!p &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (p = gs(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          h
        )),
      !p)
    )
      return null;
    Object.assign(l, p.params),
      i.push({
        params: l,
        pathname: Ot([o, p.pathname]),
        pathnameBase: Kp(Ot([o, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== '/' && (o = Ot([o, p.pathnameBase]));
  }
  return i;
}
function gs(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Up(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: v } = h;
      if (m === '*') {
        let w = u[p] || '';
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const y = u[p];
      return (
        v && !y ? (a[m] = void 0) : (a[m] = (y || '').replace(/%2F/g, '/')), a
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Up(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Mc(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Bp(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Mc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Uc(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Vp(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? wn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Ap(n, t)) : t,
    search: Yp(r),
    hash: Xp(l),
  };
}
function Ap(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function co(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Wp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Hp(e, t) {
  let n = Wp(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Qp(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = wn(e))
    : ((l = ur({}, e)),
      J(
        !l.pathname || !l.pathname.includes('?'),
        co('?', 'pathname', 'search', l)
      ),
      J(
        !l.pathname || !l.pathname.includes('#'),
        co('#', 'pathname', 'hash', l)
      ),
      J(!l.search || !l.search.includes('#'), co('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    u;
  if (i == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith('..')) {
      let m = i.split('/');
      for (; m[0] === '..'; ) m.shift(), (p -= 1);
      l.pathname = m.join('/');
    }
    u = p >= 0 ? t[p] : '/';
  }
  let s = Vp(l, u),
    a = i && i !== '/' && i.endsWith('/'),
    h = (o || i === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || h) && (s.pathname += '/'), s;
}
const Ot = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Kp = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Yp = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Xp = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Gp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Bc = ['post', 'put', 'patch', 'delete'];
new Set(Bc);
const Zp = ['get', ...Bc];
new Set(Zp);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sr() {
  return (
    (sr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sr.apply(this, arguments)
  );
}
const ru = k.createContext(null),
  Jp = k.createContext(null),
  jl = k.createContext(null),
  Ol = k.createContext(null),
  Sn = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vc = k.createContext(null);
function Il() {
  return k.useContext(Ol) != null;
}
function Ac() {
  return Il() || J(!1), k.useContext(Ol).location;
}
function Wc(e) {
  k.useContext(jl).static || k.useLayoutEffect(e);
}
function Ml() {
  let { isDataRoute: e } = k.useContext(Sn);
  return e ? ch() : qp();
}
function qp() {
  Il() || J(!1);
  let e = k.useContext(ru),
    { basename: t, future: n, navigator: r } = k.useContext(jl),
    { matches: l } = k.useContext(Sn),
    { pathname: o } = Ac(),
    i = JSON.stringify(Hp(l, n.v7_relativeSplatPath)),
    u = k.useRef(!1);
  return (
    Wc(() => {
      u.current = !0;
    }),
    k.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == 'number') {
          r.go(a);
          return;
        }
        let p = Qp(a, JSON.parse(i), o, h.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : Ot([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, i, o, e]
    )
  );
}
function bp(e, t) {
  return eh(e, t);
}
function eh(e, t, n, r) {
  Il() || J(!1);
  let { navigator: l } = k.useContext(jl),
    { matches: o } = k.useContext(Sn),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : '/';
  i && i.route;
  let a = Ac(),
    h;
  if (t) {
    var p;
    let x = typeof t == 'string' ? wn(t) : t;
    s === '/' || ((p = x.pathname) != null && p.startsWith(s)) || J(!1),
      (h = x);
  } else h = a;
  let m = h.pathname || '/',
    v = m;
  if (s !== '/') {
    let x = s.replace(/^\//, '').split('/');
    v = '/' + m.replace(/^\//, '').split('/').slice(x.length).join('/');
  }
  let y = Np(e, { pathname: v }),
    w = oh(
      y &&
        y.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, u, x.params),
            pathname: Ot([
              s,
              l.encodeLocation
                ? l.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? s
                : Ot([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && w
    ? k.createElement(
        Ol.Provider,
        {
          value: {
            location: sr(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              h
            ),
            navigationType: st.Pop,
          },
        },
        w
      )
    : w;
}
function th() {
  let e = ah(),
    t = Gp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement('h2', null, 'Unexpected Application Error!'),
    k.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? k.createElement('pre', { style: l }, n) : null,
    null
  );
}
const nh = k.createElement(th, null);
class rh extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          Sn.Provider,
          { value: this.props.routeContext },
          k.createElement(Vc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function lh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(ru);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Sn.Provider, { value: t }, r)
  );
}
function oh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = i.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    h >= 0 || J(!1), (i = i.slice(0, Math.min(i.length, h + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < i.length; h++) {
      let p = i[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
        p.route.id)
      ) {
        let { loaderData: m, errors: v } = n,
          y =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!v || v[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((h, p, m) => {
    let v,
      y = !1,
      w = null,
      x = null;
    n &&
      ((v = u && p.route.id ? u[p.route.id] : void 0),
      (w = p.route.errorElement || nh),
      s &&
        (a < 0 && m === 0
          ? ((y = !0), (x = null))
          : a === m &&
            ((y = !0), (x = p.route.hydrateFallbackElement || null))));
    let f = t.concat(i.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          v
            ? (d = w)
            : y
            ? (d = x)
            : p.route.Component
            ? (d = k.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          k.createElement(lh, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? k.createElement(rh, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: v,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Hc = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Hc || {}),
  ml = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(ml || {});
function ih(e) {
  let t = k.useContext(ru);
  return t || J(!1), t;
}
function uh(e) {
  let t = k.useContext(Jp);
  return t || J(!1), t;
}
function sh(e) {
  let t = k.useContext(Sn);
  return t || J(!1), t;
}
function Qc(e) {
  let t = sh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || J(!1), n.route.id;
}
function ah() {
  var e;
  let t = k.useContext(Vc),
    n = uh(ml.UseRouteError),
    r = Qc(ml.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ch() {
  let { router: e } = ih(Hc.UseNavigateStable),
    t = Qc(ml.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Wc(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, sr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Wt(e) {
  J(!1);
}
function fh(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = st.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  Il() && J(!1);
  let s = t.replace(/^\/*/, '/'),
    a = k.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: sr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, i]
    );
  typeof r == 'string' && (r = wn(r));
  let {
      pathname: h = '/',
      search: p = '',
      hash: m = '',
      state: v = null,
      key: y = 'default',
    } = r,
    w = k.useMemo(() => {
      let x = Uc(h, s);
      return x == null
        ? null
        : {
            location: { pathname: x, search: p, hash: m, state: v, key: y },
            navigationType: l,
          };
    }, [s, h, p, m, v, y, l]);
  return w == null
    ? null
    : k.createElement(
        jl.Provider,
        { value: a },
        k.createElement(Ol.Provider, { children: n, value: w })
      );
}
function dh(e) {
  let { children: t, location: n } = e;
  return bp(si(t), n);
}
new Promise(() => {});
function si(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, si(r.props.children, o));
        return;
      }
      r.type !== Wt && J(!1), !r.props.index || !r.props.children || J(!1);
      let i = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = si(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const ph = '6';
try {
  window.__reactRouterVersion = ph;
} catch {}
const hh = 'startTransition',
  ys = df[hh];
function mh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = k.useRef();
  o.current == null && (o.current = Ep({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = k.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    h = k.useCallback(
      (p) => {
        a && ys ? ys(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    k.useLayoutEffect(() => i.listen(h), [i, h]),
    k.createElement(fh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
var ws;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(ws || (ws = {}));
var Ss;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Ss || (Ss = {}));
const Kc = '/Test_number_one/assets/logo-C9zLG0WD.png',
  vh = '_container_49vxi_1',
  gh = '_container_all_49vxi_11',
  yh = '_logo_49vxi_25',
  wh = '_size_shadow_49vxi_37',
  Sh = '_name_input_49vxi_67',
  kh = '_settings_49vxi_95',
  _h = '_lang_49vxi_105',
  xh = '_next_49vxi_115',
  Eh = '_title_49vxi_127',
  xe = {
    container: vh,
    container_all: gh,
    logo: yh,
    size_shadow: wh,
    name_input: Sh,
    settings: kh,
    lang: _h,
    next: xh,
    title: Eh,
  },
  Ch = ({ setName: e }) => {
    const [t, n] = k.useState(''),
      r = Ml(),
      l = () => {
        t ? (e(t), r('/start')) : alert('Введіть Прізвище');
      };
    return T.jsxs('div', {
      className: xe.container_all,
      children: [
        T.jsx('h1', { className: xe.title, children: 'Тестування' }),
        T.jsx('img', { src: Kc, alt: 'logo', className: `${xe.logo}` }),
        T.jsxs('div', {
          className: xe.container,
          children: [
            T.jsx('input', {
              className: `${xe.name_input} ${xe.size_shadow}`,
              type: 'text',
              value: t,
              onChange: (o) => n(o.target.value),
              placeholder: 'прізвище...',
            }),
            T.jsx('button', {
              className: `${xe.settings} ${xe.size_shadow}`,
              children: 'Налаштування',
            }),
            T.jsx('button', {
              className: `${xe.lang} ${xe.size_shadow}`,
              children: 'Мова тесту',
            }),
            T.jsx('button', {
              onClick: l,
              className: `${xe.next} ${xe.size_shadow}`,
              children: 'Далі',
            }),
          ],
        }),
      ],
    });
  },
  Ph = '_logo_container_ook9m_1',
  Nh = '_text_inst_ook9m_19',
  zh = '_instruction_ook9m_27',
  Th = '_instruction_text_ook9m_37',
  Lh = '_container_ook9m_59',
  Rh = '_start_ook9m_73',
  At = {
    logo_container: Ph,
    text_inst: Nh,
    instruction: zh,
    instruction_text: Th,
    container: Lh,
    start: Rh,
  },
  Yc = '/Test_number_one/assets/logo_instruction-Cpzm7zZS.gif',
  jh = () => {
    const e = Ml(),
      t = () => {
        e('/game');
      };
    return T.jsxs('div', {
      className: At.container,
      children: [
        T.jsx('div', {
          className: At.logo_container,
          children: T.jsx('h2', { children: 'Тестування' }),
        }),
        T.jsx('img', { src: Yc, alt: 'Картинка', className: At.instruction }),
        T.jsx('div', {
          className: At.instruction_text,
          children: T.jsxs('p', {
            className: At.text_inst,
            children: [
              T.jsx('b', { children: 'Інструкція:' }),
              ` Перед вами будуть з'являтися числа від 30 до 1. Натискайте на них у зворотньому порядку якомога швидше. Після завершення першого тесту натисніть кнопку "Далі" для повторного проходження. Всього буде два тестування.`,
            ],
          }),
        }),
        T.jsx('button', { onClick: t, className: At.start, children: 'Старт' }),
      ],
    });
  },
  Oh = '_logo_container_1ir1v_3',
  Ih = '_container_1ir1v_21',
  Mh = '_timer_1ir1v_35',
  fo = { logo_container: Oh, container: Ih, timer: Mh },
  Fh = (e) => {
    const t = String(Math.floor(e / 60)).padStart(2, '0'),
      n = String(e % 60).padStart(2, '0');
    return `${t}:${n}`;
  },
  Dh = ({ run: e, onStop: t }) => {
    const [n, r] = k.useState(0),
      [l, o] = k.useState(!0);
    return (
      k.useEffect(() => {
        let i;
        return (
          e
            ? (o(!0),
              (i = setInterval(() => {
                r((u) => u + 1);
              }, 1e3)))
            : (t(n), clearInterval(i), o(!1)),
          () => clearInterval(i)
        );
      }, [e]),
      T.jsxs('div', {
        className: fo.container,
        children: [
          T.jsxs('div', {
            className: fo.logo_container,
            children: [T.jsx('h2', { children: 'Тестування' }), ' '],
          }),
          l && T.jsx('p', { className: fo.timer, children: Fh(n) }),
        ],
      })
    );
  },
  $h = '_circle_1p7iw_1',
  Uh = '_game_container_1p7iw_47',
  Bh = '_game_instruction_1p7iw_61',
  Vh = '_send_1p7iw_79',
  Ah = '_text_1p7iw_113',
  Wh = '_loader_container_1p7iw_119',
  Hh = '_loader_1p7iw_119',
  Qh = '_spinner_1p7iw_143',
  Kh = '_spin_1p7iw_143',
  tt = {
    circle: $h,
    game_container: Uh,
    game_instruction: Bh,
    send: Vh,
    text: Ah,
    loader_container: Wh,
    loader: Hh,
    spinner: Qh,
    spin: Kh,
  },
  ks = (e) => ({
    top: `${Math.floor(Math.random() * 90)}%`,
    left: `${Math.floor(Math.random() * 85)}%`,
    zIndex: e,
  }),
  Yh = ({ value: e, style: t, index: n, onClick: r }) =>
    T.jsx('div', {
      'data-index': n,
      onClick: r,
      onTouchStart: r,
      style: { ...t },
      className: tt.circle,
      children: e,
    }),
  Xh = ({ name: e }) => {
    const [t, n] = k.useState([]),
      [r, l] = k.useState(30),
      [o, i] = k.useState(null),
      [u, s] = k.useState(!0),
      [a, h] = k.useState(0),
      [p, m] = k.useState(!1),
      v = k.useRef(null),
      y = k.useRef(null),
      w = Ml(),
      [x, f] = k.useState(!0),
      [c, d] = k.useState(!0),
      g = () => {
        const R = [30, 29, 28, 27, 26].map((P) => ({ value: P, style: ks(P) }));
        n(R), l(30), i(null), m(!1), s(!0);
      };
    k.useEffect(() => {
      const R = localStorage.getItem('firstTest') === null;
      return (
        f(R),
        g(),
        (async () => {
          try {
            const $ = await navigator.mediaDevices.getUserMedia({ video: !0 });
            return (
              v.current &&
                ((v.current.srcObject = $),
                (v.current.onloadedmetadata = () => {
                  v.current && v.current.play();
                })),
              $
            );
          } catch ($) {
            console.error('Error accessing camera:', $);
          }
        })(),
        () => {
          v.current &&
            v.current.srcObject &&
            v.current.srcObject.getTracks().forEach((De) => De.stop());
        }
      );
    }, []);
    const _ = k.useCallback(() => {
        if (v.current && y.current) {
          const R = v.current,
            P = y.current;
          (P.width = R.videoWidth),
            (P.height = R.videoHeight),
            P.getContext('2d').drawImage(R, 0, 0, P.width, P.height);
          const De = P.toDataURL('image/png');
          i(De), m(!0), s(!1);
        }
      }, []),
      N = k.useCallback(
        (R) => {
          const P = R.target.dataset.index;
          n(($) => {
            if ($[P].value === r) {
              const be = Math.min(...$.map((xt) => xt.value));
              let _t = $.filter((xt, kn) => kn !== parseInt(P, 10));
              if (be > 1) {
                const xt = be - 1;
                _t = [..._t, { value: xt, style: ks(xt) }];
              }
              return l(r - 1), _t.length === 0 && setTimeout(_, 100), _t;
            }
            return $;
          });
        },
        [r, _]
      ),
      z = (R) => {
        h(R);
      },
      L = () => {
        const R = new FormData();
        if (
          (R.append('name', e),
          R.append('time', a),
          R.append('photo', o),
          R.append('status', a > 25 ? 'Провалено' : 'Пройдено'),
          v.current && v.current.srcObject)
        ) {
          const P = v.current.srcObject.getTracks();
          console.log(P), P.forEach(($) => $.stop());
        }
        d(!1),
          fetch(
            'https://script.google.com/macros/s/AKfycbz6xXExhnlVFKUDMDhj0vPLKbTQfvw_6IagXYBedvQehVlU6j7RLg3OmCo-xtr7H5P6/exec',
            { method: 'POST', body: R }
          )
            .then((P) => {
              P.text();
            })
            .then((P) => {
              console.log('Success:', P),
                d(!0),
                h(0),
                x
                  ? (localStorage.setItem('firstTest', 'done'), w('/nextTest'))
                  : w('/thanks');
            })
            .catch((P) => {
              console.error('Error:', P);
            });
      };
    return T.jsxs('div', {
      className: tt.game_container,
      children: [
        T.jsx(Dh, { run: u, onStop: z }),
        T.jsxs('div', {
          style: { position: 'relative', width: '100%', height: '100%' },
          children: [
            t.map((R, P) =>
              T.jsx(
                Yh,
                { index: P, value: R.value, style: R.style, onClick: N },
                P
              )
            ),
            T.jsx('video', {
              ref: v,
              style: { display: 'none' },
              autoPlay: !0,
            }),
            T.jsx('canvas', { ref: y, style: { display: 'none' } }),
            o &&
              T.jsxs('div', {
                className: tt.game_container,
                children: [
                  c &&
                    T.jsx('button', {
                      onClick: L,
                      className: tt.send,
                      children: 'Далі',
                    }),
                  !c &&
                    T.jsxs(T.Fragment, {
                      children: [
                        T.jsx('h2', { children: 'Зачекайте, будь ласка...' }),
                        T.jsx('div', {
                          className: tt.loader_container,
                          children: T.jsx('div', {
                            className: `${tt.loader} ${tt.spinner}`,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
          ],
        }),
        T.jsxs('p', {
          className: tt.game_instruction,
          children: [
            T.jsx('b', { children: 'Інструкція:' }),
            " перед вами будуть з'являтися числа від 30 до 1. Натискайте на них у зворотньому порядку якомога швидше.",
          ],
        }),
      ],
    });
  },
  Gh = '_container_all_xwvzq_1',
  Zh = '_logo_xwvzq_15',
  Jh = '_thanks_text_xwvzq_27',
  po = { container_all: Gh, logo: Zh, thanks_text: Jh },
  qh = () => (
    localStorage.clear(),
    T.jsxs('div', {
      className: po.container_all,
      children: [
        T.jsx('h1', { children: 'Тестування' }),
        T.jsx('img', { src: Kc, alt: 'logo', className: `${po.logo}` }),
        T.jsx('p', {
          className: po.thanks_text,
          children: 'Дякую за проходження',
        }),
      ],
    })
  ),
  bh = '_container_all_e8al7_1',
  em = '_logo_e8al7_15',
  tm = '_thanks_text_e8al7_23',
  nm = '_next_e8al7_55',
  rm = '_instruction_e8al7_89',
  Ln = {
    container_all: bh,
    logo: em,
    thanks_text: tm,
    next: nm,
    instruction: rm,
  },
  lm = () => {
    const e = Ml(),
      t = () => {
        e('/game');
      };
    return T.jsxs('div', {
      className: Ln.container_all,
      children: [
        T.jsx('h1', { children: 'Тестування' }),
        T.jsx('img', { src: Yc, alt: 'Картинка', className: Ln.instruction }),
        T.jsx('p', {
          className: Ln.thanks_text,
          children:
            'Будь ласка, підготуйтесь до другого тестування. Коли будете готові, натисніть кнопку "Пройти ще раз"',
        }),
        T.jsx('button', {
          onClick: t,
          className: `${Ln.next} ${Ln.size_shadow}`,
          children: 'Пройти ще раз',
        }),
      ],
    });
  },
  om = () => {
    const [e, t] = k.useState('');
    return T.jsx(mh, {
      basename: '/Test_number_one',
      children: T.jsxs(dh, {
        children: [
          T.jsx(Wt, { path: '/', element: T.jsx(Ch, { setName: t }) }),
          T.jsx(Wt, { path: '/start', element: T.jsx(jh, {}) }),
          T.jsx(Wt, { path: '/game', element: T.jsx(Xh, { name: e }) }),
          T.jsx(Wt, { path: '/thanks', element: T.jsx(qh, {}) }),
          T.jsx(Wt, { path: '/nextTest', element: T.jsx(lm, {}) }),
        ],
      }),
    });
  };
ho.createRoot(document.getElementById('root')).render(
  T.jsx(js.StrictMode, { children: T.jsx(om, {}) })
);
