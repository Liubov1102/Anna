(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[52717],{807592:(i,e,n)=>{function t(i){const{max_price:e,min_price:n,price:t}=i;return e&&n?`${n}-${e}`:t}n.d(e,{Z:()=>t})},35495:(i,e,n)=>{n.d(e,{GT:()=>h,Gy:()=>o,Kl:()=>f,QY:()=>m,RR:()=>d,SP:()=>_,Sn:()=>g,Zs:()=>v,bA:()=>c,fz:()=>p,i8:()=>l,nn:()=>s,qN:()=>u});var t=n(834911),r=n(835209),a=n(229428);const s=i=>!!i&&(i.shopping_flags||[]).includes(2),o=i=>{var e,n;return i.rich_summary&&i.rich_summary.products&&i.rich_summary.products.length>0||(null!==(e=null===(n=i.rich_metadata)||void 0===n?void 0:n.products)&&void 0!==e?e:[]).length>0},l=i=>{var e;return null===(e=i.aggregated_pin_data)||void 0===e?void 0:e.is_shop_the_look},d=i=>{var e,n;return null===(e=i.rich_summary)||void 0===e||null===(n=e.aggregate_rating)||void 0===n?void 0:n.rating_value},u=i=>i.is_oos_product,_=i=>i.is_stale_product,c=i=>u(i)||_(i),p=i=>{var e;const n=(0,r.Z)({richPinData:i.rich_summary||{}});return null==n||null===(e=n.brand)||void 0===e?void 0:e.name},m=i=>{var e,n,t,r;const a=null==i||null===(e=i.link_domain)||void 0===e||null===(n=e.official_user)||void 0===n?void 0:n.full_name;if(a)return a;const s=null==i||null===(t=i.rich_summary)||void 0===t?void 0:t.site_name;if(s)return s;if(i.domain){if("Uploaded by user"===i.domain){return((i.is_repin?i.origin_pinner:i.pinner)||{}).full_name}return i.domain}const o=null==i||null===(r=i.via_pinner)||void 0===r?void 0:r.full_name;return i.is_repin&&o?o:void 0},h=i=>{if(i){const e=i.shopping_flags||[];return!e.includes(10)&&i.product_pin_data&&i.product_pin_data.items&&i.product_pin_data.items[0]&&i.product_pin_data.items[0].additional_images&&e.push(10),e}return[]};function v(i,e={},n){var r,s,o,l,d,u;const _=h(i),c={...e.commerce_data};_.includes(2)&&(c.pin_is_shop_the_look=!0),_.includes(1)&&(c.is_available=!0),_.includes(5)&&(c.is_product_pin_v2=!0),_.includes(6)&&(c.is_rich_product_pin=!0),_.includes(10)&&(c.is_organic_product_carousel=!0);if((!!i.visual_objects&&(0,a.k)(i.visual_objects)||[]).some((i=>!0===i.is_stela))&&(c.pin_is_stela=!0),i.is_eligible_for_pdp_plus||i.is_eligible_for_pdp||i.is_ooo_product||i.is_stale_product){i.is_oos_product?c.pin_show_pdp_oos=!0:i.is_stale_product?c.pin_show_pdp_stale=!0:i.is_eligible_for_pdp&&(c.pin_show_pdp=!0);const e=(0,t.Z)({carouselData:i.carousel_data,images:i.images,richMetadata:null==i?void 0:i.rich_metadata,richSummary:null==i?void 0:i.rich_summary});if("pdp_plus"===n&&i.is_eligible_for_pdp_plus){var p,m,v,g,f,y,x,b,P;c.is_pdpplus=!0;const n=null==i||null===(p=i.rich_metadata)||void 0===p||null===(m=p.products)||void 0===m?void 0:m[0],t=null==n||null===(v=n.shipping_info)||void 0===v?void 0:v.free_shipping_price,r=null==n||null===(g=n.shipping_info)||void 0===g?void 0:g.free_shipping_value,a=(null==n||null===(f=n.variant_set)||void 0===f||null===(y=f.variants)||void 0===y?void 0:y.length)||0,s=(i=>{const e=(null==i?void 0:i.variants)||[],n=(null==i?void 0:i.dimension_metadata)||[];return Array.isArray(e)&&Array.isArray(n)?n.reduce(((i,n)=>n.name&&Array.isArray(n.values)?i+n.values.filter((i=>e.find((e=>{var t,r;return(null===(t=e.dimensions)||void 0===t?void 0:t[null!==(r=n.name)&&void 0!==r?r:""])===i})))).length:i),0):0})(null==n?void 0:n.variant_set),o=(null==n||null===(x=n.variant_set)||void 0===x||null===(b=x.dimension_metadata)||void 0===b?void 0:b.length)||0,l=null==n||null===(P=n.brand)||void 0===P?void 0:P.signature;var S;if(l&&(c.brand_signature=l),e)c.carousel_image_count=null===(S=e.carousel_slots)||void 0===S?void 0:S.length;t&&(c.free_shipping_price=t),r&&(c.free_shipping_value=r),a&&(c.num_variants=a),s&&(c.valid_dimension_option_count=s),o&&(c.total_dimension_option_count=o)}else if(e){var A;c.image_count=null===(A=e.carousel_slots)||void 0===A?void 0:A.length,c.image_index=e.index}}null!=i&&null!==(r=i.rich_summary)&&void 0!==r&&null!==(s=r.products)&&void 0!==s&&null!==(o=s[0])&&void 0!==o&&o.item_id&&(c.item_id=i.rich_summary.products[0].item_id),null!=i&&null!==(l=i.rich_summary)&&void 0!==l&&null!==(d=l.products)&&void 0!==d&&null!==(u=d[0])&&void 0!==u&&u.item_set_id&&(c.item_set_id=i.rich_summary.products[0].item_set_id);const Z=i.aggregated_pin_data||{};return null!=Z&&Z.is_shop_the_look&&(c.pin_is_shop_the_look=!0),i.story_pin_data&&(c.story_pin_id=i.story_pin_data.id),c}function g(i){const e=JSON.stringify(i);return"{}"!==e?{commerce_data:e}:null}const f=(i,e={},n)=>{if(i){return g(v(i,e,n))}return null}},241244:(i,e,n)=>{n.d(e,{N:()=>s,Z:()=>a});var t=n(883119),r=n(785893);function a({children:i,fullWidth:e}){return(0,r.jsx)(t.xu,{"data-test-id":"pointer-events-wrapper",dangerouslySetInlineStyle:{__style:{pointerEvents:"auto",width:e?"100%":void 0}},children:i})}function s({children:i,enabled:e}){return e?(0,r.jsx)(a,{children:i}):i}},834911:(i,e,n)=>{n.d(e,{Z:()=>a});var t=n(835209),r=n(341732);function a({carouselData:i,images:e,richMetadata:n,richSummary:a,shouldUnifyImageSizes:s,additionalImages:o}){const l=(0,t.Z)({richPinData:n||a});return l&&o&&o.length>0?(0,r.Z)(null,o,i&&i.index,s,l.id):l&&l.additional_images&&l.additional_images.length>0?(0,r.Z)(e,l.additional_images,i&&i.index,s,l.id):i||void 0}},341732:(i,e,n)=>{n.d(e,{Z:()=>a});const t=["236x","474x","564x","736x"];function r(i){function e(i,{imageKey:e,height:n,width:t}){return i.images&&i.images[e]&&(i={...i,images:{...i.images,[e]:{...i.images[e],height:n,width:t}}}),i}const n=t.map((function(e){const n=Math.min(...i.map((i=>i.images&&i.images[e]&&i.images[e].height||1/0))),t=Math.min(...i.map((i=>i.images&&i.images[e]&&i.images[e].width||1/0)));return{imageKey:e,height:n,width:t}}));return i.map((i=>n.reduce(e,i)))}function a(i,e,n,t,a){const s=(null==e?void 0:e.map((({canonical_images:i,image_signature:e})=>({images:i||void 0,image_signature:e||void 0}))))||[],o=i?[{images:i},...s]:s;return{carousel_slots:t?r(o):o,index:n||0,id:a}}},64446:(i,e,n)=>{n.d(e,{Z:()=>m});var t=n(605028);var r=n(341732),a=n(81226),s=n(898781),o=n(237056),l=n(623568),d=n(883119),u=n(785893);const _={borderRadius:"18px",fontSize:"10px",fontWeight:"600",height:"24px",lineHeight:"24px",padding:"0 6px"},c={borderRadius:"18px",fontSize:"10px",fontWeight:"600",lineHeight:"24px",padding:"4px 8px"};function p({backgroundColor:i,identifier:e,size:n="sm"}){const t="pine"===i?"#0FA573":"#fff",r="sm"===n?_:c;return(0,u.jsx)(d.xu,{display:"inlineBlock",dangerouslySetInlineStyle:{__style:{...r,backgroundColor:i?t:"rgba(255, 255, 255, 0.8)",color:"pine"===i?"#fff":"#111"}},"data-test-id":"PinTypeIdentifier",children:e})}function m({pin:i,size:e="sm",allowProductCarousel:n,allowShoppingPriceIndicator:_,shoppingLabelColor:c}){const m=(0,s.ZP)(),h=(0,o.Z)(),v=(0,t.Z)(i);if(v.isGif)return p({identifier:"GIF",size:e});if(v.isStoryPin&&!1!==i.should_open_in_stream){const{page_count:n=0,static_page_count:t=0,total_video_duration:r=0}=i.story_pin_data||{};let s=n.toString();if(r>0){const i=r+t*l.oN;return s=(0,a.Z)(i),p({identifier:s,size:e})}return p({identifier:(0,u.jsxs)(d.kC,{alignItems:"center",justifyContent:"between",children:[(0,u.jsx)(d.xu,{marginEnd:1,display:"flex",alignItems:"center",children:(0,u.jsx)(d.JO,{accessibilityLabel:h?m.bt("Пин", "Pin", "pin.pinTypeIdentifier.ideaPinIconAccessibilityLabel.sce", undefined, true):m.bt("Пин-идея", "Idea Pin", "pin.pinTypeIdentifier.ideaPinIconAccessibilityLabel", undefined, true),inline:!0,icon:"idea-pin",color:"default",size:"sm"===e?12:16})}),(0,u.jsx)(d.xv,{inline:!0,size:"100",weight:"bold",children:s})]}),size:e})}if(v.isVideo){const n=i.videos,{duration:t=0}=n&&n.video_list&&n.video_list[Object.keys(n.video_list)[0]]||{};return p({identifier:(0,a.Z)(t),size:e})}if(v.isProduct){const n=i.rich_summary&&i.rich_summary.products&&i.rich_summary.products[0]&&i.rich_summary.products[0].offer_summary;if(_){const i=n&&(n.price||n.max_price);return i?p({identifier:i,size:e}):null}if(c){const n=function(i){var e;return((((null===(e=i.rich_summary)||void 0===e?void 0:e.products)||[])[0]||{}).label_info||{}).labels||[]}(i)[0];return n?p({identifier:n,backgroundColor:c,size:e}):null}return null}if(n){const n=i.product_pin_data&&i.product_pin_data.items&&i.product_pin_data.items[0],t=n&&(0,r.Z)(i.images,n.additional_images,i.carousel_data&&i.carousel_data.index)||{},{carousel_slots:a=[],index:s=0}=t;return p({identifier:`${s+1}/${a.length}`,size:e})}if(v.isCarousel){const n=i.carousel_data||{},{carousel_slots:t=[],index:r=0}=n;return p({identifier:`${r+1}/${t.length}`,size:e})}return null}},692627:(i,e,n)=>{function t({hasPin:i,hasPinRichMetadata:e,hasPinRichMetadataProducts:n,hasPinRichMetadataArticle:t,hasPinRichMetadataRecipe:r,hasPinStoryPinData:a}){if(i){if(e)return n?144:t?141:r?145:139;if(a)return 157}return 140}n.d(e,{Z:()=>t})},835209:(i,e,n)=>{function t({richPinData:i={}}){return((null==i?void 0:i.products)||[])[0]}n.d(e,{Z:()=>t})},53325:(i,e,n)=>{n.d(e,{$O:()=>o,GZ:()=>d,OE:()=>u,Xv:()=>l,Z0:()=>t,_z:()=>a,fM:()=>s,qA:()=>r,zX:()=>_});const t=40,r=4,a=106,s=133,o=.1,l=10,d=246,u=197,_=236},229428:(i,e,n)=>{function t(i){return i.filter((i=>i.is_stela))}function r(i){return i.filter((i=>!!i.label))}n.d(e,{k:()=>t,m:()=>r})},225692:(i,e,n)=>{n.d(e,{X:()=>r,Z:()=>a});var t=n(667294);const r=120;function a(i,e=0,n=r){const[a,s]=(0,t.useState)(i?"active":"inactive");return(0,t.useEffect)((()=>{if(!i){const i=setTimeout((()=>s("inactive")),n);return()=>{clearTimeout(i)}}if(e){const i=setTimeout((()=>s("active")),e);return()=>{clearTimeout(i)}}s("active")}),[i]),a}},841509:(i,e,n)=>{n.d(e,{Z:()=>a});var t=n(883119),r=n(785893);function a({children:i,additionalStyles:e={}}){return(0,r.jsx)(t.xu,{position:"absolute",top:!0,left:!0,right:!0,bottom:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none",...e}},"data-test-id":"contentLayer",children:i})}},525199:(i,e,n)=>{n.d(e,{Z:()=>o});var t=n(883119),r=n(225692),a=n(785893);function s(i,e){return{hidden:{opacity:0,transition:e?`opacity ${e}ms ease`:void 0},visible:{opacity:1,transition:i?`opacity ${i}ms ease`:void 0}}}function o({children:i,fadeInDuration:e=0,fadeOutDuration:n=r.X,visibility:o}){return"none"!==o&&i?(0,a.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:s(e,n)[o]},children:i}):null}},92261:(i,e,n)=>{n.d(e,{$T:()=>v,CI:()=>a,Ch:()=>o,Gb:()=>l,Gg:()=>t,Ie:()=>c,KP:()=>p,Kn:()=>s,Uj:()=>d,bx:()=>m,d2:()=>_,g9:()=>h,iB:()=>g,u6:()=>r,zT:()=>u});const t=508,r=2*t,a=488,s=992,o=672,l=1176,d=.6,u=.84,_=40,c=72,p=740,m=912,h=32,v=24,g={ARTICLE:"https://schema.org/Article",BRAND:"https://schema.org/Brand",PRODUCT:"https://schema.org/Product",RECIPE:"https://schema.org/Recipe",OFFER:"https://schema.org/Offer",OUT_OF_STOCK:"https://schema.org/OutOfStock",PERSON:"https://schema.org/Person"}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/52717.ru_RU-331bf4ae579df2a6.mjs.map