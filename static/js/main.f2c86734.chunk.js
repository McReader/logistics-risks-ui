(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){e.exports=a(357)},183:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),i=a.n(c),o=(a(183),a(58)),u=a(50),l=a(10),s=a.n(l),m=a(19),p=a(68),f=a(174),d=a(31),b=a(32),v=a(89),h=a(175);p.a.plugin(f.a);var g=function(e){var t=e.dbUrl,a=new p.a("".concat(t,"/risks"));return{getList:function(){return a.allDocs({include_docs:!0})},getByCompanyId:function(){var e=Object(m.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(v.a)(Object(d.a)(Object(b.a)("docs")),h.a),e.abrupt("return",a.find({selector:{companyId:t}}).then(n));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),saveItem:function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.post(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateItem:function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.put(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},E=a(30);function j(e){return e.toISOString()}var O=function(e){var t=e.companyId;return{value:e.value,companyId:t,createdDate:j(new Date),lastUpdatedDate:null}},w=function(e,t){var a=e.value;return Object(E.a)({},t,{value:a,lastUpdatedDate:j(new Date)})},y=(Object(d.a)(Object(b.a)("_id")),Object(d.a)(Object(b.a)("companyId"))),x=Object(d.a)(Object(b.a)("value")),C=function(e){var t,a=e.risksStore;return{calculate:function(){var e=Object(m.a)(s.a.mark(function e(n){var r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getByCompanyId(n);case 2:if(r=e.sent,i=10,o=100,i=Math.ceil(i),o=Math.floor(o),c=Math.floor(Math.random()*(o-i+1))+i,!r){e.next=9;break}return e.next=7,a.updateItem(w({value:c},r));case 7:e.next=11;break;case 9:return e.next=11,a.saveItem(O({value:c,companyId:n}));case 11:t&&t();case 12:case"end":return e.stop()}var i,o},e)}));return function(t){return e.apply(this,arguments)}}(),getList:function(){return a.getList()},subscribe:function(e){t=e},unsubscribe:function(){t=null}}},k=a(64),S=a(88),D=a(41),L=a(165),I=a.n(L),B=a(162),R=a.n(B),N=a(163),M=a.n(N),W=a(38),P=a.n(W),U=a(70),Y=a.n(U),T=a(164),q=a.n(T),A=a(108),F=a.n(A),_=a(160),G=a.n(_),z=a(158),J=a.n(z),V=a(6),H=a.n(V);var X=function(){localStorage.removeItem("isAuthenticated")},$=Object(n.createContext)({openMenu:null});function K(e){var t=e.classes,a=e.children,c=e.history,i=Object(n.useState)(!1),o=Object(k.a)(i,2),u=o[0],l=o[1];return r.a.createElement($.Provider,{value:{openMenu:function(){l(!0)}}},r.a.createElement(J.a,{open:u,onClose:function(){return l(!1)}},r.a.createElement(F.a,{className:t.list},r.a.createElement(G.a,{button:!0,onClick:function(){X(),c.replace({pathname:"/login"})}},"Logout"))),a)}K.defaultProps={open:!1};var Q=Object(u.f)(H()({list:{width:"250px"}})(K));function Z(e){var t=e.classes,a=e.title,c=Object(n.useContext)($).openMenu;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{position:"static"},r.a.createElement(M.a,null,r.a.createElement(Y.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:c},r.a.createElement(q.a,null)),r.a.createElement(P.a,{variant:"h6",color:"inherit",className:t.title},a))),r.a.createElement(Q,null))}Z.defaultProps={title:"Logistics Risks Calculator"};var ee=Object(D.withStyles)(function(e){return{title:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},buttonIconLeft:{marginRight:e.spacing.unit}}})(Z),te=a(8),ae=a.n(te);var ne=Object(D.withStyles)({root:{display:"flex",flexFlow:"column nowrap",flexGrow:1,height:"100%"}})(function(e){var t=e.className,a=e.classes,n=e.children;return r.a.createElement("div",{className:ae()(a.root,t)},n)});function re(e){var t=e.appBar,a=e.className,n=e.classes,c=e.children,i=e.isLoading;return r.a.createElement(ne,{className:a},t,r.a.createElement("div",{className:n.gridContainer},i?r.a.createElement(I.a,{className:n.progress}):c))}re.defaultProps={appBar:r.a.createElement(ee,null),isLoading:!1};var ce=Object(D.withStyles)({gridContainer:{display:"flex",flexGrow:1,maxHeight:"100%",overflow:"auto"},progress:{alignSelf:"center",margin:"auto"}})(re),ie=a(169),oe=a.n(ie),ue=a(171),le=a.n(ue),se=a(39),me=a.n(se),pe=a(170),fe=a.n(pe),de=a(85),be=a.n(de),ve=a(172),he=a.n(ve),ge=a(67),Ee=a.n(ge),je=a(173),Oe=a.n(je),we=Object(d.a)(Object(b.a)("_id")),ye=Object(d.a)(Object(b.a)("name")),xe=Object(d.a)(Object(b.a)("foundationDate")),Ce=function(e,t){return t.find(function(t){return y(t)===e})},ke=a(3),Se=a.n(ke),De=(Se.a.shape({charterCapital:Se.a.number.isRequired,_id:Se.a.string.isRequired,name:Se.a.string.isRequired,lastUpdated:Se.a.instanceOf(Date),foundationDate:Se.a.string.isRequired}),a(366)),Le=a(114),Ie=a.n(Le),Be=a(168),Re=a.n(Be),Ne=a(167),Me=a.n(Ne),We=a(166),Pe=a.n(We);function Ue(e){return Pe()(e,"MM/DD/YYYY")}var Ye={tableCellRisk:{backgroundColor:function(e){var t=e.risk;return t?function(e){return x(e)>50}(t)?"red":"green":null}}};var Te=Object(De.a)(Ye)(function(e){var t=e.classes,a=e.company,n=e.onRecalculate,c=e.risk,i=we(a);return r.a.createElement(be.a,null,r.a.createElement(me.a,{component:"th",scope:"row"},ye(a)),r.a.createElement(me.a,{align:"center",classes:{root:t.tableCellRisk}},c?"".concat(x(c),"%"):"-"),r.a.createElement(me.a,{align:"center"},Ue(xe(a))),r.a.createElement(me.a,{align:"right"},r.a.createElement(Ie.a,{title:"Edit"},r.a.createElement(o.b,{to:"/company/".concat(we(a))},r.a.createElement(Y.a,{"aria-label":"Recalculate"},r.a.createElement(Me.a,{fontSize:"small"})))),r.a.createElement(Ie.a,{title:"Recalculate"},r.a.createElement(Y.a,{"aria-label":"Recalculate",onClick:function(){return n(i)}},r.a.createElement(Re.a,{fontSize:"small"})))))});function qe(e){var t=e.classes,a=e.companies,n=e.onAddButtonClick,c=e.onRecalculate,i=e.risks;return r.a.createElement(Ee.a,{className:t.root},r.a.createElement(oe.a,{className:t.table},r.a.createElement(fe.a,null,r.a.createElement(be.a,null,r.a.createElement(me.a,null,"Company name"),r.a.createElement(me.a,{align:"center"},"Risk"),r.a.createElement(me.a,{align:"center"},"Foundation date"),r.a.createElement(me.a,null))),r.a.createElement(le.a,null,a.map(function(e){var t=we(e);return r.a.createElement(Te,{company:e,key:t,onRecalculate:c,risk:Ce(t,i)})}))),r.a.createElement(he.a,{className:t.fab,color:"primary",onClick:n},r.a.createElement(Oe.a,null)))}qe.defaultProps={companies:[],risks:[]};var Ae=Object(D.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto"},table:{minWidth:700},fab:{position:"absolute",bottom:4*e.spacing.unit,right:4*e.spacing.unit}}})(qe),Fe=Object(n.createContext)({services:{}}),_e=Object(d.a)(Object(b.a)("rows")),Ge=Object(S.a)(Object(d.a)(Object(b.a)("doc"))),ze=Object(v.a)(_e,Ge);var Je=function(e){var t=e.history,a=Object(n.useState)({companies:[],isLoading:!1,risks:[]}),c=Object(k.a)(a,2),i=c[0],o=c[1],u=Object(n.useContext)(Fe).services,l=u.companies,p=u.risks,f=function(){var e=Object(m.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o({isLoading:!0}),e.next=3,l.getCompanies();case 3:t=e.sent,o({companies:ze(t),isLoading:!1});case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(m.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getList();case 2:t=e.sent,o(function(e){return Object(E.a)({},e,{risks:ze(t)})});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return f(),p.subscribe(function(){d()}),d(),function(){p.unsubscribe()}},[]),r.a.createElement(Q,null,r.a.createElement(ce,{isLoading:i.isLoading},r.a.createElement(Ae,{companies:i.companies,onAddButtonClick:function(){t.push({pathname:"/company/"})},onRecalculate:function(e){p.calculate(e)},risks:i.risks})))},Ve=a(176),He=a(24),Xe=a.n(He);var $e=H()(function(e){return{gridContainer:{justifyContent:"center",paddingTop:4*e.spacing.unit},formContainer:{flex:1,maxWidth:"360px"}}})(function(e){var t=e.children,a=e.classes,n=e.isLoading,c=e.title,i=Object(Ve.a)(e,["children","classes","isLoading","title"]);return r.a.createElement(ce,Object.assign({},i,{classes:{gridContainer:a.gridContainer},isLoading:n}),r.a.createElement(Xe.a,{className:a.formContainer,container:!0,direction:"column",spacing:40},r.a.createElement(Xe.a,{component:P.a,item:!0,variant:"title"},c),r.a.createElement(Xe.a,{item:!0},n?null:t)))}),Ke=a(42),Qe=a(51),Ze=a.n(Qe),et=a(71),tt=a.n(et),at=a(109),nt=a.n(at),rt=function(e){return Boolean(e)?void 0:"Value is required"},ct=function(e){return nt()(new Date(e))?void 0:"Date should be in format MM/DD/YYYY"};function it(e){var t=e.company,a=e.onReset,c=e.onSubmit,i=Object(n.useMemo)(function(){return t?Object(E.a)({},t,{foundationDate:Ue(xe(t))}):t},[t]);return r.a.createElement(Ke.b,{initialValues:i,onSubmit:function(e){c(Object(E.a)({},e,{foundationDate:new Date(e.foundationDate),charterCapital:Number(e.charterCapital)}))}},function(e){var t=e.handleSubmit,n=e.submitting;return r.a.createElement(Xe.a,{component:"form",container:!0,direction:"column",onReset:a,onSubmit:t,spacing:40},r.a.createElement(Xe.a,{item:!0},r.a.createElement(Ke.a,{name:"name",validate:rt},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched;return r.a.createElement(Ze.a,Object.assign({},t,{autoFocus:!0,error:c&&Boolean(n),fullWidth:!0,helperText:c&&n,label:"Name"}))})),r.a.createElement(Xe.a,{item:!0},r.a.createElement(Ke.a,{name:"foundationDate",validate:function(e){return rt(e)||ct(e)}},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched;return r.a.createElement(Ze.a,Object.assign({},t,{error:c&&Boolean(n),fullWidth:!0,helperText:c&&n,label:"Foundation date",placeholder:"2/25/2012"}))})),r.a.createElement(Xe.a,{item:!0},r.a.createElement(Ke.a,{name:"charterCapital",validate:rt},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched;return r.a.createElement(Ze.a,Object.assign({},t,{error:c&&Boolean(n),fullWidth:!0,helperText:c&&n,label:"Charter capital",type:"number"}))})),r.a.createElement(Xe.a,{item:!0},r.a.createElement(Xe.a,{container:!0,justify:"flex-end",spacing:16},r.a.createElement(Xe.a,{item:!0},r.a.createElement(tt.a,{type:"reset"},"Cancel")),r.a.createElement(Xe.a,{item:!0},r.a.createElement(tt.a,{color:"primary",disabled:n,type:"submit",variant:"contained"},"Submit")))))})}var ot=function(e){var t=e.match,a=e.history,c=Object(n.useState)({company:null,isLoading:!0}),i=Object(k.a)(c,2),o=i[0],u=i[1],l=Object(n.useContext)(Fe).services.companies,p=t.params.id,f=o.company,d=o.isLoading,b=d?"":f.name,v=function(){var e=Object(m.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(function(e){return Object(E.a)({},e,{isLoading:!0})}),e.prev=1,e.next=4,l.getCompanyById(p);case 4:t=e.sent,u(function(e){return Object(E.a)({},e,{company:t})});case 6:return e.prev=6,u(function(e){return Object(E.a)({},e,{isLoading:!1})}),e.finish(6);case 9:case"end":return e.stop()}},e,null,[[1,,6,9]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){v()},[]);var h=r.a.createElement(ee,{title:d?"Please wait...":b}),g=function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.editCompany(f,t);case 2:a.replace({pathname:"/"});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Q,null,r.a.createElement($e,{appBar:h,isLoading:o.isLoading,title:"Edit ".concat(b)},r.a.createElement(it,{company:f,onReset:function(e){e.preventDefault(),a.replace({pathname:"/"})},onSubmit:g})))};var ut=function(e){var t=e.history,a=Object(n.useContext)(Fe).services.companies,c=r.a.createElement(ee,{title:"Create new company"}),i=function(){var e=Object(m.a)(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.createCompany(n);case 2:t.replace("/");case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Q,null,r.a.createElement($e,{appBar:c,title:"Create new company"},r.a.createElement(it,{onReset:function(e){e.preventDefault(),e.stopPropagation(),t.replace("/")},onSubmit:i})))},lt=function(e){var t=e.dbUrl,a=new p.a("".concat(t,"/companies"));return{getList:function(){return a.allDocs({include_docs:!0})},getById:function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.get(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),saveItem:function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.post(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateItem:function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.put(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},st=function(e){var t=e.companiesStore;return{createCompany:function(e){var a=function(e){var t=e.name,a=e.foundationDate;return{charterCapital:e.charterCapital,foundationDate:a,lastUpdatedDate:null,name:t,createdDate:j(new Date)}}(e);return t.saveItem(a)},editCompany:function(e,a){var n=function(e,t){var a=e.name,n=e.foundationDate,r=e.charterCapital;return Object(E.a)({},t,{charterCapital:r,foundationDate:n,lastUpdatedDate:j(new Date),name:a})}(a,e);return t.updateItem(n)},getCompanies:function(){return t.getList()},getCompanyById:function(e){return t.getById(e)}}},mt=a(83),pt=a(40),ft=a(86),dt=a(92),bt=a(62),vt=a(87),ht=a(91),gt=function(e){function t(e){return Object(ft.a)(this,t),Object(dt.a)(this,Object(bt.a)(t).call(this,'User "'.concat(e,"\" doesn't exist")))}return Object(vt.a)(t,e),t}(Object(ht.a)(Error)),Et=function(e){function t(){return Object(ft.a)(this,t),Object(dt.a)(this,Object(bt.a)(t).call(this,"Invalid password"))}return Object(vt.a)(t,e),t}(Object(ht.a)(Error));var jt=function(e){return new Promise(function(t,a){var n=e.login,r=e.password;"admin"===n?"admin"===r?(localStorage.setItem("isAuthenticated","true"),t()):a(new Et):a(new gt(n))})};function Ot(e){var t=e.className,a=e.onSubmit;return r.a.createElement(Ke.b,{onSubmit:a},function(e){var a=e.handleSubmit,n=e.submitError,c=e.submitting;return r.a.createElement(Xe.a,{alignContent:"center",className:t,component:"form",container:!0,onSubmit:a,spacing:40},n?r.a.createElement(Xe.a,{color:"error",component:P.a,item:!0,xs:12},n):null,r.a.createElement(Xe.a,{item:!0,xs:12},r.a.createElement(Ke.a,{name:"login",validate:rt},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched,i=a.submitError;return r.a.createElement(Ze.a,Object.assign({},t,{autoFocus:!0,error:c&&Boolean(n||i),fullWidth:!0,helperText:c&&(n||i),placeholder:"Login"}))})),r.a.createElement(Xe.a,{item:!0,xs:12},r.a.createElement(Ke.a,{name:"password",validate:rt},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched;return r.a.createElement(Ze.a,Object.assign({},t,{error:c&&Boolean(n),fullWidth:!0,helperText:c&&n,placeholder:"Password",type:"password"}))})),r.a.createElement(Xe.a,{item:!0,xs:12},r.a.createElement(tt.a,{color:"primary",disabled:c,fullWidth:!0,type:"submit",variant:"contained"},"Submit")))})}Ot.defaultProps={className:""};var wt=Ot;var yt=H()(function(e){return{root:{paddingTop:8*e.spacing.unit},form:{margin:"".concat(8*e.spacing.unit,"px auto"),maxWidth:"360px"}}})(function(e){var t=e.classes,a=e.history,n=function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,jt(t);case 3:a.replace({pathname:"/"}),e.next=15;break;case 6:if(e.prev=6,e.t0=e.catch(0),!(e.t0 instanceof gt)){e.next=12;break}return e.abrupt("return",{login:e.t0.message});case 12:if(!(e.t0 instanceof Et)){e.next=14;break}return e.abrupt("return",Object(mt.a)({},pt.a,"Incorrect credentials"));case 14:throw e.t0;case 15:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ne,{classes:{root:t.root}},r.a.createElement(P.a,{align:"center",paragraph:!1,variant:"title"},"Welcome"),r.a.createElement(P.a,{align:"center",color:"textSecondary"},"to"),r.a.createElement(P.a,{align:"center",color:"primary",variant:"headline"},"Logistics Risks Calculator"),r.a.createElement(wt,{className:t.form,onSubmit:n}))});var xt=function(){return"true"===localStorage.getItem("isAuthenticated")};var Ct=function(e){var t=e.children;return xt()?t:r.a.createElement(u.a,{to:{pathname:"/login"}})},kt=(a(356),"https://609ce380-698c-48ed-a70f-6eefc8446f54-bluemix:ee5cf67260942c15b000fceeede84f7762628d5fbdf85a83d26bf4225656e333@609ce380-698c-48ed-a70f-6eefc8446f54-bluemix.cloudantnosqldb.appdomain.cloud"),St=st({companiesStore:lt({dbUrl:kt})}),Dt=C({risksStore:g({dbUrl:kt})});var Lt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Fe.Provider,{value:{services:{companies:St,risks:Dt}}},r.a.createElement(o.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/login",component:yt}),r.a.createElement(Ct,null,r.a.createElement(u.b,{exact:!0,path:"/",component:Je}),r.a.createElement(u.b,{exact:!0,path:"/company/",component:ut}),r.a.createElement(u.b,{path:"/company/:id",component:ot}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[178,1,2]]]);
//# sourceMappingURL=main.f2c86734.chunk.js.map