import { post } from "./requests";
import { API } from "./config";


export const login = (authdata) => {
	console.log('authenticate', authdata);
	return post(API + "token", authdata);
}