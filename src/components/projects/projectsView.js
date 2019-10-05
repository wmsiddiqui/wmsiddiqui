import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function(props) {
	let content;

	if (props.isLoadingProfile) {
		content = (
			<div className="loading">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		);
	} else {
		content = (
			<div>
				<br />
				Test
			</div>
		);
	}
	return <div>{content}</div>;
}
