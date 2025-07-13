import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import usersReducer from "./reducers/userSlice";

export default configureStore({
    reducer:{
        szamlalo:counterReducer,
        users:usersReducer
    }
});