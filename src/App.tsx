import React from "react";
import "./App.css";
import Button from "./reusable_components/Button";
import { ImgPicker } from "./reusable_components/ImgPicker";
//TODO check best interface name practices

interface MainPageDefinition {}

export default function App(props: MainPageDefinition) {
	const mainPage = (
		<div className="App">
			<nav>
				<Button buttonName={"Home"} />
				<Button buttonName={"About"} />
				<img
					className="Logotype"
					src={
						ImgPicker("bosoreactprojectlogo")
						//require("./assets/images/bosoreactprojectlogo.png")
					}
					alt="logo"
				/>
				<Button buttonName={"Work"} />
				<Button buttonName={"Contact"} />
			</nav>
		</div>
	);

	return mainPage;
}
