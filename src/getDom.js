import React ,{Component} from 'react'
export default class InputClear extends Component {
	
	constructor(props) {
		super(props)
		this.state={
			text:''
		}
	}

	render () {
		return (
			<div>
				<div 
					onClick={() => {
						this.setState({text:''})
						this.refs.input.focus()
					}}
					>
						Reset
				</div>
				<input ref = 'input' value = {this.state.text} onChange = {
					(e) => this.setState({text:e.target.value})
				}/>
			</div>
		)
	}
}