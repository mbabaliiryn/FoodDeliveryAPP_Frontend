import { AuthActionType } from '../actions/AuthAction';
import axios from 'axios';

const authState = {
    isLoggedIn: false,
    user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        jwttoken: "",
        authorities: [],
    }
}


const  getAuthState = () => {
    const auth = localStorage.getItem('auth');
    try {
        const authobj = JSON.parse(auth);
        const { expires_at, jwttoken } = authobj.user;
        if(new Date(expires_at) > new Date()) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${jwttoken}`;
            return authobj
        }
        return authState;

    } catch (error) {
        return authState;

    }
};
// console.log(getAuthState());
const newAuth = getAuthState();

const authReducer = (state = newAuth, action) => {
    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            return {
                ...state, 
                isLoggedIn: true,
                user: action.payload
            }
            // const newAuthState = {
            //     isLoggedIn: true,
            //     user: action.payload,

            // }
            // axios.defaults.headers.common['Authorization'] = `Bearer ${ action.payload.jwttoken}`;
            // localStorage.setItem('auth', JSON.stringify(newAuthState));
            // return newAuthState;

            case AuthActionType.LOGOUT_SUCCESS:
                localStorage.removeItem('auth');
                return authState;

            case AuthActionType.LOGOUT_FAIL:
                localStorage.removeItem('auth');
            return authState;

            case AuthActionType.REGISTER_FAIL:
                return state;
                default:
                    return state;
            case AuthActionType.LOGIN_SUCCESS:
                const loginAuthState = {
                    isLoggedIn: true,
                    user: action.payload,
                }
                axios.defaults.headers.common['Authorization'] = `Bearer ${ action.payload.jwttoken}`;
                localStorage.setItem('auth', JSON.stringify(loginAuthState));
            return loginAuthState;
            case AuthActionType.LOGIN_FAIL:
            return authState;

    }
}


export default authReducer;