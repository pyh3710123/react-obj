var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass_h1 = React.createClass({

    render: function () {
        return React.createElement('h1',
            { className: 'header',key:'header' },
            'React Component h1'
        );
    }
});

var ReactClass_h2 = React.createClass({
    render: function () {
        return React.createElement('h2',
            { className: 'container',
                key:'headercontainer' },
            'React Component h2'
        );
    }
});

var rce_h1 = React.createElement(
    ReactClass_h1,
    {className:'ReactClass_h1',
        key:'ReactClass_h1'}

);

var rce_h2 = React.createElement(
    ReactClass_h2,{className:'ReactClass_h2',
        key:'ReactClass_h2'});

var rcomFrament=[rce_h1,rce_h2];

var section=React.createElement('section',{className:'container',key:'container'},rcomFrament);

ReactDOM.render(section,document.getElementById('react'));