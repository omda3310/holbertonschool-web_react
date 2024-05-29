import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			displayDrawer: false,
			listCourses: [
				{ id: 1, name: 'ES6', credit: 60 },
				{ id: 2, name: 'Webpack', credit: 20 },
				{ id: 3, name: 'React', credit: 40 },
			],
			
			listNotifications: [
				{ id: 1, type: 'default', value: 'New course available' },
				{ id: 2, type: 'urgent', value: 'New resume available' },
				{ id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
			],

		 };
		this.handlePress = this.handlePress.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
	}

	handleDisplayDrawer = () => {
		this.setState({ displayDrawer: true });
	}
	handleHideDrawer = () => {
		this.setState({ displayDrawer: false });
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
			this.props.logOut();
		}
	}

	render() {
		const { isLoggedIn } = this.props;
		const { displayDrawer, listCourses, listNotifications } = this.state;


		return (
			<>
				<Notifications
					listNotifications={listNotifications}
					displayDrawer={displayDrawer}
					handleDisplayDrawer={this.handleDisplayDrawer}
					handleHideDrawer={this.handleHideDrawer}
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
							<Login />
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
		)
	}
}


App.defautProps = {
	isLoggedIn: false,
	logOut: () => {},
};
App.propTypes = {
	isLoggedIn: PropTypes.bool,
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
