import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomAlert from '@src/common/components/Alert'
import React from 'react'
import FullScreenLoader from '@src/common/components/FullScreenLoader'
import BottomTabs from './BottomTabs'
import AddAddress from '../screens/Address/AddAddress'
import AddressList from '../screens/Address/AddressList'
import SelectBrand from '../screens/SelectBrand'
import VehicleForm from '../screens/VehicleForm'
import MySubscriptions from '../screens/MySubscriptions'
import MySubscriptionDetails from '../screens/MySubscriptionDetails'
import Login from '../screens/Login'
import VerifyOTP from '../screens/VeriftOTP'
import { useSelector } from 'react-redux'
import { RootState } from '@src/common/redux/store/store'
import Welcome from '../screens/Welcome'
import RequestSubmitted from '../screens/RequestSubmitted'
import MyCarDetails from '../screens/MyCarDetails'
import InAppBrowser from '../screens/inAppBrowser'

const Stack = createNativeStackNavigator()

export default function RootStack() {
	const userData: any = useSelector((state: RootState) => state.root.currentUser.userData)
	return (
		<>
			<Stack.Navigator
				initialRouteName={userData?._id ? 'PostLogin' : 'PreLogin'}
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name='PostLogin' component={PostLoginStack} />
				<Stack.Screen name='PreLogin' component={PreLoginStack} />
			</Stack.Navigator>
			<CustomAlert />
			<FullScreenLoader />
		</>
	)
}

const PreLoginStack = () => {
	return (
		<Stack.Navigator
			initialRouteName={'Welcome'}
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='Welcome' component={Welcome} />
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='VerifyOTP' component={VerifyOTP} />
			<Stack.Screen name='InAppBrowser' component={InAppBrowser} />
		</Stack.Navigator>
	)
}

export const PostLoginStack = () => {
	return (
		<Stack.Navigator
			initialRouteName={'Home'}
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name='Home' component={BottomTabs} />
			<Stack.Screen name='AddAddress' component={AddAddress} />
			<Stack.Screen name='AddressList' component={AddressList} />
			<Stack.Screen name='SelectBrand' component={SelectBrand} />
			<Stack.Screen name='VehicleForm' component={VehicleForm} />
			<Stack.Screen name='MyCars' component={MySubscriptions} />
			<Stack.Screen name='MySubscriptionDetails' component={MySubscriptionDetails} />
			<Stack.Screen name='RequestSubmitted' component={RequestSubmitted} />
			<Stack.Screen name='MyCarDetails' component={MyCarDetails} />
			<Stack.Screen name='InAppBrowser' component={InAppBrowser} />
		</Stack.Navigator>
	)
}
