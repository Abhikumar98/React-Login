const mainReducer = (state = [], action)=>{
    switch(action.type){
        case 'TOGGLE_CHECKBOX':
            return {...state,
                isChecked: !state.isChecked
            }
        case 'SIGN_UP':
            return {...state,
                signUp: !state.signUp
            }
        case 'LOGIN':
            return {
                ...state,
                user: {
                    userName: action.username,
                    password: action.password
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                user: {}
            }
        case 'SUBMIT_SIGNUP':
            return {
                ...state,
                signup: {
                    userName: action.username,
                    password: action.password,
                    email: action.email,
                }
            }
        default:
            return state;
    }
}

export default mainReducer;