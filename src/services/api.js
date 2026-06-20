// ✅ Production backend URL
const API = "https://blogapicluster-6two.onrender.com/api";


// ========================
// GET ALL POSTS
// ========================
export const getPosts = async () => {
  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};


// ========================
// CREATE POST
// ========================
export const createPost = async (postData) => {
  const formData = new FormData();

  formData.append("title", postData.title);
  formData.append("content", postData.content);
  formData.append("authorId", postData.authorId);

  if (postData.image) {
    formData.append("image", postData.image);
  }

  const response = await fetch(API, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create post");
  }

  return data;
};


// ========================
// DELETE POST
// ========================
export const deletePost = async (id) => {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete post");
  }

  return data;
};


// ========================
// GET USERS
// ========================
export const getUsers = async () => {
  const response = await fetch(`${API}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};