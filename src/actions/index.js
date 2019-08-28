export const toggleCheck = () => ({
    type: 'TOGGLE_CHECKBOX'
})

export const signup = () => ({
    type: 'SIGN_UP'
})

export const login = (username, password) => ({
    type: 'LOGIN',
    username,
    password
})

export const submitSignup = (username, password, email) => ({
    type: 'SUBMIT_SIGNUP',
    username,
    password,
    email
})