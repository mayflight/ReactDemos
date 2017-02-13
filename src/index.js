import React from 'react'
import ReactDom from 'react-dom'
import App from './appTest.js'
import MyButton from './lifeCycle.js'
import Input from './getDom.js'
ReactDom.render(
	<div>
		<App click={() => alert('you have click')} title={'this is my test,you can click'}/>
		<MyButton color={'burlywood'}/>
		<Input />
	</div>,
	document.getElementById('appTest')
)