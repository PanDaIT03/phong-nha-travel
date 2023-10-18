import * as request from "~/utils/request";

const headers = { 
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar'
};

export const deleteCartByID = async (path, ID) => {
    try {
        const response = await request.remove(path, {
            params: {
                q: ID
            }
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteTourBooked = async (path, ID) => {
    try {
        const response = await request.remove(path, {
            params: {
                q: ID
            }
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};