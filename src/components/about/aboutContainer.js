import React from 'react';
import { connect } from 'react-redux';
import AboutView from './aboutView';
import { getGithubUser } from '../../state/github/githubActions';

class AboutContainer extends React.Component {
	componentDidMount() {
		if (!this.props.userProfile) {
			this.props.getGithubUser('wmsiddiqui');
		}
	}

	render() {
		return <AboutView userProfile={this.props.userProfile} isLoadingProfile={this.props.isLoadingProfile} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
