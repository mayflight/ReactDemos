import React ,{Component} from 'react'
export default class AppTest extends Component {
	render() {
		return (
			<div onClick={this.props.click}> {this.props.title}</div>
		)
	}
}