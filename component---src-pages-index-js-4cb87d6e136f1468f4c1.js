(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5E9Z":function(e,t,a){e.exports=a.p+"static/feature_marty_mthood-2f67f5e3a7146095fd91b285ee055699.jpg"},E7No:function(e,t,a){e.exports=a.p+"static/feature_marty-5eacc34cd1a23a7efce199f97b4efd75.jpg"},KaDi:function(e,t,a){e.exports=a.p+"static/feature_colorado_sun2-2228039b478d356f3405b913155f53f3.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("7oih"),o=(a("f3/d"),a("obyI")),s=a.n(o);function l(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("ul",{className:"icons"},s.a.socialLinks.map((function(e){var t=e.icon,a=e.name,n=e.url;return r.a.createElement("li",null,r.a.createElement("a",{href:n,class:"icon "+t},r.a.createElement("span",{class:"label"},a)))}))),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© Eventually."),r.a.createElement("li",null,"Credits: ",r.a.createElement("a",{href:"http://unsplash.com/"},"Unsplash")," +",r.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}function c(){return r.a.createElement("header",{id:"header"},r.a.createElement("h1",null,s.a.heading),r.a.createElement("p",null,s.a.subHeading))}var u=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={message:""},t.onSubmit=t.onSubmit.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.onSubmit=function(e){var t=this;e.preventDefault(),e.stopPropagation(),this.setState({message:"Thank you!"}),setTimeout((function(){t.setState({message:""})}),3e3)},i.render=function(){var e=this.state.message;return r.a.createElement("form",{id:"signup-form",onSubmit:this.onSubmit,method:"post",action:"#"},r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email Address"}),r.a.createElement("input",{type:"submit",value:"Email Me"}),r.a.createElement("span",{className:(e?"visible success":"")+" message"},e))},n}(n.Component);var p=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={pos:0,lastPos:0},t.rotateSlide=t.rotateSlide.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.rotateSlide=function(){var e=this,t=this.props.settings;setInterval((function(){var a=e.state,n=a.pos,r=a.lastPos;r=n,++n>=t.images.length&&(n=0),setTimeout((function(){r=n,e.setState({lastPos:r})}),t.delay/2),e.setState({lastPos:r,pos:n})}),t.delay)},i.componentDidMount=function(){this.rotateSlide()},i.render=function(){var e=this.state,t=e.pos,a=e.lastPos,n=this.props.settings;return r.a.createElement("div",{id:"bg"},n.images.map((function(e,n){return r.a.createElement("div",{key:e.url,style:{backgroundPosition:e.position,backgroundImage:'url("'+e.url+'")'},className:n===t?"visible top":n===a?"visible":""})})),";")},n}(n.PureComponent),m={images:[{url:a("E7No"),position:"center"},{url:a("jyiN"),position:"center"},{url:a("YvnE"),position:"center"},{url:a("KaDi"),position:"center"},{url:a("5E9Z"),position:"center"},{url:a("b+2i"),position:"center"},{url:a("xKVb"),position:"center"}],delay:6e3};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c,null),r.a.createElement(u,null),r.a.createElement(l,null),r.a.createElement(p,{settings:m}))}},YvnE:function(e,t,a){e.exports=a.p+"static/feature_colorado_mts_lake-be5b702d64ed1c8d4923eba35b8aeaf6.jpg"},"b+2i":function(e,t,a){e.exports=a.p+"static/feature_marty_sasha-939bc7b7b211848fbcb6247029f9713e.jpg"},jyiN:function(e,t,a){e.exports=a.p+"static/feature_colorado_lake-899bb06512a88011378cd40e1622fb7e.jpg"},obyI:function(e,t){e.exports={siteTitle:"Marty Andolino",manifestName:"Eventually",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-eventually/",heading:"Marty Andolino",subHeading:"Technologist. Problem Solver. Tinkerer.",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/drsmartman"},{icon:"fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/marty-andolino-51a8131/"}]}},xKVb:function(e,t,a){e.exports=a.p+"static/feature_sasha-f972a47b31510452e09627ca6bb13489.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-4cb87d6e136f1468f4c1.js.map