(function(t){function e(e){for(var n,o,i=e[0],u=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],r[o]&&p.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/free-books/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4f97":function(t,e,a){"use strict";var n=a("8958"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("619c"),s=(a("4989"),a("ab8b"),a("1f54"),a("59ca")),o=a.n(s),i={apiKey:"AIzaSyDddkRkVXKmpoO6pCohVsXMwb7A2YmgFA8",authDomain:"free-books-eb916.firebaseapp.com",databaseURL:"https://free-books-eb916.firebaseio.com",projectId:"free-books-eb916",storageBucket:"free-books-eb916.appspot.com",messagingSenderId:"753709363182"};o.a.initializeApp(i);var u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar",{attrs:{"is-authed":t.isAuthed}}),a("div",{staticClass:"container mt-4"},[t.loading?a("loader"):a("router-view")],1)],1)},l=[],c=(a("96cf"),a("3040")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("span",{staticClass:"navbar-brand"},[t._v("Free Books")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse align-right",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[t.isAuthed?a("li",{staticClass:"nav-item dropdown user-dropdown-menu"},[a("div",{staticClass:"row"},[t.userPhotoUrl?a("div",{staticClass:"user-image-container mr-2"},[a("img",{attrs:{src:t.userPhotoUrl,alt:"Profile Image"}})]):t._e(),a("span",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink","data-toggle":"dropdown"}},[t._v("\n                        "+t._s(t.userDisplayName)+"\n                    ")]),a("div",{staticClass:"dropdown-menu col-md-12 col-sm-12",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("router-link",{staticClass:"dropdown-item",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),a("span",{staticClass:"dropdown-item",on:{click:t.firebaseLogout}},[t._v("Logout")])],1)])]):t._e(),t.isAuthed?a("li",{staticClass:"nav-item dropdown user-dropdown-mobile-menu"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),a("span",{staticClass:"nav-link",on:{click:t.firebaseLogout}},[t._v("Logout")])],1):t._e(),t.isAuthed?t._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1)])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],f=(a("ea7b"),new o.a.auth.GoogleAuthProvider),h=function(){return o.a.auth().currentUser},v={methods:{firebaseLogout:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.auth().signOut();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),this.$swal("SOS! Couldn't signout!");case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}(),googleRedirectSignIn:function(){o.a.auth().signInWithRedirect(f)},setAuthStateChangedListener:function(){var t=this;o.a.auth().onAuthStateChanged(function(e){e?(t.isAuthed=!0,t.$router.push("/dashboard")):(t.isAuthed=!1,t.$router.push("/login"))})},setGoogleRedirectListener:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.auth().getRedirectResult();case 3:e=t.sent,a=e.user,a&&(this.isAuthed=!0,this.$router.push("/dashboard")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$swal("Coult not sign in with Google.");case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}()}},b={mixins:[v],props:{isAuthed:{type:Boolean,required:!0}},computed:{userDisplayName:function(){var t=h();return this.isAuthed&&t?t.displayName||t.email:null},userPhotoUrl:function(){var t=h();return this.isAuthed&&t?t.photoURL:null}}},g=b,m=(a("4f97"),a("2877")),_=Object(m["a"])(g,d,p,!1,null,"3a14b7ae",null);_.options.__file="Navbar.vue";var w=_.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center mt-4"},[a("h4",{staticClass:"m-0 mr-2"},[t._v("Loading...")]),a("div",[a("i",{staticClass:"fa fa-spinner fa-spin"})])])}],y=(a("a2fd"),{}),x=Object(m["a"])(y,C,k,!1,null,"4c844277",null);x.options.__file="Loader.vue";var A=x.exports,O={name:"App",components:{Loader:A,Navbar:w},mixins:[v],data:function(){return{isAuthed:!1,loading:!0}},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.setAuthStateChangedListener(),t.next=4,this.setGoogleRedirectListener();case 4:this.loading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},j=O,L=Object(m["a"])(j,u,l,!1,null,null,null);L.options.__file="App.vue";var R=L.exports,S=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center"},[a("h4",{staticClass:"col-md-12"},[t._v("Welcome to something awesome! Please sign in.")]),a("div",{staticClass:"col-md-12 mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:t.googleRedirectSignIn}},[t._v("\n            Sign In With Google\n            "),a("i",{staticClass:"fa fa-google-plus-official"})])])])},P=[],D={mixins:[v]},E=D,I=Object(m["a"])(E,$,P,!1,null,null,null);I.options.__file="Login.vue";var N=I.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"text-center"},[t._v("Welcome to Free Books! This is your dashboard.")]),a("h4",{staticClass:"text-center"},[t._v("Under construction.")])])}],G={},T=G,B=Object(m["a"])(T,M,U,!1,null,null,null);B.options.__file="Dashboard.vue";var W=B.exports;n["a"].use(S["a"]);var q=new S["a"]({routes:[{path:"/login",name:"login",component:N},{path:"/dashboard",name:"dashboard",component:W,meta:{requiresAuth:!0}}]});q.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})||a(),h()?a():a({path:"/login"})});var F=q;n["a"].config.productionTip=!1,n["a"].use(r["a"]),new n["a"]({router:F,render:function(t){return t(R)}}).$mount("#app")},8958:function(t,e,a){},a2fd:function(t,e,a){"use strict";var n=a("ee62"),r=a.n(n);r.a},ee62:function(t,e,a){}});
//# sourceMappingURL=app.fc21f33c.js.map