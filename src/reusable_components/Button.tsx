import React from "react";

interface DefinedButton {
	buttonName: string;
}

export default function Button(props: DefinedButton) {
	const buttonName = props.buttonName;
	const button = <button className="defaultButton">{buttonName}</button>;

	return button;
}
