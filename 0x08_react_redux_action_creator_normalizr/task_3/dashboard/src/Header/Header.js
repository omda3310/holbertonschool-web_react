import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import HolbertonSchool from '../assets/HolbertonSchool.jpg';
import FirstContext from '../App/AppContext';

class Header extends Component {
	static contextType = FirstContext;
	render() {
		const { user, logOut } = this.context;

		return (
			<div>
				<div className={css(stl.Apphd)}>
					<img src={HolbertonSchool} className={css(stl.Applogo)} alt="logo" />
					<h1>School dashboard</h1>
				</div>
				{user.isLoggedIn && (
					<section id='logoutSection' className={css(stl.logoutSection)}>
						<p>
							Welcome <b>{user.email}</b>
							<span className={css(stl.logoutSpan)} onClick={logOut}>(logout)</span>
						</p>
					</section>
				)}
			</div>
		)
	};

}

const stl = StyleSheet.create({
	Apphd: {
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		color: "#e0003c",
	},
	Applogo: {
		height: "140px",
	},
	logoutSection: {
		textAlign: "right",
		padding: "10px",
	},
	logoutSpan: {
		cursor: "pointer",
		marginLeft: "10px",
		color: "#e0003c",
	},
});

export default Header;
