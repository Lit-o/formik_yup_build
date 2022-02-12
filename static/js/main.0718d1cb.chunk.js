(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{171:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),l=n(57),c=n.n(l),s=(n(69),n(64)),o=n(63),i=n(10),u=n(1),m=function(){var e=Object(o.a)({initialValues:{name:"",email:"",amount:0,currency:"",text:"",terms:!1},validationSchema:i.c({name:i.d().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c \u0434\u0432\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 // Need two letters at least").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 // Required field"),email:i.d().email("\u0421\u043e\u0431\u043b\u044e\u0434\u0430\u0439\u0442\u0435 \u0444\u043e\u0440\u043c\u0430\u0442 email // Wrong email format").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 // Required field"),amount:i.b().min(5,"min 5").required(),currency:i.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 // Required field"),terms:i.a().required("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 // Agree needed").oneOf([!0],"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 // Agree needed")}),onSubmit:function(e){console.log(JSON.stringify(e,null,2))}});return Object(u.jsxs)("form",{className:"form",onSubmit:e.handleSubmit,children:[Object(u.jsx)("h2",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438"}),Object(u.jsx)("label",{htmlFor:"name",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(u.jsx)("input",Object(s.a)({id:"name",name:"name",type:"text"},e.getFieldProps("name"))),e.errors.name&&e.touched.name&&Object(u.jsx)("p",{className:"error",children:e.errors.name}),Object(u.jsx)("label",{htmlFor:"email",children:"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430"}),Object(u.jsx)("input",{id:"email",name:"email",type:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.email&&e.touched.email&&Object(u.jsx)("p",{className:"error",children:e.errors.email}),Object(u.jsx)("label",{htmlFor:"amount",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(u.jsx)("input",{id:"amount",name:"amount",type:"number",value:e.values.amount,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.amount&&e.touched.amount&&Object(u.jsx)("p",{className:"error",children:e.errors.amount}),Object(u.jsx)("label",{htmlFor:"currency",children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(u.jsxs)("select",{id:"currency",name:"currency",value:e.values.currency,onChange:e.handleChange,onBlur:e.handleBlur,children:[Object(u.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"}),Object(u.jsx)("option",{value:"USD",children:"USD"}),Object(u.jsx)("option",{value:"UAH",children:"UAH"}),Object(u.jsx)("option",{value:"RUB",children:"RUB"})]}),e.errors.currency&&e.touched.currency&&Object(u.jsx)("p",{className:"error",children:e.errors.currency}),Object(u.jsx)("label",{htmlFor:"text",children:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(u.jsx)("textarea",{id:"text",name:"text",value:e.values.text,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.text&&e.touched.text&&Object(u.jsx)("p",{className:"error",children:e.errors.text}),Object(u.jsxs)("label",{className:"checkbox",children:[Object(u.jsx)("input",{name:"terms",type:"checkbox",value:e.values.terms,onChange:e.handleChange,onBlur:e.handleBlur}),"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438?"]}),e.errors.terms&&e.touched.terms&&Object(u.jsx)("p",{className:"error",children:e.errors.terms}),Object(u.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})};var d=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(m,{})})};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))},69:function(e,r,n){}},[[171,1,2]]]);
//# sourceMappingURL=main.0718d1cb.chunk.js.map