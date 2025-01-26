// import apiClient from './index.js'
import apiClient from "./index.js";

const handleError = (error) => {
  console.error("Error:", error.response?.data || error.message);
  return { error: error.message };
};

const getReq = async (path) => {
  try {
    const response = await apiClient.get(path);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};


const getReqById = async (path ,id) => {
  try {
    const response = await apiClient.get(`/api/${path}/${id}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }

}

const postReq = async (data) => {
  try {
    const response = await apiClient.post(path , data);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

const deleteReq = async (path) => {
  try {
    const response = await apiClient.delete(path);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

const putReq = async (path, data) => {
  try {
    const response = await apiClient.put(path, data);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export { getReq, getReqById, postReq, deleteReq, putReq };
