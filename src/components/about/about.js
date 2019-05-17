import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './about.css';

export default function(props) {
	let content;

	if (props.isLoadingProfile) {
		content = (
			<div>
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		);
	} else {
		content = (
			<span>
				<img src={props.userProfile.avatar_url} className="avatar" alt="avatar" />
				<br />
				{props.userProfile.bio}
			</span>
		);
	}
	return (
		<React.Fragment>
			<h1>About Me</h1>
			{content}
			<br />
			<span>
				My name is Waqar Siddiqui. I like making everything from software to Gunpla (check out my gallery for
				some of my work). I live near Seattle, but originally grew up near Chicago. After graduating from the
				University of Illinois in Urbana-Champaign, I worked in Chicago for a few years. I had no intention of
				leaving Chicago, but life had other plans for me. I somehow managed to end up living in Redmond with my
				wife, while I work at Microsoft. <br />
				<br /> I'm a fullstack software engineer, and am interested in everything from DevOps to UI development.
				Early on in my career I was focused on mostly backend systems. I've worked with cloud platforms such as
				AWS and Azure, and believe they are both great tools for any software developer to utilize, for reasons
				including reliability, scalability, and cost. I've been striving to be a more well rounded engineer, so
				I've been trying to get more hands on experience with UI development both at work and on my own time. My
				intent is not necessarily to become a UI expert, but to become "good enough" at UI to be able to
				understand various UI concepts and for me to have the ability to produce front end code if needed. This
				website was created using React and Redux (although you can argue that Redux was not needed, I just
				couldn't resist the urge to do so). It may not be the greatest, but I'm by no means a front end UI
				designer. Instead, I am interested in a wide variety of topics related to software engineering. Although
				my favorite programming language is currently C#, I think it's important to acknowlege the fact that
				there is no perfect language or technology. Instead, I like to find the best technology for the task at
				hand. For a more detailed description of my professional work experience, check out my resume.
			</span>
		</React.Fragment>
	);
}
