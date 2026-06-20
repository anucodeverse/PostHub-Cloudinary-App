const BASE_URL = "https://blogapicluster-6two.onrender.com";


// ========================
// POSTS
// ========================
export const getPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);

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

  const response = await fetch(`${BASE_URL}/posts`, {
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
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete post");
  }

  return data;
};


// ========================
// USERS
// ========================
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};