(this["webpackJsonpluximus-hunter.github.io/about-me"]=this["webpackJsonpluximus-hunter.github.io/about-me"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[[{"lang":"en-GB","title":"Software Developer","location":"Deltion","logo":"https://i.ibb.co/dWKppby/deltion.jpg","content":["Software developer study at Deltion"],"date":{"from":"September 1st 2018","till":"pressent"}},{"lang":"nl","title":"Software Ontwikkelaar","location":"Deltion","logo":"https://i.ibb.co/dWKppby/deltion.jpg","content":["Software ontwikkeling opleiding op Deltion"],"date":{"from":"1 september 2018","till":"vandaag"}}],[{"lang":"en-GB","title":"VWO - Highschool","location":"Van der Capellen","logo":"https://i.ibb.co/JrVs13N/capellen.png","content":["Software developer study at Deltion"],"date":{"from":"September 1st 2014","till":"July 16th 2018"}},{"lang":"nl","title":"VWO - Middelbare school","location":"Van der Capellen","logo":"https://i.ibb.co/JrVs13N/capellen.png","content":["Software ontwikkeling opleiding op Deltion"],"date":{"from":"1 september 2014","till":"16 juli 2018"}}]]')},,function(e){e.exports=JSON.parse('{"default-lang":"en-GB"}')},,function(e){e.exports=JSON.parse('[{"lang":"en-GB","title":"Hi there!","content":["I\'m Thomas, a junior software developer.","I study software and web development at my local college. As of now I\'m about to enroll into my next years of college after getting my degree.","My specialties are mostly web development, using primarily ReactJS and TypeScript. Using the skills I\'ve acquired while working for [LoyLap](https://www.loylap.com/) in Dublin, Ireland. There I\'ve made a web app for designing giftcards for customer use. There the user can create giftcards by uploading photos using uploadcare, edit and possition text and edit their company data.","Currently I\'m working at [Expedient B.V.](https://www.expedient.nl/) for an internship. There they work with C# and .NET, using the DotNetNuke framework. As so far, I\'ve created a new system for the generation of PDF files when you make a checkout in a webshop using ReportViewers. That system makes customizing the PDFs a lot easier.","I\'ve Done courses on HTML5, CSS3, SASS, JavaScript, TypeScript, ReactJS and React Hooks. In college I\'ve studied C#, .NET and SQL. Java is on the way!"]}]')},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);n(7),n(8),n(9);var i=n(3),o=n(5),a=function(){var e=navigator.language;document.cookie="lang="+e},c=function(){for(var e="lang=",t=decodeURIComponent(document.cookie).split(";"),n=0;n<t.length;n++){for(var i=t[n];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(e))return i.substring(e.length,i.length)}return""},l={get:c,set:a,init:function(){""===c()&&a()}},s=n(0),r=function(){var e=null;return o.map((function(t){t.lang===l.get()&&(e=t)})),null===e&&o.map((function(t){t.lang===i["default-lang"]&&(e=t)})),null===e&&(e={title:"404, about not found.",content:["no data was provided in the about.json file or was not available in the fallback language.","If you're not the developer of this side, please contact them about this error."]}),Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:e.title}),e.content.map((function(e,t){return Object(s.jsx)("p",{children:e},t)}))]})})},d=(n(12),n(13),n(2)),u=function(e){var t=e.children,n=e.side,i=e.img;return Object(s.jsxs)("section",{className:"card ".concat(n),children:[n&&Object(s.jsxs)(d.Fragment,{children:[Object(s.jsx)("div",{className:"card-line"}),Object(s.jsx)("div",{className:"card-arrow"})]}),i&&Object(s.jsx)("img",{className:"card-img",src:i,alt:"card-img"}),Object(s.jsx)("div",{className:"card-content",children:t})]})},h=n(1),p=function(){var e=[];return h.map((function(t){t.map((function(t){t.lang===l.get()&&e.push(t)}))})),e.length<h.length&&(e=[],h.map((function(t){t.map((function(t){t.lang===i["default-lang"]&&e.push(t)}))}))),e.length<h.length&&(e=[],console.error("yeet")),Object(s.jsxs)("section",{id:"education",children:[Object(s.jsx)("h1",{className:"title",children:"Education"}),e.map((function(e,t){return Object(s.jsx)(u,{side:t%2===0?"left":"right",img:e.logo,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{alt:e.title+"-logo",src:e.logo,className:"education-img"}),Object(s.jsx)("h1",{children:e.title}),Object(s.jsxs)("h2",{children:[e.date.from," - ",e.date.till]}),e.content.map((function(e,t){return Object(s.jsx)("p",{children:e},t)}))]})},t)}))]})},j=(n(14),function(){return Object(s.jsxs)("footer",{id:"links",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{href:"https://github.com/luximus-hunter",children:Object(s.jsx)("i",{className:"fab fa-github-square"})}),Object(s.jsx)("a",{href:"https://linkedin.com/in/thomas-lipman",children:Object(s.jsx)("i",{className:"fab fa-linkedin"})}),Object(s.jsx)("a",{href:"https://dev.to/luximushunter",children:Object(s.jsx)("i",{className:"fab fa-dev"})})]}),Object(s.jsx)("div",{children:"2021 \xa9 Thomas Lipman"})]})}),b=(n(15),function(){return Object(s.jsxs)("header",{children:[Object(s.jsx)("img",{alt:"pfp",src:"https://i.ibb.co/vjvByPz/shapes-1000x.png"}),Object(s.jsx)("h1",{children:"Thomas Lipman"}),Object(s.jsx)("p",{children:"Software Developer"})]})}),f=(n(16),n(17),function(e){var t=e.children,n=e.link,i=e.onClick;return n?Object(s.jsx)("a",{className:"button",href:n,children:t}):Object(s.jsx)("button",{className:"button",onClick:i,children:t})}),g=function(){return Object(s.jsxs)("nav",{children:[Object(s.jsx)(f,{link:"#about",children:"About me"}),Object(s.jsx)(f,{link:"#education",children:"Education"}),Object(s.jsx)(f,{link:"#links",children:"Links"})]})};var m=function(){return l.init(),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsx)(g,{}),Object(s.jsx)(r,{}),Object(s.jsx)(p,{}),Object(s.jsx)(j,{})]})},x=n(6),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),a(e),c(e)}))};Object(x.render)(Object(s.jsx)(m,{}),document.getElementById("root")),O()}],[[21,1,2]]]);
//# sourceMappingURL=main.c29fd7db.chunk.js.map