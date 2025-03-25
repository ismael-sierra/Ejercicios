const apiUrl = "http://localhost:3000/users";

export async function getUsers() {
  const response = await fetch(apiUrl);
  return await response.json();
}

export async function getUserById(id) {
  const response = await fetch(`${apiUrl}/${id}/profile`);
  return await response.json();
}

export async function createUser(user) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
}

export async function updateUser(id, user) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
}

export async function deleteUser(id) {
  const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  return await response.json();
}
