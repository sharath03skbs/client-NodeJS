import axios from "axios";

const baseApiUrl = "http://localhost:4000/v1";

export const retrieveUser = async (userId) => {
  const retrieveUsersEndpoint = `${baseApiUrl}/user/get/${userId}`;
  //Setting the app to sleep for 1 second
  await new Promise((r) => setTimeout(r, 1000));
  const { data: apiResponse } = await axios.get(retrieveUsersEndpoint);
  return apiResponse;
};

export const retrieveAllUsers = async () => {
  const getAllUsersEndpoint = `${baseApiUrl}/user/all`;
  await new Promise((r) => setTimeout(r, 1000));
  const { data: apiResponse } = await axios.get(getAllUsersEndpoint);
  return apiResponse;
};

export const createUser = async (payload) => {
  const createUserEndpoint = `${baseApiUrl}/user/add`;
  const { data: apiResponse } = await axios.post(
    `${createUserEndpoint}`,
    payload
  );
  return apiResponse;
  /**Using Fetch API 
   * const rawResponse = await fetch(createUsersEndpoint,{method : "POST" , headers:{"Content-Type" : "application/json"},body : JSON.stringify(payload)});
  return rawResponse.json();
  */
};

export const editUser = async (userId, payload) => {
  const editUserEndpoint = `${baseApiUrl}/v1/user/update/${userId}`;
  const { data: apiResponse } = await axios.put(editUserEndpoint, payload);
  return apiResponse;
};

export const removeUser = async (userId) => {
  const removeUserEndpoint = `${baseApiUrl}/user/delete/${userId}`;
  const { data: apiResponse } = await axios.delete(removeUserEndpoint);
  return apiResponse;
};
