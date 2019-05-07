import axios from 'axios';

export async function get(url) {
	try {
		return await axios.get(url);
	} catch (e) {
		// TODO: Error handling
		throw e;
	}
}
