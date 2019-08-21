(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{51:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});var l=a(1),n=a.n(l),r=a(40),p=a.n(r);class s extends n.a.Component{componentDidMount(){prettyPrint();let e=document.getElementById("api-nav").getElementsByTagName("li");for(let t=0;t<e.length;t++)e[t].setAttribute("active","no");p()(".apimenu-item").attr("active","no"),p()("#tool").attr("active","yes"),window.image2d_docs_api_navHelper={small:[],little:[],type:"tool"};let t=p()(".title.small"),a=p()(".title.little");for(let e=0;e<t.length;e++)window.image2d_docs_api_navHelper.small[e]={top:t[e].offsetTop};for(let e=0;e<a.length;e++)window.image2d_docs_api_navHelper.little[e]={top:a[e].offsetTop}}render(){return n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"因为绘制的时候，比如canvas2D没有图层，某个数据改变可能就意味着需要全部重新绘制等，基于这些考虑，在这一章，对前面进行必要的补充。"),n.a.createElement("h4",{className:"title small"},"图层"),n.a.createElement("p",null,"首先需要明确，图层服务的对象是canvas2D，svg某种意义上天生具有图层，不需要额外设计。让我们首先看看如何获取一个图层对象："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var layer=imageObject.layer();"),n.a.createElement("p",null,"这里的图层可以类比photoshop的图层去理解，我们提供了几个类似的方法来帮助使用图层对象。"),n.a.createElement("p",null,"图层对象管理着图层，通过传递id可以获取对应图层的画笔，如果该图层不存在会自动创建（这里的画笔就是canvas2D画笔）："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var painter=layer.painter(id);"),n.a.createElement("p",null,"删除指定图层："),n.a.createElement("pre",{className:"prettyprint lang-js"},"layer.delete(id);"),n.a.createElement("p",null,"图层中的内容不会显示在画布上，为了显示在画布上，需要手动更新："),n.a.createElement("pre",{className:"prettyprint lang-js"},"layer.update();"),n.a.createElement("p",null,"隐藏图层："),n.a.createElement("pre",{className:"prettyprint lang-js"},"layer.hidden(id);"),n.a.createElement("p",null,"显示图层："),n.a.createElement("pre",{className:"prettyprint lang-js"},"layer.show(id);"))}}}}]);