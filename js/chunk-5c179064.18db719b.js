(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c179064"],{4546:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"comment"},[a("div",{staticClass:"thead"},[a("h2",[t._v("评论")]),a("span",[t._v("共有"+t._s(t.su)+"评论")])]),a("div",{staticClass:"discuss"},[a("div",{staticClass:"dsisscu"},[a("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],domProps:{value:t.text},on:{input:function(s){s.target.composing||(t.text=s.target.value)}}})]),a("input",{attrs:{type:"button",value:"评论"},on:{click:function(s){return t.pilun(t.text,1)}}})]),t.hot.length>0?a("div",{staticClass:"zhon"},[a("div",{staticClass:"jizai"},[t._v(" 精彩评论 ")]),t._l(t.hot,(function(s){return a("div",{key:s.commentId,class:{jibody:!0,shaa:t.sess&&t.sess.bindings[0].userId==s.user.userId}},[a("img",{attrs:{src:s.user.avatarUrl,alt:""},on:{click:function(a){return t.skip("/User",s.user.userId)}}}),a("div",{staticClass:"qu"},[a("div",{staticClass:"lun"},[a("span",{staticClass:"xiaolul",on:{click:function(a){return t.skip("/User",s.user.userId)}}},[t._v(t._s(s.user.nickname))]),t._v(" ： "+t._s(s.content)+" ")]),s.beReplied&&s.beReplied.length>0?a("div",{staticClass:"hu"},[a("span",{staticClass:"xiaolul"},[t._v(t._s(s.beReplied[0].user.nickname))]),t._v(" ： "+t._s(s.beReplied[0].content)+" ")]):t._e(),a("div",{staticClass:"qufoot"},[a("span",[t._v(t._s(s.timeStr))]),a("div",{staticClass:"bo"},[a("span",{staticClass:"xiaolul sha",on:{click:function(a){t.tish=!0,t.dat=s.commentId}}},[t._v("删除")]),a("span",{staticClass:"xiaolul",on:{click:function(a){return t.diaz(t.cidd,s.commentId,t.typ,s.liked)}}},[a("span",{class:[s.liked?"red":"blue"]},[t._v("")]),t._v("("+t._s(s.likedCount)+")")]),a("span",{staticClass:"xiaolul",on:{click:function(a){t.fuid==s.commentId?t.fuid="":t.fuid=s.commentId}}},[a("span",{staticClass:"blue"},[t._v("")]),t._v("回复")])])])]),s.commentId==t.fuid?a("div",{staticClass:"discuss1"},[a("div",{staticClass:"dsisscu1"},[a("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hhuifu,expression:"hhuifu"}],attrs:{placeholder:"回复"+s.user.nickname},domProps:{value:t.hhuifu},on:{input:function(s){s.target.composing||(t.hhuifu=s.target.value)}}})]),a("input",{attrs:{type:"button1",value:"回复"},on:{click:function(a){t.pilun(t.hhuifu,2,s.commentId),t.hhuifu=""}}})]):t._e()])}))],2):t._e(),t.news.length>0?a("div",{staticClass:"zhon"},[a("div",{staticClass:"jizai"},[t._v(" 最新评论 ")]),t._l(t.news,(function(s,e){return a("div",{key:e,class:{jibody:!0,shaa:t.sess&&t.sess.bindings[0].userId==s.user.userId}},[a("img",{attrs:{src:s.user.avatarUrl,alt:""},on:{click:function(a){return t.skip("/User",s.user.userId)}}}),a("div",{staticClass:"qu"},[a("div",{staticClass:"lun"},[a("span",{staticClass:"xiaolul",on:{click:function(a){return t.skip("/User",s.user.userId)}}},[t._v(t._s(s.user.nickname))]),t._v(" ： "+t._s(s.content)+" ")]),s.beReplied&&s.beReplied.length>0?a("div",{staticClass:"hu"},[a("span",{staticClass:"xiaolul"},[t._v(t._s(s.beReplied[0].user.nickname))]),t._v(" ： "+t._s(s.beReplied[0].content)+" ")]):t._e(),a("div",{staticClass:"qufoot"},[a("span",[t._v(t._s(t._f("apitalize")(s.time)))]),a("div",{staticClass:"bo"},[a("span",{staticClass:"xiaolul sha",on:{click:function(a){t.tish=!0,t.dat=s.commentId}}},[t._v("删除")]),a("span",{staticClass:"xiaolul",on:{click:function(a){return t.diaz(t.cidd,s.commentId,t.typ,s.liked)}}},[a("span",{class:[s.liked?"red":"blue"]},[t._v("")]),t._v("("+t._s(s.likedCount)+")")]),a("span",{staticClass:"xiaolul",on:{click:function(a){t.fuid==s.commentId?t.fuid="":t.fuid=s.commentId}}},[a("span",{staticClass:"blue"},[t._v("")]),t._v("回复")])])])]),s.commentId==t.fuid?a("div",{staticClass:"discuss1"},[a("div",{staticClass:"dsisscu1"},[a("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hhuifu,expression:"hhuifu"}],attrs:{placeholder:"回复"+s.user.nickname},domProps:{value:t.hhuifu},on:{input:function(s){s.target.composing||(t.hhuifu=s.target.value)}}})]),a("input",{attrs:{type:"button",value:"回复"},on:{click:function(a){t.pilun(t.hhuifu,2,s.commentId),t.hhuifu=""}}})]):t._e()])}))],2):t._e(),t.tish?a("div",{staticClass:"boos"},[a("div",{staticClass:"tishi"},[a("div",{staticClass:"tihe"},[a("span",[t._v("删除")]),a("span",{staticClass:"yiu",on:{click:function(s){t.tish=!1,t.dat=""}}},[t._v("x")])]),a("div",{staticClass:"tibod"},[a("span",[t._v("确定删除吗")]),a("div",{staticClass:"tiba"},[a("button",{on:{click:function(s){t.remo(),t.tish=!1,t.dat=""}}},[t._v("确定")]),a("button",{on:{click:function(s){t.tish=!1,t.dat=""}}},[t._v("取消")])])])])]):t._e()])},i=[],n=(a("a9e3"),a("99af"),a("498a"),{name:"comment",props:{sw:{type:[Array,Object],default:function(){return{message:"hello"}}},sh:{type:[Array,Object],default:function(){return{message:"hello"}}},su:{type:Number,default:0},typ:{type:Number,default:0}},data:function(){return{hot:this.sh,news:this.sw,text:"",hhuifu:"",fuid:0,tish:!1,dat:""}},filters:{apitalize:function(t){var s=parseInt((+new Date-t)/1e3/60/6/24);if(s/10>10){var a=new Date(t);return"20".concat(a.getYear()-100,"-").concat(a.getMonth()+1,"-").concat(a.getDay())}return s=parseInt((+new Date-t)/1e3/60%60),s<60?s<1?"刚刚更新":s+"分钟前":s/60+"小时前"}},methods:{pilun:function(t,s,a){if(!t.trim())return"";a?(this.pinlu(this.cidd,t,this.typ,s,a),this.fuid=0):this.pinlu(this.cidd,t,this.typ,s),this.text=""},remo:function(){this.remov(this.cidd,this.typ,this.dat)}},watch:{sh:{handler:function(){this.hot=this.sh},deep:!0},sw:{handler:function(){this.news=this.sw},deep:!0}},computed:{cidd:function(){return this.$route.query.id},sess:function(){return this.$store.state.user}}}),r=n,c=(a("fc73"),a("2877")),u=Object(c["a"])(r,e,i,!1,null,"ae72ce0a",null);s["a"]=u.exports},"491b":function(t,s,a){},"498a":function(t,s,a){"use strict";var e=a("23e7"),i=a("58a8").trim,n=a("c8d2");e({target:"String",proto:!0,forced:n("trim")},{trim:function(){return i(this)}})},"57f7":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bangdan"},[t.data?a("div",{staticClass:"bod"},[a("div",{staticClass:"aside"},[a("div",{staticClass:"as1"},[a("div",{staticClass:"as1_n"},[t._v(" 云音乐特色榜 ")]),a("ul",{staticClass:"as1_b"},t._l(t.dat_band,(function(s){return a("li",{key:s.id,staticClass:"as1_l"},[a("router-link",{attrs:{to:"/Bang?id="+s.id}},[a("img",{attrs:{src:s.coverImgUrl}}),a("div",{staticClass:"as1b"},[a("p",[t._v(t._s(s.name))]),a("div",[t._v(t._s(s.updateFrequency))])])])],1)})),0)]),a("div",{staticClass:"as1"},[a("div",{staticClass:"as1_n"},[t._v(" 全球媒体榜 ")]),a("ul",{staticClass:"as1_b"},t._l(t.dat_ban,(function(s){return a("li",{key:s.id,staticClass:"as1_l"},[a("router-link",{attrs:{to:"/Bang?id="+s.id}},[a("img",{attrs:{src:s.coverImgUrl}}),a("div",{staticClass:"as1b"},[a("p",[t._v(t._s(s.name))]),a("div",[t._v(t._s(s.updateFrequency))])])])],1)})),0)])]),a("div",{staticClass:"body"},[a("div",{staticClass:"bt"},[a("img",{attrs:{src:t.data.playlist.coverImgUrl}}),a("div",{staticClass:"btb"},[a("h3",[t._v(t._s(t.data.playlist.name))]),a("p",{staticClass:"size"},[t._v(t._s(t.time))]),a("div",{staticClass:"btt"},[a("a",{on:{click:function(s){return t.all(t.data.playlist.tracks)}}},[a("a",{staticClass:"font wite"},[t._v("")]),t._v("播放")]),a("a",{attrs:{href:"#",title:"收藏"}},[a("a",{staticClass:"font wite black"},[t._v("")]),t._v(t._s(t.data.playlist.subscribedCount))]),a("a",{attrs:{href:"#",title:"转发"}},[a("a",{staticClass:"font wite black"},[t._v("")]),t._v(t._s(t.data.playlist.shareCount))]),a("a",{attrs:{href:"#ping",title:"评论"}},[a("a",{staticClass:"font wite black"},[t._v("")]),t._v(t._s(t.data.playlist.commentCount))])])])]),a("div",{staticClass:"bs"},[a("div",[a("p",{staticClass:"h"},[t._v("歌曲列表")]),a("span",{staticClass:"re size"},[t._v(t._s(t.data.playlist.tracks.length)+"首")])]),a("div",{staticClass:"size"},[t._v(" 播放"),a("span",{staticClass:"red"},[t._v(t._s(t.data.playlist.playCount))]),t._v("次 ")])]),a("table",{staticClass:"bb"},[t._m(0),a("tbody",t._l(t.data.playlist.tracks,(function(s,e){return a("tr",{key:s.id,staticClass:"tds"},[a("td",{staticClass:"td1"},[a("span",{staticClass:"wi size"},[t._v(t._s(e+1))])]),a("td",{staticClass:" td2"},[a("a",{class:{font:!0,red:t.ef===s.id},attrs:{id:s.id},on:{click:t.sr}},[t._v("")]),a("router-link",{staticClass:"a ma hou size qwer",attrs:{to:"/Details?id="+s.id}},[t._v(t._s(s.name))])],1),a("td",{staticClass:"td3"},[a("span",{staticClass:"size"},[t._v(t._s(t._f("capitalize")(s.dt)))]),a("div",{staticClass:"qw"},[a("a",{staticClass:"as",on:{click:function(a){return t.bo(s.id)}}},[t._v("")]),a("a",{staticClass:"as",on:{click:function(a){return a.preventDefault(),t.down(s)}}},[t._v("")]),a("a",{staticClass:"as",attrs:{href:"#"}},[t._v("")])])]),a("td",{staticClass:"td4 qwer"},t._l(s.ar,(function(e,i){return a("router-link",{key:e.id,staticClass:"hou size asdf xiaolu",attrs:{to:"/SingerHome?id="+e.id}},[t._v(t._s(e.name)+" "+t._s(s.ar.length>1&&i!==s.ar.length-1?"/":""))])})),1)])})),0)]),t.hot&&t.news?a("div",{staticClass:"ping",attrs:{id:"ping"}},[a("Com",{attrs:{sw:t.news,sh:t.hot,su:t.shu,typ:t.typ}}),a("div",{staticClass:"foote"},[a("a",{on:{click:t.app}},[t._v("上一页")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.yeshu,expression:"yeshu"}],staticClass:"tex",attrs:{type:"number",placeholder:"页数"},domProps:{value:t.yeshu},on:{input:function(s){s.target.composing||(t.yeshu=s.target.value)}}}),a("a",{on:{click:t.re}},[t._v("跳转")]),a("a",{on:{click:t.add}},[t._v("下一页")])])],1):t._e()])]):a("Little")],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th"),a("th",[t._v("标题")]),a("th",[t._v("时长")]),a("th",[t._v("歌手")])])])}],n=a("1da1"),r=(a("96cf"),a("a9e3"),a("99af"),a("a434"),a("4546")),c={name:"bang",props:{ef:{type:Number,default:0}},data:function(){return{dat_ban:[],dat_band:[],data:null,da:this,i:1,hot:null,news:null,shu:0,typ:2,yeshu:0}},methods:{add:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(t.yeshu<0)){s.next=3;break}return t.yeshu=0,s.abrupt("return",alert("这页数认真的吗"));case 3:return t.yeshu++,s.next=6,t.$http("/comment/playlist?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 6:a=s.sent,e=a.data.comments,t.news=e;case 9:case"end":return s.stop()}}),s)})))()},app:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(t.yeshu<=0)){s.next=3;break}return t.yeshu=0,s.abrupt("return",alert("这页数认真的吗"));case 3:return t.yeshu--,s.next=6,t.$http("/comment/playlist?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 6:a=s.sent,e=a.data.comments,t.news=e;case 9:case"end":return s.stop()}}),s)})))()},re:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.value<1&&alert("这页数认真的吗"),s.next=3,t.$http("/comment/playlist?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 3:a=s.sent,e=a.data.comments,t.news=e;case 6:case"end":return s.stop()}}),s)})))()}},components:{Com:r["a"]},watch:{$route:function(t,s){this.date(this.da,t.query.id),this.hotp(this,t.query.id,"playlist"),this.date(this,t.query.id)}},computed:{time:function(){if(this.data){var t=parseInt((+new Date-this.data.playlist.updateTime)/1e3/60/6/24);return t<10?t<1?"刚刚更新":t+"小时前更新":t/10+"天前更新"}return""}},filters:{capitalize:function(t){var s=t/1e3,a=parseInt(s/60),e=parseInt(s%60),i="".concat(a<10?"0"+a:a,":").concat(e<10?"0"+e:e);return i}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.hotp(t,t.$route.query.id,"playlist"),t.$http("/toplist").then((function(s){t.dat_ban=s.data.list,t.dat_band=t.dat_ban.splice(0,4)})),t.date(t.da,t.$route.query.id);case 3:case"end":return s.stop()}}),s)})))()}},u=c,l=(a("c0f2"),a("2877")),o=Object(l["a"])(u,e,i,!1,null,"7bca1d2e",null);s["default"]=o.exports},"93fb":function(t,s,a){},c0f2:function(t,s,a){"use strict";a("491b")},c8d2:function(t,s,a){var e=a("5e77").PROPER,i=a("d039"),n=a("5899"),r="​᠎";t.exports=function(t){return i((function(){return!!n[t]()||r[t]()!==r||e&&n[t].name!==t}))}},fc73:function(t,s,a){"use strict";a("93fb")}}]);
//# sourceMappingURL=chunk-5c179064.18db719b.js.map