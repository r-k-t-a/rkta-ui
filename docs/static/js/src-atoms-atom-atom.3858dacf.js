(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './src/atoms/Atom/Atom.mdx': function(e, t, A) {
      'use strict';
      A.r(t),
        A.d(t, 'default', function() {
          return p;
        });
      var o = A('./node_modules/react/index.js'),
        n = A.n(o),
        r = A('./node_modules/@mdx-js/tag/dist/index.js'),
        s = A('./node_modules/docz/dist/index.m.js'),
        i = A('./src/atoms/Atom/index.jsx');
      function a(e) {
        return (a =
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
      function c(e, t) {
        if (null == e) return {};
        var A,
          o,
          n = (function(e, t) {
            if (null == e) return {};
            var A,
              o,
              n = {},
              r = Object.keys(e);
            for (o = 0; o < r.length; o++) (A = r[o]), t.indexOf(A) >= 0 || (n[A] = e[A]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (o = 0; o < r.length; o++)
            (A = r[o]),
              t.indexOf(A) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, A) && (n[A] = e[A]));
        }
        return n;
      }
      function g(e, t) {
        for (var A = 0; A < t.length; A++) {
          var o = t[A];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function l(e, t) {
        return !t || ('object' !== a(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = (function(e) {
        function t(e) {
          var A;
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
            ((A = l(this, m(t).call(this, e))).layout = null),
            A
          );
        }
        var A, o, a;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && u(e, t);
          })(t, n.a.Component),
          (A = t),
          (o = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components,
                  A = c(e, ['components']);
                return n.a.createElement(
                  r.MDXTag,
                  { name: 'wrapper', components: t },
                  n.a.createElement(
                    r.MDXTag,
                    { name: 'h1', components: t, props: { id: 'atom' } },
                    'Atom',
                  ),
                  n.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: t },
                    'Everything in the UI is built of atoms.',
                  ),
                  n.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: t, props: { id: 'props' } },
                    'Props',
                  ),
                  n.a.createElement(s.f, { of: i.a }),
                  n.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: t, props: { id: 'examples' } },
                    'Examples',
                  ),
                  n.a.createElement(
                    s.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAEEIiIJZgHYUVXBGGCTXkN0TXaT04AEchJGiSI4EkVCbVVVABXtTVzQwuUFXNdo7Q1dgEM0Hx0ONWiAAEYCIEQBlQQFhRgBiA1QXRUWOU4AC9nAIRJsXYbhmPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ00gAWfT2AANn0wz1jAECADEfWgRJNP4ZxDkRR1MHYAAFIR-CWXifjgEzEQcmsnJoZwICky52AARgsoz5HBMTqAkqC5kU9hIwQ8gbCgdBw3YeROUUsQCpjGR2FReSYG4YBDxkuTsXkbda2AYroDK4IADJBvGRJ5koZo-tK8ruFm-UwFCMSe1Qdp2AAfg2frw0jKqrimgbUAymspBkat3zMWEmMwMAwigKYduq2rjtylca0TIMpRwZzMhSa8CG62s6xIsQ72OGAbtCO72BIzg7CnC4cn8Y42BhK99CkYHVykD6CC-n6_u6jG5jOsxvxAHC8IIogiJIyRVGwAC4CwIDdFAgxwIopicZo00tX9TmHSCygZksMb4B59oB2Fi05PmOB-cg5iGo6vN2PddpGtgNFqAtM0lTIsxxOg2D8sK9YzjgIyLAXHj9CuS9bZoK3RwIRwoGFZ33biZbnYmW3neK9w0msf31ip8UwGdnBo66VEzEqx7GAdv7mOjsN4AIdCujAFrw_B9CtwN1ASJwKWRbFuwlOAMPYIjq4hfLuWcAWsSA7ge5AsHUWm7gPx5kKyrnZtv7667iucGH_R0qLkvrtuggG8r5SazzsArlQSGoDbjuN4SIe0ZoTSZGi-Qi8uh0jcQ5CYaUkii8v2SmpyJTNeySMSKWQqenbiqqu4GqLafjMI_WA6AcAsAilAVwiQAByPpuhKXaCRf0F0sCUTBhDKGIDshkTJpFbYrg0iM2oCzEC-gGDVxrPwVA8D-BXH4ECYkVRvAZAtL-ckTIQDO34KwDI-RqB0PYPwLSOARFaRCusfg5RyD9BmMtQR_AoINQorAGEWAfQcLBuSSgiQ8x5AKJOLUFpGEghYQICRVCQBRDQAolQEYNBwAsRYKRMB5gRjEhAeAgjKGA34HrUQSAhEgAAHrJRsjgAAHDgZKTjaz8DLjLCutjQkAFYcDhIAEyxOceTFW2tUC6y1MkiyOBkw4BSdkoJ_irSRGSWEyJ0T-DrCOvIMmTDqgfGoJAFIxDUCkL0GBEA1cQC0F9FkOhDCzS0EKeaC0swZj8FafIZZQA',
                      __position: 1,
                      __code: '<Atom>By default Atom is rendered as div element</Atom>',
                      __scope: { props: this ? this.props : A, Atom: i.b, RawAtom: i.a },
                    },
                    n.a.createElement(i.b, null, 'By default Atom is rendered as div element'),
                  ),
                  n.a.createElement(
                    s.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAEEIiIJZgHYUVXBGGCTXkN0TXaT04AEchJGiSI4EkVCbVVVABXtTVzQwuUFXNdo7Q1dgEM0Hx0ONWiAAEYCIEQBlQQFhRgBiA1QXRUWOU4AC9nAIRJsXYbhmPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ00gAWfT2AANn0wz1jAECADEfWgRJNP4ZxDkRR1MHYAAFIR-CWXifjgEzEQcmsnJoZwICky52AARgsoz5HBMTqAkqC5kU9hIwQ8gbCgdBw3YeROUUsQCpjGR2FReSYG4YBDxkuTsXkbda2AYroDK4IADJBvGRJ5koZo-tK8ruFm-UwFCMSe1Qdp2AAfg2frw0jKqrimgbUAymspBkat3zMWEmMwMAwigKYduq2rjtylca0TIMpRwZzMhSa8CG62s6xImEr30PgQA8cIIgDEAAcB9gb3CedVnMWgEk4KYInYQIQlQZIFx410Rm6EZ3ExkcC3xYoCb-4p-0HVcdxIuGpA-ggvp-v7uqkF6zrMb8QBwvCCKIIiSMkVRsAAuAsCA3RQIMcCKKYtmaNNLV_WVh0gsoGZLDG-A1faAddYtOT5jgTXIOYhqOrzdj3XaRrYDRagLTNJUyLMcToNg_LCvWM44CMiwaf0K5L0JmgQ9HAhHCgYUY4TuJlpjiZCZj4r3DSawM_WEXxTAGOcBLrpUTMSrHsYSO_uYkuw3gAh0K6MAWoLmAwHQrcvdQEicBNvWDbsJTgHz2DC6uHXB4tnAFrEzO4HuQLB31me4D8eZCsqmOw5oSeV6HnBd4IdKe7767boIKfh-Umt27AK5UFCBIF6Xp-X_WY_NJkaL5B7y6HQ-0QshYGSkSI9yAbJJqOQlLO2yJGEiSxCo9EXhVKq3AapB0_GYKBsB0A4BYBFKArhEgADkfTdCUu0Ei_oLpYEoscDul92C4OyGRAWkVtiuDSNLagcsQL6AYKPGs_BUAUP4FcfgQJiRVG8BkC0v5yRMhADHfgrAMj5GoBI9g_AtI4D0VpEK6x-DlHIP0GYy1tH8Cgg1CisAYRYB9Eoxh5JKCJDzHkAok4tQWmkSCORAgjEiJAFENAViVARg0HAIJFgTEwHmBGMSEB4DaOEYDfgHtRBIB0SAAAeslGyOAAAcOBkoxNrPwAeZsh7hPyQAVhwIUgATOU2Jgs7au1QO7LUtSLI4GTDgOprScmZKtJEWpBTimlP4OsI68gBYyOqB8agkAUi8NQPwvQYEQCjxALQX0WQJFSLNLQbp5oLSzBmPweZ8hblAA',
                      __position: 2,
                      __code:
                        '<Atom element="button">\n  But we can tell it to be any element we want to with `element` prop\n</Atom>',
                      __scope: { props: this ? this.props : A, Atom: i.b, RawAtom: i.a },
                    },
                    n.a.createElement(
                      i.b,
                      { element: 'button' },
                      'But we can tell it to be any element we want to with `element` prop',
                    ),
                  ),
                  n.a.createElement(
                    s.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAEEIiIJZgHYUVXBGGCTXkN0TXaT04AEchJGiSI4EkVCbVVVABXtTVzQwuUFXNdo7Q1dgEM0Hx0ONWiAAEYCIEQBlQQFhRgBiA1QXRUWOU4AC9nAIRJsXYbhmPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ00gAWfT2AANn0wz1jAECADEfWgRJNP4ZxDkRR1MHYAAFIR-CWXifjgEzEQcmsnJoZwICky52AARgsoz5HBMTqAkqC5kU9hIwQ8gbCgdBw3YeROUUsQCpjGR2FReSYG4YBDxkuTsXkbda2AYroDK4IADJBvGRJ5koZo-tK8ruFm-UwFCMSe1Qdp2AAfg2frw0jKqrimgbUAymspBkat3zMWEmMwMAwigKYduq2rjtylca0TIMpRwZzMhSa8CG62s6xIno4DgFqENighZKazSXniWJVvkLrV0BgB1bo4nMRrYBCWCcTxdhSlB4o9g8dQtimSpRymcgoH8OBUB9eBcYISVNnQFHazCWDolieIkk5qQSIB2tGGB7HmuABDaCwHUtmFXnqE0xbpygNBhIq5G3sBvYjgLfFiglknKDJinh2pzhUDVl0Go6-BBeI2CRakD6CC-n6_u6oW5jOsxvxAHC8IIogiJIyRVGwAC4CwIDdFAgxwIopjXZo00tX9JOHSCygZksMbmY4-UBxzi05PmOAM8g5jbaanJ2PddoJbRagLTNJUyLMcToNg_LCvWM44CMiwFx4_QrkvUeaCH6nHCgYVp7nuJluniZR-n4r3DSaw1_WYPxTAaecCPrpUTMSrHsYCe_uYo-w3gAh0K6MAWr3mAwHQrcO9QEicGL3P87sEpYAu9YL7yuNnf-5ccALTEuvUG4DBx5ygXAPw8xCqVWniPP6CCc5IPgDgLB-h0pfx_tdW6BAIGAOUjWV-YArioFCAkOB9x2AMKYesQhNBNIyGivIL-l0HRd0QshYGSkSJfyEdDWAOQlIS0fCRJYhUQZ2HPtwGqA9PxmCkdkHALAIp00SAAOSZvldoJF_QXSwJRY4b9yHsG0egMi_tIrbFcGkKO1BY4gX0AwYBNZ-CM2PPwK4_AgTEiqN4DIFpfzkiZCAae_BWAZHyNQYJ7B-BaRwJkrSIV1j8HKOQfoMxlppP4FBBqFEcYxJxpgcklBEh5jyAUScWoLRhJBJEgQuT_EgCiGgUpKgIwaDgN0iw-SYDzAjGJCA9skDUMBvwNuog5n8AAHrJRsjgAAHDgZKozaz8D_qXABAz1kAFYcCbIAEz7LGQHO2zdUCty1KciyOBkw4DObc9JghWnWlORs7Zuz-DrCOvIf24TqgfGoJAFIHjUBeL0GBEAwCQC0F9FkYJoSzS0GeeaC0swZj8HBUjeQQA',
                      __position: 3,
                      __code:
                        "<Atom css={{ fontStyle: 'italic' }}>\n  We can style atoms with `css` object and get classnames attached\n  automatically\n</Atom>\n<Atom style={{ textDecoration: 'underline' }}>\n  or with `style` object to get inline styles\n</Atom>",
                      __scope: { props: this ? this.props : A, Atom: i.b, RawAtom: i.a },
                    },
                    n.a.createElement(
                      i.b,
                      { css: { fontStyle: 'italic' } },
                      'We can style atoms with `css` object and get classnames attached automatically',
                    ),
                    n.a.createElement(
                      i.b,
                      { style: { textDecoration: 'underline' } },
                      'or with `style` object to get inline styles',
                    ),
                  ),
                );
              },
            },
          ]) && g(A.prototype, o),
          a && g(A, a),
          t
        );
      })();
      p.__docgenInfo = { description: '', methods: [], displayName: 'MDXContent' };
    },
    './src/atoms/Atom/index.jsx': function(e, t, A) {
      'use strict';
      A.d(t, 'a', function() {
        return a;
      });
      var o = A('./node_modules/react/index.js'),
        n = A.n(o),
        r = A('./node_modules/styletron-react/dist/browser.es5.es.js');
      function s(e, t) {
        if (null == e) return {};
        var A,
          o,
          n = (function(e, t) {
            if (null == e) return {};
            var A,
              o,
              n = {},
              r = Object.keys(e);
            for (o = 0; o < r.length; o++) (A = r[o]), t.indexOf(A) >= 0 || (n[A] = e[A]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (o = 0; o < r.length; o++)
            (A = r[o]),
              t.indexOf(A) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, A) && (n[A] = e[A]));
        }
        return n;
      }
      var i = function(e) {
        e.css;
        var t = e.element,
          A = (e.getColor, e.location, e.theme, e.changeTheme, e.atomRef),
          o = s(e, ['css', 'element', 'getColor', 'location', 'theme', 'changeTheme', 'atomRef']);
        return n.a.createElement(t, Object.assign({}, o, { ref: A }));
      };
      i.defaultProps = { atomRef: null, css: null, element: 'div' };
      var a = i,
        c = Object(r.b)(i, function(e) {
          return e.css;
        });
      (c.displayName = 'Atom'),
        (t.b = c),
        (i.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Atom',
          props: {
            atomRef: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: '',
            },
            css: {
              defaultValue: { value: 'null', computed: !1 },
              type: { name: 'shape', value: {} },
              required: !1,
              description: '',
            },
            element: {
              defaultValue: { value: "'div'", computed: !1 },
              type: { name: 'element' },
              required: !1,
              description: '',
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=src-atoms-atom-atom.90326e9fd3f99bb9d384.js.map
