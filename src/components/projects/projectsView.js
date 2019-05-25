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
				<img src={props.userProfile.avatar_url} className="avatar" alt="avatar" />
				<br />
				<p className="caption">{props.userProfile.bio}</p>
			</div>
		);
	}
	return <div>{content}</div>;
}
