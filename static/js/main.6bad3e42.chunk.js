(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(15),i=n.n(r),s=n(4),o=n.n(s),u=n(7),l=n(3),d=n(9),p=(n(21),n(8)),b=n(5),j=n(0),h=function(e){var t=e.audioRef,n=e.songInfo,c=e.setSongInfo,a=e.songs,r=e.currentSong,i=e.isPlaying,s=e.setIsPlaying,d=e.setCurrentSong,h=e.setSongs,f=function(e){var t=a.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));h(t)},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(u.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a.findIndex((function(e){return e.id===r.id})),"skip-forward"!==n){e.next=7;break}return e.next=4,d(a[(c+1)%a.length]);case 4:f(a[(c+1)%a.length]),e.next=10;break;case 7:return e.next=9,d(a[(c-1+a.length)%a.length]);case 9:f(a[(c-1+a.length)%a.length]);case 10:if(!i){e.next=13;break}return t.current.play(),e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(n.animationPercentage,"%)")};return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:g(n.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(r.color[0],", ").concat(r.color[1],")")},className:"track",children:[Object(j.jsx)("input",{min:0,max:n.duration||0,value:n.currentTime,type:"range",onChange:function(e){t.current.currentTime=e.target.value,c(Object(l.a)(Object(l.a)({},n),{},{currentTime:e.target.value}))}}),Object(j.jsx)("div",{style:v,className:"animate-track"})]}),Object(j.jsx)("p",{children:n.duration?g(n.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control",children:[Object(j.jsx)(p.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(j.jsx)(p.a,{onClick:function(){i?(t.current.pause(),s(!i)):(t.current.play(),s(!i))},className:"play",size:"2x",icon:i?b.d:b.e}),Object(j.jsx)(p.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:b.b})]})]})},f=function(e){var t=e.currentSong;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",{alt:t.name,src:t.cover}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,a=e.id,r=e.audioRef,i=e.isPlaying,s=e.setSongs,d=function(){var e=Object(u.a)(o.a.mark((function e(){var t,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===a})),e.next=3,c(t[0]);case 3:if(u=n.map((function(e){return e.id===a?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),s(u),!i){e.next=8;break}return r.current.play(),e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:d,className:"library-song ".concat(t.active?"selected":""),children:[Object(j.jsx)("img",{alt:t.name,src:t.cover}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,a=e.isPlaying,r=e.setSongs,i=e.libraryStatus;return Object(j.jsxs)("div",{className:"library ".concat(i?"active-library":""," "),children:[Object(j.jsx)("h2",{children:"Library"}),Object(j.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(j.jsx)(g,{songs:t,song:e,setCurrentSong:n,id:e.id,audioRef:c,isPlaying:a,setSongs:r},e.id)}))})]})},v=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Waves"}),Object(j.jsx)("h2",{children:"\u59ae\u513f\uff0c\u5de5\u4f5c\u7d2f\u4e86\uff0c\u542c\u70b9\ud83c\udfb5\u5427 :p"}),Object(j.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(j.jsx)(p.a,{icon:b.c})]})]})},O=n(6);var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.v4)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.v4)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.v4)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.v4)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.v4)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.v4)(),active:!1}]};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(x()),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(a[0]),s=Object(d.a)(i,2),p=s[0],b=s[1],g=Object(c.useState)(!1),O=Object(d.a)(g,2),y=O[0],S=O[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(d.a)(k,2),C=w[0],N=w[1],P=Object(c.useState)(!1),I=Object(d.a)(P,2),T=I[0],A=I[1],M=function(e){var t=e.target.currentTime,n=e.target.duration,c=Math.round(t),a=Math.round(n),r=Math.round(c/a*100);N(Object(l.a)(Object(l.a)({},C),{},{currentTime:t,duration:n,animationPercentage:r}))},R=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.findIndex((function(e){return e.id===p.id})),t.next=3,b(a[(n+1)%a.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App ".concat(T?"library-active":""),children:[Object(j.jsx)(v,{libraryStatus:T,setLibraryStatus:A}),Object(j.jsx)(f,{currentSong:p}),Object(j.jsx)(h,{audioRef:e,isPlaying:y,setIsPlaying:S,songs:a,setSongs:r,currentSong:p,setCurrentSong:b,songInfo:C,setSongInfo:N}),Object(j.jsx)(m,{audioRef:e,songs:a,setCurrentSong:b,isPlaying:y,setSongs:r,libraryStatus:T}),Object(j.jsx)("audio",{onTimeUpdate:M,onLoadedMetadata:M,ref:e,src:p.audio,onEnded:R})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.6bad3e42.chunk.js.map