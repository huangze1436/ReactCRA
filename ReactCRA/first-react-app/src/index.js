import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux";
import store from "./store/index"
import storehooks from './store_hook/index'
import { BrowserRouter } from "react-router-dom";

console.log('store:');
const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    
  <BrowserRouter>
  {/* store */}
    <Provider store={storehooks}>
        <App />
    </Provider>
  </BrowserRouter>

)