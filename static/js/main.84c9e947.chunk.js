(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var r,a=n(133),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a53e0f65-c3ac-4834-99fc-a88db669947f"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t))},followUsers:function(e){return s.post("follow/".concat(e))},unfollowUsers:function(e){return s.delete("follow/".concat(e))}},i={getProfile:function(e){return s.get("profile/".concat(e))},getStatus:function(e){return s.get("/profile/status/".concat(e))},updateStatus:function(e){return s.put("/profile/status",{status:e})}},o={authMe:function(){return s.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return s.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return s.delete("/auth/login")}};!function(e){e[e.success=0]="success",e[e.error=1]="error",e[e.captcha=10]="captcha"}(r||(r={}))},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(31),a=n(4),s=n(18),c={dialogsData:[{id:Object(s.a)(),name:"Marta"},{id:Object(s.a)(),name:"Sasha"},{id:Object(s.a)(),name:"Vera"},{id:Object(s.a)(),name:"Anton"},{id:Object(s.a)(),name:"Vanya"}],messagesData:[{id:Object(s.a)(),messageContent:"Hello"},{id:Object(s.a)(),messageContent:"How are you?"},{id:Object(s.a)(),messageContent:"Yo"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogsPage/ADD-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:Object(s.a)(),messageContent:t.newMessageText}])});case"dialogsPage/REMOVE-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messagesData:Object(r.a)(e.messagesData.filter((function(e){return e.id!==t.messageId})))});default:return e}},o=function(e){return{type:"dialogsPage/ADD-MESSAGE",newMessageText:e}}},130:function(e,t,n){e.exports={news:"News_news__1E9ra"}},131:function(e,t,n){e.exports={music:"Music_music__P7Nrm"}},132:function(e,t,n){e.exports={settings:"Settings_settings__hPAd8"}},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__Sr8R7"}},14:function(e,t,n){e.exports={nav:"Navbar_nav__6-fH1",item:"Navbar_item__3Ldnh",activeLink:"Navbar_activeLink__uFs2O"}},167:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(64),c=n.n(s),i=(n(167),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),o=n(36),u=n(37),l=n(40),d=n(39),j=n(89),f=n.n(j),p=n(16),b=n(14),g=n.n(b),O=n(1),h=function(){return Object(O.jsxs)("nav",{className:g.a.nav,children:[Object(O.jsx)("div",{className:g.a.item,children:Object(O.jsx)(p.b,{to:"/profile",activeClassName:g.a.activeLink,children:"Profile"})}),Object(O.jsx)("div",{className:"".concat(g.a.item," ").concat(g.a.active),children:Object(O.jsx)(p.b,{to:"/dialogs",activeClassName:g.a.activeLink,children:"Messages"})}),Object(O.jsx)("div",{className:"".concat(g.a.item," ").concat(g.a.active),children:Object(O.jsx)(p.b,{to:"/users",activeClassName:g.a.activeLink,children:"Users"})}),Object(O.jsx)("div",{className:g.a.item,children:Object(O.jsx)(p.b,{to:"/news",activeClassName:g.a.activeLink,children:"News"})}),Object(O.jsx)("div",{className:g.a.item,children:Object(O.jsx)(p.b,{to:"/music",activeClassName:g.a.activeLink,children:"Music"})}),Object(O.jsx)("div",{className:g.a.item,children:Object(O.jsx)(p.b,{to:"/settings",activeClassName:g.a.activeLink,children:"Settings"})})]})},m=n(130),v=n.n(m),x=function(){return Object(O.jsx)("div",{className:v.a.news,children:"News"})},P=n(131),w=n.n(P),S=function(){return Object(O.jsx)("div",{className:w.a.music,children:"Music"})},C=n(132),_=n.n(C),E=function(){return Object(O.jsx)("div",{className:_.a.settings,children:"Settings"})},y=n(11),I=n(20),N=n(9),T=n.n(N),k=n(15),L=n(31),U=n(4),A=n(12),F=function(e,t,n){return e.map((function(e){return e.id===t?Object(U.a)(Object(U.a)({},e),{},{followed:n}):e}))},D={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},R=function(e){return{type:"usersPage/FOLLOW",userId:e}},M=function(e){return{type:"usersPage/UNFOLLOW",userId:e}},z=function(e){return{type:"usersPage/SET-CURRENT-PAGE",currentPage:e}},G=function(e){return{type:"usersPage/TOGGLE-IS-FETCHING",value:e}},W=function(e,t){return{type:"usersPage/TOGGLE-IS-FOLLOWING-PROGRESS",inProgress:e,userId:t}},H=function(){var e=Object(k.a)(T.a.mark((function e(t,n,r,a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(W(!0,n)),e.next=3,r(n);case 3:e.sent.data.resultCode===A.a.success&&t(a(n)),t(W(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),V=n(128),B=n(69),q=n.n(B),X=function(e){for(var t=e.totalItemsCount,n=e.currentPage,a=e.pageSize,s=e.onPageChanged,c=e.portionSize,i=Math.ceil(t/a),o=[],u=1;u<=i;u++)o.push(u);var l=Object(r.useState)(1),d=Object(V.a)(l,2),j=d[0],f=d[1],p=Math.ceil(i/c),b=(j-1)*c+1,g=j*c;return Object(O.jsxs)("div",{className:q.a.pagination,children:[j>1&&Object(O.jsx)("button",{onClick:function(){return f(j-1)},children:"PREV"}),o.filter((function(e){return e>=b&&e<=g})).map((function(e){return Object(O.jsx)("span",{className:n===e?q.a.selectedPage:q.a.pageNumber,onClick:function(t){return s(e)},children:e},e)})),p>j&&Object(O.jsx)("button",{onClick:function(){return f(j+1)},children:"NEXT"})]})},Y=n.p+"static/media/user.4409fc97.png",Z=n(134),J=n.n(Z),K=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(p.b,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{src:null!==t.photos.small?t.photos.small:Y,className:J.a.userPhoto,alt:""})})}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return a(t.id)},children:"unFollow"}):Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)},children:"follow"})})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.status})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:"u.location.country"}),Object(O.jsx)("div",{children:"u.location.city"})]})]})},Q=function(e){var t=e.totalUsersCount,n=e.users,r=e.currentPage,a=e.pageSize,s=e.followingInProgress,c=e.follow,i=e.onPageChanged,o=e.unfollow;return Object(O.jsxs)("div",{children:[Object(O.jsx)(X,{currentPage:r,onPageChanged:i,pageSize:a,totalItemsCount:t,portionSize:10}),Object(O.jsx)("div",{children:n.map((function(e){return Object(O.jsx)(K,{user:e,followingInProgress:s,follow:c,unfollow:o},e.id)}))})]})},$=n(41),ee=n(10),te=function(e){return e.usersPage.users},ne=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},se=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props;(0,n.requestUsers)(t,n.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)($.a,{}):null,Object(O.jsx)(Q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,toggleIsFollowingProgress:this.props.toggleIsFollowingProgress})]})}}]),n}(r.Component),oe=Object(ee.d)(Object(I.b)((function(e){return{users:te(e),pageSize:ne(e),totalUsersCount:re(e),currentPage:ae(e),isFetching:se(e),followingInProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(k.a)(T.a.mark((function t(n){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=A.d.followUsers.bind(A.d),H(n,e,r,R);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(k.a)(T.a.mark((function t(n){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=A.d.unfollowUsers.bind(A.d),H(n,e,r,M);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:z,toggleIsFollowingProgress:W,requestUsers:function(e,t){return function(){var n=Object(k.a)(T.a.mark((function n(r){var a;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(G(!0)),r(z(e)),n.next=4,A.d.getUsers(e,t);case 4:a=n.sent,r(G(!1)),r({type:"usersPage/SET-USERS",users:a.data.items}),r({type:"usersPage/SET-TOTAL-USERS-COUNT",totalCount:a.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ie),ue=n(92),le=n.n(ue),de=n.p+"static/media/Logo_header.8aaf41b6.png",je=function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(O.jsxs)("header",{className:le.a.header,children:[Object(O.jsx)("img",{src:de,alt:""}),Object(O.jsx)("div",{className:le.a.loginBlock,children:t?Object(O.jsxs)("div",{children:[n," ",Object(O.jsx)("button",{onClick:r,children:"Log out"})]}):Object(O.jsx)(p.b,{to:"/login",children:"Login"})})]})},fe=n(45),pe={userId:null,email:null,login:null,captcha:!1,isAuth:!1},be=function(e,t,n,r,a){return{type:"auth/SET-USER-DATA",payload:{userId:e,email:t,login:n,captcha:r,isAuth:a}}},ge=function(){return function(){var e=Object(k.a)(T.a.mark((function e(t){var n,r,a,s,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.b.authMe();case 2:return(n=e.sent).data.resultCode===A.a.success&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(be(a,s,c,!0,!0))),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(je,Object(U.a)({},this.props))}}]),n}(r.Component),he=Object(I.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(k.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.b.logout();case 2:e.sent.data.resultCode===A.a.success&&t(be(null,null,null,!1,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),me=n(126),ve=n(127),xe=n(65),Pe=n(73),we=n(53),Se=n.n(we),Ce=Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(O.jsxs)("form",{onSubmit:t,children:[Object(O.jsx)("div",{children:Object(O.jsx)(me.a,{placeholder:"Email",name:"email",component:xe.a,validate:[Pe.b]})}),Object(O.jsx)("div",{children:Object(O.jsx)(me.a,{placeholder:"Password",name:"password",component:xe.a,validate:[Pe.b],type:"password"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(me.a,{type:"checkbox",name:"rememberMe",component:xe.a})," remember me"]}),n&&Object(O.jsx)("div",{className:Se.a.formSummaryError,children:n}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Login"})})]})})),_e=Object(I.b)((function(e){return{captcha:e.auth.captcha,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(k.a)(T.a.mark((function a(s){var c;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,A.b.login(e,t,n,r);case 2:(c=a.sent).data.resultCode===A.a.success?s(ge()):c.data.messages.length?s(Object(fe.a)("login",{_error:c.data.messages[0]})):s(Object(fe.a)("login",{_error:"Some error"}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuth;e.captcha,e.children;return n?Object(O.jsx)(y.a,{to:"/profile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)(Ce,{onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}})]})})),Ee={initialized:!1},ye=n(136),Ie=n(95),Ne=n(125),Te={},ke=n(129),Le=Object(ee.c)({profilePage:Ie.d,dialogsPage:Ne.b,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sidebar/":return Object(U.a)({},e);default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"usersPage/FOLLOW":return Object(U.a)(Object(U.a)({},e),{},{users:F(e.users,t.userId,!0)});case"usersPage/UNFOLLOW":return Object(U.a)(Object(U.a)({},e),{},{users:F(e.users,t.userId,!1)});case"usersPage/SET-USERS":return Object(U.a)(Object(U.a)({},e),{},{users:t.users});case"usersPage/SET-CURRENT-PAGE":return Object(U.a)(Object(U.a)({},e),{},{currentPage:t.currentPage});case"usersPage/SET-TOTAL-USERS-COUNT":return Object(U.a)(Object(U.a)({},e),{},{totalUsersCount:t.totalCount});case"usersPage/TOGGLE-IS-FETCHING":return Object(U.a)(Object(U.a)({},e),{},{isFetching:t.value});case"usersPage/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(U.a)(Object(U.a)({},e),{},{followingInProgress:t.inProgress?[].concat(Object(L.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(U.a)(Object(U.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED-SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{initialized:!0});default:return e}},form:ke.a}),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,Ae=Object(ee.e)(Le,Ue(Object(ee.a)(ye.a)));window.__store__=Ae;var Fe=function(e){return Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)($.a,{}),children:e})},De=a.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),Re=a.a.lazy((function(){return n.e(4).then(n.bind(null,302)).then((function(e){return{default:e.DialogsContainer}}))})),Me=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:f.a.appWrapper,children:[Object(O.jsx)(he,{}),Object(O.jsx)(h,{}),Object(O.jsxs)("div",{className:f.a.appWrapperContent,children:[Object(O.jsx)(y.b,{exact:!0,path:"/profile/:userId?",render:function(){return Fe(Object(O.jsx)(De,{}))}}),Object(O.jsx)(y.b,{exact:!0,path:"/dialogs",render:function(){return Fe(Object(O.jsx)(Re,{}))}}),Object(O.jsx)(y.b,{exact:!0,path:"/users",render:function(){return Fe(Object(O.jsx)(oe,{}))}}),Object(O.jsx)(y.b,{exact:!0,path:"/news",render:function(){return Object(O.jsx)(x,{})}}),Object(O.jsx)(y.b,{exact:!0,path:"/music",render:function(){return Object(O.jsx)(S,{})}}),Object(O.jsx)(y.b,{exact:!0,path:"/settings",render:function(){return Object(O.jsx)(E,{})}}),Object(O.jsx)(y.b,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(_e,{})}})]})]}):Object(O.jsx)($.a,{})}}]),n}(r.Component),ze=Object(ee.d)(y.f,Object(I.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(k.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(ge()),Promise.all([n]).then((function(){t({type:"app/INITIALIZED-SUCCESS"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Me),Ge=function(){return Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(p.a,{children:Object(O.jsx)(I.a,{store:Ae,children:Object(O.jsx)(ze,{})})})})};c.a.render(Object(O.jsx)(Ge,{}),document.getElementById("root")),i()},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var r=n.p+"static/media/preloader.5665744c.svg",a=n(1),s=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{src:r,alt:""})})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2Z8L4",error:"FormsControls_error__BtpDs",formSummaryError:"FormsControls_formSummaryError__2qS17"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(4),a=n(88),s=(n(0),n(53)),c=n.n(s),i=n(1),o=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(s&&c.a.error),children:[Object(i.jsx)("div",{children:a}),s&&Object(i.jsx)("span",{children:r})]})},u=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},69:function(e,t,n){e.exports={selectedPage:"Pagination_selectedPage__2L2RV",pagination:"Pagination_pagination__2St_3",pageNumber:"Pagination_pageNumber__3_VVs"}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},89:function(e,t,n){e.exports={appWrapper:"App_appWrapper__1upY6",appWrapperContent:"App_appWrapperContent__1w-fS"}},92:function(e,t,n){e.exports={header:"Header_header__tmv2U",loginBlock:"Header_loginBlock__1H5dx"}},95:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return g}));var r=n(9),a=n.n(r),s=n(15),c=n(31),i=n(4),o=n(18),u=n(12),l={postsData:[{id:Object(o.a)(),message:"Hello",likesCount:11},{id:Object(o.a)(),message:"Buy",likesCount:15},{id:Object(o.a)(),message:"How are you?",likesCount:7},{id:Object(o.a)(),message:"I am fine, and you?",likesCount:5}],profile:null,status:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profilePage/ADD-POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[{id:Object(o.a)(),message:t.newPostText,likesCount:0}])});case"profilePage/SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profilePage/SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profilePage/REMOVE-POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:Object(c.a)(e.postsData.filter((function(e){return e.id!==t.postId})))});default:return e}},j=function(e){return{type:"profilePage/ADD-POST",newPostText:e}},f=function(e){return{type:"profilePage/SET-STATUS",status:e}},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:"profilePage/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},[[291,1,2]]]);
//# sourceMappingURL=main.84c9e947.chunk.js.map