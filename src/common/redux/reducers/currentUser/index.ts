import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userData: null,
	isLoggedIn: false,
	profileData: null
} as CurrentUser

const currentUser = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.userData = action.payload
			state.isLoggedIn = action.payload == null ? false : true
		},
		setProfileData: (state, action) => {
			state.profileData = action.payload
		},
	}
})

export const { setUserData, setProfileData } = currentUser.actions

export default currentUser.reducer
