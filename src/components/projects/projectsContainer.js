import React from 'react';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../state/github/githubActions';
import ProjectsView from './projectsView';

class ProjectsContainer extends React.Component {
	componentDidMount() {
		if (!this.props.repos) {
			console.log('Getting Repos!');
			this.props.getGithubRepos('wmsiddiqui');
		}
	}

	render() {
		return <ProjectsView repos={this.props.repos} isLoadingRepos={this.props.isLoadingRepos} />;
	}
}

function mapStateToProps(state) {
	return {
		repos: state.githubReducer.repos,
		isLoadingRepos: state.githubReducer.loadingRepos
	};
}

const mapDispatchToProps = {
	getGithubRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
