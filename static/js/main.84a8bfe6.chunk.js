(this["webpackJsonpsecond-project"]=this["webpackJsonpsecond-project"]||[]).push([[0],{38:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),o=a(31),i=a.n(o),r=(a(38),a(14)),l=a(13),p=a(22),h=a(2),d=a(3),j=a(5),b=a(4),u=a(8),g=a.n(u),f=(a(57),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this)).getImageAndChangeBanner=function(){g.a.get("https://api.unsplash.com/photos/random?client_id=GSDJ5G2k_J6GTdJ60QaCArDS4fFbLGTdowFNwzrCTeo").then((function(e){c.setState({image_url:e.data.urls.regular})})).catch((function(e){console.log("ERR: ",e)}))},c.state={image_url:"https://images.unsplash.com/photo-1506111583091-becfd4bfa05d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.getImageAndChangeBanner()}),500)}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"bott",children:[Object(c.jsx)("img",{src:this.state.image_url,width:"100%",height:"655px",alt:""}),Object(c.jsx)("div",{className:"centered",children:"... DISCOVER THE WORLD AROUND YOU ... "})]}),Object(c.jsxs)("div",{class:" boot",id:"topHeader",children:[Object(c.jsxs)("div",{class:"cardbanner ",children:[Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",width:"300px",height:"450px"}),Object(c.jsx)("div",{class:"card-body",children:Object(c.jsx)("h1",{class:"card-text",children:"Shopping"})})]})," ",Object(c.jsxs)("div",{class:"cardbanner",children:[Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",width:"300px",height:"450px"}),Object(c.jsx)("div",{class:"card-body",children:Object(c.jsx)("h1",{class:"card-text",children:"Restaurant"})})]})," ",Object(c.jsxs)("div",{class:"cardbanner",children:[Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",width:"300px",height:"450px"}),Object(c.jsx)("div",{class:"card-body",children:Object(c.jsx)("h1",{class:"card-text",children:"Coffee"})})]}),Object(c.jsxs)("div",{class:"cardbanner ",children:[Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1501028932887-da5de53af865?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",width:"300px",height:"450px"}),Object(c.jsx)("div",{class:"card-body",children:Object(c.jsx)("h1",{class:"card-text",children:"Nature"})})]})," ",Object(c.jsxs)("div",{class:"cardbanner",children:[Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",width:"300px",height:"450px"}),Object(c.jsx)("div",{class:"card-body",children:Object(c.jsx)("h1",{class:"card-text",children:"Party"})})]})," ",Object(c.jsxs)("div",{class:"cardbanner",children:[Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1526662756420-76da8f67f7aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",width:"300px",height:"450px"}),Object(c.jsx)("div",{class:"card-body",children:Object(c.jsx)("h1",{class:"card-text",children:"Mountains"})})]})]})]})}}]),a}(s.Component)),x=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this)).footerText=function(){g.a.get("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json").then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),c.setState({quote:e.data.quoteText})})).catch((function(e){console.log("ERR: ",e)}))},c.setTimeout=1e4,c.state={quote:"",quoteAuthor:""},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.footerText()}),500)}},{key:"render",value:function(){var e;return Object(c.jsx)("div",{children:Object(c.jsx)("footer",(e={class:"text-muted py-5"},Object(l.a)(e,"class","AppColor"),Object(l.a)(e,"id","footer"),Object(l.a)(e,"children",Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("p",{class:"float-end mb-1"}),Object(c.jsxs)("p",{class:"mb-1",children:['"',this.state.quote,'"']}),Object(c.jsx)("a",{href:"#",className:"uppage",children:"Back to top"}),Object(c.jsx)("p",{class:"mb-1",children:"Copyright\xa9Fatimah Alhelal"})]})),e))})}}]),a}(s.Component),m=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this)).handleClick=function(e){console.log("Handling Fave click!"),c.setState({isFav:!c.state.isFav}),c.props.getFav(c.props.place,c.state.isFav)},c.state={isFav:!1},c}return Object(d.a)(a,[{key:"render",value:function(){return this.state.isFav?Object(c.jsx)("div",{className:"material-icons favorite",onClick:this.handleClick,children:Object(c.jsx)("i",{class:"material-icons",children:"favorite"})}):Object(c.jsx)("div",{className:"material-icons favorite_border",onClick:this.handleClick,children:Object(c.jsx)("i",{class:"material-icons",children:"favorite_border"})})}}]),a}(s.Component),O=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this)).getRefrencce=function(){if(c.props.photo){var e=c.props.photo[0].photo_reference;g.a.get("https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=".concat(e,"&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng")).then((function(e){c.setState({img_place:e.config.url})})).catch((function(e){console.log("ERR: ",e)}))}else console.log("noPhoto")},c.getLinke=function(){c.state.imgRef;g.a.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=".concat(c.props.placeId,"&fields=url,name,rating,formatted_phone_number&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng")).then((function(e){c.setState({linkRef:e.data.result.url})})).catch((function(e){console.log("ERR: ",e)}))},c.state={imgRef:"",linkRef:"",img_place:"https://cdn.onlinewebfonts.com/svg/img_347678.png"},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getLinke(),this.getRefrencce()}},{key:"render",value:function(){return Object(c.jsx)("div",{id:"topHeader",className:"boot",children:Object(c.jsxs)("div",{class:"card",children:[Object(c.jsx)("img",{src:this.state.img_place,width:"300px",height:"300px"}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("div",{className:"material-icons favorite",onClick:this.props.removeFav,children:Object(c.jsx)("i",{class:"material-icons",children:"favorite"})}),Object(c.jsxs)("h3",{class:"card-text",children:[this.props.place.name,"."]}),Object(c.jsx)("p",{class:"card-text",children:this.props.place.formatted_address}),Object(c.jsxs)("p",{class:"card-text ratingCon",children:[" Rating: ",this.props.place.rating,"/5"]}),Object(c.jsx)("div",{class:"d-flex justify-content-between align-items-center",children:Object(c.jsx)("div",{class:"btn-group botCon",children:Object(c.jsx)("a",{href:this.state.linkRef,target:"inlike",children:Object(c.jsx)("button",{type:"button",class:"btn btn-outline-success btnMore",children:" More"})})})})]})]})})}}]),a}(s.Component),v=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentWillUpdate",value:function(){localStorage.setItem("FavArry",JSON.stringify(this.props.FavArry))}},{key:"render",value:function(){var e=this,t=this.props.places.map((function(t,a){return Object(c.jsx)(O,{num:a,photo:t.photos,getFav:e.props.getFav,place:t,removeFav:e.props.removeFav})}));return Object(c.jsxs)("div",{id:"topHeader",children:[Object(c.jsx)("h1",{children:"Your Favorite List"}),Object(c.jsx)("button",{type:"button",class:"btn btn-outline-danger btnMore",onClick:this.props.deleteFav,children:" Clear List"}),t]})}}]),a}(s.Component),y=(s.Component,a(15)),F=a(6),S=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"topHeader",children:Object(c.jsxs)("main",{class:"px-3",id:"topHeader",className:"bott",children:[Object(c.jsx)("h1",{children:"About US"}),Object(c.jsx)("p",{class:"lead",children:"Cover is a one-page template for building simple and beautiful home pages. Cover is a one-page template for buCover is a one-page template for buCover is a one-page template for buDownload, edit the text, and add your own fullscreen background photo to make it your own."})]})})}}]),a}(s.Component),C=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this)).getRefrencce=function(){if(c.props.photo){c.setState({imgRef:c.props.photo[0].photo_reference});var e=c.props.photo[0].photo_reference;g.a.get("https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=".concat(e,"&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng")).then((function(e){c.setState({img_place:e.config.url})})).catch((function(e){console.log("ERR: ",e)}))}else console.log("noPhoto")},c.getLinke=function(){c.state.imgRef;g.a.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=".concat(c.props.placeId,"&fields=url,name,rating,formatted_phone_number&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng")).then((function(e){c.setState({linkRef:e.data.result.url})})).catch((function(e){console.log("ERR: ",e)}))},c.state={imgRef:"",linkRef:"",img_place:"https://cdn.onlinewebfonts.com/svg/img_347678.png"},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getLinke(),this.getRefrencce()}},{key:"render",value:function(){return Object(c.jsx)("div",{id:"topHeader",className:"boot",children:Object(c.jsxs)("div",{class:"card",children:[Object(c.jsx)("img",{src:this.state.img_place,width:"300px",height:"300px"}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)(m,{getFav:this.props.getFav,place:this.props.place}),Object(c.jsxs)("h3",{class:"card-text",children:[this.props.place.name,"."]}),Object(c.jsx)("p",{class:"card-text",children:this.props.place.formatted_address}),Object(c.jsxs)("p",{class:"card-text ratingCon",children:[" Rating: ",this.props.place.rating,"/5"]}),Object(c.jsx)("div",{class:"d-flex justify-content-between align-items-center",children:Object(c.jsx)("div",{class:"btn-group botCon",children:Object(c.jsx)("a",{href:this.state.linkRef,target:"inlike",children:Object(c.jsx)("button",{type:"button",class:"btn btn-outline-success btnMore",children:" More"})})})})]})]})})}}]),a}(s.Component),k=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.places.map((function(t,a){return Object(c.jsx)(C,{num:a,photo:t.photos,isFav:t.isFav,getFav:e.props.getFav,place:t})}));return Object(c.jsxs)("div",{id:"topHeader",children:[t,Object(c.jsx)("div",{className:"sp"})]})}}]),a}(s.Component),w=(s.Component,s.Component,function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this)).deleteFav=function(){console.log(c.state.FavArry),c.setState({FavArry:[]})},c.getFav=function(e,t){var a=Object(p.a)(c.state.FavArry),s=a.indexOf(e);-1===s?(a.push(e),c.setState({FavArry:a},(function(){console.log(this.state.FavArry)})),console.log(a)):(a.splice(s,1),c.setState({FavArry:a},(function(){console.log(this.state.FavArry)})))},c.removeFav=function(e,t){var a=Object(p.a)(c.state.FavArry);a.splice(e,1),c.setState({FavArry:a},(function(){console.log(this.state.FavArry)})),console.log(a)},c.getTourist=function(){g.a.get("https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&type=tourist_attraction&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng").then((function(e){e.data.results.forEach((function(e){})),c.setState({places:e.data.results}),console.log(c.state.places)})).catch((function(e){console.log("ERR: ",e)}))},c.searchResult=function(){var e=c.state.searchWord,t="https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&input=".concat(e,"&fields=Website,photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng");g.a.get(t).then((function(e){e?(console.log("here search re: ",e.data.results),c.setState({searchResultArry:e.data.results})):console.log("no data ")})).catch((function(e){console.log("ERR: ",e)}))},c.getShopping=function(){g.a.get("https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&type=shopping_mall&fields=url,photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng").then((function(e){c.setState({placesShopping:e.data.results}),console.log("shopping",e.data.results)})).catch((function(e){console.log("ERR: ",e)}))},c.getCffe=function(){g.a.get("https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&type=cafe&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng").then((function(e){c.setState({placesCoffe:e.data.results})})).catch((function(e){console.log("ERR: ",e)}))},c.state={places:[],placesCoffe:[],placesShopping:[],searchWord:"",searchResultArry:[],img_place:"https://img.icons8.com/ios/452/no-image.png",FavArry:[]},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getTourist(),this.getCffe(),this.getShopping(),this.searchResult()}},{key:"componentWillUpdate",value:function(){localStorage.setItem("places",JSON.stringify(this.state.places)),localStorage.setItem("placesCoffe",JSON.stringify(this.state.placesCoffe)),localStorage.setItem("placesShopping",JSON.stringify(this.state.placesShopping)),localStorage.setItem("FavArry",JSON.stringify(this.state.FavArry)),localStorage.setItem("searchResultArry",JSON.stringify(this.state.searchResultArry))}},{key:"render",value:function(){var e,t=this;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(y.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light AppColor",children:Object(c.jsxs)("div",{class:"container-fluid",children:[Object(c.jsx)("a",{class:"py-2",href:"#","aria-label":"Product",children:Object(c.jsxs)(y.b,{to:"/",class:"nav-link active","aria-current":"page",children:[" ",Object(c.jsx)("img",{src:"https://cdn0.iconfinder.com/data/icons/business-and-finance-6/155/vector_285_03-01-512.png",width:"24",height:"24"})]})}),Object(c.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{class:"navbar-toggler-icon"})}),Object(c.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(c.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(y.b,{to:"/",class:"nav-link active","aria-current":"page",href:"/banner",children:"Home"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(y.b,{to:"/Shopping",class:"nav-link active","aria-current":"page",href:"/Shopping",children:"Shopping"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(y.b,{to:"/Places",class:"nav-link active","aria-current":"page",href:"/Places",children:"Tourist"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(y.b,{to:"/Coffee",class:"nav-link active","aria-current":"page",href:"/Coffee",children:"Coffee&Restaurants"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(y.b,{to:"/Favorite",class:"nav-link active","aria-current":"page",href:"#",children:"FAVORITE"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(y.b,{to:"/about",class:"nav-link active","aria-current":"page",children:"ABOUT"})})]}),Object(c.jsxs)("form",{class:"d-flex",action:"./Search",children:[Object(c.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){t.setState({searchWord:e.target.value})},value:this.state.searchWord}),Object(c.jsx)(y.b,{to:"/Search",children:Object(c.jsx)("button",(e={class:"fa fa-search"},Object(l.a)(e,"class","btn btn-outline-success"),Object(l.a)(e,"type","button"),Object(l.a)(e,"onClick",this.searchResult),Object(l.a)(e,"children","Search"),e))})]})]})]})}),Object(c.jsx)(F.a,{exact:!0,path:"/",component:f}),Object(c.jsx)(F.a,{path:"/Shopping",render:function(e){return Object(c.jsx)(k,Object(r.a)(Object(r.a)({},e),{},{places:t.state.placesShopping,getFav:t.getFav}))}}),Object(c.jsx)(F.a,{path:"/Places",render:function(e){return Object(c.jsx)(k,Object(r.a)(Object(r.a)({},e),{},{places:t.state.places,getFav:t.getFav}))}}),Object(c.jsx)(F.a,{path:"/Coffee",render:function(e){return Object(c.jsx)(k,Object(r.a)(Object(r.a)({},e),{},{places:t.state.placesCoffe,getFav:t.getFav}))}}),Object(c.jsx)(F.a,{path:"/Favorite",render:function(e){return Object(c.jsx)(v,Object(r.a)(Object(r.a)({},e),{},{places:t.state.FavArry,getFav:t.getFav,removeFav:t.removeFav,deleteFav:t.deleteFav}))}}),Object(c.jsx)(F.a,{exact:!0,path:"/About",component:S}),Object(c.jsx)(F.a,{path:"/Search",render:function(e){return Object(c.jsx)(k,Object(r.a)(Object(r.a)({},e),{},{places:t.state.searchResultArry,getFav:t.getFav}))}})]})}),Object(c.jsx)("div",{className:"topHeader",children:Object(c.jsx)(x,{})})]})}}]),a}(s.Component)),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),R()}},[[66,1,2]]]);
//# sourceMappingURL=main.84a8bfe6.chunk.js.map