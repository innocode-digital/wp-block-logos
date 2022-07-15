(()=>{"use strict";var e,o={720:()=>{const e=window.wp.blocks,o=window.wp.element,l=window.wp.blockEditor,t=window.wp.components,n=window.wp.i18n,c="innocode-block-logos",a=window.wp.hooks,r=(0,a.applyFilters)("innocode.block-logos.title.tag","h3"),i=(0,a.applyFilters)("innocode.block-logos.has_title.default",!0),s=(0,a.applyFilters)("innocode.block-logos.has_description.default",!1),d=(0,a.applyFilters)("innocode.block-logos.scale_factor.default",525),p=(0,a.applyFilters)("innocode.block-logos.alignment.default","none"),g=(0,a.applyFilters)("innocode.block-logos.color.schemes",[{name:(0,n.__)("Dark","innocode-block-logos"),color:"#000"},{name:(0,n.__)("Light","innocode-block-logos"),color:"#fff"}]),m=(0,a.applyFilters)("innocode.block-logos.background_color.default",void 0),u=(0,a.applyFilters)("innocode.block-logos.color.default",void 0),_=["innocode/block-logo"],k={hasTitle:{type:"boolean",default:i},title:{type:"string",source:"html",selector:`.${c}__title`},hasDescription:{type:"boolean",default:s},description:{type:"string",source:"html",selector:`.${c}__description`},scaleFactor:{type:"number",default:d},alignment:{type:"string",default:"none"},backgroundColor:{type:"string",default:m},color:{type:"string",default:u}},b=window.wp.primitives;(0,e.registerBlockType)("innocode/block-logos",{apiVersion:2,supports:{align:["wide","full"],className:!1},attributes:k,providesContext:{"innocode/block-logos-scaleFactor":"scaleFactor","innocode/block-logos-backgroundColor":"backgroundColor","innocode/block-logos-color":"color"},edit:function(e){let{attributes:a,setAttributes:k}=e;const{hasTitle:b=i,title:h,hasDescription:v=s,description:w,scaleFactor:C=d,alignment:f=p,backgroundColor:E=m,color:y=u}=a,N=(e,o)=>{k({[e]:o})};let T=`${c}__list`;return"none"!==f&&(T+=` ${c}__list_${f}`),(0,o.createElement)("div",(0,l.useBlockProps)({className:c}),(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(t.PanelBody,{title:(0,n.__)("Settings","innocode-block-logos")},(0,o.createElement)(t.PanelRow,null,(0,o.createElement)(t.ToggleControl,{label:(0,n.__)("Show title","innocode-block-logos"),checked:b,onChange:()=>N("hasTitle",!b)})),(0,o.createElement)(t.PanelRow,null,(0,o.createElement)(t.ToggleControl,{label:(0,n.__)("Show description","innocode-block-logos"),checked:v,onChange:()=>N("hasDescription",!v)})),(0,o.createElement)(t.RangeControl,{label:(0,n.__)("Scale factor","innocode-block-logos"),value:C,onChange:e=>N("scaleFactor",e),withInputField:!1,allowReset:!0,resetFallbackValue:d,min:1,max:1e3,step:1})),(0,o.createElement)(t.PanelBody,{title:(0,n.__)("Color","innocode-block-logos"),initialOpen:!1},(0,o.createElement)("legend",null,(0,n.__)("Background","innocode-block-logos")),(0,o.createElement)(t.ColorPalette,{colors:g,value:E,onChange:e=>N("backgroundColor",e),className:"components-color-list-picker__color-picker"}),(0,o.createElement)("legend",null,(0,n.__)("Text","innocode-block-logos")),(0,o.createElement)(t.ColorPalette,{colors:g.slice().reverse(),value:y,onChange:e=>N("color",e),className:"components-color-list-picker__color-picker"}))),(0,o.createElement)("div",{className:`${c}__header`},b&&(0,o.createElement)(l.RichText,{tagName:r,value:h,placeholder:(0,n.__)("Title","innocode-block-logos"),onChange:e=>N("title",e),className:`${c}__title`}),v&&(0,o.createElement)(l.RichText,{tagName:"div",multiline:"p",value:w,placeholder:(0,n.__)("Description","innocode-block-logos"),onChange:e=>N("description",e),className:`${c}__description`})),(0,o.createElement)("div",{className:T},(0,o.createElement)(l.BlockControls,null,(0,o.createElement)(l.AlignmentToolbar,{value:f,onChange:e=>N("alignment",e)})),(0,o.createElement)(l.InnerBlocks,{allowedBlocks:_})))},save:function(e){let{attributes:t}=e;const{hasTitle:n=i,title:a,hasDescription:d=s,description:g,alignment:m=p}=t;let u=`${c}__list`;return"none"!==m&&(u+=` ${c}__list_${m}`),(0,o.createElement)("div",l.useBlockProps.save({className:c}),(0,o.createElement)("div",{className:`${c}__header`},n&&(0,o.createElement)(l.RichText.Content,{tagName:r,className:`${c}__title`,value:a}),d&&(0,o.createElement)(l.RichText.Content,{tagName:"div",multiline:"p",value:g,className:`${c}__description`})),(0,o.createElement)("div",{className:u},(0,o.createElement)(l.InnerBlocks.Content,{allowedBlocks:_})))},icon:()=>(0,o.createElement)(b.SVG,{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(b.Path,{fillRule:"evenodd",d:"M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"}),(0,o.createElement)(b.Path,{d:"M13 28V9.00002H16.096V25H23V28H13Z"}),(0,o.createElement)(b.Path,{d:"M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"}))})}},l={};function t(e){var n=l[e];if(void 0!==n)return n.exports;var c=l[e]={exports:{}};return o[e](c,c.exports,t),c.exports}t.m=o,e=[],t.O=(o,l,n,c)=>{if(!l){var a=1/0;for(d=0;d<e.length;d++){for(var[l,n,c]=e[d],r=!0,i=0;i<l.length;i++)(!1&c||a>=c)&&Object.keys(t.O).every((e=>t.O[e](l[i])))?l.splice(i--,1):(r=!1,c<a&&(a=c));if(r){e.splice(d--,1);var s=n();void 0!==s&&(o=s)}}return o}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[l,n,c]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={826:0,431:0};t.O.j=o=>0===e[o];var o=(o,l)=>{var n,c,[a,r,i]=l,s=0;if(a.some((o=>0!==e[o]))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(i)var d=i(t)}for(o&&o(l);s<a.length;s++)c=a[s],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(d)},l=globalThis.webpackChunkwp_block_logos=globalThis.webpackChunkwp_block_logos||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var n=t.O(void 0,[431],(()=>t(720)));n=t.O(n)})();