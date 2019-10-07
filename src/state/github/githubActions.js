import { getRepos, getUser } from '../../dal/github';

export const BEGIN_GET_REPOS = 'BEGIN_GET_REPOS';
export const BEGIN_GET_USER = 'BEGIN_GET_USER';
export const COMPLETE_GET_REPOS = 'COMPLETE_GET_REPOS';
export const COMPLETE_GET_USER = 'COMPLETE_GET_USER';

export function beginGetRepos() {
	return {
		type: BEGIN_GET_REPOS
	};
}

export function beginGetUser() {
	return {
		type: BEGIN_GET_USER
	};
}

export function completeGetRepos(payload) {
	return {
		type: COMPLETE_GET_REPOS,
		payload
	};
}

export function completeGetUser(payload) {
	return {
		type: COMPLETE_GET_USER,
		payload
	};
}

export function getGithubRepos(userName) {
	return async (dispatch) => {
		dispatch(beginGetRepos());
		const result = await getRepos(userName);
		dispatch(completeGetRepos(result));
	};
}

export function getGithubUser(userName) {
	return async (dispatch) => {
		dispatch(beginGetUser());
		const result = await getUser(userName);
		dispatch(completeGetUser(result));
	};
}
