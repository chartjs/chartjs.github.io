(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{134:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return d}));var t=a(3),r=a(7),i=(a(0),a(142)),o={title:"Performance"},s={unversionedId:"general/performance",id:"general/performance",isDocsHomePage:!1,title:"Performance",description:"Chart.js charts are rendered on canvas elements, which makes rendering quite fast. For large datasets or performance sensitive applications, you may wish to consider the tips below.",source:"@site/docs/general/performance.md",slug:"/general/performance",permalink:"/docs/next/general/performance",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/general/performance.md",version:"current",sidebar:"someSidebar",previous:{title:"Fonts",permalink:"/docs/next/general/fonts"},next:{title:"Configuration",permalink:"/docs/next/configuration/index"}},l=[{value:"Data structure and format",id:"data-structure-and-format",children:[{value:"Parsing",id:"parsing",children:[]},{value:"Data normalization",id:"data-normalization",children:[]},{value:"Decimation",id:"decimation",children:[]}]},{value:"Tick Calculation",id:"tick-calculation",children:[{value:"Rotation",id:"rotation",children:[]},{value:"Sampling",id:"sampling",children:[]}]},{value:"Disable Animations",id:"disable-animations",children:[]},{value:"Specify <code>min</code> and <code>max</code> for scales",id:"specify-min-and-max-for-scales",children:[]},{value:"Parallel rendering with web workers (Chrome only)",id:"parallel-rendering-with-web-workers-chrome-only",children:[]},{value:"Line Charts",id:"line-charts",children:[{value:"Disable Bezier Curves",id:"disable-bezier-curves",children:[]},{value:"Automatic data decimation during draw",id:"automatic-data-decimation-during-draw",children:[]},{value:"Enable spanGaps",id:"enable-spangaps",children:[]},{value:"Disable Line Drawing",id:"disable-line-drawing",children:[]},{value:"Disable Point Drawing",id:"disable-point-drawing",children:[]}]},{value:"When transpiling with Babel, consider using <code>loose</code> mode",id:"when-transpiling-with-babel-consider-using-loose-mode",children:[]}],c={toc:l};function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Chart.js charts are rendered on ",Object(i.b)("inlineCode",{parentName:"p"},"canvas")," elements, which makes rendering quite fast. For large datasets or performance sensitive applications, you may wish to consider the tips below."),Object(i.b)("h2",{id:"data-structure-and-format"},"Data structure and format"),Object(i.b)("h3",{id:"parsing"},"Parsing"),Object(i.b)("p",null,"Provide prepared data in the internal format accepted by the dataset and scales and set ",Object(i.b)("inlineCode",{parentName:"p"},"parsing: false"),". See ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/next/general/data-structures"}),"Data structures")," for more information."),Object(i.b)("h3",{id:"data-normalization"},"Data normalization"),Object(i.b)("p",null,"Chart.js is fastest if you provide data with indices that are unique, sorted, and consistent across datasets and provide the ",Object(i.b)("inlineCode",{parentName:"p"},"normalized: true")," option to let Chart.js know that you have done so. Even without this option, it can sometimes still be faster to provide sorted data."),Object(i.b)("h3",{id:"decimation"},"Decimation"),Object(i.b)("p",null,"Decimating your data will achieve the best results. When there is a lot of data to display on the graph, it doesn't make sense to show tens of thousands of data points on a graph that is only a few hundred pixels wide."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/next/configuration/decimation"}),"decimation plugin")," can be used with line charts to decimate data before the chart is rendered. This will provide the best performance since it will reduce the memory needed to render the chart."),Object(i.b)("p",null,"Line charts are able to do ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#automatic-data-decimation-during-draw"}),"automatic data decimation during draw"),", when certain conditions are met. You should still consider decimating data yourself before passing it in for maximum performance since the automatic decimation occurs late in the chart life cycle."),Object(i.b)("h2",{id:"tick-calculation"},"Tick Calculation"),Object(i.b)("h3",{id:"rotation"},"Rotation"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/next/axes/cartesian/index#tick-configuration"}),"Specify a rotation value")," by setting ",Object(i.b)("inlineCode",{parentName:"p"},"minRotation")," and ",Object(i.b)("inlineCode",{parentName:"p"},"maxRotation")," to the same value, which avoids the chart from having to automatically determine a value to use."),Object(i.b)("h3",{id:"sampling"},"Sampling"),Object(i.b)("p",null,"Set the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/next/axes/cartesian/index#tick-configuration"}),Object(i.b)("inlineCode",{parentName:"a"},"ticks.sampleSize"))," option. This will determine how large your labels are by looking at only a subset of them in order to render axes more quickly. This works best if there is not a large variance in the size of your labels."),Object(i.b)("h2",{id:"disable-animations"},"Disable Animations"),Object(i.b)("p",null,"If your charts have long render times, it is a good idea to disable animations. Doing so will mean that the chart needs to only be rendered once during an update instead of multiple times. This will have the effect of reducing CPU usage and improving general page performance.\nLine charts use Path2D caching when animations are disabled."),Object(i.b)("p",null,"To disable animations"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        animation: false\n    }\n});\n")),Object(i.b)("h2",{id:"specify-min-and-max-for-scales"},"Specify ",Object(i.b)("inlineCode",{parentName:"h2"},"min")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"max")," for scales"),Object(i.b)("p",null,"If you specify the ",Object(i.b)("inlineCode",{parentName:"p"},"min")," and ",Object(i.b)("inlineCode",{parentName:"p"},"max"),", the scale does not have to compute the range from the data."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        scales: {\n            x: {\n                type: 'time',\n                min: new Date('2019-01-01').valueOf(),\n                max: new Date('2019-12-31').valueOf()\n            },\n            y: {\n                type: 'linear',\n                min: 0,\n                max: 100\n            }\n        }\n    }\n});\n")),Object(i.b)("h2",{id:"parallel-rendering-with-web-workers-chrome-only"},"Parallel rendering with web workers (Chrome only)"),Object(i.b)("p",null,"Chrome (in version 69) added the ability to ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen"}),"transfer rendering control of a canvas")," to a web worker. Web workers can use the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas"}),"OffscreenCanvas API")," to render from a web worker onto canvases in the DOM. Chart.js is a canvas-based library and supports rendering in a web worker - just pass an OffscreenCanvas into the Chart constructor instead of a Canvas element. Note that as of today, this API is only supported in Chrome."),Object(i.b)("p",null,"By moving all Chart.js calculations onto a separate thread, the main thread can be freed up for other uses. Some tips and tricks when using Chart.js in a web worker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transferring data between threads can be expensive, so ensure that your config and data objects are as small as possible. Try generating them on the worker side if you can (workers can make HTTP requests!) or passing them to your worker as ArrayBuffers, which can be transferred quickly from one thread to another."),Object(i.b)("li",{parentName:"ul"},"You can't transfer functions between threads, so if your config object includes functions you'll have to strip them out before transferring and then add them back later."),Object(i.b)("li",{parentName:"ul"},"You can't access the DOM from worker threads, so Chart.js plugins that use the DOM (including any mouse interactions) will likely not work."),Object(i.b)("li",{parentName:"ul"},"Ensure that you have a fallback if you support browsers other than the most modern Chrome browser."),Object(i.b)("li",{parentName:"ul"},"Resizing the chart must be done manually. See an example in the worker code below.")),Object(i.b)("p",null,"Example main thread code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"const config = {};\nconst canvas = new HTMLCanvasElement();\nconst offscreenCanvas = canvas.transferControlToOffscreen();\n\nconst worker = new Worker('worker.js');\nworker.postMessage({canvas: offscreenCanvas, config}, [offscreenCanvas]);\n")),Object(i.b)("p",null,"Example worker code, in ",Object(i.b)("inlineCode",{parentName:"p"},"worker.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"onmessage = function(event) {\n    const {canvas, config} = event.data;\n    const chart = new Chart(canvas, config);\n\n    // Resizing the chart must be done manually, since OffscreenCanvas does not include event listeners.\n    canvas.width = 100;\n    canvas.height = 100;\n    chart.resize();\n};\n")),Object(i.b)("h2",{id:"line-charts"},"Line Charts"),Object(i.b)("h3",{id:"disable-bezier-curves"},"Disable Bezier Curves"),Object(i.b)("p",null,"If you are drawing lines on your chart, disabling bezier curves will improve render times since drawing a straight line is more performant than a bezier curve."),Object(i.b)("p",null,"To disable bezier curves for an entire chart:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        elements: {\n            line: {\n                tension: 0 // disables bezier curves\n            }\n        }\n    }\n});\n")),Object(i.b)("h3",{id:"automatic-data-decimation-during-draw"},"Automatic data decimation during draw"),Object(i.b)("p",null,"Line element will automatically decimate data, when the following conditions are met: ",Object(i.b)("inlineCode",{parentName:"p"},"tension")," is ",Object(i.b)("inlineCode",{parentName:"p"},"0"),", ",Object(i.b)("inlineCode",{parentName:"p"},"stepped")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false")," (default) and ",Object(i.b)("inlineCode",{parentName:"p"},"borderDash")," is ",Object(i.b)("inlineCode",{parentName:"p"},"[]")," (default). This improves rendering speed by skipping drawing of invisible line segments."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        elements: {\n            line: {\n                tension: 0, // disables bezier curves\n                fill: false,\n                stepped: false,\n                borderDash: []\n            }\n        }\n    }\n});\n")),Object(i.b)("h3",{id:"enable-spangaps"},"Enable spanGaps"),Object(i.b)("p",null,"If you have a lot of data points, it can be more performant to enable ",Object(i.b)("inlineCode",{parentName:"p"},"spanGaps"),". This disables segmentation of the line, which can be an unneeded step."),Object(i.b)("p",null,"To enable ",Object(i.b)("inlineCode",{parentName:"p"},"spanGaps"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            spanGaps: true // enable for a single dataset\n        }]\n    },\n    options: {\n        spanGaps: true // enable for all datasets\n    }\n});\n")),Object(i.b)("h3",{id:"disable-line-drawing"},"Disable Line Drawing"),Object(i.b)("p",null,"If you have a lot of data points, it can be more performant to disable rendering of the line for a dataset and only draw points. Doing this means that there is less to draw on the canvas which will improve render performance."),Object(i.b)("p",null,"To disable lines:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            showLine: false // disable for a single dataset\n        }]\n    },\n    options: {\n        showLine: false // disable for all datasets\n    }\n});\n")),Object(i.b)("h3",{id:"disable-point-drawing"},"Disable Point Drawing"),Object(i.b)("p",null,"If you have a lot of data points, it can be more performant to disable rendering of the points for a dataset and only draw line. Doing this means that there is less to draw on the canvas which will improve render performance."),Object(i.b)("p",null,"To disable point drawing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            pointRadius: 0 // disable for a single dataset\n        }]\n    },\n    options: {\n        datasets: {\n            line: {\n                pointRadius: 0 // disable for all `'line'` datasets\n            }\n        },\n        elements: {\n            point: {\n                radius: 0 // default to disabled in all datasets\n            }\n        }\n    }\n});\n")),Object(i.b)("h2",{id:"when-transpiling-with-babel-consider-using-loose-mode"},"When transpiling with Babel, consider using ",Object(i.b)("inlineCode",{parentName:"h2"},"loose")," mode"),Object(i.b)("p",null,"Babel 7.9 changed the way classes are constructed. It is slow, unless used with ",Object(i.b)("inlineCode",{parentName:"p"},"loose")," mode.\n",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/babel/babel/issues/11356"}),"More information")))}d.isMDXComponent=!0},142:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},b=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(a),u=t,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return a?r.a.createElement(m,s(s({ref:n},c),{},{components:a})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);