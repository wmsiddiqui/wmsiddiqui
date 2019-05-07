import { get } from '../lib/httpClient';

const GITHUB_API_URL = 'https://api.github.com';

export async function getUser(userName) {
	try {
		const result = await get(`${GITHUB_API_URL}/users/${userName}`);
		return (result && result.data) || null;
	} catch (e) {
		return null;
	}
}
