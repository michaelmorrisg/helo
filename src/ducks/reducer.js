const initialState = {
    username: '',
    id: '',
    profilePicture: ''
}

const UPDATE_USER = "UPDATE_USER"
const LOGOUT_USER = "LOGOUT_USER"

export default function reducer(state=initialState,action){
    switch(action.type){
        case UPDATE_USER: 
            return Object.assign({}, state, {username: action.payload.username, 
                                            id: action.payload.id, 
                                            profilePicture: action.payload.profilePicture})
        
        case LOGOUT_USER:
                return Object.assign({},state,{username: '', id: '', profilePicture: ''})
        default: return state
    }
}
export function updateUserInfo(id,username,profilePicture){
    return {
        type: UPDATE_USER,
        payload: {id,username,profilePicture}
    }
}
export function logoutUser(username,id,profilePicture){
    return {
        type: LOGOUT_USER,
        payload: {username,id,profilePicture}
    }
}