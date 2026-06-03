import API_URL from "./api";

const loginByBackend = async ({ email, password }) => {
  const response = await fetch(`${API_URL}/authentications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson.message || "Login gagal");
  }

  return responseJson;
};

const registerByBackend = async ({ fullname, username, email, password }) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullname,
      username,
      email,
      password,
    }),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson.message || "Register gagal");
  }

  return responseJson;
};

const refreshAccessToken = async () => {
  // get refresh token
  const refreshToken = localStorage.getItem('refreshToken');

  const response = await fetch(`${API_URL}/authentications`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson.message);
  }

  return responseJson;
};

const logoutByBackend = async () => {
  // get refresh token
  const refreshToken = localStorage.getItem('refreshToken');

  const response = await fetch(`${API_URL}/authentications`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson.message);
  }

  return responseJson;
};

export { loginByBackend, registerByBackend, refreshAccessToken, logoutByBackend };