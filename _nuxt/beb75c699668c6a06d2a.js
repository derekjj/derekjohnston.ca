(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{227:function(t,e,o){var content=o(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("1a773705",content,!0,{sourceMap:!1})},236:function(t,e,o){"use strict";var r=o(227);o.n(r).a},237:function(t,e,o){(e=o(32)(!1)).push([t.i,".vh-iframe[data-v-6242e1d6]{height:69vh}iframe[data-v-6242e1d6]{width:100%;height:500px}",""]),t.exports=e},246:function(t,e,o){"use strict";o.r(e);o(90);var r={layout:"demo",mounted:function(){this.selected=parseInt(this.$route.query.project)},data:function(){return{selected:null,options:[{git:"https://github.com/derekjj/2020-05-27-meme-maker",text:"2020-05-27 - meme-maker",demo:"https://2020-05-27-meme-maker.now.sh/",value:20},{git:"https://github.com/derekjj/2020-05-20-tell-your-story-in-data",text:"2020-05-20 - tell-your-story-in-data",demo:"https://2020-05-20-tell-your-story-in-data.now.sh/",value:19},{git:"https://github.com/derekjj/2020-05-18-hack-the-resume",text:"2020-05-18 - hack-the-resume",demo:"https://2020-05-18-hack-the-resume.now.sh/",value:18},{git:"https://github.com/derekjj/2020-05-13-markdown-editor",text:"2020-05-13 - markdown-editor",demo:"https://2020-05-13-markdown-editor.now.sh/",value:17},{git:"https://github.com/derekjj/2020-05-11-noisemaker",text:"2020-05-11 - noisemaker",demo:"https://2020-05-11-noisemaker.now.sh/",value:16},{git:"https://github.com/derekjj/2020-05-06-Job-Application-Tracker",text:"2020-05-06 - Job-Application-Tracker",demo:"https://2020-05-06-job-application-tracker-gules.now.sh/",value:15},{git:"https://github.com/derekjj/2020-05-04-Interactive-Calculator",text:"2020-05-04 - Interactive-Calculator",demo:"https://2020-05-04-interactive-calculator.derekjj.now.sh/",value:14},{git:"https://github.com/derekjj/2020-04-29-script-runner",text:"2020-04-29 - script-runner",demo:"",value:13},{git:"https://github.com/derekjj/2020-04-24-meme-maker",text:"2020-04-24 - meme-maker",demo:"https://2020-04-24-meme-maker.derekjj.now.sh/",value:12},{git:"https://github.com/derekjj/2020-04-22-Noisemaker",text:"2020-04-22 - Noisemaker",demo:"https://2020-04-22-noisemaker-phi.now.sh/",value:11},{git:"https://github.com/derekjj/2020-04-19-Conways-Game-of-Life-4-day-extended",text:"2020-04-19 - Conways-Game-of-Life-4-day-extended",demo:"https://2020-04-19-conways-game-of-life-4-day-extended-three.now.sh/",value:10},{git:"https://github.com/derekjj/2020-04-17-personal-npm-package",text:"2020-04-17 - personal-npm-package",demo:"",value:9},{git:"https://github.com/derekjj/2020-04-15-Conways-Game-of-Life",text:"2020-04-15 - Conways-Game-of-Life",demo:"https://2020-04-15-conways-game-of-life.now.sh/",value:8},{git:"https://github.com/derekjj/2020-04-11-Markdown-Editor",text:"2020-04-11 - Markdown-Editor",demo:"https://2020-04-11-markdown-editor.derekjj.now.sh/",value:7},{git:"https://github.com/derekjj/2020-04-08-Roll-your-own-Chrome-dashboard",text:"2020-04-08 - Roll-your-own-Chrome-dashboard",demo:"",value:6},{git:"https://github.com/derekjj/2020-04-04-Live-CSS-Editor",text:"2020-04-04 - Live-CSS-Editor",demo:"",value:5},{git:"https://github.com/derekjj/2020-04-01-Interactive-Calculator",text:"2020-04-01 - Interactive-Calculator",demo:"https://2020-04-01-interactive-calculator-lovat.now.sh/",value:4},{git:"https://github.com/derekjj/2020-03-28-HackTheResume",text:"2020-03-28 - HackTheResume",demo:"https://2020-03-28-hack-the-resume.now.sh/",value:3},{git:"https://github.com/derekjj/ResumeBuilder",text:"2020-03-21 - ResumeBuilder",demo:"",value:2},{git:"https://github.com/derekjj/HackTheResume",text:"2020-03-14 - HackTheResume",demo:"",value:1}]}},computed:{git:function(){var t=this;return this.options.find((function(e){return e.value===t.selected})).git},demo:function(){var t=this;return null!=this.options.find((function(e){return e.value===t.selected}))&&this.options.find((function(e){return e.value===t.selected})).demo}}},c=(o(236),o(21)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-flex mt-5"},[o("div",{staticClass:"row bg-success"},[o("div",{staticClass:"col-12"},[o("H1",[t._v("Mintbean Hackathon's ")])],1)]),t._m(0),o("div",{staticClass:"row mx-5 my-2"},[o("div",{staticClass:"col-12"},[o("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t.demo?o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 m-2"},[o("b-button",{attrs:{href:t.git,variant:"info"}},[t._v("Code Repo")])],1),o("div",{staticClass:"col-12 vh-iframe"},[o("iframe",{staticClass:"h-100",attrs:{src:t.demo}})])]):t._e(),t.selected&&!t.demo?o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 m-2"},[o("b-button",{attrs:{href:t.git,variant:"info"}},[t._v("Code Repo")])],1),o("div",{staticClass:"col-12"},[t._v("No Demo for this project")])]):t._e(),t.selected?t._e():o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[t._v("Please select a hackathon")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("sub",[this._v("* code time: 2hrs to 4hrs *")])])])}],!1,null,"6242e1d6",null);e.default=component.exports}}]);