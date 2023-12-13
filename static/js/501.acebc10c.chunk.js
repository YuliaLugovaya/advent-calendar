"use strict";(self.webpackChunkadvent_calendar=self.webpackChunkadvent_calendar||[]).push([[501],{5501:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(2791),a=n(4554),o=n(890),i={parentsContainer:{maxWidth:"1200px",display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"center",gap:"30px",m:"0 auto",p:{xs:"100px 20px 50px 20px",md:"150px 20px 100px 20px"}},parentsSections:{width:{xs:"100%",md:"30%"}},parentsAbout:{width:{xs:"100%",md:"70%"}},parentsButton:{width:{xs:"250px",md:"400px"},p:{xs:"20px",md:"20px 30px"},mb:"30px",fontSize:{xs:16,md:18},fontWeight:700,borderRadius:"6px",textTransform:"none"},parentsTitle:{mb:{xs:"20px"},fontSize:{xs:"1.3rem",md:"1.5rem"},color:"#c29463",textAlign:"center"},parentsDescription:{mb:{xs:"20px"},fontSize:{xs:"1rem"},textAlign:"justify"},parentsAccent:{color:"#d99f94","&:hover":{color:"#94a975"}},treeLights:{width:"300px"}},s=n(1087),d=n(493),c=n(4942),l=n(3366),p=n(7462),u=n(3733),m=n(4419),v=n(627),x=n(2065),y=n(7630),b=n(3736),g=n(7077),h=n(9103),Z=n(162),f=n(2071),j=n(9480),S=n(5878),C=n(1217);function I(e){return(0,C.Z)("MuiListItem",e)}var P=(0,S.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var w=(0,S.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function A(e){return(0,C.Z)("MuiListItemSecondaryAction",e)}(0,S.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var F=n(184),N=["className"],L=(0,y.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,p.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),M=r.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,o=(0,l.Z)(n,N),i=r.useContext(j.Z),s=(0,p.Z)({},n,{disableGutters:i.disableGutters}),d=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,m.Z)(r,A,n)}(s);return(0,F.jsx)(L,(0,p.Z)({className:(0,u.Z)(d.root,a),ownerState:s,ref:t},o))}));M.muiName="ListItemSecondaryAction";var R=M,T=["className"],k=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],G=(0,y.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,p.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,p.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,c.Z)({},"& > .".concat(w.root),{paddingRight:48}),(t={},(0,c.Z)(t,"&.".concat(P.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,c.Z)(t,"&.".concat(P.selected),(0,c.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(P.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,c.Z)(t,"&.".concat(P.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,c.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(P.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),O=(0,y.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),D=r.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,o=void 0===a?"center":a,i=n.autoFocus,s=void 0!==i&&i,d=n.button,c=void 0!==d&&d,x=n.children,y=n.className,S=n.component,C=n.components,w=void 0===C?{}:C,A=n.componentsProps,N=void 0===A?{}:A,L=n.ContainerComponent,M=void 0===L?"li":L,D=n.ContainerProps,V=(void 0===D?{}:D).className,B=n.dense,U=void 0!==B&&B,q=n.disabled,z=void 0!==q&&q,W=n.disableGutters,_=void 0!==W&&W,X=n.disablePadding,E=void 0!==X&&X,Y=n.divider,H=void 0!==Y&&Y,J=n.focusVisibleClassName,K=n.secondaryAction,Q=n.selected,$=void 0!==Q&&Q,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,re=void 0===ne?{}:ne,ae=(0,l.Z)(n.ContainerProps,T),oe=(0,l.Z)(n,k),ie=r.useContext(j.Z),se=r.useMemo((function(){return{dense:U||ie.dense||!1,alignItems:o,disableGutters:_}}),[o,ie.dense,U,_]),de=r.useRef(null);(0,Z.Z)((function(){s&&de.current&&de.current.focus()}),[s]);var ce=r.Children.toArray(x),le=ce.length&&(0,h.Z)(ce[ce.length-1],["ListItemSecondaryAction"]),pe=(0,p.Z)({},n,{alignItems:o,autoFocus:s,button:c,dense:se.dense,disabled:z,disableGutters:_,disablePadding:E,divider:H,hasSecondaryAction:le,selected:$}),ue=function(e){var t=e.alignItems,n=e.button,r=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,m.Z)(i,I,r)}(pe),me=(0,f.Z)(de,t),ve=re.root||w.Root||G,xe=te.root||N.root||{},ye=(0,p.Z)({className:(0,u.Z)(ue.root,xe.className,y),disabled:z},oe),be=S||"li";return c&&(ye.component=S||"div",ye.focusVisibleClassName=(0,u.Z)(P.focusVisible,J),be=g.Z),le?(be=ye.component||S?be:"div","li"===M&&("li"===be?be="div":"li"===ye.component&&(ye.component="div")),(0,F.jsx)(j.Z.Provider,{value:se,children:(0,F.jsxs)(O,(0,p.Z)({as:M,className:(0,u.Z)(ue.container,V),ref:me,ownerState:pe},ae,{children:[(0,F.jsx)(ve,(0,p.Z)({},xe,!(0,v.X)(ve)&&{as:be,ownerState:(0,p.Z)({},pe,xe.ownerState)},ye,{children:ce})),ce.pop()]}))})):(0,F.jsx)(j.Z.Provider,{value:se,children:(0,F.jsxs)(ve,(0,p.Z)({},xe,{as:be,ref:me},!(0,v.X)(ve)&&{ownerState:(0,p.Z)({},pe,xe.ownerState)},ye,{children:[ce,K&&(0,F.jsx)(R,{children:K})]}))})}));function V(e){return(0,C.Z)("MuiListItemText",e)}var B=(0,S.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),U=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],q=(0,y.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,c.Z)({},"& .".concat(B.primary),t.primary),(0,c.Z)({},"& .".concat(B.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,p.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),z=r.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItemText"}),a=n.children,i=n.className,s=n.disableTypography,d=void 0!==s&&s,c=n.inset,v=void 0!==c&&c,x=n.primary,y=n.primaryTypographyProps,g=n.secondary,h=n.secondaryTypographyProps,Z=(0,l.Z)(n,U),f=r.useContext(j.Z).dense,S=null!=x?x:a,C=g,I=(0,p.Z)({},n,{disableTypography:d,inset:v,primary:!!S,secondary:!!C,dense:f}),P=function(e){var t=e.classes,n=e.inset,r=e.primary,a=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,m.Z)(o,V,t)}(I);return null==S||S.type===o.Z||d||(S=(0,F.jsx)(o.Z,(0,p.Z)({variant:f?"body2":"body1",className:P.primary,component:null!=y&&y.variant?void 0:"span",display:"block"},y,{children:S}))),null==C||C.type===o.Z||d||(C=(0,F.jsx)(o.Z,(0,p.Z)({variant:"body2",className:P.secondary,color:"text.secondary",display:"block"},h,{children:C}))),(0,F.jsxs)(q,(0,p.Z)({className:(0,u.Z)(P.root,i),ownerState:I,ref:t},Z,{children:[S,C]}))})),W={sectionsItem:{color:"#FFFFFF",bgcolor:"#c29463",border:"1px solid",borderColor:"#FFFFFF",transition:"0.3s ease","&:hover":{bgcolor:"#c2946377",transition:"0.3s ease"}}},_=function(){return(0,F.jsxs)(d.Z,{component:"nav",children:[(0,F.jsx)(D,{sx:W.sectionsItem,component:s.rU,to:"/advent-calendar/edit",children:(0,F.jsx)(z,{primary:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0439"})}),(0,F.jsx)(D,{sx:W.sectionsItem,component:s.rU,to:"/advent-calendar/belarus-traditions",children:(0,F.jsx)(z,{primary:"\u041d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u0438\u0435 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u0432 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438"})}),(0,F.jsx)(D,{sx:W.sectionsItem,component:s.rU,to:"/advent-calendar/world-traditions",children:(0,F.jsx)(z,{primary:"\u041d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u0438\u0435 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u0432 \u043c\u0438\u0440\u0435"})}),(0,F.jsx)(D,{sx:W.sectionsItem,component:s.rU,to:"/advent-calendar/movie-list",children:(0,F.jsx)(z,{primary:"\u0421\u043f\u0438\u0441\u043e\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043f\u0440\u043e \u0437\u0438\u043c\u0443"})}),(0,F.jsx)(D,{sx:W.sectionsItem,component:s.rU,to:"/advent-calendar/cartoon-list",children:(0,F.jsx)(z,{primary:"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u0443\u043b\u044c\u0442\u0438\u043a\u043e\u0432 \u043f\u0440\u043e \u0437\u0438\u043c\u0443"})})]})},X=function(){return(0,F.jsxs)(a.Z,{sx:i.parentsContainer,children:[(0,F.jsx)(a.Z,{sx:i.parentsSections,children:(0,F.jsx)(_,{})}),(0,F.jsxs)(a.Z,{sx:i.parentsAbout,children:[(0,F.jsx)(o.Z,{sx:i.parentsTitle,children:"\u0414\u043e\u0440\u043e\u0433\u0438\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438!"}),(0,F.jsx)(o.Z,{sx:i.parentsDescription,children:"\u041d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u0438\u0439 \u0430\u0434\u0432\u0435\u043d\u0442-\u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u2013 \u044d\u0442\u043e \u0432\u043e\u043b\u0448\u0435\u0431\u043d\u043e\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u0442 \u0432\u043e\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435 \u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447 \u0443 \u0434\u0435\u0442\u0435\u0439. \u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u0448\u0438\u043c \u0434\u0435\u0442\u044f\u043c \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441 \u0437\u0430\u0434\u0430\u043d\u0438\u044f\u043c\u0438 \u0438 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0446\u0435\u043b\u0435\u0439."}),(0,F.jsx)(o.Z,{sx:i.parentsDescription,children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b \u043f\u0440\u043e\u0441\u0442\u044b: \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u0432\u0430\u0448 \u0440\u0435\u0431\u0435\u043d\u043e\u043a \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0441 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435. \u0412\u0430\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0430\u043a\u0436\u0435 \u0438\u0433\u0440\u0430\u044e\u0442 \u0432\u0430\u0436\u043d\u0443\u044e \u0440\u043e\u043b\u044c \u0432 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0435 \u0438 \u043f\u043e\u043e\u0449\u0440\u0435\u043d\u0438\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u0441\u0432\u043e\u0435\u043c\u0443 \u0440\u0435\u0431\u0435\u043d\u043a\u0443 \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 \u0437\u0430\u0434\u0430\u043d\u0438\u0435\u043c \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0435\u043c\u0443 \u0441\u0432\u043e\u044e \u043f\u043e\u043c\u043e\u0449\u044c, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e."}),(0,F.jsx)(o.Z,{sx:i.parentsDescription,children:"\u0417\u0430 \u043a\u0430\u0436\u0434\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0440\u0435\u0431\u0435\u043d\u043a\u0443 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u043d\u0430\u0433\u0440\u0430\u0434\u0443 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0440\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u043d\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0435\u043b\u043a\u0443. \u0420\u0435\u0431\u0435\u043d\u043e\u043a \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0448\u0430\u0440\u0438\u043a\u0438 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435, \u0447\u0442\u043e \u0441\u0442\u0430\u043d\u0435\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435\u043c \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439. \u041a\u0430\u043a \u043e\u0441\u043e\u0431\u044b\u0439 \u0431\u043e\u043d\u0443\u0441, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0434\u043b\u044f \u0440\u0435\u0431\u0435\u043d\u043a\u0430 \u0438\u0433\u0440\u0443\u0448\u043a\u0438, \u0444\u0438\u0433\u0443\u0440\u043a\u0438 \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u044e\u0440\u043f\u0440\u0438\u0437\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0432 \u043d\u0430\u0433\u0440\u0430\u0434\u0443 \u0437\u0430 \u0443\u0441\u0438\u043b\u0438\u044f."}),(0,F.jsxs)(o.Z,{sx:i.parentsDescription,children:["\u0415\u0449\u0435 \u043e\u0434\u043d\u043e \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044f - \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c"," ",(0,F.jsx)(s.rU,{to:"/advent-calendar/edit",children:(0,F.jsx)(o.Z,{sx:i.parentsAccent,component:"span",children:"\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})})," ","\u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f\u043c\u0438. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043f\u043e\u0434 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u0440\u0435\u0431\u0435\u043d\u043a\u0430."]}),(0,F.jsx)(o.Z,{sx:i.parentsDescription,children:"\u041f\u0443\u0441\u0442\u044c \u043d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u0438\u0439 \u0430\u0434\u0432\u0435\u043d\u0442-\u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043f\u0440\u0438\u043d\u0435\u0441\u0435\u0442 \u0432\u0430\u043c \u0438 \u0432\u0430\u0448\u0438\u043c \u0434\u0435\u0442\u044f\u043c \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0434\u043e\u0441\u0442\u0438 \u0438 \u0432\u0435\u0441\u0435\u043b\u044c\u044f. \u041f\u043e\u0437\u0432\u043e\u043b\u044c\u0442\u0435 \u0438\u043c \u043f\u043e\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f \u0432 \u043c\u0438\u0440 \u0432\u043e\u043b\u0448\u0435\u0431\u0441\u0442\u0432\u0430, \u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0438 \u0440\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0438\u0433\u0440\u0443 \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u043e\u043b\u0433\u0438\u0435 \u0433\u043e\u0434\u044b."})]})]})},E=function(){return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(X,{})})}},493:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(3366),a=n(7462),o=n(2791),i=n(3733),s=n(4419),d=n(7630),c=n(3736),l=n(9480),p=n(5878),u=n(1217);function m(e){return(0,u.Z)("MuiList",e)}(0,p.Z)("MuiList",["root","padding","dense","subheader"]);var v=n(184),x=["children","className","component","dense","disablePadding","subheader"],y=(0,d.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((function(e){var t=e.ownerState;return(0,a.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),b=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiList"}),d=n.children,p=n.className,u=n.component,b=void 0===u?"ul":u,g=n.dense,h=void 0!==g&&g,Z=n.disablePadding,f=void 0!==Z&&Z,j=n.subheader,S=(0,r.Z)(n,x),C=o.useMemo((function(){return{dense:h}}),[h]),I=(0,a.Z)({},n,{component:b,dense:h,disablePadding:f}),P=function(e){var t=e.classes,n={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,s.Z)(n,m,t)}(I);return(0,v.jsx)(l.Z.Provider,{value:C,children:(0,v.jsxs)(y,(0,a.Z)({as:b,className:(0,i.Z)(P.root,p),ref:t,ownerState:I},S,{children:[j,d]}))})}))},9480:function(e,t,n){var r=n(2791).createContext({});t.Z=r},9103:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2791);var a=function(e,t){var n,a;return r.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(a=e.type)||null==(a=a._payload)||null==(a=a.value)?void 0:a.muiName)}}}]);
//# sourceMappingURL=501.acebc10c.chunk.js.map