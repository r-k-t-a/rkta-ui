(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/atoms/Atom/index.jsx":function(e,t,o){"use strict";o.d(t,"a",function(){return A});var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/@emotion/core/dist/core.browser.esm.js"),i=function(e){var t=e.css,o=e.element,i=(e.getColor,e.location,e.theme,e.changeTheme,e.atomRef),A=(e.touchDetected,Object(s.a)(e,["css","element","getColor","location","theme","changeTheme","atomRef","touchDetected"]));return Object(n.b)(o,Object.assign({},A,{css:t,ref:i}))};i.defaultProps={atomRef:null,css:null,element:"div"},i.displayName="Atom";var A=i;"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RawAtom",filename:"src/atoms/Atom/index.jsx"}}),t.b=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Atom",filename:"src/atoms/Atom/index.jsx"}})},"./src/util/media.js":function(e,t,o){"use strict";var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");t.a=function(e){return function(t){var o=t.mediaQueries,i=t.theme;return function(e,t){return Object.keys(e).reduce(function(o,i){var A=t[i],m=A?"@media ".concat(A):i;return Object(n.a)({},o,Object(s.a)({},m,e[i]))},{})}(e,o||i.mediaQueries)}}},"./src/util/media.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return d});var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/docz/dist/index.esm.js"),A=o("./src/atoms/Atom/index.jsx"),m=o("./src/util/media.js"),a={},c="wrapper";function d(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(n.b)(c,Object.assign({},a,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"media-utility"},"Media Utility"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"media")," utility helps you to write responsive css."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { media } from 'rkta-ui';\n")),Object(n.b)(i.c,{__position:0,__code:"<Atom css={media({ display: 'none', phone: { display: 'block' } })}>\n  <Atom css={{ outline: '1px dotted' }}>Visible on phones</Atom>\n</Atom>\n<Atom css={media({ atMostTablet: { display: 'flex' } })}>\n  <Atom css={{ flexBasis: '50%', outline: '1px dotted' }}>Left Colum</Atom>\n  <Atom\n    css={media({\n      flexBasis: '50%',\n      outline: '1px dotted',\n      desktop: { background: '#cfe' },\n    })}\n  >\n    Right Colum\n  </Atom>\n</Atom>",__scope:{props:this?this.props:o,Playground:i.c,Atom:A.b,media:m.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYAEEIllI1ZXaD04AEchJGiSI4EkIjIlwiD2CPFhXHQsiKKoyRwmgSQ2IgVxmPw9hA0lTiTU1dowVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdDIAFnM9gADZzMs9YwGAgAxb1oESQz-GcQ4EQdTAYKEfgliIahKDgGyEQ86svJoZwICwy52AARgcqz5Fk-TCLmDT2AjKDyBsKB0DDVCOQ0sRSujGR2BRNSYG4YBsJUtq4HkLca2ACroGq4IADJRvGRJ5koZohqqmruEWuUwGQyUBlQdp2AAfg2YawwjOqrjmkbUHy6spBkKs3zMGF1WOGAwDCKApgO-rGvOgi5n6hNxIIHBvMyFIrwIb6a0YRjZTOOAOsE1wyuOWwyXgwzUGoGBLL7YZnSuKCWHiuCArlDwoFObZNrQ-QOT6lca1rCGejgaHgCg_YoDQTL2iy5yThubJyb6gA1WwIGJ7pmRmLH4CkCHQe3GWabp4iGaZ2H4eiPU4oISxXFFggcYR_HkeW2ALNQ2rqerWmE3pqGOqgsATevfxbEMgBWIyAFIMdZ9nDK5nwedodB-dlq2ABkHqmRwoFCIgFbl4jQ-t4j45rW3gFV7TLat2mHewJ38nuOV3a9qyc5zn3sblf3FN54Oy_L2nym2CIZn1jwJW2RC2gwQyAGJyDAdHUIbxvKbOxuk5rEUIBSQgHRjuPs9p6XE4V1fIlBqRfv-wHgf66WvrMN8vxASjqNooh6IhyRVGwf84CwQDdBAgwwOMIx2AAAU0Hxf_YHkto7rQQHJYKa8BJLtH7JQGY5pVLzDgCJO6UF_5oVInKL-MAYrdlQACLofozCFXYPTTSZV1hQwbvOLB-grgXmoTQBup5o5CiWI8aEcA2Y0EtLYHWsBzScMpJqSQ0DYHwPgOsEmcQcGsMkOwzhFo8a8JgPw9mE4hEiLgeAuA6wJjUJkXItACieGixUc6NRZphEDk0Qg8hfgZwwGsHo9gbD4DyO4RUExAjzGSksTA6x4jqyXzFGABuERQgVS1KOLYQd9GuMMe4pRpjBEWI0WI7R1YcCZK6CiMwlM3qMDocDLSmTQzwAIGhdOUM0JdDAB1IJD00KbhVP6VAEMcAiLAQgkqWcLD1LAFcEBMDOnwBwGjHUYBhkRgANqDJmMMuAOAVpySWLM-ZOA4B-HmGVSmABdDkDcoYDNAVo0ZzpxmTJmcchB6zNkwG2fsiKQyTlLPIHsyhl4aGPLmScsZEzwHTNWScqhwMVlXJGSiacKQ3m5OaWYNpmBHqhGerMuwmkekhGIsEq4qAkVQAOYzbFuL3n0L1nKGQSV5DNPhYjAmAA5b03RNLtAhgQ50WBRJEJFK4EYJDiHEVhWy0SCKnqEX5WYU-59eIxCgAJbIQkH7P2AvoBgRDyCmloHqOVrh7CMxKhGChrEtUAEUGRwjgHVbg_UdQeHUNEnA2wYCJDgPqxmHJSnoHCXciMEpyBLF6AIMMBAADSjqLUNXRRYIhABHU1yRNKwxNRkCA8Apn-sDSGxIOzmm0yIQ6uN7AY0ZGSDtYoX9YbsAACTAELQIRI8hijsCOn0dNjrs01i6AQPo5goIlJ9UsKZeadlHUZqm5t-gM07NQm2pQWlKYCtuvaYVSKphQzevDBNprk1wCWLoo8tV6rkPVTATV7EdXOoNRupNECAA-178TUJwJes1H5xVKBAAlbYrg0gP2oIqvQoEQDov4KgBl_Arj8B-MWaoGRzQ_jJIyEADd-CsAyPkagYH2D8CMjgbDRkorrH4OUNVEAZg4Iw_wAiLU8KwGhFgb08H7pkkoIkXMeQCjeItJBv4pZ8PVn4FENA5GVDhg0NoxDBGQCYHmOGOSW6MMRsw5JpSQm4K0ByeJ7O_BTSShU1kdTo9FOpK0bptTogNO034Jg7B608EIfAyAAAellXDOAACcvGLOCE1JaSIJmyn8HWGdeQEruO4F0JAFIP7UB_tfgwbSIBaA-iyGBiDR7zTaYtLMGY_BgvyDy0AA",mdxType:"Playground"},Object(n.b)(A.b,{css:Object(m.a)({display:"none",phone:{display:"block"}}),mdxType:"Atom"},Object(n.b)(A.b,{css:{outline:"1px dotted"},mdxType:"Atom"},"Visible on phones")),Object(n.b)(A.b,{css:Object(m.a)({atMostTablet:{display:"flex"}}),mdxType:"Atom"},Object(n.b)(A.b,{css:{flexBasis:"50%",outline:"1px dotted"},mdxType:"Atom"},"Left Colum"),Object(n.b)(A.b,{css:Object(m.a)({flexBasis:"50%",outline:"1px dotted",desktop:{background:"#cfe"}}),mdxType:"Atom"},"Right Colum"))),Object(n.b)("h2",{id:"use-with-emotion"},"Use with Emotion"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { css } from '@emotion/core';\nimport styled from '@emotion/styled';\nimport { media } from 'rkta-ui';\n\nconst someStyle = css`\n  display: none;\n  ${media({\n    phone: { display: 'block '},\n  })}\n`;\n\nconst Box = styled.div`\n  display: none;\n  ${media({\n    phone: { display: 'block '},\n  })}\n`;\n")),Object(n.b)("p",null,"Read about media queries ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/util-create-media-queries"}),"here"),"."))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/util/media.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=util-media.e1ff41a760cebd183ab1.js.map