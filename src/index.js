import React from "react";
import ReactDOM from "react-dom/client";
// global styles first, so each page's own CSS can build on them
import './index.css'
import './styles/site.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
