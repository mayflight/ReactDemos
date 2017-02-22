import React,{Component} from 'react'
import {createStore} from 'redux'
import myReducers from './myFunction.js'
import {combineReducers} from 'redux'
const Show = params => {
	return(
		<div>
			<div onClick={() => {
					store.dispatch({
						type:'SIZE',
						value:5
					})
				}}>fontSize:+</div>
			<div onClick={() => {
					store.dispatch({
						type:'WIDTH',
						value:5
					})
				}}>width:+</div>
			<div onClick={() => {
					store.dispatch({
						type:'HEIGHT',
						value:5
					})
				}}>height:+</div>
			<div style={{color:'red',fontSize:params.font,width:params.width,height:params.height,backgroundColor:'green'}}>REDUCE</div>
		</div>
	)
}

const store = createStore(combineReducers(myReducers))
export default class Reduce extends Component {
	constructor(props) {
		super(props),
		this.state={
			size:10,
			width:100,
			height:100
		}
	}

	componentWillMount() {
	  var unsubscribe=store.subscribe(() => {
		this.setState({
			size:store.getState().size,
			width:store.getState().width,
			height:store.getState().height
		})
	})
	}
	componentWillUnmount() {
		unsubscribe();
	}
	render () {
		return (
			<div>
				<div onClick={() => {
					store.dispatch({
						type:'RESET'
					})
				}}>Reset</div>
				<Show font={this.state.size} width={this.state.width} height={this.state.height} />
			</div>
		)
	}
}

