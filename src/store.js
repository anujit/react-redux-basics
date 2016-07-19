/*Redux Store*/

var Redux = require('redux'),
	counterReducer = require('./reducers/counter');
	
module.exports = Redux.createStore(counterReducer);