(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{10:function(e,a,t){e.exports={someClass:"Greeting_someClass__1tbOv",wrap:"Greeting_wrap__3xZOx",inner:"Greeting_inner__3cx0n",button:"Greeting_button__3l4jW",users:"Greeting_users__3I0TY",input:"Greeting_input__1mtmb",err:"Greeting_err__2ZvMd",error:"Greeting_error__3766I"}},11:function(e,a,t){e.exports={Message:"Message_Message__26zsd",Message__avatar:"Message_Message__avatar__tMHcP",Message__info:"Message_Message__info__3wEY3",Message__author:"Message_Message__author__2xpbn",Message__text:"Message_Message__text__3tV6c",Message__time:"Message_Message__time__3nWzQ"}},16:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3nLAw",errorInput:"SuperInputText_errorInput__2NFjy",error:"SuperInputText_error__1V9zd"}},22:function(e,a,t){e.exports={blue:"HW4_blue__2UG0Z",column:"HW4_column__2bUQz",testSpanError:"HW4_testSpanError__6Sr7w"}},23:function(e,a,t){e.exports={default:"SuperButton_default__1rHoF",red:"SuperButton_red__3js8v"}},24:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2izCw",spanClassName:"SuperCheckbox_spanClassName__2CoON"}},26:function(e,a,t){e.exports={dark:"HW12_dark__5o6hi","dark-text":"HW12_dark-text__3CAP0",red:"HW12_red__3XQQk","red-text":"HW12_red-text__3tbY5",some:"HW12_some__3-QRf","some-text":"HW12_some-text__1hacI"}},38:function(e,a,t){e.exports={App:"App_App__N8wWW"}},39:function(e,a,t){e.exports={superEditableSpan:"SuperEditableSpan_superEditableSpan__2id9a"}},40:function(e,a,t){e.exports={superRadio:"SuperRadio_superRadio__3NJTP"}},41:function(e,a,t){e.exports=t.p+"static/media/loader.938a81db.svg"},44:function(e,a,t){e.exports={range:"SuperRange_range__3bJeP"}},46:function(e,a,t){e.exports=t(81)},51:function(e,a,t){},8:function(e,a,t){e.exports={someClass:"Affairs_someClass__sxmgP",button:"Affairs_button__3JVtf",inner:"Affairs_inner__dAXcj",spanInner:"Affairs_spanInner__bTbkm",span:"Affairs_span__3HVsS",buutonsInner:"Affairs_buutonsInner__q0uxE"}},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),s=(t(51),t(38)),o=t.n(s),i=t(1),u=t(14),m=t(9),p=t.n(m);var d=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:p.a.wrap},r.a.createElement("div",{className:t?"".concat(p.a.nav_list," ").concat(p.a.active):p.a.nav_list},r.a.createElement(u.b,{className:p.a.nav_link,to:"/pre-junior"}," ","PreJunior"),r.a.createElement(u.b,{className:p.a.nav_link,to:"/junior-plus"},"JuniorPlus"),r.a.createElement("button",{className:p.a.btn,onClick:function(){c(!t)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))},E=t(2),_=t(11),f=t.n(_);var v=function(e){return r.a.createElement("div",{className:f.a.Message},r.a.createElement("img",{className:f.a.Message__avatar,src:e.avatar,alt:"img"}),r.a.createElement("div",{className:f.a.Message__info},r.a.createElement("h4",{className:f.a.Message__author},e.name),r.a.createElement("p",{className:f.a.Message__text},e.message),r.a.createElement("span",{className:f.a.Message__time},e.time)))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",b="some text some text some text some text",N="22:00";var k=function(){return r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"},"homeworks 1"),r.a.createElement(v,{avatar:g,name:h,message:b,time:N}))},C=t(8),O=t.n(C);var j=function(e){return r.a.createElement("div",{className:O.a.spanInner},r.a.createElement("span",{className:O.a.span},e.affair.name),r.a.createElement("span",{className:O.a.span},e.affair.priority),r.a.createElement("button",{className:O.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var x=function(e){var a=e.data.map((function(a){return r.a.createElement(j,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:O.a.inner},a,r.a.createElement("div",{className:O.a.buutonsInner},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(w),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("all"),s=Object(i.a)(l,2),o=s[0],u=s[1],m=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,o);return r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"}," homeworks 2"),r.a.createElement(x,{data:m,setFilter:u,deleteAffairCallback:function(e){return c(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},S=t(7),I=t(10),M=t.n(I),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,c=e.error,l=e.totalUsers,s=c?M.a.error:"";return r.a.createElement("div",{className:M.a.wrap},r.a.createElement("div",{className:M.a.inner},r.a.createElement("input",{value:a,onChange:t,className:"".concat(s," ").concat(M.a.input),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),r.a.createElement("button",{onClick:n,className:M.a.button},"add"),r.a.createElement("span",{className:M.a.users},l)),r.a.createElement("span",{className:"".concat(M.a.err," ").concat(s)},c))},A=function(e){var a=e.users,t=e.addUserCallback,c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],o=l[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),p=m[0],d=m[1],E=a.length;return r.a.createElement(T,{name:s,setNameCallback:function(e){d(""),o(e.currentTarget.value)},addUser:function(){""!==s?(alert("Hello ".concat(s,"!")),t(s),o("")):d("please enter a valid name")},error:p,totalUsers:E})},H=t(83);var W=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];return console.log(t),r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"}," homeworks 3"),r.a.createElement(A,{users:t,addUserCallback:function(e){var a={_id:Object(H.a)(),name:e};c([a].concat(Object(S.a)(t)))}}))},F=t(5),P=t(16),G=t.n(P),L=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,c=e.onEnter,l=e.error,s=e.className,o=e.spanClassName,i=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(G.a.error," ").concat(o||""),m="".concat(G.a.input," ").concat(l?G.a.errorInput:G.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:m},i)),l&&r.a.createElement("span",{className:u},l))},R=t(22),J=t.n(R),U=t(23),B=t.n(U),D=function(e){var a=e.red,t=e.className,n=Object(F.a)(e,["red","className"]),c="".concat(a?B.a.red:B.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:c},n))},z=t(24),Q=t.n(z),V=function(e){e.type,e.onChange;var a=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),l="".concat(Q.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked)},className:l},c)),n&&r.a.createElement("span",{className:Q.a.spanClassName},n))};var X=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=t?"":"error",s=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(i.a)(o,2),m=u[0],p=u[1];return r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"}," homeworks 4"),r.a.createElement("div",{className:J.a.column},r.a.createElement(L,{value:t,onChangeText:c,onEnter:s,error:l}),r.a.createElement(L,{className:J.a.blue}),r.a.createElement(D,null,"default"),r.a.createElement(D,{red:!0,onClick:s},"delete "),r.a.createElement(D,{disabled:!0},"disabled"),r.a.createElement(V,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(V,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})))},Y=t(39),Z=t.n(Y),q=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,c=e.spanProps,l=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),o=Object(i.a)(s,2),u=o[0],m=o[1],p=c||{},d=p.children,E=p.onDoubleClick,_=p.className,f=Object(F.a)(p,["children","onDoubleClick","className"]),v="".concat(Z.a.superEditableSpan," ").concat(_);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:v},f),d||l.value))};function K(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function $(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}K("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"}," homeworks 6"),r.a.createElement("div",{className:"spanWrapper"},r.a.createElement(q,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:"buttonInner"},r.a.createElement(D,{onClick:function(){K("editable-span-value",t)}},"save"),r.a.createElement(D,{onClick:function(){c($("editable-span-value",t))}},"restore")))},ae=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,c=Object(F.a)(e,["options","onChange","onChangeOption"]),l=[null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},c),l)},te=t(40),ne=t.n(te),re=function(e){e.type;var a=e.name,t=e.options,n=e.value,c=e.onChange,l=e.onChangeOption,s=Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){c&&c(e),l&&l(e.currentTarget.value)},i=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",name:a,value:e,checked:0===n,onChange:o,className:ne.a.superRadio},s)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},ce=["x","y","z"];var le=function(){var e=Object(n.useState)(ce[1]),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"}," homeworks 7"),r.a.createElement("div",{className:"hwInner"},r.a.createElement("div",null,r.a.createElement(ae,{options:ce,value:t,onChangeOption:c})),r.a.createElement("h2",null,t),r.a.createElement("div",null,r.a.createElement(re,{name:"radio",options:ce,value:t,onChangeOption:c}))))},se=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(S.a)(e.sort((function(e,a){return e.name<a.name?-1:1}))):"down"===a.payload?Object(S.a)(e.sort((function(e,a){return e.name>a.name?-1:1}))):e;case"check":return Object(S.a)(e.filter((function(e){return e.age>a.payload})));default:return e}},oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ie=function(){var e=Object(n.useState)(oe),a=Object(i.a)(e,2),t=a[0],c=a[1],l={marginRight:"10px",marginLeft:"10px",display:"inline-block",fontWeight:500},s=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",{style:l},e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"}," homeworks 8"),r.a.createElement("div",{className:"hwInner"},s),r.a.createElement("div",{className:"buttonInner"},r.a.createElement(D,{onClick:function(){return c(se(oe,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(D,{onClick:function(){return c(se(oe,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(D,{onClick:function(){return c(se(oe,{type:"check",payload:18}))}},"check 18")))};var ue=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(new Date),s=Object(i.a)(l,2),o=s[0],u=s[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),d=p[0],E=p[1],_=function(){clearInterval(t)},f=o.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),v=o.toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit"});return r.a.createElement("div",null,r.a.createElement("div",{className:"hwInner"},r.a.createElement("div",{onMouseEnter:function(e){E(!0)},onMouseLeave:function(e){E(!1)}},f),d&&r.a.createElement("div",null,v)),r.a.createElement("div",{className:"buttonInner"},r.a.createElement(D,{onClick:function(){_();var e=window.setInterval((function(){u(new Date)}),1e3);c(e)}},"start"),r.a.createElement(D,{onClick:_},"stop")))};var me=function(){return r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"}," homeworks 9"),r.a.createElement(ue,null))},pe=t(41),de=t.n(pe),Ee=t(6),_e=t(19),fe={isLoading:!1},ve=function(e){return{type:"SET-LOADING",isLoading:e}};var ge=function(){var e=Object(Ee.c)((function(e){return e.loading.isLoading})),a=Object(Ee.b)();return r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"},"homeworks 10"),e?r.a.createElement("div",{className:"hwInner"},r.a.createElement("img",{src:de.a,alt:""})):r.a.createElement("div",{className:"hwInner"},r.a.createElement(D,{onClick:function(){a(ve(!0)),setTimeout((function(){a(ve(!1))}),2e3)}},"set loading...")))},he=t(44),be=t.n(he),Ne=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,c=Object(F.a)(e,["type","onChange","onChangeRange","className"]),l="".concat(be.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:l},c)))},ke=function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"range"}))};var Ce=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(100),s=Object(i.a)(l,2),o=s[0];return s[1],r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"},"homeworks 11"),r.a.createElement("div",{className:"hwInner"},r.a.createElement("span",null,t),r.a.createElement(Ne,{onChangeRange:c})),r.a.createElement("div",{className:"hwInner"},r.a.createElement("span",null,t),r.a.createElement(ke,null),r.a.createElement("span",null,o)))},Oe=t(26),je=t.n(Oe),xe={theme:"dark"},we=["dark","red","some"];var ye=function(){var e=Object(Ee.c)((function(e){return e.theme.theme})),a=Object(Ee.b)();return r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:je.a[e]},r.a.createElement("span",{className:je.a[e+"-text"]},r.a.createElement(ae,{options:we,onChangeOption:function(e){a(function(e){return{type:"CHANGE-THEME",theme:e}}(e))}}))))};var Se=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement(W,null),r.a.createElement(X,null),r.a.createElement(ee,null),r.a.createElement(le,null),r.a.createElement(ie,null),r.a.createElement(me,null),r.a.createElement(ge,null),r.a.createElement(Ce,null),r.a.createElement(ye,null))};var Ie=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Me=t(45),Te=t.n(Me),Ae=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),o=s[0],u=s[1];return r.a.createElement("div",null,r.a.createElement("div",null,o),r.a.createElement("input",{type:"checkbox",checked:t,onChange:function(e){c(e.currentTarget.checked),console.log(t)}}),r.a.createElement("button",{onClick:function(){return function(e){Te.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e}).then((function(e){u(e.statusText),console.log(o)})).catch((function(e){console.log(e.response.data.errorText),u(e.response.data.errorText)}))}(t)}},"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))};var He=function(){return r.a.createElement("div",null,r.a.createElement(Ae,null))},We="/pre-junior",Fe="/junior-plus";var Pe=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",element:r.a.createElement(E.a,{to:We})}),r.a.createElement(E.b,{path:We,element:r.a.createElement(Se,null)}),r.a.createElement(E.b,{path:Fe,element:r.a.createElement(He,null)}),"// add routes",r.a.createElement(E.b,{path:"/*",element:r.a.createElement(Ie,null)})))};var Ge=function(){return r.a.createElement("div",{className:"page"},r.a.createElement(u.a,null,r.a.createElement(d,null),r.a.createElement(Pe,null)))};var Le=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("h2",{className:"title"},"react homeworks:"),r.a.createElement(Ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=t(27),Je=Object(Re.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-LOADING":return Object(_e.a)({},e,{isLoading:a.isLoading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE-THEME":return Object(_e.a)({},e,{theme:a.theme});default:return e}}}),Ue=Object(Re.b)(Je);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee.a,{store:Ue},r.a.createElement(Le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports={wrap:"Header_wrap__-C5ko",btn:"Header_btn__3B04E",nav_list:"Header_nav_list__1dcST",active:"Header_active__DV5kt",nav_link:"Header_nav_link__13mWq"}}},[[46,1,2]]]);
//# sourceMappingURL=main.23b8c418.chunk.js.map