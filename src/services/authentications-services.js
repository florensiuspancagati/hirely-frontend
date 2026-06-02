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

export default loginByBackend;