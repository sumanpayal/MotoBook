import { NavigationContainer } from '@react-navigation/native'
import { COLORS } from '@src/common/colors/colors'
import RootStack from '@src/core/navigation'
import React, { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen'

function App(): React.JSX.Element {
	const [hideSplash, setHideSplash] = useState<boolean>(false)

	useEffect(() => {
		setTimeout(() => {
			setHideSplash(true)
		}, 3000)
	}, [])

	return (
		<NavigationContainer theme={COLORS.light}>
			{hideSplash ? <RootStack /> : <SplashScreen />}
		</NavigationContainer>
	)
}
export default App
