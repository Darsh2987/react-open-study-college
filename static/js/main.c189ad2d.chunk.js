(this["webpackJsonpreact-open-study-college"]=this["webpackJsonpreact-open-study-college"]||[]).push([[0],{28:function(e,c,t){},51:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t.n(a),r=t(20),i=t.n(r),n=t(9),d=t.n(n),o=t(21),j=t(10),l=(t(28),t(22)),b=t.n(l),h=t.p+"static/media/spinner.11d9cde8.gif",p=t(0);var u=function(){return Object(p.jsx)("img",{src:h,className:"spinner",alt:"Loading"})},O=t(4),m=t(5),x=t.p+"static/media/profile-picture.d5047f31.jpg";var f=function(e){return Object(p.jsxs)("div",{className:"card_header",children:[Object(p.jsx)(O.a,{icon:m.f}),Object(p.jsxs)("div",{className:"card_profile",children:[Object(p.jsxs)("div",{className:"card_profile-picture-wrapper",children:[Object(p.jsx)("img",{src:x,className:"card_profile-picture",alt:"Profile"}),Object(p.jsx)(O.a,{icon:m.b})]}),Object(p.jsx)("h1",{className:"card_profile-name",children:e.data.name}),Object(p.jsx)("h3",{className:"card_profile-status",children:e.data.status}),Object(p.jsxs)("h3",{className:"card_profile-id",children:["ID: ",e.data.id]})]})]})};var v=function(){return Object(p.jsxs)("div",{className:"card_infobar",children:[Object(p.jsxs)("div",{className:"card_infobar-col-one",children:[Object(p.jsx)("p",{children:"Complete"}),Object(p.jsx)("p",{children:"Enrolment Status"})]}),Object(p.jsx)("span",{}),Object(p.jsxs)("div",{className:"card_infobar-col-two",children:[Object(p.jsx)("p",{children:"3"}),Object(p.jsx)("p",{children:"Completed Courses"})]})]})};var g=function(e){return Object(p.jsxs)("div",{className:"card_profile-info",children:[Object(p.jsxs)("div",{className:"card_profile-info-contact",children:[Object(p.jsx)("h2",{children:"Contact Details"}),Object(p.jsxs)("p",{children:["Email: ",e.data.email]}),Object(p.jsxs)("p",{children:["Tel: ",e.data.telephone]})]}),Object(p.jsxs)("div",{className:"card_profile-info-about",children:[Object(p.jsx)("h2",{children:"About Me"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati, dolorum vel neque unde quod fugiat."})]})]})};var N=function(e){return Object(p.jsxs)("div",{className:"card_course",children:[Object(p.jsx)(O.a,{icon:m.e}),Object(p.jsxs)("div",{className:"card_course-current-course",children:[Object(p.jsx)("h2",{children:"Current Course:"}),Object(p.jsx)("p",{children:(c=e.data.course_title,t=20,(null===c||void 0===c?void 0:c.length)>t?c.substr(0,t-1)+"...":c)})]}),Object(p.jsx)(O.a,{icon:m.d})]});var c,t},y=t.p+"static/media/photo-1.012bb464.jpg",_=t.p+"static/media/photo-2.7dd72148.jpg",C=t.p+"static/media/photo-3.15abfdb6.jpg",M=t.p+"static/media/photo-4.a0903e8c.jpg";var w=function(){return Object(p.jsxs)("div",{className:"card_my-photos",children:[Object(p.jsxs)("div",{className:"card_my-photos-headline",children:[Object(p.jsx)("h2",{children:"My Photos"}),Object(p.jsx)(O.a,{icon:m.c})]}),Object(p.jsxs)("div",{className:"card_my-photos-gallery",children:[Object(p.jsx)("div",{className:"card_my-photos-gallery-image w-2 h-2",children:Object(p.jsx)("img",{src:y,alt:"My Photos One"})}),Object(p.jsx)("div",{className:"card_my-photos-gallery-image w-2",children:Object(p.jsx)("img",{src:_,alt:"My Photos Two"})}),Object(p.jsx)("div",{className:"card_my-photos-gallery-image",children:Object(p.jsx)("img",{src:C,alt:"My Photos Three"})}),Object(p.jsxs)("div",{className:"card_my-photos-gallery-image",children:[Object(p.jsx)("img",{src:M,alt:"My Photos Four"}),Object(p.jsx)(O.a,{icon:m.a})]})]})]})};var P=function(e){return e.isLoading?Object(p.jsx)(u,{}):Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)(f,{data:e.data}),Object(p.jsx)(v,{}),Object(p.jsx)(g,{data:e.data}),Object(p.jsx)(N,{data:e.data}),Object(p.jsx)(w,{})]})};var T=function(){var e=Object(a.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],r=Object(a.useState)(!0),i=Object(j.a)(r,2),n=i[0],l=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(d.a.mark((function e(){var c,t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()("http://leads.beta.openstudycollege.info/getTopLeads");case 3:c=e.sent,t=c.data,a=t[Math.floor(Math.random()*t.length)],s(a),l(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR FETCHING DATA FROM API");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("div",{className:"main",children:Object(p.jsx)(P,{isLoading:n,data:t})})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,r=c.getLCP,i=c.getTTFB;t(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.c189ad2d.chunk.js.map