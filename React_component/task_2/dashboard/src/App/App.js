import React from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import './App.css';
import CourseList from '../CourseList/CourseList';

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
    const {isLoggedIn} = this.props;
    return (
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
      </div>
      <div className='App-body'>
        {!isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </>
  );
}
}

App.defautProps = {
  isLoggedIn: false,
  logOut: () => {},
};
App.PropTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func,
};

export default App;
