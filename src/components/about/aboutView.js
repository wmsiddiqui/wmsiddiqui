import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './about.css';

export default function(props) {
	let content;

	if (!props.isLoadingProfile && props.userProfile) {
		content = (
			<div>
				<img src={props.userProfile.avatar_url} className="avatar" alt="avatar" />
				<br />
				<p className="caption">{props.userProfile.bio}</p>
			</div>
		);
	} else {
		content = (
			<div className="loading">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		);
	}
	return (
		<div>
			{content}
			<div className="body-content">
				<h2 className="header">About Me</h2>
				My name is Waqar Siddiqui. I like making everything from software to Gunpla (check out my gallery for
				some of my work). I live near Seattle, but originally grew up near Chicago. After graduating from the
				University of Illinois in Urbana-Champaign, I worked in Chicago for a few years. I had no intention of
				leaving Chicago, but life had other plans for me. I somehow managed to end up living in Redmond with my
				wife, while I work at Microsoft.
				<h2 className="header">Hobbies</h2>
				I've had a wide range of hobbies over the years. I used to be (and still am) a huge fan of Yu-Gi-Oh! I
				spent years playing the card game as a child, and eventually became an official Judge and judged local
				tournaments. Unfortunately, (or fortunately) working full time and spending time with my wife left me
				little to no time to pursue this hobby anymore. It will always have a special place in my heart.
				<br />
				<br />
				I enjoy video games, but like Yu-Gi-Oh!, I've had little time to play any of them over the past few
				years. I tried to play competitive Pokemon for a while, but was never very good at it. You'll still find
				me playing Pokemon Showdown every now and then. You'll occasionally catch me playing couch co-op games
				with my wife, like Gears and Halo. Overall, though, I think I enjoy making games more than I like
				playing them. Feel free to check out all my abandoned Github projects.
				<br />
				<br />
				My most recent hobby has been Gunpla, plastic model kits based on Mobile Suit Gundam. Check out my
				gallary for some of my latest work!
				<h2 className="header">What I Do</h2>
				I'm a fullstack software engineer, and am interested in everything from DevOps to UI development. Early
				on in my career I was focused on mostly backend systems. My current role at Microsoft involves a lot of
				front-end UI work, using React and Redux. I'm by no means a front-end developer, but I believe that a
				good engineer will be whatever their team needs them to be. For the time being, my team is new to React
				and Redux, so I've been expected to be the React and JavaScript expert to help provide guidance for my
				team.
				<h2 className="header">Goals</h2>
				I always strive to be a well rounded engineer. I think to do so requires me to have some working
				knowledge of various different domains. I've worked with cloud platforms such as AWS and Azure, and
				believe they are both great tools for any software developer to utilize, for reasons including
				reliability, scalability, and cost. I think it's important to become even more familiar with these
				techonolgies, because it's clear that they will be the integral parts of software systems in the future.
				<br />
				<br />
				I'm a huge fan of the Agile methodology, but it's vital that it's done right. When it does work, it can
				result in some very high functioning teams. I love to promote and facilitate the Agile process on any
				team that I'm on.
				<h2 className="header">Work Experience</h2>
				For detailed information on my work experience, check out my LinkedIn, or check out my resume.
			</div>
		</div>
	);
}
