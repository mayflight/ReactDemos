import React,{Component} from 'react'

const Picture = props => {
	return(
		<img style={{width:80,height:80}} src={props.myImage} />
	)
}

const Name = props => {
	return (
		<a href={props.myLink} style={{width:50,height:50,color:'red'}}>{props.myName}</a>
	)
}

export default class Profile extends Component {
	render() {
		return (
			<div style={{flexDirection:'column',display:'-webkit-flex'}}>
				<Picture myImage={this.props.image} />
				<Name myLink={this.props.link} myName={this.props.name}/>
			</div>
		)
	}
}