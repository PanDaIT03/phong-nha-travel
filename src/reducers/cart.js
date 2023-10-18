const initialState = {
    list: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOUR': {

            return state;
        }
    
        default:
            return state;
    }
};

export default cartReducer;