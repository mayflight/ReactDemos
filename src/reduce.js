import React,{Component} from 'react'
import {createStore} from 'redux'

const Show = params => {
	return(
		<div>
			<div onClick={() => {
					store.dispatch({
						type:'SIZE'
					})
				}}>fontSize:+</div>
			<div onClick={() => {
					store.dispatch({
						type:'WIDTH'
					})
				}}>width:+</div>
			<div onClick={() => {
					store.dispatch({
						type:'HEIGHT'
					})
				}}>height:+</div>
			<div style={{color:'red',fontSize:params.font,width:params.width,height:params.height,backgroundColor:'green'}}>REDUCE</div>
		</div>
	)
}

const store = createStore((state={size:10,width:100,height:100},action) => {
	switch (action.type) {
			case 'SIZE':return Object.assign({},state,{size:store.getState().size+5});
			case 'WIDTH':return Object.assign({},state,{width:store.getState().width+15});
			case 'HEIGHT':return Object.assign({},state,{height:store.getState().height+15});
			case 'RESET':return ({size:10,width:100,height:100});
			default:return state;
		}
})

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
		store.subscribe(() => {
		this.setState({
			size:store.getState().size,
			width:store.getState().width,
			height:store.getState().height
		})
	})
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

