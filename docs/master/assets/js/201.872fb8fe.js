(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{550:function(n,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"radar-chart-stacked"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radar-chart-stacked"}},[n._v("#")]),n._v(" Radar Chart Stacked")]),n._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst inputs = {\n  min: 8,\n  max: 16,\n  count: 8,\n  decimals: 2,\n  continuity: 1\n};\n\nconst generateLabels = () => {\n  return Utils.months({count: inputs.count});\n};\n\nconst generateData = () => {\n  const values = Utils.numbers(inputs);\n  inputs.from = values;\n  return values;\n};\n\nconst labels = Utils.months({count: 8});\nconst data = {\n  labels: generateLabels(),\n  datasets: [\n    {\n      label: 'D0',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),\n    },\n    {\n      label: 'D1',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.orange,\n      hidden: true,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange),\n      fill: '-1'\n    },\n    {\n      label: 'D2',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.yellow,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow),\n      fill: 1\n    },\n    {\n      label: 'D3',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.green,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green),\n      fill: false\n    },\n    {\n      label: 'D4',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),\n      fill: '-1'\n    },\n    {\n      label: 'D5',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.purple,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.purple),\n      fill: '-1'\n    },\n    {\n      label: 'D6',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.grey,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.grey),\n      fill: {value: 85}\n    }\n  ]\n};\n// </block:setup>\n\n// <block:actions:2>\nlet smooth = false;\nlet propagate = false;\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      inputs.from = [];\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Propagate',\n    handler(chart) {\n      propagate = !propagate;\n      chart.options.plugins.filler.propagate = propagate;\n      chart.update();\n\n    }\n  },\n  {\n    name: 'Smooth',\n    handler(chart) {\n      smooth = !smooth;\n      chart.options.elements.line.tension = smooth ? 0.4 : 0;\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:0>\nconst config = {\n  type: 'radar',\n  data: data,\n  options: {\n    plugins: {\n      filler: {\n        propagate: false\n      },\n      'samples-filler-analyser': {\n        target: 'chart-analyser'\n      }\n    },\n    interaction: {\n      intersect: false\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"}}),a("div",{staticClass:"analyser",attrs:{id:"chart-analyser"}}),n._v(" "),a("h2",{attrs:{id:"docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/charts/area.html"}},[n._v("Area")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"../../charts/area.htmll#filling-modes"}},[n._v("Filling modes")])]),n._v(" "),a("li",[a("RouterLink",{attrs:{to:"/charts/area.html#propagate"}},[a("code",[n._v("propagate")])])],1)])],1),n._v(" "),a("li",[a("RouterLink",{attrs:{to:"/charts/radar.html"}},[n._v("Radar")])],1),n._v(" "),a("li",[a("RouterLink",{attrs:{to:"/general/data-structures.html"}},[n._v("Data structures ("),a("code",[n._v("labels")]),n._v(")")])],1)])],1)}),[],!1,null,null,null);a.default=r.exports}}]);