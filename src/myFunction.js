
 const changeSize = (state=10,action) => {
 	if(action.type === 'RESET') {
 		return 10
 	 }
 	return action.type === 'SIZE' ? state+ action.value: state
 }
 const changeHeight= (state=100,action) => {
 	if(action.type === 'RESET') {
 		return 100
 	 }
 	return action.type === 'HEIGHT' ? state+ action.value: state
 }

 const changeWidth= (state=100,action) => {
 	if(action.type === 'RESET') {
 		return 100
 	 }
 	return action.type === 'WIDTH' ? state+ action.value: state
 }

export default ({
	size:changeSize,
	height:changeHeight,
	width:changeWidth
})