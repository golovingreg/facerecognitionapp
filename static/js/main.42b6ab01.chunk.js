(this.webpackJsonpfacerecognitionapp=this.webpackJsonpfacerecognitionapp||[]).push([[0],{245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(36),r=a.n(o),s=(a(74),a(12)),l=a(13),c=a(15),m=a(14),u=(a(75),a(66)),p=a.n(u),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://protected-brook-13741.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.props.onRouteChange("home")):alert("Try again!")}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"center shadow-5 mw5 mw6-ns br3 hidden ba b--black-10 mv6"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"pointer f6 link dim black db"},"Register")))))}}]),a}(n.Component),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onNameChange=function(t){e.setState({name:t.target.value})},e.onSubmitRegister=function(){fetch("https://protected-brook-13741.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password,name:e.state.name})}).then((function(e){return e.json()})).then((function(t){t.id?(e.props.loadUser(t),e.props.onRouteChange("home")):alert("Something is wrong")}))},e.state={email:"",password:"",name:""},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("article",{className:"center shadow-5 mw5 mw6-ns br3 hidden ba b--black-10 mv6"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign up"})))))}}]),a}(n.Component),g=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},b=(a(245),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),f=a(67),v=a.n(f),E=(a(246),a(68)),N=a.n(E),w=function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(v.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{style:{paddingTop:"5px"},alt:"camera",src:N.a}))))},k=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is ")),i.a.createElement("div",{className:"white f1"},a))},C=(a(247),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This app will detect faces on your picture"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form center pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),R={particles:{number:{value:30,density:{enable:!0,value_are:"800"}}}},I={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{email:"",id:"",name:"",entries:0,joined:""}},y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{email:t.email,id:t.id,name:t.name,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://protected-brook-13741.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://protected-brook-13741.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(I):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=I,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.route,n=e.imageUrl;return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{className:"particles",params:R}),i.a.createElement(g,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?i.a.createElement("div",null,i.a.createElement(w,null),i.a.createElement(k,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(C,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(b,{box:this.state.box,imageUrl:n})):"signin"===a?i.a.createElement(h,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(d,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(248);r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t){e.exports="data:image/png;base64,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"},69:function(e,t,a){e.exports=a(249)},74:function(e,t,a){},75:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.42b6ab01.chunk.js.map