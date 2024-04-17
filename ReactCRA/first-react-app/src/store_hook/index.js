import {configureStore} from '@reduxjs/toolkit'
import counterReducer  from "./modulus/counter"

const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default store
//1.配置store的整体逻辑（使用hook）