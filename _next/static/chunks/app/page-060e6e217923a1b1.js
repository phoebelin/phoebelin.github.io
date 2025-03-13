(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4282:function(e,t,n){Promise.resolve().then(n.bind(n,1470))},7907:function(e,t,n){"use strict";var r=n(5313);n.o(r,"notFound")&&n.d(t,{notFound:function(){return r.notFound}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},3471:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(3827),a=n(6680);function s(e){let{title:t,children:n,icon:s,delay:i=0}=e;return(0,r.jsxs)(a.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:i,duration:.5},className:"bg-white p-6 rounded-lg shadow-md space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[s&&(0,r.jsx)("span",{className:"text-xl",children:s}),(0,r.jsx)("h2",{className:"text-xl font-semibold text-gray-800",children:t})]}),(0,r.jsx)("div",{className:"text-gray-600",children:n})]})}},9558:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(3827),a=n(6680),s=n(3557);function i(e){let{children:t,className:n=""}=e;return(0,r.jsx)(a.E.div,{variants:s.wz,initial:"initial",animate:"animate",exit:"exit",className:"min-h-screen ".concat(n),children:t})}},1292:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});let r=[{id:"1",name:"John Smith",tableNumber:1,personalNote:"Thank you for being part of our special day! We can't wait to celebrate with you.",plusOne:!0,events:{ceremony:{date:"2024-06-15",time:"3:00 PM",venue:{name:"St. Mary's Cathedral",address:"1111 Gough St, San Francisco, CA 94109",googleMapsUrl:"https://maps.google.com/?q=St+Marys+Cathedral+SF"},dresscode:"Formal"},reception:{date:"2024-06-15",time:"5:00 PM",venue:{name:"San Francisco Palace Hotel",address:"2 New Montgomery St, San Francisco, CA 94105",googleMapsUrl:"https://maps.google.com/?q=Palace+Hotel+SF"},dresscode:"Black Tie Optional"}}},{id:"2",name:"Jane Doe",tableNumber:2,dietaryRestrictions:"Vegetarian",personalNote:"We're so happy you can join us on our wedding day!",events:{reception:{date:"2024-06-15",time:"5:00 PM",venue:{name:"San Francisco Palace Hotel",address:"2 New Montgomery St, San Francisco, CA 94105",googleMapsUrl:"https://maps.google.com/?q=Palace+Hotel+SF"},dresscode:"Black Tie Optional"}}}]},1470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(3827),a=n(4090),s=n(7907),i=n(6680),o=n(8745),c=n(1292);function l(e){return e.toLowerCase().trim().replace(/\s+/g," ")}var d=n(9558),u=n(3557);function m(e){let{onClick:t,children:n,variant:a="primary",size:s="md",disabled:o=!1,className:c="",type:l="button"}=e;return(0,r.jsx)(i.E.button,{onClick:t,variants:u.dc,initial:"initial",whileHover:o?void 0:"hover",whileTap:o?void 0:"tap",className:"".concat("rounded-lg font-medium transition-colors duration-200"," ").concat({primary:"bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700",secondary:"bg-rose-100 text-rose-700 hover:bg-rose-200 active:bg-rose-300",outline:"border-2 border-rose-500 text-rose-500 hover:bg-rose-50 active:bg-rose-100"}[a]," ").concat({sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"}[s]," ").concat(o?"opacity-50 cursor-not-allowed":"cursor-pointer"," ").concat(c),disabled:o,type:l,children:n})}var p=n(3471);let h={ceremony:{date:"2024-06-15",time:"3:00 PM",venue:{name:"St. Mary's Cathedral",address:"1111 Gough St, San Francisco, CA 94109",googleMapsUrl:"https://maps.google.com/?q=St+Marys+Cathedral+SF"},dresscode:"Formal"},reception:{date:"2024-06-15",time:"5:00 PM",venue:{name:"San Francisco Palace Hotel",address:"2 New Montgomery St, San Francisco, CA 94105",googleMapsUrl:"https://maps.google.com/?q=Palace+Hotel+SF"},dresscode:"Black Tie Optional"}};function x(){return(0,r.jsxs)(i.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"space-y-6",children:[(0,r.jsx)(p.Z,{title:"Wedding Ceremony",icon:"⛪",delay:.2,children:(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium",children:"Date & Time"}),(0,r.jsx)("p",{children:new Date(h.ceremony.date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),(0,r.jsx)("p",{children:h.ceremony.time})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium",children:"Venue"}),(0,r.jsx)("p",{children:h.ceremony.venue.name}),(0,r.jsx)("p",{children:h.ceremony.venue.address}),h.ceremony.venue.googleMapsUrl&&(0,r.jsx)("a",{href:h.ceremony.venue.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"text-rose-500 hover:text-rose-600 transition inline-flex items-center gap-1 mt-1",children:"View on Maps \uD83D\uDCCD"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium",children:"Dress Code"}),(0,r.jsx)("p",{children:h.ceremony.dresscode})]})]})}),(0,r.jsx)(p.Z,{title:"Wedding Reception",icon:"\uD83C\uDF89",delay:.4,children:(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium",children:"Date & Time"}),(0,r.jsx)("p",{children:new Date(h.reception.date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),(0,r.jsx)("p",{children:h.reception.time})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium",children:"Venue"}),(0,r.jsx)("p",{children:h.reception.venue.name}),(0,r.jsx)("p",{children:h.reception.venue.address}),h.reception.venue.googleMapsUrl&&(0,r.jsx)("a",{href:h.reception.venue.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"text-rose-500 hover:text-rose-600 transition inline-flex items-center gap-1 mt-1",children:"View on Maps \uD83D\uDCCD"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium",children:"Dress Code"}),(0,r.jsx)("p",{children:h.reception.dresscode})]})]})})]})}function f(){let[e,t]=(0,a.useState)(""),[n,p]=(0,a.useState)(""),h=(0,s.useRouter)();return(0,r.jsx)(d.Z,{children:(0,r.jsx)("main",{className:"min-h-screen bg-gradient-to-b from-rose-50 to-white",children:(0,r.jsxs)(i.E.div,{variants:u.DV,initial:"hidden",animate:"visible",className:"container mx-auto px-4 py-16 space-y-12",children:[(0,r.jsxs)(i.E.div,{variants:u.G2,className:"text-center space-y-4",children:[(0,r.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800",children:"Our Wedding Celebration"}),(0,r.jsx)("p",{className:"text-xl text-gray-600",children:"Join us for our special day"})]}),(0,r.jsxs)(i.E.section,{variants:u.G2,className:"max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6",children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold text-gray-800",children:"Guest Portal"}),(0,r.jsx)("p",{className:"text-gray-600 mt-2",children:"Enter your name to view your personal invitation"})]}),(0,r.jsxs)("form",{onSubmit:t=>{t.preventDefault();let n=function(e){let t=l(e);return c.N.find(e=>l(e.name)===t||l(e.name).includes(t)||t.includes(l(e.name)))}(e);n?h.push("/guest/".concat(n.id)):p("Guest not found. Please check the name and try again.")},className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.E.input,{type:"text",value:e,onChange:e=>{t(e.target.value),p("")},placeholder:"Enter your full name",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none",whileFocus:{scale:1.02},animate:n?{x:[-4,4,-4,4,0]}:{}}),(0,r.jsx)(o.M,{mode:"wait",children:n&&(0,r.jsx)(i.E.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"text-rose-500 text-sm mt-2",children:n})})]}),(0,r.jsx)(m,{type:"submit",variant:"primary",size:"lg",className:"w-full",children:"View table #"})]})]}),(0,r.jsx)(i.E.div,{variants:u.G2,className:"max-w-4xl mx-auto",children:(0,r.jsx)(x,{})})]})})})}},3557:function(e,t,n){"use strict";n.d(t,{DV:function(){return s},G2:function(){return a},dc:function(){return i},wz:function(){return r}});let r={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}},exit:{opacity:0,y:-20,transition:{duration:.5,ease:[.22,1,.36,1]}}},a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},i={initial:{scale:1},hover:{scale:1.05,transition:{duration:.2,ease:"easeInOut"}},tap:{scale:.95}}},8745:function(e,t,n){"use strict";n.d(t,{M:function(){return g}});var r=n(3827),a=n(4090),s=n(3856),i=n(2435),o=n(5526),c=n(4561),l=n(3449);class d extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:n,anchorX:s}=e,i=(0,a.useId)(),o=(0,a.useRef)(null),c=(0,a.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=(0,a.useContext)(l._);return(0,a.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:a,right:l}=c.current;if(n||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;let d=document.createElement("style");return u&&(d.nonce=u),document.head.appendChild(d),d.sheet&&d.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===s?"left: ".concat(a):"right: ".concat(l),"px !important;\n            top: ").concat(r,"px !important;\n          }\n        ")),()=>{document.head.removeChild(d)}},[n]),(0,r.jsx)(d,{isPresent:n,childRef:o,sizeRef:c,children:a.cloneElement(t,{ref:o})})}let m=e=>{let{children:t,initial:n,isPresent:s,onExitComplete:o,custom:l,presenceAffectsLayout:d,mode:m,anchorX:h}=e,x=(0,i.h)(p),f=(0,a.useId)(),g=(0,a.useCallback)(e=>{for(let t of(x.set(e,!0),x.values()))if(!t)return;o&&o()},[x,o]),y=(0,a.useMemo)(()=>({id:f,initial:n,isPresent:s,custom:l,onExitComplete:g,register:e=>(x.set(e,!1),()=>x.delete(e))}),d?[Math.random(),g]:[s,g]);return(0,a.useMemo)(()=>{x.forEach((e,t)=>x.set(t,!1))},[s]),a.useEffect(()=>{s||x.size||!o||o()},[s]),"popLayout"===m&&(t=(0,r.jsx)(u,{isPresent:s,anchorX:h,children:t})),(0,r.jsx)(c.O.Provider,{value:y,children:t})};function p(){return new Map}var h=n(3177);let x=e=>e.key||"";function f(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}let g=e=>{let{children:t,custom:n,initial:c=!0,onExitComplete:l,presenceAffectsLayout:d=!0,mode:u="sync",propagate:p=!1,anchorX:g="left"}=e,[y,v]=(0,h.oO)(p),j=(0,a.useMemo)(()=>f(t),[t]),b=p&&!y?[]:j.map(x),N=(0,a.useRef)(!0),w=(0,a.useRef)(j),C=(0,i.h)(()=>new Map),[S,M]=(0,a.useState)(j),[E,D]=(0,a.useState)(j);(0,o.L)(()=>{N.current=!1,w.current=j;for(let e=0;e<E.length;e++){let t=x(E[e]);b.includes(t)?C.delete(t):!0!==C.get(t)&&C.set(t,!1)}},[E,b.length,b.join("-")]);let P=[];if(j!==S){let e=[...j];for(let t=0;t<E.length;t++){let n=E[t],r=x(n);b.includes(r)||(e.splice(t,0,n),P.push(n))}return"wait"===u&&P.length&&(e=P),D(f(e)),M(j),null}let{forceRender:F}=(0,a.useContext)(s.p);return(0,r.jsx)(r.Fragment,{children:E.map(e=>{let t=x(e),a=(!p||!!y)&&(j===E||b.includes(t));return(0,r.jsx)(m,{isPresent:a,initial:(!N.current||!!c)&&void 0,custom:n,presenceAffectsLayout:d,mode:u,onExitComplete:a?void 0:()=>{if(!C.has(t))return;C.set(t,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(null==F||F(),D(w.current),p&&(null==v||v()),l&&l())},anchorX:g,children:e},t)})})}}},function(e){e.O(0,[680,971,69,744],function(){return e(e.s=4282)}),_N_E=e.O()}]);