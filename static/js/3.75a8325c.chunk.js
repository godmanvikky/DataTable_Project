(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[3],{27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(5),l=a(9),r=a(6),i=a(8),o=a(0),s=a.n(o),u=(a(27),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).onRowClick=function(e){"TD"==e.target.tagName&&alert("Row Selcted:-"+e.target.id)},a.selectAll=function(e){e.target.checked?a.setState({selected:!0}):a.setState({selected:!1})},a.state={selected:!1},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data,a=this.state.selected;return s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("th",null,s.a.createElement("input",{className:"box",type:"checkbox",onClick:this.selectAll})),s.a.createElement("th",null,"Product"),s.a.createElement("th",null,"Inventory"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Vendor")),t.map((function(t,n){return s.a.createElement("tr",{onClick:e.onRowClick},s.a.createElement("td",{id:n},s.a.createElement("input",{type:"checkbox",checked:a||null})),s.a.createElement("td",{className:"container",id:n},s.a.createElement("img",{src:t.thumbnailUrl}),t.title),s.a.createElement("td",{id:n},"In Stock"),s.a.createElement("td",{id:n},"Gift Card"),s.a.createElement("td",{id:n},"Full Test Store"))})))}}]),t}(s.a.Component));t.default=u}}]);
//# sourceMappingURL=3.75a8325c.chunk.js.map