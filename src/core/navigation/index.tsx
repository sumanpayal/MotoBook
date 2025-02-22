import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomAlert from '@src/common/components/Alert'
import React from 'react'
import FullScreenLoader from '@src/common/components/FullScreenLoader'
import Demo from '../screens'
import BottomTabs from './BottomTabs'
import { useSelector } from 'react-redux'
import { RootState } from '@src/common/redux/store/store'
import AddAddress from '../screens/Address/AddAddress'
import AddressList from '../screens/Address/AddressList'

const Stack = createNativeStackNavigator()

export default function RootStack() {
	const isLoggedIn: boolean = useSelector((state: RootState) => state.root.currentUser.isLoggedIn)
	return (
		<>
			<Stack.Navigator
				initialRouteName={isLoggedIn ? 'Home' : 'Demo'}
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name='Home' component={BottomTabs} />
				<Stack.Screen name='Demo' component={Demo} />
				<Stack.Screen name='AddAddress' component={AddAddress} />
				<Stack.Screen name='AddressList' component={AddressList} />
			</Stack.Navigator>
			<CustomAlert />
			<FullScreenLoader />
		</>
	)
}
