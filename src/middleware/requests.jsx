

export const post = async (url, data) => {
	const response = await fetch(url, {
		method: "POST",
		body: data
	});
	return await response.json();
}

export const get = async (url) => {
	const response = await fetch(url);
	return await response.json();
}