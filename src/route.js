import React,{Component}from 'react'
import {Router,Route,Link,hashHistory,IndexRoute,Redirect,IndexLink,Lifecycle,RouteContext} from 'react-router'

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

const Age = React.createClass({
	
	componentDidMount() {
		 this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
	},

	routerWillLeave(next) {
		if (this.refs.age.value === this.props.params.age) {
			return true;
		}else {
			alert("年龄校验出错")
			return false;
		}
	},
	render() {
		return (
			<div>
				<h3>Age {this.props.params.age}</h3>
				<input ref="age" placeholder="确认离开吗？请校验年龄"/>
				<IndexLink to="/" > 返回首页</IndexLink>
			</div>
		)
	}
})

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