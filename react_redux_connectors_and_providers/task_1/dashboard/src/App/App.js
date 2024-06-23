import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from "react-redux";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import FirstContext from './AppContext';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/uiActionTypes';
import { displayNotificationDrawer, hideNotificationDrawer } from "../actions/uiActionCreators"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			listCourses: [
				{ id: 1, name: 'ES6', credit: 60 },
				{ id: 2, name: 'Webpack', credit: 20 },
				{ id: 3, name: 'React', credit: 40 },
			],
			
			listNotifications: [
				{ id: 1, type: 'default', value: 'New course available' },
				{ id: 2, type: 'urgent', value: 'New resume available' },
				{ id: 3, type: 'urgent', value: 'Urgent requirement - complete by EOD' },
			],

		 };
		this.handlePress = this.handlePress.bind(this);
		this.logOut = this.logOut.bind(this);
		this.logIn = this.logIn.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handlePress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handlePress);
	}

	handlePress = (event) => {
		if (event.ctrlKey && event.key === 'h') {
			alert('Logging you out');
			this.state.logOut;
		}
	}

	logOut() {
		this.setState({
			user: {
				email: '',
				password: '',
				isLoggedIn: false,
			}
		});
	}
	logIn(email, password) {
		this.setState({
			user: {
				email,
				password,
				isLoggedIn: true,
			}
		});
	}

	markNotificationAsRead(id) {
		this.setState({
			listNotifications: this.state.listNotifications.filter((notification) => {
				return (notification.id !== id);
			})
		});
	}

	render() {
		const { listCourses, listNotifications } = this.state;
		const { isLoggedIn=false, displayDrawer=false, displayNotificationDrawer, hideNotificationDrawer } = this.props;
		const object = { user: isLoggedIn, logOut: this.logOut };

		return (
			<FirstContext.Provider value={object}>
			  <>
				<Notifications
					listNotifications={listNotifications}
					displayDrawer={displayDrawer}
					handleDisplayDrawer={displayNotificationDrawer}
					handleHideDrawer={hideNotificationDrawer}
					markNotificationAsRead={this.markNotificationAsRead}
				/>
				<div className={css(stl.App)}>
					<Header />
				</div>
				<div className={css(stl.Appbody)}>
					{isLoggedIn ? (
						<BodySectionWithMarginBottom title="Course list">
							<CourseList listCourses={listCourses} />
						</BodySectionWithMarginBottom>
					) : (

						<BodySectionWithMarginBottom title="Log in to continue">
							<Login logIn={this.logIn} />
							<BodySection title="News from the School">
							    <p>Follow Us</p>
					        </BodySection>
						</BodySectionWithMarginBottom>
					)}
					
				</div>

				<div className={css(stl.Appfooter)}>
					<Footer />
				</div>
			  </>
			</FirstContext.Provider>
		)
	}
}


App.defautProps = {
	displayNotificationDrawer: () => {},
	hideNotificationDrawer: () => {}
};
App.propTypes = {
	isLoggedIn: PropTypes.bool,
	displayDrawer: PropTypes.bool,
	displayNotificationDrawer: PropTypes.func,
	hideNotificationDrawer: PropTypes.func
};

const stl = StyleSheet.create({
	App: {
		display: 'flex',
		justifycontentfirst: "baseline",
		borderBottom: `#e0003c 3px solid`,
		width: "100%",
		height: "140px",
	},
	Appbody: {
		padding: "25px",
		height: "320px",
		borderBottom: `#e0003c 3px solid`,
	},
	Appfooter: {
		textAlign: "center",
		fontfamily: "sans-serif",
	},
});

export const mapStateToProps = (state) => {
	return ({
		isLoggedIn: state.get("isUserLoggedIn"),
		displayDrawer: state.get("isNotificationDrawerVisible")
	});
};

const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
	logIn: (email, password) => ({ type: LOGIN_SUCCESS, payload: { email, password } }),
	logOut: () => ({ type: LOGOUT })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
