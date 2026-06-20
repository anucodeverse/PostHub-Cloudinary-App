const BASE_URL = "https://blogapicluster-6two.onrender.com";


// ========================
// HELPER (SAFE RESPONSE HANDLER)
// ========================
const handleResponse = async (response) => {
  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Request failed");
  }

  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    throw new Error("Server returned non-JSON response: " + text);
  }

  return response.json();
};


// ========================
// POSTS
// ========================
export const getPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  return handleResponse(response);
};


export const createPost = async (postData) => {
  const formData = new FormData();

  formData.append("title", postData.title);
  formData.append("content", postData.content);
  formData.append("authorId", postData.authorId);

if (postData.image && postData.image instanceof File) {
  formData.append("image", postData.image);
}
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: formData,
  });

  return handleResponse(response);
};


export const deletePost = async (id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });

  return handleResponse(response);
};


// ========================
// USERS
// ========================
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return handleResponse(response);
};