import React from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
	return (
		<ul className='navigation'>
			<li>
				<NavLink activeClassName='link-active' to='/Home'>Home</NavLink>
			</li>
			<li>
				<NavLink activeClassName='link-active' to='/profile'>Profile</NavLink>
			</li>
			<li>
				<NavLink activeClassName='link-active' to='/news'>News</NavLink>
			</li>
			<li>
				<NavLink activeClassName='link-active' to='/messages'>Messages</NavLink>
			</li>
			<li>
				<NavLink activeClassName='link-active' to='/music'>Music</NavLink>
			</li>
			<li>
				<NavLink activeClassName='link-active' to='/settings'>Settings</NavLink>
			</li>
		</ul>
	)
}

export default Nav
