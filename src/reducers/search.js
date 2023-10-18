const initialState = {
    list: {}
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH': {
            const newData = action.payload;
            return {
                list: newData
            };
        };
    
        default:
            return state;
    }
};

export default searchReducer;