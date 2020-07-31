import React from "react";
import "./RequestArea.scss";
import { Form } from "react-bootstrap";

const RequestArea = (props) => {
	let requestType = ["GET", "PUT", "POST", "DELETE"];
	return (
		<div className="request-area">
			<Form>
				<Form.Group>
					{requestType.map((type) => (
						<Form.Check
							inline
							type="radio"
							label={type}
							name="requestMethods"
							className="request-methods"
							key={type}
						/>
					))}
				</Form.Group>
			</Form>
		</div>
	);
};

export default RequestArea;
