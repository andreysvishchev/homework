(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__1tbOv",wrap:"Greeting_wrap__3xZOx",inner:"Greeting_inner__3cx0n",button:"Greeting_button__3l4jW",users:"Greeting_users__3I0TY",input:"Greeting_input__1mtmb",err:"Greeting_err__2ZvMd",error:"Greeting_error__3766I"}},function(e,a,t){e.exports={Message:"Message_Message__26zsd",Message__avatar:"Message_Message__avatar__tMHcP",Message__info:"Message_Message__info__3wEY3",Message__author:"Message_Message__author__2xpbn",Message__text:"Message_Message__text__3tV6c",Message__time:"Message_Message__time__3nWzQ"}},,,,function(e,a,t){e.exports={wrap:"Header_wrap__-C5ko",nav_list:"Header_nav_list__1dcST",btn:"Header_btn__3B04E",nav_link:"Header_nav_link__13mWq"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3nLAw",errorInput:"SuperInputText_errorInput__2NFjy",error:"SuperInputText_error__1V9zd"}},function(e,a,t){e.exports={blue:"HW4_blue__2UG0Z",column:"HW4_column__2bUQz",testSpanError:"HW4_testSpanError__6Sr7w"}},function(e,a,t){e.exports={default:"SuperButton_default__1rHoF",red:"SuperButton_red__3js8v"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2izCw",spanClassName:"SuperCheckbox_spanClassName__2CoON"}},,,function(e,a,t){e.exports={App:"App_App__N8wWW"}},function(e,a,t){e.exports={superEditableSpan:"SuperEditableSpan_superEditableSpan__2id9a"}},function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(25),t(18)),u=t.n(o),s=t(8),i=t(10),m=t.n(i);var p=function(){return r.a.createElement("div",{className:m.a.wrap},r.a.createElement("div",{className:m.a.nav_list},r.a.createElement(s.b,{className:m.a.nav_link,to:"/pre-junior"}," PreJunior"),r.a.createElement(s.b,{className:m.a.nav_link,to:"/junior-plus"},"JuniorPlus"),r.a.createElement("button",{className:m.a.btn},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))},E=t(1),d=t(6),_=t.n(d);var h=function(e){return r.a.createElement("div",{className:_.a.Message},r.a.createElement("img",{className:_.a.Message__avatar,src:e.avatar,alt:"img"}),r.a.createElement("div",{className:_.a.Message__info},r.a.createElement("h4",{className:_.a.Message__author},e.name),r.a.createElement("p",{className:_.a.Message__text},e.message),r.a.createElement("span",{className:_.a.Message__time},e.time)))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",v="some text some text some text some text",b="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(h,{avatar:g,name:f,message:v,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=t(2),O={marginRight:"10px"};var N=function(e){return r.a.createElement("div",null,r.a.createElement("span",{style:O},e.affair.name),r.a.createElement("span",{style:O},e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(y),a=Object(k.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(k.a)(c,2),u=o[0],s=o[1],i=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(9),S=t(5),M=t.n(S),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?M.a.error:"";return r.a.createElement("div",{className:M.a.wrap},r.a.createElement("div",{className:M.a.inner},r.a.createElement("input",{value:a,onChange:t,className:"".concat(o," ").concat(M.a.input),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),r.a.createElement("button",{onClick:n,className:M.a.button},"add"),r.a.createElement("span",{className:M.a.users},c)),r.a.createElement("span",{className:"".concat(M.a.err," ").concat(o)},l))},F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(k.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(k.a)(s,2),m=i[0],p=i[1],E=a.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){p(""),u(e.currentTarget.value)},addUser:function(){""!==o?(alert("Hello ".concat(o,"!")),t(o),u("")):p("please enter a valid name")},error:m,totalUsers:E})},I=t(28);var A=function(){var e=Object(n.useState)([]),a=Object(k.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(F,{users:t,addUserCallback:function(e){var a={_id:Object(I.a)(),name:e};l([a].concat(Object(w.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(4),H=t(12),P=t.n(H),G=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(P.a.error," ").concat(u||""),m="".concat(P.a.errorInput," ").concat(o?P.a.superInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},B=t(13),J=t.n(B),U=t(14),z=t.n(U),Z=function(e){var a=e.red,t=e.className,n=Object(W.a)(e,["red","className"]),l="".concat(a?z.a.red:z.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},D=t(15),K=t.n(D),L=function(e){e.type,e.onChange;var a=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),l=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(K.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked)},className:c},l)),n&&r.a.createElement("span",{className:K.a.spanClassName},n))};var R=function(){var e=Object(n.useState)(""),a=Object(k.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(k.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(G,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(G,{className:J.a.blue}),r.a.createElement(Z,null,"default"),r.a.createElement(Z,{red:!0,onClick:o},"delete "),r.a.createElement(Z,{disabled:!0},"disabled"),r.a.createElement(L,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(L,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=t(19),q=t.n(Y),Q=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(k.a)(o,2),s=u[0],i=u[1],m=l||{},p=m.children,E=m.onDoubleClick,d=m.className,_=Object(W.a)(m,["children","onDoubleClick","className"]),h="".concat(q.a.superEditableSpan," ").concat(d);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(G,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),E&&E(e)},className:h},_),p||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function X(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}V("test",{x:"A",y:1});X("test",{x:"",y:0});var $=function(){var e=Object(n.useState)(""),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Q,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(Z,{onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(Z,{onClick:function(){l(X("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ee=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(W.a)(e,["options","onChange","onChangeOption"]),c=[null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},ae=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(W.a)(e,["type","name","options","value","onChange","onChangeOption"]),u=function(e){l&&l(e),c&&c(e.currentTarget.value)},s=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",name:a,value:e,checked:0===n,onChange:u},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,s)},te=["x","y","z"];var ne=function(){var e=Object(n.useState)(te[1]),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ee,{options:te,value:t,onChangeOption:l})),r.a.createElement("h2",null,t),r.a.createElement("div",null,r.a.createElement(ae,{name:"radio",options:te,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},re=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(w.a)(e.sort((function(e,a){return e.name<a.name?-1:1}))):"down"===a.payload?Object(w.a)(e.sort((function(e,a){return e.name>a.name?-1:1}))):e;case"check":return Object(w.a)(e.filter((function(e){return e.age>a.payload})));default:return e}},le=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ce=function(){var e=Object(n.useState)(le),a=Object(k.a)(e,2),t=a[0],l=a[1],c={marginRight:"10px",marginLeft:"10px",display:"inline-block",fontWeight:500},o=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",{style:c},e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",o,r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(re(le,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(re(le,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(re(le,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var oe=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(x,null),r.a.createElement(A,null),r.a.createElement(R,null),r.a.createElement($,null),r.a.createElement(ne,null),r.a.createElement(ce,null))};var ue=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var se=function(){return r.a.createElement("div",null,"Jun plus")},ie="/pre-junior",me="/junior-plus";var pe=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",element:r.a.createElement(E.a,{to:ie})}),r.a.createElement(E.b,{path:ie,element:r.a.createElement(oe,null)}),r.a.createElement(E.b,{path:me,element:r.a.createElement(se,null)}),"// add routes",r.a.createElement(E.b,{path:"/*",element:r.a.createElement(ue,null)})))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(p,null),r.a.createElement(pe,null)))};var de=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.7570dc78.chunk.js.map