/*index.js*/

var React = require('react'),
	ReactDOM = require('react-dom'),
	store = require('./store'),
	App = require('./components/app'),
	Provider = require('react-redux').Provider;
	
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);