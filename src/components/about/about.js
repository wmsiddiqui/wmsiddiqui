import React from 'react';

export default function(props) {
	return (
		<React.Fragment>
			<h1>About Me</h1>
			<span>{props.userProfile.bio}</span>
		</React.Fragment>
	);
}
