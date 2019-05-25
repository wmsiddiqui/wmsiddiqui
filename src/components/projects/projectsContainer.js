import React from 'react';
import { connect } from 'react-redux';
import { getGithubUser } from '../../state/github/githubActions';
import ProjectsView from './projectsView';

class ProjectsContainer extends React.Component {
	componentDidMount() {
		if (!this.props.userProfile) {
			this.props.getGithubUser('wmsiddiqui');
		}
	}

	render() {
		return <ProjectsView userProfile={this.props.userProfile} isLoadingProfile={this.props.isLoadingProfile} />;
	}
}

function mapStateToProps(state) {
	return {
		userProfile: state.githubReducer.userProfile,
		isLoadingProfile: state.githubReducer.loadingUser
	};
}

const mapDispatchToProps = {
	getGithubUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
