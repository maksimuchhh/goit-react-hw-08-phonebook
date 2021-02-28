(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={title:"App_title__-GfWs",container:"App_container__1MQN3",error:"App_error__1umzI",appear:"App_appear__3r9lb",appearActive:"App_appearActive__1uccQ",enter:"App_enter__2d_oE",enterActive:"App_enterActive__3Z_zS",exit:"App_exit__qu2sb",exitActive:"App_exitActive__3R2-x"}},31:function(t,e,n){t.exports={form:"Form_form__2TM1N"}},43:function(t,e,n){},46:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),i=n(26),o=n(17),s=n(7),l=n.n(s),u=(n(43),n(12)),j=n(5),d=n(29),b=n.n(d),p=n(6),h=n(30),O=n.n(h),m=n(8),f=n(2),x={addContact:Object(j.b)("contacts/add"),deleteContact:Object(j.b)("contacts/delete"),changeFilter:Object(j.b)("contacts/changeFilter")},v=Object(j.c)("",Object(m.a)({},x.changeFilter,(function(t,e){return e.payload}))),g=Object(j.c)([],(c={},Object(m.a)(c,x.addContact,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(m.a)(c,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),_=Object(f.c)({items:g,filter:v}),C=[].concat(Object(u.a)(Object(j.d)({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})),[b.a]),A={key:"contacts",storage:O.a,blacklist:["filter"]},y=Object(j.a)({reducer:{contacts:Object(p.g)(A,_)},middleware:C,devTools:!1}),F={store:y,persistor:Object(p.h)(y)},k=n(9),N=n(10),I=n(14),w=n(13),S=(n(46),n(1)),E=function(t){var e=t.children,n=t.title;return Object(S.jsxs)(S.Fragment,{children:[n&&Object(S.jsx)("h2",{children:n}),Object(S.jsx)("section",{children:e})]})},z=n(52),M=(n(48),function(t){Object(I.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){var t=this.props,e=t.name,n=t.changeInputForFilter,c=t.changeInput,a=t.value,r=t.isOpen,i=Object(u.a)(e);return i.splice(0,1,i[0].toUpperCase()),"filter"===e?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(z.a,{in:r,timeout:250,classNames:"label",unmountOnExit:!0,children:Object(S.jsx)("label",{htmlFor:e,children:i})}),Object(S.jsx)(z.a,{in:r,timeout:250,classNames:"form",unmountOnExit:!0,children:Object(S.jsx)("input",{onChange:"filter"===e?n:c,type:"text",id:e,value:a})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("label",{htmlFor:e,children:i}),Object(S.jsx)("input",{onChange:c,type:"text",id:e,value:a})]})}}]),n}(a.Component)),T=n(23),D=function(t){var e=t.text,n=t.deleteContact,c=t.id;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("button",{id:n?c:null,onClick:n?function(){return n(c)}:null,type:"submit",children:e})})},J=n(31),L=n.n(J),Q=function(t){Object(I.a)(n,t);var e=Object(w.a)(n);function n(){var t;Object(k.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.changeInput=function(e){t.setState((function(t){return Object(T.a)(Object(T.a)({},t),{},Object(m.a)({},e.target.id,e.target.value))}))},t}return Object(N.a)(n,[{key:"render",value:function(){var t=this,e=this.props.addContact;return Object(S.jsxs)("form",{className:L.a.form,onSubmit:function(n){return t.setState({name:"",number:""}),e(n,t.state)},children:[Object(S.jsx)(M,{name:"name",changeInput:this.changeInput,value:this.state.name}),Object(S.jsx)(M,{name:"number",changeInput:this.changeInput,value:this.state.number}),Object(S.jsx)(D,{state:this.state,text:"Add contact",addContact:e})]})}}]),n}(a.Component),q=n(54),B=(n(49),function(t){var e=t.contacts,n=t.filter,c=t.deleteContact;return n.length>0&&(e=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))),Object(S.jsx)(q.a,{component:"ul",children:e.map((function(t){return Object(S.jsx)(z.a,{timeout:250,classNames:"item",children:Object(S.jsxs)("li",{children:[Object(S.jsx)("span",{children:t.name}),": ",Object(S.jsxs)("span",{children:[t.number," "]}),Object(S.jsx)(D,{deleteContact:c,text:"Delete",id:t.id})]})},t.id)}))})}),G=n(16),P=n.n(G),R=n(53),U=function(t){Object(I.a)(n,t);var e=Object(w.a)(n);function n(){var t;Object(k.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[],filter:"",error:null},t.addContact=function(e,n){e.preventDefault();var c=Object(R.a)(),a=n.name,r=n.number;if(a){if(void 0!==t.props.contacts.find((function(t){return t.name===a})))return t.setState({error:"You already add ".concat(a)}),void setTimeout((function(){t.setState({error:null})}),5e3);t.props.addContact({id:c,name:a,number:r})}},t}return Object(N.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:P.a.container,children:[Object(S.jsx)(z.a,{in:null!==this.state.error,timeout:300,classNames:P.a,unmountOnExit:!0,children:Object(S.jsx)("header",{children:Object(S.jsx)("div",{className:P.a.error,children:this.state.error})})}),Object(S.jsx)(z.a,{in:!0,timeout:500,appear:!0,classNames:P.a,unmountOnExit:!0,children:Object(S.jsx)("h1",{className:P.a.title,children:"Phonebook"})}),Object(S.jsx)(Q,{addContact:this.addContact}),this.props.contacts.length>0&&Object(S.jsxs)(E,{title:"Contacts",children:[Object(S.jsx)(M,{name:"filter",isOpen:this.props.contacts.length>1,changeInputForFilter:this.props.changeFilter}),Object(S.jsx)(B,{contacts:this.props.contacts,filter:this.props.filter,deleteContact:this.props.deleteContact})]})]})}}]),n}(a.Component),W=Object(o.b)((function(t){return{filter:t.contacts.filter,contacts:t.contacts.items}}),(function(t){return{changeFilter:function(e){return t(x.changeFilter(e.target.value))},addContact:function(e){return t(x.addContact(e))},deleteContact:function(e){return t(x.deleteContact(e))}}}))(U);l.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(o.a,{store:F.store,children:Object(S.jsx)(i.a,{loading:null,persistor:F.persistor,children:Object(S.jsx)(W,{})})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.e555b2a5.chunk.js.map