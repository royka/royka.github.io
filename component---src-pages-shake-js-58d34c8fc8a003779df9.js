(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(133),s=a(138),o=a(154),l=a(155),d=a.n(l),u=function(){return r.a.createElement(n.StaticQuery,{query:"1485683009",render:function(e){return r.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})};a(156),t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(n.Link,{to:"/"},"BACK"),r.a.createElement("h1",null,"An Example of a CSS animation on an image"),r.a.createElement("div",{className:"centered"},r.a.createElement("div",{className:"face"},r.a.createElement(u,null))))}},133:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(132),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(134),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var c=a(28);a.d(t,"parsePath",function(){return c.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},134:function(e,t,a){var i;e.exports=(i=a(136))&&i.default||i},135:function(e){e.exports={data:{site:{siteMetadata:{title:"When Code Goes Wrong"}}}}},136:function(e,t,a){"use strict";a.r(t);a(29);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(46),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},137:function(e,t,a){},138:function(e,t,a){"use strict";var i=a(135),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(139),d=a.n(l),u=a(133),c=function(e){var t=e.siteTitle;return n.a.createElement("div",{style:{background:"rgb(0, 0, 255)",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},f=(a(137),function(e){var t=e.children;return n.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sams Blog"},{name:"keywords",content:"Blog, JS, CSS, Programming"}]},n.a.createElement("html",{lang:"en"})),n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:i})});f.propTypes={children:o.a.node.isRequired};t.a=f},154:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,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",aspectRatio:.8324873096446701,src:"/static/d2d8ae17f9098ae147a293c26396f033/862dc/bella.png",srcSet:"/static/d2d8ae17f9098ae147a293c26396f033/a4c5e/bella.png 75w,\n/static/d2d8ae17f9098ae147a293c26396f033/e31c9/bella.png 150w,\n/static/d2d8ae17f9098ae147a293c26396f033/862dc/bella.png 164w",sizes:"(max-width: 164px) 100vw, 164px"}}}}}},155:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(6)),s=i(a(47)),o=i(a(141)),l=i(a(142)),d=i(a(0)),u=i(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,n=!1,o=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,n=!0),"undefined"==typeof window&&(i=!1,r=!1),t.critical&&(i=!0,r=!1,n=!1);var u=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:r,IOSupported:n,fadeIn:o,hasNoScript:u,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,E=e.Tag,w="boolean"==typeof y?"lightgray":y,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),A={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var L=h;return d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&d.default.createElement(b,(0,l.default)({src:L.base64},A)),L.tracedSVG&&d.default.createElement(b,(0,l.default)({src:L.tracedSVG},A)),w&&d.default.createElement(E,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(b,{alt:a,title:t,src:L.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},L))}}))}if(g){var R=g,q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(b,(0,l.default)({src:R.base64},A)),R.tracedSVG&&d.default.createElement(b,(0,l.default)({src:R.tracedSVG},A)),w&&d.default.createElement(E,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:E,sizes:w,fixed:E,fluid:w,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,Tag:u.default.string};var S=y;t.default=S},156:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-shake-js-58d34c8fc8a003779df9.js.map