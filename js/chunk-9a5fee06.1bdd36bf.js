(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a5fee06"],{2211:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area"},[a("div",{staticClass:"box"},[a("area-strength",{attrs:{id:"1",height:"860px",width:"750px"}})],1),a("div",{staticClass:"part"},[a("div",{staticClass:"box"},[a("area-benefit",{attrs:{id:"2",height:"420px",width:"750px"}})],1),a("div",{staticClass:"box"},[a("area-impact",{attrs:{id:"3",height:"420px",width:"750px"}})],1)])])},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},o=[],l=a("313e"),s=a.n(l),h={props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=s.a.init(document.getElementById(this.id)),this.chart.setOption({title:{text:"德庆贡柑品牌强度",left:"center",top:40,textStyle:{fontSize:"30",color:"#333"}},color:["rgba(0,183,238, 1)","rgba(86,199,60, 1)"],tooltip:{show:!0,trigger:"item"},legend:{data:["德庆贡柑","平均水平"],bottom:20},radar:{center:["50%","50%"],radius:"70%",startAngle:90,splitNumber:4,shape:"circle",splitArea:{areaStyle:{color:["transparent"]}},axisLabel:{show:!1,fontSize:20,color:"#000",fontStyle:"normal",fontWeight:"normal"},axisLine:{show:!0,lineStyle:{type:"dashed",color:"#999"}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#999"}},name:{borderWidth:1,borderRadius:0,color:"#444"},indicator:[{name:"产业化程度",max:10},{name:"企业竞争力",max:10},{name:"产品影响力",max:10},{name:"产出效益",max:10},{name:"发展环境",max:10}]},series:[{name:"德庆贡柑",type:"radar",symbol:"circle",symbolSize:10,label:{normal:{show:!0,position:"right"}},itemStyle:{normal:{color:"rgba(0,183,238, 1)",borderColor:"rgba(0,183,238, 0.4)",borderWidth:10}},areaStyle:{normal:{color:"rgba(0,183,238, 0.3)"}},lineStyle:{normal:{color:"rgba(0,183,238, 1)",width:2}},data:[[5,2.28,7.5,4.76,5.6]]},{name:"平均水平",type:"radar",symbol:"circle",symbolSize:10,itemStyle:{color:"rgba(86,199,60, 1)",borderColor:"rgba(86,199,60, 0.3)",borderWidth:10},lineStyle:{normal:{color:"rgba(86,199,60, 1)",width:2}},data:[[6,6,6,6,6,6]]}]})}}},d=h,c=a("2877"),p=Object(c["a"])(d,n,o,!1,null,null,null),m=p.exports,u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},g=[],y={props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=s.a.init(document.getElementById(this.id)),this.chart.setOption({title:{text:"产出效益\n",left:"left",padding:20,textStyle:{height:30,fontSize:"18",color:"#333"}},grid:{left:"7%",right:"4%",top:"20%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["","","","","亩均产值（万元）","产出效益得分"]},xAxis:[{type:"category",axisLabel:{interval:0},data:["梅县金柚","大埔蜜柚","德庆贡柑","廉江红橙","仁化贡柑","平远脐橙"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"亩均产值（万元）",min:0,max:2,interval:1},{type:"value",name:"产出效益得分",min:0,max:6,interval:2}],series:[{name:"亩均产值（万元）",type:"bar",label:{normal:{show:!0,position:"top"}},data:[.92,.49,1.71,.77,.75,1.16],itemStyle:{normal:{color:function(t){var e=["#C33531","#EFE42A","#64BD3D","#EE9201","#29AAE3","#B74AE5","#0AAF9F","#E89589","#16A085","#4A235A","#C39BD3 ","#F9E79F","#BA4A00","#ECF0F1","#616A6B","#EAF2F8","#4A235A","#3498DB"];return e[t.dataIndex]}}},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"产出效益得分",type:"line",yAxisIndex:1,data:[2.01,1.07,4.76,2.01,1.99,1.99]}]})}}},f=y,b=Object(c["a"])(f,u,g,!1,null,null,null),x=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},S=[],v={props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=s.a.init(document.getElementById(this.id)),this.chart.setOption({title:{text:"产品影响力",left:"left",padding:20,textStyle:{height:30,fontSize:"18",color:"#333"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:10,data:["","","","","历史年份得分","带动农户得分","传播力得分","产地市场得分","区域经济地位得分","销售地区得分"]},grid:{left:"3%",right:"4%",bottom:"9%",top:"12%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:["梅州金柚","大埔蜜柚","德庆贡柑","廉江红橙","仁化贡柑","平远脐橙"],inverse:!0},series:[{name:"历史年份得分",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight",formatter:function(t){return t.value>0?t.value:""}}},data:[1.5,1.5,2,0,0,.5]},{name:"带动农户得分",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[4,4,4,2,4,2.5]},{name:"传播力得分",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[3.5,3,2.5,3,1,2.5]},{name:"产地市场得分",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight",formatter:function(t){return t.value>0?t.value:""}}},data:[2,0,0,0,0,0]},{name:"区域经济地位得分",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[12,12,12,12,12,12]},{name:"销售地区得分",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[3,3,2,1,1,3]}]})}}},A=v,E=Object(c["a"])(A,w,S,!1,null,null,null),C=E.exports,k={components:{areaStrength:m,areaBenefit:x,areaImpact:C}},B=k,F=(a("c704"),Object(c["a"])(B,i,r,!1,null,"3e48c3fb",null));e["default"]=F.exports},"4a76":function(t,e,a){},c704:function(t,e,a){"use strict";var i=a("4a76"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-9a5fee06.1bdd36bf.js.map