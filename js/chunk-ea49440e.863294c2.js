(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea49440e"],{"371d":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"about"},[t("h2",{staticStyle:{"text-align":"center"}},[e._v("iForm example")]),t("i-form",{ref:"iForm",attrs:{"label-position":"left","label-width":"120px",columns:1,model:e.form,rules:e.rules,"form-items":e.formItems}}),t("el-input",{attrs:{type:"textarea",rows:"5",value:e.formString}}),t("el-button",{on:{click:e.resetRules}},[e._v("重置校验")])],1)},n=[],s=t("2b0e"),o=s["default"].extend({name:"FormExample",data:function(){return{form:{name:"",date:"",delivery:!1,desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},formItems:[{label:"活动名称",labelTips:{content:"我是活动名称"},prop:"name",renderConfig:{key:"name",type:"custom",component:{name:"ElInput"}}},{label:"活动截止",prop:"date",renderConfig:{key:"date",type:"custom",component:{name:"ElDatePicker",props:{type:"daterange",rangeSeparator:"至",startPlaceholder:"开始日期",endPlaceholder:"结束日期",size:"small"}}}},{label:"即时配送",prop:"delivery",renderConfig:{key:"delivery",type:"custom",component:{name:"ElSwitch"}}},{label:"活动形式",prop:"desc",renderConfig:{key:"desc",type:"custom",component:{name:"ElInput",subType:"textarea"}}}]}},computed:{formString:function(){return JSON.stringify(this.form)}},methods:{resetRules:function(){this.$refs.iForm.clearValidate()}}}),i=o,l=(t("e6ea"),t("2877")),m=Object(l["a"])(i,a,n,!1,null,"ead5ba6e",null);r["default"]=m.exports},e6ea:function(e,r,t){"use strict";var a=t("f5b9"),n=t.n(a);n.a},f5b9:function(e,r,t){}}]);
//# sourceMappingURL=chunk-ea49440e.863294c2.js.map