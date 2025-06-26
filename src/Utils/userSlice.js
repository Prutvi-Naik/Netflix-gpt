import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:"user",
    reducers: {
        addUser: (state, action) => {
            return action.payload; // Updates state with payload (e.g., user data)
        },
        removeUser: () => {
            return null; // Resets state to null
        }
    }
});

// Corrected export (changed 'removeUserUser' to 'removeUser'):
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;