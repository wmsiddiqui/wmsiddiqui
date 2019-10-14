import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Card } from 'react-bootstrap';
import './projects.css';

export default function(props) {
	let content;
	if (props.isLoadingRepos || !props.repos) {
		content = (
			<div className="loading">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		);
	} else {
		const projectCards = processRepos(props.repos);
		let starredReposComponent = null;
		let otherReposComponenet = null;

		if (projectCards.starredRepos.length) {
			starredReposComponent = (
				<React.Fragment>
					<h2>Featured Projects</h2>
					<div className="card-container">{projectCards.starredRepos}</div>
				</React.Fragment>
			);
		}

		if (projectCards.otherRepos.length) {
			otherReposComponenet = (
				<div>
					<h2>Other Projects</h2>
					<div className="card-container">{projectCards.otherRepos}</div>
				</div>
			);
		}
		content = (
			<React.Fragment>
				<h1>Projects</h1>
				<p className="description-text">
					Below are a list of public repositories which are found on my GitHub. You can also go directly to my
					GitHub profile by <a href="https://github.com/wmsiddiqui">clicking here</a>.
				</p>
				{starredReposComponent}
				<br />
				{otherReposComponenet}
			</React.Fragment>
		);
	}
	return <div>{content}</div>;
}

const processRepos = (repos) => {
	const starredRepos = [];
	const otherRepos = [];

	repos.forEach((repo) => {
		if (!repo.archived) {
			const repoComponent = (
				<Card bg="light" className="card" key={repo.name} onClick={() => clickCard(repo)}>
					<Card.Body>
						<Card.Title>{repo.name}</Card.Title>
						<Card.Text>{repo.description}</Card.Text>
					</Card.Body>
				</Card>
			);
			if (repo.stargazers_count > 0) {
				starredRepos.push(repoComponent);
			} else {
				otherRepos.push(repoComponent);
			}
		}
	});

	return { starredRepos, otherRepos };
};

const clickCard = (repo) => {
	window.open(repo.html_url, '_blank');
};
