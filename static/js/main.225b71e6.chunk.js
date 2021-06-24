(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{36:function(t,e,a){},74:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(17),i=a.n(c),r=a(9),o=a(10),l=a(12),h=a(11),p=a(3),d=a(15),j=a(1),m=function(t){var e=t.movie,a=t.history,n=t.query;return Object(j.jsx)(d.b,{style:{textDecoration:"none"},to:{pathname:"/movies/"+e.id,state:{id:e.id,search:void 0!==n?n:"",from:a.location.pathname}},children:Object(j.jsxs)("li",{className:"ImageGalleryItem",children:[Object(j.jsxs)("p",{className:"ReleaseDate",children:["Release date: ",e.release_date]}),Object(j.jsx)("img",{src:null!==e.poster_path&&void 0!==e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"http://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg",alt:"",width:"320",className:"ImageGalleryItem-image"})]})})},u=function(t){var e=t.movies,a=t.query,n=t.history;return Object(j.jsx)("ul",{className:"MovieList",children:e.map((function(t){return Object(j.jsx)(m,{query:a,history:n,movie:t},t.id)}))})},b=a(26),f=a.n(b),v=a(38),O=a(18),x=a.n(O);function g(){return(g=Object(v.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x()({method:"GET",url:"https://api.themoviedb.org/3/trending/movie/week?api_key=be5f011c0c95ebac9e43595fb9d549ff"});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x()({method:"GET",url:"https://api.themoviedb.org/3/search/movie?api_key=be5f011c0c95ebac9e43595fb9d549ff&query="+t})}function w(t){return x()({method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1")})}var _=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={movies:[]},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;(function(){return g.apply(this,arguments)})().then((function(e){t.setState({movies:e.data.results})}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Tranding today"}),Object(j.jsx)(u,{history:this.props.history,movies:this.state.movies})]})}}]),a}(n.Component),k=a(87),I=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("span",{className:"navigation",children:[Object(j.jsx)(d.c,{to:"/",children:Object(j.jsx)("span",{className:"home",children:Object(j.jsx)(k.a,{variant:"contained",color:"primary",children:"Home"})})}),Object(j.jsx)(d.c,{to:"/movies",children:Object(j.jsx)(k.a,{variant:"contained",color:"primary",children:"Movies"})})]})})},N=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={reviews:[]},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t,e=this;(t=this.props.location.state.id,x()({method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1")})).then((function(t){e.setState({reviews:t.data.results})}))}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{children:this.state.reviews.length>0?this.state.reviews.map((function(t){var e=t.author_details.avatar_path.includes("http")?t.author_details.avatar_path.slice(1,t.author_details.avatar_path.length-1):"https://image.tmdb.org/t/p/w500"+t.author_details.avatar_path;return Object(j.jsxs)("li",{children:[Object(j.jsx)("h2",{style:{marginLeft:"20px"},children:t.author}),Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("img",{className:"ImageMovieDetails ",src:e,alt:"",width:"200"}),Object(j.jsx)("div",{style:{marginLeft:"25px"},children:Object(j.jsx)("p",{className:"OriginalDescription",children:t.content})})]})]},t.id)})):Object(j.jsx)("li",{children:Object(j.jsx)("img",{style:{marginLeft:"25px",marginTop:"10px"},src:"https://pixabay.com/get/g626f7372da5383c75dc1c381a8586715d0a03c3568cd2323ddb954626374a755d7bd5b5635ac86bd63cc576da4b43c10120137311baf36c4ce05cd58a217c155_1280.jpg",alt:"not found",width:"340"})})})})}}]),a}(n.Component),D=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={cast:[]},t.componentDidMount=function(){w(t.props.location.state.id).then((function(e){t.setState({cast:e.data.cast})}))},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"CastList",children:this.state.cast.length>0?this.state.cast.map((function(t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("img",{width:"200",src:null!==t.profile_path&&void 0!==t.profile_path?"https://image.tmdb.org/t/p/w500"+t.profile_path:"http://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg",alt:t.name})]},t.id)})):Object(j.jsx)("li",{children:Object(j.jsx)("img",{style:{marginTop:"10px"},src:"https://pixabay.com/get/g6e139da9d742ed4357ab6324e9f68cf06e11961e228fcea476a56052f2be552797e9d5441edd77f04edc4e3c89861baaa622f6b211fb482d6b313938fc0abf8f_1280.png",alt:"not found",width:"340"})})})})}}]),a}(n.Component),C=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={filmInfo:{}},t.handleGoBack=function(){t.props.history.push(t.props.history.location.state.from,{search:t.props.history.location.state.search})},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t,e=this;(t=this.props.location.state.id,x()({method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=be5f011c0c95ebac9e43595fb9d549ff")})).then((function(t){e.setState({filmInfo:t.data})}))}},{key:"render",value:function(){return console.log(this.props),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"FilmInfoTitle",children:"Film Information"}),Object(j.jsx)("button",{onClick:this.handleGoBack,className:"goBack",children:"GO BACK"}),Object(j.jsxs)("div",{className:"InfoImage",children:[Object(j.jsx)("img",{src:null!==this.state.filmInfo.poster_path&&void 0!==this.state.filmInfo.poster_path?"https://image.tmdb.org/t/p/w500"+this.state.filmInfo.poster_path:"http://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg",alt:"",width:"200",className:"ImageMovieDetails"}),Object(j.jsxs)("div",{className:"InfoBox",children:[Object(j.jsxs)("h2",{className:"OriginalTitle",children:[console.log(this.state),this.state.filmInfo.original_title]}),Object(j.jsx)("h3",{className:"OriginalTitle",children:"Overview:"}),Object(j.jsxs)("p",{className:"OriginalDescription",children:[" ",this.state.filmInfo.overview]})]})]}),Object(j.jsx)("h2",{className:"AddInfo",children:"Additional Information"}),Object(j.jsx)(d.c,{style:{textDecoration:"none"},to:{pathname:this.props.match.url+"/cast",state:this.props.location.state},children:Object(j.jsx)("span",{className:"Cast",children:Object(j.jsx)(k.a,{variant:"contained",color:"primary",children:"Cast"})})}),Object(j.jsx)(d.c,{style:{textDecoration:"none"},to:{pathname:this.props.match.url+"/reviews",state:this.props.location.state},children:Object(j.jsx)("span",{className:"Reviews",children:Object(j.jsx)(k.a,{variant:"contained",color:"primary",children:"Reviews"})})}),Object(j.jsx)(p.a,{path:this.props.match.path+"/reviews",component:N}),Object(j.jsx)(p.a,{path:this.props.match.path+"/cast",component:D})]})}}]),a}(n.Component),q=a(42),S=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={query:"",movies:[]},t.componentDidMount=function(){null!==t.props.location.state&&(t.setState({query:t.props.location.state.search}),y(t.props.location.state.search).then((function(e){t.setState({movies:e.data.results})})))},t.handleChangeQuery=function(e){t.setState(Object(q.a)({},e.target.name,e.target.value))},t.handleSubmitForm=function(e){e.preventDefault(),y(t.state.query).then((function(e){t.setState({movies:e.data.results})}))},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("form",{action:"",onSubmit:this.handleSubmitForm,children:Object(j.jsx)("label",{htmlFor:"",children:Object(j.jsx)("input",{onInput:this.handleChangeQuery,type:"text",placeholder:"search movies",name:"query",value:this.state.query})})}),Object(j.jsx)(u,{query:this.state.query,history:this.props.history,movies:this.state.movies})]})}}]),a}(n.Component),F=(a(36),function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={query:""},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/",component:_}),Object(j.jsx)(p.a,{exact:!0,path:"/movies",component:S}),Object(j.jsx)(p.a,{path:"/movies/:id",component:C})]})]})}}]),a}(n.Component));i.a.render(Object(j.jsx)(d.a,{children:Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(F,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.225b71e6.chunk.js.map