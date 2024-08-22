import axios from "axios";

const baseApiUrl = "http://localhost:4000";

export const createUser = async (payload) => {
  const createUserEndpoint = `${baseApiUrl}/v1/user/add`;
  const { data: apiResponse } = await axios.post(
    `${createUserEndpoint}`,
    payload
  );
  return apiResponse;
};

export const retrieveUser = async (userId) => {
  const retrieveUsersEndpoint = `${baseApiUrl}/v1/user/get/${userId}`;
  const { data: apiResponse } = await axios.get(`${retrieveUsersEndpoint}`);
  return apiResponse;
};

export const retrieveAllUsers = async () => {
  const getAllUsersEndpoint = `${baseApiUrl}/v1/user/all`;
  const { data: apiResponse } = await axios.get(`${getAllUsersEndpoint}`);
  return apiResponse;
};
