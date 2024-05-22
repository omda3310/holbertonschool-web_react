import React from 'react';
import propTypes from 'prop-types';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import './App.css';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
      </div>
      <div className='App-body'>
        {!isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </>
  );
}

App.defautProps = {
  isLoggedIn: false,
};
App.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
};

export default App;
