"use strict";(self["webpackChunkconsolidacion6"]=self["webpackChunkconsolidacion6"]||[]).push([[700],{9700:function(t,e,i){i.r(e),i.d(e,{default:function(){return X}});var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"OpinionsView","container-fluid":""}},[e("CommentForm",{attrs:{opinionData:t.opinionData},on:{saveData:t.saveData}}),e("CommentList",{attrs:{formData:t.formData},on:{editOpinion:t.editOpinion}})],1)},s=[],a=i(6190),o=i(5125),r=i(1631),l=i(7678);const h=(0,l.Z)(r.Z);var c=h.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...r.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=r.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){r.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),p=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"CommentForm"}},[e("h2",[t._v('Nos encantaría saber tu opinión sobre el juego: "'+t._s(t.gameName)+'"')]),e("div",{staticClass:"form"},[e(o.Z,{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e(r.Z,{attrs:{label:"Tu Nombre",outlined:"",type:"text","prepend-inner-icon":"mdi-account",required:"",rules:[t.rules.isRequired]},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),e(r.Z,{attrs:{label:"Tu Email",outlined:"",type:"email","prepend-inner-icon":"mdi-email",required:"",rules:[t.rules.isRequired]},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),e(c,{attrs:{label:"Tu Opinión",outlined:"",type:"text",clearable:"","clear-icon":"mdi-close-circle",counter:"","prepend-inner-icon":"mdi-comment",required:"",rules:[t.rules.textarea,t.rules.isRequired]},model:{value:t.formData.opinion,callback:function(e){t.$set(t.formData,"opinion",e)},expression:"formData.opinion"}}),e(a.Z,{staticClass:"mt-2",attrs:{type:"submit",color:"primary",disabled:t.checkFormValidations}},[t._v(t._s(null===t.formData.index?"Enviar":"Actualizar"))])],1)],1)])},d=[],u=i(4143),m={props:{opinionData:{type:Object,default:null}},data(){return{gameName:this.$route.params.gameName,rules:{textarea:t=>t.length<=200||"Máximo 200 caracteres",isRequired:u.q},formData:{name:"",email:"",opinion:"",index:null}}},methods:{submit(){this.$emit("saveData",this.formData),this.formData={name:"",email:"",opinion:"",index:null},this.$toast.success("Su opinión ha sido guardada con éxito.")}},computed:{checkFormValidations(){return""===this.formData.name||""===this.formData.email||""===this.formData.opinion}},watch:{opinionData:{handler(){this.formData.name=this.opinionData.name,this.formData.email=this.opinionData.email,this.formData.opinion=this.opinionData.opinion,this.formData.index=this.opinionData.index},deep:!0}}},v=m,f=i(1001),x=(0,f.Z)(v,p,d,!1,null,"58bdf425",null),g=x.exports,b=i(3037),D=i(4712),y=i(5352),w=(0,l.Z)((0,b.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,D.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(t){this.content=t},unregisterContent(){this.content=null},registerHeader(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,y.z9)(this))}}),_=i(7394),C=i(8223),A=i(6878);const k=(0,l.Z)(C.Z,A.Z,(0,D.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var $=k.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(t,e){t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick((()=>this.isActive=t))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(t){return t(_.Fx,this.showLazyContent((()=>[t("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},(0,y.z9)(this))])])))}}),I=i(2240),Z=i(7069);const B=(0,l.Z)(A.Z,(0,D.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var T=B.extend().extend({name:"v-expansion-panel-header",directives:{ripple:Z.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(t){this.$emit("click",t)},genIcon(){const t=(0,y.z9)(this,"actions")||[this.$createElement(I.Z,this.expandIcon)];return this.$createElement(_.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render(t){return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,y.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),O=i(2084),P=i(4101),H=O.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...O.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,P.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,P.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(t,e){const i=this.getValue(t,e),n=this.getValue(t,e+1);t.isActive=this.toggleMethod(i),t.nextIsActive=this.toggleMethod(n)}}}),R=i(4324),z=i(1452),S=i(3016),N=i(908),F=i(5943),L=(0,l.Z)(A.Z,S.Z,N.Z,F.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?t.offsetLeft:t.left;let s=0;return this.top||this.bottom||i?s=n+t.width/2-e.width/2:(this.left||this.right)&&(s=n+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),`${this.calcXOverflow(s,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let n=0;return this.top||this.bottom?n=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=i+t.height/2-e.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),!1===this.attach&&(n+=this.pageYOffset),`${this.calcYOverflow(n)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,y.kb)(this.maxWidth),minWidth:(0,y.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,y.sp)(this,"activator",!0)&&(0,P.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=z.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===y.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}}),M=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"CommentList"}},[e("h2",{staticClass:"mb-6"},[t._v("A continuación podrás ver las opiniones para este juego:")]),0===t.opinions.length?e("p",[t._v("Actualmente no hay opiniones disponibles para este juego.")]):t._e(),e(H,t._l(t.opinions,(function(i,n){return e(w,[e(T,[t._v(t._s(`Comentario de: ${i.name}`))]),e("div",{staticClass:"d-flex justify-space-between"},[e($,[t._v('"'+t._s(i.opinion)+'"')]),e($,[e(L,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:o}){return[e(a.Z,t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.editOpinion(i,n)}}},"v-btn",o,!1),s),[e(R.Z,{attrs:{color:"blue"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Editar")])]),e(L,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(a.Z,t._g(t._b({staticClass:"ml-3",attrs:{icon:""},on:{click:function(e){return t.deleteOpinion(n)}}},"v-btn",s,!1),i),[e(R.Z,{attrs:{color:"red"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[e("span",[t._v("Eliminar")])])],1)],1)],1)})),1)],1)},q=[],E=(i(7658),{props:{formData:{type:Object,default:null}},data(){return{opinions:[]}},methods:{deleteOpinion(t){this.opinions.splice(t,1),this.$toast.error("Su opinión ha sido eliminada.")},editOpinion(t,e){this.$emit("editOpinion",{name:t.name,email:t.email,opinion:t.opinion,index:e})}},watch:{formData:{handler(){null!==this.formData.index?this.opinions.splice(this.formData.index,1,this.formData):this.opinions.push(this.formData)},deep:!0}}}),G=E,j=(0,f.Z)(G,M,q,!1,null,"46190407",null),V=j.exports,W={components:{CommentForm:g,CommentList:V},data(){return{formData:{},opinionData:{}}},methods:{saveData(t){this.formData=t},editOpinion(t){this.opinionData=t}}},K=W,Y=(0,f.Z)(K,n,s,!1,null,null,null),X=Y.exports}}]);
//# sourceMappingURL=700.625c3ce0.js.map