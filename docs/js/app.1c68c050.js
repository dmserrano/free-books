(function(t){function e(e){for(var a,i,o=e[0],u=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/free-books/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3f65":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("619c"),s=(n("4989"),n("ab8b"),n("1f54"),n("59ca")),i=n.n(s),o={apiKey:"AIzaSyDddkRkVXKmpoO6pCohVsXMwb7A2YmgFA8",authDomain:"free-books-eb916.firebaseapp.com",databaseURL:"https://free-books-eb916.firebaseio.com",projectId:"free-books-eb916",storageBucket:"free-books-eb916.appspot.com",messagingSenderId:"753709363182"};i.a.initializeApp(o);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar",{attrs:{"is-authed":t.isAuthed}}),n("div",{staticClass:"container mt-4"},[t.loading?n("loader"):n("router-view")],1)],1)},c=[],l=(n("96cf"),n("3040")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("span",{staticClass:"navbar-brand"},[t._v("Free Books")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse align-right",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[t.isAuthed?n("li",{staticClass:"nav-item dropdown"},[n("div",{staticClass:"d-flex"},[t.userPhotoUrl?n("div",{staticClass:"user-image-container mr-2"},[n("img",{attrs:{src:t.userPhotoUrl,alt:"Profile Image"}})]):t._e(),n("span",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink","data-toggle":"dropdown"}},[t._v("\n                        "+t._s(t.userDisplayName)+"\n                    ")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),n("span",{staticClass:"dropdown-item",on:{click:t.firebaseLogout}},[t._v("Logout")])],1)])]):t._e(),t.isAuthed?t._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1)])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],f=(n("ea7b"),new i.a.auth.GoogleAuthProvider),h=function(){return i.a.auth().currentUser},v={methods:{firebaseLogout:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.auth().signOut();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),this.$swal("SOS! Couldn't signout!");case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}(),googleRedirectSignIn:function(){i.a.auth().signInWithRedirect(f)},setAuthStateChangedListener:function(){var t=this;i.a.auth().onAuthStateChanged(function(e){e?(t.isAuthed=!0,t.$router.push("/dashboard")):(t.isAuthed=!1,t.$router.push("/login"))})},setGoogleRedirectListener:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.auth().getRedirectResult();case 3:e=t.sent,n=e.user,n&&(this.isAuthed=!0,this.$router.push("/dashboard")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$swal("Coult not sign in with Google.");case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}()}},b={mixins:[v],props:{isAuthed:{type:Boolean,required:!0}},computed:{userDisplayName:function(){var t=h();return this.isAuthed&&t?t.displayName||t.email:null},userPhotoUrl:function(){var t=h();return this.isAuthed&&t?t.photoURL:null}}},g=b,m=(n("ab3d"),n("2877")),_=Object(m["a"])(g,d,p,!1,null,"0b48cf99",null);_.options.__file="Navbar.vue";var w=_.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center align-items-center mt-4"},[n("h4",{staticClass:"m-0 mr-2"},[t._v("Loading...")]),n("div",[n("i",{staticClass:"fa fa-spinner fa-spin"})])])}],y=(n("a2fd"),{}),k=Object(m["a"])(y,C,x,!1,null,"4c844277",null);k.options.__file="Loader.vue";var A=k.exports,O={name:"App",components:{Loader:A,Navbar:w},mixins:[v],data:function(){return{isAuthed:!1,loading:!0}},created:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.setAuthStateChangedListener(),t.next=4,this.setGoogleRedirectListener();case 4:this.loading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},j=O,L=Object(m["a"])(j,u,c,!1,null,null,null);L.options.__file="App.vue";var R=L.exports,S=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row text-center"},[n("h4",{staticClass:"col-md-12"},[t._v("Welcome to something awesome! Please sign in.")]),n("div",{staticClass:"col-md-12 mt-4"},[n("button",{staticClass:"btn btn-primary",on:{click:t.googleRedirectSignIn}},[t._v("\n            Sign In With Google\n            "),n("i",{staticClass:"fa fa-google-plus-official"})])])])},P=[],E={mixins:[v]},D=E,I=Object(m["a"])(D,$,P,!1,null,null,null);I.options.__file="Login.vue";var N=I.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"text-center"},[t._v("Welcome to Free Books! This is your dashboard.")]),n("h4",{staticClass:"text-center"},[t._v("Under construction.")])])}],G={},T=G,B=Object(m["a"])(T,M,U,!1,null,null,null);B.options.__file="Dashboard.vue";var W=B.exports;a["a"].use(S["a"]);var q=new S["a"]({routes:[{path:"/login",name:"login",component:N},{path:"/dashboard",name:"dashboard",component:W,meta:{requiresAuth:!0}}]});q.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})||n(),h()?n():n({path:"/login"})});var F=q;a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({router:F,render:function(t){return t(R)}}).$mount("#app")},a2fd:function(t,e,n){"use strict";var a=n("ee62"),r=n.n(a);r.a},ab3d:function(t,e,n){"use strict";var a=n("3f65"),r=n.n(a);r.a},ee62:function(t,e,n){}});
//# sourceMappingURL=app.1c68c050.js.map