import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { carouselStyles } from '../styles'

interface CarousalIndicatorProps {
	index: number
	selectedIndex: number
}

const CarousalIndicator = ({ index, selectedIndex }: CarousalIndicatorProps) => {
	const { colors } = useTheme()
	const styles = carouselStyles(colors)
	const selectedStyle = index === selectedIndex ? styles.activeDot : styles.inactiveDot
	return <View key={index} style={[styles.dot, selectedStyle]} />
}

export default CarousalIndicator
