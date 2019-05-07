import { getUser } from '../../dal/github';

export const BEGIN_GET_USER = 'BEGIN_GET_USER';
export const COMPLETE_GET_USER = 'COMPLETE_GET_USER';

export function beginGetUser() {
	return {
		type: BEGIN_GET_USER
	};
}

export function completeGetUser(payload) {
	return {
		type: COMPLETE_GET_USER,
		payload
	};
}

export function getGithubUser(userName) {
	return async (dispatch) => {
		dispatch(beginGetUser());
		const result = await getUser(userName);
		dispatch(completeGetUser(result));
	};
}
