import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import uiReducer from "./reducers/uiReducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(uiReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
