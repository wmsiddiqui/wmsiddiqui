(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},176:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(22),s=(a(89),a(11)),c=a(16),u=a(18),m=a(19),h=a(23),d=a(20),p=a(24),g=a(21),f=(a(90),function(e){var t;return t=!e.isLoadingProfile&&e.userProfile?r.a.createElement("div",null,r.a.createElement("img",{src:e.userProfile.avatar_url,className:"avatar",alt:"avatar"}),r.a.createElement("br",null),r.a.createElement("p",{className:"caption"},e.userProfile.bio)):r.a.createElement("div",{className:"loading"},r.a.createElement(g.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement("div",null,t,r.a.createElement("div",{className:"body-content"},r.a.createElement("h2",{className:"header"},"About Me"),"My name is Waqar Siddiqui. I like making everything from software to Gunpla (check out my gallery for some of my work). I live near Seattle, but originally grew up near Chicago. After graduating from the University of Illinois in Urbana-Champaign, I worked in Chicago for a few years. I had no intention of leaving Chicago, but life had other plans for me. I somehow managed to end up living in Redmond with my wife, while I work at Microsoft.",r.a.createElement("h2",{className:"header"},"Hobbies"),"I've had a wide range of hobbies over the years. I used to be (and still am) a huge fan of Yu-Gi-Oh! I spent years playing the card game as a child, and eventually became an official Judge and judged local tournaments. Unfortunately, (or fortunately) working full time and spending time with my wife left me little to no time to pursue this hobby anymore. It will always have a special place in my heart.",r.a.createElement("br",null),r.a.createElement("br",null),"I enjoy video games, but like Yu-Gi-Oh!, I've had little time to play any of them over the past few years. I tried to play competitive Pokemon for a while, but was never very good at it. You'll still find me playing Pokemon Showdown every now and then. You'll occasionally catch me playing couch co-op games with my wife, like Gears and Halo. Overall, though, I think I enjoy making games more than I like playing them. Feel free to check out all my abandoned Github projects.",r.a.createElement("br",null),r.a.createElement("br",null),"My most recent hobby has been Gunpla, plastic model kits based on Mobile Suit Gundam. Check out my gallery for some of my latest work!",r.a.createElement("h2",{className:"header"},"What I Do"),"I'm a fullstack software engineer, and am interested in everything from DevOps to UI development. Early on in my career I was focused on mostly backend systems. My current role at Microsoft involves a lot of front-end UI work, using React and Redux. I'm by no means a front-end developer, but I believe that a good engineer will be whatever their team needs them to be. For the time being, my team is new to React and Redux, so I've been expected to be the React and JavaScript expert to help provide guidance for my team.",r.a.createElement("h2",{className:"header"},"Goals"),"I always strive to be a well rounded engineer. I think to do so requires me to have some working knowledge of various different domains. I've worked with cloud platforms such as AWS and Azure, and believe they are both great tools for any software developer to utilize, for reasons including reliability, scalability, and cost. I think it's important to become even more familiar with these techonolgies, because it's clear that they will be the integral parts of software systems in the future.",r.a.createElement("br",null),r.a.createElement("br",null),"I'm a huge fan of the Agile methodology, but it's vital that it's done right. When it does work, it can result in some very high functioning teams. I love to promote and facilitate the Agile process on any team that I'm on.",r.a.createElement("h2",{className:"header"},"Work Experience"),"For detailed information on my work experience, check out my LinkedIn, or check out my resume."))}),b=a(6),v=a.n(b),E=a(15),y=a(69),w=a.n(y);function k(e){return I.apply(this,arguments)}function I(){return(I=Object(E.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}},e,null,[[0,6]])}))).apply(this,arguments)}var N="https://api.github.com";function O(e){return j.apply(this,arguments)}function j(){return(j=Object(E.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k("".concat(N,"/users/").concat(t));case 3:return a=e.sent,e.abrupt("return",a&&a.data||null);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}function R(e){return x.apply(this,arguments)}function x(){return(x=Object(E.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k("".concat(N,"/users/").concat(t,"/repos"));case 3:return a=e.sent,e.abrupt("return",a&&a.data||null);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}var L="BEGIN_GET_REPOS",G="BEGIN_GET_USER",P="COMPLETE_GET_REPOS",C="COMPLETE_GET_USER";var S=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.userProfile||this.props.getGithubUser("wmsiddiqui")}},{key:"render",value:function(){return r.a.createElement(f,{userProfile:this.props.userProfile,isLoadingProfile:this.props.isLoadingProfile})}}]),t}(r.a.Component);var M={getGithubUser:function(e){return function(){var t=Object(E.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:G}),t.next=3,O(e);case 3:n=t.sent,a({type:C,payload:n});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},_=Object(l.b)(function(e){return{userProfile:e.githubReducer.userProfile,isLoadingProfile:e.githubReducer.loadingUser}},M)(S),A=a(185),U=(a(109),function(e){var t;if(e.isLoadingRepos||!e.repos)t=r.a.createElement("div",{className:"loading"},r.a.createElement(g.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")));else{var a=F(e.repos),n=null,o=null;a.starredRepos.length&&(n=r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Featured Projects"),r.a.createElement("div",{className:"card-container"},a.starredRepos))),a.otherRepos.length&&(o=r.a.createElement("div",null,r.a.createElement("h2",null,"Other Projects"),r.a.createElement("div",{className:"card-container"},a.otherRepos))),t=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Projects"),r.a.createElement("p",{className:"description-text"},"Below are a list of public repositories which are found on my GitHub. You can also go directly to my GitHub profile by ",r.a.createElement("a",{href:"https://github.com/wmsiddiqui"},"clicking here"),"."),n,r.a.createElement("br",null),o)}return r.a.createElement("div",null,t)}),F=function(e){var t=[],a=[];return e.forEach(function(e){if(!e.archived){var n=r.a.createElement(A.a,{bg:"light",className:"card",key:e.name,onClick:function(){return T(e)}},r.a.createElement(A.a.Body,null,r.a.createElement(A.a.Title,null,e.name),r.a.createElement(A.a.Text,null,e.description)));e.stargazers_count>0?t.push(n):a.push(n)}}),{starredRepos:t,otherRepos:a}},T=function(e){window.open(e.html_url,"_blank")},W=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.repos||this.props.getGithubRepos("wmsiddiqui")}},{key:"render",value:function(){return r.a.createElement(U,{repos:this.props.repos,isLoadingRepos:this.props.isLoadingRepos})}}]),t}(r.a.Component);var B={getGithubRepos:function(e){return function(){var t=Object(E.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:L}),t.next=3,R(e);case 3:n=t.sent,a({type:P,payload:n});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},q=Object(l.b)(function(e){return{repos:e.githubReducer.repos,isLoadingRepos:e.githubReducer.loadingRepos}},B)(W),H=(a(110),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"How can 404s be real if our eyes aren't real?"),r.a.createElement("p",null,"This page does not exist. Please make sure the url is correct."))}),D=a(78),V=a(71),Y=a(32),J=[{src:"https://drive.google.com/uc?id=12x7-vIpc6kVn_rspdrYQ6U32k4MfRCAs",width:1.3,height:2,title:"RG Astray Gold Frame Amatsu Mina with Gaia Colors Starbright Gold and Starbright Brass gold paint"},{src:"https://drive.google.com/uc?id=1TpCd1rSkPQyBCK008uLxjWE53l9tWENV",width:3,height:2,title:"HG Protoss Zealot Grimgerde Custom Paintjob with LED Monoeye"},{src:"https://drive.google.com/uc?id=1Oob-_ACAyVMmnFJEvUnTY5wo4yRHNg-k",width:1.3,height:2,title:"RG Astray Red Frame with custom LED mod"},{src:"https://drive.google.com/uc?id=1ixFF5QN5-cOt2rVpNFvwbCLJPWFOPx7I",width:1.3,height:2,title:"ModelHeart/SuperNova Wing Zero Mo Kai Custom"},{src:"https://drive.google.com/uc?id=1__ses-byyg8frh-QQSKK5atyMLaaT8_M",width:1.3,height:2,title:"HG Wing Zero Honoo with custom LED mods"},{src:"https://drive.google.com/uc?id=19JnwprjK50h8e1OTP0NIQYP8BAz4YirG",width:1.3,height:2,title:"RG Banshee Norn with custom LED mods"}],K=(a(176),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).openLightbox=function(e,t){t.photo;var n=t.index;a.setState({currentImageIndex:n,isViewerOpen:!0})},a.closeLightbox=function(){a.setState({currentImageIndex:0,isViewerOpen:!1})},a.onLoad=function(){a.setState({isLoaded:!0})},a.state={isLoaded:!1,isViewerOpen:!1,currentImageIndex:0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Gallery"),r.a.createElement("p",null,"Welcome to my Gunpla gallery. Click on one of the pictures below to expand them!"),r.a.createElement(g.a,{animation:"border",role:"status",className:this.state.isLoaded?"hidden":"spinner"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:this.state.isLoaded?null:"hidden"},r.a.createElement(V.a,{photos:J,onClick:this.openLightbox,onLoadCallback:this.onLoad}),r.a.createElement(Y.b,null,this.state.viewerIsOpen?r.a.createElement(Y.a,{onClose:this.closeLightbox,className:"gallery-carousel"},r.a.createElement(Y.c,{className:"gallery-carousel",currentIndex:this.state.currentImage,views:J.map(function(e){return Object(D.a)({},e,{srcset:e.srcSet,caption:e.title})})})):null)),r.a.createElement("p",{className:"gallery-text"},"These model kits come on",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Sprue_(manufacturing)#Injection_molding"}," plastic sprues "),"which have to be cut to remove the parts. The parts then have to be sanded to hide the cuts where they were joined to the sprues, and then assembled. Many people like to apply decals which occasionally come with these kits, and many also like painting the kits to make them unique. I personally also like the challege of fitting small SMD LEDs into these mini robot model kits, since most of them are less than 6 inches in height and have full articulation. It really allows me to think of how to engineer the wiring in such a way which it not only works, but does not affect the articulation so they can remain posable."))}}]),t}(r.a.Component)),Q=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{render:function(e){return r.a.createElement(c.c,{location:e.location},r.a.createElement(c.a,{path:"/about",component:_}),r.a.createElement(c.a,{path:"/gallery",component:K}),r.a.createElement(c.a,{path:"/projects",component:q}),r.a.createElement(c.a,{component:H}))}}))},Z=(a(178),function(){return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-contents"},r.a.createElement(Q,null)))}),z=(a(179),a(48)),X=a.n(z),$=Object(c.f)(function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbarItems"},r.a.createElement("div",{className:"navbarBrand"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:X.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"}),"Waqar Siddiqui")),r.a.createElement("div",{className:"navbarBrandCollapsed"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:X.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"}))),r.a.createElement("div",{className:"navbarLinks"},r.a.createElement(s.b,{to:"/about"},"About"),r.a.createElement(s.b,{to:"/resume"},"Resume"),r.a.createElement(s.b,{to:"/projects"},"Projects"),r.a.createElement(s.b,{to:"/gallery"},"Gallery"))))}),ee=(a(180),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"frame-container"},r.a.createElement("iframe",{title:"Resume",src:"https://docs.google.com/document/d/e/2PACX-1vR-4oguUOnGFLUvVfmVjjNxeRElI2yZ0GwOSSmC08SomiNUeATN-C92mcnM-2ZR-i0b4ImevliZxK-a/pub?embedded=true"})))}),te=(a(181),a(76)),ae=a.n(te),ne=function(){return r.a.createElement("div",{className:"first-panel"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:ae.a,alt:"LogoIllustration"})),r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"text"},r.a.createElement("h1",{className:"title"},"Waqar Siddiqui"),r.a.createElement("h2",null,"Software Engineer"),r.a.createElement("p",null,"I'm a fullstack software engineer who likes to make things. Check out my GitHub projects on the Projects page. Or click on the About link to learn more about me."))))};a(182);var re=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{basename:""},r.a.createElement($,null),r.a.createElement("div",{className:"page-container"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/Resume",component:ee}),r.a.createElement(c.a,{exact:!0,path:"/",component:ne}),r.a.createElement(c.a,{path:"/wmsiddiqui",component:ne}),r.a.createElement(c.a,{component:Z})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(17),ie=a(77),le={repos:null,userProfile:null,loadingRepos:!1,loadingUser:!1};var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object.assign({},e,{loadingRepos:!0});case G:return Object.assign({},e,{loadingUser:!0});case P:return Object.assign({},e,{loadingRepos:!1,repos:t.payload});case C:return Object.assign({},e,{loadingUser:!1,userProfile:t.payload});default:return e}},ce=Object(oe.c)({githubReducer:se}),ue=Object(oe.d)(ce,Object(oe.a)(ie.a));i.a.render(r.a.createElement(l.a,{store:ue},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,a){e.exports=a.p+"static/media/Logo.18dd71ad.png"},76:function(e,t,a){e.exports=a.p+"static/media/LogoWaqarCropped.cdc70959.png"},79:function(e,t,a){e.exports=a(183)},89:function(e,t,a){},90:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.09e36276.chunk.js.map