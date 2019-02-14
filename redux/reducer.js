const initialState = {
    colorName: 'red',
    user:'komal',
    password:''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { colorName: action.colorName };
        case 'SUBMIT_USER':
            return { user: action.user,password:action.password };
        default:
            return state;
    }
};

export default rootReducer;
