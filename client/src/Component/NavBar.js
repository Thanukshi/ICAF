import React from 'react';
import './css/navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-mainbg">
			<NavLink className="navbar-brand navbar-logo" to="/" exact>
				ICAF Conference
			</NavLink>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i className="fas fa-bars text-white"></i>
			</button>

			<div className="collapse navbar-collapse" id="navBarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<div className="hori-selector">
						<div className="left"></div>
						<div className="right"></div>
					</div>

					<li className="nav-item active">
						<NavLink className="nav-link" to="/" exact>
							<i className="fas fa-tachometer-alt"></i>
							Home
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink className="nav-link" to="/" exact>
							<i className="far fa-address-book"></i>
							About 
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
