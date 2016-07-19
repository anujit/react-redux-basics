/*Redux reducer*/

module.exports = function(state,action) {
	var newstate = Object.assign({},state);
	
	switch(action.type){
		case 'ADD' : 
			newstate.count += 1;
			return newstate;
		case 'SUBTRACT' : 
			newstate.count = newstate.count > 0 ? newstate.count - 1 : 0;
			return newstate;
		default : 
			return {count : 0};
	}
}