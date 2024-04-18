import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
    name: 'username',
    initialState: {
        username: '未登录'
    },
    reducers: {
        changeUsername(state, action) {
            state.username = action.payload
        }
    }
})

export const { changeUsername } = usernameSlice.actions
export default usernameSlice.reducer