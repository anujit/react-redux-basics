/*App Component*/

var React = require('react'),
	ReactRedux = require('react-redux'),
	ptypes = React.PropTypes,
	actions = require('../actions');
	
var App = React.createClass({
	proptypes : {
		add : ptypes.func.isRequired,
		subtract : ptypes.func.isRequired
	},
	render : function() {
		var currentCount = this.props.count;
		return(
			<div>
				<div>
					{currentCount}
				</div>
				<div>
					<button onClick={this.props.add}>Add</button>
					<button onClick={this.props.subtract}>Subtract</button>
				</div>
			</div>
		)
	}
});

var mapStateToProps = function(state){
	return {count : state.count};
};

var mapDispatchToProps = function(dispatch){
	return {
		add : function(){dispatch(actions.add())},
		subtract : function(){dispatch(actions.subtract())}
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(App);
