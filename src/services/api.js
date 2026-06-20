const API_URL = "http://localhost:5000/posts";

export const getPosts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const createPost = async (postData) => {
  const formData = new FormData();

  formData.append("title", postData.title);
  formData.append("content", postData.content);
  formData.append("authorId", postData.authorId);

  if (postData.image) {
    formData.append("image", postData.image);
  }

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create post");
  }

  return data;
};

export const deletePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete post");
  }

  return data;
};

export const getUsers = async () => {
  const response = await fetch("http://localhost:5000/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};