(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";var a=s(16),i=s.n(a);e.default=i.a},function(t,e){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},,,,,function(t,e,s){"use strict";(function(e){const a=s(93),i={origin:"http://magix.xyz:3000",hostname:"http://magix.xyz:3000",assetsSubDirectory:"static",assetsRoot:a.resolve(e,"../native"),index:"index.html"};a.resolve(e,"../native");t.exports=i}).call(this,"/")},function(t,e,s){"use strict";var a=function(){var t=this.$createElement;this._self._c;return this._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"accelerometer"},[s("header",{attrs:{id:"header"}},[s("div",{staticClass:"nvbt iback",attrs:{onclick:"back()"}}),t._v(" "),s("div",{staticClass:"nvtt"},[t._v("Accelerometer")]),t._v(" "),s("div",{staticClass:"nvbt idoc",attrs:{onclick:"openDoc('Accelerometer Document','/doc/accelerometer.html')"}})]),t._v(" "),s("div",{staticClass:"dcontent",attrs:{id:"dcontent"}},[s("br"),t._v(" "),s("div",{staticClass:"button",attrs:{onclick:"clicked('accelerometer_shake.html',true)"}},[t._v("\n\t\t\t\t摇一摇\n\t\t\t")]),t._v(" "),s("br"),t._v(" "),s("ul",{staticClass:"dlist"},[s("li",{staticClass:"ditem",attrs:{onclick:"getAcc()"}},[t._v("获取设备当前加速度")]),t._v(" "),s("li",{staticClass:"ditem",attrs:{onclick:"watchAcc()"}},[t._v("监听设备加速度变化 ")]),t._v(" "),s("li",{staticClass:"ditem",attrs:{onclick:"watchStop()"}},[t._v("停止监听设备加速度变化")])])]),t._v(" "),s("div",{attrs:{id:"output"}},[t._v("\nAccelerometer可获取设备加速度传感器信息，包括x轴（屏幕水平方向）、y轴（垂直屏幕水平方向）、z轴（垂直屏幕平面方向）三个方向的加速度信息。\n\t\t")])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},,,,,,function(t,e,s){"use strict";var a=s(26),i=s(15),n=(s(51),s(2)),o=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);o.options.__file="accelerometer.vue",e.default=o.exports},,,,,,,,function(t,e){},function(t,e,s){"use strict";var a=s(6);s.n(a).a},function(t,e,s){"use strict";var a=s(7);s.n(a).a},function(t,e,s){"use strict";var a=s(8);s.n(a).a},function(t,e,s){"use strict";var a=s(9);s.n(a).a},function(t,e,s){"use strict";var a=s(10);s.n(a).a},function(t,e,s){"use strict";var a=s(11);s.n(a).a},function(t,e,s){t.exports=s.p+"img/avatar.1586cfa.png"},function(t,e,s){"use strict";var a=s(12);s.n(a).a},function(t,e,s){"use strict";var a=s(13);s.n(a).a},function(t,e,s){"use strict";var a=s(14);s.n(a).a},function(t,e,s){"use strict";var a=s(17);s.n(a).a},function(t,e,s){"use strict";var a=s(18);s.n(a).a},function(t,e,s){"use strict";var a=s(19);s.n(a).a},function(t,e,s){"use strict";var a=s(20);s.n(a).a},,,function(t,e){},,,,,,,,,,,,,,function(t,e,s){},,function(t,e,s){},,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";s.r(e);var a=s(1),i=s.n(a),n=(s(40),{name:"App",data:()=>({count:0,username:"",password:""}),created(){},methods:{afterEnter(){this.$refs.loginbox.style.width="100%"},plusReady(){let t=this;plus.key.addEventListener("backbutton",function(){var e=plus.webview.currentWebview();t.$route.meta.exit&&(t.count++,1===t.count&&(t.$toast("再按一次退出"),setTimeout(function(){t.count=0},1500))),t.count>=2&&plus.webview.close(e,"auto")},!1)},cancel(){this.$root.showLoginBox=!1},login(){this.$axios.post(this.addHost("/headline/user/login"),{password:this.password,username:this.username}).then(t=>{console.log(t.data),this.$root.user=t.data.data,this.$root.showLoginBox=!1})}}}),o=(s(41),s(2)),l=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app","data-theme":t.$root.theme}},[s("transition",{attrs:{name:"move"},on:{"after-enter":t.afterEnter}},[t.$root.showLoginBox?s("div",{ref:"loginbox",staticClass:"login-box"},[s("van-cell-group",{staticClass:"form-box"},[s("van-field",{attrs:{required:"",clearable:"",label:"用户名",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("van-field",{staticClass:"mb-14",attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("van-button",{staticClass:"mb-14",attrs:{size:"large",type:"danger"},on:{click:t.login}},[t._v("登录")]),t._v(" "),s("van-button",{staticClass:"mb-14",attrs:{size:"large"},on:{click:t.cancel}},[t._v("取消")])],1)],1):t._e()]),t._v(" "),s("keep-alive",[t.$route.meta.keepAlive?s("router-view"):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():s("router-view")],1)},[],!1,null,null,null);l.options.__file="App.vue";var r=l.exports,c=s(24),v={props:{offset:{type:Number,default:44},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1}},data:()=>({top:0,state:0,startY:0,touching:!1,infiniteLoading:!1}),methods:{touchStart(t){this.startY=t.targetTouches[0].pageY,this.touching=!0},mouseDown(t){this.startY=t.pageY,this.touching=!0},touchMove(t){if(this.$el.scrollTop>0||!this.touching)return;let e=t.targetTouches[0].pageY-this.startY;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)},mouseMove(t){if(this.$el.scrollTop>0||!this.touching)return;let e=t.pageY-this.startY;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)},touchEnd(t){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)},mouseUp(t){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)},refresh(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone(){this.state=0,this.top=0},infinite(){this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone(){this.infiniteLoading=!1},onScroll(t){if(this.infiniteLoading)return;let e=this.$el.clientHeight;this.$el.querySelector(".scroll-inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-to-refresh-layer").clientHeight:0)<this.$el.querySelector(".infinite-layer").clientHeight&&this.infinite()}}},u=(s(42),Object(o.a)(v,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scroll",class:{"pull-down":0===t.state,"pull-up":1===t.state,refreshing:2===t.state,touching:t.touching},on:{touchstart:function(e){t.onRefresh&&t.touchStart(e)},touchmove:function(e){t.onRefresh&&t.touchMove(e)},touchend:function(e){t.onRefresh&&t.touchEnd(e)},mousedown:function(e){t.onRefresh&&t.mouseDown(e)},mousemove:function(e){t.onRefresh&&t.mouseMove(e)},mouseup:function(e){t.onRefresh&&t.mouseUp(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[s("div",{staticClass:"scroll-inner",style:{transform:"translate3d(0, "+t.top+"px, 0)",webkitTransform:"translate3d(0, "+t.top+"px, 0)"}},[t.onRefresh?s("div",{staticClass:"pull-to-refresh-layer"},[t._t("refresh",[s("div",{staticClass:"preloader"}),t._v(" "),s("div",{staticClass:"pull-to-refresh-arrow"}),t._v(" "),s("span",{staticClass:"label-down"},[t._v("下拉刷新")]),t._v(" "),s("span",{staticClass:"label-up"},[t._v("释放刷新")]),t._v(" "),s("span",{staticClass:"label-refresh"},[t._v("正在刷新..")])])],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.onInfinite?s("div",{staticClass:"infinite-layer"},[t._t("infinite",[s("div",{staticClass:"infinite-preloader"}),t._v(" "),s("span",{staticClass:"label-loading"},[t._v("正在加载..")])])],2):t._e()],2)])},[],!1,null,"1f9e3fc5",null));u.options.__file="jc-loadmore.vue";var d={name:"newslist",components:{jcLoadmore:u.exports},data:()=>({newsList:[],count:0,finished:!1}),props:{type:{type:String,default:"all",validator:t=>["","hot","city","entertainment"].indexOf(t)>-1}},created(){this.getNewsList("hot","5","0").then(t=>{this.newsList=t.data.data})},mounted(){},methods:{plusReady(){},loadmore(t){this.finished||(this.count++,this.getNewsList("hot","5",5*this.count).then(e=>{this.newsList=this.newsList.concat(e.data.data),0===e.data.data.length&&(this.finished=!0),t()}))},refresh(t){this.finished=!1,this.getNewsList("hot","5","0").then(e=>{this.newsList=e.data.data,t()})},getNewsList(t,e,s){return this.isLoading=!0,new Promise((t,a)=>{this.$axios.get(this.addHost("/headline/news/list"),{params:{type:this.type,pageSize:e,count:s}}).then(t).catch(a)})},routeTo(t){this.$router.push({name:"news_detail",params:{_id:t}})}}},h=(s(43),Object(o.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newslist"},[s("jc-loadmore",{staticClass:"list-container",attrs:{onRefresh:t.refresh,onInfinite:t.loadmore}},[t._l(t.newsList,function(e,a){return s("div",{key:a,staticClass:"card flex-column",on:{click:function(s){t.routeTo(e._id)}}},[s("section",{staticClass:"flex-row"},[s("header",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"image-container"},[s("img",{attrs:{src:t.addPath(e.images[0])}})])]),t._v(" "),s("footer",{staticClass:"footer"},[s("van-icon",{staticClass:"icon-author",attrs:{name:"contact"}}),t._v(" "),s("span",[t._v(t._s(e.author.name))])],1)])}),t._v(" "),t.finished?s("div",{staticClass:"text-center",attrs:{slot:"infinite"},slot:"infinite"},[t._v("没有更多数据")]):t._e()],2)],1)},[],!1,null,"8393aa8e",null));h.options.__file="newslist.vue";var p={name:"home",components:{newsList:h.exports},data:()=>({tabs:[{title:"推荐",type:""},{title:"热点",type:"hot"},{title:"长春",type:"city"},{title:"娱乐",type:"entertainment"}],swipe:0}),created(){},mounted(){},methods:{plusReady(){}},activated(){this.$refs.$scrolltop.forEach((t,e)=>{t.$el.scrollTop=t.$el.dataset.top})}},m=(s(44),Object(o.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("header",{staticClass:"ma-header"},[s("div",{staticClass:"logo"}),t._v(" "),s("div",{staticClass:"search"},[s("van-icon",{attrs:{name:"search"}}),t._v(" "),s("div",{staticStyle:{"margin-left":"4px"}},[t._v("爬山偶遇外交部长")])],1)]),t._v(" "),s("van-tabs",{attrs:{swipeable:""},model:{value:t.swipe,callback:function(e){t.swipe=e},expression:"swipe"}},t._l(t.tabs,function(t,e){return s("van-tab",{directives:[{name:"scroll",rawName:"v-scroll"}],key:e,ref:"$scrolltop",refInFor:!0,staticClass:"tab-container",attrs:{title:t.title}},[s("news-list",{attrs:{type:t.type}})],1)}))],1)},[],!1,null,"2120b594",null));m.options.__file="home.vue";var _=m.exports,f={name:"video-center",data(){return{isLoading:!1,videoList:[{author:"艺术中国",avatar:"",url:"/uploads/video/20181113/20181113-news-r64txj.mp4",follower:"64",comment:"114"}],playerOptions:{autoplay:!0,controls:!1,language:"cn",sources:[{type:"video/mp4",src:this.addPath("/uploads/video/20181113/20181113-panda-gao46n.mp4")}],poster:this.addPath(this.$root.user.avatar)}}},created(){},mounted(){},activated(){console.log("activated")},methods:{getVideoList(){let t=this;t.isLoading=!0,setTimeout(function(){t.isLoading=!1},10)}}},g=(s(45),Object(o.a)(f,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"video-center"},[s("van-pull-refresh",{staticClass:"list-container",on:{refresh:t.getVideoList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},t._l(t.videoList,function(e,a){return s("div",[s("video-player",{staticClass:"video-js vjs-big-play-centered",attrs:{options:t.playerOptions,playsinline:!1}}),t._v(" "),s("div",{staticClass:"info-container align-center"},[s("van-icon",{staticClass:"icon-author",attrs:{name:"contact"}}),t._v(" "),s("div",[t._v(t._s(e.author))]),t._v(" "),s("div",[t._v(t._s(e.follower))]),t._v(" "),s("div"),t._v(" "),s("div")],1)],1)}))],1)},[],!1,null,null,null));g.options.__file="video-center.vue";var w=g.exports,C={name:"micro-news",data:()=>({}),created(){},methods:{plusReady(){}}},b=(s(46),Object(o.a)(C,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"micro-news"},t._l([1],function(e,a){return s("div",[t._m(0,!0)])}))},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"micro-item"},[s("header",[s("div",{staticClass:"avatar"}),t._v(" "),s("div",[t._v("成都商报")]),t._v(" "),s("div",[t._v("关注")])]),t._v(" "),s("content",[s("section",{staticClass:"has_action"},[s("div",{staticClass:"item_detail"},[s("div",{staticClass:"top"},[s("div",{staticClass:"avatar"}),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v("陈清华大夫")]),t._v(" "),s("div",{staticClass:"label"},[t._v("11-15 11:42 医生")])]),t._v(" "),s("div",{staticClass:"delete"})]),t._v(" "),s("h3",{staticClass:"dotdot line3"},[t._v("女子工厂工作发生意外手腕严重受伤 绵阳交警紧急护送就医")]),t._v(" "),s("div",{staticClass:"list_image"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/R9My0ou3YzcIDl"}})]),t._v(" "),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/R9N01hLDNunlCU"}})]),t._v(" "),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/R9N01hWCYaYX73"}})])])]),t._v(" "),s("div",{staticClass:"item_info"},[s("span",{staticClass:"refresh"},[s("i",{staticClass:"van-icon van-icon-contact"}),s("i",{staticClass:"num"},[t._v("24")])]),t._v(" "),s("span",{staticClass:"comment"},[s("i",{staticClass:"van-icon van-icon-contact"}),s("i",{staticClass:"num"},[t._v("224")])]),t._v(" "),s("span",{staticClass:"help"},[s("i",{staticClass:"van-icon van-icon-contact"}),s("i",{staticClass:"num"},[t._v("1174")])])])])]),t._v(" "),s("div",{staticClass:"bold-line"}),t._v(" "),s("section",{staticClass:"has_action"},[s("div",{staticClass:"item_detail"},[s("div",{staticClass:"top"},[s("div",{staticClass:"avatar"}),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v("陈清华大夫")]),t._v(" "),s("div",{staticClass:"label"},[t._v("11-15 11:42 医生")])]),t._v(" "),s("div",{staticClass:"delete"})]),t._v(" "),s("h3",{staticClass:"dotdot line3"},[t._v("女子工厂工作发生意外手腕严重受伤 绵阳交警紧急护送就医")]),t._v(" "),s("div",{staticClass:"list_image"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/R9My0ou3YzcIDl"}})]),t._v(" "),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/R9N01hLDNunlCU"}})]),t._v(" "),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/R9N01hWCYaYX73"}})])])]),t._v(" "),s("div",{staticClass:"item_info"},[s("span",{staticClass:"refresh"},[s("i",{staticClass:"van-icon van-icon-contact"}),s("i",{staticClass:"num"},[t._v("24")])]),t._v(" "),s("span",{staticClass:"comment"},[s("i",{staticClass:"van-icon van-icon-contact"}),s("i",{staticClass:"num"},[t._v("224")])]),t._v(" "),s("span",{staticClass:"help"},[s("i",{staticClass:"van-icon van-icon-contact"}),s("i",{staticClass:"num"},[t._v("1174")])])])])])])])}],!1,null,null,null));b.options.__file="micro-news.vue";var y=b.exports,x=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s(47)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tool-item"},[e("span",[this._v("0")]),this._v(" "),e("span",{staticClass:"dark-grey"},[this._v("动态")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tool-item"},[e("span",[this._v("0")]),this._v(" "),e("span",{staticClass:"dark-grey"},[this._v("粉丝")])])}],k={name:"user-center",data:()=>({}),created(){},methods:{toggleTheme(){this.$root.theme="theme1"===this.$root.theme?"theme":"theme1"}}},$=(s(48),Object(o.a)(k,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-center"},[t.$root.user?s("div",{staticClass:"user-background"},[s("div",{staticClass:"user-cell"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.addPath(t.$root.user.avatar)}})]),t._v(" "),s("div",{staticClass:"nickname"},[t._v(t._s(t.$root.user.nickname))]),t._v(" "),s("div",{staticClass:"icon flex-row flex-center"},[s("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),s("div",{staticClass:"user-tools"},[s("div",{staticClass:"tool-item"},[s("span",[t._v(t._s(t.$root.user.dynamic.length))]),t._v(" "),s("span",{staticClass:"dark-grey"},[t._v("动态")])]),t._v(" "),s("div",{staticClass:"tool-item"},[s("span",[t._v(t._s(t.$root.user.followers.length))]),t._v(" "),s("span",{staticClass:"dark-grey"},[t._v("粉丝")])]),t._v(" "),s("div",{staticClass:"tool-item",on:{click:t.toggleTheme}},[s("span",[t._v(t._s(t.$root.user.watchers.length))]),t._v(" "),s("span",{staticClass:"dark-grey"},[t._v("七天访客")])])])]):s("div",{staticClass:"user-background"},[s("div",{staticClass:"user-cell",on:{click:t.routeLogin}},[t._m(0),t._v(" "),s("div",{staticClass:"nickname"},[t._v("请登录")]),t._v(" "),s("div",{staticClass:"icon flex-row flex-center"},[s("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),s("div",{staticClass:"user-tools"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"tool-item",on:{click:t.toggleTheme}},[s("span",[t._v("0")]),t._v(" "),s("span",{staticClass:"dark-grey"},[t._v("七天访客")])])])]),t._v(" "),s("div",{staticClass:"tools-container"},[s("div",{staticClass:"tool-item"},[s("van-icon",{staticClass:"icon icon-collection",attrs:{name:"like-o"}}),t._v(" "),s("span",[t._v("收藏")])],1),t._v(" "),s("div",{staticClass:"tool-item"},[s("van-icon",{staticClass:"icon icon-history",attrs:{name:"clock"}}),t._v(" "),s("span",[t._v("历史")])],1),t._v(" "),s("div",{staticClass:"tool-item",on:{click:t.toggleTheme}},[s("van-icon",{staticClass:"icon icon-theme",attrs:{name:"password-not-view"}}),t._v(" "),s("span",[t._v("夜间")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"tool-item"},[s("van-icon",{staticClass:"icon icon-theme",attrs:{name:"password-view"}}),t._v(" "),s("span",[t._v("日间")])],1)]),t._v(" "),s("div",{staticClass:"bold-line"}),t._v(" "),s("van-cell",{attrs:{title:"我的关注","is-link":""}}),t._v(" "),s("van-cell",{attrs:{title:"消息通知","is-link":""}}),t._v(" "),s("div",{staticClass:"bold-line"}),t._v(" "),s("van-cell",{attrs:{title:"我的钱包","is-link":"",value:"手机充值"}}),t._v(" "),s("div",{staticClass:"bold-line"}),t._v(" "),s("van-cell",{attrs:{title:"用户反馈","is-link":""}}),t._v(" "),s("van-cell",{attrs:{title:"系统设置","is-link":""}}),t._v(" "),s("van-cell",{attrs:{title:"广告设置","is-link":""}}),t._v(" "),s("div",{staticClass:"bold-line"})],1)},x,!1,null,null,null));$.options.__file="user-center.vue";var L=$.exports,E={name:"editor",methods:{close(){this.$emit("close")},send(){}}},A=(s(49),Object(o.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor"},[e("van-nav-bar",{attrs:{"left-text":"取消"},on:{"click-left":this.close,"click-right":this.send}},[e("div",{attrs:{slot:"right"},slot:"right"},[this._v("发布")])]),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"bold-line"}),this._v(" "),e("van-cell",{attrs:{icon:"location",title:"所在位置","is-link":""}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("textarea",{staticClass:"textarea",attrs:{maxlength:"100"}}),this._v(" "),e("div",{staticClass:"img-btn"},[this._v("\n        +\n      ")])])}],!1,null,null,null));A.options.__file="editor.vue";var R={name:"hello",components:{editor:A.exports,home:_,videoCenter:w,microNews:y,userCenter:L},data:()=>({active:0,showPop:!1,showEditor:!1,page:[_.name,w.name,"",y.name,L.name]}),mounted(){},methods:{popup(){this.showPop=!0},close(){this.showEditor=!1},edit(){this.showEditor=!0,this.showPop=!1}}},N=(s(50),Object(o.a)(R,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"send-news",on:{click:t.popup}},[t._v("\n\t\t\t+\n\t\t")]),t._v(" "),s(t.page[t.active],{tag:"component"}),t._v(" "),s("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("van-tabbar-item",{attrs:{icon:"shop"}},[t._v("首页")]),t._v(" "),s("van-tabbar-item",{attrs:{icon:"chat"}},[t._v("视频")]),t._v(" "),s("van-tabbar-item",{attrs:{icon:"chat"}},[t._v("视频")]),t._v(" "),s("van-tabbar-item",{attrs:{icon:"records"}},[t._v("微头条")]),t._v(" "),s("van-tabbar-item",{attrs:{icon:"gold-coin"}},[t._v("我的")])],1),t._v(" "),s("van-popup",{staticClass:"popup",attrs:{position:"bottom"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[s("div",{staticClass:"flex-row justify-around toolbars"},[s("div",{staticClass:"flex-column flex-center",on:{click:t.edit}},[s("div",{staticClass:"icon-container"},[s("van-icon",{staticClass:"icon-text",attrs:{name:"edit-data"}})],1),t._v(" "),s("span",[t._v("文字")])]),t._v(" "),s("div",{staticClass:"flex-column flex-center",on:{click:t.edit}},[s("div",{staticClass:"icon-container"},[s("van-icon",{staticClass:"icon-image",attrs:{name:"photo"}})],1),t._v(" "),s("span",[t._v("图片")])])]),t._v(" "),s("div",{staticClass:"flex-row flex-center",on:{click:t.close}},[s("van-icon",{attrs:{name:"close"}})],1)]),t._v(" "),s("van-popup",{staticClass:"editor",attrs:{position:"right"},model:{value:t.showEditor,callback:function(e){t.showEditor=e},expression:"showEditor"}},[s("editor",{on:{close:t.close}})],1)],1)},[],!1,null,null,null));N.options.__file="main.vue";var P=N.exports,j=s(32),T={name:"launch"},O=(s(52),Object(o.a)(T,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"launch"},[this._v("\n\t我"),e("br"),this._v("是"),e("br"),this._v("启"),e("br"),this._v("动"),e("br"),this._v("页\n")])}],!1,null,null,null));O.options.__file="launch.vue";var S=O.exports,I={name:"add_news",data:()=>({title:"",author:"",article:"",type:"hot"}),created(){},methods:{tap(){this.$axios.post("/headline/news/create",{title:this.title,type:this.type,author:{name:this.author,avatar:"/avatar.jpg"},images:this.images,content:this.article}).then(()=>{this.$toast("创建文章成功！")})},change(t){console.log(t.target.files);var e=new FormData;Array.prototype.slice.call(t.target.files).forEach((t,s)=>{e.append("file"+s,t)}),this.$axios.post("/headline/upload/upload",e).then(t=>{console.log(t.data),this.images=t.data.urls,this.$toast("上传成功")})}}},D=(s(53),Object(o.a)(I,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-news"},[t._v("\n  图片"),s("input",{attrs:{type:"file",accept:"audio/*|video/*|image/*|MIME_type",multiple:"multiple"},on:{change:t.change}}),s("br"),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.type=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"hot"}},[t._v("热门")]),t._v(" "),s("option",{attrs:{value:"city"}},[t._v("长春")]),t._v(" "),s("option",{attrs:{value:"entertainment"}},[t._v("娱乐")])]),s("br"),t._v("\n  标题"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("br"),t._v("\n  作者"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),s("br"),t._v("\n  内容"),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article,expression:"article"}],domProps:{value:t.article},on:{input:function(e){e.target.composing||(t.article=e.target.value)}}}),s("br"),t._v(" "),s("van-button",{attrs:{size:"normal"},on:{click:t.tap}},[t._v("上传")]),s("br")],1)},[],!1,null,"e6eae9ce",null));D.options.__file="add-news.vue";var Y=D.exports,M={name:"news_detail",data:()=>({content:""}),created(){console.log(this.$route.params),this.$axios.get(this.addHost("/headline/news/search"),{params:{_id:this.$route.params._id}}).then(t=>{this.content=t.data.data.content,console.log(t)})},methods:{}},H=(s(54),Object(o.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"news-detail"},[e("div",{domProps:{innerHTML:this._s(this.content)}})])},[],!1,null,null,null));H.options.__file="news-detail.vue";var U=H.exports;i.a.use(c.a);var z=new c.a({routes:[{path:"/",redirect:"/main"},{path:"/main",name:"main",component:P,meta:{exit:!0,keepAlive:!0},children:[{path:"home",name:"home",component:_,meta:{exit:!0,keepAlive:!1}},{path:"video_center",name:"video_center",component:w,meta:{exit:!0,keepAlive:!1}},{path:"micro_news",name:"micro_news",component:y,meta:{exit:!0,keepAlive:!1}},{path:"user_center",name:"user_center",component:L,meta:{exit:!0,keepAlive:!1}}]},{path:"/accelerometer",name:"accelerometer",component:j.default},{path:"/launch",name:"launch",component:S},{path:"/add_news",name:"add_news",component:Y},{path:"/news_detail/:_id",name:"news_detail",component:U,meta:{keepAlive:!1}}]}),W=s(37),q=s(34),B=s.n(q),F=s(35),V=s.n(F),G=(s(71),s(72),s(73),s(74),s(36)),J=s.n(G),X=s(25),K=s.n(X);var Q={plusReady:function(t){window.plus?t():document.addEventListener("plusready",t,!1)},listenNetwork:function(t){document.addEventListener("netchange",t,!1)}};const Z={plus:!1,stream:!1,wechat:!1,android:!1,iphone:!1,ipad:!1,version:""};let tt=navigator.userAgent,et=tt.match(/Html5Plus/i),st=tt.match(/StreamApp/i),at=tt.match(/(MicroMessenger)\/([\d.]+)/i),it=tt.match(/(Android);?[\s/]+([\d.]+)?/),nt=tt.match(/(iPhone\sOS)\s([\d_]+)/),ot=tt.match(/(iPad).*OS\s([\d_]+)/);et&&(Z.plus=!0),st&&(Z.stream=!0),at&&(Z.wechat=!0),it&&(Z.android=!0,Z.version=it[2],Z.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion)),nt&&(Z.ios=Z.iphone=!0,Z.version=nt[2].replace(/_/g,".")),ot&&(Z.ios=Z.ipad=!0,Z.version=ot[2].replace(/_/g,"."));var lt=Z,rt={toast(t,e,s){let a={};return a.duration=e||"short",a.verticalAlign=s||"bottom",window.plus.nativeUI.toast(t,a)},alert:(t,e,s,a)=>window.plus.nativeUI.alert(t,e,s,a),confirm:(t,e,s,a)=>window.plus.nativeUI.confirm(t,e,s,a),prompt:(t,e,s,a,i)=>window.plus.nativeUI.prompt(t,e,s,a,i),actionSheet:(t,e)=>window.plus.nativeUI.actionSheet(t,e)};var ct={getCurrentAcceleration:()=>new Promise(function(t,e){window.plus.accelerometer.getCurrentAcceleration(e=>{t(e)},t=>{e(t)})}),watchAcceleration:t=>new Promise(function(e,s){window.plus.accelerometer.watchAcceleration(t=>{e(t)},t=>{s(t)},t||{})}),clearWatch:t=>{window.plus.accelerometer.clearWatch(t)}};var vt={getCurrentPosition:t=>new Promise((e,s)=>{window.plus.geolocation.getCurrentPosition(t=>{e(t)},t=>{s(t)},t||{})}),watchPosition:t=>new Promise((e,s)=>{window.plus.geolocation.watchPosition(t=>{e(t)},t=>{s(t)},t||{})}),clearWatch:t=>{window.plus.geolocation.clearWatch(t)}};var ut={getCurrentNetworkType:()=>{let t=["UNKNOW","NONE","ETHERNET","WIFI","2G","3G","4G"];return lt.plus?t[window.plus.networkinfo.getCurrentType()]:null}};const dt=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase();Array.isArray;var ht=t=>"function"===dt(t);const pt={};pt.install=(t=>{t.mixin({beforeCreate(){if(lt.plus){let t=this.$options;Q.plusReady(function(){ht(t.plusReady)&&t.plusReady.call(this),ht(t.listenNetwork)&&Q.listenNetwork(function(){t.listenNetwork.call(this)})}.bind(this))}}}),t.prototype.$plusReady=Q.plusReady,t.prototype.$os=lt,t.prototype.$nativeUI=rt,t.prototype.$accelerometer=ct,t.prototype.$geolocation=vt,t.prototype.$networkinfo=ut}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(pt);var mt=pt;i.a.$axios=i.a.prototype.$axios=J.a,i.a.use(mt),i.a.mixin({methods:{routeLogin(){this.$root.showLoginBox=!0},addPath:t=>K.a.origin+t,addHost:t=>K.a.hostname+t}}),i.a.directive("scroll",{bind(t){t.addEventListener("scroll",function(e){t.dataset.top=e.target.scrollTop})}}),i.a.config.productionTip=!1,i.a.use(W.a),i.a.use(V.a),B.a.attach(document.body),new i.a({el:"#app",router:z,components:{App:r},template:"<App/>",data:()=>({theme:"theme",isLogin:!1,showLoginBox:!1,user:""})})}],[[94,1,2]]]);