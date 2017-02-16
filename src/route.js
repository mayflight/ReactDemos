import React,{Component}from 'react'
import {Router,Route,Link,hashHistory,IndexRoute,Redirect,IndexLink} from 'react-router'

const Profile = props => {
	return (
		<div>
			<h1>Profile</h1>
			{props.children}
		</div>
	)
}

const Name = props => {
	return (
		<div>
			<h3>Name {props.params.name}</h3>
			<Link to="title/childrenrouter">点击title</Link>
			<Link to="message/redirect">点击message</Link>
			{props.children}
		</div>
	)
}

const Age = props => {
	return (
		<h3>Age {props.params.age}</h3>
	)
}

const IndexPage = props => {
	return (
		<div>
			<h3>Wellcome you visit</h3>
			<ul>
				<li><Link to ="/age/1000" activeStyle={{color:'red'}}>Age</Link></li>
				<li><Link to="/name/goumang" activeStyle={{color:'green'}}>Name</Link></li>
			</ul>
		</div>
		)
}

const Title = props => {
	return (
		<div>
			<h3>Title:{props.params.text}</h3>
			<IndexLink to="/" activeStyle={{color:'brown'}}>返回首页</IndexLink>
		</div>
	)
}

export default class MyRoute extends Component {
	render () {
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Profile}> 
					<IndexRoute component={IndexPage} />
					<Route path="/age(/:age)" component={Age} />
					<Route path="/name(/:name)" component={Name} onEnter={({params}) => console.log("enter name :"+params.name)}>
						<Route path="/title(/:text)" component={Title} />
						<Redirect from="/message(/:text)" to="/title(/:text)" />
					</Route>
				</Route>
			</Router>
		)
	}
}