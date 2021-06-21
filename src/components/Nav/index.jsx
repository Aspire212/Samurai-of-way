import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
	return (
		<ul className='navigation'>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/profile'>Profile</Link>
			</li>
			<li>
				<Link to='/news'>News</Link>
			</li>
			<li>
				<Link to='/messages'>Messages</Link>
			</li>
			<li>
				<Link to='/music'>Music</Link>
			</li>
			<li>
				<Link to='/settings'>Settings</Link>
			</li>
		</ul>
	)
}

export default Nav
