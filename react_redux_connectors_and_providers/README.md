React Redux Connectors and Providers

https://github.com/omda3310/holbertonschool-web_react/blob/main/react_redux_connectors_and_providers/reduxProviser.jpg

Overview
This project focuses on understanding and implementing React Redux connectors and providers. You will learn to manage state in your React applications efficiently using Redux and enhance your app's performance with various tools and techniques.

Resources
To successfully complete this project, you should read or watch the following resources:

Redux CreateStore
Redux Connect
Redux Provider
Redux Middleware
Redux Thunk
Redux DevTools
Redux Reselect
Learning Objectives
By the end of this project, you should be able to:

Explain Redux connectors and how to use them.
Understand the different functions you can pass to a connector (mapStateToProps, mapDispatchToProps).
Map an action creator to a component using a connector.
Map an async action creator to a component with Redux Thunk.
Set up your app’s store using Redux Providers.
Improve a connector’s performance using Reselect.
Use Redux’s dev tools to debug the state of your application.

Your project should be organized as follows:

project-root/
├── dist/
│   ├── courses.json
│   ├── login-success.json
│   └── notifications.json
├── src/
│   ├── actions/
│   │   └── ...
│   ├── reducers/
│   │   └── ...
│   ├── selectors/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── containers/
│   │   └── ...
│   ├── App.js
│   └── index.js
├── .babelrc
├── package.json
└── README.md
Usage
Install dependencies:

npm install

Start the development server:

npm start

Run tests:

npm test


Summary
This project will help you gain a deeper understanding of how to use Redux with React to manage the state in your applications. By the end, you should be comfortable using connectors, providers, middleware, and dev tools provided by Redux, and be able to improve the performance of your app using Reselect.
