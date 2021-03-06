import React from 'react'
import ReactDom from 'react-dom'
import App from './appTest.js'
import MyButton from './lifeCycle.js'
import Input from './getDom.js'
import Profile from './myProfile.js'
import MyRouter from './route.js'
import MyRedux from './reduce.js'
import MyReactRedux from './reactRedux.js'
ReactDom.render(
	<div>
		<hr />
		<App click={() => alert('you have click')} title={'this is my test,you can click'}/>
		<hr />
		<MyButton color={'burlywood'}/>
		<hr />
		<Input />
		<hr />
		<Profile 
			image={'https://avatars2.githubusercontent.com/u/22787800?v=3&u=ea01e2a307d3d78212c276489189799db9cfd68a&s=400'}
			name={'boy'}
			link={'https://github.com/settings/profile'}
		/>
		<hr />
		<MyRouter />
		<hr />
		<MyRedux />
		<hr />
		<MyReactRedux />
		<hr />
	</div>,
	document.getElementById('appTest')
)