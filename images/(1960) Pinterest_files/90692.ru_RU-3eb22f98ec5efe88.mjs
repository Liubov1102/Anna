(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[90692],{391254:(e,i,t)=>{t.d(i,{Z:()=>o});t(441143);var n=t(785893);class s{static factory(e){return e instanceof s?e:new s(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function o(e){const{css:i,unsafeCSS:t,...o}=e,a=String(i||"")||t||"";return!!a?(0,n.jsx)("style",{...o,dangerouslySetInnerHTML:{__html:String(s.factory(a))}}):null}},134879:(e,i,t)=>{t.d(i,{C:()=>o,V:()=>a});var n=t(667294);const s=(0,n.createContext)(!1),o=s.Provider,a=()=>(0,n.useContext)(s)},723852:(e,i,t)=>{t.d(i,{Z:()=>x});var n=t(667294),s=t(327212),o=t(830157),a=t(258430),r=t(883119),d=t(785893);const l=e=>({duration:5e3,thumbnail:(0,d.jsx)(r.xu,{"data-test-id":"pin-save-toast",width:48,height:48,children:(0,d.jsx)(a.Z,{boardId:e})})});var c=t(499128),h=t(898781),u=t(349700);function p({hideToast:e,newPin:i,originalPinId:t}){var n,s;const o=(0,h.ZP)();return(0,d.jsx)(c.ZP,{primaryAction:{accessibilityLabel:o.bt("Кнопка «Изменить сохраненный пин»", "Change saved Pin button", "RepinRequest.a11yChangeButton", undefined, true),href:`/pin/${i.id}/repin/?isEditingPin=true&pinBoardId=${null!==(n=null===(s=i.board)||void 0===s?void 0:s.id)&&void 0!==n?n:""}&&isFromToast=true&&originalPinId=${null!=t?t:""}`,label:o.bt("Изменить", "Change", "RepinRequest.ChangeButton", undefined, true),size:"lg",onClick:e},duration:5e3,onHide:e,text:(0,d.jsx)(r.xv,{children:(0,u.nk)(o.bt("Сохранено на доске «{{ profile }}»", "Saved to {{ profile }}", "RepinRequest.ProfileSaveToastText", undefined, true),{profile:(0,d.jsx)(r.xv,{inline:!0,weight:"bold",children:o.bt("Профиль", "Profile", "RepinRequest.ProfileSaveToastText.Profile", undefined, true)})})}),thumbnail:{icon:(0,d.jsx)(r.JO,{accessibilityLabel:o.bt("Профиль", "Profile", "RepinRequest.ProfileIcon", undefined, true),icon:"history",size:22})}})}var _=t(214494),g=t(483025),v=t(414327),m=t(332611),f=t(12918),b=t(782677);const I="RepinResource",P=({board:e,section:i})=>{const t=(0,h.ZP)();return i?(0,u.nk)(t.bt("Сохранено в разделе «{{sectionName}}» доски «{{boardName}}»", "Saved to {{sectionName}} in {{boardName}}", "Toast for successfully saving to a section within a board", undefined, true),{sectionName:i&&i.title,boardName:e.name}).join(""):(0,d.jsxs)(n.Fragment,{children:[(0,d.jsx)(r.xv,{color:"default",children:t.bt("Сохранено:", "Saved to", "Saved to {{ boardName }}", undefined, true)}),(0,d.jsx)(r.xv,{color:"default",weight:"bold",children:e.name})]})};class x{constructor({boardId:e,dispatch:i,history:t,isOneTapSave:n=!1,isQuickSave:s=!1,onSuccess:a,onUndo:r,originalPinId:d,pinId:l,section:c,showNewUserSavetoProfileAnimation:h=!1,showRepinToasts:u,trackingParams:p,userId:_,viewType:v,historyPush:m,suggestedBoardIds:f,savePinId:I,pinData:{trackingParams:P,viewParameter:x,pinnedToBoardId:y}}){var S,T,w;w=e=>(0,b.Fv)(e.resource_response.data,g.Z.RepinResource),(T="_getNormalizedResponse")in(S=this)?Object.defineProperty(S,T,{value:w,enumerable:!0,configurable:!0,writable:!0}):S[T]=w,this.boardId=e,this.trackingParams=p,this.clientTrackingParams=(0,o.Z)(p.clientTrackingParams||"",P),this.dispatch=i,this.history=t,this.onSuccess=a,this.onUndo=r,this.originalPinId=d,this.pinId=l,this.pinnedToBoardId=p.pinnedToBoardId||(null!=y?y:""),this.showNewUserSavetoProfileAnimation=h,this.showRepinToasts=u,this.section=c,this.isOneTapSave=n,this.isQuickSave=s,this.userId=_,this.viewType=null!=v?v:3,this.historyPush=m,this.suggestedBoardIds=f,this.savePinId=I,this.pinViewParameter=x}get resourceOptions(){var e;return{pin_id:this.pinId,board_id:this.boardId,section:null===(e=this.section)||void 0===e?void 0:e.id,clientTrackingParams:this.clientTrackingParams,user_id:this.userId}}get trackingData(){return{event_type:5,element:this.isOneTapSave?10599:void 0,view_type:this.viewType,component:this.isOneTapSave?0:7,view_parameter:this.isOneTapSave?3173:this.pinViewParameter,object_id_str:this.pinId,clientTrackingParams:this.clientTrackingParams,aux_data:{board_id:this.pinnedToBoardId,destination_board_id:this.boardId,is_profile_save:!this.boardId,pin_id:this.pinId,suggested_boards:this.suggestedBoardIds}}}_createRepin(){return _.Z.create(I,{...this.resourceOptions,disable_event_log_info:!0}).callCreate()}processRepin(e){return this._createRepin().then((i=>{this.onSuccess&&this.onSuccess();const t=i.resource_response.data,{board:n}=t,{isQuickSave:o,originalPinId:a,showNewUserSavetoProfileAnimation:c}=this,u=({hideToast:e})=>{var i;if(o&&!c)return(0,d.jsx)(p,{hideToast:e,newPin:t,originalPinId:a});const{thumbnail:u}=l(n.id);return(0,d.jsx)(s.Z,{button:(0,d.jsx)(h.oz,{children:e=>(0,d.jsx)(r.zx,{fullWidth:!0,onClick:({event:i})=>{i.preventDefault(),i.stopPropagation();const s=this.onUndo;var o;s&&!c?s(this.pinId,t.id,n.id,null===(o=this.section)||void 0===o?void 0:o.id,e):c&&this.historyPush(`/pin/${t.id}/repin/?isEditingPin=true&pinBoardId=${n.id}&&isFromToast=true&&originalPinId=${null!=a?a:""}`)},text:c?e.bt("Упорядочить", "Organize", "RepinRequest.OrganizeButton", undefined, true):e.bt("Отмена", "Undo", "RepinRequest.UndoButton", undefined, true)})}),href:this.section?`${n.url}${null!==(i=this.section.slug)&&void 0!==i?i:""}`:n.url,isRepinToExistingBoard:!0,onHide:e,text:(0,d.jsx)(P,{board:n,section:this.section}),thumbnail:u})},_=this._getNormalizedResponse(i);if(this.dispatch((0,v.XM)(I,this.resourceOptions,i,_)),this.savePinId(this.resourceOptions.pin_id,t.id),this.originalPinId&&this.originalPinId!==this.resourceOptions.pin_id){const e={...this.resourceOptions,pin_id:this.originalPinId};this.dispatch((0,v.XM)(I,e,i,_)),this.savePinId(this.originalPinId||"",t.id)}this.dispatch((0,f.M)(t.id,n.id,this.section?this.section.id:void 0,this.userId));const g=this.showRepinToasts;return g&&g(u),this.dispatch((0,m.fO)({event_type:5})),e(this.trackingData),t}))}}},830157:(e,i,t)=>{function n(e,i){return e||(i?`${i}~0`:"~0")}t.d(i,{Z:()=>n})},574724:(e,i,t)=>{t.d(i,{Hn:()=>h,Jw:()=>g,L7:()=>n,Qc:()=>s,Tt:()=>m,UF:()=>l,UV:()=>a,W1:()=>o,Ws:()=>u,ZW:()=>d,cK:()=>v,cy:()=>_,o4:()=>p,tr:()=>c,vF:()=>r});const n=1,s=2,o="female",a="male",r="unspecified",d="en-US",l="US",c=3,h="has_done_closeup",u="Gender",p="InterestPicker",_="LoadingStep",g="AppInstall",v={NUX_GENDER_STEP_NAME:u,NUX_INTEREST_PICKER_STEP_NAME:p,NUX_LOADING_STEP_NAME:_,NUX_APP_INSTALL_STEP_NAME:g},m=2500},327212:(e,i,t)=>{t.d(i,{Z:()=>R});var n=t(667294),s=t(376030),o=t(391254),a=t(883119),r=t(785893);function d({addedStyles:e,button:i,headerText:t,icon:s,iconOverride:d,minHeight:l,subHeaderText:c}){return(0,r.jsx)(a.xu,{display:"flex",justifyContent:"center",width:"100vw",paddingX:2,children:(0,r.jsxs)(a.xu,{alignContent:"center",alignItems:"center",bottom:!0,color:"default",dangerouslySetInlineStyle:{__style:{boxShadow:"0 3px 6px rgba(0,0,0,0.18)",transform:"translateY(-20px)",...e}},display:"flex",minHeight:l||75,padding:6,position:"relative",rounding:4,width:"100%",children:[(()=>{const e=d||(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)(o.Z,{unsafeCSS:"\n@keyframes baseEduToastIconScale {\n  0% {\n    transform: scale(0)\n  }\n  30% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n"}),(0,r.jsx)(a.xu,{alignItems:"center",color:"education","data-test-id":"pin-save-toast",direction:"column",dangerouslySetInlineStyle:{__style:{animation:"baseEduToastIconScale 3s"}},display:"flex",height:60,justifyContent:"center",minHeight:60,minWidth:60,rounding:"circle",width:60,children:(0,r.jsx)(a.JO,{accessibilityLabel:s.accessibilityLabel,color:s.color,dangerouslySetSvgPath:s.dangerouslySetSvgPath,icon:s.icon,inline:s.inline,size:s.size})})]});return(0,r.jsx)(a.xu,{marginEnd:4,children:e})})(),(0,r.jsxs)(a.xu,{marginEnd:"auto",children:[(0,r.jsx)(a.xv,{color:"default",weight:"bold",children:t}),!!c&&(0,r.jsx)(a.xu,{paddingY:1,children:(0,r.jsx)(a.xv,{size:"300",color:"default",children:c})})]}),(0,r.jsx)(a.xu,{display:"flex",flex:"shrink",marginStart:2,children:i})]})})}var l=t(223815),c=t(829407),h=t(898781),u=t(759929);function p(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const _=(e,i)=>(e-i)/2,g=68,v=_(g,68),m=_(g,66),f=_(g,60),b="cubicBezier(0.25, 0.1, 0.25, 1)",I="encourageToastIconContainer",P="encourageToastIconRadiateBg",x="encourageToastIconRadiateRing",y={targets:`#${I}`,duration:300,scale:1.4,easing:b},S={targets:`#${I}`,duration:300,scale:1,easing:b,endDelay:1e3},T={targets:`#${I}`,duration:300,scale:.42,easing:b},w={targets:`#${P}`,duration:400,opacity:0,scale:1.6,easing:b},A={targets:`#${x}`,duration:650,opacity:0,scale:2,easing:b};function E({hiding:e,visible:i}){return i?e?{opacity:0,transform:"scale(1.0)",transition:"opacity transform .2s"}:{opacity:1,transition:"all 0.7s cubic-bezier(.19, 1.15, .48, 1)"}:Object.freeze({})}class j extends n.PureComponent{constructor(...e){super(...e),p(this,"delayTimer",null),p(this,"requestAnimationFrameId",null),p(this,"playAnimation",(()=>{this.requestAnimationFrameId=window.requestAnimationFrame((()=>{(0,s.Z)(w),(0,s.Z)(A),(0,s.Z)(y).finished.then((()=>{(0,s.Z)(S).finished.then((()=>{s.Z.set(`#${I}`,{transformOrigin:"top right"}),(0,s.Z)(T)}))}))}))})),p(this,"getHeaderText",(()=>{const{text:e}=this.props;return Array.isArray(e)?e[0]:e})),p(this,"getIconProps",(()=>({accessibilityLabel:this.props.i18n.bt("Значок галочки", "Check icon", "Label for check icon on toast shown after board create", undefined, true),color:"inverse",icon:"check",size:30}))),p(this,"getSubHeaderText",(()=>{const{text:e}=this.props;return e instanceof Array&&e.length>1&&e[1]?e[1]:""})),p(this,"renderAnimatedIcon",(()=>(0,r.jsxs)(a.xu,{height:g,position:"relative",width:g,children:[(0,r.jsx)(a.xu,{"data-test-id":"pin-save-toast",width:60,height:60,overflow:"hidden",position:"absolute",rounding:4,dangerouslySetInlineStyle:{__style:{left:`${f}px`,top:`${f}px`}},children:this.props.thumbnail}),(0,r.jsxs)(a.xu,{id:I,height:g,width:g,dangerouslySetInlineStyle:{__style:{transform:"scale(0)"}},position:"absolute",children:[(0,r.jsx)(a.xu,{color:"infoBase",id:P,width:68,height:68,position:"absolute",rounding:"circle",dangerouslySetInlineStyle:{__style:{left:`${v}px`,top:`${v}px`,transform:"scale(0)"}}}),(0,r.jsx)(a.xu,{id:x,width:66,height:66,position:"absolute",rounding:"circle",opacity:1,dangerouslySetInlineStyle:{__style:{borderWidth:"2px",borderStyle:"solid",borderColor:"#0074e8",left:`${m}px`,top:`${m}px`,transform:"scale(0)"}}}),(0,r.jsx)(a.xu,{alignItems:"center",color:"infoBase",direction:"column",display:"flex",height:g,justifyContent:"center",minHeight:g,minWidth:g,position:"absolute",rounding:"circle",width:g,children:(0,r.jsx)(a.JO,{accessibilityLabel:this.props.i18n.bt("Значок галочки", "Check icon", "Label for check icon on toast shown after board create", undefined, true),color:"inverse",icon:"check",size:30})})]})]})))}componentDidMount(){this.delayTimer=setTimeout(this.playAnimation,700)}componentWillUnmount(){this.delayTimer&&clearTimeout(this.delayTimer),this.requestAnimationFrameId&&window.cancelAnimationFrame(this.requestAnimationFrameId)}render(){const{isRepinToExistingBoard:e,button:i}=this.props,t=e;return(0,r.jsx)(d,{button:i,headerText:this.getHeaderText(),icon:this.getIconProps(),iconOverride:t?void 0:this.renderAnimatedIcon(),subHeaderText:this.getSubHeaderText()})}}function R(e){const{duration:i,onHide:t}=e,s=(0,h.ZP)(),[o,d]=(0,n.useState)(!1),[p,_]=(0,n.useState)(!1),g=(0,n.useRef)(),v=()=>{d(!0),g.current=setTimeout(t,200)},m=()=>{g.current&&clearTimeout(g.current)};(0,c.Z)((()=>(setTimeout((()=>_(!0)),100),g.current=setTimeout(v,i||u.w),m)));let f=(0,r.jsx)(j,{...e,i18n:s});return e.href&&(f=(0,r.jsx)(a.rU,{href:e.href,onClick:v,rounding:"pill",tapStyle:"none",children:f})),(0,r.jsx)(l.Z,{children:(0,r.jsx)(a.mh,{children:(0,r.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{...E({hiding:o,visible:p})}},justifyContent:"center",position:"fixed",width:"100%",display:"flex",zIndex:u.k,children:f})})})}},662089:(e,i,t)=>{t.d(i,{Z:()=>r});var n=t(702664),s=t(574724),o=t(343341),a=t(639952);function r(){const e=(0,n.useDispatch)(),{showToast:i,showOneToast:t}=(0,o.F9)();return{showToast:i,showOneToast:t,showRepinConfirmation:(t,n)=>{n||e((0,a.WF)()),setTimeout((()=>{n||e((0,a.a5)()),i(t)}),s.Tt)}}}},956800:(e,i,t)=>{function n(e){return{type:"FEED_ITEM_REORDERED",payload:e}}function s(e,i){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:i}}}t.d(i,{EX:()=>a,N8:()=>s,Qv:()=>o,_f:()=>n,vX:()=>r});const o=(e,i,t=Object.freeze({}))=>({type:"APPEND_FEED_ITEMS",payload:{id:e,options:t,items:i}});function a(e){return{type:"FEED_ITEMS_REMOVED",payload:e}}function r(e){return{type:"FEED_ITEMS_ADDED",payload:e}}},12918:(e,i,t)=>{t.d(i,{M:()=>d,i:()=>l});var n=t(483025),s=t(414327),o=t(782677),a=t(90326),r=t(214494);const d=(e,i,t,n)=>({type:"PIN_ADD",payload:{pinId:e,boardId:i,boardSectionId:t,pinnerId:n}}),l=e=>i=>{const{method:t,guid:l,image_base64:c,image_url:h}=e;return((e,i)=>new Promise((t=>{e?(0,a.eR)(e).then((e=>{t(e)})):t(i)})))(c,h).then((a=>{const c={...e,method:"button"!==t||l?t:"button_external",image_url:a,image_base64:void 0},h="PinResource";return r.Z.create(h,c).callCreate().then((e=>{const t=(0,o.Fv)(e.resource_response.data,n.Z.PinResource);i((0,s.XM)(h,c,e,t));const a=e.resource_response.data,{board:{id:r},pinner:{id:l},section:u}=a,p=u&&u.id;return i(d(a.id,r,p,l)),e}))}))}},139574:(e,i,t)=>{t.d(i,{L:()=>r,q:()=>d});var n=t(492583),s=t(956800),o=t(254176),a=t(214494);function r(e){return i=>{const{inSelectAll:t,selectedPinIds:r,orbacSubjectId:d,source:{boardId:l,sectionId:c}}=e,h=t?"BulkEditSelectAllResource":"BulkEditResource",u={board_id:l,section_id:c,pin_ids:r,orbac_subject_id:d};return i((0,o.xQ)(l)),i((0,s.EX)({feedId:c||l,feedType:c?n.Z.BOARD_SECTION_PINS:n.Z.BOARDFEED,inverseSelection:t,itemIds:r,itemType:"pin"})),a.Z.create(h,u).callDelete()}}const d=({pinId:e,boardId:i,boardSectionId:t,clientTrackingParams:n})=>(s,o)=>{const r=a.Z.create("PinResource",{id:e,client_tracking_params:n}).callDelete(),{session:{userId:d}}=o();return s(((e,i,t,n)=>({type:"PIN_DELETE",payload:{pinId:e,boardId:i,boardSectionId:t,userId:n}}))(e,i,t,d)),r}},850431:(e,i,t)=>{t.d(i,{w:()=>a});var n=t(723852),s=t(956800),o=t(675752);const a=({pinId:e,boardId:i,i18n:t,logContextEvent:a,onSuccess:r,onUndo:d,originalPinId:l,showNewUserSavetoProfileAnimation:c,showRepinConfirmation:h,showToast:u,section:p,trackingParams:_,isOneTapSave:g,viewType:v,historyPush:m,suggestedBoardIds:f,savePinId:b})=>(I,P)=>{var x,y,S,T,w,A;const{pins:E,session:j,feeds:R}=P(),z=E[e];i&&((null===(x=null!==(y=null==z?void 0:z.shopping_flags)&&void 0!==y?y:[])||void 0===x?void 0:x.length)>0||null!=z&&z.rich_summary&&(null===(S=null!==(T=null==z||null===(w=z.rich_summary)||void 0===w?void 0:w.products)&&void 0!==T?T:[])||void 0===S?void 0:S.length)>0)&&(R[`board-shop-saved-preview:${i}`]&&I((0,s.Qv)(`board-shop-saved-preview:${i}`,[z],{isPrepend:!0})),R[`board-shop-saved:${i}`]&&I((0,s.Qv)(`board-shop-saved:${i}`,[z],{isPrepend:!0})));return new n.Z({boardId:i,dispatch:I,i18n:t,isLegoSaveStyle:!0,isOneTapSave:g,onSuccess:r,onUndo:d,originalPinId:l,pinId:z.id,section:p,showNewUserSavetoProfileAnimation:c,showRepinToasts:e=>h?h(e):u?u(e):void 0,trackingParams:_,userId:j.userId,viewType:v,historyPush:m,suggestedBoardIds:f,savePinId:b,pinData:{trackingParams:z.tracking_params,viewParameter:(0,o.A)(z),pinnedToBoardId:null===(A=z.pinned_to_board)||void 0===A?void 0:A.id}}).processRepin(a)}},675752:(e,i,t)=>{t.d(i,{A:()=>n});const n=e=>{const i=e.rich_metadata;return i?i.products?144:i.article?141:i.recipe?145:139:140}},258430:(e,i,t)=>{t.d(i,{Z:()=>a});var n=t(883119),s=t(130460),o=t(785893);function a({boardId:e}){var i;const t=(0,s.gC)()(e),a=null!=t&&t.images&&t.images["170x"]?t.images["170x"][0]:void 0;return e&&a?(0,o.jsx)(n.Ee,{alt:"Pin image",color:"#efefef",fit:"cover",naturalHeight:1,naturalWidth:1,src:null!==(i=a.url)&&void 0!==i?i:""}):null}},759929:(e,i,t)=>{t.d(i,{k:()=>a,w:()=>o});var n=t(379764),s=t(883119);const o=2e3,a=new s.H3([n.Z])}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/90692.ru_RU-3eb22f98ec5efe88.mjs.map