(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(n){n.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},20:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var a,r,i,o,c,d,s,l,b,u,p=t(1),m=t.n(p),f=t(9),x=t.n(f),h=(t(20),t(13)),j=t(4),O=t(5),g=t(7),C=t(6),v=t(26),y=t(10),w=t(2),k=t(3),S=k.a.form(a||(a=Object(w.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  border: 2px solid black;\n  width: 560px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 6px;\n"]))),z=k.a.label(r||(r=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  font-weight: 700;\n  margin-left: 15px;\n  margin-bottom: 15px;\n"]))),A=k.a.input(i||(i=Object(w.a)(["\nwidth: 250px;\nborder: 1px solid black;\nborder-radius: 4px;\npadding: 15px 16px;\nmargin-top: 15px;\nfont-weight: 700;\nfont-size: 18px;\n"]))),I=k.a.button(o||(o=Object(w.a)(["\ndisplay: inline-block;\ncolor: black;\nfont-weight: 700;\nfont-size: 18px;\npadding: 10px 30px;\noutline: none;\nborder-style: solid none;\nborder-color: #fdbe33 #000 #d77206;\nborder-radius: 6px;\nbackground: linear-gradient(#f3ae0f, #e38916) #e38916;\nmargin: auto;\ncursor: pointer;\n"]))),F=t(0),N=function(n){Object(g.a)(t,n);var e=Object(C.a)(t);function t(){var n;Object(j.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:"",id:""},n.nameId=Object(v.a)(),n.numberId=Object(v.a)(),n.handleChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(y.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(O.a)(t,[{key:"render",value:function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(S,{onSubmit:this.handleSubmit,children:[Object(F.jsxs)(z,{htmlFor:this.nameId,children:["Name",Object(F.jsx)(A,{type:"text",name:"name",value:this.state.name,autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameId})]}),Object(F.jsxs)(z,{htmlFor:this.numberId,children:["Number",Object(F.jsx)(A,{type:"tel",name:"number",value:this.state.number,autoComplete:"off",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberId})]}),Object(F.jsx)(I,{type:"submit",children:"Add contact"})]})})}}]),t}(p.Component),B=k.a.li(c||(c=Object(w.a)(["\ndisplay: flex;\nflex-direction: row;\naline-item: start;\nfont-weight: 700;\nfont-size: 18px;\npadding: 5px 5px;\nmargin: 5px 5px;\n"]))),D=k.a.button(d||(d=Object(w.a)(["\ndisplay: inline-block;\ncolor: black;\nfont-weight: 600;\nfont-size: 16px;\npadding: 2px 12px 2px 12px;\nborder-style: solid none;\nborder-color: #fdbe33 #000 #d77206;\nborder-radius: 6px;\nbackground: linear-gradient(#f3ae0f, #e38916) #e38916;\nmargin-left: 25px;\ncursor: pointer;\n"]))),J=k.a.p(s||(s=Object(w.a)(["\nmargin: 0px;\nmargin-left: 15px;\naline-item: start;\n"]))),H=function(n){var e=n.contacts,t=n.onContactDelete;return Object(F.jsx)("ul",{children:e.map((function(n){var e=n.id,a=n.name,r=n.number;return Object(F.jsxs)(B,{children:[Object(F.jsx)(J,{children:a}),Object(F.jsx)(J,{children:r}),Object(F.jsx)(D,{onClick:function(){return t(e)},children:"Delete"})]},e)}))})},Z=k.a.label(l||(l=Object(w.a)(["\nfont-weight: 700;\nfont-size: 20px;\ndisplay: inline;\npaddinf: 15px 15px;\n"]))),q=k.a.input(b||(b=Object(w.a)(["\nwidth: 260px;\nborder: 1px solid black;\nborder-radius: 4px;\npadding: 10px 10px;\nmargin: 10px 10px;\nfont-weight: 700;\nfont-size: 18px;\n;"]))),E=function(n){var e=n.filter,t=n.onContactFind;return Object(F.jsx)("div",{children:Object(F.jsxs)(Z,{children:["Find contacts by name",Object(F.jsx)(q,{type:"text",value:e,onChange:t})]})})},L=k.a.div(u||(u=Object(w.a)(["\n  margin-left: 50px;\n"]))),M=t(12),T=function(n){Object(g.a)(t,n);var e=Object(C.a)(t);function t(){var n;Object(j.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={contacts:M,filter:""},n.formSubmitHandler=function(e){var t={name:e.name,number:e.number,id:Object(v.a)()};n.state.contacts.find((function(n){return n.name===t.name}))?alert("".concat(t.name," is already in contacts!")):n.setState((function(n){var e=n.contacts;return{contacts:[t].concat(Object(h.a)(e))}}))},n.deleteContacts=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.findContactByName=function(e){n.setState({filter:e.currentTarget.value})},n.getVisibleContact=function(){var e=n.state,t=e.filter,a=e.contacts,r=t.toLowerCase();return a.filter((function(n){return n.name.toLowerCase().includes(r)}))},n}return Object(O.a)(t,[{key:"render",value:function(){var n=this.state.filter,e=this.getVisibleContact();return Object(F.jsxs)(L,{children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(N,{onSubmit:this.formSubmitHandler}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)(E,{filter:n,onContactFind:this.findContactByName}),Object(F.jsx)(H,{contacts:e,onContactDelete:this.deleteContacts})]})}}]),t}(p.Component);x.a.render(Object(F.jsx)(m.a.StrictMode,{children:Object(F.jsx)(T,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ad7d0c27.chunk.js.map