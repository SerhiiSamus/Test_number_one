function Kc(e, t) {
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
function Yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var ks = { exports: {} },
  dl = {},
  xs = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var or = Symbol.for('react.element'),
  Gc = Symbol.for('react.portal'),
  Xc = Symbol.for('react.fragment'),
  Zc = Symbol.for('react.strict_mode'),
  Jc = Symbol.for('react.profiler'),
  qc = Symbol.for('react.provider'),
  bc = Symbol.for('react.context'),
  ef = Symbol.for('react.forward_ref'),
  tf = Symbol.for('react.suspense'),
  nf = Symbol.for('react.memo'),
  rf = Symbol.for('react.lazy'),
  ru = Symbol.iterator;
function lf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ru && e[ru]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var _s = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Es = Object.assign,
  Cs = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cs),
    (this.updater = n || _s);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ps() {}
Ps.prototype = dn.prototype;
function ii(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cs),
    (this.updater = n || _s);
}
var ui = (ii.prototype = new Ps());
ui.constructor = ii;
Es(ui, dn.prototype);
ui.isPureReactComponent = !0;
var lu = Array.isArray,
  Ns = Object.prototype.hasOwnProperty,
  si = { current: null },
  zs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ts(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Ns.call(t, r) && !zs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: or,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: si.current,
  };
}
function of(e, t) {
  return {
    $$typeof: or,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ai(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === or;
}
function uf(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ou = /\/+/g;
function Ml(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? uf('' + e.key)
    : t.toString(36);
}
function Tr(e, t, n, r, l) {
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
          case or:
          case Gc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Ml(i, 0) : r),
      lu(l)
        ? ((n = ''),
          e != null && (n = e.replace(ou, '$&/') + '/'),
          Tr(l, t, n, '', function (a) {
            return a;
          }))
        : l != null &&
          (ai(l) &&
            (l = of(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(ou, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), lu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ml(o, u);
      i += Tr(o, t, n, s, l);
    }
  else if (((s = lf(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ml(o, u++)), (i += Tr(o, t, n, s, l));
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
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tr(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function sf(e) {
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
  Lr = { transition: null },
  af = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: si,
  };
function Ls() {
  throw Error('act(...) is not supported in production builds of React.');
}
O.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
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
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ai(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
O.Component = dn;
O.Fragment = Xc;
O.Profiler = Jc;
O.PureComponent = ii;
O.StrictMode = Zc;
O.Suspense = tf;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = af;
O.act = Ls;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Es({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = si.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ns.call(t, s) &&
        !zs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: or, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: bc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qc, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Ts;
O.createFactory = function (e) {
  var t = Ts.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: ef, render: e };
};
O.isValidElement = ai;
O.lazy = function (e) {
  return { $$typeof: rf, _payload: { _status: -1, _result: e }, _init: sf };
};
O.memo = function (e, t) {
  return { $$typeof: nf, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
O.unstable_act = Ls;
O.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ce.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
O.useId = function () {
  return ce.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ce.current.useRef(e);
};
O.useState = function (e) {
  return ce.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ce.current.useTransition();
};
O.version = '18.3.1';
xs.exports = O;
var _ = xs.exports;
const Rs = Yc(_),
  cf = Kc({ __proto__: null, default: Rs }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff = _,
  df = Symbol.for('react.element'),
  pf = Symbol.for('react.fragment'),
  hf = Object.prototype.hasOwnProperty,
  mf = ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function js(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) hf.call(t, r) && !vf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: df,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: mf.current,
  };
}
dl.Fragment = pf;
dl.jsx = js;
dl.jsxs = js;
ks.exports = dl;
var T = ks.exports,
  co = {},
  Os = { exports: {} },
  ke = {},
  Is = { exports: {} },
  Ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, L) {
    var j = N.length;
    N.push(L);
    e: for (; 0 < j; ) {
      var Q = (j - 1) >>> 1,
        J = N[Q];
      if (0 < l(J, L)) (N[Q] = L), (N[j] = J), (j = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var L = N[0],
      j = N.pop();
    if (j !== L) {
      N[0] = j;
      e: for (var Q = 0, J = N.length, cr = J >>> 1; Q < cr; ) {
        var St = 2 * (Q + 1) - 1,
          Il = N[St],
          kt = St + 1,
          fr = N[kt];
        if (0 > l(Il, j))
          kt < J && 0 > l(fr, Il)
            ? ((N[Q] = fr), (N[kt] = j), (Q = kt))
            : ((N[Q] = Il), (N[St] = j), (Q = St));
        else if (kt < J && 0 > l(fr, j)) (N[Q] = fr), (N[kt] = j), (Q = kt);
        else break e;
      }
    }
    return L;
  }
  function l(N, L) {
    var j = N.sortIndex - L.sortIndex;
    return j !== 0 ? j : N.id - L.id;
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
    S = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= N)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function g(N) {
    if (((S = !1), d(N), !y))
      if (n(s) !== null) (y = !0), jl(k);
      else {
        var L = n(a);
        L !== null && Ol(g, L.startTime - N);
      }
  }
  function k(N, L) {
    (y = !1), S && ((S = !1), f(z), (z = -1)), (v = !0);
    var j = m;
    try {
      for (
        d(L), p = n(s);
        p !== null && (!(p.expirationTime > L) || (N && !ee()));

      ) {
        var Q = p.callback;
        if (typeof Q == 'function') {
          (p.callback = null), (m = p.priorityLevel);
          var J = Q(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof J == 'function' ? (p.callback = J) : p === n(s) && r(s),
            d(L);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var cr = !0;
      else {
        var St = n(a);
        St !== null && Ol(g, St.startTime - L), (cr = !1);
      }
      return cr;
    } finally {
      (p = null), (m = j), (v = !1);
    }
  }
  var x = !1,
    C = null,
    z = -1,
    $ = 5,
    R = -1;
  function ee() {
    return !(e.unstable_now() - R < $);
  }
  function wt() {
    if (C !== null) {
      var N = e.unstable_now();
      R = N;
      var L = !0;
      try {
        L = C(!0, N);
      } finally {
        L ? gn() : ((x = !1), (C = null));
      }
    } else x = !1;
  }
  var gn;
  if (typeof c == 'function')
    gn = function () {
      c(wt);
    };
  else if (typeof MessageChannel < 'u') {
    var nu = new MessageChannel(),
      Qc = nu.port2;
    (nu.port1.onmessage = wt),
      (gn = function () {
        Qc.postMessage(null);
      });
  } else
    gn = function () {
      E(wt, 0);
    };
  function jl(N) {
    (C = N), x || ((x = !0), gn());
  }
  function Ol(N, L) {
    z = E(function () {
      N(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), jl(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : ($ = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var j = m;
      m = L;
      try {
        return N();
      } finally {
        m = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, L) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var j = m;
      m = N;
      try {
        return L();
      } finally {
        m = j;
      }
    }),
    (e.unstable_scheduleCallback = function (N, L, j) {
      var Q = e.unstable_now();
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? Q + j : Q))
          : (j = Q),
        N)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = j + J),
        (N = {
          id: h++,
          callback: L,
          priorityLevel: N,
          startTime: j,
          expirationTime: J,
          sortIndex: -1,
        }),
        j > Q
          ? ((N.sortIndex = j),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (S ? (f(z), (z = -1)) : (S = !0), Ol(g, j - Q)))
          : ((N.sortIndex = J), t(s, N), y || v || ((y = !0), jl(k))),
        N
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (N) {
      var L = m;
      return function () {
        var j = m;
        m = L;
        try {
          return N.apply(this, arguments);
        } finally {
          m = j;
        }
      };
    });
})(Ms);
Is.exports = Ms;
var gf = Is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf = _,
  Se = gf;
function w(e) {
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
var Fs = new Set(),
  Bn = {};
function Mt(e, t) {
  ln(e, t), ln(e + 'Capture', t);
}
function ln(e, t) {
  for (Bn[e] = t, e = 0; e < t.length; e++) Fs.add(t[e]);
}
var Ye = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  fo = Object.prototype.hasOwnProperty,
  wf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  iu = {},
  uu = {};
function Sf(e) {
  return fo.call(uu, e)
    ? !0
    : fo.call(iu, e)
    ? !1
    : wf.test(e)
    ? (uu[e] = !0)
    : ((iu[e] = !0), !1);
}
function kf(e, t, n, r) {
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
function xf(e, t, n, r) {
  if (t === null || typeof t > 'u' || kf(e, t, n, r)) return !0;
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
var ci = /[\-:]([a-z])/g;
function fi(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ci, fi);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ci, fi);
    re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ci, fi);
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
function di(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (xf(t, n, l, r) && (n = null),
    r || l === null
      ? Sf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Je = yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = Symbol.for('react.element'),
  Bt = Symbol.for('react.portal'),
  Vt = Symbol.for('react.fragment'),
  pi = Symbol.for('react.strict_mode'),
  po = Symbol.for('react.profiler'),
  Ds = Symbol.for('react.provider'),
  Us = Symbol.for('react.context'),
  hi = Symbol.for('react.forward_ref'),
  ho = Symbol.for('react.suspense'),
  mo = Symbol.for('react.suspense_list'),
  mi = Symbol.for('react.memo'),
  be = Symbol.for('react.lazy'),
  $s = Symbol.for('react.offscreen'),
  su = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (su && e[su]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var W = Object.assign,
  Fl;
function Pn(e) {
  if (Fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fl = (t && t[1]) || '';
    }
  return (
    `
` +
    Fl +
    e
  );
}
var Dl = !1;
function Ul(e, t) {
  if (!e || Dl) return '';
  Dl = !0;
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
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Pn(e) : '';
}
function _f(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn('Lazy');
    case 13:
      return Pn('Suspense');
    case 19:
      return Pn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ul(e.type, !1)), e;
    case 11:
      return (e = Ul(e.type.render, !1)), e;
    case 1:
      return (e = Ul(e.type, !0)), e;
    default:
      return '';
  }
}
function vo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Vt:
      return 'Fragment';
    case Bt:
      return 'Portal';
    case po:
      return 'Profiler';
    case pi:
      return 'StrictMode';
    case ho:
      return 'Suspense';
    case mo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Us:
        return (e.displayName || 'Context') + '.Consumer';
      case Ds:
        return (e._context.displayName || 'Context') + '.Provider';
      case hi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case mi:
        return (
          (t = e.displayName || null), t !== null ? t : vo(e.type) || 'Memo'
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return vo(e(t));
        } catch {}
    }
  return null;
}
function Ef(e) {
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
      return vo(t);
    case 8:
      return t === pi ? 'StrictMode' : 'Mode';
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
function ht(e) {
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
function Bs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Cf(e) {
  var t = Bs(e) ? 'checked' : 'value',
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
function hr(e) {
  e._valueTracker || (e._valueTracker = Cf(e));
}
function Vs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Bs(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function go(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function au(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function As(e, t) {
  (t = t.checked), t != null && di(e, 'checked', t, !1);
}
function yo(e, t) {
  As(e, t);
  var n = ht(t.value),
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
    ? wo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && wo(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function cu(e, t, n) {
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
function wo(e, t, n) {
  (t !== 'number' || Vr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Nn = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function So(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function fu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Ws(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Hs(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ko(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Hs(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var mr,
  Qs = (function (e) {
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
        mr = mr || document.createElement('div'),
          mr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
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
  Pf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Rn).forEach(function (e) {
  Pf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function Ks(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Ys(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ks(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Nf = W(
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
function xo(e, t) {
  if (t) {
    if (Nf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(w(62));
  }
}
function _o(e, t) {
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
var Eo = null;
function vi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Co = null,
  bt = null,
  en = null;
function pu(e) {
  if ((e = sr(e))) {
    if (typeof Co != 'function') throw Error(w(280));
    var t = e.stateNode;
    t && ((t = gl(t)), Co(e.stateNode, e.type, t));
  }
}
function Gs(e) {
  bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function Xs() {
  if (bt) {
    var e = bt,
      t = en;
    if (((en = bt = null), pu(e), t)) for (e = 0; e < t.length; e++) pu(t[e]);
  }
}
function Zs(e, t) {
  return e(t);
}
function Js() {}
var $l = !1;
function qs(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return Zs(e, t, n);
  } finally {
    ($l = !1), (bt !== null || en !== null) && (Js(), Xs());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gl(n);
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
  if (n && typeof n != 'function') throw Error(w(231, t, typeof n));
  return n;
}
var Po = !1;
if (Ye)
  try {
    var wn = {};
    Object.defineProperty(wn, 'passive', {
      get: function () {
        Po = !0;
      },
    }),
      window.addEventListener('test', wn, wn),
      window.removeEventListener('test', wn, wn);
  } catch {
    Po = !1;
  }
function zf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var jn = !1,
  Ar = null,
  Wr = !1,
  No = null,
  Tf = {
    onError: function (e) {
      (jn = !0), (Ar = e);
    },
  };
function Lf(e, t, n, r, l, o, i, u, s) {
  (jn = !1), (Ar = null), zf.apply(Tf, arguments);
}
function Rf(e, t, n, r, l, o, i, u, s) {
  if ((Lf.apply(this, arguments), jn)) {
    if (jn) {
      var a = Ar;
      (jn = !1), (Ar = null);
    } else throw Error(w(198));
    Wr || ((Wr = !0), (No = a));
  }
}
function Ft(e) {
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
function bs(e) {
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
function hu(e) {
  if (Ft(e) !== e) throw Error(w(188));
}
function jf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(w(188));
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
        if (o === n) return hu(l), e;
        if (o === r) return hu(l), t;
        o = o.sibling;
      }
      throw Error(w(188));
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
        if (!i) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function ea(e) {
  return (e = jf(e)), e !== null ? ta(e) : null;
}
function ta(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ta(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var na = Se.unstable_scheduleCallback,
  mu = Se.unstable_cancelCallback,
  Of = Se.unstable_shouldYield,
  If = Se.unstable_requestPaint,
  K = Se.unstable_now,
  Mf = Se.unstable_getCurrentPriorityLevel,
  gi = Se.unstable_ImmediatePriority,
  ra = Se.unstable_UserBlockingPriority,
  Hr = Se.unstable_NormalPriority,
  Ff = Se.unstable_LowPriority,
  la = Se.unstable_IdlePriority,
  pl = null,
  Be = null;
function Df(e) {
  if (Be && typeof Be.onCommitFiberRoot == 'function')
    try {
      Be.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Bf,
  Uf = Math.log,
  $f = Math.LN2;
function Bf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Uf(e) / $f) | 0)) | 0;
}
var vr = 64,
  gr = 4194304;
function zn(e) {
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
function Qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = zn(u)) : ((o &= i), o !== 0 && (r = zn(o)));
  } else (i = n & ~l), i !== 0 ? (r = zn(i)) : o !== 0 && (r = zn(o));
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
function Vf(e, t) {
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
function Af(e, t) {
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
      ? (!(u & n) || u & r) && (l[i] = Vf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function zo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function oa() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function Bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Wf(e, t) {
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
function yi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function ia(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ua,
  wi,
  sa,
  aa,
  ca,
  To = !1,
  yr = [],
  it = null,
  ut = null,
  st = null,
  Wn = new Map(),
  Hn = new Map(),
  tt = [],
  Hf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function vu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      it = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ut = null;
      break;
    case 'mouseover':
    case 'mouseout':
      st = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Wn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Hn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = sr(t)), t !== null && wi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Qf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (it = Sn(it, e, t, n, r, l)), !0;
    case 'dragenter':
      return (ut = Sn(ut, e, t, n, r, l)), !0;
    case 'mouseover':
      return (st = Sn(st, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return Wn.set(o, Sn(Wn.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Hn.set(o, Sn(Hn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function fa(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bs(n)), t !== null)) {
          (e.blockedOn = t),
            ca(e.priority, function () {
              sa(n);
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
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Eo = r), n.target.dispatchEvent(r), (Eo = null);
    } else return (t = sr(n)), t !== null && wi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function gu(e, t, n) {
  Rr(e) && n.delete(t);
}
function Kf() {
  (To = !1),
    it !== null && Rr(it) && (it = null),
    ut !== null && Rr(ut) && (ut = null),
    st !== null && Rr(st) && (st = null),
    Wn.forEach(gu),
    Hn.forEach(gu);
}
function kn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    To ||
      ((To = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Kf)));
}
function Qn(e) {
  function t(l) {
    return kn(l, e);
  }
  if (0 < yr.length) {
    kn(yr[0], e);
    for (var n = 1; n < yr.length; n++) {
      var r = yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && kn(it, e),
      ut !== null && kn(ut, e),
      st !== null && kn(st, e),
      Wn.forEach(t),
      Hn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    fa(n), n.blockedOn === null && tt.shift();
}
var tn = Je.ReactCurrentBatchConfig,
  Kr = !0;
function Yf(e, t, n, r) {
  var l = M,
    o = tn.transition;
  tn.transition = null;
  try {
    (M = 1), Si(e, t, n, r);
  } finally {
    (M = l), (tn.transition = o);
  }
}
function Gf(e, t, n, r) {
  var l = M,
    o = tn.transition;
  tn.transition = null;
  try {
    (M = 4), Si(e, t, n, r);
  } finally {
    (M = l), (tn.transition = o);
  }
}
function Si(e, t, n, r) {
  if (Kr) {
    var l = Lo(e, t, n, r);
    if (l === null) Zl(e, t, r, Yr, n), vu(e, r);
    else if (Qf(l, e, t, n, r)) r.stopPropagation();
    else if ((vu(e, r), t & 4 && -1 < Hf.indexOf(e))) {
      for (; l !== null; ) {
        var o = sr(l);
        if (
          (o !== null && ua(o),
          (o = Lo(e, t, n, r)),
          o === null && Zl(e, t, r, Yr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var Yr = null;
function Lo(e, t, n, r) {
  if (((Yr = null), (e = vi(r)), (e = Et(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yr = e), null;
}
function da(e) {
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
      switch (Mf()) {
        case gi:
          return 1;
        case ra:
          return 4;
        case Hr:
        case Ff:
          return 16;
        case la:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  ki = null,
  jr = null;
function pa() {
  if (jr) return jr;
  var e,
    t = ki,
    n = t.length,
    r,
    l = 'value' in rt ? rt.value : rt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Or(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wr() {
  return !0;
}
function yu() {
  return !1;
}
function xe(e) {
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
        ? wr
        : yu),
      (this.isPropagationStopped = yu),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = wr));
      },
      persist: function () {},
      isPersistent: wr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xi = xe(pn),
  ur = W({}, pn, { view: 0, detail: 0 }),
  Xf = xe(ur),
  Vl,
  Al,
  xn,
  hl = W({}, ur, {
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
    getModifierState: _i,
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
        : (e !== xn &&
            (xn && e.type === 'mousemove'
              ? ((Vl = e.screenX - xn.screenX), (Al = e.screenY - xn.screenY))
              : (Al = Vl = 0),
            (xn = e)),
          Vl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Al;
    },
  }),
  wu = xe(hl),
  Zf = W({}, hl, { dataTransfer: 0 }),
  Jf = xe(Zf),
  qf = W({}, ur, { relatedTarget: 0 }),
  Wl = xe(qf),
  bf = W({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ed = xe(bf),
  td = W({}, pn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nd = xe(td),
  rd = W({}, pn, { data: 0 }),
  Su = xe(rd),
  ld = {
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
  od = {
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
  id = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ud(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = id[e]) ? !!t[e] : !1;
}
function _i() {
  return ud;
}
var sd = W({}, ur, {
    key: function (e) {
      if (e.key) {
        var t = ld[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Or(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? od[e.keyCode] || 'Unidentified'
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
    getModifierState: _i,
    charCode: function (e) {
      return e.type === 'keypress' ? Or(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Or(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  ad = xe(sd),
  cd = W({}, hl, {
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
  ku = xe(cd),
  fd = W({}, ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _i,
  }),
  dd = xe(fd),
  pd = W({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hd = xe(pd),
  md = W({}, hl, {
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
  vd = xe(md),
  gd = [9, 13, 27, 32],
  Ei = Ye && 'CompositionEvent' in window,
  On = null;
Ye && 'documentMode' in document && (On = document.documentMode);
var yd = Ye && 'TextEvent' in window && !On,
  ha = Ye && (!Ei || (On && 8 < On && 11 >= On)),
  xu = ' ',
  _u = !1;
function ma(e, t) {
  switch (e) {
    case 'keyup':
      return gd.indexOf(t.keyCode) !== -1;
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
function va(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var At = !1;
function wd(e, t) {
  switch (e) {
    case 'compositionend':
      return va(t);
    case 'keypress':
      return t.which !== 32 ? null : ((_u = !0), xu);
    case 'textInput':
      return (e = t.data), e === xu && _u ? null : e;
    default:
      return null;
  }
}
function Sd(e, t) {
  if (At)
    return e === 'compositionend' || (!Ei && ma(e, t))
      ? ((e = pa()), (jr = ki = rt = null), (At = !1), e)
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
      return ha && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var kd = {
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
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!kd[e.type] : t === 'textarea';
}
function ga(e, t, n, r) {
  Gs(r),
    (t = Gr(t, 'onChange')),
    0 < t.length &&
      ((n = new xi('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var In = null,
  Kn = null;
function xd(e) {
  za(e, 0);
}
function ml(e) {
  var t = Qt(e);
  if (Vs(t)) return e;
}
function _d(e, t) {
  if (e === 'change') return t;
}
var ya = !1;
if (Ye) {
  var Hl;
  if (Ye) {
    var Ql = 'oninput' in document;
    if (!Ql) {
      var Cu = document.createElement('div');
      Cu.setAttribute('oninput', 'return;'),
        (Ql = typeof Cu.oninput == 'function');
    }
    Hl = Ql;
  } else Hl = !1;
  ya = Hl && (!document.documentMode || 9 < document.documentMode);
}
function Pu() {
  In && (In.detachEvent('onpropertychange', wa), (Kn = In = null));
}
function wa(e) {
  if (e.propertyName === 'value' && ml(Kn)) {
    var t = [];
    ga(t, Kn, e, vi(e)), qs(xd, t);
  }
}
function Ed(e, t, n) {
  e === 'focusin'
    ? (Pu(), (In = t), (Kn = n), In.attachEvent('onpropertychange', wa))
    : e === 'focusout' && Pu();
}
function Cd(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ml(Kn);
}
function Pd(e, t) {
  if (e === 'click') return ml(t);
}
function Nd(e, t) {
  if (e === 'input' || e === 'change') return ml(t);
}
function zd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == 'function' ? Object.is : zd;
function Yn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!fo.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var n = Nu(e);
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
    n = Nu(n);
  }
}
function Sa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sa(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ka() {
  for (var e = window, t = Vr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vr(e.document);
  }
  return t;
}
function Ci(e) {
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
function Td(e) {
  var t = ka(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ci(n)) {
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
          (l = zu(n, o));
        var i = zu(n, r);
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
var Ld = Ye && 'documentMode' in document && 11 >= document.documentMode,
  Wt = null,
  Ro = null,
  Mn = null,
  jo = !1;
function Tu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jo ||
    Wt == null ||
    Wt !== Vr(r) ||
    ((r = Wt),
    'selectionStart' in r && Ci(r)
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
    (Mn && Yn(Mn, r)) ||
      ((Mn = r),
      (r = Gr(Ro, 'onSelect')),
      0 < r.length &&
        ((t = new xi('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wt))));
}
function Sr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ht = {
    animationend: Sr('Animation', 'AnimationEnd'),
    animationiteration: Sr('Animation', 'AnimationIteration'),
    animationstart: Sr('Animation', 'AnimationStart'),
    transitionend: Sr('Transition', 'TransitionEnd'),
  },
  Kl = {},
  xa = {};
Ye &&
  ((xa = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ht.animationend.animation,
    delete Ht.animationiteration.animation,
    delete Ht.animationstart.animation),
  'TransitionEvent' in window || delete Ht.transitionend.transition);
function vl(e) {
  if (Kl[e]) return Kl[e];
  if (!Ht[e]) return e;
  var t = Ht[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xa) return (Kl[e] = t[n]);
  return e;
}
var _a = vl('animationend'),
  Ea = vl('animationiteration'),
  Ca = vl('animationstart'),
  Pa = vl('transitionend'),
  Na = new Map(),
  Lu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function vt(e, t) {
  Na.set(e, t), Mt(t, [e]);
}
for (var Yl = 0; Yl < Lu.length; Yl++) {
  var Gl = Lu[Yl],
    Rd = Gl.toLowerCase(),
    jd = Gl[0].toUpperCase() + Gl.slice(1);
  vt(Rd, 'on' + jd);
}
vt(_a, 'onAnimationEnd');
vt(Ea, 'onAnimationIteration');
vt(Ca, 'onAnimationStart');
vt('dblclick', 'onDoubleClick');
vt('focusin', 'onFocus');
vt('focusout', 'onBlur');
vt(Pa, 'onTransitionEnd');
ln('onMouseEnter', ['mouseout', 'mouseover']);
ln('onMouseLeave', ['mouseout', 'mouseover']);
ln('onPointerEnter', ['pointerout', 'pointerover']);
ln('onPointerLeave', ['pointerout', 'pointerover']);
Mt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Mt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Mt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Mt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Mt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Mt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Tn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Od = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Tn));
function Ru(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Rf(r, t, void 0, e), (e.currentTarget = null);
}
function za(e, t) {
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
          Ru(l, u, a), (o = s);
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
          Ru(l, u, a), (o = s);
        }
    }
  }
  if (Wr) throw ((e = No), (Wr = !1), (No = null), e);
}
function D(e, t) {
  var n = t[Do];
  n === void 0 && (n = t[Do] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Ta(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ta(n, e, r, t);
}
var kr = '_reactListening' + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[kr]) {
    (e[kr] = !0),
      Fs.forEach(function (n) {
        n !== 'selectionchange' && (Od.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kr] || ((t[kr] = !0), Xl('selectionchange', !1, t));
  }
}
function Ta(e, t, n, r) {
  switch (da(t)) {
    case 1:
      var l = Yf;
      break;
    case 4:
      l = Gf;
      break;
    default:
      l = Si;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Po ||
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
function Zl(e, t, n, r, l) {
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
          if (((i = Et(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  qs(function () {
    var a = o,
      h = vi(n),
      p = [];
    e: {
      var m = Na.get(e);
      if (m !== void 0) {
        var v = xi,
          y = e;
        switch (e) {
          case 'keypress':
            if (Or(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = ad;
            break;
          case 'focusin':
            (y = 'focus'), (v = Wl);
            break;
          case 'focusout':
            (y = 'blur'), (v = Wl);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Wl;
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
            v = wu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Jf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = dd;
            break;
          case _a:
          case Ea:
          case Ca:
            v = ed;
            break;
          case Pa:
            v = hd;
            break;
          case 'scroll':
            v = Xf;
            break;
          case 'wheel':
            v = vd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = nd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = ku;
        }
        var S = (t & 4) !== 0,
          E = !S && e === 'scroll',
          f = S ? (m !== null ? m + 'Capture' : null) : m;
        S = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = An(c, f)), g != null && S.push(Xn(c, g, d)))),
            E)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((m = new v(m, y, null, n, h)), p.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== Eo &&
            (y = n.relatedTarget || n.fromElement) &&
            (Et(y) || y[Ge]))
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
              (y = y ? Et(y) : null),
              y !== null &&
                ((E = Ft(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = a)),
          v !== y)
        ) {
          if (
            ((S = wu),
            (g = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = ku),
              (g = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (E = v == null ? m : Qt(v)),
            (d = y == null ? m : Qt(y)),
            (m = new S(g, c + 'leave', v, n, h)),
            (m.target = E),
            (m.relatedTarget = d),
            (g = null),
            Et(h) === a &&
              ((S = new S(f, c + 'enter', y, n, h)),
              (S.target = d),
              (S.relatedTarget = E),
              (g = S)),
            (E = g),
            v && y)
          )
            t: {
              for (S = v, f = y, c = 0, d = S; d; d = Dt(d)) c++;
              for (d = 0, g = f; g; g = Dt(g)) d++;
              for (; 0 < c - d; ) (S = Dt(S)), c--;
              for (; 0 < d - c; ) (f = Dt(f)), d--;
              for (; c--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Dt(S)), (f = Dt(f));
              }
              S = null;
            }
          else S = null;
          v !== null && ju(p, m, v, S, !1),
            y !== null && E !== null && ju(p, E, y, S, !0);
        }
      }
      e: {
        if (
          ((m = a ? Qt(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && m.type === 'file'))
        )
          var k = _d;
        else if (Eu(m))
          if (ya) k = Nd;
          else {
            k = Cd;
            var x = Ed;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (k = Pd);
        if (k && (k = k(e, a))) {
          ga(p, k, n, h);
          break e;
        }
        x && x(e, m, a),
          e === 'focusout' &&
            (x = m._wrapperState) &&
            x.controlled &&
            m.type === 'number' &&
            wo(m, 'number', m.value);
      }
      switch (((x = a ? Qt(a) : window), e)) {
        case 'focusin':
          (Eu(x) || x.contentEditable === 'true') &&
            ((Wt = x), (Ro = a), (Mn = null));
          break;
        case 'focusout':
          Mn = Ro = Wt = null;
          break;
        case 'mousedown':
          jo = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (jo = !1), Tu(p, n, h);
          break;
        case 'selectionchange':
          if (Ld) break;
        case 'keydown':
        case 'keyup':
          Tu(p, n, h);
      }
      var C;
      if (Ei)
        e: {
          switch (e) {
            case 'compositionstart':
              var z = 'onCompositionStart';
              break e;
            case 'compositionend':
              z = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              z = 'onCompositionUpdate';
              break e;
          }
          z = void 0;
        }
      else
        At
          ? ma(e, n) && (z = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (z = 'onCompositionStart');
      z &&
        (ha &&
          n.locale !== 'ko' &&
          (At || z !== 'onCompositionStart'
            ? z === 'onCompositionEnd' && At && (C = pa())
            : ((rt = h),
              (ki = 'value' in rt ? rt.value : rt.textContent),
              (At = !0))),
        (x = Gr(a, z)),
        0 < x.length &&
          ((z = new Su(z, e, null, n, h)),
          p.push({ event: z, listeners: x }),
          C ? (z.data = C) : ((C = va(n)), C !== null && (z.data = C)))),
        (C = yd ? wd(e, n) : Sd(e, n)) &&
          ((a = Gr(a, 'onBeforeInput')),
          0 < a.length &&
            ((h = new Su('onBeforeInput', 'beforeinput', null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = C)));
    }
    za(p, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = An(e, n)),
      o != null && r.unshift(Xn(e, o, l)),
      (o = An(e, t)),
      o != null && r.push(Xn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = An(n, o)), s != null && i.unshift(Xn(n, s, u)))
        : l || ((s = An(n, o)), s != null && i.push(Xn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Id = /\r\n?/g,
  Md = /\u0000|\uFFFD/g;
function Ou(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Id,
      `
`
    )
    .replace(Md, '');
}
function xr(e, t, n) {
  if (((t = Ou(t)), Ou(e) !== t && n)) throw Error(w(425));
}
function Xr() {}
var Oo = null,
  Io = null;
function Mo(e, t) {
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
var Fo = typeof setTimeout == 'function' ? setTimeout : void 0,
  Fd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Iu = typeof Promise == 'function' ? Promise : void 0,
  Dd =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Iu < 'u'
      ? function (e) {
          return Iu.resolve(null).then(e).catch(Ud);
        }
      : Fo;
function Ud(e) {
  setTimeout(function () {
    throw e;
  });
}
function Jl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Qn(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Qn(t);
}
function at(e) {
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
function Mu(e) {
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
var hn = Math.random().toString(36).slice(2),
  $e = '__reactFiber$' + hn,
  Zn = '__reactProps$' + hn,
  Ge = '__reactContainer$' + hn,
  Do = '__reactEvents$' + hn,
  $d = '__reactListeners$' + hn,
  Bd = '__reactHandles$' + hn;
function Et(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mu(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = Mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function sr(e) {
  return (
    (e = e[$e] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function gl(e) {
  return e[Zn] || null;
}
var Uo = [],
  Kt = -1;
function gt(e) {
  return { current: e };
}
function U(e) {
  0 > Kt || ((e.current = Uo[Kt]), (Uo[Kt] = null), Kt--);
}
function F(e, t) {
  Kt++, (Uo[Kt] = e.current), (e.current = t);
}
var mt = {},
  ue = gt(mt),
  he = gt(!1),
  Lt = mt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
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
function Zr() {
  U(he), U(ue);
}
function Fu(e, t, n) {
  if (ue.current !== mt) throw Error(w(168));
  F(ue, t), F(he, n);
}
function La(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Ef(e) || 'Unknown', l));
  return W({}, n, r);
}
function Jr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Lt = ue.current),
    F(ue, e),
    F(he, he.current),
    !0
  );
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = La(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(he),
      U(ue),
      F(ue, e))
    : U(he),
    F(he, n);
}
var We = null,
  yl = !1,
  ql = !1;
function Ra(e) {
  We === null ? (We = [e]) : We.push(e);
}
function Vd(e) {
  (yl = !0), Ra(e);
}
function yt() {
  if (!ql && We !== null) {
    ql = !0;
    var e = 0,
      t = M;
    try {
      var n = We;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (yl = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), na(gi, yt), l);
    } finally {
      (M = t), (ql = !1);
    }
  }
  return null;
}
var Yt = [],
  Gt = 0,
  qr = null,
  br = 0,
  Ee = [],
  Ce = 0,
  Rt = null,
  He = 1,
  Qe = '';
function xt(e, t) {
  (Yt[Gt++] = br), (Yt[Gt++] = qr), (qr = e), (br = t);
}
function ja(e, t, n) {
  (Ee[Ce++] = He), (Ee[Ce++] = Qe), (Ee[Ce++] = Rt), (Rt = e);
  var r = He;
  e = Qe;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (He = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Qe = o + e);
  } else (He = (1 << o) | (n << l) | r), (Qe = e);
}
function Pi(e) {
  e.return !== null && (xt(e, 1), ja(e, 1, 0));
}
function Ni(e) {
  for (; e === qr; )
    (qr = Yt[--Gt]), (Yt[Gt] = null), (br = Yt[--Gt]), (Yt[Gt] = null);
  for (; e === Rt; )
    (Rt = Ee[--Ce]),
      (Ee[Ce] = null),
      (Qe = Ee[--Ce]),
      (Ee[Ce] = null),
      (He = Ee[--Ce]),
      (Ee[Ce] = null);
}
var we = null,
  ye = null,
  B = !1,
  Oe = null;
function Oa(e, t) {
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
          ? ((e.stateNode = t), (we = e), (ye = at(t.firstChild)), !0)
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
          ? ((n = Rt !== null ? { id: He, overflow: Qe } : null),
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
function $o(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bo(e) {
  if (B) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Uu(e, t)) {
        if ($o(e)) throw Error(w(418));
        t = at(n.nextSibling);
        var r = we;
        t && Uu(e, t)
          ? Oa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (we = e));
      }
    } else {
      if ($o(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (we = e);
    }
  }
}
function $u(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function _r(e) {
  if (e !== we) return !1;
  if (!B) return $u(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Mo(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if ($o(e)) throw (Ia(), Error(w(418)));
    for (; t; ) Oa(e, t), (t = at(t.nextSibling));
  }
  if (($u(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ye = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function Ia() {
  for (var e = ye; e; ) e = at(e.nextSibling);
}
function un() {
  (ye = we = null), (B = !1);
}
function zi(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Ad = Je.ReactCurrentBatchConfig;
function _n(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
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
    if (typeof e != 'string') throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Er(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Bu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ma(e) {
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
    return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
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
      ? ((c = oo(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, g) {
    var k = d.type;
    return k === Vt
      ? h(f, c, d.props.children, g, d.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === be &&
            Bu(k) === c.type))
      ? ((g = l(c, d.props)), (g.ref = _n(f, c, d)), (g.return = f), g)
      : ((g = Br(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = _n(f, c, d)),
        (g.return = f),
        g);
  }
  function a(f, c, d, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = io(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, g, k) {
    return c === null || c.tag !== 7
      ? ((c = zt(d, f.mode, g, k)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = oo('' + c, f.mode, d)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case pr:
          return (
            (d = Br(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = _n(f, null, c)),
            (d.return = f),
            d
          );
        case Bt:
          return (c = io(c, f.mode, d)), (c.return = f), c;
        case be:
          var g = c._init;
          return p(f, g(c._payload), d);
      }
      if (Nn(c) || yn(c))
        return (c = zt(c, f.mode, d, null)), (c.return = f), c;
      Er(f, c);
    }
    return null;
  }
  function m(f, c, d, g) {
    var k = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return k !== null ? null : u(f, c, '' + d, g);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case pr:
          return d.key === k ? s(f, c, d, g) : null;
        case Bt:
          return d.key === k ? a(f, c, d, g) : null;
        case be:
          return (k = d._init), m(f, c, k(d._payload), g);
      }
      if (Nn(d) || yn(d)) return k !== null ? null : h(f, c, d, g, null);
      Er(f, d);
    }
    return null;
  }
  function v(f, c, d, g, k) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (f = f.get(d) || null), u(c, f, '' + g, k);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case pr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(c, f, g, k);
        case Bt:
          return (f = f.get(g.key === null ? d : g.key) || null), a(c, f, g, k);
        case be:
          var x = g._init;
          return v(f, c, d, x(g._payload), k);
      }
      if (Nn(g) || yn(g)) return (f = f.get(d) || null), h(c, f, g, k, null);
      Er(c, g);
    }
    return null;
  }
  function y(f, c, d, g) {
    for (
      var k = null, x = null, C = c, z = (c = 0), $ = null;
      C !== null && z < d.length;
      z++
    ) {
      C.index > z ? (($ = C), (C = null)) : ($ = C.sibling);
      var R = m(f, C, d[z], g);
      if (R === null) {
        C === null && (C = $);
        break;
      }
      e && C && R.alternate === null && t(f, C),
        (c = o(R, c, z)),
        x === null ? (k = R) : (x.sibling = R),
        (x = R),
        (C = $);
    }
    if (z === d.length) return n(f, C), B && xt(f, z), k;
    if (C === null) {
      for (; z < d.length; z++)
        (C = p(f, d[z], g)),
          C !== null &&
            ((c = o(C, c, z)), x === null ? (k = C) : (x.sibling = C), (x = C));
      return B && xt(f, z), k;
    }
    for (C = r(f, C); z < d.length; z++)
      ($ = v(C, f, z, d[z], g)),
        $ !== null &&
          (e && $.alternate !== null && C.delete($.key === null ? z : $.key),
          (c = o($, c, z)),
          x === null ? (k = $) : (x.sibling = $),
          (x = $));
    return (
      e &&
        C.forEach(function (ee) {
          return t(f, ee);
        }),
      B && xt(f, z),
      k
    );
  }
  function S(f, c, d, g) {
    var k = yn(d);
    if (typeof k != 'function') throw Error(w(150));
    if (((d = k.call(d)), d == null)) throw Error(w(151));
    for (
      var x = (k = null), C = c, z = (c = 0), $ = null, R = d.next();
      C !== null && !R.done;
      z++, R = d.next()
    ) {
      C.index > z ? (($ = C), (C = null)) : ($ = C.sibling);
      var ee = m(f, C, R.value, g);
      if (ee === null) {
        C === null && (C = $);
        break;
      }
      e && C && ee.alternate === null && t(f, C),
        (c = o(ee, c, z)),
        x === null ? (k = ee) : (x.sibling = ee),
        (x = ee),
        (C = $);
    }
    if (R.done) return n(f, C), B && xt(f, z), k;
    if (C === null) {
      for (; !R.done; z++, R = d.next())
        (R = p(f, R.value, g)),
          R !== null &&
            ((c = o(R, c, z)), x === null ? (k = R) : (x.sibling = R), (x = R));
      return B && xt(f, z), k;
    }
    for (C = r(f, C); !R.done; z++, R = d.next())
      (R = v(C, f, z, R.value, g)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? z : R.key),
          (c = o(R, c, z)),
          x === null ? (k = R) : (x.sibling = R),
          (x = R));
    return (
      e &&
        C.forEach(function (wt) {
          return t(f, wt);
        }),
      B && xt(f, z),
      k
    );
  }
  function E(f, c, d, g) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Vt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case pr:
          e: {
            for (var k = d.key, x = c; x !== null; ) {
              if (x.key === k) {
                if (((k = d.type), k === Vt)) {
                  if (x.tag === 7) {
                    n(f, x.sibling),
                      (c = l(x, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  x.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === be &&
                    Bu(k) === x.type)
                ) {
                  n(f, x.sibling),
                    (c = l(x, d.props)),
                    (c.ref = _n(f, x, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, x);
                break;
              } else t(f, x);
              x = x.sibling;
            }
            d.type === Vt
              ? ((c = zt(d.props.children, f.mode, g, d.key)),
                (c.return = f),
                (f = c))
              : ((g = Br(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = _n(f, c, d)),
                (g.return = f),
                (f = g));
          }
          return i(f);
        case Bt:
          e: {
            for (x = d.key; c !== null; ) {
              if (c.key === x)
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
            (c = io(d, f.mode, g)), (c.return = f), (f = c);
          }
          return i(f);
        case be:
          return (x = d._init), E(f, c, x(d._payload), g);
      }
      if (Nn(d)) return y(f, c, d, g);
      if (yn(d)) return S(f, c, d, g);
      Er(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = oo(d, f.mode, g)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return E;
}
var sn = Ma(!0),
  Fa = Ma(!1),
  el = gt(null),
  tl = null,
  Xt = null,
  Ti = null;
function Li() {
  Ti = Xt = tl = null;
}
function Ri(e) {
  var t = el.current;
  U(el), (e._currentValue = t);
}
function Vo(e, t, n) {
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
function nn(e, t) {
  (tl = e),
    (Ti = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (Ti !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (tl === null) throw Error(w(308));
      (Xt = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else Xt = Xt.next = e;
  return t;
}
var Ct = null;
function ji(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Da(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ji(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
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
var et = !1;
function Oi(e) {
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
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ji(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Ir(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yi(e, n);
  }
}
function Vu(e, t) {
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
function nl(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
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
            S = u;
          switch (((m = t), (v = n), S.tag)) {
            case 1:
              if (((y = S.payload), typeof y == 'function')) {
                p = y.call(v, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = S.payload),
                (m = typeof y == 'function' ? y.call(v, p, m) : y),
                m == null)
              )
                break e;
              p = W({}, p, m);
              break e;
            case 2:
              et = !0;
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
    (Ot |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Au(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var ar = {},
  Ve = gt(ar),
  Jn = gt(ar),
  qn = gt(ar);
function Pt(e) {
  if (e === ar) throw Error(w(174));
  return e;
}
function Ii(e, t) {
  switch ((F(qn, t), F(Jn, e), F(Ve, ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ko(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ko(t, e));
  }
  U(Ve), F(Ve, t);
}
function an() {
  U(Ve), U(Jn), U(qn);
}
function $a(e) {
  Pt(qn.current);
  var t = Pt(Ve.current),
    n = ko(t, e.type);
  t !== n && (F(Jn, e), F(Ve, n));
}
function Mi(e) {
  Jn.current === e && (U(Ve), U(Jn));
}
var V = gt(0);
function rl(e) {
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
var bl = [];
function Fi() {
  for (var e = 0; e < bl.length; e++)
    bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var Mr = Je.ReactCurrentDispatcher,
  eo = Je.ReactCurrentBatchConfig,
  jt = 0,
  A = null,
  G = null,
  q = null,
  ll = !1,
  Fn = !1,
  bn = 0,
  Wd = 0;
function le() {
  throw Error(w(321));
}
function Di(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Ui(e, t, n, r, l, o) {
  if (
    ((jt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mr.current = e === null || e.memoizedState === null ? Yd : Gd),
    (e = n(r, l)),
    Fn)
  ) {
    o = 0;
    do {
      if (((Fn = !1), (bn = 0), 25 <= o)) throw Error(w(301));
      (o += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Mr.current = Xd),
        (e = n(r, l));
    } while (Fn);
  }
  if (
    ((Mr.current = ol),
    (t = G !== null && G.next !== null),
    (jt = 0),
    (q = G = A = null),
    (ll = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function $i() {
  var e = bn !== 0;
  return (bn = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Te() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(w(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (A.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function er(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function to(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(w(311));
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
      if ((jt & h) === h)
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
          (A.lanes |= h),
          (Ot |= h);
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
    do (o = l.lane), (A.lanes |= o), (Ot |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function no(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(w(311));
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
function Ba() {}
function Va(e, t) {
  var n = A,
    r = Te(),
    l = t(),
    o = !Fe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Bi(Ha.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      tr(9, Wa.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(w(349));
    jt & 30 || Aa(n, t, l);
  }
  return l;
}
function Aa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Qa(t) && Ka(e);
}
function Ha(e, t, n) {
  return n(function () {
    Qa(t) && Ka(e);
  });
}
function Qa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Ka(e) {
  var t = Xe(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Wu(e) {
  var t = Ue();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function tr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ya() {
  return Te().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Ue();
  (A.flags |= e),
    (l.memoizedState = tr(1 | t, n, void 0, r === void 0 ? null : r));
}
function wl(e, t, n, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (((o = i.destroy), r !== null && Di(r, i.deps))) {
      l.memoizedState = tr(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = tr(1 | t, n, o, r));
}
function Hu(e, t) {
  return Fr(8390656, 8, e, t);
}
function Bi(e, t) {
  return wl(2048, 8, e, t);
}
function Ga(e, t) {
  return wl(4, 2, e, t);
}
function Xa(e, t) {
  return wl(4, 4, e, t);
}
function Za(e, t) {
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
function Ja(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wl(4, 4, Za.bind(null, t, e), n)
  );
}
function Vi() {}
function qa(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Di(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ba(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Di(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ec(e, t, n) {
  return jt & 21
    ? (Fe(n, t) || ((n = oa()), (A.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Hd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = eo.transition;
  eo.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (eo.transition = r);
  }
}
function tc() {
  return Te().memoizedState;
}
function Qd(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nc(e))
  )
    rc(t, n);
  else if (((n = Da(e, t, n, r)), n !== null)) {
    var l = ae();
    Me(n, e, r, l), lc(n, t, r);
  }
}
function Kd(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nc(e)) rc(t, l);
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
            ? ((l.next = l), ji(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Da(e, t, l, r)),
      n !== null && ((l = ae()), Me(n, e, r, l), lc(n, t, r));
  }
}
function nc(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function rc(e, t) {
  Fn = ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yi(e, n);
  }
}
var ol = {
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
  Yd = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fr(4194308, 4, Za.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fr(4, 2, e, t);
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
        (e = e.dispatch = Qd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wu,
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Wu(!1),
        t = e[0];
      return (e = Hd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Ue();
      if (B) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(w(349));
        jt & 30 || Aa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Hu(Ha.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        tr(9, Wa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = b.identifierPrefix;
      if (B) {
        var n = Qe,
          r = He;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = bn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Wd++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gd = {
    readContext: ze,
    useCallback: qa,
    useContext: ze,
    useEffect: Bi,
    useImperativeHandle: Ja,
    useInsertionEffect: Ga,
    useLayoutEffect: Xa,
    useMemo: ba,
    useReducer: to,
    useRef: Ya,
    useState: function () {
      return to(er);
    },
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      var t = Te();
      return ec(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = to(er)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Ba,
    useSyncExternalStore: Va,
    useId: tc,
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: ze,
    useCallback: qa,
    useContext: ze,
    useEffect: Bi,
    useImperativeHandle: Ja,
    useInsertionEffect: Ga,
    useLayoutEffect: Xa,
    useMemo: ba,
    useReducer: no,
    useRef: Ya,
    useState: function () {
      return no(er);
    },
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      var t = Te();
      return G === null ? (t.memoizedState = e) : ec(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = no(er)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Ba,
    useSyncExternalStore: Va,
    useId: tc,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ao(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = dt(e),
      o = Ke(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Me(t, e, l, r), Ir(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = dt(e),
      o = Ke(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Me(t, e, l, r), Ir(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = dt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Me(t, e, r, n), Ir(t, e, r));
  },
};
function Qu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Yn(n, r) || !Yn(l, o)
      : !0
  );
}
function oc(e, t, n) {
  var r = !1,
    l = mt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = ze(o))
      : ((l = me(t) ? Lt : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? on(e, l) : mt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ku(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function Wo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Oi(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = ze(o))
    : ((o = me(t) ? Lt : ue.current), (l.context = on(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Ao(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Sl.enqueueReplaceState(l, l.state, null),
      nl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function cn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += _f(r)), (r = r.return);
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
function ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ho(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zd = typeof WeakMap == 'function' ? WeakMap : Map;
function ic(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ul || ((ul = !0), (ei = r)), Ho(e, t);
    }),
    n
  );
}
function uc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ho(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ho(e, t),
          typeof r != 'function' &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Yu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = cp.bind(null, e, t, n)), t.then(e, e));
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
function Xu(e, t, n, r, l) {
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
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jd = Je.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? Fa(t, null, n, r) : sn(t, e.child, n, r);
}
function Zu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    nn(t, l),
    (r = Ui(e, t, n, r, o, l)),
    (n = $i()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (B && n && Pi(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function Ju(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Xi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), sc(e, t, o, r, l))
      : ((e = Br(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Yn), n(i, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return Qo(e, t, n, r, l);
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Jt, ge),
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
          F(Jt, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(Jt, ge),
        (ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Jt, ge),
      (ge |= r);
  return se(e, t, l, n), t.child;
}
function cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qo(e, t, n, r, l) {
  var o = me(n) ? Lt : ue.current;
  return (
    (o = on(t, o)),
    nn(t, l),
    (n = Ui(e, t, n, r, o, l)),
    (r = $i()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (B && r && Pi(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function qu(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    Jr(t);
  } else o = !1;
  if ((nn(t, l), t.stateNode === null))
    Dr(e, t), oc(t, n, r), Wo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = ze(a))
      : ((a = me(n) ? Lt : ue.current), (a = on(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Ku(t, i, r, a)),
      (et = !1);
    var m = t.memoizedState;
    (i.state = m),
      nl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || he.current || et
        ? (typeof h == 'function' && (Ao(t, n, h, r), (s = t.memoizedState)),
          (u = et || Qu(t, n, u, r, m, s, a))
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
        : ((s = me(n) ? Lt : ue.current), (s = on(t, s)));
    var v = n.getDerivedStateFromProps;
    (h =
      typeof v == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== p || m !== s) && Ku(t, i, r, s)),
      (et = !1),
      (m = t.memoizedState),
      (i.state = m),
      nl(t, r, i, l);
    var y = t.memoizedState;
    u !== p || m !== y || he.current || et
      ? (typeof v == 'function' && (Ao(t, n, v, r), (y = t.memoizedState)),
        (a = et || Qu(t, n, a, r, m, y, s) || !1)
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
  return Ko(e, t, n, r, o, l);
}
function Ko(e, t, n, r, l, o) {
  cc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Du(t, n, !1), Ze(e, t, o);
  (r = t.stateNode), (Jd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = sn(t, e.child, null, o)), (t.child = sn(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && Du(t, n, !0),
    t.child
  );
}
function fc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fu(e, t.context, !1),
    Ii(e, t.containerInfo);
}
function bu(e, t, n, r, l) {
  return un(), zi(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Yo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dc(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(V, l & 1),
    e === null)
  )
    return (
      Bo(t),
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
                : (o = _l(i, r, 0, null)),
              (e = zt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Go(n)),
              (t.memoizedState = Yo),
              e)
            : Ai(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return qd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = pt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = pt(u, o)) : ((o = zt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Go(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = pt(o, { mode: 'visible', children: r.children })),
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
function Ai(e, t) {
  return (
    (t = _l({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cr(e, t, n, r) {
  return (
    r !== null && zi(r),
    sn(t, e.child, null, n),
    (e = Ai(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ro(Error(w(422)))), Cr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = _l({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = zt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && sn(t, e.child, null, i),
        (t.child.memoizedState = Go(i)),
        (t.memoizedState = Yo),
        o);
  if (!(t.mode & 1)) return Cr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(w(419))), (r = ro(o, r, void 0)), Cr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), pe || u)) {
    if (((r = b), r !== null)) {
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
          ((o.retryLane = l), Xe(e, l), Me(r, e, l, -1));
    }
    return Gi(), (r = ro(Error(w(421)))), Cr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = fp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = at(l.nextSibling)),
      (we = t),
      (B = !0),
      (Oe = null),
      e !== null &&
        ((Ee[Ce++] = He),
        (Ee[Ce++] = Qe),
        (Ee[Ce++] = Rt),
        (He = e.id),
        (Qe = e.overflow),
        (Rt = t)),
      (t = Ai(t, r.children)),
      (t.flags |= 4096),
      t);
}
function es(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vo(e.return, t, n);
}
function lo(e, t, n, r, l) {
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
function pc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && es(e, n, t);
        else if (e.tag === 19) es(e, n, t);
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
  if ((F(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && rl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          lo(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && rl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        lo(t, !0, n, null, o);
        break;
      case 'together':
        lo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bd(e, t, n) {
  switch (t.tag) {
    case 3:
      fc(t), un();
      break;
    case 5:
      $a(t);
      break;
    case 1:
      me(t.type) && Jr(t);
      break;
    case 4:
      Ii(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(el, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dc(e, t, n)
          : (F(V, V.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      F(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ac(e, t, n);
  }
  return Ze(e, t, n);
}
var hc, Xo, mc, vc;
hc = function (e, t) {
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
Xo = function () {};
mc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Pt(Ve.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = go(e, l)), (r = go(e, r)), (o = []);
        break;
      case 'select':
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = So(e, l)), (r = So(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Xr);
    }
    xo(n, r);
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
            (Bn.hasOwnProperty(a)
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
              (Bn.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && D('scroll', e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push('style', n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
vc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function En(e, t) {
  if (!B)
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
function ep(e, t, n) {
  var r = t.pendingProps;
  switch ((Ni(t), t.tag)) {
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
      return me(t.type) && Zr(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        U(he),
        U(ue),
        Fi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (ri(Oe), (Oe = null)))),
        Xo(e, t),
        oe(t),
        null
      );
    case 5:
      Mi(t);
      var l = Pt(qn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return oe(t), null;
        }
        if (((e = Pt(Ve.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[$e] = t), (r[Zn] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              D('cancel', r), D('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Tn.length; l++) D(Tn[l], r);
              break;
            case 'source':
              D('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              D('error', r), D('load', r);
              break;
            case 'details':
              D('toggle', r);
              break;
            case 'input':
              au(r, o), D('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D('invalid', r);
              break;
            case 'textarea':
              fu(r, o), D('invalid', r);
          }
          xo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Bn.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  D('scroll', r);
            }
          switch (n) {
            case 'input':
              hr(r), cu(r, o, !0);
              break;
            case 'textarea':
              hr(r), du(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Xr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Hs(n)),
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
            (e[$e] = t),
            (e[Zn] = r),
            hc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = _o(n, r)), n)) {
              case 'dialog':
                D('cancel', e), D('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Tn.length; l++) D(Tn[l], e);
                l = r;
                break;
              case 'source':
                D('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                D('error', e), D('load', e), (l = r);
                break;
              case 'details':
                D('toggle', e), (l = r);
                break;
              case 'input':
                au(e, r), (l = go(e, r)), D('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  D('invalid', e);
                break;
              case 'textarea':
                fu(e, r), (l = So(e, r)), D('invalid', e);
                break;
              default:
                l = r;
            }
            xo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? Ys(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Qs(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Vn(e, s)
                    : typeof s == 'number' && Vn(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Bn.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && D('scroll', e)
                      : s != null && di(e, o, s, i));
              }
            switch (n) {
              case 'input':
                hr(e), cu(e, r, !1);
                break;
              case 'textarea':
                hr(e), du(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ht(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? qt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Xr);
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
      if (e && t.stateNode != null) vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(w(166));
        if (((n = Pt(qn.current)), Pt(Ve.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (o = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (U(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && ye !== null && t.mode & 1 && !(t.flags & 128))
          Ia(), un(), (t.flags |= 98560), (o = !1);
        else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317));
            o[$e] = t;
          } else
            un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Oe !== null && (ri(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? X === 0 && (X = 3) : Gi())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        an(), Xo(e, t), e === null && Gn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Ri(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && Zr(), oe(t), null;
    case 19:
      if ((U(V), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) En(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = rl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    En(o, !1),
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
                return F(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > fn &&
            ((t.flags |= 128), (r = !0), En(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              En(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !B)
            )
              return oe(t), null;
          } else
            2 * K() - o.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), En(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = V.current),
          F(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        Yi(),
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
  throw Error(w(156, t.tag));
}
function tp(e, t) {
  switch ((Ni(t), t.tag)) {
    case 1:
      return (
        me(t.type) && Zr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        U(he),
        U(ue),
        Fi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Mi(t), null;
    case 13:
      if ((U(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(V), null;
    case 4:
      return an(), null;
    case 10:
      return Ri(t.type._context), null;
    case 22:
    case 23:
      return Yi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pr = !1,
  ie = !1,
  np = typeof WeakSet == 'function' ? WeakSet : Set,
  P = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function Zo(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var ts = !1;
function rp(e, t) {
  if (((Oo = Kr), (e = ka()), Ci(e))) {
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
  for (Io = { focusedElem: e, selectionRange: n }, Kr = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
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
                  var S = y.memoizedProps,
                    E = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Re(t.type, S),
                      E
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
                throw Error(w(163));
            }
        } catch (g) {
          H(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (y = ts), (ts = !1), y;
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Zo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, t) {
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
function Jo(e) {
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
function gc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[Zn], delete t[Do], delete t[$d], delete t[Bd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ns(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yc(e.return)) return null;
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
function qo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Xr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qo(e, t, n), e = e.sibling; e !== null; ) qo(e, t, n), (e = e.sibling);
}
function bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bo(e, t, n), e = e.sibling; e !== null; ) bo(e, t, n), (e = e.sibling);
}
var te = null,
  je = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) wc(e, t, n), (n = n.sibling);
}
function wc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == 'function')
    try {
      Be.onCommitFiberUnmount(pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Zt(n, t);
    case 6:
      var r = te,
        l = je;
      (te = null),
        qe(e, t, n),
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
              ? Jl(e.parentNode, n)
              : e.nodeType === 1 && Jl(e, n),
            Qn(e))
          : Jl(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = je),
        (te = n.stateNode.containerInfo),
        (je = !0),
        qe(e, t, n),
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
            i !== void 0 && (o & 2 || o & 4) && Zo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          H(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), qe(e, t, n), (ie = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function rs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new np()),
      t.forEach(function (r) {
        var l = dp.bind(null, e, r);
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
        if (te === null) throw Error(w(160));
        wc(o, i, l), (te = null), (je = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        H(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sc(t, e), (t = t.sibling);
}
function Sc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), De(e), r & 4)) {
        try {
          Dn(3, e, e.return), kl(3, e);
        } catch (S) {
          H(e, e.return, S);
        }
        try {
          Dn(5, e, e.return);
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 1:
      Le(t, e), De(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        De(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Vn(l, '');
        } catch (S) {
          H(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && As(l, o),
              _o(u, i);
            var a = _o(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                p = s[i + 1];
              h === 'style'
                ? Ys(l, p)
                : h === 'dangerouslySetInnerHTML'
                ? Qs(l, p)
                : h === 'children'
                ? Vn(l, p)
                : di(l, h, p, a);
            }
            switch (u) {
              case 'input':
                yo(l, o);
                break;
              case 'textarea':
                Ws(l, o);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? qt(l, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? qt(l, !!o.multiple, o.defaultValue, !0)
                      : qt(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Zn] = o;
          } catch (S) {
            H(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Le(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qn(t.containerInfo);
        } catch (S) {
          H(e, e.return, S);
        }
      break;
    case 4:
      Le(t, e), De(e);
      break;
    case 13:
      Le(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Qi = K())),
        r & 4 && rs(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Le(t, e), (ie = a)) : Le(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (P = e, h = e.child; h !== null; ) {
            for (p = P = h; P !== null; ) {
              switch (((m = P), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dn(4, m, m.return);
                  break;
                case 1:
                  Zt(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (S) {
                      H(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Zt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    os(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (P = v)) : os(p);
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
                      (u.style.display = Ks('display', i)));
              } catch (S) {
                H(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps;
              } catch (S) {
                H(e, e.return, S);
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
      Le(t, e), De(e), r & 4 && rs(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Vn(l, ''), (r.flags &= -33));
          var o = ns(e);
          bo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ns(e);
          qo(e, u, i);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lp(e, t, n) {
  (P = e), kc(e);
}
function kc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Pr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Pr;
        var a = ie;
        if (((Pr = i), (ie = s) && !a))
          for (P = l; P !== null; )
            (i = P),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? is(l)
                : s !== null
                ? ((s.return = i), (P = s))
                : is(l);
        for (; o !== null; ) (P = o), kc(o), (o = o.sibling);
        (P = l), (Pr = u), (ie = a);
      }
      ls(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : ls(e);
  }
}
function ls(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || kl(5, t);
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
              o !== null && Au(t, o, r);
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
                Au(t, i, n);
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
                    p !== null && Qn(p);
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
              throw Error(w(163));
          }
        ie || (t.flags & 512 && Jo(t));
      } catch (m) {
        H(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function os(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function is(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var o = t.return;
          try {
            Jo(t);
          } catch (s) {
            H(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Jo(t);
          } catch (s) {
            H(t, i, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (P = u);
      break;
    }
    P = t.return;
  }
}
var op = Math.ceil,
  il = Je.ReactCurrentDispatcher,
  Wi = Je.ReactCurrentOwner,
  Ne = Je.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  Y = null,
  ne = 0,
  ge = 0,
  Jt = gt(0),
  X = 0,
  nr = null,
  Ot = 0,
  xl = 0,
  Hi = 0,
  Un = null,
  de = null,
  Qi = 0,
  fn = 1 / 0,
  Ae = null,
  ul = !1,
  ei = null,
  ft = null,
  Nr = !1,
  lt = null,
  sl = 0,
  $n = 0,
  ti = null,
  Ur = -1,
  $r = 0;
function ae() {
  return I & 6 ? K() : Ur !== -1 ? Ur : (Ur = K());
}
function dt(e) {
  return e.mode & 1
    ? I & 2 && ne !== 0
      ? ne & -ne
      : Ad.transition !== null
      ? ($r === 0 && ($r = oa()), $r)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : da(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < $n) throw (($n = 0), (ti = null), Error(w(185)));
  ir(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (xl |= n), X === 4 && nt(e, ne)),
      ve(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((fn = K() + 500), yl && yt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Af(e, t);
  var r = Qr(e, e === b ? ne : 0);
  if (r === 0)
    n !== null && mu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && mu(n), t === 1))
      e.tag === 0 ? Vd(us.bind(null, e)) : Ra(us.bind(null, e)),
        Dd(function () {
          !(I & 6) && yt();
        }),
        (n = null);
    else {
      switch (ia(r)) {
        case 1:
          n = gi;
          break;
        case 4:
          n = ra;
          break;
        case 16:
          n = Hr;
          break;
        case 536870912:
          n = la;
          break;
        default:
          n = Hr;
      }
      n = Tc(n, xc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xc(e, t) {
  if (((Ur = -1), ($r = 0), I & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Qr(e, e === b ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = Ec();
    (b !== e || ne !== t) && ((Ae = null), (fn = K() + 500), Nt(e, t));
    do
      try {
        sp();
        break;
      } catch (u) {
        _c(e, u);
      }
    while (!0);
    Li(),
      (il.current = o),
      (I = l),
      Y !== null ? (t = 0) : ((b = null), (ne = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = zo(e)), l !== 0 && ((r = l), (t = ni(e, l)))), t === 1)
    )
      throw ((n = nr), Nt(e, 0), nt(e, r), ve(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ip(l) &&
          ((t = al(e, r)),
          t === 2 && ((o = zo(e)), o !== 0 && ((r = o), (t = ni(e, o)))),
          t === 1))
      )
        throw ((n = nr), Nt(e, 0), nt(e, r), ve(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          _t(e, de, Ae);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Qi + 500 - K()), 10 < t))
          ) {
            if (Qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Fo(_t.bind(null, e, de, Ae), t);
            break;
          }
          _t(e, de, Ae);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
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
                : 1960 * op(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fo(_t.bind(null, e, de, Ae), r);
            break;
          }
          _t(e, de, Ae);
          break;
        case 5:
          _t(e, de, Ae);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ve(e, K()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function ni(e, t) {
  var n = Un;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && ri(t)),
    e
  );
}
function ri(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function ip(e) {
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
function nt(e, t) {
  for (
    t &= ~Hi,
      t &= ~xl,
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
function us(e) {
  if (I & 6) throw Error(w(327));
  rn();
  var t = Qr(e, 0);
  if (!(t & 1)) return ve(e, K()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zo(e);
    r !== 0 && ((t = r), (n = ni(e, r)));
  }
  if (n === 1) throw ((n = nr), Nt(e, 0), nt(e, t), ve(e, K()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _t(e, de, Ae),
    ve(e, K()),
    null
  );
}
function Ki(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((fn = K() + 500), yl && yt());
  }
}
function It(e) {
  lt !== null && lt.tag === 0 && !(I & 6) && rn();
  var t = I;
  I |= 1;
  var n = Ne.transition,
    r = M;
  try {
    if (((Ne.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ne.transition = n), (I = t), !(I & 6) && yt();
  }
}
function Yi() {
  (ge = Jt.current), U(Jt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fd(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Ni(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zr();
          break;
        case 3:
          an(), U(he), U(ue), Fi();
          break;
        case 5:
          Mi(r);
          break;
        case 4:
          an();
          break;
        case 13:
          U(V);
          break;
        case 19:
          U(V);
          break;
        case 10:
          Ri(r.type._context);
          break;
        case 22:
        case 23:
          Yi();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = pt(e.current, null)),
    (ne = ge = t),
    (X = 0),
    (nr = null),
    (Hi = xl = Ot = 0),
    (de = Un = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function _c(e, t) {
  do {
    var n = Y;
    try {
      if ((Li(), (Mr.current = ol), ll)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ll = !1;
      }
      if (
        ((jt = 0),
        (q = G = A = null),
        (Fn = !1),
        (bn = 0),
        (Wi.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (nr = t), (Y = null);
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
              Xu(v, i, u, o, t),
              v.mode & 1 && Yu(o, a, t),
              (t = v),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Yu(o, a, t), Gi();
              break e;
            }
            s = Error(w(426));
          }
        } else if (B && u.mode & 1) {
          var E = Gu(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Xu(E, i, u, o, t),
              zi(cn(s, u));
            break e;
          }
        }
        (o = s = cn(s, u)),
          X !== 4 && (X = 2),
          Un === null ? (Un = [o]) : Un.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = ic(o, s, t);
              Vu(o, f);
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
                    (ft === null || !ft.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = uc(o, u, t);
                Vu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Pc(n);
    } catch (k) {
      (t = k), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ec() {
  var e = il.current;
  return (il.current = ol), e === null ? ol : e;
}
function Gi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    b === null || (!(Ot & 268435455) && !(xl & 268435455)) || nt(b, ne);
}
function al(e, t) {
  var n = I;
  I |= 2;
  var r = Ec();
  (b !== e || ne !== t) && ((Ae = null), Nt(e, t));
  do
    try {
      up();
      break;
    } catch (l) {
      _c(e, l);
    }
  while (!0);
  if ((Li(), (I = n), (il.current = r), Y !== null)) throw Error(w(261));
  return (b = null), (ne = 0), X;
}
function up() {
  for (; Y !== null; ) Cc(Y);
}
function sp() {
  for (; Y !== null && !Of(); ) Cc(Y);
}
function Cc(e) {
  var t = zc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Pc(e) : (Y = t),
    (Wi.current = null);
}
function Pc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = tp(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = ep(n, t, ge)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function _t(e, t, n) {
  var r = M,
    l = Ne.transition;
  try {
    (Ne.transition = null), (M = 1), ap(e, t, n, r);
  } finally {
    (Ne.transition = l), (M = r);
  }
  return null;
}
function ap(e, t, n, r) {
  do rn();
  while (lt !== null);
  if (I & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Wf(e, o),
    e === b && ((Y = b = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Nr ||
      ((Nr = !0),
      Tc(Hr, function () {
        return rn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Wi.current = null),
      rp(e, n),
      Sc(n, e),
      Td(Io),
      (Kr = !!Oo),
      (Io = Oo = null),
      (e.current = n),
      lp(n),
      If(),
      (I = u),
      (M = i),
      (Ne.transition = o);
  } else e.current = n;
  if (
    (Nr && ((Nr = !1), (lt = e), (sl = l)),
    (o = e.pendingLanes),
    o === 0 && (ft = null),
    Df(n.stateNode),
    ve(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ul) throw ((ul = !1), (e = ei), (ei = null), e);
  return (
    sl & 1 && e.tag !== 0 && rn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ti ? $n++ : (($n = 0), (ti = e))) : ($n = 0),
    yt(),
    null
  );
}
function rn() {
  if (lt !== null) {
    var e = ia(sl),
      t = Ne.transition,
      n = M;
    try {
      if (((Ne.transition = null), (M = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (sl = 0), I & 6)) throw Error(w(331));
        var l = I;
        for (I |= 4, P = e.current; P !== null; ) {
          var o = P,
            i = o.child;
          if (P.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (P = a; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (P = p);
                  else
                    for (; P !== null; ) {
                      h = P;
                      var m = h.sibling,
                        v = h.return;
                      if ((gc(h), h === a)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (P = m);
                        break;
                      }
                      P = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var E = S.sibling;
                    (S.sibling = null), (S = E);
                  } while (S !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (P = i);
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (P = f);
                break e;
              }
              P = o.return;
            }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          i = P;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (P = d);
          else
            e: for (i = c; P !== null; ) {
              if (((u = P), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(9, u);
                  }
                } catch (k) {
                  H(u, u.return, k);
                }
              if (u === i) {
                P = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (P = g);
                break e;
              }
              P = u.return;
            }
        }
        if (
          ((I = l), yt(), Be && typeof Be.onPostCommitFiberRoot == 'function')
        )
          try {
            Be.onPostCommitFiberRoot(pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ne.transition = t);
    }
  }
  return !1;
}
function ss(e, t, n) {
  (t = cn(n, t)),
    (t = ic(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = ae()),
    e !== null && (ir(e, 1, t), ve(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) ss(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ss(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ft === null || !ft.has(r)))
        ) {
          (e = cn(n, e)),
            (e = uc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = ae()),
            t !== null && (ir(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function cp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (ne & n) === n &&
      (X === 4 || (X === 3 && (ne & 130023424) === ne && 500 > K() - Qi)
        ? Nt(e, 0)
        : (Hi |= n)),
    ve(e, t);
}
function Nc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Xe(e, t)), e !== null && (ir(e, t, n), ve(e, n));
}
function fp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nc(e, n);
}
function dp(e, t) {
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
      throw Error(w(314));
  }
  r !== null && r.delete(t), Nc(e, n);
}
var zc;
zc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), bd(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), B && t.flags & 1048576 && ja(t, br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Dr(e, t), (e = t.pendingProps);
      var l = on(t, ue.current);
      nn(t, n), (l = Ui(null, t, r, e, l, n));
      var o = $i();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), Jr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Oi(t),
            (l.updater = Sl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Wo(t, r, e, n),
            (t = Ko(null, t, r, !0, o, n)))
          : ((t.tag = 0), B && o && Pi(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = hp(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Qo(null, t, r, e, n);
            break e;
          case 1:
            t = qu(null, t, r, e, n);
            break e;
          case 11:
            t = Zu(null, t, r, e, n);
            break e;
          case 14:
            t = Ju(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Qo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        qu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((fc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ua(e, t),
          nl(t, r, null, n);
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
            (l = cn(Error(w(423)), t)), (t = bu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = cn(Error(w(424)), t)), (t = bu(e, t, r, n, l));
            break e;
          } else
            for (
              ye = at(t.stateNode.containerInfo.firstChild),
                we = t,
                B = !0,
                Oe = null,
                n = Fa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((un(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $a(t),
        e === null && Bo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Mo(r, l) ? (i = null) : o !== null && Mo(r, o) && (t.flags |= 32),
        cc(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Bo(t), null;
    case 13:
      return dc(e, t, n);
    case 4:
      return (
        Ii(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Zu(e, t, r, l, n)
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
          F(el, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Fe(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = Ze(e, t, n);
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
                      (s = Ke(-1, n & -n)), (s.tag = 2);
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
                      Vo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(w(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Vo(i, n, t),
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
        nn(t, n),
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
        Ju(e, t, r, l, n)
      );
    case 15:
      return sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Dr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), Jr(t)) : (e = !1),
        nn(t, n),
        oc(t, r, l),
        Wo(t, r, l, n),
        Ko(null, t, r, !0, e, n)
      );
    case 19:
      return pc(e, t, n);
    case 22:
      return ac(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Tc(e, t) {
  return na(e, t);
}
function pp(e, t, n, r) {
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
  return new pp(e, t, n, r);
}
function Xi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hp(e) {
  if (typeof e == 'function') return Xi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hi)) return 11;
    if (e === mi) return 14;
  }
  return 2;
}
function pt(e, t) {
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
function Br(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Xi(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Vt:
        return zt(n.children, l, o, t);
      case pi:
        (i = 8), (l |= 8);
        break;
      case po:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = po), (e.lanes = o), e
        );
      case ho:
        return (e = Pe(13, n, t, l)), (e.elementType = ho), (e.lanes = o), e;
      case mo:
        return (e = Pe(19, n, t, l)), (e.elementType = mo), (e.lanes = o), e;
      case $s:
        return _l(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ds:
              i = 10;
              break e;
            case Us:
              i = 9;
              break e;
            case hi:
              i = 11;
              break e;
            case mi:
              i = 14;
              break e;
            case be:
              (i = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Pe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function zt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function _l(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = $s),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oo(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function io(e, t, n) {
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
function mp(e, t, n, r, l) {
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
    (this.eventTimes = Bl(0)),
    (this.expirationTimes = Bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Zi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new mp(e, t, n, u, s)),
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
    Oi(o),
    e
  );
}
function vp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(w(170));
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
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return La(e, n, t);
  }
  return t;
}
function Rc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Zi(n, r, !0, e, l, o, i, u, s)),
    (e.context = Lc(null)),
    (n = e.current),
    (r = ae()),
    (l = dt(n)),
    (o = Ke(r, l)),
    (o.callback = t ?? null),
    ct(n, o, l),
    (e.current.lanes = l),
    ir(e, l, r),
    ve(e, r),
    e
  );
}
function El(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = dt(l);
  return (
    (n = Lc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, i)),
    e !== null && (Me(e, l, i, o), Ir(e, l, i)),
    i
  );
}
function cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function as(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ji(e, t) {
  as(e, t), (e = e.alternate) && as(e, t);
}
function gp() {
  return null;
}
var jc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function qi(e) {
  this._internalRoot = e;
}
Cl.prototype.render = qi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  El(e, t, null, null);
};
Cl.prototype.unmount = qi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function () {
      El(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = aa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && fa(e);
  }
};
function bi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function cs() {}
function yp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var a = cl(i);
        o.call(a);
      };
    }
    var i = Rc(t, r, e, 0, null, !1, !1, '', cs);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      It(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = cl(s);
      u.call(a);
    };
  }
  var s = Zi(e, 0, !1, null, null, !1, !1, '', cs);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    It(function () {
      El(t, s, n, r);
    }),
    s
  );
}
function Nl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = cl(i);
        u.call(s);
      };
    }
    El(t, i, e, l);
  } else i = yp(n, t, e, l, r);
  return cl(i);
}
ua = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 &&
          (yi(t, n | 1), ve(t, K()), !(I & 6) && ((fn = K() + 500), yt()));
      }
      break;
    case 13:
      It(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ae();
          Me(r, e, 1, l);
        }
      }),
        Ji(e, 1);
  }
};
wi = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ae();
      Me(t, e, 134217728, n);
    }
    Ji(e, 134217728);
  }
};
sa = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = ae();
      Me(n, e, t, r);
    }
    Ji(e, t);
  }
};
aa = function () {
  return M;
};
ca = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
Co = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((yo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var l = gl(r);
            if (!l) throw Error(w(90));
            Vs(r), yo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Ws(e, n);
      break;
    case 'select':
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
Zs = Ki;
Js = It;
var wp = { usingClientEntryPoint: !1, Events: [sr, Qt, gl, Gs, Xs, Ki] },
  Cn = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Sp = {
    bundleType: Cn.bundleType,
    version: Cn.version,
    rendererPackageName: Cn.rendererPackageName,
    rendererConfig: Cn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ea(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cn.findFiberByHostInstance || gp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      (pl = zr.inject(Sp)), (Be = zr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wp;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bi(t)) throw Error(w(200));
  return vp(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!bi(e)) throw Error(w(299));
  var n = !1,
    r = '',
    l = jc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Zi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    new qi(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(w(188))
      : ((e = Object.keys(e).join(',')), Error(w(268, e)));
  return (e = ea(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return It(e);
};
ke.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(w(200));
  return Nl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!bi(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = jc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Rc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ge] = t.current),
    Gn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Cl(t);
};
ke.render = function (e, t, n) {
  if (!Pl(t)) throw Error(w(200));
  return Nl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (It(function () {
        Nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Ki;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Nl(e, t, n, !1, r);
};
ke.version = '18.3.1-next-f1338f8080-20240426';
function Oc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc);
    } catch (e) {
      console.error(e);
    }
}
Oc(), (Os.exports = ke);
var kp = Os.exports,
  fs = kp;
(co.createRoot = fs.createRoot), (co.hydrateRoot = fs.hydrateRoot);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
var ot;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ot || (ot = {}));
const ds = 'popstate';
function xp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return li(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : Mc(l);
  }
  return Ep(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Ic(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _p() {
  return Math.random().toString(36).substr(2, 8);
}
function ps(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function li(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    rr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? mn(t) : t,
      { state: n, key: (t && t.key) || r || _p() }
    )
  );
}
function Mc(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function mn(e) {
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
function Ep(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ot.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), i.replaceState(rr({}, i.state, { idx: a }), ''));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    u = ot.Pop;
    let E = h(),
      f = E == null ? null : E - a;
    (a = E), s && s({ action: u, location: S.location, delta: f });
  }
  function m(E, f) {
    u = ot.Push;
    let c = li(S.location, E, f);
    a = h() + 1;
    let d = ps(c, a),
      g = S.createHref(c);
    try {
      i.pushState(d, '', g);
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
      l.location.assign(g);
    }
    o && s && s({ action: u, location: S.location, delta: 1 });
  }
  function v(E, f) {
    u = ot.Replace;
    let c = li(S.location, E, f);
    a = h();
    let d = ps(c, a),
      g = S.createHref(c);
    i.replaceState(d, '', g),
      o && s && s({ action: u, location: S.location, delta: 0 });
  }
  function y(E) {
    let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof E == 'string' ? E : Mc(E);
    return (
      (c = c.replace(/ $/, '%20')),
      Z(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, f)
    );
  }
  let S = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(E) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(ds, p),
        (s = E),
        () => {
          l.removeEventListener(ds, p), (s = null);
        }
      );
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: y,
    encodeLocation(E) {
      let f = y(E);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: v,
    go(E) {
      return i.go(E);
    },
  };
  return S;
}
var hs;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(hs || (hs = {}));
function Cp(e, t, n) {
  return n === void 0 && (n = '/'), Pp(e, t, n, !1);
}
function Pp(e, t, n, r) {
  let l = typeof t == 'string' ? mn(t) : t,
    o = Uc(l.pathname || '/', n);
  if (o == null) return null;
  let i = Fc(e);
  Np(i);
  let u = null;
  for (let s = 0; u == null && s < i.length; ++s) {
    let a = Up(o);
    u = Fp(i[s], a, r);
  }
  return u;
}
function Fc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith('/') &&
      (Z(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = Tt([r, s.relativePath]),
      h = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (Z(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      Fc(o.children, t, h, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Ip(a, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let s of Dc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Dc(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = Dc(r.join('/')),
    u = [];
  return (
    u.push(...i.map((s) => (s === '' ? o : [o, s].join('/')))),
    l && u.push(...i),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function Np(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Mp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const zp = /^:[\w-]+$/,
  Tp = 3,
  Lp = 2,
  Rp = 1,
  jp = 10,
  Op = -2,
  ms = (e) => e === '*';
function Ip(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(ms) && (r += Op),
    t && (r += Lp),
    n
      .filter((l) => !ms(l))
      .reduce((l, o) => l + (zp.test(o) ? Tp : o === '' ? Rp : jp), r)
  );
}
function Mp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Fp(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    o = '/',
    i = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      h = o === '/' ? t : t.slice(o.length) || '/',
      p = vs(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        h
      ),
      m = s.route;
    if (
      (!p &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (p = vs(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          h
        )),
      !p)
    )
      return null;
    Object.assign(l, p.params),
      i.push({
        params: l,
        pathname: Tt([o, p.pathname]),
        pathnameBase: Hp(Tt([o, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== '/' && (o = Tt([o, p.pathnameBase]));
  }
  return i;
}
function vs(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Dp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: v } = h;
      if (m === '*') {
        let S = u[p] || '';
        i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, '$1');
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
function Dp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ic(
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
function Up(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Ic(
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
function $p(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? mn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Bp(n, t)) : t,
    search: Qp(r),
    hash: Kp(l),
  };
}
function Bp(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function uo(e, t, n, r) {
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
function Vp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ap(e, t) {
  let n = Vp(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Wp(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = mn(e))
    : ((l = rr({}, e)),
      Z(
        !l.pathname || !l.pathname.includes('?'),
        uo('?', 'pathname', 'search', l)
      ),
      Z(
        !l.pathname || !l.pathname.includes('#'),
        uo('#', 'pathname', 'hash', l)
      ),
      Z(!l.search || !l.search.includes('#'), uo('#', 'search', 'hash', l)));
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
  let s = $p(l, u),
    a = i && i !== '/' && i.endsWith('/'),
    h = (o || i === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || h) && (s.pathname += '/'), s;
}
const Tt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Hp = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Qp = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Kp = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Yp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const $c = ['post', 'put', 'patch', 'delete'];
new Set($c);
const Gp = ['get', ...$c];
new Set(Gp);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function lr() {
  return (
    (lr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lr.apply(this, arguments)
  );
}
const eu = _.createContext(null),
  Xp = _.createContext(null),
  zl = _.createContext(null),
  Tl = _.createContext(null),
  vn = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bc = _.createContext(null);
function Ll() {
  return _.useContext(Tl) != null;
}
function Vc() {
  return Ll() || Z(!1), _.useContext(Tl).location;
}
function Ac(e) {
  _.useContext(zl).static || _.useLayoutEffect(e);
}
function tu() {
  let { isDataRoute: e } = _.useContext(vn);
  return e ? sh() : Zp();
}
function Zp() {
  Ll() || Z(!1);
  let e = _.useContext(eu),
    { basename: t, future: n, navigator: r } = _.useContext(zl),
    { matches: l } = _.useContext(vn),
    { pathname: o } = Vc(),
    i = JSON.stringify(Ap(l, n.v7_relativeSplatPath)),
    u = _.useRef(!1);
  return (
    Ac(() => {
      u.current = !0;
    }),
    _.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == 'number') {
          r.go(a);
          return;
        }
        let p = Wp(a, JSON.parse(i), o, h.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : Tt([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, i, o, e]
    )
  );
}
function Jp(e, t) {
  return qp(e, t);
}
function qp(e, t, n, r) {
  Ll() || Z(!1);
  let { navigator: l } = _.useContext(zl),
    { matches: o } = _.useContext(vn),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : '/';
  i && i.route;
  let a = Vc(),
    h;
  if (t) {
    var p;
    let E = typeof t == 'string' ? mn(t) : t;
    s === '/' || ((p = E.pathname) != null && p.startsWith(s)) || Z(!1),
      (h = E);
  } else h = a;
  let m = h.pathname || '/',
    v = m;
  if (s !== '/') {
    let E = s.replace(/^\//, '').split('/');
    v = '/' + m.replace(/^\//, '').split('/').slice(E.length).join('/');
  }
  let y = Cp(e, { pathname: v }),
    S = rh(
      y &&
        y.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, u, E.params),
            pathname: Tt([
              s,
              l.encodeLocation
                ? l.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === '/'
                ? s
                : Tt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && S
    ? _.createElement(
        Tl.Provider,
        {
          value: {
            location: lr(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              h
            ),
            navigationType: ot.Pop,
          },
        },
        S
      )
    : S;
}
function bp() {
  let e = uh(),
    t = Yp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement('h2', null, 'Unexpected Application Error!'),
    _.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? _.createElement('pre', { style: l }, n) : null,
    null
  );
}
const eh = _.createElement(bp, null);
class th extends _.Component {
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
      ? _.createElement(
          vn.Provider,
          { value: this.props.routeContext },
          _.createElement(Bc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function nh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = _.useContext(eu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(vn.Provider, { value: t }, r)
  );
}
function rh(e, t, n, r) {
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
    h >= 0 || Z(!1), (i = i.slice(0, Math.min(i.length, h + 1)));
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
      S = null,
      E = null;
    n &&
      ((v = u && p.route.id ? u[p.route.id] : void 0),
      (S = p.route.errorElement || eh),
      s &&
        (a < 0 && m === 0
          ? ((y = !0), (E = null))
          : a === m &&
            ((y = !0), (E = p.route.hydrateFallbackElement || null))));
    let f = t.concat(i.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          v
            ? (d = S)
            : y
            ? (d = E)
            : p.route.Component
            ? (d = _.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          _.createElement(nh, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? _.createElement(th, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: v,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Wc = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Wc || {}),
  fl = (function (e) {
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
  })(fl || {});
function lh(e) {
  let t = _.useContext(eu);
  return t || Z(!1), t;
}
function oh(e) {
  let t = _.useContext(Xp);
  return t || Z(!1), t;
}
function ih(e) {
  let t = _.useContext(vn);
  return t || Z(!1), t;
}
function Hc(e) {
  let t = ih(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function uh() {
  var e;
  let t = _.useContext(Bc),
    n = oh(fl.UseRouteError),
    r = Hc(fl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sh() {
  let { router: e } = lh(Wc.UseNavigateStable),
    t = Hc(fl.UseNavigateStable),
    n = _.useRef(!1);
  return (
    Ac(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, lr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Ln(e) {
  Z(!1);
}
function ah(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = ot.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  Ll() && Z(!1);
  let s = t.replace(/^\/*/, '/'),
    a = _.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: lr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, i]
    );
  typeof r == 'string' && (r = mn(r));
  let {
      pathname: h = '/',
      search: p = '',
      hash: m = '',
      state: v = null,
      key: y = 'default',
    } = r,
    S = _.useMemo(() => {
      let E = Uc(h, s);
      return E == null
        ? null
        : {
            location: { pathname: E, search: p, hash: m, state: v, key: y },
            navigationType: l,
          };
    }, [s, h, p, m, v, y, l]);
  return S == null
    ? null
    : _.createElement(
        zl.Provider,
        { value: a },
        _.createElement(Tl.Provider, { children: n, value: S })
      );
}
function ch(e) {
  let { children: t, location: n } = e;
  return Jp(oi(t), n);
}
new Promise(() => {});
function oi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    _.Children.forEach(e, (r, l) => {
      if (!_.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === _.Fragment) {
        n.push.apply(n, oi(r.props.children, o));
        return;
      }
      r.type !== Ln && Z(!1), !r.props.index || !r.props.children || Z(!1);
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
      r.props.children && (i.children = oi(r.props.children, o)), n.push(i);
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
 */ const fh = '6';
try {
  window.__reactRouterVersion = fh;
} catch {}
const dh = 'startTransition',
  gs = cf[dh];
function ph(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = _.useRef();
  o.current == null && (o.current = xp({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = _.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    h = _.useCallback(
      (p) => {
        a && gs ? gs(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    _.useLayoutEffect(() => i.listen(h), [i, h]),
    _.createElement(ah, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
var ys;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(ys || (ys = {}));
var ws;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(ws || (ws = {}));
const Rl = '/Test_number_one/assets/logo-C9zLG0WD.png',
  hh = '_container_ixgac_1',
  mh = '_container_all_ixgac_11',
  vh = '_logo_ixgac_25',
  gh = '_size_shadow_ixgac_35',
  yh = '_name_input_ixgac_65',
  wh = '_settings_ixgac_93',
  Sh = '_lang_ixgac_103',
  kh = '_next_ixgac_113',
  xh = '_title_ixgac_125',
  _e = {
    container: hh,
    container_all: mh,
    logo: vh,
    size_shadow: gh,
    name_input: yh,
    settings: wh,
    lang: Sh,
    next: kh,
    title: xh,
  },
  _h = ({ setName: e }) => {
    const [t, n] = _.useState(''),
      r = tu(),
      l = () => {
        t ? (e(t), r('/start')) : alert('Введіть Прізвище');
      };
    return T.jsxs('div', {
      className: _e.container_all,
      children: [
        T.jsx('h1', { className: _e.title, children: 'Cognitive Test' }),
        T.jsx('img', { src: Rl, alt: 'logo', className: `${_e.logo}` }),
        T.jsxs('div', {
          className: _e.container,
          children: [
            T.jsx('input', {
              className: `${_e.name_input} ${_e.size_shadow}`,
              type: 'text',
              value: t,
              onChange: (o) => n(o.target.value),
              placeholder: 'прізвище...',
            }),
            T.jsx('button', {
              className: `${_e.settings} ${_e.size_shadow}`,
              children: 'Налаштування',
            }),
            T.jsx('button', {
              className: `${_e.lang} ${_e.size_shadow}`,
              children: 'Мова тесту',
            }),
            T.jsx('button', {
              onClick: l,
              className: `${_e.next} ${_e.size_shadow}`,
              children: 'Далі',
            }),
          ],
        }),
      ],
    });
  },
  Eh = '_logo_container_1jdwm_1',
  Ch = '_text_inst_1jdwm_19',
  Ph = '_instruction_1jdwm_25',
  Nh = '_instruction_text_1jdwm_35',
  zh = '_container_1jdwm_57',
  Th = '_start_1jdwm_67',
  Ut = {
    logo_container: Eh,
    text_inst: Ch,
    instruction: Ph,
    instruction_text: Nh,
    container: zh,
    start: Th,
  },
  Lh = '/Test_number_one/assets/logo_instruction-Cpzm7zZS.gif',
  Rh = () => {
    const e = tu(),
      t = () => {
        e('/game');
      };
    return T.jsxs('div', {
      className: Ut.container,
      children: [
        T.jsxs('div', {
          className: Ut.logo_container,
          children: [
            T.jsx('h2', { children: 'Cognitive Test' }),
            ' ',
            T.jsx('img', {
              src: Rl,
              alt: 'logo',
              style: { width: '70px', height: '70px', marginLeft: '15px' },
            }),
          ],
        }),
        T.jsx('img', { src: Lh, alt: 'Картинка', className: Ut.instruction }),
        T.jsx('div', {
          className: Ut.instruction_text,
          children: T.jsxs('p', {
            className: Ut.text_inst,
            children: [
              T.jsx('b', { children: 'Інструкція:' }),
              ' перед вами на екрані будуть зявлятися числа від 30 до 1. Ваша мета - якомога швидше натискати на числа в порядку спадання, починаючи з 30, і закінчуючи 1.',
            ],
          }),
        }),
        T.jsx('button', { onClick: t, className: Ut.start, children: 'Старт' }),
      ],
    });
  },
  jh = '_logo_container_z1r9k_1',
  Oh = '_container_z1r9k_19',
  Ih = '_timer_z1r9k_33',
  so = { logo_container: jh, container: Oh, timer: Ih },
  Mh = (e) => {
    const t = String(Math.floor(e / 60)).padStart(2, '0'),
      n = String(e % 60).padStart(2, '0');
    return `${t}:${n}`;
  },
  Fh = ({ run: e, onStop: t }) => {
    const [n, r] = _.useState(0);
    return (
      _.useEffect(() => {
        let l;
        return (
          e
            ? (l = setInterval(() => {
                r((o) => o + 1);
              }, 1e3))
            : (t(n), clearInterval(l)),
          () => clearInterval(l)
        );
      }, [e]),
      T.jsxs('div', {
        className: so.container,
        children: [
          T.jsxs('div', {
            className: so.logo_container,
            children: [
              T.jsx('h2', { children: 'Cognitive Test' }),
              ' ',
              T.jsx('img', {
                src: Rl,
                alt: 'logo',
                style: { width: '50px', height: '50px', marginLeft: '15px' },
              }),
            ],
          }),
          T.jsx('p', { className: so.timer, children: Mh(n) }),
        ],
      })
    );
  },
  Dh = '_circle_1piqb_1',
  Uh = '_game_container_1piqb_47',
  $h = '_game_instruction_1piqb_61',
  Bh = '_send_1piqb_79',
  Vh = '_text_1piqb_99',
  $t = {
    circle: Dh,
    game_container: Uh,
    game_instruction: $h,
    send: Bh,
    text: Vh,
  },
  Ss = (e) => ({
    top: `${Math.floor(Math.random() * 90)}%`,
    left: `${Math.floor(Math.random() * 85)}%`,
    zIndex: e,
  }),
  Ah = ({ value: e, style: t, index: n, onClick: r }) =>
    T.jsx('div', {
      'data-index': n,
      onClick: r,
      onTouchStart: r,
      style: { ...t },
      className: $t.circle,
      children: e,
    }),
  Wh = ({ name: e }) => {
    const [t, n] = _.useState([]),
      [r, l] = _.useState(30),
      [o, i] = _.useState(null),
      [u, s] = _.useState(!0),
      [a, h] = _.useState(0),
      [p, m] = _.useState(!1),
      v = _.useRef(null),
      y = _.useRef(null),
      S = tu(),
      E = () => {
        const k = [30, 29, 28, 27, 26].map((x) => ({ value: x, style: Ss(x) }));
        n(k), l(30), i(null), m(!1), s(!0);
      };
    _.useEffect(
      () => (
        E(),
        (async () => {
          try {
            const x = await navigator.mediaDevices.getUserMedia({ video: !0 });
            return (
              v.current &&
                ((v.current.srcObject = x),
                (v.current.onloadedmetadata = () => {
                  v.current && v.current.play();
                })),
              x
            );
          } catch (x) {
            console.error('Error accessing camera:', x);
          }
        })(),
        () => {
          v.current &&
            v.current.srcObject &&
            v.current.srcObject.getTracks().forEach((C) => C.stop());
        }
      ),
      []
    );
    const f = _.useCallback(() => {
        if (v.current && y.current) {
          const k = v.current,
            x = y.current;
          (x.width = k.videoWidth),
            (x.height = k.videoHeight),
            x.getContext('2d').drawImage(k, 0, 0, x.width, x.height);
          const z = x.toDataURL('image/png');
          i(z), m(!0), s(!1);
        }
      }, []),
      c = _.useCallback(
        (k) => {
          const x = k.target.dataset.index;
          n((C) => {
            if (C[x].value === r) {
              const $ = Math.min(...C.map((ee) => ee.value));
              let R = C.filter((ee, wt) => wt !== parseInt(x, 10));
              if ($ > 1) {
                const ee = $ - 1;
                R = [...R, { value: ee, style: Ss(ee) }];
              }
              return l(r - 1), R.length === 0 && setTimeout(f, 100), R;
            }
            return C;
          });
        },
        [r, f]
      ),
      d = (k) => {
        h(k);
      },
      g = () => {
        const k = new FormData();
        k.append('name', e),
          k.append('time', a),
          k.append('photo', o),
          v.current &&
            v.current.srcObject &&
            v.current.srcObject.getTracks().forEach((C) => C.stop()),
          fetch(
            'https://script.google.com/macros/s/AKfycbziz2u_m68G2REqPSxNyVkjIVXzOyU1YUO3VNlgRd83VtnbudzCNu2F39Tpve0EJK5B/exec',
            { method: 'POST', body: k }
          )
            .then((x) => x.text())
            .then((x) => {
              console.log('Success:', x), S('/thanks');
            })
            .catch((x) => {
              console.error('Error:', x);
            });
      };
    return T.jsxs('div', {
      className: $t.game_container,
      children: [
        T.jsx(Fh, { run: u, onStop: d }),
        T.jsxs('div', {
          style: { position: 'relative', width: '100%', height: '100%' },
          children: [
            t.map((k, x) =>
              T.jsx(
                Ah,
                { index: x, value: k.value, style: k.style, onClick: c },
                x
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
                className: $t.game_container,
                children: [
                  T.jsx('p', {
                    className: $t.text,
                    children: 'Перевірка завершена',
                  }),
                  T.jsx('img', {
                    src: o,
                    alt: 'Фото',
                    style: { maxHeight: '30vh', maxWidth: '90vw' },
                  }),
                  T.jsx('button', {
                    onClick: g,
                    className: $t.send,
                    children: 'Відправити Результати',
                  }),
                ],
              }),
          ],
        }),
        T.jsxs('p', {
          className: $t.game_instruction,
          children: [
            T.jsx('b', { children: 'Інструкція:' }),
            ' перед вами на екрані будуть зявлятися числа від 30 до 1. Ваша мета - якомога швидше натискати на числа в порядку спадання, починаючи з 30, і закінчуючи 1.',
          ],
        }),
      ],
    });
  },
  Hh = '_container_all_1dmqe_1',
  Qh = '_logo_1dmqe_15',
  Kh = '_thanks_text_1dmqe_23',
  ao = { container_all: Hh, logo: Qh, thanks_text: Kh },
  Yh = () =>
    T.jsxs('div', {
      className: ao.container_all,
      children: [
        T.jsx('h1', { children: 'Cognitive Test' }),
        T.jsx('img', { src: Rl, alt: 'logo', className: `${ao.logo}` }),
        T.jsx('p', {
          className: ao.thanks_text,
          children: 'Дякую за проходження',
        }),
      ],
    }),
  Gh = () => {
    const [e, t] = _.useState('');
    return T.jsx(ph, {
      basename: '/Test_number_one',
      children: T.jsxs(ch, {
        children: [
          T.jsx(Ln, { path: '/', element: T.jsx(_h, { setName: t }) }),
          T.jsx(Ln, { path: '/start', element: T.jsx(Rh, {}) }),
          T.jsx(Ln, { path: '/game', element: T.jsx(Wh, { name: e }) }),
          T.jsx(Ln, { path: '/thanks', element: T.jsx(Yh, {}) }),
        ],
      }),
    });
  };
co.createRoot(document.getElementById('root')).render(
  T.jsx(Rs.StrictMode, { children: T.jsx(Gh, {}) })
);
