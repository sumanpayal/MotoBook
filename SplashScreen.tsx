import { SplashMov } from '@src/assets/mov'
import React from 'react'
import { ImageBackground } from 'react-native'

export default function SplashScreen() {
    return (
        <ImageBackground source={SplashMov} style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgb(73, 33, 40)' }} />
    )
}