import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8888/api/Controller"
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    
    return response.data;
};

export const post = async (path, option = {}) => {
    const response = await request.post(path, option);
    
    return response;
};

export const remove = async (path, option = {}) => {
    const response = await request.delete(path, option);
    
    return response;
};

export const update = async (path, option = {}) => {
    const response = await request.put(path, option);

    return response;
};

export default request;