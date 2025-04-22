import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userData: null,
	isLoggedIn: false,
	profileData: null,
	isAddressSet: -1
} as CurrentUser

const currentUser = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.userData = action.payload
			state.isLoggedIn = action.payload == null ? false : true
			state.profileData = null
		},
		setProfileData: (state, action) => {
			state.profileData = action.payload
		},
		setIsAddressSet: (state, action) => {
			state.isAddressSet = action.payload
		}
	}
})

export const { setUserData, setProfileData, setIsAddressSet } = currentUser.actions

export default currentUser.reducer
