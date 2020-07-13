(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),o=(n(0),n(201)),l={title:"New Charts"},i={id:"developers/charts",title:"New Charts",description:"Chart.js 2.0 introduces the concept of controllers for each dataset. Like scales, new controllers can be written as needed.",source:"@site/docs/developers/charts.md",permalink:"/docs/master/developers/charts",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/developers/charts.md",sidebar:"someSidebar",previous:{title:"Plugins",permalink:"/docs/master/developers/plugins"},next:{title:"New Axes",permalink:"/docs/master/developers/axes"}},c=[{value:"Dataset Controller Interface",id:"dataset-controller-interface",children:[]},{value:"Extending Existing Chart Types",id:"extending-existing-chart-types",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Chart.js 2.0 introduces the concept of controllers for each dataset. Like scales, new controllers can be written as needed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class MyType extends Chart.DatasetController {\n\n}\n\nChart.controllers.MyType = MyType;\n\n// Now we can create a new instance of our chart, using the Chart.js API\nnew Chart(ctx, {\n    // this is the string the constructor was registered at, ie Chart.controllers.MyType\n    type: 'MyType',\n    data: data,\n    options: options\n});\n")),Object(o.b)("h2",{id:"dataset-controller-interface"},"Dataset Controller Interface"),Object(o.b)("p",null,"Dataset controllers must implement the following interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Create elements for each piece of data in the dataset. Store elements in an array on the dataset as dataset.metaData\n    addElements: function() {},\n\n    // Draw the representation of the dataset\n    draw: function() {},\n\n    // Remove hover styling from the given element\n    removeHoverStyle: function(element, datasetIndex, index) {},\n\n    // Add hover styling to the given element\n    setHoverStyle: function(element, datasetIndex, index) {},\n\n    // Update the elements in response to new data\n    // @param mode : update mode, core calls this method using any of `'active'`, `'hide'`, `'reset'`, `'resize'`, `'show'` or `undefined`\n    update: function(mode) {}\n}\n")),Object(o.b)("p",null,"The following methods may optionally be overridden by derived dataset controllers."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Initializes the controller\n    initialize: function() {},\n\n    // Ensures that the dataset represented by this controller is linked to a scale. Overridden to helpers.noop in the polar area and doughnut controllers as these\n    // chart types using a single scale\n    linkScales: function() {},\n\n    // Called by the main chart controller when an update is triggered. The default implementation handles the number of data points changing and creating elements appropriately.\n    buildOrUpdateElements: function() {}\n}\n")),Object(o.b)("h2",{id:"extending-existing-chart-types"},"Extending Existing Chart Types"),Object(o.b)("p",null,"Extending or replacing an existing controller type is easy. Simply replace the constructor for one of the built in types with your own."),Object(o.b)("p",null,"The built in controller types are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.line")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.bar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.radar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.doughnut")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.polarArea")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.bubble"))),Object(o.b)("p",null,"For example, to derive a new chart type that extends from a bubble chart, you would do the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class Custom extends Chart.controllers.bubble {\n    draw() {\n        // Call super method first\n        super.draw(arguments);\n\n        // Now we can do some custom drawing for this dataset. Here we'll draw a red box around the first point in each dataset\n        var meta = this.getMeta();\n        var pt0 = meta.data[0];\n        var radius = pt0.radius;\n\n        var ctx = this.chart.chart.ctx;\n        ctx.save();\n        ctx.strokeStyle = 'red';\n        ctx.lineWidth = 1;\n        ctx.strokeRect(pt0.x - radius, pt0.y - radius, 2 * radius, 2 * radius);\n        ctx.restore();\n    }\n});\nCustom.id = 'derivedBubble';\nCustom.defaults = Chart.defaults.bubble;\n\n// Stores the controller so that the chart initialization routine can look it up\nChart.register(Custom);\n\n// Now we can create and use our new chart type\nnew Chart(ctx, {\n    type: 'derivedBubble',\n    data: data,\n    options: options\n});\n")),Object(o.b)("p",null,"Same example in classic style"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function Custom() {\n  Chart.controllers.bubble.call(this, arguments);\n  // constructor stuff\n}\n\nCustom.prototype.draw = function(ctx) {\n    Chart.controllers.bubble.prototype.draw.call(this, arguments);\n\n    var meta = this.getMeta();\n    var pt0 = meta.data[0];\n    var radius = pt0.radius;\n\n    var ctx = this.chart.chart.ctx;\n    ctx.save();\n    ctx.strokeStyle = 'red';\n    ctx.lineWidth = 1;\n    ctx.strokeRect(pt0.x - radius, pt0.y - radius, 2 * radius, 2 * radius);\n    ctx.restore();}\n}\n\nCustom.id = 'derivedBubble';\nCustom.defaults = Chart.defaults.bubble;\n\n// Prototype chain can not be used to detect we are trying to register a controller, so we need\n// to be explicit\nChart.registry.addControllers(Custom);\n\n// Now we can create and use our new chart type\nnew Chart(ctx, {\n    type: 'derivedBubble',\n    data: data,\n    options: options\n});\n")))}d.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(l,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,i(i({ref:t},s),{},{components:n})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);