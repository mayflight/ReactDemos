import React,{Component} from 'react'
import {createStore} from 'redux'
import myReducers from './myFunction.js'
import {combineReducers} from 'redux'
import {Provider,connect} from 'react-redux'
const Show = params => {
	return(
		<div>
			<div>{params.title}</div>
			<div onClick={params.myReset}>Reset</div>
			<div onClick={params.mySize}>fontSize:+</div>
			<div onClick={params.myWidth}>width:+</div>
			<div onClick={params.myHeight}>height:+</div>
			<div style={{color:'red',fontSize:params.font,width:params.width,height:params.height,backgroundColor:'yellow'}}>REDUCE</div>
		</div>
	)
}
const MyShow = connect(
	(state,params) => ({
		font:state.font,
		width:state.width,
		height:state.height,
		title:params.title+state.font
	}),
	{	
		myReset:() =>({type:'RESET'}),
		mySize:() => ({type:'SIZE',value:5}),
		myWidth:() =>({type:'WIDTH',value:5}),
		myHeight:() =>({type:'HEIGHT',value:5})
	}
)(Show)
const store = createStore(combineReducers(myReducers))
export default class MyReactRedux extends Component {
	render () {
		return (
			<Provider store={store}>
				<MyShow title={'current fontSize: '}/>
			</Provider>
		)
	}
}

