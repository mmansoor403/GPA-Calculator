(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,c){e.exports={input:"AddData_input__3lB3X",credit:"AddData_credit__XTWLO"}},function(e,t,c){e.exports={backdrop:"GpaModal_backdrop__2jYiB",modal:"GpaModal_modal__1oRX8",header:"GpaModal_header__2C3IR",content:"GpaModal_content__AFdSL",actions:"GpaModal_actions__3_zTd"}},,,,function(e,t,c){e.exports={datas:"DataList_datas__Awznw",border:"DataList_border__awh1f"}},,function(e,t,c){e.exports={card:"Card_card__1559W"}},function(e,t,c){e.exports={button:"Button_button__LnyfD"}},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(9),i=c.n(n),s=(c(17),c(12)),d=c(2),r=c(3),l=c.n(r),o=c(10),j=c.n(o),b=c(0),u=function(e){return Object(b.jsx)("div",{className:"".concat(j.a.card," ").concat(e.className),children:e.children})},O=c(11),h=c.n(O),x=function(e){return Object(b.jsx)("button",{className:h.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},p=c(4),v=c.n(p),m=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:v.a.backdrop}),Object(b.jsxs)(u,{className:v.a.modal,children:[Object(b.jsx)("header",{className:v.a.header,children:Object(b.jsx)("h2",{children:"Grade Point Average"})}),Object(b.jsx)("div",{className:v.a.content,children:Object(b.jsxs)("p",{children:["Your GPA is ",e.content]})}),Object(b.jsx)("footer",{className:v.a.actions,children:Object(b.jsx)(x,{onClick:e.onConfirm,children:"Okay"})})]})]})},_=function(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),n=c[0],i=c[1],s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],j=r[1],O=Object(a.useState)(""),h=Object(d.a)(O,2),p=h[0],v=h[1],_=Object(a.useState)(""),f=Object(d.a)(_,2),g=f[0],N=f[1],C=Object(a.useState)(0),S=Object(d.a)(C,2),A=S[0],G=S[1],k=Object(a.useState)(0),D=Object(d.a)(k,2),M=D[0],y=D[1],B=Object(a.useState)(0),R=Object(d.a)(B,2),w=R[0],F=R[1],I=Object(a.useState)(0),L=Object(d.a)(I,2),P=L[0],T=L[1],X=Object(a.useState)(!1),z=Object(d.a)(X,2),J=z[0],V=z[1];return Object(b.jsxs)("div",{children:[J&&Object(b.jsx)(m,{content:P,onConfirm:function(){V(!1)}}),Object(b.jsx)(u,{className:l.a.input,children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),T((w/A).toFixed(2)),e.onAddData(n,o,g),console.log(n,o,g),console.log("TotalCredit: ",A),console.log("Multiplied Value: ",M),console.log("Multiplied Total Value: ",w),i(""),j(""),v(""),N("")},children:[Object(b.jsx)("label",{htmlFor:"subname",children:"Subject Name"}),Object(b.jsx)("input",{id:"subname",value:n,type:"text",onChange:function(e){i(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"grade",children:"Grade"}),Object(b.jsxs)("select",{id:"grade",value:p,onChange:function(e){j(e.target.options[e.target.selectedIndex].text),v(+e.target.value),y(+e.target.value*g)},children:[Object(b.jsx)("option",{value:"select Grade",children:"  Select Grade  "}),Object(b.jsx)("option",{value:"10",children:"O"}),Object(b.jsx)("option",{value:"9",children:"A+"}),Object(b.jsx)("option",{value:"8",children:"A"}),Object(b.jsx)("option",{value:"7",children:"B+"}),Object(b.jsx)("option",{value:"6",children:"B"}),Object(b.jsx)("option",{value:"0",children:"RA"})]}),Object(b.jsx)("label",{htmlFor:"credit",children:"Credit"}),Object(b.jsxs)("select",{id:"credit",value:g,onChange:function(e){N(+e.target.value),G(+A+parseInt(e.target.value)),y(p*e.target.value),F(+w+parseInt(p*e.target.value),10)},children:[Object(b.jsx)("option",{value:"select Credit",children:"  Select Credit  "}),Object(b.jsx)("option",{className:l.a.credit,disabled:0===p,value:"10",children:"10"}),Object(b.jsx)("option",{className:l.a.credit,disabled:0===p,value:"4",children:"4"}),Object(b.jsx)("option",{className:l.a.credit,disabled:0===p,value:"3",children:"3"}),Object(b.jsx)("option",{className:l.a.credit,disabled:0===p,value:"2",children:"2"}),Object(b.jsx)("option",{className:l.a.credit,disabled:0!==p,value:"0",children:"0"})]}),Object(b.jsx)(x,{type:"submit",children:"Add Data"}),Object(b.jsx)(x,{onClick:function(){V(!0),console.log("GPA: ",P)},children:"Get GPA"}),Object(b.jsx)(x,{onClick:function(){e.onResetData(n,o,g),i(""),j(""),v(""),N(""),G(0),y(0),F(0),T(0)},children:"Reset"})]})})]})},f=c(8),g=c.n(f),N=function(e){return Object(b.jsx)(u,{className:g.a.datas,children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Subject Name"})}),Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Grade"})}),Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Credit"})})]}),e.datas.map((function(e){return Object(b.jsxs)("div",{className:g.a.border,children:[Object(b.jsx)("div",{children:e.subject}),Object(b.jsx)("div",{children:e.grade}),Object(b.jsx)("div",{children:e.credit})]},e.id)}))]})})};var C=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{onAddData:function(e,t,c){n((function(a){return[].concat(Object(s.a)(a),[{subject:e,grade:t,credit:c,id:Math.random().toString()}])}))},onResetData:function(){n((function(){return[]}))}}),Object(b.jsx)(N,{datas:c})]})};i.a.render(Object(b.jsx)(C,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.c135d93f.chunk.js.map