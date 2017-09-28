var React = require('react');

var Profile = React.createClass({
    getInitialState:function() {
        return {
            phone: ''
        };
    },

    componentDidMount: function() {
        $.get(this.props.source,
            function(result) {
                console.log(result);
                // var userItem = result[0];
                //  if (this.isMounted()) {
                this.setState({
                    phone: result.data.phone
                });
                //  }
            }.bind(this));
    },
    render: function() {
        return (
            <div>
                phone: {this.state.phone}
            </div>
        );
    }
});

module.exports = Profile;