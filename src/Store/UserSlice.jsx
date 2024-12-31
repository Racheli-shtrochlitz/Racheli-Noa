import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    email: "",
    password: ""
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
        }
    }

})

export const {updatePassword,createUser} = userSlice.actions
export default userSlice.reducer