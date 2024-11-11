import axios from "axios";

export const API_URL = "http://localhost:3000";

const axiosApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const getAllRecords = async () => {
  try {
    const response = await axiosApi.get(`/list`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRecordById = async (id) => {
  try {
    const response = await axiosApi.get(`/list/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createRecord = async (record) => {
  try {
    const response = await axiosApi.post(`/create`, record);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editRecord = async (record) => {
  try {
    const response = await axiosApi.patch(`/edit`, record);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
