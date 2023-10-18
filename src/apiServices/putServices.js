import * as request from "~/utils/request";

export const updateTourBookDetail = async (path, option = {}) => {
    try {
        const response = await request.update(path, option);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};