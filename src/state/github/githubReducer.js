import { BEGIN_GET_REPOS, BEGIN_GET_USER, COMPLETE_GET_REPOS, COMPLETE_GET_USER } from './githubActions';

const initialState = {
	repos: null,
	userProfile: null,
	loadingRepos: false,
	loadingUser: false
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case BEGIN_GET_REPOS:
			return Object.assign({}, state, { loadingRepos: true });
		case BEGIN_GET_USER:
			return Object.assign({}, state, { loadingUser: true });
		case COMPLETE_GET_REPOS:
			return Object.assign({}, state, { loadingRepos: false, repos: action.payload });
		case COMPLETE_GET_USER:
			return Object.assign({}, state, { loadingUser: false, userProfile: action.payload });
		default:
			return state;
	}
}

export default reducer;
