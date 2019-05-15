import ReactDOM from "react-dom";
import React from "react";
import Home from "../components/Home";
import App from "../App";

describe('App', function() {

    it('renders with correct text', function() {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        console.log(div.querySelector(".login-container").querySelector("h2").textContent);
        ReactDOM.unmountComponentAtNode(div);
    });

});