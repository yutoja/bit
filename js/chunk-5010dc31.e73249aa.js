(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5010dc31"],{"20b9":function(t,e,s){"use strict";s("df6f")},2571:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.scr?s("div",{staticClass:"details"},[s("div",{staticClass:"di"},[s("div",{staticClass:"left"},[s("div",{class:{rid:!0,rotate:t.banggg&&this.$route.query.id==t.eff}}),s("div",{class:{led:!0,key:!0,keys:!t.banggg||this.$route.query.id!=t.eff},attrs:{id:t.scr[0].id},on:{click:t.srr}},[s("img",{attrs:{src:t.scr[0].al.picUrl,title:t.scr[0].al.name,id:t.scr[0].id}})])]),s("div",{staticClass:"right"},[s("h2",{staticClass:"tou"},[t._v(t._s(t.scr[0].name))]),s("div",{staticClass:"ming"},[t._v(" 歌手： "),t._l(t.scr[0].ar,(function(e,n){return s("span",{key:e.id,staticClass:"blue xiaolul",on:{click:function(s){return t.skip("/Singerhome",e.id)}}},[t._v(t._s(e.name)+t._s(t.scr[0].ar.length>1&&n!==t.scr[0].ar.length-1?"/":""))])})),s("p",[t._v(" 专辑： "),s("span",{staticClass:"blue xiaolul",on:{click:function(e){return t.skip("/Zhuan",t.scr[0].al.id)}}},[t._v(t._s(t.scr[0].al.name))])])],2),t.gez&&t.gez.length>0?s("div",{class:{ooo:t.bl,tbody:!0}},t._l(t.gez,(function(e,n){return s("p",{key:n},[t._v(t._s(e.lyri))])})),0):s("div",{staticClass:"tbody"},[t._v("纯音乐")]),t.gez&&t.gez.length>0?s("p",{staticClass:"eulb xiaolul",domProps:{textContent:t._s(t.bl?"展开":"收起")},on:{click:t.ert}}):t._e()])]),t.hot&&t.news?s("div",{staticClass:"ping"},[s("Com",{attrs:{sw:t.news,sh:t.hot,su:t.shu,typ:t.typ}}),s("div",{staticClass:"foote"},[s("a",{on:{click:t.app}},[t._v("上一页")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.yeshu,expression:"yeshu"}],staticClass:"tex",attrs:{type:"number",placeholder:"页数"},domProps:{value:t.yeshu},on:{input:function(e){e.target.composing||(t.yeshu=e.target.value)}}}),s("a",{on:{click:t.re}},[t._v("跳转")]),s("a",{on:{click:t.add}},[t._v("下一页")])])],1):t._e()]):s("Little")},i=[],a=s("1da1"),r=(s("96cf"),s("99af"),s("4546")),u={props:{bang:{type:Boolean,default:!1}},name:"detail",data:function(){return{hot:null,news:null,gez:null,bl:!0,scr:null,shu:null,yeshu:0,typ:0}},components:{Com:r["a"]},methods:{srr:function(t){this.$emit("ge"),this.sr(t)},ert:function(){this.bl=!this.bl},add:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.yeshu<0)){e.next=3;break}return t.yeshu=0,e.abrupt("return",alert("这页数认真的吗"));case 3:return t.yeshu++,e.next=6,t.$http("/comment/music?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 6:s=e.sent,n=s.data.comments,t.news=n;case 9:case"end":return e.stop()}}),e)})))()},app:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.yeshu<=0)){e.next=3;break}return t.yeshu=0,e.abrupt("return",alert("这页数认真的吗"));case 3:return t.yeshu--,e.next=6,t.$http("/comment/music?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 6:s=e.sent,n=s.data.comments,t.news=n;case 9:case"end":return e.stop()}}),e)})))()},re:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.value<1&&alert("这页数认真的吗"),e.next=3,t.$http("/comment/music?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 3:s=e.sent,n=s.data.comments,t.news=n;case 6:case"end":return e.stop()}}),e)})))()}},watch:{$route:function(t,e){var s=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s.hotp(s,t.query.id,"music"),s.gezi(s,t.query.id),e.next=4,s.$http("/song/detail?ids=".concat(t.query.id));case 4:n=e.sent,i=n.data.songs,s.scr=i;case 7:case"end":return e.stop()}}),e)})))()}},computed:{banggg:function(){return this.bang}},filters:{capitalize:function(t){var e=parseInt((+new Date-t)/1e3/60/6/24);if(e/10>30){var s=new Date(t);return"20".concat(s.getYear()-100,"-").concat(s.getMonth()+1,"-").concat(s.getDay())}return e<10?e<1?"刚刚更新":e+"小时前更新":parseInt(e/10)+"天前"},apitalize:function(t){var e=parseInt((+new Date-t)/1e3/60%60);return e<60?e<1?"刚刚更新":e+"分钟前":e/60+"小时前"}},beforeMount:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.hotp(t,t.$route.query.id,"music"),t.gezi(t,t.$route.query.id),e.next=4,t.$http("/song/detail?ids=".concat(t.$route.query.id));case 4:s=e.sent,n=s.data.songs,t.scr=n;case 7:case"end":return e.stop()}}),e)})))()}},c=u,o=(s("20b9"),s("2877")),l=Object(o["a"])(c,n,i,!1,null,"686e2144",null);e["default"]=l.exports},"28a8":function(t,e,s){"use strict";s("36fd")},"36fd":function(t,e,s){},4546:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[s("div",{staticClass:"thead"},[s("h2",[t._v("评论")]),s("span",[t._v("共有"+t._s(t.su)+"评论")])]),s("div",{staticClass:"discuss"},[s("div",{staticClass:"dsisscu"},[s("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],domProps:{value:t.text},on:{focus:function(e){t.fouc=!0},blur:function(e){t.fouc=!1},input:function(e){e.target.composing||(t.text=e.target.value)}}})]),s("input",{attrs:{type:"button",value:"评论"},on:{click:function(e){return t.pilun(t.text,1)}}})]),t.hot.length>0?s("div",{staticClass:"zhon"},[s("div",{staticClass:"jizai"},[t._v(" 精彩评论 ")]),t._l(t.hot,(function(e){return s("div",{key:e.commentId,class:{jibody:!0,shaa:t.sess&&t.sess.bindings[0].userId==e.user.userId}},[s("img",{attrs:{src:e.user.avatarUrl,alt:""},on:{click:function(s){return t.skip("/User",e.user.userId)}}}),s("div",{staticClass:"qu"},[s("div",{staticClass:"lun"},[s("span",{staticClass:"xiaolul",on:{click:function(s){return t.skip("/User",e.user.userId)}}},[t._v(t._s(e.user.nickname))]),t._v(" ： "+t._s(e.content)+" ")]),e.beReplied&&e.beReplied.length>0?s("div",{staticClass:"hu"},[s("span",{staticClass:"xiaolul"},[t._v(t._s(e.beReplied[0].user.nickname))]),t._v(" ： "+t._s(e.beReplied[0].content)+" ")]):t._e(),s("div",{staticClass:"qufoot"},[s("span",[t._v(t._s(e.timeStr))]),s("div",{staticClass:"bo"},[s("span",{staticClass:"xiaolul sha",on:{click:function(s){t.tish=!0,t.dat=e.commentId}}},[t._v("删除")]),s("span",{staticClass:"xiaolul",on:{click:function(s){return t.diaz(t.cidd,e.commentId,t.typ,e.liked)}}},[s("span",{class:[e.liked?"red":"blue"]},[t._v("")]),t._v("("+t._s(e.likedCount)+")")]),s("span",{staticClass:"xiaolul",on:{click:function(s){t.fuid==e.commentId?t.fuid="":t.fuid=e.commentId}}},[s("span",{staticClass:"blue"},[t._v("")]),t._v("回复")])])])]),e.commentId==t.fuid?s("div",{staticClass:"discuss1"},[s("div",{staticClass:"dsisscu1"},[s("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hhuifu,expression:"hhuifu"}],attrs:{placeholder:"回复"+e.user.nickname},domProps:{value:t.hhuifu},on:{input:function(e){e.target.composing||(t.hhuifu=e.target.value)}}})]),s("input",{attrs:{type:"button1",value:"回复"},on:{click:function(s){t.pilun(t.hhuifu,2,e.commentId),t.hhuifu=""}}})]):t._e()])}))],2):t._e(),t.news.length>0?s("div",{staticClass:"zhon"},[s("div",{staticClass:"jizai"},[t._v(" 最新评论 ")]),t._l(t.news,(function(e){return s("div",{key:e.commentId,class:{jibody:!0,shaa:t.sess&&t.sess.bindings[0].userId==e.user.userId}},[s("img",{attrs:{src:e.user.avatarUrl,alt:""},on:{click:function(s){return t.skip("/User",e.user.userId)}}}),s("div",{staticClass:"qu"},[s("div",{staticClass:"lun"},[s("span",{staticClass:"xiaolul",on:{click:function(s){return t.skip("/User",e.user.userId)}}},[t._v(t._s(e.user.nickname))]),t._v(" ： "+t._s(e.content)+" ")]),e.beReplied&&e.beReplied.length>0?s("div",{staticClass:"hu"},[s("span",{staticClass:"xiaolul"},[t._v(t._s(e.beReplied[0].user.nickname))]),t._v(" ： "+t._s(e.beReplied[0].content)+" ")]):t._e(),s("div",{staticClass:"qufoot"},[s("span",[t._v(t._s(t._f("apitalize")(e.time)))]),s("div",{staticClass:"bo"},[s("span",{staticClass:"xiaolul sha",on:{click:function(s){t.tish=!0,t.dat=e.commentId}}},[t._v("删除")]),s("span",{staticClass:"xiaolul",on:{click:function(s){return t.diaz(t.cidd,e.commentId,t.typ,e.liked)}}},[s("span",{class:[e.liked?"red":"blue"]},[t._v("")]),t._v("("+t._s(e.likedCount)+")")]),s("span",{staticClass:"xiaolul",on:{click:function(s){t.fuid==e.commentId?t.fuid="":t.fuid=e.commentId}}},[s("span",{staticClass:"blue"},[t._v("")]),t._v("回复")])])])]),e.commentId==t.fuid?s("div",{staticClass:"discuss1"},[s("div",{staticClass:"dsisscu1"},[s("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hhuifu,expression:"hhuifu"}],attrs:{placeholder:"回复"+e.user.nickname},domProps:{value:t.hhuifu},on:{input:function(e){e.target.composing||(t.hhuifu=e.target.value)}}})]),s("input",{attrs:{type:"button",value:"回复"},on:{click:function(s){t.pilun(t.hhuifu,2,e.commentId),t.hhuifu=""}}})]):t._e()])}))],2):t._e(),t.tish?s("div",{staticClass:"boos"},[s("div",{staticClass:"tishi"},[s("div",{staticClass:"tihe"},[s("span",[t._v("删除")]),s("span",{staticClass:"yiu",on:{click:function(e){t.tish=!1,t.dat=""}}},[t._v("x")])]),s("div",{staticClass:"tibod"},[s("span",[t._v("确定删除吗")]),s("div",{staticClass:"tiba"},[s("button",{on:{click:function(e){t.remo(),t.tish=!1,t.dat=""}}},[t._v("确定")]),s("button",{on:{click:function(e){t.tish=!1,t.dat=""}}},[t._v("取消")])])])])]):t._e()])},i=[],a=(s("a9e3"),s("99af"),s("498a"),{name:"comment",props:{sw:{type:[Array,Object],default:function(){return{message:"hello"}}},sh:{type:[Array,Object],default:function(){return{message:"hello"}}},su:{type:Number,default:0},typ:{type:Number,default:0}},data:function(){return{hot:this.sh,news:this.sw,text:"",hhuifu:"",fuid:0,tish:!1,dat:"",fouc:!1}},filters:{apitalize:function(t){var e=parseInt((+new Date-t)/1e3/60/6/24);if(e/10>10){var s=new Date(t);return"20".concat(s.getYear()-100,"-").concat(s.getMonth()+1,"-").concat(s.getDay())}return e=parseInt((+new Date-t)/1e3/60%60),e<60?e<1?"刚刚更新":e+"分钟前":e/60+"小时前"}},methods:{pilun:function(t,e,s){if(!t.trim())return"";s?(this.pinlu(this.cidd,t,this.typ,e,s),this.fuid=0):this.pinlu(this.cidd,t,this.typ,e),this.text=""},remo:function(){this.remov(this.cidd,this.typ,this.dat)}},watch:{sh:{handler:function(){this.hot=this.sh},deep:!0},sw:{handler:function(){this.news=this.sw},deep:!0}},computed:{cidd:function(){return this.$route.query.id},sess:function(){return this.$store.state.user}},created:function(){var t=this;window.addEventListener("keyup",(function(e){t.fouc&&13===e.keyCode&&t.pilun(t.text,1)}))}}),r=a,u=(s("28a8"),s("2877")),c=Object(u["a"])(r,n,i,!1,null,"391bb7f2",null);e["a"]=c.exports},"498a":function(t,e,s){"use strict";var n=s("23e7"),i=s("58a8").trim,a=s("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return i(this)}})},c8d2:function(t,e,s){var n=s("5e77").PROPER,i=s("d039"),a=s("5899"),r="​᠎";t.exports=function(t){return i((function(){return!!a[t]()||r[t]()!==r||n&&a[t].name!==t}))}},df6f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-5010dc31.e73249aa.js.map