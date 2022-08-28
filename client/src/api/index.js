import axios from 'axios';

const url = 'https://memori-note.herokuapp.com/posts';

export const fetchPosts = () => {
	return axios.get(url);
};

export const createPost = (newPost) => {
	return axios.post(url, newPost);
};

export const updatePost = (id, updatedPost) => {
	return axios.patch(`${url}/${id}`, updatedPost);
};

export const deletePost = (id) => {
	return axios.delete(`${url}/${id}`);
};
