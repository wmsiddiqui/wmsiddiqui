import React from 'react';
import PageRouter from '../pageRouter/pageRouter';
import './page.css';

export default function() {
	return (
		<div className="page-container">
			<div className="page-contents">
				<PageRouter />
			</div>
		</div>
	);
}
