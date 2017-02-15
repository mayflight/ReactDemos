import React,{Component}from 'react'
import {Router,Route,Link,hashHistory,IndexRoute,Redirect} from 'react-router'

const Profile = props => {
	return (
		<div>
			<h1>Profile</h1>
			<ul>
				<li><Link to="/name/句芒">Name</Link></li>
				<li><Link to ="/age">Age</Link></li>
				{props.children}
			</ul>
		</div>
	)
}

const Name = props => {
	return (
		<div>
			<h3>Name {props.params.name}</h3>
			<Link to="title/嵌套路由">点击title</Link>
			<Link to="message/重定向">点击message</Link>
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
		<h3>Wellcome you visit</h3>
		)
}

const Title = props => {
	return (
		<h3>Title:{props.params.text}</h3>
	)
}

export default class MyRoute extends Component {
	render () {
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Profile}>
					<IndexRoute component={IndexPage} />
					<Route path="/name/:name" component={Name}>
						<Route path="/title(/:text)" component={Title} />
						<Redirect from="/message(/:text)" to="/title(/:text)" />
					</Route>
					<Route path="/age(/:age)" component={Age} />
				</Route>
			</Router>
		)
	}
}