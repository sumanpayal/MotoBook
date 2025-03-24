import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { carouselStyles } from '../styles'

interface CarousalIndicatorProps {
	index: number
	selectedIndex: number
	onPressIndicator: (index: number) => void
}

const CarousalIndicator = ({ index, selectedIndex, onPressIndicator }: CarousalIndicatorProps) => {
	const { colors } = useTheme()
	const styles = carouselStyles(colors)
	const selectedStyle = index === selectedIndex ? styles.activeDot : styles.inactiveDot
	return <Pressable key={index} style={[styles.dot, selectedStyle]} onPress={() => onPressIndicator(index)} />
}

export default CarousalIndicator
