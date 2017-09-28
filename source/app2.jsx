var React=require('react');//引入核心
var ReactDOM=require('react-dom');//调用render方法渲染

var h1=React.DOM.h1({className:"header",key:"header"},"中国古典文学(h1)");


var p=React.DOM.p({className:"content",key:"content"},"红楼梦");

var li1=React.DOM.li({className:"content1",key:"content1"},"第一回：大苏打实打实大苏打1'");
var li2=React.DOM.li({className:"content1",key:"content2"},"第一回：大苏打实打实大苏打2'");
var li3=React.DOM.li({className:"content1",key:"content3"},"第一回：大苏打实打实大苏打3'");
var li4=React.DOM.li({className:"content1",key:"content4"},"第一回：大苏打实打实大苏打4'");

var ulList=[li1,li2,li3,li4];
var ul=React.createElement('ul',{className:'list-of-item',key:'list-of-item'},ulList);
var arr=[h1,p,ul];
var section=React.createElement('section',{className:'container',key:'container'},arr);


var React










ReactDOM.render(section,

    document.getElementById('react')

);