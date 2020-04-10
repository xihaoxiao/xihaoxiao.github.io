# xihaoxiao.github.io
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>个人网站主页</title>
<link href="css/passage.css" type="text/css"/>
<style type="text/css">



body{
	margin:0;
	font-size:20px;
	font-family: "华文新魏";
	background-color:#E1FAFF;
	
}
h3{
	text-align:center;
	font-size:20px;
	font-family: Verdana, Geneva, sans-serif;
}
p{
	font-size:18px;
	font-family: "方正姚体";
}
h1{
	color:#09F;
}
h2{
	text-align:center;
}

/********↓↓↓↓↓上导航↓↓↓↓↓↓↓********/

#top_nav{/*整体设置导航外观*/
	text-align: center;
	height:auto;
}
#top_nav ul{/*去除ul的内外边距*/
	margin:0;
	padding:0;
	position:relative;
	left:50px;
	
}
#top_nav ul li{/*针对每一个列表项，去除列表前面的列表样式*/
	list-style-type:none;
	margin:0px 0px 0px 5px;
	float:left;
} 
#top_nav ul li a{/*设置超链接属性*/
	display:inline-block;
	border-left:0px solid #000000;
	border-right:0px solid #000000;
	border-bottom:0px solid #000000;/*单独设置左右边框*/
	width:150px;
	height:30px;
	line-height:20px;/*行高*/
	padding:5px 5px;
	text-decoration:none;/*去除下划线*/
	color:#300;
}
top_nav ul li a:link,top_nav ul li a:visited{/*设置超链接属性和访问后的属性*/
	background-color:#CCC;
	color:#666；
}
#top_nav ul li a:hover{/*超链接时经过的属性*/
	
	background-color:#E9E9E9;
	color:#666;
	text-align:center;
}



/********↓↓↓↓↓左导航↓↓↓↓↓*************/


#left_nav{/*整体设置导航外观*/
	text-align:left;
	height:auto;
}
#left_nav ul{/*去除ul的内外边距*/
	margin:0px;
	padding:0px;
	position:relative;
}
#left_nav ul li{/*针对每一个列表项，去除列表前面的列表样式*/
	list-style-type:none;
	
} 
#left_nav ul li a{/*设置超链接属性*/
	display:block;
	/*单独设置左右边框*/
	border-left:18px solid #8BC7F8;
	border-right:0px solid #000000;
	border-bottom:0px solid #000000;
	width:160px;
	height:50px;
	line-height:20px;/*行高*/
	padding:5px 5px;
	text-decoration:none;/*去除下划线*/
	color:#4891D2;
	font-family: "楷体";
}
left_nav ul li a:link,left_nav ul li a:visited{/*设置超链接属性和访问后的属性*/
	background-color:#0066c;
	color:#cccccc;
}
#left_nav ul li a:hover{/*超链接时经过的属性*/
	border-left:20px solid  #8BC7F8;
	background-color:#8BC7F8;
	color:#FFF;
	text-align:center;
}




/***********↓↓↓↓↓↓布局↓↓↓↓↓↓****************/


#container{
	position: relative;
	width:1200px;
		background-image:url(images/1.png);
		margin:auto;
}

#banner{
	height:200px;
	background-color:#8BC7F8;
	
}

#navigation{
	height:40px;
	background-color:#8BC7F8;
	
	
	
}

#aside{
	height:300px;
	width: 250px;
	background-image:url(images/1.png);
	float:left;
	
}
#contant{
	height:300px;
	background-image:url(images/1.png);
	margin-left:260px;
	margin-bottom:10px;
	margin-right:10px;
	
}
	

#contant2{
	height:1400px;
	background-image:url(images/1.png);
	
}

#footer{
	height:30px;
	background-color:#8BC7F8;
}


</style>
</head>






<body>
<div id="container">


<div id="banner">
<img src="images/TOP.jpg">
</div>




<div id="navigation">

<div id="top_nav">
<ul>
<li><a href="index.html">首页</a></li>
<li><a href="sub/yypd.html">音乐频道</a></li>
<li><a href="sub/tppd.html">图片频道</a></li>
<li><a href="sub/dypd.html">电影频道</a></li>
<li><a href="sub/lxzz.html">联系作者</a></li>
<li><a href="sub/zzjs.html">作者介绍</a></li>
</div>
</div>


<div id="aside">
<div id="left_nav">
<ul>
<li><a href="sub/wyjs.html" target="main">网站介绍</a></li>
<li><a href="sub/yypdjs.html" target="main">音乐频道介绍</a></li>
<li><a href="sub/tppdjs.html" target="main">图片频道介绍</a></li>
<li><a href="sub/dypdjs.html" target="main">电影频道介绍</a></li>
<li><a href="sub/ljgd.html" target="main">了解更多</a></li>
</ul>
</div>
</div>


<div id="contant">
<iframe src="" width="100%" height="300px" scrolling="auto" name="main"></iframe>
</div>
<div id="contant2">
<div>
<table width="100%" border="1" cellspacing="0" cellpadding="0" height="300px">
  <tr>
    <td>
    <h2>电影频道精选</h2>
    <h1>小丑(JOKER)</h1>
    <img src="images/7.jpg" width="500" height="328" style="float:left" />
    <p style="text-indent:2em;">
    <ol>
    <li>类型:剧情/惊悚/犯罪</li>
    <li>主演: 杰昆·菲尼克斯 / 罗伯特·德尼罗 / 马克·马龙 / 莎姬·贝兹 / 谢伊·惠格姆....</li>
    <li>导演: 托德·菲利普斯</li>
    </ol>
    <p style="text-indent:2em;">电影《小丑》以同名DC漫画角色为基础，由华纳兄弟影业公司发行，计划于2019年10月4日上映。本片的故事将独立于DCEU之外，故事背景设置在20世纪80年代，讲述了一位生活陷入困境的脱口秀喜剧演员渐渐走向精神的崩溃，在哥谭市开始了疯狂的犯罪生涯，最终成为了蝙蝠侠的宿敌“小丑”的故事。本片由《宿醉》的导演托德菲利普斯执导，他与编剧斯科特西尔弗一起撰写了编剧。杰昆菲尼克斯本片中饰演主人公“小丑”，其他的主演包括罗伯特德尼罗、莎姬贝兹、马克马龙等。
    <p style="text-align:center">想了解更多请进入<a href="sub/dypd.html">电影频道</a>观看</p>
    </p>
    </td>
  </tr>
  <tr>
    <td> <h2>音乐频道精选</h2>
    <h1>最佳损友</h1>
    <img src="images/8.jpg" width="500" height="328" style="float:left" />
    <p style="text-indent:2em;">
    <ol>
    <li>专辑《Life Continues》</li>
    <li>表演者: 陈奕迅 / 陳奕迅 </li>
    <li>作词:黄伟文</li>
    </ol>
    <p style="text-indent:2em;">《最佳损友》出自于陈奕迅专辑《U 87》，这张专辑的主题是探究人生，希望带出人生是有喜有悲，勿因挫折而自寻短见的讯息，其中不少新歌是他对家庭、事业及人生的写照。
《最佳损友》是Eason继一曲《夕阳无限好》后再与Eric Kwok 合作，黄伟文填词。找了和杨千嬅同年同月同日生的Eric Kwok来作曲编曲，又找了杨千嬅的老友陈奕迅来演唱。做这首歌当天，Eric就让杨千嬅一定要好好听。</p>
    <p style="text-align:center">想了解更多请进入<a href="sub/yypd.html">音乐频道</a>观看</p></td>
  </tr>
  <tr>
    <td><h2>图片频道精选</h2>
    
    <img src="images/9.jpg" width="400" height="328"  />
    <img src="images/10.jpg" width="400" height="328" />
  
    </td>
  </tr>
</table>
</div>
<div id="footer"><h3>作者by<a href="mailto:573183877@qq.com">@573183877</a>  </h3></div>
</div>
</body>
</html>
