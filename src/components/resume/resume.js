import React from 'react';
import './resume.css';

const RESUME_LINK =
	'https://docs.google.com/document/d/e/2PACX-1vR-4oguUOnGFLUvVfmVjjNxeRElI2yZ0GwOSSmC08SomiNUeATN-C92mcnM-2ZR-i0b4ImevliZxK-a/pub?embedded=true';

export default function() {
	return (
		<React.Fragment>
			<div className="frame-container">
				<iframe title="Resume" src={RESUME_LINK} />
			</div>
		</React.Fragment>
	);
}
