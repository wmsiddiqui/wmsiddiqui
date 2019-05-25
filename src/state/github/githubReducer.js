import { BEGIN_GET_USER, COMPLETE_GET_USER } from './githubActions';

const initialState = {
	userProfile: null,
	loadingUser: false
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case BEGIN_GET_USER:
			return Object.assign({}, state, { loadingUser: true });
		case COMPLETE_GET_USER:
			return Object.assign({}, state, { loadingUser: false, userProfile: action.payload });
		default:
			return state;
	}
}

export default reducer;
