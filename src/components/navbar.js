import React, {useState} from "react";
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import {CSSTransition} from 'react-transition-group';


const nav = [
	{name:'Demo',link:'test'},
	{name:'About Me',link:'about', 
	submenu:[
		{name:'education',link:'#education'},
		{name:'protfolio',link:'#protfolio'}
	]}
]


function NavToggle() {
	const [toggle, setToggle] = useState(true);
	const [submenu, setsubmenu] = useState();
	


	return (
		<div class='toggle'>
		<span onClick={() => setToggle(!toggle)}>
			{toggle ? <FontAwesomeIcon icon={faTimes} />:
			<FontAwesomeIcon icon={faBars} />
			}
		</span>
		{toggle ? <CSSTransition in={toggle} timeout={350} classNames="slide" onEnter={() => setToggle(true)} onExited={() => setToggle(false)}>
		<Nav class='nav_container'>
			<NavMenu>
			{nav.map(nav => (
				<>
				<NavLink to={nav.link} activeStyle>
					{nav.name}
				</NavLink>
					{ nav.submenu !== undefined ?
						<ul>
						{nav.submenu.map((submenu) => (
							<NavLink to={submenu.link} activeStyle>
							{submenu.name}
							</NavLink>
						))}
						</ul> : null
					}
				</>	
			))}
			</NavMenu>
		</Nav>
		</CSSTransition>
		:<CSSTransition in={toggle} timeout={350} classNames="slide" onEnter={() => setToggle(true)} onExited={() => setToggle(false)}><div className="slide"></div></CSSTransition> }

	</div>
	);
}




export default NavToggle;
