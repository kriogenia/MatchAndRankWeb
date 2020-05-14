import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from "react-toastify";
import App from './App';
import 'typeface-roboto';
import './i18n';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnVisibilityChange
			draggable
			pauseOnHover
		/>
  </React.StrictMode>,
  document.getElementById('root')
);