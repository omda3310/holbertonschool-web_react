import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const listCourses = [
	{ id: '1', name: 'ES6', credit: 60 },
	{ id: '2', name: 'Webpack', credit: 20 },
	{ id: '3', name: 'React', credit: 40 },
];

const listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends React.Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handlePress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handlePress);
	}

	handlePress = (event) => {
		if (event.ctrlKey && event.key === 'h') {
			alert('Logging you out');
			this.props.logOut();
		}
	}

	render() {
		const { isLoggedIn } = this.props;
		if (isLoggedIn) {
			return (
				<>
					<Notifications listNotifications={listNotifications} />
					<div className={css(stl.App)}>
						<Header />
					</div>
					<div className={css(stl.Appbody)}>
						<BodySectionWithMarginBottom title="Course list">
							<CourseList listCourses={listCourses} />
						</BodySectionWithMarginBottom>
					</div>
					<div className={css(stl.Appfooter)}>
						<Footer />
					</div>
				</>
			);
		} else {
			return (
				<>
					<Notifications listNotifications={listNotifications} />
					<div className={css(stl.App)}>
						<Header />
					</div>
					<div className={css(stl.Appbody)}>
						<BodySectionWithMarginBottom title="Log in to continue">
							<Login />
						</BodySectionWithMarginBottom>
						<BodySection title="News from the School">
							<p>Follow Us</p>
						</BodySection>
					</div>

					<div className={css(stl.Appfooter)}>
						<Footer />
					</div>
				</>
			)
		}
	}
}

App.defautProps = {
	isLoggedIn: false,
	logOut: () => { },
};
App.PropTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	logOut: PropTypes.func,
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

export default App;
