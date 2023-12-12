"use strict";(self.webpackChunkadvent_calendar=self.webpackChunkadvent_calendar||[]).push([[943],{1356:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var s=n(2791),x=n(9439),o=n(5193),l=n(4554),i=n(2169),m=n(890),r=n(4294),p={treeContainer:{width:"100%",display:"flex",flexDirection:{xs:"column",xl:"row"},m:"0 auto",p:{xs:"100px 0",md:"150px 0"}},treeChristmasContainer:{width:{xs:"100%",xl:"50%"},height:{xs:"400px",md:"590px"},display:"flex",justifyContent:"center"},treeChristmas:{width:{sm:"320px",md:"500px"},position:"absolute",top:"0",left:{xs:"0"}},ballsWrapper:{width:{xs:"100%",xl:"50%"},display:"flex",justifyContent:"center"},treeLights:{width:"300px"},ballsContainer:{width:{xs:"90%",md:"70%"},display:"flex",flexWrap:"wrap",alignContent:"start",justifyContent:"center",p:"20px",mb:{xs:"20px",xl:"0"},"& img":{width:{xs:"50px",md:"100px"},height:{xs:"50px",md:"100px"}},"& .lights":{width:{xs:"200px",md:"300px"},height:"auto"},bgcolor:"#c2946377",borderRadius:"10px",boxShadow:"0px 0px 10px 0px #c2946377"},ballsBoxTitle:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},ballsBox:{width:"100%",display:"flex",flexWrap:"wrap",alignContent:"start",justifyContent:"center"},ballsDescription:{m:{xs:"30px 20px",md:"50px"},fontSize:{xs:"1.1rem",md:"1.3rem"},textAlign:"justify"},ballsTask:{m:{xs:"30px 0",md:"70px 0"},fontSize:{xs:"1.1rem",md:"1.3rem"},textAlign:"center"},treeButton:{width:{xs:"200px",md:"300px"},p:{xs:"20px",md:"20px 30px"},mb:"20px",fontSize:{xs:16,md:18},fontWeight:700,borderRadius:"6px",textTransform:"none"},treeBalls:{"& img":{width:{xs:"30px",md:"55px"},position:"absolute",top:"0"},"& img:nth-of-type(1)":{top:{xs:25,md:50},left:{xs:140,md:215}},"& img:nth-of-type(2)":{top:{xs:55,md:110},left:{xs:120,md:185}},"& img:nth-of-type(3)":{top:{xs:55,md:110},left:{xs:160,md:245}},"& img:nth-of-type(4)":{top:{xs:90,md:170},left:{xs:115,md:175}},"& img:nth-of-type(5)":{top:{xs:90,md:170},left:{xs:165,md:255}},"& img:nth-of-type(6)":{top:{xs:125,md:230},left:{xs:110,md:175}},"& img:nth-of-type(7)":{top:{xs:125,md:230},left:{xs:170,md:255}},"& img:nth-of-type(8)":{top:{xs:160,md:290},left:{xs:90,md:140}},"& img:nth-of-type(9)":{top:{xs:160,md:290},left:{xs:140,md:215}},"& img:nth-of-type(10)":{top:{xs:160,md:290},left:{xs:185,md:290}},"& img:nth-of-type(11)":{top:{xs:195,md:355},left:{xs:80,md:145}},"& img:nth-of-type(12)":{top:{xs:200,md:360},left:{xs:140,md:220}},"& img:nth-of-type(13)":{top:{xs:195,md:355},left:{xs:195,md:300}},"& img:nth-of-type(14)":{top:{xs:230,md:415},left:{xs:70,md:115}},"& img:nth-of-type(15)":{top:{xs:230,md:435},left:{xs:115,md:180}},"& img:nth-of-type(16)":{top:{xs:230,md:420},left:{xs:170,md:240}},"& img:nth-of-type(17)":{top:{xs:235,md:425},left:{xs:210,md:305}},"& img:nth-of-type(18)":{top:{xs:265,md:480},left:{xs:85,md:100}},"& img:nth-of-type(19)":{top:{xs:265,md:505},left:{xs:140,md:175}},"& img:nth-of-type(20)":{top:{xs:265,md:490},left:{xs:185,md:245}},"& img:nth-of-type(21)":{top:{xs:270,md:500},left:{xs:225,md:300}},"& img:nth-of-type(22)":{top:{xs:295,md:555},left:{xs:35,md:75}},"& img:nth-of-type(23)":{top:{xs:300,md:580},left:{xs:80,md:45}},"& img:nth-of-type(24)":{top:{xs:300,md:560},left:{xs:130,md:205}},"& img:nth-of-type(25)":{top:{xs:305,md:580},left:{xs:190,md:275}},"& img:nth-of-type(26)":{top:{xs:300,md:580},left:{xs:240,md:355}},"& img:nth-of-type(27)":{top:{xs:330,md:630},left:{xs:40,md:45}},"& img:nth-of-type(28)":{top:{xs:340,md:650},left:{xs:100,md:125}},"& img:nth-of-type(29)":{top:{xs:330,md:630},left:{xs:155,md:205}},"& img:nth-of-type(30)":{top:{xs:340,md:640},left:{xs:215,md:285}},"& img:nth-of-type(31)":{top:{xs:330,md:645},left:{xs:265,md:385}}}},a=n.p+"static/media/tree.602e26a45963e1e43ca7.png",d=n(9434),f=n(7329),h=n(1445),c=n(1087),u=n(127),g=n(184),y=function(){var t=(0,d.v9)((function(t){return t.ball.balls})),e=(0,d.v9)((function(t){return t.ball.treeBalls})),n=0===t.length,y=0===t.length&&31===e.length,b=(0,o.Z)("(max-width: 1024px)"),j=(0,d.I0)(),D=(0,s.useState)(null),w=(0,x.Z)(D,2),Z=w[0],C=w[1],v=(0,s.useState)(!1),B=(0,x.Z)(v,2),T=B[0],L=B[1];return(0,g.jsxs)(l.Z,{sx:p.treeContainer,onDrop:function(t){t.preventDefault();var e=t.dataTransfer.getData("ball");e&&(j((0,f.oP)(e)),j((0,f.ny)(e)))},onTouchEnd:function(){T&&Z&&(j((0,f.oP)(Z)),j((0,f.ny)(Z)),L(!1),C(null))},onDragOver:function(t){t.preventDefault()},children:[(0,g.jsx)(l.Z,{sx:p.ballsWrapper,children:(0,g.jsx)(l.Z,{sx:p.ballsContainer,children:n?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{sx:p.treeLights,component:"img",image:h,alt:"lights",className:"lights"}),(0,g.jsx)(m.Z,{sx:p.ballsDescription,children:"\u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0439 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0438 \u0441\u043e\u0431\u0438\u0440\u0430\u0439 \u0448\u0430\u0440\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u043a\u0440\u0430\u0441\u0438\u0442\u044c \u0451\u043b\u043e\u0447\u043a\u0443!"}),(0,g.jsx)(c.rU,{to:u._.home.root,children:(0,g.jsx)(r.Z,{sx:p.treeButton,className:"secondary",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0437\u0430\u0434\u0430\u043d\u0438\u044f\u043c"})})]}):y?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{sx:p.treeLights,component:"img",image:h,alt:"lights",className:"lights"}),(0,g.jsx)(m.Z,{sx:p.ballsDescription,children:"\u0412\u0430\u0443! \u0422\u0430\u043a\u0430\u044f \u043a\u0440\u0430\u0441\u0438\u0432\u0430\u044f \u0451\u043b\u043e\u0447\u043a\u0430 \u0443 \u0442\u0435\u0431\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0430\u0441\u044c! \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0432\u043e\u044e \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u0438\u0445 \u0448\u0430\u0440\u0438\u043a\u043e\u0432. \u0410 \u043f\u043e\u0442\u043e\u043c \u0433\u043e\u0442\u043e\u0432\u044c\u0441\u044f \u043a \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a\u0443, \u0432\u0435\u0434\u044c \u0443\u0436\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0443\u0436\u043d\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0442\u044c \u041d\u043e\u0432\u044b\u0439 \u0433\u043e\u0434! \u041f\u0443\u0441\u0442\u044c \u0441\u0431\u0443\u0434\u0443\u0442\u0441\u044f \u0432\u0441\u0435-\u0432\u0441\u0435 \u0436\u0435\u043b\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u044b \u0437\u0430\u0433\u0430\u0434\u0430\u0435\u0448\u044c \u0432 \u043d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u044e\u044e \u043d\u043e\u0447\u044c. \u0423\u0440\u0430\u0430!"}),(0,g.jsx)(c.rU,{to:u._.home.balls,children:(0,g.jsx)(r.Z,{sx:p.treeButton,className:"secondary",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0448\u0430\u0440\u0438\u043a\u0438"})})]}):(0,g.jsxs)(l.Z,{sx:p.ballsBoxTitle,children:[b?(0,g.jsx)(m.Z,{sx:p.ballsTask,children:"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u0448\u0430\u0440\u0438\u043a, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \u043f\u043e\u043f\u0430\u043b \u043d\u0430 \u0451\u043b\u043a\u0443"}):(0,g.jsx)(m.Z,{sx:p.ballsTask,children:"\u041f\u0435\u0440\u0435\u0442\u044f\u043d\u0438 \u0448\u0430\u0440\u0438\u043a\u0438 \u043d\u0430 \u0451\u043b\u043a\u0443"}),(0,g.jsx)(l.Z,{sx:p.ballsBox,children:t.map((function(t,e){return(0,g.jsx)("img",{src:t,alt:"ball",draggable:!0,onDragStart:function(e){return function(t,e){t.dataTransfer.setData("ball",e)}(e,t)},onTouchStart:function(e){return function(t,e){T||(L(!0),C(e))}(0,t)}},e)}))})]})})}),(0,g.jsxs)(l.Z,{sx:p.treeChristmasContainer,onDragEnter:function(t){t.preventDefault()},onDragLeave:function(t){t.preventDefault()},style:{position:"relative"},children:[(0,g.jsx)(i.Z,{sx:p.treeChristmas,component:"img",image:a,alt:"tree"}),(0,g.jsx)(l.Z,{sx:p.treeBalls,children:e.map((function(t,e){return(0,g.jsx)("img",{src:t,alt:"treeBall"},e)}))})]})]})},b=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(y,{})})}},7329:function(t,e,n){n.d(e,{QI:function(){return i},Y0:function(){return x},ny:function(){return l},oP:function(){return o}});var s=n(7745),x=function(t){return{type:s.M.ADD_BALL,payload:t}},o=function(t){return{type:s.M.ADD_TREE_BALL,payload:t}},l=function(t){return{type:s.M.REMOVE_BALL,payload:t}},i=function(){return{type:s.M.RESET_BALL_STATE}}},1445:function(t,e,n){t.exports=n.p+"static/media/balls.92bea4e1b581d22e82a7.png"}}]);
//# sourceMappingURL=943.f59f4d76.chunk.js.map