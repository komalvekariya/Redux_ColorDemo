
const CHANGE_COLOR = 'CHANGE_COLOR';
const SUBMIT_USER='SUBMIT_USER';

export const changecolor = (colorName) => {
    return {
        type: CHANGE_COLOR,
        colorName
    };
};


export const submituser = (user,password) => {
    return {
        type: SUBMIT_USER,
        user,
        password
        
    };
};