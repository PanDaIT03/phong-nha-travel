import * as request from "~/utils/request";

export const getTour = async (path) => {
    try {
        const response = await request.get(path);

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getTourBooked = async (path, option = {}) => {
    try {
        const response = await request.get(path, {
            params: {
                q: option
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getTourByParams = async (path, option = {}) => {
    try {
        const response = await request.get(path, {
            params: {
                q: option
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getCoupon = async (path, option = {}) => {
    try {
        const response = await request.get(path, {
            params: {
                q: option
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getBookeDetailByID = async (path, option = {}) => {
    try {
        const response = await request.get(path, {
            params: {
                q: option
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getTourCategory = async (path) => {
    try {
        const q = "tourCategory";
        const response = await request.get(path, {
            params: {
                q: q
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};