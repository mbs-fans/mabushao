(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{4601:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container w80 margin-20-auto"},[n("table",{staticClass:"table table-hover table-bordered"},[t._m(0),n("tbody",t._l(t.componentsList,(function(e,a){return n("tr",{key:a},[n("td",{on:{click:function(n){return t.jump(e.demo)}}},[n("button",{staticClass:"btn btn-warning",attrs:{type:"button"}},[t._v(t._s(e.name))])]),n("td",{on:{click:function(n){return t.jump(e.demo)}}},[n("button",{staticClass:"btn btn-link",attrs:{type:"button"}},[t._v(t._s(e.demo))])]),n("td",[t._v(t._s(e.remark))]),n("td",[t._v(t._s(e.code))])])})),0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("组件")]),n("th",[t._v("DEMO")]),n("th",[t._v("备注")]),n("th",[t._v("代码")])])])}],s=n("ad70"),r={name:"dashboard",data:function(){return{componentsList:s}},methods:{jump:function(t){this.$router.push({path:t})}}},c=r,u=n("2877"),d=Object(u["a"])(c,a,o,!1,null,null,null);e["default"]=d.exports},ad70:function(t,e){t.exports=[{name:"页面头部",demo:"/page-header",remark:"支持自定义title、下划线、按钮",code:"/views/components/pageHeader.vue"},{name:"自定义tag",demo:"/mbs-tag",remark:"支持最大个数、默认大小、禁止添加等",code:"/views/components/mbsTag.vue"}]}}]);
//# sourceMappingURL=dashboard.0f136aa5.js.map