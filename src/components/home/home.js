import React from 'react';
import './home.css';
import logoIllustration from '../../images/LogoWaqarCropped.png';

export default function() {
	return (
		<div className="first-panel">
			<div className="logo-container">
				<img src={logoIllustration} alt="LogoIllustration" />
			</div>
			<div className="text-container">
				<div className="text">
					<h1 className="title">Waqar Siddiqui</h1>
					<h2>Software Engineer</h2>
					<p>
						I'm a fullstack software engineer who likes to make things. Check out my GitHub projects on the
						Projects page. Or click on the About link to learn more about me.
					</p>
				</div>
			</div>
		</div>
	);
}
