(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={tasks:"Affairs_tasks__3to5e",button:"Affairs_button__1NqOb",item:"Affairs_item__fsW4m",btn:"Affairs_btn__3SPJ1"}},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),s=(n(72),n(57)),i=n.n(s),o=n(12),j=n(5),l=n(6),u=n(8),b=n(10),d=n(35),O=n.n(d),h=n(1),x=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),a=Object(b.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(h.jsx)("option",{className:O.a.part,value:e,children:e},t)})):[];return Object(h.jsx)("select",Object(u.a)(Object(u.a)({className:O.a.main,onChange:function(e){n&&n(e.currentTarget.value)}},a),{},{children:r}))},m=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=(e.onChange,e.onChangeOption),c=(Object(b.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:t,checked:e===a,value:e,onChange:c}),e]},t+"-"+n)})):[];return Object(h.jsx)(h.Fragment,{children:s})},p=["x","y","z"];var _=function(){var e=Object(a.useState)(p[1]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),"homeworks 7",Object(h.jsx)("div",{children:Object(h.jsx)(x,{options:p,value:n,onChangeOption:r})}),Object(h.jsx)("div",{children:Object(h.jsx)(m,{name:"radio",options:p,value:n,onChangeOption:r})})]})},f=n(21),v=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(f.a)(e).sort((function(e,t){return e.name>t.name?1:-1})):Object(f.a)(e).sort((function(e,t){return e.name>t.name?-1:1}));case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},g=n(36),C=n.n(g),k=function(e){var t=e.red,n=e.className,a=Object(b.a)(e,["red","className"]),r="".concat(t?C.a.red:C.a.default," ").concat(n);return Object(h.jsx)("button",Object(u.a)({className:r},a))},N=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var y=function(){var e=Object(a.useState)(N),t=Object(l.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(h.jsxs)("div",{children:[e.name," ",e.age]},e._id)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),"homeworks 8",c,Object(h.jsx)("div",{children:Object(h.jsx)(k,{onClick:function(){return r(v(N,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(h.jsx)("div",{children:Object(h.jsx)(k,{onClick:function(){return r(v(N,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(h.jsx)("div",{children:Object(h.jsx)(k,{onClick:function(){return r(v(N,{type:"check",payload:18}))},children:"check 18"})})]})};var S=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(l.a)(c,2),i=s[0],o=s[1],j=Object(a.useState)(!1),u=Object(l.a)(j,2),b=u[0],d=u[1],O=function(){clearInterval(n)},x=(null===i||void 0===i?void 0:i.toLocaleTimeString())||"",m=(null===i||void 0===i?void 0:i.toLocaleDateString())||"";return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:x}),b&&Object(h.jsx)("div",{children:m}),Object(h.jsx)(k,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(h.jsx)(k,{onClick:O,children:"stop"})]})};var w=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),"homeworks 9",Object(h.jsx)(S,{})]})},E=n(16),A={loading:!1},T=function(e){return{type:"LOADING",payload:{loading:e}}},W=n(38),H=n.n(W);var J=function(){var e=Object(E.c)((function(e){return e.loading.loading})),t=Object(E.b)();return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),"homeworks 10",e?Object(h.jsx)("div",{className:H.a.loaderContainer,children:Object(h.jsx)("div",{className:H.a.loader})}):Object(h.jsx)("div",{children:Object(h.jsx)(k,{onClick:function(){t(T(!0)),setTimeout((function(){t(T(!1))}),1e3)},children:"set loading..."})})]})},F=n(59),P=n.n(F),I=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,r=e.setValue1,c=Object(b.a)(e,["type","onChange","onChangeRange","className","setValue1"]),s="".concat(P.a.range," ").concat(a||"");return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",Object(u.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value),r(+e.currentTarget.value)},className:s},c))})},M=n(67),D=(n(149),n(63)),R=n.n(D),B=function(e){var t=e.onChangeRange,n=e.value,a=e.min,r=e.max,c=e.step;return Object(h.jsx)(M.a,{className:R.a.main,min:a,max:r,value:n,step:c,onChange:function(e){t&&t(e)},allowCross:!1})},G=n(40),U=n.n(G);var z=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(10),s=Object(l.a)(c,2),i=s[0],o=s[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),"homeworks 11",Object(h.jsxs)("div",{className:U.a.main5,children:[Object(h.jsx)("div",{children:n}),Object(h.jsx)("div",{children:Object(h.jsx)(I,{value:n,onChangeRange:r,max:i,setValue1:r})})]}),Object(h.jsxs)("div",{className:U.a.main,children:[Object(h.jsxs)("div",{children:[n," "]}),Object(h.jsx)("div",{children:Object(h.jsx)(B,{onChangeRange:function(e){r(e[0]),o(e[1])},min:0,max:10,step:1,value:[n,i]})}),Object(h.jsxs)("div",{children:[" ",i]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},K=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(o.b,{to:"/junior",children:"Junior"}),Object(h.jsx)(_,{}),Object(h.jsx)(y,{}),Object(h.jsx)(w,{}),Object(h.jsx)(J,{}),Object(h.jsx)(z,{})]})},Z=n(17),L=n.n(Z);var V=function(e){return Object(h.jsxs)("div",{className:L.a.main,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:L.a.avatar,src:e.avatar,alt:""})}),Object(h.jsxs)("div",{className:L.a.container,children:[Object(h.jsx)("p",{className:L.a.name,children:e.name}),Object(h.jsx)("p",{className:L.a.message,children:e.message}),Object(h.jsx)("span",{className:L.a.time,children:e.time})]})]})},X="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",q="Some Name",Y="some text",Q="22:00";var $=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 1",Object(h.jsx)(V,{avatar:X,name:q,message:Y,time:Q}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},ee=n(13),te=n.n(ee);var ne=function(e){return Object(h.jsxs)("div",{className:te.a.tasks,children:[Object(h.jsx)("div",{className:te.a.item,children:e.affair.name}),Object(h.jsx)("div",{className:te.a.priority,children:e.affair.priority}),Object(h.jsx)("div",{className:te.a.buttons,children:Object(h.jsx)("button",{className:te.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})})]})};var ae=function(e){var t=e.data.map((function(t){return Object(h.jsx)(ne,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(h.jsxs)("div",{children:[t,Object(h.jsx)("button",{className:te.a.btn,onClick:function(){e.setFilter("all")},children:"All"}),Object(h.jsx)("button",{className:te.a.btn,onClick:function(){e.setFilter("high")},children:"High"}),Object(h.jsx)("button",{className:te.a.btn,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(h.jsx)("button",{className:te.a.btn,onClick:function(){e.setFilter("low")},children:"Low"})]})},re=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var ce=function(){var e=Object(a.useState)(re),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(l.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(h.jsxs)("div",{children:["homeworks 2",Object(h.jsx)(ae,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},se=n(29),ie=n.n(se),oe=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.keyPress,i=r?"classes.error":"classes.input";return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{value:t,onChange:n,onKeyPress:s,className:i}),Object(h.jsx)("span",{className:ie.a.errorMessage,children:r}),Object(h.jsx)("button",{className:ie.a.button,onClick:a,children:"add"}),Object(h.jsx)("strong",{children:Object(h.jsx)("span",{className:ie.a.total,children:c})})]})},je=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],d=function(){if(""===s.trim())return b("Name is empty");n(s),alert("Hello, ".concat(s," !")),i("")},O=t.length;return Object(h.jsx)(oe,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:d,error:u,totalUsers:O,keyPress:function(e){b(""),"Enter"===e.key&&d()}})},le=n(152);var ue=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),"homeworks 3",Object(h.jsx)(je,{users:n,addUserCallback:function(e){r([].concat(Object(f.a)(n),[{_id:Object(le.a)(),name:e}]))}}),Object(h.jsx)("hr",{})]})},be=n(22),de=n.n(be),Oe=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(de.a.error," ").concat(s||""),j="".concat(de.a.errorInput," ").concat(c?de.a.errorInput:de.a.superInput);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(u.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),c&&Object(h.jsx)("span",{className:o,children:c})]})},he=n(41),xe=n.n(he),me=n(42),pe=n.n(me),_e=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(pe.a.checkbox," ").concat(a||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(u.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(h.jsx)("span",{className:pe.a.spanClassName,children:r})]})};var fe=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 4",Object(h.jsxs)("div",{className:xe.a.column,children:[Object(h.jsx)(Oe,{value:n,onChangeText:r,onEnter:s,error:c}),Object(h.jsx)(Oe,{className:xe.a.blue}),Object(h.jsx)(k,{children:"default"}),Object(h.jsx)(k,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(k,{disabled:!0,children:"disabled"}),Object(h.jsx)(_e,{checked:j,onChangeChecked:u,children:"some text "}),Object(h.jsx)(_e,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]})]})},ve=n(64),ge=n.n(ve),Ce=n(65),ke=n.n(Ce),Ne=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(b.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],d=r||{},O=d.children,x=d.onDoubleClick,m=(d.className,Object(b.a)(d,["children","onDoubleClick","className"])),p="".concat(ke.a.span);return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)(Oe,Object(u.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(h.jsx)("span",Object(u.a)(Object(u.a)({onDoubleClick:function(e){j(!0),x&&x(e)},className:p},m),{},{children:O||c.value}))})};function ye(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}ye("test",{x:"A",y:1});!function(e,t){var n=t,a=localStorage.getItem(e);null!==a&&(n=JSON.parse(a))}("test",{x:"",y:0});var Se=n(66),we=n.n(Se);var Ee=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),"homeworks 6",Object(h.jsx)("div",{className:we.a.main,children:Object(h.jsx)(Ne,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(h.jsx)(k,{onClick:function(){ye("editable-span-value",n)},children:"save"}),Object(h.jsx)(k,{onClick:function(){r("")},children:"restore"}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},Ae=function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{className:ge.a.list,children:[Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/prejunior",children:"PreJunior"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/junior",children:"Junior"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/junior_plus",children:"Junior+"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/404",children:"Error 404"})})]}),Object(h.jsx)($,{}),Object(h.jsx)(ce,{}),Object(h.jsx)(ue,{}),Object(h.jsx)(fe,{}),Object(h.jsx)(Ee,{})]})},Te=n(43),We=n.n(Te),He={theme:"some"},Je=["dark","red","some"];var Fe=function(){var e=Object(E.c)((function(e){return e.theme.theme})),t=Object(E.b)();return Object(h.jsxs)("div",{className:We.a[e],children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("span",{className:We.a[e+"-text"],children:"homeworks 12 "}),Object(h.jsx)(x,{options:Je,onChangeOption:function(e){return t(function(e){return{type:"THEME",theme:e}}(e))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},Pe=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(o.b,{to:"/junior_plus",children:"Junior+"}),Object(h.jsx)(Fe,{})]})},Ie=n(30),Me=n.n(Ie);var De=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(o.b,{to:"/404",children:"Error 404"}),Object(h.jsxs)("p",{className:Me.a.zoomArea,children:[Object(h.jsx)("b",{children:"OOOPS!"})," \u043d\u0435 \u043f\u0430\u0448\u0435\u0442"]}),Object(h.jsxs)("section",{className:Me.a.error,children:[Object(h.jsx)("span",{children:"4"}),Object(h.jsx)("span",{children:Object(h.jsx)("span",{className:Me.a.screen,children:"0"})}),Object(h.jsx)("span",{children:"4"})]})]})};var Re=function(){return Object(h.jsx)(o.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(j.d,{children:Object(h.jsx)(j.b,{path:"/dz",element:Object(h.jsx)(j.a,{to:"/prejunior"})})}),Object(h.jsx)(j.d,{children:Object(h.jsx)(j.b,{path:"/prejunior",element:Object(h.jsx)(Ae,{})})}),Object(h.jsx)(j.d,{children:Object(h.jsx)(j.b,{path:"/junior",element:Object(h.jsx)(K,{})})}),Object(h.jsx)(j.d,{children:Object(h.jsx)(j.b,{path:"/junior_plus",element:Object(h.jsx)(Pe,{})})}),Object(h.jsx)(j.d,{children:Object(h.jsx)(j.b,{path:"/404",element:Object(h.jsx)(De,{})})})]})})};var Be=function(){return Object(h.jsx)("div",{className:i.a.App,children:Object(h.jsx)(Re,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=n(44),Ue=Object(Ge.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(u.a)(Object(u.a)({},e),{},{loading:t.payload.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"THEME":return Object(u.a)(Object(u.a)({},e),{},{theme:t.theme});default:return e}}}),ze=Object(Ge.b)(Ue),Ke=ze;window.store=ze,c.a.render(Object(h.jsx)(E.a,{store:Ke,children:Object(h.jsx)(Be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,n){e.exports={main:"Message_main__1EPnf",container:"Message_container__1FgtJ",avatar:"Message_avatar__38UcA",name:"Message_name__o-O70",message:"Message_message__2cPWP",time:"Message_time__3lqeF"}},22:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__34A8s",errorInput:"SuperInputText_errorInput__ZtY8w",error:"SuperInputText_error__2ke2k"}},29:function(e,t,n){e.exports={someClass:"Greeting_someClass__1AzJZ",error:"Greeting_error__20abf",input:"Greeting_input__2-wKJ",errorMessage:"Greeting_errorMessage__3FZV4",total:"Greeting_total__13SXo",button:"Greeting_button__MuWeO"}},30:function(e,t,n){e.exports={error:"Error404_error__1bvtE",colordancing:"Error404_colordancing__8QyZA",colordancing2:"Error404_colordancing2__zY7bi",shadowsdancing:"Error404_shadowsdancing__2ldUv",screen:"Error404_screen__2C1aq",zoomArea:"Error404_zoomArea__2t-pi","link-container":"Error404_link-container__1Saga","more-link":"Error404_more-link__375No"}},35:function(e,t,n){e.exports={main:"Select_main__2CkcY",part:"Select_part__12eHv"}},36:function(e,t,n){e.exports={default:"SuperButton_default__3ERGp",red:"SuperButton_red__2UPYJ"}},38:function(e,t,n){e.exports={loaderContainer:"HW10_loaderContainer__38vCw",loader:"HW10_loader__2MXJ8",spin:"HW10_spin__3ht2Z"}},40:function(e,t,n){e.exports={main:"HW11_main__3JFCR",main2:"HW11_main2__1KjR8",main5:"HW11_main5__1emXz"}},41:function(e,t,n){e.exports={blue:"HW4_blue__-eanX",column:"HW4_column__1hE2V",testSpanError:"HW4_testSpanError__1Dait"}},42:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1Tt7U",spanClassName:"SuperCheckbox_spanClassName__soel5"}},43:function(e,t,n){e.exports={dark:"HW12_dark__2TG-p","dark-text":"HW12_dark-text__3oBij",red:"HW12_red__rZJfF","red-text":"HW12_red-text__FbNmS",some:"HW12_some__1rmVU","some-text":"HW12_some-text__2D9B5"}},57:function(e,t,n){e.exports={App:"App_App__1omuM"}},59:function(e,t,n){e.exports={range:"SuperRange_range__3DBJR"}},63:function(e,t,n){e.exports={main:"SuperDoubleRange_main__3T8kC"}},64:function(e,t,n){e.exports={list:"PreJunior_list__KuQa4"}},65:function(e,t,n){e.exports={span:"SuperEditableSpan_span__QDJa0"}},66:function(e,t,n){e.exports={main:"HW6_main__2OQsq"}},72:function(e,t,n){}},[[150,1,2]]]);
//# sourceMappingURL=main.d3683f70.chunk.js.map