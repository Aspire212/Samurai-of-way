import React from 'react'
import Profile from './Profile'
import Dialogs from './Dialogs'
import Music from './Music'
import { Switch, Route } from 'react-router-dom'

import './Content.css'

const Content = () => {
	return (
		<div className='content'>
			<Switch>
				<Route exact path='/'>
					Home
				</Route>
				<Route path='/news'>
					News
				</Route>
				<Route path='/profile'>
					<Profile />
				</Route>
				<Route path='/messages'>
					<Dialogs />
				</Route>
				<Route path='/music'>
					<Music />
				</Route>
				<Route path='/settings'>
					Settings
				</Route>
			</Switch>
		</div>
	)
}

export default Content
