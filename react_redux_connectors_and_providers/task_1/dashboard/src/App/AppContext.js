import React from 'react';

const user = {
    email: "",
    password: "",
    isLoggedIn: false
};

const logOut = () => {
    console.log("User logged out");
}

const FirstContext = React.createContext(user, logOut);

export default FirstContext;
