(this.webpackJsonp=this.webpackJsonp||[]).push([["lvV1"],{lvV1:function(e){e.exports={dashboard:{accessKey:"aa6c3ae0b56dc74068e6dabbb1ce4163",backgroundColor:"",backgroundImage:"",createBy:"admin",createByView:null,createTime:"2022-11-11 10:09:04",deleteFlag:0,enableFlag:1,height:null,id:313,presetLine:null,refreshSeconds:null,reportCode:"lsh_exreport",sort:0,title:"",updateBy:"admin",updateByView:null,updateTime:"2022-11-14 10:14:44",version:6,widgets:[{options:{data:[{selectValue:!0,selectOptions:[{code:"staticData",name:"静态数据"},{code:"dynamicData",name:"动态数据"}],name:"dataType",require:!1,label:"数据类型",placeholder:"",type:"el-radio-group",value:"dynamicData"},{relactiveDom:"dataType",relactiveDomValue:"dynamicData",name:"refreshTime",label:"刷新时间(毫秒)",type:"el-input-number",value:5e3},{relactiveDom:"dataType",relactiveDomValue:"staticData",name:"staticData",label:"静态数据",placeholder:"",type:"el-button",value:[{name:"搜索引擎",value:1048},{name:"直接访问",value:735},{name:"邮件营销",value:580},{name:"联盟广告",value:484},{name:"视频广告",value:300}],required:!1},{relactiveDom:"dataType",relactiveDomValue:"dynamicData",name:"dynamicData",chartType:"widget-piechart",label:"",placeholder:"",type:"dycustComponents",dictKey:"PIE_NIGHTINGALE_PROPERTIES",value:{color:[],chartProperties:{name:"name",value:"value"},setCode:"water_pie",chartType:"widget-piechart",contextData:{}},required:!1}],setup:[{name:"layerName",label:"图层名称",placeholder:"",type:"el-input-text",value:"南丁格尔玫瑰图",required:!1},{name:"background",label:"背景颜色",placeholder:"",type:"vue-color",value:"",required:!1},{selectOptions:[{code:"area",name:"面积模式"},{code:"radius",name:"半径模式"}],name:"nightingleRosetype",label:"饼图模式",placeholder:"",type:"el-select",value:"radius",required:!1},[{name:"标题设置",list:[{name:"isNoTitle",label:"标题",placeholder:"",type:"el-switch",value:!0,required:!1},{name:"titleText",label:"标题",placeholder:"",type:"el-input-text",value:"",required:!1},{name:"textColor",label:"字体颜色",placeholder:"",type:"vue-color",value:"#fff",required:!1},{selectOptions:[{code:"normal",name:"正常"},{code:"bold",name:"粗体"},{code:"bolder",name:"特粗体"},{code:"lighter",name:"细体"}],name:"textFontWeight",label:"字体粗细",placeholder:"",type:"el-select",value:"normal",required:!1},{name:"textFontSize",label:"字体大小",placeholder:"",type:"el-input-number",value:20,required:!1},{selectOptions:[{code:"center",name:"居中"},{code:"left",name:"左对齐"},{code:"right",name:"右对齐"}],name:"textAlign",label:"字体位置",placeholder:"",type:"el-select",value:"left",required:!1},{name:"subText",label:"副标题",placeholder:"",type:"el-input-text",value:"",required:!1},{name:"subTextColor",label:"字体颜色",placeholder:"",type:"vue-color",value:"#ffff",required:!1},{selectOptions:[{code:"normal",name:"正常"},{code:"bold",name:"粗体"},{code:"bolder",name:"特粗体"},{code:"lighter",name:"细体"}],name:"subTextFontWeight",label:"字体粗细",placeholder:"",type:"el-select",value:"normal",required:!1},{name:"subTextFontSize",label:"字体大小",placeholder:"",type:"el-input-number",value:12,required:!1}]},{name:"数值设定",list:[{name:"isShow",label:"显示",placeholder:"",type:"el-switch",value:!0,required:!1},{name:"numberValue",require:!1,label:"数值",placeholder:"",type:"el-switch",value:!0},{name:"percentage",require:!1,label:"百分比",placeholder:"",type:"el-switch",value:!1},{name:"fontSize",label:"字体大小",placeholder:"",type:"el-input-number",value:12,required:!1},{name:"subTextColor",label:"字体颜色",placeholder:"",type:"vue-color",value:"#ffff",required:!1},{selectOptions:[{code:"normal",name:"正常"},{code:"bold",name:"粗体"},{code:"bolder",name:"特粗体"},{code:"lighter",name:"细体"}],name:"fontWeight",label:"字体粗细",placeholder:"",type:"el-select",value:"normal",required:!1}]},{name:"提示语设置",showTooltip:!0,tooltip:"各部分饼图提示文字设置",list:[{name:"fontSize",label:"字体大小",placeholder:"",type:"el-input-number",value:12,required:!1},{name:"lineColor",label:"网格线颜色",placeholder:"",type:"vue-color",value:"",required:!1}]},{name:"图例操作",showTooltip:!0,tooltip:"饼图分组名称设置",list:[{name:"isShowLegend",label:"图例",placeholder:"",type:"el-switch",value:!0,required:!1},{name:"lengedColor",label:"字体颜色",placeholder:"",type:"vue-color",value:"#fff",required:!1},{name:"lengedFontSize",label:"字体大小",placeholder:"",type:"el-input-number",value:16,required:!1},{name:"lengedWidth",label:"图例宽度",placeholder:"",type:"el-input-number",value:15,required:!1},{selectOptions:[{code:"left",name:"左对齐"},{code:"right",name:"右对齐"}],name:"lateralPosition",label:"横向位置",placeholder:"",type:"el-select",value:"",required:!1},{selectOptions:[{code:"top",name:"顶部"},{code:"bottom",name:"底部"}],name:"longitudinalPosition",label:"纵向位置",placeholder:"",type:"el-select",value:"",required:!1},{selectOptions:[{code:"vertical",name:"竖排"},{code:"horizontal",name:"横排"}],name:"layoutFront",label:"布局前置",placeholder:"",type:"el-select",value:"",required:!1}]},{name:"自定义配色",showTooltip:!0,tooltip:"饼图颜色配置，一部分一个颜色",list:[{name:"customColor",label:"",type:"customColor",value:[{color:"#FF801C"},{color:"#F5FF46"},{color:"#00FE65"},{color:"#00FEFF"},{color:"#ffa800"}],required:!1}]}]],position:[{name:"left",label:"左边距",placeholder:"",type:"el-input-number",value:410.59,required:!1},{name:"top",label:"上边距",placeholder:"",type:"el-input-number",value:202.93,required:!1},{name:"width",label:"宽度",placeholder:"该容器在1920px大屏中的宽度",type:"el-input-number",value:1119.2,required:!1},{name:"height",label:"高度",placeholder:"该容器在1080px大屏中的高度",type:"el-input-number",value:688.72,required:!1}]},type:"WidgetPieNightingaleRoseArea",value:{reportCode:null,setup:{backgroundImage:"https://report.anji-plus.com/file/download/bf566e48-ccad-40e1-8ee9-228427e5466b",lengedColor:"#fff",lateralPosition:"",title:"大屏",isNoTitle:!0,lengedFontSize:16,textFontWeight:"normal",titleText:"",percentage:!1,layoutFront:"",nightingleRosetype:"radius",numberValue:!0,fontWeight:"normal",lengedWidth:15,height:1280,backgroundColor:"#000",textAlign:"left",lineColor:"",subTextColor:"#ffff",textColor:"#fff",subText:"",isShow:!0,textFontSize:20,subTextFontSize:12,customColor:[{color:"#FF801C"},{color:"#F5FF46"},{color:"#00FE65"},{color:"#00FEFF"},{color:"#ffa800"}],longitudinalPosition:"",subTextFontWeight:"normal",background:"",width:1920,isShowLegend:!0,fontSize:12,layerName:"南丁格尔玫瑰图"},data:{dynamicData:{color:[],chartProperties:{name:"name",value:"value"},setCode:"water_pie",chartType:"widget-piechart",contextData:{}},dataType:"dynamicData",refreshTime:5e3,staticData:[{name:"搜索引擎",value:1048},{name:"直接访问",value:735},{name:"邮件营销",value:580},{name:"联盟广告",value:484},{name:"视频广告",value:300}],dataSet:{setName:"水饼图-小清河流域各行业企业数量统计分析",setCode:"water_pie",caseResult:[{name:"钢铁",value:72},{name:"化工材料",value:56},{name:"纺织品",value:47},{name:"陶瓷玻璃",value:39},{name:"热力生产",value:35},{name:"药品制造",value:35},{name:"石油化工",value:32},{name:"矿物开采",value:20},{name:"建筑",value:18},{name:"养殖",value:12},{name:"饮品",value:11},{name:"食品生产",value:11},{name:"电子元件",value:10},{name:"酒类",value:6},{name:"树脂、材料",value:5},{name:"印染",value:4},{name:"碱制造",value:3},{name:"电池",value:3},{name:"化肥生产",value:3},{name:"火药",value:1}],updateTime:1657253568e3,setType:"sql",version:6,dynSentence:"select value,name from enterprise_industry_pie",deleteFlag:0,sourceCode:"water_demo",createBy:"aizoo10",accessKey:"8dee4be966c6505c669b413327e3b9ee",createTime:1655621681e3,dataSetParamDtoList:[],updateBy:"aizoo10",setDesc:"小清河流域各行业企业数量统计分析",dataSetTransformDtoList:[],id:90,enableFlag:1,setParamList:["name","value"]},dataSource:{updateTime:1657253525e3,version:1,deleteFlag:0,sourceCode:"water_demo",createBy:"aizoo10",sourceConfig:{password:"BigData.SDU.2022",jdbcUrl:"jdbc:mysql://10.102.33.49:3306/water_demo",driverName:"com.mysql.cj.jdbc.Driver",username:"aizoo"},createTime:1657253525e3,sourceDesc:"水溯源数据源",sourceType:"mysql",updateBy:"aizoo10",id:10,sourceName:"水溯源数据源",enableFlag:1}},collapse:{},position:{top:202.93,left:410.59,width:1119.2,index:0,height:688.72},refreshSeconds:null,enableFlag:null,deleteFlag:null,sort:null,options:null}}],width:null},reportCode:"lsh_exreport",widgets:null}}}]);