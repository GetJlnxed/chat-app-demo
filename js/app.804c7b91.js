(function(e){function t(t){for(var n,i,o=t[0],u=t[1],d=t[2],l=0,f=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/chat-app-demo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1234:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}}),r("v-main",[r("router-view")],1)],1)},s=[],i={name:"App",data:function(){return{}}},o=i,u=r("2877"),d=r("6544"),c=r.n(d),l=r("7496"),f=r("40dc"),m=r("f6c4"),p=Object(u["a"])(o,a,s,!1,null,null,null),g=p.exports;c()(p,{VApp:l["a"],VAppBar:f["a"],VMain:m["a"]});var h=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[e.isLoggedIn?e._e():r("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[r("v-card-text",[r("v-card-title",[e._v("Login")]),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{label:"Name",required:"",rules:[function(e){return!!e||"Name field is required"}]},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),r("v-file-input",{attrs:{rules:[function(e){return!!e||"Photo is required"}],accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera"},model:{value:e.user.img,callback:function(t){e.$set(e.user,"img",t)},expression:"user.img"}}),r("v-btn",{staticClass:"mr-4",attrs:{color:"success",disabled:!e.valid},on:{click:e.handleLogin}},[e._v("Sign in")]),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):e._e()],1)],1)],1)],1)},b=[],I=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("5530")),x=r("2f62"),w=(r("b0c0"),r("d4ec")),_=function e(t,r,n){Object(w["a"])(this,e),this.id=t,this.name=r,this.imgSrc=n,this.friends=[{id:this.id,name:this.name}],this.messages=[{from:this.id,to:this.id,message:"First message from me to me"}]},C={name:"Home",data:function(){return{loading:!1,valid:!1,user:{username:null,img:null,id:1}}},methods:{handleLogin:function(){var e=this;this.loading=!0,this.valid=this.$refs.form.validate(),this.valid?setTimeout((function(){var t=e.user.img;e.user.img=URL.createObjectURL(t),e.$store.dispatch("auth/login",e.user).then((function(){e.$store.dispatch("chat/addUser",new _(0,"Иван Иванович",null)).then((function(){e.$store.dispatch("chat/addUser",new _(e.user.id,e.user.username,e.user.img)),e.$router.push("/chat"),e.loading=!1}))}))}),2e3):this.loading=!1}},mounted:function(){this.isLoggedIn&&this.$router.push("/chat")},computed:Object(I["a"])({},Object(x["b"])({isLoggedIn:"auth/isLoggedIn"}))},V=C,y=r("8336"),j=r("b0af"),F=r("99d9"),O=r("a523"),L=r("23a7"),$=r("4bd4"),M=r("490a"),U=r("8654"),k=Object(u["a"])(V,v,b,!1,null,null,null),P=k.exports;c()(k,{VBtn:y["a"],VCard:j["a"],VCardText:F["a"],VCardTitle:F["b"],VContainer:O["a"],VFileInput:L["a"],VForm:$["a"],VProgressCircular:M["a"],VTextField:U["a"]});var T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","d-flex":"",justify:"space-around"}},[r("chat-window",{staticClass:"mr-2",attrs:{userInfo:e.currentUser},on:{message:e.sendMessage}}),r("chat-window",{attrs:{userInfo:e.ivan},on:{message:e.sendMessage}})],1)},S=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto overflow-hidden"},[n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[n("v-list-item-group",{attrs:{color:"primary"}},e._l(e.userInfo.friends,(function(t,r){return n("v-list-item",{key:r,on:{click:function(r){return r.stopPropagation(),e.changeCurrentFriend(t.id)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1)})),1)],1)],1),n("v-img",{attrs:{height:"200px",src:r("7841")}},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"title white--text pl-0"},[e._v(" Chat ")])],1),n("v-card-title",{staticClass:"white--text"},[e.userInfo.imgSrc?n("v-avatar",{attrs:{rounded:"",size:"90"}},[n("img",{attrs:{src:e.userInfo.imgSrc,alt:e.userInfo.name}})]):e._e(),e.userInfo.imgSrc?e._e():n("v-avatar",{attrs:{rounded:"",size:"90",color:"red"}},[n("span",{staticClass:"white--text headline"},[e._v(e._s(e.createAvatar()))])]),n("p",{staticClass:"ml-3"},[e._v(e._s(e.userInfo.name))])],1)],1),n("v-card-text",[n("v-container",{staticClass:"messages",attrs:{fluid:"","d-flex":"","flex-column":""}},[n("p",{staticClass:"ml-3 text-h4"},[e._v(e._s(e.currentFriendName))]),e._l(e.messages,(function(t){return n("div",{key:t,staticClass:"message ma-2",class:{"align-self-end from":t.from==e.userInfo.id,"align-self-start to":t.from!=e.userInfo.id},attrs:{"d-flex":"","flex-row":"",fluid:""}},[e._v(" "+e._s(t.message)+" ")])}))],2),n("v-container",{attrs:{fluid:"","d-flex":"","flex-column":""}},[n("v-text-field",{attrs:{label:"Message","append-outer-icon":e.message?"mdi-send":"",clearable:"",type:"text","white-space":"pre-wrap"},on:{"click:append-outer":e.sendMessage},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)],1)],1)},A=[],B=(r("4de4"),r("7db0"),{name:"ChatWindow",data:function(){return{drawer:null,currentFriendId:this.userInfo.id,message:null}},props:{userInfo:Object},methods:{createAvatar:function(){return this.userInfo.name[0]},changeCurrentFriend:function(e){this.currentFriendId=e},sendMessage:function(){null!=this.message&&(this.$emit("message",{from:this.userInfo.id,to:this.currentFriendId,message:this.message}),this.clearMessage())},clearMessage:function(){this.message=null}},computed:{currentFriendName:function(){var e=this;return this.userInfo.friends.find((function(t){return t.id==e.currentFriendId})).name},messages:function(){var e=this;return this.userInfo.id==this.currentFriendId?this.userInfo.messages.filter((function(t){return t.from==e.currentFriendId&&t.to==e.currentFriendId})):this.userInfo.messages.filter((function(t){return t.from==e.currentFriendId||t.to==e.currentFriendId}))}}}),E=B,q=(r("d234"),r("5bc1")),z=r("8212"),H=r("adda"),J=r("8860"),R=r("da13"),W=r("5d23"),D=r("1baa"),G=r("f774"),K=r("2a7f"),Q=Object(u["a"])(E,N,A,!1,null,"271b31d5",null),X=Q.exports;c()(Q,{VAppBar:f["a"],VAppBarNavIcon:q["a"],VAvatar:z["a"],VCard:j["a"],VCardText:F["a"],VCardTitle:F["b"],VContainer:O["a"],VImg:H["a"],VList:J["a"],VListItem:R["a"],VListItemContent:W["a"],VListItemGroup:D["a"],VListItemTitle:W["b"],VNavigationDrawer:G["a"],VTextField:U["a"],VToolbarTitle:K["a"]});var Y={name:"Chat",components:{ChatWindow:X},mounted:function(){!this.isLoggedIn&&this.$router.push("/"),this.$store.dispatch("chat/addFriend",{currentId:this.currentUser.id,friendId:this.ivan.id,friendName:this.ivan.name}),this.$store.dispatch("chat/addFriend",{currentId:this.ivan.id,friendId:this.currentUser.id,friendName:this.currentUser.name})},methods:{sendMessage:function(e){this.$store.dispatch("chat/addMessage",e)}},computed:Object(I["a"])(Object(I["a"])({},Object(x["b"])({isLoggedIn:"auth/isLoggedIn",user:"auth/getUserInfo"})),{},{ivan:function(){return this.$store.getters["chat/getUserInfo"](0)},currentUser:function(){return this.$store.getters["chat/getUserInfo"](this.user.id)}})},Z=Y,ee=Object(u["a"])(Z,T,S,!1,null,null,null),te=ee.exports;c()(ee,{VContainer:O["a"]}),n["a"].use(h["a"]);var re=[{path:"/",name:"Home",component:P},{path:"/chat",name:"Chat",component:te}],ne=new h["a"]({routes:re}),ae=ne,se=function(){return{isLoggedIn:!1,user:{username:null,img:null,id:null}}},ie={isLoggedIn:function(e){return e.isLoggedIn},getUserInfo:function(e){return{name:e.user.username,img:e.user.img,id:e.user.id}}},oe={login:function(e,t){var r=e.commit;r("login",t)}},ue={login:function(e,t){e.isLoggedIn=!0,e.user.username=t.username,e.user.img=t.img,e.user.id=t.id}},de={namespaced:!0,state:se,getters:ie,actions:oe,mutations:ue},ce=function(){return{users:[]}},le={getUserInfo:function(e){return function(t){return e.users.find((function(e){return e.id==t}))}}},fe={addUser:function(e,t){var r=e.commit;r("addUser",t)},addFriend:function(e,t){var r=e.commit;r("addFriend",t)},addMessage:function(e,t){var r=e.commit;r("addMessage",t)}},me={addUser:function(e,t){e.users.push(t)},addFriend:function(e,t){var r=e.users.find((function(e){return e.id==t.currentId}));r.friends.push({id:t.friendId,name:t.friendName})},addMessage:function(e,t){var r=e.users.find((function(e){return e.id==t.to}));if(r.messages.push(t),t.to!=t.from){var n=e.users.find((function(e){return e.id==t.from}));n.messages.push(t)}}},pe={namespaced:!0,state:ce,getters:le,actions:fe,mutations:me};n["a"].use(x["a"]);var ge=new x["a"].Store({state:{},mutations:{},actions:{},modules:{auth:de,chat:pe}}),he=r("f309");n["a"].use(he["a"]);var ve=new he["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:ae,store:ge,vuetify:ve,render:function(e){return e(g)}}).$mount("#app")},7841:function(e,t,r){e.exports=r.p+"img/bdde1.48a3fa00.jpg"},d234:function(e,t,r){"use strict";r("1234")}});
//# sourceMappingURL=app.804c7b91.js.map