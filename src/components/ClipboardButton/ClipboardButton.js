import React from "react";
import "./ClipboardButton.scss";


function copyToClipboard() {
	const copyText = document.getElementById("response").textContent;
	navigator.clipboard.writeText(copyText);
}

const ClipboardButton = (props) => {
	return (
		<div>
			{props.show ? (
				<i
					className="far fa-clipboard clipboardImage"
					onClick={() => copyToClipboard()}
				/>
			) : null}
		</div>
	);
};

export default ClipboardButton;
