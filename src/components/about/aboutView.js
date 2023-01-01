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
				some of my work). Lately I've fallen in love with 3D printing with both FDM and Resin printers.
				I live near Chicago, close to where I grew up. But I also lived in Redmond, WA for a
				few years while working at Microsoft. I'm currently a Web Solutions Engineer at Google, working within
				the Mastery organization.
				<h2 className="header">Hobbies</h2>
				I've had a wide range of hobbies over the years. I used to be (and still am) a huge fan of Yu-Gi-Oh! I
				spent years playing the card game as a child, and eventually became an official Judge and judged local
				tournaments. Over the years I've had an on/off relationship with Yu-Gi-Oh! While I gave it up and sold my
				cards early on in my career, I tried to get back into the game once I had more free time outside of work.
				Unfortunately the game did not feel the same to me, so I've moved on to other card games. I absolutely
				love trading card games. These days you can find me collecting and occasionally playing the Digimon Card Game,
				a trading card game which was launched in November of 2020. I also create some Youtube content for trading card
				games, <a href="https://www.youtube.com/channel/UCGan6f9SVYEvsnsoUjv4XNA">which you can check out here!</a>
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
				gallery for some of my latest work!
				<h2 className="header">What I Do</h2>
				I'm a fullstack software engineer, and am interested in everything from DevOps to UI development. Languages and
				frameworks are all just tools, so I try to be language agnostic. Professionally, I've used C#, Java, Python,
				JavaScript/TypeScript, Ruby on Rails, VB.NET, and probably others. Tools are all situational, and good engineers
				should know which tool to use, and when. That all being said, C# is probably one of my favorite languages.
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
