(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={someClass:"Greeting_someClass__1tbOv",wrap:"Greeting_wrap__3xZOx",inner:"Greeting_inner__3cx0n",button:"Greeting_button__3l4jW",users:"Greeting_users__3I0TY",input:"Greeting_input__1mtmb",err:"Greeting_err__2ZvMd",error:"Greeting_error__3766I"}},function(e,a,t){e.exports={Message:"Message_Message__26zsd",Message__avatar:"Message_Message__avatar__tMHcP",Message__info:"Message_Message__info__3wEY3",Message__author:"Message_Message__author__2xpbn",Message__text:"Message_Message__text__3tV6c",Message__time:"Message_Message__time__3nWzQ"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3nLAw",errorInput:"SuperInputText_errorInput__2NFjy",error:"SuperInputText_error__1V9zd"}},function(e,a,t){e.exports={blue:"HW4_blue__2UG0Z",column:"HW4_column__2bUQz",testSpanError:"HW4_testSpanError__6Sr7w"}},function(e,a,t){e.exports={default:"SuperButton_default__1rHoF",red:"SuperButton_red__3js8v"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2izCw",spanClassName:"SuperCheckbox_spanClassName__2CoON"}},,,function(e,a,t){e.exports={App:"App_App__N8wWW"}},,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),s=(t(20),t(13)),o=t.n(s),i=t(3),u=t.n(i);var m=function(e){return r.a.createElement("div",{className:u.a.Message},r.a.createElement("img",{className:u.a.Message__avatar,src:e.avatar,alt:"img"}),r.a.createElement("div",{className:u.a.Message__info},r.a.createElement("h4",{className:u.a.Message__author},e.name),r.a.createElement("p",{className:u.a.Message__text},e.message),r.a.createElement("span",{className:u.a.Message__time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Some Name",p="some text some text some text some text",E="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(m,{avatar:_,name:d,message:p,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},f=t(1),g={marginRight:"10px"};var b=function(e){return r.a.createElement("div",null,r.a.createElement("span",{style:g},e.affair.name),r.a.createElement("span",{style:g},e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var v=function(e){var a=e.data.map((function(a){return r.a.createElement(b,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(n.useState)(C),a=Object(f.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(f.a)(c,2),o=s[0],i=s[1],u=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(v,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=t(14),x=t(2),w=t.n(x),M=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=l?w.a.error:"";return r.a.createElement("div",{className:w.a.wrap},r.a.createElement("div",{className:w.a.inner},r.a.createElement("input",{value:a,onChange:t,className:"".concat(s," ").concat(w.a.input),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),r.a.createElement("button",{onClick:n,className:w.a.button},"add"),r.a.createElement("span",{className:w.a.users},c)),r.a.createElement("span",{className:"".concat(w.a.err," ").concat(s)},l))},O=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(f.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),u=Object(f.a)(i,2),m=u[0],_=u[1],d=a.length;return r.a.createElement(M,{name:s,setNameCallback:function(e){_(""),o(e.currentTarget.value)},addUser:function(){""!==s?(alert("Hello ".concat(s,"!")),t(s),o("")):_("please enter a valid name")},error:m,totalUsers:d})},j=t(23);var y=function(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(O,{users:t,addUserCallback:function(e){var a={_id:Object(j.a)(),name:e};l([a].concat(Object(N.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=t(4),A=t(7),I=t.n(A),T=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(S.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(I.a.error," ").concat(o||""),m="".concat(I.a.errorInput," ").concat(s?I.a.superInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:u},c))},W=t(8),G=t.n(W),F=t(9),H=t.n(F),U=function(e){var a=e.red,t=e.className,n=Object(S.a)(e,["red","className"]),l="".concat(a?H.a.red:H.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},z=t(10),B=t.n(z),P=function(e){e.type,e.onChange;var a=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),l=Object(S.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(B.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked)},className:c},l)),n&&r.a.createElement("span",{className:B.a.spanClassName},n))};var Z=function(){var e=Object(n.useState)(""),a=Object(f.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),i=Object(f.a)(o,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(T,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(T,{className:G.a.blue}),r.a.createElement(U,null,"default"),r.a.createElement(U,{red:!0,onClick:s},"delete "),r.a.createElement(U,{disabled:!0},"disabled"),r.a.createElement(P,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(P,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var J=function(){return r.a.createElement("div",null,"// add NavLinks")};var K=function(){return r.a.createElement("div",null,"// add routes")};var L=function(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(K,null))};var Y=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(h,null),r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement(Z,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.4b7074cb.chunk.js.map