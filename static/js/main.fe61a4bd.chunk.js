(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),i=n.n(r),l=(n(18),n(2)),c=n(4),s=n(5),u=n(9),d=n(6),h=n(1),m=n(8),v=n(11),f=n.n(v),g=n(12),p=n.n(g),b=o.a.lazy((function(){return n.e(3).then(n.bind(null,28))})),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).loadUsers=function(){n.setState({isLoading:!0},(function(){f.a.get("https://jsonplaceholder.typicode.com/photos").then((function(e){var t=e.body.map((function(e){return{title:e.title,url:e.url,albumId:e.albumId,thumbnailUrl:e.thumbnailUrl}}));n.setState({hasMore:n.state.data.length,isLoading:!1,data:[].concat(Object(l.a)(n.state.data),Object(l.a)(t))})})).catch((function(e){n.setState({error:e.message,isLoading:!1})}))}))},n.state={error:!1,hasMore:!0,isLoading:!1,data:[],width:null},window.onscroll=p()((function(){var e=Object(h.a)(n),t=e.loadUsers,a=e.state,o=a.error,r=a.isLoading,i=a.hasMore;o||r||!i||window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&t()}),100),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.loadUsers()}},{key:"componentWillUnmount",value:function(){this.data.remove(),this.hasMore.remove(),console.log("Clear Everything")}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.hasMore,r=e.isLoading;e.data;return o.a.createElement("div",null,o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(b,{data:this.state.data,width:this.state.width})),t&&o.a.createElement("div",{style:{color:"#900"}},t),r&&o.a.createElement("div",null,"Loading..."),!n&&o.a.createElement("div",null," You reached the end!"))}}]),t}(a.Component);var E=function(){return o.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.fe61a4bd.chunk.js.map