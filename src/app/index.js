// console.log("it work~~");
import './css/common.css';
import './css/header.less';
import React from "react";
import { render } from "react-dom";

import  { Header } from "./components/Header";
import  { Home } from "./components/Home";


class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="header-container">
					<h1>this is header</h1>
					<Header/>
				</div>

				<div className="home-container">
					<h2>this is home</h2>
					<Home />
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('app'));