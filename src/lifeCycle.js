import React ,{Component} from 'react'

export default class MyButton extends Component {
	//构造函数
	constructor(props) {
		super(props)
		this.state = {
			hightLight:false
		}
		console.log('constructor')
	}
	//组件即将装载在render之前调用，改变state时不会调用render
	componentWillMount () {
		console.log('will mount')
	}
	componentDidMount () {
		console.log('did mount')
	}
	//属性值改变后才会调用
	componentWillReceiveProps () {
		console.log('will receive props')
	}
	shouldComponentUpdate () {
		console.log ('shouldComponentUpdate')
		return true;
	}
	componentWillUpdate () {
		console.log('will update')
	}
	componentDidUpdate () {
		console.log ('did update') 
	}
	componentWillUnmount() {
		console.log('will unmount')
	}
	render() {
		return (
			<p 	onClick={() => this.setState({hightLight:!this.state.hightLight})} 
				style={{color:this.state.hightLight?'red':this.props.color}}>
			   this button is {this.state.hightLight? 'hightLight':'normal'}
			</p>
		)
	}
}

//给定默认的属性值
MyButton.defaultProps = {
	color:'gray'
}