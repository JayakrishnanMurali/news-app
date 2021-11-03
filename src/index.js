import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// NOTE: I tried deploying the app to Netlify but I was getting Error Status: 426 ("Upgrade Required")
// I googled the possible reasons and came to the conclusion that "NewsAPI.org reject any request that is not comming from localhost
// on there free version "

// If you want to see the app running. Try setting it up on local machine and follow the steps:
// 1.Clone the repository to your machine
// 2.Run npm install
// 3.Sign up for NewsAPI.org and Openweathermap.org and generate API keys
// 4.Create a folder .env in root of the file
// 5.Name your api keys as "REACT_APP_(NAME_OF_API)"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
