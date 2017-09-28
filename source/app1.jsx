var React=require('react');//引入核心
var ReactDOM=require('react-dom');//调用render方法渲染







var reactElement=React.createElement('h1',

    {className:'header'},"This is React Element of content"

);







var cel=React.createFactory('li');

var liItemEle1=cel({className:'item-1',key:'item-1'},'第一回：大苏打实打实大苏打');
var liItemEle2=cel({className:'item-2',key:'item-2'},'第一回：大苏打实打实大苏打');
var liItemEle3=cel({className:'item-3',key:'item-3'},'第一回：大苏打实打实大苏打');
var liItemEle4=cel({className:'item-4',key:'item-4'},'第一回：大苏打实打实大苏打');
var liItemEle5=cel({className:'item-5',key:'item-5'},'第一回：大苏打实打实大苏打');

var reactFragmentLi=[liItemEle1,liItemEle2,liItemEle3,liItemEle4,liItemEle5];

var ul=React.createElement('ul',{className:'list-of-item',key:'list-of-item'},reactFragmentLi);

var h1=React.createElement('h1',{className:'header',key:'header'},'这个古典文学(h1)');

var p=React.createElement('p',{className:'content',key:'content'},'红楼梦(p)');

var reactFragment=[h1,p,ul];

var section=React.createElement('section',{className:'container',key:'container'},reactFragment);


ReactDOM.render(section,

    document.getElementById('react')

);


