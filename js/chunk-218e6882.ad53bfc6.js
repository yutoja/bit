(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-218e6882"],{"11f7":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.data&&t.zda?e("div",{staticClass:"w"},[e("div",{staticClass:"th"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t._f("https")(t.data.songs[0].al.picUrl),title:t.data.songs[0].al.name}})]),e("div",{staticClass:"right"},[e("h3",{staticClass:"no"},[e("span",{staticClass:"font red"},[t._v("")]),t._v(t._s(t.data.songs[0].al.name))]),e("div",{staticClass:"to"},[t._v(" 歌手： "),e("router-link",{staticClass:"ve col size",attrs:{to:"/SingerHome?id="+t.data.songs[0].ar[0].id}},[t._v(t._s(t.data.songs[0].ar[0].name))]),e("br"),t._v(" 公司："+t._s(t.data.album.company)+" "),e("br"),e("span",{staticClass:"ve clo size"},[t._v("发行时间 "+t._s(t.time))])],1),e("div",{staticClass:"btb"},[e("div",{staticClass:"btt"},[e("a",{attrs:{id:t.data.songs[0].id,title:"播放"},on:{click:t.sr}},[e("a",{staticClass:"font wite"},[t._v("")]),t._v("播放")]),t._m(0),e("a",{attrs:{href:"#",title:"转发"}},[e("a",{staticClass:"font black"},[t._v("")]),t._v("("+t._s(t.zda.data.shareCount)+")")]),e("a",{attrs:{href:"#ping",title:"评论"}},[e("a",{staticClass:"font black"},[t._v("")]),t._v("("+t._s(t.zda.data.commentCount)+")")])])])])]),e("div",{class:{ooo:t.bl,fotr:!0}},[e("span",[t._v("介绍：")]),t._v(t._s(t.data.album.description))]),t.data.album.description&&t.data.album.description.length>0?e("p",{staticClass:"eulb xiaolu",domProps:{textContent:t._s(t.bl?"展开":"收起")},on:{click:t.ert}}):t._e(),e("div",{staticClass:"bs"},[e("div",[e("p",{staticClass:"h"},[t._v("歌曲列表")]),e("span",{staticClass:"re size"},[t._v(t._s(t.data.album.size)+"首")])])]),e("table",{staticClass:"bb"},[t._m(1),e("tbody",t._l(t.data.songs,(function(s,a){return e("tr",{key:s.id},[e("td",[e("span",{staticClass:"wi size"},[t._v(t._s(a+1))]),e("a",{class:{font:!0,rea:!0,size:!0,fff:!0,der:t.ef===s.id},attrs:{id:s.id},on:{click:t.sr}},[t._v("")])]),e("td",[e("router-link",{staticClass:"a ma hou size xiaoul er width",attrs:{to:"/Details?id="+s.id,title:s.name}},[t._v(t._s(s.name))])],1),e("td",[e("span",{staticClass:"size"},[t._v(t._s(t._f("capitalize")(s.dt)))])]),e("td",{staticClass:"qwer"},t._l(s.ar,(function(a,i){return e("router-link",{key:a.id,staticClass:"hou size xiaoul",attrs:{to:"/SingerHome?id="+a.id}},[t._v(t._s(a.name)+" "+t._s(s.ar.length>1&&i!==s.ar.length-1?"/":""))])})),1)])})),0)]),t._m(2),t.hot&&t.news?e("div",{staticClass:"ping",attrs:{id:"ping"}},[e("Com",{attrs:{sw:t.news,sh:t.hot,su:t.shu,typ:t.typ}}),e("div",{staticClass:"foote"},[e("a",{on:{click:t.app}},[t._v("上一页")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.yeshu,expression:"yeshu"}],staticClass:"tex",attrs:{type:"number",placeholder:"页数"},domProps:{value:t.yeshu},on:{input:function(s){s.target.composing||(t.yeshu=s.target.value)}}}),e("a",{on:{click:t.re}},[t._v("跳转")]),e("a",{on:{click:t.add}},[t._v("下一页")])])],1):t._e()]):e("Little")},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"#",title:"收藏"}},[e("a",{staticClass:"font black"},[t._v("")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th"),e("th",[t._v("歌曲标题")]),e("th",[t._v("时长")]),e("th",[t._v("歌手")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ti"},[e("p",[t._v("查看更多,请下载客户端")]),e("a",{staticClass:"buttno",attrs:{href:"#"}},[t._v("下载客户端")])])}],n=e("1da1"),r=(e("96cf"),e("a9e3"),e("99af"),e("4546")),c={name:"zhuan",props:{ef:{type:Number,default:0}},data:function(){return{data:null,zda:null,shu:null,hot:null,news:null,yeshu:0,typ:2,bl:!0}},components:{Com:r["a"]},methods:{ert:function(){this.bl=!this.bl},add:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(t.yeshu<0)){s.next=3;break}return t.yeshu=0,s.abrupt("return",alert("这页数认真的吗"));case 3:return t.yeshu++,s.next=6,t.$http("/comment/album?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 6:e=s.sent,a=e.data.comments,t.news=a;case 9:case"end":return s.stop()}}),s)})))()},app:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(t.yeshu<=0)){s.next=3;break}return t.yeshu=0,s.abrupt("return",alert("这页数认真的吗"));case 3:return t.yeshu--,s.next=6,t.$http("/comment/album?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 6:e=s.sent,a=e.data.comments,t.news=a;case 9:case"end":return s.stop()}}),s)})))()},re:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.value<1&&alert("这页数认真的吗"),s.next=3,t.$http("/comment/album?id=".concat(t.$route.query.id,"&offset=").concat(20*t.yeshu));case 3:e=s.sent,a=e.data.comments,t.news=a;case 6:case"end":return s.stop()}}),s)})))()}},watch:{$route:function(t,s){this.hotp(this,this.$route.query.id,"album"),this.date(this,t.query.id)}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http("/album?id=".concat(t.$route.query.id));case 2:return e=s.sent,a=e.data,t.data=a,t.hotp(t,t.$route.query.id,"album"),s.next=8,t.$http("/album/detail/dynamic?id=".concat(t.$route.query.id));case 8:i=s.sent,t.zda=i;case 10:case"end":return s.stop()}}),s)})))()},computed:{time:function(){if(!this.data)return"";var t=new Date(this.data.album.publishTime);return"20".concat(t.getYear()-100,"-").concat(t.getMonth()+1,"-").concat(t.getDay())}},filters:{capitalize:function(t){var s=t/1e3,e=parseInt(s/60),a=parseInt(s%60),i="".concat(e<10?"0"+e:e,":").concat(a<10?"0"+a:a);return i}}},u=c,o=(e("58ef"),e("2877")),l=Object(o["a"])(u,a,i,!1,null,"01cf94b2",null);s["default"]=l.exports},4546:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comment"},[e("div",{staticClass:"thead"},[e("h2",[t._v("评论")]),e("span",[t._v("共有"+t._s(t.su)+"评论")])]),e("div",{staticClass:"discuss"},[e("div",{staticClass:"dsisscu"},[e("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],domProps:{value:t.text},on:{input:function(s){s.target.composing||(t.text=s.target.value)}}})]),e("input",{attrs:{type:"button",value:"评论"},on:{click:function(s){return t.pilun(t.text,1)}}})]),t.hot.length>0?e("div",{staticClass:"zhon"},[e("div",{staticClass:"jizai"},[t._v(" 精彩评论 ")]),t._l(t.hot,(function(s){return e("div",{key:s.commentId,class:{jibody:!0,shaa:t.sess&&t.sess.bindings[0].userId==s.user.userId}},[e("img",{attrs:{src:s.user.avatarUrl,alt:""},on:{click:function(e){return t.skip("/User",s.user.userId)}}}),e("div",{staticClass:"qu"},[e("div",{staticClass:"lun"},[e("span",{staticClass:"xiaolul",on:{click:function(e){return t.skip("/User",s.user.userId)}}},[t._v(t._s(s.user.nickname))]),t._v(" ： "+t._s(s.content)+" ")]),s.beReplied&&s.beReplied.length>0?e("div",{staticClass:"hu"},[e("span",{staticClass:"xiaolul"},[t._v(t._s(s.beReplied[0].user.nickname))]),t._v(" ： "+t._s(s.beReplied[0].content)+" ")]):t._e(),e("div",{staticClass:"qufoot"},[e("span",[t._v(t._s(s.timeStr))]),e("div",{staticClass:"bo"},[e("span",{staticClass:"xiaolul sha",on:{click:function(e){t.tish=!0,t.dat=s.commentId}}},[t._v("删除")]),e("span",{staticClass:"xiaolul",on:{click:function(e){return t.diaz(t.cidd,s.commentId,t.typ,s.liked)}}},[e("span",{class:[s.liked?"red":"blue"]},[t._v("")]),t._v("("+t._s(s.likedCount)+")")]),e("span",{staticClass:"xiaolul",on:{click:function(e){t.fuid==s.commentId?t.fuid="":t.fuid=s.commentId}}},[e("span",{staticClass:"blue"},[t._v("")]),t._v("回复")])])])]),s.commentId==t.fuid?e("div",{staticClass:"discuss1"},[e("div",{staticClass:"dsisscu1"},[e("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hhuifu,expression:"hhuifu"}],attrs:{placeholder:"回复"+s.user.nickname},domProps:{value:t.hhuifu},on:{input:function(s){s.target.composing||(t.hhuifu=s.target.value)}}})]),e("input",{attrs:{type:"button1",value:"回复"},on:{click:function(e){t.pilun(t.hhuifu,2,s.commentId),t.hhuifu=""}}})]):t._e()])}))],2):t._e(),t.news.length>0?e("div",{staticClass:"zhon"},[e("div",{staticClass:"jizai"},[t._v(" 最新评论 ")]),t._l(t.news,(function(s,a){return e("div",{key:a,class:{jibody:!0,shaa:t.sess&&t.sess.bindings[0].userId==s.user.userId}},[e("img",{attrs:{src:s.user.avatarUrl,alt:""},on:{click:function(e){return t.skip("/User",s.user.userId)}}}),e("div",{staticClass:"qu"},[e("div",{staticClass:"lun"},[e("span",{staticClass:"xiaolul",on:{click:function(e){return t.skip("/User",s.user.userId)}}},[t._v(t._s(s.user.nickname))]),t._v(" ： "+t._s(s.content)+" ")]),s.beReplied&&s.beReplied.length>0?e("div",{staticClass:"hu"},[e("span",{staticClass:"xiaolul"},[t._v(t._s(s.beReplied[0].user.nickname))]),t._v(" ： "+t._s(s.beReplied[0].content)+" ")]):t._e(),e("div",{staticClass:"qufoot"},[e("span",[t._v(t._s(t._f("apitalize")(s.time)))]),e("div",{staticClass:"bo"},[e("span",{staticClass:"xiaolul sha",on:{click:function(e){t.tish=!0,t.dat=s.commentId}}},[t._v("删除")]),e("span",{staticClass:"xiaolul",on:{click:function(e){return t.diaz(t.cidd,s.commentId,t.typ,s.liked)}}},[e("span",{class:[s.liked?"red":"blue"]},[t._v("")]),t._v("("+t._s(s.likedCount)+")")]),e("span",{staticClass:"xiaolul",on:{click:function(e){t.fuid==s.commentId?t.fuid="":t.fuid=s.commentId}}},[e("span",{staticClass:"blue"},[t._v("")]),t._v("回复")])])])]),s.commentId==t.fuid?e("div",{staticClass:"discuss1"},[e("div",{staticClass:"dsisscu1"},[e("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hhuifu,expression:"hhuifu"}],attrs:{placeholder:"回复"+s.user.nickname},domProps:{value:t.hhuifu},on:{input:function(s){s.target.composing||(t.hhuifu=s.target.value)}}})]),e("input",{attrs:{type:"button",value:"回复"},on:{click:function(e){t.pilun(t.hhuifu,2,s.commentId),t.hhuifu=""}}})]):t._e()])}))],2):t._e(),t.tish?e("div",{staticClass:"boos"},[e("div",{staticClass:"tishi"},[e("div",{staticClass:"tihe"},[e("span",[t._v("删除")]),e("span",{staticClass:"yiu",on:{click:function(s){t.tish=!1,t.dat=""}}},[t._v("x")])]),e("div",{staticClass:"tibod"},[e("span",[t._v("确定删除吗")]),e("div",{staticClass:"tiba"},[e("button",{on:{click:function(s){t.remo(),t.tish=!1,t.dat=""}}},[t._v("确定")]),e("button",{on:{click:function(s){t.tish=!1,t.dat=""}}},[t._v("取消")])])])])]):t._e()])},i=[],n=(e("a9e3"),e("99af"),e("498a"),{name:"comment",props:{sw:{type:[Array,Object],default:function(){return{message:"hello"}}},sh:{type:[Array,Object],default:function(){return{message:"hello"}}},su:{type:Number,default:0},typ:{type:Number,default:0}},data:function(){return{hot:this.sh,news:this.sw,text:"",hhuifu:"",fuid:0,tish:!1,dat:""}},filters:{apitalize:function(t){var s=parseInt((+new Date-t)/1e3/60/6/24);if(s/10>10){var e=new Date(t);return"20".concat(e.getYear()-100,"-").concat(e.getMonth()+1,"-").concat(e.getDay())}return s=parseInt((+new Date-t)/1e3/60%60),s<60?s<1?"刚刚更新":s+"分钟前":s/60+"小时前"}},methods:{pilun:function(t,s,e){if(!t.trim())return"";e?(this.pinlu(this.cidd,t,this.typ,s,e),this.fuid=0):this.pinlu(this.cidd,t,this.typ,s),this.text=""},remo:function(){this.remov(this.cidd,this.typ,this.dat)}},watch:{sh:{handler:function(){this.hot=this.sh},deep:!0},sw:{handler:function(){this.news=this.sw},deep:!0}},computed:{cidd:function(){return this.$route.query.id},sess:function(){return this.$store.state.user}}}),r=n,c=(e("fc73"),e("2877")),u=Object(c["a"])(r,a,i,!1,null,"ae72ce0a",null);s["a"]=u.exports},"498a":function(t,s,e){"use strict";var a=e("23e7"),i=e("58a8").trim,n=e("c8d2");a({target:"String",proto:!0,forced:n("trim")},{trim:function(){return i(this)}})},"58ef":function(t,s,e){"use strict";e("a7ea")},"93fb":function(t,s,e){},a7ea:function(t,s,e){},c8d2:function(t,s,e){var a=e("5e77").PROPER,i=e("d039"),n=e("5899"),r="​᠎";t.exports=function(t){return i((function(){return!!n[t]()||r[t]()!==r||a&&n[t].name!==t}))}},fc73:function(t,s,e){"use strict";e("93fb")}}]);
//# sourceMappingURL=chunk-218e6882.ad53bfc6.js.map