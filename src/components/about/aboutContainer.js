import React from 'react';
import { connect } from 'react-redux';
import AboutView from './about';
import { getGithubUser } from '../../state/github/githubActions';

class AboutContainer extends React.Component {
	componentDidMount() {
		this.props.getGithubUser('wmsiddiqui');
	}

	render() {
		return <AboutView userProfile={this.props.userProfile} />;
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
