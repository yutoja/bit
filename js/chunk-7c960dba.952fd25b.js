(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c960dba"],{"3fc1":function(t,s,a){},a2d6:function(t,s,a){"use strict";a("3fc1")},bcbe:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"SingerHome"},[a("div",{staticClass:"nav"},[a("h1",{staticClass:"weig"},[t._v(t._s(t.srv&&t.srv.data?t.srv.data.artist.name:""))])]),t.srv&&t.dat&&t.jis?a("div",{staticClass:"tou"},[a("div",{staticClass:"im pos"},[a("img",{staticClass:"im",attrs:{src:t.srv.data.artist.cover+"?param=640y300",alt:""}}),a("div",{staticClass:"baj"})]),a("ul",{staticClass:"ul"},[a("li",{class:{qiu:t.teg},on:{click:function(s){t.teg=!0}}},[t._v("热门作品")]),a("li",{class:{qiu:!t.teg},on:{click:function(s){t.teg=!1}}},[t._v("艺人介绍")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.teg,expression:"teg"}]},[a("div",{staticClass:"keg"},[a("a",{attrs:{id:t.dat[0].id},on:{click:t.sr}},[a("a",{staticClass:"font witee"},[t._v("")]),t._v("播放")])]),a("div",{staticClass:"tbody"},t._l(t.dat,(function(s,i){return a("div",{key:s.id,staticClass:"td"},[a("div",{staticClass:"td1"},[a("span",{staticClass:"wi c3"},[t._v(t._s(++i))]),a("a",{staticClass:"font rea",attrs:{id:s.id},on:{click:t.sr}},[t._v("")])]),a("div",{staticClass:"td2"},[a("router-link",{staticClass:"b4 xiaolu",attrs:{to:"/Details?id="+s.id}},[t._v(t._s(s.name))])],1),a("div",{staticClass:"td3"},[a("span",{staticClass:"b4"},[t._v(t._s(t._f("fezhon")(s.dt)))])]),a("div",{staticClass:"td4"},[a("a",{staticClass:"b4 xiaolu",attrs:{href:"#"}},[t._v(t._s(s.al.name))])])])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.teg,expression:"!teg"}],staticClass:"jias"},[a("h4",{staticClass:"diy"},[t._v(t._s(t.srv&&t.srv.data?t.srv.data.artist.name:"")+"简历")]),a("p",{staticClass:"co"},[t._v(t._s(t.jis.briefDesc))]),t._l(t.jis.introduction,(function(s,i){return a("div",{key:i},[a("h4",[t._v(t._s(s.ti))]),a("p",{domProps:{innerHTML:t._s(s.txt)}})])}))],2)]):a("Little")],1)},n=[],e=(a("99af"),{name:"SingerHome",data:function(){return{dat:null,srv:null,teg:!0,jis:null}},methods:{fun:function(){var t=this;this.$http("/artist/top/song?id=".concat(this.$route.query.id)).then((function(s){var a=s.data.songs;t.dat=a})),this.$http("/artist/detail?id=".concat(this.$route.query.id)).then((function(s){var a=s.data;t.srv=a})),this.$http("/artist/desc?id=".concat(this.$route.query.id)).then((function(s){var a=s.data;t.jis=a}))}},created:function(){this.fun()},computed:{id:function(){return this.fun(),this.$route.query.id}},filters:{fezhon:function(t){var s=parseInt(t/60/1e3),a=parseInt(t/1e3%60);return"".concat(s<10?"0"+s:s,":").concat(a<10?"0"+a:a)}}}),c=e,r=(a("a2d6"),a("2877")),d=Object(r["a"])(c,i,n,!1,null,"39703258",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7c960dba.952fd25b.js.map