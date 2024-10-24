import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts"; // example API

// Fetch all posts
export const fetchPosts = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

// Fetch post by ID
export const fetchPostById = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

// Add a new post
export const addPost = async (postData) => {
  const { data } = await axios.post(API_URL, postData);
  return data;
};

// Update a post by ID
export const updatePost = async ({ postId, postData }) => {
  const { data } = await axios.put(`${API_URL}/${postId}`, postData);
  return data;
};

// Delete a post by ID
export const deletePost = async (postId) => {
  await axios.delete(`${API_URL}/${postId}`);
};
