(this["webpackJsonplistify-project"]=this["webpackJsonplistify-project"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r,c=n(2),i=n.n(c),s=n(27),a=n.n(s),o=n(52),j={apiKey:"AIzaSyD8zs9oK-BvtUICviOHLrVpcNOzbMvUR_k",authDomain:"listify-project-56d94.firebaseapp.com",databaseURL:"https://listify-project-56d94-default-rtdb.europe-west1.firebasedatabase.app",projectId:"listify-project-56d94",storageBucket:"listify-project-56d94.appspot.com",messagingSenderId:"108020178071",appId:"1:108020178071:web:b81127db0ed946e8abddd2"},l=n(28),d=n(25),u=n(26),b=n(18),p="AUTH_INIT_TEST",h="AUTH_SPOTIFY",O="AUTH_SPOTIFY_ERROR",f="AUTH_SPOTIFY_SET_STATE",x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(b.a)({type:e},t)},y=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(r.type)?t[r.type](n,r):n}},v=y({status:null,spotify:{token:null,expires_in:0,spotify_string:null,error:null}},(r={},Object(u.a)(r,p,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{status:"initialized"})})),Object(u.a)(r,h,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{spotify:{token:t.token,expires_in:t.expires_in,spotify_string:e.spotify.spotify_string,error:null}})})),Object(u.a)(r,O,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{spotify:{token:null,expires_in:null,spotify_string:e.spotify.spotify_string,error:t.error}})})),Object(u.a)(r,f,(function(e,t){return localStorage.setItem("spotifyState",t.spotify_string),Object(b.a)(Object(b.a)({},e),{},{spotify:Object(b.a)(Object(b.a)({},e.spotify),{},{spotify_string:t.spotify_string})})})),r)),g="SEARCH_INIT_TEST",m=y({status:null,latestQuery:null,activePage:null,isExact:!1,resulTypes:["track"]},Object(u.a)({},g,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{status:"initialized"})}))),S=Object(d.c)({auth:v,search:m}),_=n(21),k=n.n(_),T=n(24),w={initAuth:function(){return x(p)},saveSpotifyToken:function(e,t,n){return x(h,{token:e,expires_in:t,spotify_string:n})},saveSpotifyTokenError:function(e){return x(O,{error:e})},setSpotifyState:function(e){return x(f,{spotify_string:e})}},E=k.a.mark(A),I=k.a.mark(N);function A(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(T.c)(p);case 3:console.log("reached initial saga (auth)"),e.next=0;break;case 6:case"end":return e.stop()}}),E)}function N(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.d)(p,A)]);case 2:case"end":return e.stop()}}),I)}var U=k.a.mark(z),R=k.a.mark(L);function z(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(T.c)(g);case 3:console.log("reached initial saga (search)"),e.next=0;break;case 6:case"end":return e.stop()}}),U)}function L(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.d)(g,z)]);case 2:case"end":return e.stop()}}),R)}var C=k.a.mark(D);function D(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.b)(N);case 2:return e.next=4,Object(T.b)(L);case 4:console.log("Root saga initialized and reached.");case 5:case"end":return e.stop()}}),C)}var F=n(59),P=(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(F.a)()),B=Object(d.e)(S,Object(d.a)(P));P.run(D);var H=n(46),K=(n(68),n(69),n(11)),J=n(35),V=(n(70),n(55)),M=n(36),X=n(58),W=n(4);var Y=function(e){return Object(W.jsxs)("div",{children:[Object(W.jsxs)(X.a,{className:"tabs",defaultActiveKey:"tracks",id:"home-page-tabs",children:[Object(W.jsx)(M.a,{eventKey:"playlist",title:"Playlists",children:Object(W.jsx)("p",{children:"Will display playlists eventually"})}),Object(W.jsx)(M.a,{eventKey:"tracks",title:"Tracks",children:Object(W.jsxs)(V.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(W.jsx)("thead",{children:Object(W.jsxs)("tr",{children:[Object(W.jsx)("th",{children:"#"}),Object(W.jsx)("th",{children:"Artist"}),Object(W.jsx)("th",{children:"Song Name"}),Object(W.jsx)("th",{children:"Album"})]})}),Object(W.jsxs)("tbody",{children:[Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"1"}),Object(W.jsx)("td",{children:"The Weeknd"}),Object(W.jsx)("td",{children:"Blinding Lights"}),Object(W.jsx)("td",{children:"After Hours"})]}),Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"2"}),Object(W.jsx)("td",{children:"The Weeknd"}),Object(W.jsx)("td",{children:"In Your Eyes"}),Object(W.jsx)("td",{children:"After Hours"})]}),Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"3"}),Object(W.jsx)("td",{children:"Justin Bieber"}),Object(W.jsx)("td",{children:"Peaches"}),Object(W.jsx)("td",{children:"Justice"})]}),Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"4"}),Object(W.jsx)("td",{children:"Molly Sand\xe9n"}),Object(W.jsx)("td",{children:"N\xe5n annan nu"}),Object(W.jsx)("td",{children:"N\xe5n annan nu"})]}),Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"5"}),Object(W.jsx)("td",{children:"Lil Nas X"}),Object(W.jsx)("td",{children:"Montero"}),Object(W.jsx)("td",{children:"Montero"})]}),Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"6"}),Object(W.jsx)("td",{children:"Alesso"}),Object(W.jsx)("td",{children:"Going Dumb"}),Object(W.jsx)("td",{children:"Going Dumb"})]}),Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"7"}),Object(W.jsx)("td",{children:"Tusse"}),Object(W.jsx)("td",{children:"Voices"}),Object(W.jsx)("td",{children:"Voices"})]})]})]})}),Object(W.jsx)(M.a,{eventKey:"search",title:"Search",children:Object(W.jsx)("p",{children:"Search"})}),Object(W.jsx)(M.a,{className:"listify",eventKey:"logo",title:"Listify",disabled:!0})]}),Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)("p",{children:"Spotify login success!"}),Object(W.jsx)("h2",{children:"Sample API data from authorized user"}),Object(W.jsx)("h5",{children:"Username"}),Object(W.jsx)("p",{children:e.username}),Object(W.jsx)("h5",{children:"Display name"}),Object(W.jsx)("p",{children:e.display_name}),Object(W.jsx)("h5",{children:"Country Code"}),Object(W.jsx)("p",{children:e.country})]})]})},G="https://api.spotify.com/v1",Q=function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=t.startsWith("/")?t:"/"+t,s={Authorization:"Bearer "+e},a={method:n,headers:s};return 0!==Object.keys(c).length&&(a.body=JSON.Stringify(c),s["Content-Type"]=r),fetch(G+i,a)}(e,"/me")};var q=Object(l.b)((function(e){return{token:e.auth.spotify.token}}),{})((function(e){var t=e.token,n=Object(K.f)();t||n.push("/");var r=Object(c.useState)(null),i=Object(J.a)(r,2),s=i[0],a=i[1],o=Object(c.useState)(null),j=Object(J.a)(o,2),l=(j[0],j[1]);return Object(c.useEffect)((function(){l(Q(t).then((function(e){return e.json()})).then((function(e){return a(e)})))}),[]),s?Object(W.jsx)(Y,{username:s.id||"",country:s.country||"",display_name:s.display_name||""}):Object(W.jsx)("div",{className:"App",children:"Fetching user.."})}));var Z={saveSpotifyToken:w.saveSpotifyToken,saveSpotifyTokenError:w.saveSpotifyTokenError},$=Object(l.b)((function(e){return{auth:e.auth}}),Z)((function(e){var t=Object(K.f)(),n=Object(K.g)();return n.state&&n.state==localStorage.getItem("spotifyState")||(console.error("Faulty URL parameter 'state' for login attempt."),t.push("/")),localStorage.removeItem("spotifyState"),n.error&&(e.saveSpotifyTokenError(n.error),t.push("/")),n.token&&n.expires_in&&(e.saveSpotifyToken(n.token,n.expires_in),t.push("/authorized")),Object(W.jsx)("div",{})}));var ee=encodeURIComponent(["ugc-image-upload","playlist-modify-public","playlist-modify-private","playlist-read-private","playlist-read-collaborative","user-read-private"].reduce((function(e,t,n){return 0!==n?e+" "+t:t}))),te="https://accounts.spotify.com/authorize?client_id=".concat("c0e19491232e4cadbff0efd339179f6d","&redirect_uri=").concat(encodeURIComponent("https://martinfalke.github.io/spotify-project/#"),"&scope=").concat(ee,"&response_type=token"),ne=n(56);n(77);var re=function(e){return Object(W.jsxs)("div",{className:"start-view",children:[Object(W.jsx)("p",{children:console.log("Firebase config options: ".concat(e.firebaseOptions))}),Object(W.jsx)("header",{className:"login-header",children:Object(W.jsx)("h1",{children:"Listify"})}),Object(W.jsx)(ne.a,{variant:"secondary",href:e.loginUrl,className:"login-bnt",children:Object(W.jsx)("i",{className:"fa fa-spotify",children:"Login with Spotify"})})]})},ce=n(57);var ie={setSpotifyState:w.setSpotifyState},se=Object(l.b)(null,ie)((function(e){var t=Object(c.useState)(null),n=Object(J.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){var t=function(e){var t=new Uint8Array((e||10)/2);return window.crypto.getRandomValues(t),Array.from(t,(function(e){return e.toString(16).padStart(2,"0")})).join("")}();i(t),e.setSpotifyState(t)}),[]),Object(W.jsx)(re,{loginUrl:"".concat(te,"&state=").concat(r),firebaseOptions:JSON.stringify(ce.a.apps[0].options,null,2)})}));var ae=function(){return Object(W.jsxs)(K.c,{children:[Object(W.jsx)(K.a,{exact:!0,path:"/authorized",component:q}),Object(W.jsx)(K.a,{path:"/access_token=:token(.*)&token_type=Bearer&expires_in=:expires_in(.*)&state=:state(.*)",component:$}),Object(W.jsx)(K.a,{path:"/error=:error(.*)&state=:state(.*)",component:$}),Object(W.jsx)(K.a,{exact:!0,path:"/",component:se})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};o.a.initializeApp(j),a.a.render(Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(l.a,{store:B,children:Object(W.jsx)(H.a,{hashType:"noslash",children:Object(W.jsx)(ae,{})})})}),document.getElementById("root")),oe()}},[[80,1,2]]]);
//# sourceMappingURL=main.62d5a69f.chunk.js.map