import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createUser(userData) {
  const {token, ...user} = collectionClient("/signup", {
		body: userData,
	});

	sessionStorage.setItem(tokenKey, token)
	return user;
}

export async function getUser() {
	const {token, ...user} = collectionClient("/profile");

	return user;
}

export async function updateUser(data) {
	const {token, ...user} = collectionClient("/profile", {
		body: data,
		method: "PATCH",
	});

  sessionStorage.setItem(tokenKey, token);
	return user;
}