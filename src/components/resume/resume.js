import React from 'react';
import './resume.css';

const RESUME_LINK =
	'https://docs.google.com/document/d/e/2PACX-1vTtwq5yWPSxvxuv756fS97RkCx4JrLrHzX4IClA0B9kWS5ZuiDZeF5euFwj_JZVeQtn5GlBra0M6Rbp/pub?embedded=true';

export default function() {
	return (
		<React.Fragment>
			<div className="frame-container">
				<iframe title="Resume" src={RESUME_LINK} />
			</div>
		</React.Fragment>
	);
}
