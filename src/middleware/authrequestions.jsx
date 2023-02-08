import { API } from '../middleware/config';


const getBearerToken = (token) => {
	if (token) {
		return 'Bearer ' + token;
	}
	return '';
}


export const post = async (url, data) => {
	const response = await fetch(url, {
		method: "POST",
		body: data
	});
	return await response.json();
}

export const get = async (url, token) => {
	return fetch(API + url, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: getBearerToken(token)
		}
	});
	// .then((response) => {
	// 	if (response === 401) {

	// 	}
	// });
	// return await response.json();
}

// -H 'accept: application/json' \
//   -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwiZXhwIjoxNjc1ODE0OTkxfQ.Vn4B7FqmyLYx1Tb4WAbgo4nztyXBC771xhyvffSV6wo'

// .this((response) => {
// 	if (response.status === 401) {
// 		// remove access token and go to login page to re-login
// 		window.localStorage.removeItem('access_token');
// 	}
// 	// return response.json();
// }).catch((error) => {
// 	console.log(error);
// });