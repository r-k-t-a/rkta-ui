(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    './.docz/app/db.json': function(e) {
      e.exports = {
        config: {
          title: 'R\xb7K\xb7T\xb7A UI',
          description: 'A minimal material UI for React',
          menu: [],
          ordering: 'descending',
          version: '0.0.17',
          repository: 'https://github.com/r-k-t-a/rkta-ui',
          native: !1,
          codeSandbox: !0,
          themeConfig: {},
          dest: 'docs',
          source: 'src',
          wrapper: 'src/DoczWrapper',
        },
        entries: {
          'src/index.mdx': {
            name: 'Hello world',
            id: '6576455a124f9aaefd860597f03a8fe4',
            filepath: 'src/index.mdx',
            link: 'https://github.com/r-k-t-a/rkta-ui/edit/master/src/index.mdx',
            slug: 'src-index',
            route: '/src-index',
            order: 0,
            menu: null,
            headings: [{ depth: 1, slug: 'hello-world', value: 'Hello world' }],
          },
          'src/atoms/Addon/Addon.mdx': {
            name: 'Addon',
            menu: 'Atoms',
            id: 'c3e17274239e9c74bd81123ace0e91e7',
            filepath: 'src/atoms/Addon/Addon.mdx',
            link: 'https://github.com/r-k-t-a/rkta-ui/edit/master/src/atoms/Addon/Addon.mdx',
            slug: 'src-atoms-addon-addon',
            route: '/src-atoms-addon-addon',
            order: 0,
            headings: [
              { depth: 1, slug: 'addon', value: 'Addon' },
              { depth: 2, slug: 'props', value: 'Props' },
              { depth: 2, slug: 'examples', value: 'Examples' },
            ],
          },
          'src/atoms/Atom/Atom.mdx': {
            name: 'Atom',
            menu: 'Atoms',
            id: 'bacdb3ec631276ca2474642e8e83807f',
            filepath: 'src/atoms/Atom/Atom.mdx',
            link: 'https://github.com/r-k-t-a/rkta-ui/edit/master/src/atoms/Atom/Atom.mdx',
            slug: 'src-atoms-atom-atom',
            route: '/src-atoms-atom-atom',
            order: 0,
            headings: [
              { depth: 1, slug: 'atom', value: 'Atom' },
              { depth: 2, slug: 'props', value: 'Props' },
              { depth: 2, slug: 'examples', value: 'Examples' },
            ],
          },
        },
      };
    },
    './.docz/app/index.jsx': function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('./node_modules/react/index.js'),
        r = n.n(o),
        i = n('./node_modules/react-dom/index.js'),
        a = n.n(i),
        d = n('./.docz/app/root.jsx'),
        l = [],
        c = [],
        s = function() {
          return c.forEach(function(e) {
            return e && e();
          });
        },
        p = document.querySelector('#root');
      !(function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.a;
        l.forEach(function(e) {
          return e && e();
        }),
          a.a.render(r.a.createElement(e, null), p, s);
      })(d.a);
    },
    './.docz/app/root.jsx': function(e, t, n) {
      'use strict';
      (function(e) {
        var o = n('./node_modules/react/index.js'),
          r = n.n(o),
          i = n('./node_modules/react-hot-loader/index.js'),
          a = n('./node_modules/docz-theme-default/dist/index.m.js'),
          d = n('./src/DoczWrapper.jsx'),
          l = function() {
            return r.a.createElement(a.a, { wrapper: d.a });
          };
        (t.a = Object(i.hot)(e)(l)),
          (l.__docgenInfo = { description: '', methods: [], displayName: 'Root' });
      }.call(this, n('./node_modules/webpack/buildin/harmony-module.js')(e)));
    },
    './src/DoczWrapper.jsx': function(e, t, n) {
      'use strict';
      var o = n('./node_modules/react/index.js'),
        r = n.n(o),
        i = n('./node_modules/styletron-engine-atomic/dist/browser.es5.es.js'),
        a = n('./src/Theme/Provider.jsx'),
        d = new i.a(),
        l = function(e) {
          var t = e.children;
          return r.a.createElement(a.a, { value: d }, t);
        };
      (t.a = l),
        (l.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'DoczWrapper',
          props: { children: { type: { name: 'node' }, required: !0, description: '' } },
        });
    },
    './src/Theme/Context.js': function(e, t, n) {
      'use strict';
      var o = n('./node_modules/react/index.js'),
        r = n('./src/Theme/defaultTheme.jsx');
      t.a = Object(o.createContext)({
        providerIsMissing: !0,
        modifyElement: null,
        theme: r.a,
        changeTheme: function() {},
        getColor: function() {},
      });
    },
    './src/Theme/Provider.jsx': function(e, t, n) {
      'use strict';
      var o = n('./node_modules/react/index.js'),
        r = n.n(o),
        i = n('./node_modules/styletron-react/dist/browser.es5.es.js'),
        a = n('./node_modules/lodash.merge/index.js'),
        d = n.n(a),
        l = n('./src/Theme/Context.js'),
        c = n('./src/Theme/defaultTheme.jsx'),
        s = n('./src/util/isServer.js');
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var u = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
        return Object.keys(e).reduce(function(o, r) {
          return (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                o = Object.keys(n);
              'function' === typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  }),
                )),
                o.forEach(function(t) {
                  p(e, t, n[t]);
                });
            }
            return e;
          })({}, o, p({}, ''.concat(n).concat(r), p({}, t, e[r])));
        }, {});
      };
      function f(e) {
        return (f =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          'function' === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            o.forEach(function(t) {
              y(e, t, n[t]);
            });
        }
        return e;
      }
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function v(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      function S(e) {
        var t = d()(c.a, e),
          n = t.colors,
          o = n.extra,
          r = v(n, ['extra']);
        return Object.assign(t, {
          Paper: x({}, t.Paper, u(r, 'backgroundColor'), u(o, 'backgroundColor', 'color')),
        });
      }
      n.d(t, 'a', function() {
        return j;
      });
      var j = (function(e) {
        function t() {
          var e, n, o, r;
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var i = arguments.length, a = new Array(i), d = 0; d < i; d++) a[d] = arguments[d];
          return (
            (o = this),
            (r = (e = g(t)).call.apply(e, [this].concat(a))),
            (n = !r || ('object' !== f(r) && 'function' !== typeof r) ? h(o) : r),
            y(h(n), 'state', { theme: S(n.props.theme) }),
            y(h(n), 'changeTheme', function() {
              var e,
                t = (e = n.props).changeTheme.apply(e, arguments);
              n.setState({ theme: S(t) });
            }),
            y(h(n), 'getColor', function(e) {
              var t = n.state.theme.colors;
              return ('number' === typeof e ? t.extra[e] : t[e]) || t.text;
            }),
            n
          );
        }
        var n, a, d;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && b(e, t);
          })(t, o['Component']),
          (n = t),
          (a = [
            {
              key: 'render',
              value: function() {
                var e,
                  t,
                  n = this.changeTheme,
                  o = this.state.theme,
                  a = this.props,
                  d = a.children,
                  c = a.location,
                  p = a.modifyElement,
                  u = v(a, ['children', 'location', 'modifyElement']);
                return r.a.createElement(
                  i.a,
                  u,
                  r.a.createElement(
                    l.a.Provider,
                    {
                      value: {
                        getColor: this.getColor,
                        location: s.a
                          ? c
                          : ((e = window.location), (t = e.origin), e.href.replace(t, '')),
                        changeTheme: n,
                        modifyElement: p,
                        theme: o,
                      },
                    },
                    d,
                  ),
                );
              },
            },
          ]) && m(n.prototype, a),
          d && m(n, d),
          t
        );
      })();
      y(j, 'defaultProps', { changeTheme: function() {}, location: null, theme: {} }),
        (j.__docgenInfo = {
          description: '',
          methods: [
            {
              name: 'changeTheme',
              docblock: null,
              modifiers: [],
              params: [{ name: '...args', type: null }],
              returns: null,
            },
            {
              name: 'getColor',
              docblock: null,
              modifiers: [],
              params: [{ name: 'color', type: null }],
              returns: null,
            },
          ],
          displayName: 'UiProvider',
          props: {
            changeTheme: {
              defaultValue: { value: 'function() {}', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: '',
            },
            location: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            theme: {
              defaultValue: { value: '{}', computed: !1 },
              type: { name: 'shape', value: '', computed: !0 },
              required: !1,
              description: '',
            },
          },
        });
    },
    './src/Theme/defaultTheme.jsx': function(e, t, n) {
      'use strict';
      var o = {};
      n.r(o),
        n.d(o, 'primary', function() {
          return d;
        }),
        n.d(o, 'primary1', function() {
          return l;
        }),
        n.d(o, 'primary2', function() {
          return c;
        }),
        n.d(o, 'secondary', function() {
          return s;
        }),
        n.d(o, 'secondary1', function() {
          return p;
        }),
        n.d(o, 'text', function() {
          return u;
        }),
        n.d(o, 'divider', function() {
          return f;
        }),
        n.d(o, 'paper', function() {
          return m;
        }),
        n.d(o, 'paper1', function() {
          return g;
        }),
        n.d(o, 'paper2', function() {
          return h;
        }),
        n.d(o, 'paper3', function() {
          return b;
        }),
        n.d(o, 'success', function() {
          return x;
        }),
        n.d(o, 'warning', function() {
          return y;
        }),
        n.d(o, 'extra', function() {
          return v;
        });
      var r = function(e) {
          return e;
        },
        i = r({
          defaultStyle: { display: 'block', padding: '0 16px' },
          fitAll: { padding: 0 },
          fitLeft: { paddingLeft: 0 },
          fitRight: { paddingRight: 0 },
        }),
        a = r({
          defaultStyle: {
            display: 'inline-block',
            margin: '0 .3ex',
            padding: '0 calc(.48ex + 4px)',
            verticalAlign: 'middle',
          },
          fitLeft: { marginLeft: 0 },
          fitRight: { marginRight: 0 },
        }),
        d = '#FADC4F',
        l = '#FFE56A',
        c = '#AD9625',
        s = '#1714AD',
        p = '#524FFA',
        u = '#414141',
        f = 'rgba(0,0,0, .16)',
        m = '#FCFCFC',
        g = '#FAFAFA',
        h = '#EEEEEE',
        b = '#E0E0E0',
        x = '#91CE79',
        y = '#F36F1B',
        v = {
          1: '#FAD8C2',
          2: '#FFE7CE',
          3: '#FFF6C0',
          4: '#FFFDF1',
          5: '#E9F2CE',
          6: '#D6E8CF',
          7: '#C3C9C4',
          8: '#E8EEE9',
          9: '#D8EDEF',
          10: '#ECF5F7',
          11: '#F8FDFE',
          12: '#C5E7F7',
          13: '#B0B9BF',
          14: '#E9DDEB',
          15: '#F8E0EB',
          16: '#c6e0f4',
        },
        S = r({
          defaultStyle: { border: '0', height: '0', borderTop: '1px solid '.concat(f) },
          dotted: { borderStyle: 'dotted' },
          baseline: { margin: 0, padding: 0 },
          inset: { marginLeft: '72px' },
          invisible: { visibility: 'hidden' },
        }),
        j = r({
          defaultStyle: {
            fontFamily: '"San Francisco", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            letterSpacing: '0.15px',
            lineHeight: '24px',
            textRendering: 'optimizeLegibility',
            textDecoration: 'none',
          },
          serif: { fontFamily: '"Playfair Display", Bookman, Palatino, Georgia, serif' },
          monospace: {
            fontFamily:
              '"Lucida Sans Typewriter", "Lucida Console", "Consolas", "Andale Mono", "Monaco", "Courier New", Courier, monospace',
          },
          uppercase: { textTransform: 'uppercase', letterSpacing: '0.75px' },
          baseline: { margin: 0, padding: 0 },
          muted: { opacity: '0.4', userSelect: 'none' },
          center: { textAlign: 'center' },
          etched: { textShadow: '0 1px rgba(255, 255, 255, 0.24)' },
          noselect: { userSelect: 'none' },
          nowrap: { whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' },
          wrap: { overflowWrap: 'break-word', wordWrap: 'break-word' },
          hyphens: { hyphens: 'auto' },
          textLeft: { textAlign: 'left' },
          h1: {
            fontSize: '96px',
            fontWeight: 'lighter',
            lineHeight: '96px',
            letterSpacing: '-1.5px',
          },
          h2: {
            fontSize: '60px',
            fontWeight: 'lighter',
            lineHeight: '60px',
            letterSpacing: '-0.5px',
          },
          h3: { fontSize: '48px', fontWeight: '400', lineHeight: '48px' },
          h4: { fontSize: '34px', fontWeight: '400', lineHeight: '40px', letterSpacing: '0.25px' },
          h5: { fontSize: '24px', fontWeight: '400', lineHeight: '32px' },
          h6: { fontSize: '22px', fontWeight: '500', lineHeight: '32px', letterSpacing: '0.15px' },
          subtitle1: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '400',
            letterSpacing: '0.15px',
          },
          subtitle2: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            letterSpacing: '0.1px',
          },
          body2: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            letterSpacing: '0.1px',
          },
          button: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            letterSpacing: '0.1px',
          },
          caption: {
            fontSize: '12px',
            lineHeight: '20px',
            fontWeight: '400',
            letterSpacing: '0.4px',
          },
          overline: {
            fontSize: '10px',
            lineHeight: '20px',
            fontWeight: '400',
            letterSpacing: '1px',
          },
        }),
        w = r({ defaultStyle: {} }),
        E = r({
          defaultStyle: {
            borderRadius: '3px',
            boxSizing: 'border-box',
            backgroundColor: m,
            position: 'relative',
          },
          clip: { overflow: 'hidden' },
          disabled: { pointerEvents: 'none', opacity: '0.4', userSelect: 'none' },
          hard: { borderRadius: '0' },
          hardBottom: { borderBottomLeftRadius: '0', borderBottomRightRadius: '0' },
          hardLeft: { borderBottomLeftRadius: '0', borderTopLeftRadius: '0' },
          hardTop: { borderTopLeftRadius: '0', borderTopRightRadius: '0' },
          hardRight: { borderBottomRightRadius: '0', borderTopRightRadius: '0' },
          round: { borderRadius: '50%' },
          rounded: { borderRadius: '1200vw' },
          transparent: { backgroundColor: 'transparent' },
        }),
        k = r({ defaultStyle: { verticalAlign: 'middle' }, block: { display: 'block' } }),
        A = r({
          defaultStyle: {
            borderWidth: 0,
            borderColor: u,
            cursor: 'pointer',
            height: '48px',
            outline: 'none',
            padding: '0 16px',
          },
          autoHeight: { height: 'auto' },
          blockLevel: { display: 'block', width: '100%' },
          fitAll: { padding: 0 },
          fitLeft: { paddingLeft: 0 },
          fitRight: { paddingRight: 0 },
          large: { height: '56px', padding: '0 32px' },
          outline: { background: 'transparent', border: '2px solid', boxSizing: 'border-box' },
          small: { height: '32px', padding: '0 8px' },
        }),
        F = r({
          defaultStyle: {
            background: 'transparent',
            border: 'none',
            display: 'block',
            height: '48px',
            outline: 'none',
            padding: 0,
          },
        }),
        O = r({
          defaultStyle: {
            border: '1px solid',
            borderRadius: '3px',
            padding: 0,
            position: 'relative',
          },
        }),
        C = r({
          defaultStyle: { margin: 0, padding: '8px 0' },
          fitAll: { padding: 0 },
          fitBottom: { paddingBottom: 0 },
          fitTop: { paddingTop: 0 },
        }),
        T = r({
          defaultStyle: {
            alignItems: 'center',
            display: 'flex',
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          },
        }),
        R = r({
          defaultStyle: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            padding: '12px 16px',
          },
          center: { alignItems: 'center' },
          fitAll: { padding: 0 },
          fitBottom: { paddingBottom: 0 },
          fitTop: { paddingTop: 0 },
          reverse: { flexDirection: 'column-reverse' },
          small: { padding: '4px 16px' },
        }),
        _ = r({
          defaultStyle: {
            alignItems: 'center',
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pointerEvents: 'none',
            position: 'relative',
          },
          blockLevel: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 },
        }),
        P = r({
          defaultStyle: {
            display: 'block',
            transition: 'opacity 0.48s ease',
            opacity: 0,
            height: '100%',
            width: '100%',
          },
          highlight: { opacity: 0.16 },
        });
      t.a = {
        colors: o,
        Addon: i,
        Bage: a,
        Divider: S,
        Font: j,
        Header: w,
        Paper: E,
        Svg: k,
        Button: A,
        InputBase: F,
        InputOutline: O,
        List: C,
        ListItem: T,
        ListItemBody: R,
        Spinner: _,
        Ripple: P,
      };
    },
    './src/util/isServer.js': function(e, t, n) {
      'use strict';
      (function(e) {
        t.a = 'undefined' !== typeof e && e.versions && e.versions.node;
      }.call(this, n('./node_modules/process/browser.js')));
    },
    0: function(e, t, n) {
      n('./node_modules/react-dev-utils/webpackHotDevClient.js'),
        n('./node_modules/@babel/polyfill/lib/index.js'),
        (e.exports = n('./.docz/app/index.jsx'));
    },
  },
  [[0, 1, 5]],
]);
//# sourceMappingURL=app.90326e9fd3f99bb9d384.js.map
