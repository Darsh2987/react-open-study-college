(this["webpackJsonpreact-open-study-college"]=this["webpackJsonpreact-open-study-college"]||[]).push([[0],{28:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),r=c(20),i=c.n(r),n=c(9),d=c.n(n),o=c(21),l=c(10),j=(c(28),c(22)),b=c.n(j),h=c.p+"static/media/spinner.11d9cde8.gif",p=c(0);var u=function(){return Object(p.jsx)("img",{src:h,className:"spinner",alt:"Loading"})},m=c(4),O=c(5),x=c.p+"static/media/profile-picture.d5047f31.jpg";var f=function(e){var t;return console.log(e.data.name),Object(p.jsxs)("div",{className:"card_header",children:[Object(p.jsx)(m.a,{icon:O.f}),Object(p.jsxs)("div",{className:"card_profile",children:[Object(p.jsxs)("div",{className:"card_profile-picture-wrapper",children:[Object(p.jsx)("img",{src:x,className:"card_profile-picture",alt:"Profile"}),Object(p.jsx)(m.a,{icon:O.b})]}),Object(p.jsx)("h1",{className:"card_profile-name",children:(t=e.data.name,t.split(" ").map((function(e){return e[0].toUpperCase()+e.substr(1).toLowerCase()})).join(" ")||"TBA")}),Object(p.jsx)("h3",{className:"card_profile-status",children:e.data.status||"TBA"}),Object(p.jsxs)("h3",{className:"card_profile-id",children:["ID: ",e.data.id||"TBA"]})]})]})};var v=function(){return Object(p.jsxs)("div",{className:"card_infobar",children:[Object(p.jsxs)("div",{className:"card_infobar-col-one",children:[Object(p.jsx)("p",{children:"Complete"}),Object(p.jsx)("p",{children:"Enrolment Status"})]}),Object(p.jsx)("span",{}),Object(p.jsxs)("div",{className:"card_infobar-col-two",children:[Object(p.jsx)("p",{children:"3"}),Object(p.jsx)("p",{children:"Completed Courses"})]})]})};var g=function(e){return Object(p.jsxs)("div",{className:"card_profile-info",children:[Object(p.jsxs)("div",{className:"card_profile-info-contact",children:[Object(p.jsx)("h2",{children:"Contact Details"}),Object(p.jsxs)("p",{children:["Email: ",(c=e.data.email,/\S+@\S+\.\S+/.test(c)?e.data.email:"TBA or Invalid Email")]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["Tel: ",(t=e.data.telephone,/^([+|\d])+([\s|\d])+([\d])$/.test(t)?e.data.telephone:"TBA or Invalid Phone No.")]})]}),Object(p.jsxs)("div",{className:"card_profile-info-about",children:[Object(p.jsx)("h2",{children:"About Me"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati, dolorum vel neque unde quod fugiat."})]})]});var t,c};var N=function(e){return Object(p.jsxs)("div",{className:"card_course",children:[Object(p.jsx)(m.a,{icon:O.e}),Object(p.jsxs)("div",{className:"card_course-current-course",children:[Object(p.jsx)("h2",{children:"Current Course:"}),Object(p.jsx)("p",{children:(t=e.data.course_title,c=20,((null===t||void 0===t?void 0:t.length)>c?t.substr(0,c-1)+"...":t)||"No course currently assigned")})]}),Object(p.jsx)(m.a,{icon:O.d})]});var t,c},y=c.p+"static/media/photo-1.012bb464.jpg",_=c.p+"static/media/photo-2.7dd72148.jpg",T=c.p+"static/media/photo-3.15abfdb6.jpg",C=c.p+"static/media/photo-4.a0903e8c.jpg";var w=function(){return Object(p.jsxs)("div",{className:"card_my-photos",children:[Object(p.jsxs)("div",{className:"card_my-photos-headline",children:[Object(p.jsx)("h2",{children:"My Photos"}),Object(p.jsx)(m.a,{icon:O.c})]}),Object(p.jsxs)("div",{className:"card_my-photos-gallery",children:[Object(p.jsx)("div",{className:"card_my-photos-gallery-image w-2 h-2",children:Object(p.jsx)("img",{src:y,alt:"My Photos One"})}),Object(p.jsx)("div",{className:"card_my-photos-gallery-image w-2",children:Object(p.jsx)("img",{src:_,alt:"My Photos Two"})}),Object(p.jsx)("div",{className:"card_my-photos-gallery-image",children:Object(p.jsx)("img",{src:T,alt:"My Photos Three"})}),Object(p.jsxs)("div",{className:"card_my-photos-gallery-image",children:[Object(p.jsx)("img",{src:C,alt:"My Photos Four"}),Object(p.jsx)(m.a,{icon:O.a})]})]})]})};var A=function(e){return e.isLoading?Object(p.jsx)(u,{}):Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)(f,{data:e.data}),Object(p.jsx)(v,{}),Object(p.jsx)(g,{data:e.data}),Object(p.jsx)(N,{data:e.data}),Object(p.jsx)(w,{})]})};var M=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!0),i=Object(l.a)(r,2),n=i[0],j=i[1];function h(e){return e[Math.floor(Math.random()*e.length)]}return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(d.a.mark((function e(){var t,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()("https://leads.beta.openstudycollege.info/getTopLeads");case 3:t=e.sent,c=t.data,a=h(c),s(a),j(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR FETCHING DATA FROM API");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("div",{className:"main",children:Object(p.jsx)(A,{isLoading:n,data:c})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.961c9c18.chunk.js.map