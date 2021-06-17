(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"i",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"d",(function(){return m})),r.d(e,"f",(function(){return d})),r.d(e,"h",(function(){return f})),r.d(e,"e",(function(){return v})),r.d(e,"j",(function(){return O})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return j}));var n=r(63),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},O=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},h=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t.slug,"/comments"),data:t.data})},j=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t.slug,"/comments/").concat(t.id)})}},268:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(36),r(194)),o=r(201),l=r.n(o),m=(r(37),r(23),r(24),r(49),r(50),r(19)),d=r(38);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={name:"ArticleMeta",props:{article:{type:Object,required:!0}},data:function(){return{isOnFollow:!1,isOnFavortied:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)(["user"])),methods:{onFollowUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isOnFollow=!0,!t.article.author.following){e.next=7;break}return e.next=4,Object(c.j)(t.article.author.username);case 4:t.article.author.following=!1,e.next=10;break;case 7:return e.next=9,Object(c.e)(t.article.author.username);case 9:t.article.author.following=!0;case 10:t.isOnFollow=!1;case 11:case"end":return e.stop()}}),e)})))()},onFavortion:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isOnFavortied=!0,!t.article.favorited){e.next=8;break}return e.next=4,Object(c.d)(t.article.slug);case 4:t.article.favorited=!1,t.article.favoritesCount+=-1,e.next=12;break;case 8:return e.next=10,Object(c.b)(t.article.slug);case 10:t.article.favorited=!0,t.article.favoritesCount+=1;case 12:t.isOnFavortied=!1;case 13:case"end":return e.stop()}}),e)})))()}}},O=r(30),h=Object(O.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v("\n      "+t._s(t.article.author.username)+"\n    ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following,disabled:t.isOnFollow},on:{click:t.onFollowUser}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n     \n     "+t._s((t.article.author.following?"Unfollow":"Follow")+" "+t.article.author.username)+"\n  ")]),t._v("\n    \n  "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},on:{click:t.onFavortion}},[r("i",{staticClass:"ion-heart"}),t._v("\n     \n    "+t._s((t.article.favorited?"Unfavorited":"Favorited")+" Article")+" "),r("span",{staticClass:"counter"},[t._v(t._s("("+t.article.favoritesCount+")"))])])],1)}),[],!1,null,null,null).exports;function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var w={name:"ArticleComment",props:{article:{type:Object,required:!0}},data:function(){return{comments:[],comment:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)(["user"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.h)(t.article.slug);case 2:r=e.sent,data=r.data,n=l()(),data.comments.forEach((function(t){return t.body=n.render(t.body)})),t.comments=data.comments;case 7:case"end":return e.stop()}}),e)})))()},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={slug:t.article.slug,data:{comment:{body:t.comment}}},e.next=3,Object(c.a)(r);case 3:n=e.sent,data=n.data,o=l()(),(m=data.comment).body=o.render(m.body),t.comments.unshift(m),t.comment="";case 10:case"end":return e.stop()}}),e)})))()},deleteCommentFn:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),o={slug:r.article.slug,id:t},n.next=4,Object(c.c)(o);case 4:l=n.sent,data=l.data,console.log(data),r.comments.splice(e,1);case 8:case"end":return n.stop()}}),n)})))()}}},_={name:"ArticleIndex",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.f)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,o=l()(),article.body=o.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},components:{ArticleMeta:h,ArticleComment:Object(O.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ArticleComment"},[t.user?r("form",{staticClass:"card comment-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary"},[t._v("\n      Post Comment\n      ")])])]):t._e(),t._v(" "),t._l(t.comments,(function(e,n){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block",domProps:{innerHTML:t._s(e.body)}}),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v("\n        "+t._s(e.author.username)+"\n      ")]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt,"MMMM DD, YYYY")))]),t._v(" "),e.author.username===t.user.username?r("span",{staticClass:"mod-options",on:{click:function(r){return t.deleteCommentFn(e.id,n)}}},[r("i",{staticClass:"ion-trash-a"})]):t._e()],1)])}))],2)}),[],!1,null,null,null).exports},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}}},C=Object(O.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comment",{attrs:{article:t.article}})],1)])])])}),[],!1,null,null,null);e.default=C.exports}}]);