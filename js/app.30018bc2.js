(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},s={app:0},n=[];function r(t){return o.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{pdfjsWorker:"f91f3012"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i=s[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var i=s[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,i[1](c)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),s=i.n(a);s.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"terminal-nav",staticStyle:{"font-size":"18px"}},[i("header",{staticClass:"terminal-logo"},[i("div",{staticClass:"logo terminal-prompt"},[i("router-link",{attrs:{to:"/"}},[t._v("Wen-Yuh Su")])],1)]),i("nav",{staticClass:"terminal-menu"},[i("ul",{attrs:{vocab:"https://schema.org/",typeof:"BreadcrumbList"}},[i("li",[i("router-link",{attrs:{to:"/edu"}},[i("span",[t._v("Education")])]),i("meta",{attrs:{property:"position"}})],1),i("li",{attrs:{property:"itemListElement",typeof:"ListItem"}},[i("router-link",{attrs:{to:"/exp"}},[i("span",{attrs:{property:"name"}},[t._v("Experience")])]),i("meta",{attrs:{property:"position",content:"1"}})],1),i("li",{attrs:{property:"itemListElement",typeof:"ListItem"}},[i("router-link",{attrs:{to:"/proj"}},[i("span",{attrs:{property:"name"}},[t._v("Project")])]),i("meta",{attrs:{property:"position",content:"2"}})],1),t._m(0)])])])]),i("router-view")],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{attrs:{property:"itemListElement",typeof:"ListItem"}},[i("a",{attrs:{href:"static/Wen-Yuh_Su_Resume.pdf"}},[i("span",{attrs:{property:"name"}},[t._v("Resume")])]),i("meta",{attrs:{property:"position",content:"3"}})])}],r={name:"app"},o=r,l=(i("034f"),i("2877")),c=Object(l["a"])(o,s,n,!1,null,null,null),u=c.exports,d=i("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",{staticClass:"header",staticStyle:{"text-align":"center"}},[t._v(" Summary ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2 offset-sm-1"},[a("img",{staticStyle:{width:"200px",height:"200px","border-radius":"50%"},attrs:{src:i("8311"),alt:"Avatar"}})]),a("div",{staticClass:"col-sm-6 offset-sm-2"},[a("section",[a("p",[t._v("I graduated from University of Illinois, Chicago and majoring in Computer Science in May 2020. I am now seeking the full time software engineer opportuniy. Previously, I joined Particle Media Inc, a starup at Mountain View, CA as a machine learning intern in summer 2019 working on news recommendation system. Personally, I am enthusiastic for backend development, recommendation system and natural language processing. ")])]),a("div",{staticClass:"ui tag labels"},[a("a",{staticClass:"ui label",attrs:{href:"https://github.com/suwenyu"}},[a("i",{staticClass:"github alternate icon"}),t._v(" Github")]),a("a",{staticClass:"ui label",attrs:{href:"https://www.linkedin.com/in/suwenyu"}},[a("i",{staticClass:"linkedin icon"}),t._v(" LinkedIn")]),a("a",{staticClass:"ui label",attrs:{href:"mailto:wsu23@uic.edu"}},[a("i",{staticClass:"envelope icon"}),t._v(" Email")])])])])])}],f={},v=Object(l["a"])(f,p,m,!1,null,null,null),h=v.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("p",{staticClass:"header",staticStyle:{"text-align":"center"}},[t._v("Education")]),i("sui-item-group",[i("sui-item",[i("sui-item-image",{attrs:{src:"static/images/uic.png"}}),i("sui-item-content",[i("sui-item-description",[i("p",{staticClass:"title"},[i("strong",[t._v("University of Illinois, Chicago")])]),i("p",[t._v(" Master of Computer Science, GPA: 3.5/4.0 Aug.2018 - May.2020 ")])]),i("sui-item-extra",[t._v(" Chicago, IL, U.S. ")])],1)],1),i("sui-item",[i("sui-item-image",{attrs:{src:"static/images/nccu_logo.png"}}),i("sui-item-content",[i("sui-item-description",[i("p",{staticClass:"title"},[i("strong",[t._v("National Chengchi University")])]),i("p",[t._v(" Bachelor of Computer Science, GPA: 3.7/4.0 Sep.2013 - Jun.2017 ")])]),i("sui-item-extra",[t._v(" Taipei, Taiwan ")])],1)],1)],1)],1)},g=[],y={},b=Object(l["a"])(y,_,g,!1,null,null,null),C=b.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("p",{staticClass:"header",staticStyle:{"text-align":"center"},attrs:{id:"Timeline"}},[t._v("Experience")]),i("div",{staticClass:"media"},[i("img",{staticClass:"bd-placeholder-img align-self-start mr-3",staticStyle:{width:"64px",height:"64px"},attrs:{src:"static/images/newsbreak.png",alt:"..."}}),i("div",{staticClass:"media-body"},[t._m(0),t._m(1),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Recommendation System ")]),i("sui-label",[t._v(" XGBoost ")]),i("sui-label",[t._v(" Word2Vec ")]),i("sui-label",[t._v(" Tensorflow ")])],1),t._m(2)])]),i("div",{staticClass:"media"},[i("img",{staticClass:"bd-placeholder-img align-self-start mr-3",staticStyle:{width:"64px",height:"64px"},attrs:{src:"static/images/uic.png",alt:"..."}}),i("div",{staticClass:"media-body"},[t._m(3),t._m(4),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Text Classification ")]),i("sui-label",[t._v(" LSTM ")])],1),t._m(5)])]),i("div",{staticClass:"media"},[i("img",{staticClass:"bd-placeholder-img align-self-start mr-3",staticStyle:{width:"64px",height:"64px"},attrs:{src:"static/images/cathay.png",alt:"..."}}),i("div",{staticClass:"media-body"},[t._m(6),t._m(7),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Recommendation System ")]),i("sui-label",[t._v(" XGBoost ")]),i("sui-label",[t._v(" Deep-Wide Model ")])],1),t._m(8)])]),i("div",{staticClass:"media"},[i("img",{staticClass:"bd-placeholder-img align-self-start mr-3",staticStyle:{width:"64px",height:"64px"},attrs:{src:"static/images/nccu.jpg",alt:"..."}}),i("div",{staticClass:"media-body"},[t._m(9),t._m(10),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Text Classification ")]),i("sui-label",[t._v(" LSTM ")]),i("sui-label",[t._v(" Full Stack ")])],1),t._m(11)])])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"title"},[i("strong",[t._v("Particle Media, Inc.")]),t._v(" - Mountain View, CA, USA")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v("Machine Learning Intern")]),i("div",{staticClass:"col-md-4 offset-md-4"},[t._v("May.2019 - Aug.2019")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Applied embedding similarity features by training word2vec to improve disambiguation of names for US cities and counties with F1 measure of 78.48 percent")]),i("li",[t._v("Implemented XGboost model to recommend the news to users living in the most related area with relevance scores")]),i("li",[t._v("Built the data pipeline for the push-notification system with extracted time and action with predicted event type by using SUTime and the dependency parser and resulted in increasing CTR with 10 percent on A/B Test")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"title"},[i("strong",[t._v("University of Illinois, Chicago")]),t._v(" - Chicago, IL, USA")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v("Research Assistant")]),i("div",{staticClass:"col-md-4 offset-md-4"},[t._v("Mar.2019 - May.2019")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Implemented Hierarchical LSTM which combined the word embedding sequence and the clause embedding to achieve high accuracy of 78.6 percent on classification task with 4 labels on Twitter HPV-related articles")]),i("li",[t._v("Compared effectiveness of the semantic representation by applying latent semantic analysis, W2V, and FastText on the different level of words in HPV-vaccine-related data ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"title"},[i("strong",[t._v("Cathay Financial Holding Co. Ltd.")]),t._v(" - Taipei, Taiwan")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v("Machine Learning Intern")]),i("div",{staticClass:"col-md-4 offset-md-4"},[t._v("Aug.2017 - May.2018")]),i("p")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Applied Lambdamart model on financial data such as financial behavior of users, truncation record, and customer profiles to find important features ")]),i("li",[t._v("Implemented the Deep-Wide model to predicted the average variation in the amount of credit card transaction of customers and the features from XGBoost with a high accuracy")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"title"},[i("strong",[t._v("National Chengchi University and Academia Sinica")]),t._v(" - Taipei, Taiwan ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v("Research Assistant")]),i("div",{staticClass:"col-md-4 offset-md-4"},[t._v("Aug.2017 - May.2018")]),i("p")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Emphasized risk detecting for word-level financial reports by training a self-attention LSTM model on the collection of financial reports with financial sentiment phrases, resulting in high accuracy of 88 percent "),i("strong",[t._v("(ICASSP’20, 2nd author)")])]),i("li",[t._v("Built a labeling system by using Flask framework, JavaScript and MongoDB for users to add annotations of multiword expressions for financial reports with visualization which increased the efficiency of labeling")]),i("li",[t._v("Visualized the financial statement by highlighting the strong words which the deep learning model learned")])])}],x={},M=Object(l["a"])(x,w,S,!1,null,null,null),A=M.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-6 offset-md-3"},[i("p",{staticClass:"header",staticStyle:{"text-align":"center"}},[t._v("Project")]),i("sui-item-group",{attrs:{divided:""}},[i("sui-item",[i("sui-item-content",[i("p",{staticClass:"title"},[i("strong",[t._v("SQuAD Sequential Model")]),t._v(" - Chicago, IL, USA")]),i("sui-item-meta",[i("p",{staticClass:"stay"},[t._v("April.2020 - May.2020")]),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Question Answering ")]),i("sui-label",[t._v(" LSTM ")])],1)]),i("sui-item-description",[i("p",[t._v(" Applied a sequential model with Bi-LSTM features and Bi-LSTM attention by using Tensorflow on the Stanford Question Answering Dataset. ")]),i("p",[t._v(" Achieved the performance of 68 percent of F1 and 54 percent of exact match score and surpassed the basic attention sequential model. ")]),i("p",[i("a",{attrs:{href:"https://github.com/suwenyu/OCR-cnn-crf-model"}},[t._v("[Github]")])])])],1)],1),i("sui-item",[i("sui-item-content",[i("p",{staticClass:"title"},[i("strong",[t._v("Optical Character Recognition Problem for Conditional Random Fields with Convolutions")]),t._v(" - Chicago, IL, USA")]),i("sui-item-meta",[i("p",{staticClass:"stay"},[t._v("Feb.2020 - Mar.2020")]),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" OCR ")]),i("sui-label",[t._v(" CRF ")]),i("sui-label",[t._v(" CNN ")])],1)]),i("sui-item-description",[i("p",[t._v(" Built a CRF Model with convolutional features by using PyTorch on the optical character recognition dataset. ")]),i("p",[t._v(" Achieved the performance of 83 percent of letter accuracy and 43 percent of word accuracy and surpassed the basic CRF model. ")]),i("p",[i("a",{attrs:{href:"https://github.com/suwenyu/OCR-cnn-crf-model"}},[t._v("[Github]")])])])],1)],1),i("sui-item",[i("sui-item-content",[i("p",{staticClass:"title"},[i("strong",[t._v("Drchrono Hackathon by using Django")]),t._v(" - Bay Area, CA, USA")]),i("sui-item-meta",[i("p",{staticClass:"stay"},[t._v("Dec.2019")]),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Full Stack ")]),i("sui-label",[t._v(" Django ")]),i("sui-label",[t._v(" MySQL ")])],1)]),i("sui-item-description",[i("p",[t._v(" Implemented check-in kiosk by using Django Framework and MySQL, and visualized the process by using Bootstrap UI framework. ")]),i("p",[t._v(" Designed Restful API for customers to check in and update their personal information. For doctors, the system allows doctors to update users' status. ")]),i("p",[i("a",{attrs:{href:"https://github.com/suwenyu/Drchrono-hackathon-django"}},[t._v("[Github]")])])])],1)],1),i("sui-item",[i("sui-item-content",[i("p",{staticClass:"title"},[i("strong",[t._v("US Election Sentiment Analysis")]),t._v(" - Chicago, IL, USA")]),i("sui-item-meta",[i("p",{staticClass:"stay"},[t._v("Mar.2019 - May.2019")]),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Sentiment Analysis ")]),i("sui-label",[t._v(" LSTM ")])],1)]),i("sui-item-description",[i("p",[t._v(" Implemented the classification model by attention LSTM and pre-trained word embedding from FastText for the Twitter dataset and surpassed the baseline of 10 percent on the 3 labels classification task ")]),i("p",[i("a",{attrs:{href:"https://github.com/suwenyu/US-election-sentiment-analysis"}},[t._v("[Github]")])])])],1)],1),i("sui-item",[i("sui-item-content",[i("p",{staticClass:"title"},[i("strong",[t._v("Quora Insincere Questions Classification")]),t._v(" - Chicago, IL, USA ")]),i("sui-item-meta",[i("p",{staticClass:"stay"},[t._v("Mar.2019 - May.2019")]),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Sentiment Analysis ")]),i("sui-label",[t._v(" LSTM ")]),i("sui-label",[t._v(" Attention ")])],1)]),i("sui-item-description",[i("p",[t._v(" Implemented a self-attention LSTM on Quora insincere questions classification task and resulted in high accuracy of 64.1 percent which improved 5 percent from the LSTM model ")]),i("p",[i("a",{attrs:{href:"Quora-insincere-questions-classification"}},[t._v("[Github]")])])])],1)],1),i("sui-item",[i("sui-item-content",[i("p",{staticClass:"title"},[i("strong",[t._v("Digital Humanities Project")]),t._v(" - Taipei, Taiwan")]),i("sui-item-meta",[i("p",{staticClass:"stay"},[t._v("Sep.2015 - May.2016")]),i("div",{staticClass:"row",staticStyle:{"padding-left":"12px"}},[i("sui-label",[t._v(" Backend ")]),i("sui-label",[t._v(" Flask ")]),i("sui-label",[t._v(" MongoDB ")])],1)]),i("sui-item-description",[i("p",[t._v(" Achieved the automatic identification and registration of smart home IoT devices without user intervention ")]),i("p",[t._v("Generated relationships between devices, making it easier for home users to diagnose potential mistakes occurring among IoT devices")]),i("p",[t._v(" Applied Restful API for users to efficiently query the status in the switch database ")]),i("p",[i("a",{attrs:{href:"https://clip.csie.org/DHPNew"}},[t._v("[Link]")])])])],1)],1)],1)],1)},T=[],L={},j=Object(l["a"])(L,k,T,!1,null,null,null),I=j.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pdf",{attrs:{src:"./static/Wen-Yuh_Su_Resume.pdf"}})},P=[],O={},$=Object(l["a"])(O,E,P,!1,null,null,null),R=$.exports;a["a"].use(d["a"]);var U=new d["a"]({mode:"history",routes:[{path:"/",name:"home",component:h},{path:"/edu",name:"edu",component:C},{path:"/exp",name:"exp",component:A},{path:"/proj",name:"proj",component:I},{path:"/cv",name:"cv",component:R}]}),B=i("858e"),F=i("080a"),D=i.n(F);i("c4ca"),i("3198");a["a"].config.productionTip=!1,a["a"].use(D.a),new a["a"]({router:U,pdf:B["a"],render:function(t){return t(u)}}).$mount("#app")},8311:function(t,e,i){t.exports=i.p+"img/photo.27f9b721.jpg"},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.30018bc2.js.map