!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("smartphoto")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","smartphoto"],t):"object"==typeof exports?exports.ReactSmartPhoto=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("smartphoto")):e.ReactSmartPhoto=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e.smartphoto)}(this,function(e,t,r,o,n,a){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=o(n);t.default=a.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(6),d=o(l),m=r(5),y=o(m),h=r(2),b=o(h),g=r(3),v=(o(g),r(4)),j=(o(v),r(7)),_=o(j),x=(c=s=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this.props.group;this._instance=new _.default('.react-smart-photo-item[data-group="'+e+'"]')}},{key:"componentWillUnmount",value:function(){this._instance=null}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.group,o=e.items,a=n(e,["className","group","items"]);return d.default.createElement("section",p({className:(0,b.default)("react-smart-photo",t)},a),o.map(function(e,t){var o=e.href,n=e.src,a=e.caption,u=e.id;return d.default.createElement("a",{href:o,key:t,className:"react-smart-photo-item","data-caption":a,"data-id":u,"data-group":r},d.default.createElement("img",{src:n,alt:""}))}))}}]),t}(l.Component),s.propTypes={className:y.default.string,href:y.default.string,src:y.default.string,id:y.default.string,caption:y.default.string,group:y.default.string,items:y.default.array},s.defaultProps={items:[]},c);t.default=x},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-smart-photo.js.map