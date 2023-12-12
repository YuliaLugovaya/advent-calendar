"use strict";(self.webpackChunkadvent_calendar=self.webpackChunkadvent_calendar||[]).push([[673],{517:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var o=n(2791),r=n(9434),a=n(4554),i=n(4294),l={calendarWrapper:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"},calendarContainer:{display:"flex",flexWrap:"wrap",maxWidth:"1200px",justifyContent:{xs:"center",lg:"start"},m:"0 auto",gap:"10px",pt:{xs:"100px",md:"200px"}},calendarButton:{width:"300px",padding:"20px 30px",m:"60px 0",fontSize:{xs:16,md:18},fontWeight:700,borderRadius:"6px",textTransform:"none"}},s=n(1413),c=n(9439),d=n(890),p=n(2169),x=n(7613),m=n(4942),u=n(3366),f=n(7462),h=n(3733),g=n(4419),b=n(2065),v=n(7630),y=n(3736),j=n(7077),C=n(4036),Z=n(5878),w=n(1217);function S(e){return(0,w.Z)("MuiIconButton",e)}var k,T=(0,Z.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),I=n(184),D=["edge","children","className","color","disabled","disableFocusRipple","size"],E=(0,v.ZP)(j.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,C.Z)(n.color))],n.edge&&t["edge".concat((0,C.Z)(n.edge))],t["size".concat((0,C.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,f.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,b.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t,n=e.theme,o=e.ownerState,r=null==(t=(n.vars||n).palette)?void 0:t[o.color];return(0,f.Z)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&(0,f.Z)({color:null==r?void 0:r.main},!o.disableRipple&&{"&:hover":(0,f.Z)({},r&&{backgroundColor:n.vars?"rgba(".concat(r.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,b.Fq)(r.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===o.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,m.Z)({},"&.".concat(T.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),R=o.forwardRef((function(e,t){var n=(0,y.Z)({props:e,name:"MuiIconButton"}),o=n.edge,r=void 0!==o&&o,a=n.children,i=n.className,l=n.color,s=void 0===l?"default":l,c=n.disabled,d=void 0!==c&&c,p=n.disableFocusRipple,x=void 0!==p&&p,m=n.size,b=void 0===m?"medium":m,v=(0,u.Z)(n,D),j=(0,f.Z)({},n,{edge:r,color:s,disabled:d,disableFocusRipple:x,size:b}),Z=function(e){var t=e.classes,n=e.disabled,o=e.color,r=e.edge,a=e.size,i={root:["root",n&&"disabled","default"!==o&&"color".concat((0,C.Z)(o)),r&&"edge".concat((0,C.Z)(r)),"size".concat((0,C.Z)(a))]};return(0,g.Z)(i,S,t)}(j);return(0,I.jsx)(E,(0,f.Z)({className:(0,h.Z)(Z.root,i),centerRipple:!0,focusRipple:!x,disabled:d,ref:t,ownerState:j},v,{children:a}))})),z=["title","titleId"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},F.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function A(e,t){var n=e.title,r=e.titleId,a=B(e,z);return o.createElement("svg",F({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,k||(k=o.createElement("path",{d:"M15 5L5 15M5 5L15 15",stroke:"#2D2D2D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var O=o.forwardRef(A),L=(n.p,{modalContainer:{display:"flex",flexDirection:"column",alignItems:"center",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"100%",md:"auto"},bgcolor:"#FFFFFF",borderRadius:{xs:"0",md:"10px"},p:{xs:"35px 20px 40px 20px",md:"3% 15% 6% 15%",lg:"3% 10% 5% 10%"},outline:"none"},modalContent:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:{xs:"0"}},modalTitle:{mt:"20px",fontSize:{xs:"1.5rem",md:"2rem"},color:"#c29463",textAlign:"center"},modalDescription:{m:{xs:"20px 0 40px 0",md:"30px 0 50px 0"},fontSize:{xs:"1.1rem",md:"1.3rem"},color:"#000000",textAlign:"justify"},modalButton:{width:{xs:"300px",md:"450px"},padding:"20px 30px",fontSize:{xs:16,md:18},fontWeight:700,borderRadius:"6px",textTransform:"none"},modalIconClose:{position:"absolute",top:8,right:8},modalBall:{width:{xs:"200px",md:"250px"},height:{xs:"200px",md:"250px"},m:{xs:"10px 0",md:"20px 0"}},modalLights:{width:"75%",textAlign:"center"},modalCompleteContainer:{display:"flex",alignItems:"end",gap:"10px",m:{xs:"20px 0 40px 0",md:"30px 0 50px 0"}},modalCompleteDescription:{fontSize:{xs:"1.1rem",md:"1.3rem"},color:"#000000",textAlign:"justify"},modalComplete:{width:"50px",height:"50px"}}),_=n(7329),M=n(2261),W=n(1087),P=n(127),N=n.p+"static/media/christmas-lights.a289400da9a8a9e8349a.png",K=n.p+"static/media/complete.ad33d8041b978a9b94bd.png",q=function(e){var t=e.openModal,n=e.modalClose,l=e.title,s=e.task,m=e.ball,u=e.id,f=e.date,h=e.text,g=(0,o.useState)(!1),b=(0,c.Z)(g,2),v=b[0],y=b[1],j=(0,o.useState)(!1),C=(0,c.Z)(j,2),Z=C[0],w=C[1],S=new Date,k=new Date(f)<=S,T=(0,r.I0)(),D=(0,r.v9)((function(e){return e.task.completedTasks})),E=(0,r.v9)((function(e){return e.task.isCompleted[u]||!1}));return(0,I.jsx)(x.Z,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsxs)(a.Z,{sx:L.modalContainer,children:[(0,I.jsx)(p.Z,{sx:L.modalLights,component:"img",image:N,alt:"lights"}),v?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(R,{"aria-label":"Close",sx:L.modalIconClose,onClick:n,children:(0,I.jsx)(O,{})}),(0,I.jsx)(p.Z,{sx:L.modalBall,component:"img",image:m,alt:"Ball"}),(0,I.jsx)(d.Z,{sx:L.modalDescription,children:"\u0417\u0434\u043e\u0440\u043e\u0432\u043e! \u0412 \u043d\u0430\u0433\u0440\u0430\u0434\u0443 \u0437\u0430 \u0441\u0442\u0430\u0440\u0430\u043d\u0438\u044f \u0434\u0435\u0440\u0436\u0438 \u0451\u043b\u043e\u0447\u043d\u044b\u0439 \u0448\u0430\u0440\u0438\u043a."}),(0,I.jsx)(W.rU,{to:P._.home.tree,children:(0,I.jsx)(i.Z,{sx:L.modalButton,className:"secondary",children:"\u041d\u0430\u0440\u044f\u0434\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u044e\u044e \u0451\u043b\u043e\u0447\u043a\u0443"})})]}):E?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(R,{"aria-label":"Close",sx:L.modalIconClose,onClick:n,children:(0,I.jsx)(O,{})}),(0,I.jsxs)(a.Z,{sx:L.modalContent,children:[(0,I.jsx)(d.Z,{sx:L.modalTitle,children:l}),(0,I.jsxs)(a.Z,{sx:L.modalCompleteContainer,children:[(0,I.jsx)(d.Z,{sx:L.modalCompleteDescription,children:"\u042d\u0442\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0443\u0436\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"}),(0,I.jsx)(p.Z,{sx:L.modalComplete,component:"img",image:K,alt:"Complete"})]}),Z&&(0,I.jsx)(d.Z,{sx:L.modalDescription,children:s}),(0,I.jsx)(i.Z,{sx:L.modalButton,className:"secondary",onClick:function(){w(!Z)},children:Z?"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435":"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(R,{"aria-label":"Close",sx:L.modalIconClose,onClick:n,children:(0,I.jsx)(O,{})}),(0,I.jsx)(a.Z,{sx:L.modalContent,children:k?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(d.Z,{sx:L.modalTitle,children:l}),(0,I.jsx)(d.Z,{sx:L.modalDescription,children:s}),(0,I.jsx)(a.Z,{children:(0,I.jsx)(i.Z,{onClick:function(){var e;m&&(T((0,_.Y0)(m)),y(!0)),D.includes(u)||(T((e=u,{type:M.u.ADD_COMPLETED_TASK,payload:e})),T(function(e){return{type:M.u.IS_COMPLETED_TASK,payload:e}}({id:u,value:!0})))},sx:L.modalButton,className:"primary",children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e? \u041f\u043e\u043b\u0443\u0447\u0438 \u0441\u044e\u0440\u043f\u0440\u0438\u0437!"})})]}):(0,I.jsxs)(d.Z,{sx:L.modalDescription,children:["\u042d\u0442\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e ",h," \u0434\u0435\u043a\u0430\u0431\u0440\u044f. \u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043d\u0435\u043c\u043d\u043e\u0436\u043a\u043e \u043f\u043e\u0434\u043e\u0436\u0434\u0430\u0442\u044c!"]})})]})]})})},Q={itemWrapper:{minWidth:"160px",display:"flex"},itemContainer:{display:"flex",justifyContent:"space-between",alignItems:"start",width:"100%",height:"140px",gap:"10px"},itemText:{position:"relative",bottom:"10px",left:"10px",fontSize:"3.8rem",color:"#FFFFFF"},itemIcon:{alignSelf:"end",width:"65px",p:"5px"}},U=function(e){var t=e.icon,n=e.title,l=e.text,x=e.task,m=e.ball,u=e.colorBg,f=e.id,h=e.date,g=(0,o.useState)(!1),b=(0,c.Z)(g,2),v=b[0],y=b[1],j=(0,r.v9)((function(e){return e.task.isCompleted[f]||!1}));return(0,I.jsxs)(a.Z,{sx:Q.itemWrapper,children:[(0,I.jsxs)(i.Z,{onClick:function(){return y(!0)},sx:(0,s.Z)((0,s.Z)({},Q.itemContainer),{},{bgcolor:j?"#434a3855":u,"&:hover":{bgcolor:j?"#434a3855":"".concat(u,"77")}}),children:[(0,I.jsx)(d.Z,{sx:Q.itemText,children:l}),(0,I.jsx)(p.Z,{sx:Q.itemIcon,component:"img",image:t,alt:"Icon"})]}),(0,I.jsx)(q,{openModal:v,modalClose:function(){return y(!1)},title:n,task:x,ball:m,id:f,date:h,text:l})]})},Y=n(6135),V=function(){var e=(0,r.v9)((function(e){return e.edit.tasks})),t=(0,r.I0)();return(0,I.jsxs)(a.Z,{sx:l.calendarWrapper,children:[(0,I.jsx)(a.Z,{sx:l.calendarContainer,children:e.map((function(e){return(0,I.jsx)(U,{icon:e.icon,title:e.title,text:e.text,task:e.task,ball:e.ball,colorBg:e.colorBg,id:e.id,date:e.date},e.id)}))}),(0,I.jsx)(i.Z,{sx:l.calendarButton,className:"secondary",onClick:function(){window.localStorage.clear(),t((0,_.QI)()),t({type:M.u.RESET_TASK_STATE}),t((0,Y.h)()),window.scrollTo({top:0,behavior:"smooth"})},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430!"})]})},G=function(){return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(V,{})})}},7329:function(e,t,n){n.d(t,{QI:function(){return l},Y0:function(){return r},ny:function(){return i},oP:function(){return a}});var o=n(7745),r=function(e){return{type:o.M.ADD_BALL,payload:e}},a=function(e){return{type:o.M.ADD_TREE_BALL,payload:e}},i=function(e){return{type:o.M.REMOVE_BALL,payload:e}},l=function(){return{type:o.M.RESET_BALL_STATE}}},6135:function(e,t,n){n.d(t,{h:function(){return a},x:function(){return r}});var o=n(2029),r=function(e){return{type:o.k.UPDATE_TASK,payload:e}},a=function(){return{type:o.k.RESET_EDIT_STATE}}}}]);
//# sourceMappingURL=673.adab5274.chunk.js.map