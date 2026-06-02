import API_URL from './api.js';

const analyseCvFromBackend = async ({ jobDescription, fullname, position, education, experience, skill, cv }) => {
  const formData = new FormData();

  formData.append("jobDescription", jobDescription);

  formData.append("fullname", fullname);
  formData.append("position", position);
  formData.append("education", education);
  formData.append("experience", experience);
  formData.append("skill", skill);

  formData.append("cv", cv);

  const response = await fetch(`${API_URL}/analyses`, {
    method: "POST",
    body: formData,
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson.message || "Analisis gagal");
  }

  return responseJson;
};

export default analyseCvFromBackend;