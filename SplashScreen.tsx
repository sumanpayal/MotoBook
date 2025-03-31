import { Splash } from '@src/assets/lottie'
import LottieView from 'lottie-react-native'
import React from 'react'
import { View } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#492128' }}>
            <LottieView source={Splash} style={{ width: '100%', height: '100%' }} autoPlay loop />
        </View>
    )
}