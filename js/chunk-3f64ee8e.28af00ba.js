(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f64ee8e"],{"1e8d":function(t,s,e){"use strict";e("c674")},4546:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comment"},[e("div",{staticClass:"thead"},[e("h2",[t._v("评论")]),0!=t.su?e("span",[t._v("共有"+t._s(t.su)+"评论")]):t._e()]),e("div",{class:{discuss:!0,mar:t.qq}},[e("div",{staticClass:"dsisscu"},[t.qq?e("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}):t._e(),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],domProps:{value:t.text},on:{focus:function(s){t.fouc=!0},blur:function(s){t.fouc=!1},input:function(s){s.target.composing||(t.text=s.target.value)}}})]),e("input",{attrs:{type:"button",value:"评论"},on:{click:function(s){return t.pilun(t.text,1)}}})]),t.hot.length>0?e("div",{staticClass:"zhon"},[e("div",{staticClass:"jizai"},[t._v(" 精彩评论 ")]),t._l(t.hot,(function(s){return e("div",{key:s.commentId,class:{jibody:!0,shaa:t.sess&&t.sess.bindings[0].userId==s.user.userId}},[e("img",{attrs:{src:s.user.avatarUrl,alt:""},on:{click:function(e){return t.skip("/User",s.user.userId)}}}),e("div",{staticClass:"qu"},[e("div",{staticClass:"lun"},[e("span",{staticClass:"xiaolul",on:{click:function(e){return t.skip("/User",s.user.userId)}}},[t._v(t._s(s.user.nickname))]),t._v(" ： "+t._s(s.content)+" ")]),s.beReplied&&s.beReplied.length>0?e("div",{staticClass:"hu"},[e("span",{staticClass:"xiaolul"},[t._v(t._s(s.beReplied[0].user.nickname))]),t._v(" ： "+t._s(s.beReplied[0].content)+" ")]):t._e(),e("div",{staticClass:"qufoot"},[e("span",[t._v(t._s(s.timeStr))]),e("div",{staticClass:"bo"},[e("span",{staticClass:"xiaolul sha",on:{click:function(e){t.tish=!0,t.dat=s.commentId}}},[t._v("删除")]),e("span",{staticClass:"xiaolul",on:{click:function(e){return t.diaz(t.cidd,s.commentId,t.typ,s.liked)}}},[e("span",{class:[s.liked?"red":"blue"]},[t._v("")]),t._v(" "+t._s(s.likedCount?"("+s.likedCount+")":"")+" ")]),e("span",{staticClass:"xiaolul",on:{click:function(e){t.fuid==s.commentId?t.fuid="":t.fuid=s.commentId}}},[e("span",{staticClass:"blue"},[t._v("")]),t._v(" 回复 ")])])])]),s.commentId==t.fuid?e("div",{staticClass:"discuss1"},[e("div",{staticClass:"dsisscu1"},[t.qq?e("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}):t._e(),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hhuifu,expression:"hhuifu"}],style:""+(6==t.typ&&"width: 455px;"),attrs:{placeholder:"回复"+s.user.nickname},domProps:{value:t.hhuifu},on:{input:function(s){s.target.composing||(t.hhuifu=s.target.value)}}})]),e("input",{attrs:{type:"button1",value:"回复"},on:{click:function(e){t.pilun(t.hhuifu,2,s.commentId),t.hhuifu=""}}})]):t._e()])}))],2):t._e(),t.news.length>0?e("div",{staticClass:"zhon"},[e("div",{staticClass:"jizai"},[t._v(" 最新评论 ")]),t._l(t.news,(function(s){return e("div",{key:s.commentId,class:{jibody:!0,shaa:t.sess&&t.sess.bindings[0].userId==s.user.userId}},[e("img",{attrs:{src:s.user.avatarUrl,alt:""},on:{click:function(e){return t.skip("/User",s.user.userId)}}}),e("div",{staticClass:"qu"},[e("div",{staticClass:"lun"},[e("span",{staticClass:"xiaolul",on:{click:function(e){return t.skip("/User",s.user.userId)}}},[t._v(t._s(s.user.nickname))]),t._v(" ： "+t._s(s.content)+" ")]),s.beReplied&&s.beReplied.length>0?e("div",{staticClass:"hu"},[e("span",{staticClass:"xiaolul"},[t._v(t._s(s.beReplied[0].user.nickname))]),t._v(" ： "+t._s(s.beReplied[0].content)+" ")]):t._e(),e("div",{staticClass:"qufoot"},[e("span",[t._v(t._s(t._f("apitalize")(s.time)))]),e("div",{staticClass:"bo"},[e("span",{staticClass:"xiaolul sha",on:{click:function(e){t.tish=!0,t.dat=s.commentId}}},[t._v("删除")]),e("span",{staticClass:"xiaolul",on:{click:function(e){return t.diaz(t.cidd,s.commentId,t.typ,s.liked)}}},[e("span",{class:[s.liked?"red":"blue"]},[t._v("")]),t._v(" "+t._s(s.likedCount?"("+s.likedCount+")":"")+" ")]),e("span",{staticClass:"xiaolul",on:{click:function(e){t.fuid==s.commentId?t.fuid="":t.fuid=s.commentId}}},[e("span",{staticClass:"blue"},[t._v("")]),t._v(" 回复 ")])])])]),s.commentId==t.fuid?e("div",{staticClass:"discuss1"},[e("div",{staticClass:"dsisscu1"},[t.qq?e("img",{attrs:{src:t.sess?t.sess.profile.avatarUrl:""}}):t._e(),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hhuifu,expression:"hhuifu"}],style:""+(6==t.typ&&"width: 455px;"),attrs:{placeholder:"回复"+s.user.nickname},domProps:{value:t.hhuifu},on:{input:function(s){s.target.composing||(t.hhuifu=s.target.value)}}})]),e("input",{attrs:{type:"button",value:"回复"},on:{click:function(e){t.pilun(t.hhuifu,2,s.commentId),t.hhuifu=""}}})]):t._e()])}))],2):t._e(),t.tish?e("div",{staticClass:"boos"},[e("div",{staticClass:"tishi"},[e("div",{staticClass:"tihe"},[e("span",[t._v("删除")]),e("span",{staticClass:"yiu",on:{click:function(s){t.tish=!1,t.dat=""}}},[t._v("x")])]),e("div",{staticClass:"tibod"},[e("span",[t._v("确定删除吗")]),e("div",{staticClass:"tiba"},[e("button",{on:{click:function(s){t.remo(),t.tish=!1,t.dat=""}}},[t._v("确定")]),e("button",{on:{click:function(s){t.tish=!1,t.dat=""}}},[t._v("取消")])])])])]):t._e()])},a=[],n=(e("a9e3"),e("99af"),e("498a"),{name:"comment",props:{sw:{type:[Array,Object],default:function(){return{message:"hello"}}},sh:{type:[Array,Object],default:function(){return{message:"hello"}}},su:{type:Number,default:0},typ:{type:Number,default:0},qq:{type:Boolean,default:!0},threadId:{type:String,default:""}},data:function(){return{hot:this.sh,news:this.sw,text:"",hhuifu:"",fuid:0,tish:!1,dat:"",fouc:!1}},filters:{apitalize:function(t){var s=parseInt((+new Date-t)/1e3/60/6/24);if(s/10>10){var e=new Date(t);return"20".concat(e.getYear()-100,"-").concat(e.getMonth()+1,"-").concat(e.getDay())}return s=parseInt((+new Date-t)/1e3/60%60),s<60?s<1?"刚刚更新":s+"分钟前":s/60+"小时前"}},methods:{pilun:function(t,s,e){var i=this.threadId||this.cidd;if(!t.trim())return"";e?(this.pinlu(i,t,this.typ,s,e),this.fuid=0):this.pinlu(i,t,this.typ,s),this.text=""},remo:function(){this.remov(this.cidd,this.typ,this.dat)}},watch:{sh:{handler:function(){this.hot=this.sh},deep:!0},sw:{handler:function(){this.news=this.sw},deep:!0}},computed:{cidd:function(){return this.$route.query.id},sess:function(){return this.$store.state.user}},created:function(){var t=this;window.addEventListener("keyup",(function(s){t.fouc&&13===s.keyCode&&t.pilun(t.text,1)}))}}),o=n,r=(e("1e8d"),e("2877")),c=Object(r["a"])(o,i,a,!1,null,"014fb245",null);s["a"]=c.exports},"498a":function(t,s,e){"use strict";var i=e("23e7"),a=e("58a8").trim,n=e("c8d2");i({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},"72fa":function(t,s,e){},"9c8a":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.dostate?e("div",{staticClass:"dostate"},[e("div",{staticClass:"dobody"},[t._m(0),t._e(),e("ul",{staticClass:"dostbody"},t._l(t.dostate.event,(function(s,i){return e("li",{key:i,staticClass:"dostbody_li"},[e("img",{staticClass:"dostbody_li_im",attrs:{src:t._f("https")(s.user.avatarUrl),alt:s.description},on:{click:function(e){return t.skip("/User",s.user.userId)}}}),e("div",{staticClass:"dostbody_li_bo"},[e("div",{staticClass:"li_bo_he"},[e("router-link",{staticClass:"li_bo_he_name xiaolu",attrs:{to:"/User?id="+s.user.userId}},[t._v(t._s(s.user.nickname))]),e("div",{staticClass:"li_bo_he_time"},[t._v(t._s(t._f("capitalize")(s.eventTime)))])],1),e("div",{staticClass:"li_bo_bo"},[t._v(t._s(s.json.msg))]),s.json.song?e("div",{staticClass:"fexiang"},[e("div",{staticClass:"fexiang_he"},[e("img",{staticClass:"fexiang_img",attrs:{src:t._f("https")(s.json.song.album.blurPicUrl)}}),e("div",{staticClass:"fexiang_he_it",on:{click:function(e){return t.skip("/Details",s.json.song.id)}}},[t._v("")])]),e("div",{staticClass:"fexiang_body"},[e("router-link",{staticClass:"fexiang_he xiaolu",attrs:{to:"/Details?id="+s.json.song.id}},[t._v(t._s(s.json.song.name))]),e("div",{staticClass:"fexiang_name"},t._l(s.json.song.artists,(function(i,a){return e("div",{key:i.id,staticClass:"fexiang_name_id"},[e("router-link",{staticClass:"minsize xiaolu",attrs:{to:"/SingerHome?id="+i.id}},[t._v(" "+t._s(i.name))]),a<s.json.song.artists.length-1?e("span",[t._v(" / ")]):t._e()],1)})),0)],1)]):t._e(),s.json.program?e("div",{staticClass:"fexiang"},[e("div",{staticClass:"fexiang_he"},[e("img",{staticClass:"fexiang_img",attrs:{src:t._f("https")(s.json.program.coverUrl)}}),e("div",{staticClass:"fexiang_he_it",on:{click:t.tishi}},[t._v("")])]),e("div",{staticClass:"fexiang_body",on:{click:t.tishi}},[e("div",{staticClass:"fexiang_he xiaolu"},[t._v(t._s(s.json.program.name))]),e("router-link",{staticClass:"fexiang_name xiaolu",attrs:{to:"/Dostate"}},[t._v(" "+t._s(s.json.program.radio.name)+" ")])],1)]):t._e(),e("div",{staticClass:"li_bo_he_foo"},[e("p",{class:[s.info.liked?"red":"","xiaolu"],on:{click:function(e){return t.ziydia(s.info.threadId,s.info.liked,t.typ)}}},[t._v(""+t._s(s.info.likedCount?"("+s.info.likedCount+")":""))]),e("span",[t._v("|")]),e("p",{staticClass:"xiaolu"},[t._v("转发"+t._s(s.info.shareCount?"("+s.info.shareCount+")":""))]),e("span",[t._v("|")]),e("p",{staticClass:"xiaolu",on:{click:function(e){return t.huoqu(s.info.threadId)}}},[t._v("评论"+t._s(s.info.commentCount?"("+s.info.commentCount+")":""))])]),t.muqi.includes(s.info.threadId)&&t.dostlist[s.info.threadId]?e("div",[e("Com",{attrs:{sw:t.dostlist[s.info.threadId].comments,threadId:s.info.threadId,sh:t.dostlist[s.info.threadId].hotComments,qq:!1,typ:t.typ}})],1):t._e()])])})),0)])]):e("Little")},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"dahear"},[e("h2",{staticClass:"stleft"},[t._v(" 动态 ")]),e("div",{staticClass:"stright"},[e("button",{staticClass:"strbu"},[t._v("发动态")]),e("a",{staticClass:"strbu",attrs:{href:"#",target:"_blank"}},[t._v("发布视频")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"dotisle"},[e("span",{staticClass:"doinco"}),t._v(" 近三个月有4首新歌发布 ")])}],n=e("2909"),o=e("1da1"),r=(e("96cf"),e("caad"),e("2532"),e("99af"),e("4de4"),e("159b"),e("0626")),c=e("4546"),u={name:"Dostate",data:function(){return{dostate:null,typ:6,dostlist:{},muqi:[],scrol:!0}},components:{Com:c["a"]},methods:{tishi:function(){r["a"].danwindow("当前内容尚未完成",0)},huoqu:function(t){var s=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,a,o,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s.muqi.includes(t)){e.next=7;break}return i=Date.now(),e.next=4,s.$http("/comment/event?threadId=".concat(t,"&a=").concat(i));case 4:a=e.sent,o=a.data,r=o.comments,c=o.hotComments,s.dostlist[t]={hotComments:c,comments:r};case 7:s.muqi=s.muqi.includes(t)?s.muqi.filter((function(s){return s!=t})):[].concat(Object(n["a"])(s.muqi),[t]);case 8:case"end":return e.stop()}}),e)})))()}},filters:{capitalize:function(t){var s=parseInt((+new Date-t)/1e3/60/6/24);if(s/10>30){var e=new Date(t);return"20".concat(e.getYear()-100,"-").concat(e.getMonth()+1,"-").concat(e.getDay())}return s<10?s<1?"刚刚更新":s+"小时前更新":parseInt(s/10)+"天前"}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return window.onscroll=function(){var s=Object(o["a"])(regeneratorRuntime.mark((function s(e){var i,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(document.body.offsetHeight-(window.innerHeight+document.documentElement.scrollTop)<1&&t.scrol)){s.next=10;break}return t.scrol=!1,s.next=4,t.doatst(t.dostate.lasttime);case 4:a=s.sent.data,a.event.forEach((function(t){t.json=JSON.parse(t.json)})),a.event.forEach((function(s){var e=s.info.threadId;!t.dostlist[e]&&(t.dostlist[e]=null)})),t.dostate.lasttime=a.lasttime,(i=t.dostate.event).push.apply(i,Object(n["a"])(a.event)),t.scrol=!0;case 10:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}(),s.next=3,t.doatst(-1);case 3:e=s.sent.data,e.event.forEach((function(t){t.json=JSON.parse(t.json)})),e.event.forEach((function(s){var e=s.info.threadId;t.dostlist[e]=null})),t.dostate=e;case 7:case"end":return s.stop()}}),s)})))()},beforeRouteEnter:function(t,s,e){var i=localStorage.getItem("user");!i&&r["a"].danwindow("请先登录",0),i?e():e("/")}},l=u,d=(e("fdb4"),e("2877")),f=Object(d["a"])(l,i,a,!1,null,"174aca92",null);s["default"]=f.exports},c674:function(t,s,e){},c8d2:function(t,s,e){var i=e("5e77").PROPER,a=e("d039"),n=e("5899"),o="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||o[t]()!==o||i&&n[t].name!==t}))}},fdb4:function(t,s,e){"use strict";e("72fa")}}]);
//# sourceMappingURL=chunk-3f64ee8e.28af00ba.js.map