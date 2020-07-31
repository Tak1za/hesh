import React, { useState } from "react";
import "./ResponseArea.scss";
import ClipboardButton from '../ClipboardButton/ClipboardButton';

const ResponseArea = (props) => {
	let data = {
		test: "test test test",
		test2: "test2 test2 test2",
	};
	const [showClipboard, setShowClipboard] = useState(false);
	return (
		<div className="response-area">
			<div className="response-code">200 OK</div>
			<div
				className="json-response"
				onMouseEnter={() => setShowClipboard(true)}
				onMouseLeave={() => setShowClipboard(false)}
			>
				<ClipboardButton show={showClipboard} />
				<pre id="response">{JSON.stringify(data, null, 2)}</pre>
			</div>
		</div>
	);
};

export default ResponseArea;
