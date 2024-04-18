import {configureStore} from '@reduxjs/toolkit'
import counterReducer  from "./modulus/counter"
import usernameReducer from "./modulus/username"

const store = configureStore({
    reducer:{
        counter:counterReducer,
        username:usernameReducer
    }
})

export default store
//1.配置store的整体逻辑（使用hook）