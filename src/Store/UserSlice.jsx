import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    name: "?",
    email: "example@example.com",
    password: "123456"
}

const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        updatePassword: (state, actions) => {
            state.password = actions.payload    
        },
        createUser: (state, actions) => {
            state.email=actions.payload.email
            state.password =actions.payload.password
            state.name = actions.payload.name
        }
    }

})

export const {updatePassword,createUser} = userSlice.actions
export default userSlice.reducer