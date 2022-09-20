import { configureStore } from "@reduxjs/toolkit";
import commentReducer from '../features/comment/commentSlice'
import friendReducer from '../features/friends/friendSlice'
import postReducer from '../features/posts/postSlice'
import userReducer from '../features/users/userSlice'
const rootReducer = {
    comment: commentReducer,
    post: postReducer,
    friend: friendReducer,
    user: userReducer
}

const store = configureStore({
    reducer: rootReducer

})

export default store