import * as request from "~/utils/request";

export const insertCart = async (path, data) => {
    try {
        const response = await request.post(path, data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const applyCoupon = async (path, data) => {
    try {
        const response = await request.post(path, data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const insertCheckout = async (path, data) => {
    try {
        const response = await request.post(path, data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};