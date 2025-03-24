import { isTabletMode } from '@src/common/utils/deviceInformation'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { CAROUSAL_WIDTH } from '..'

interface CarousalItemProps {
	item: any
	index: number
	selectedIndex: number
}

const CarousalItem: React.FC<CarousalItemProps> = React.memo(({ item }) => (
	<View style={styles.container}>
		<Image source={{ uri: item?.image }} style={{ ...styles.imgStyle, backgroundColor: item?.color ?? 'transparent' }} />
	</View>
))

const styles = StyleSheet.create({
	container: {
		height: scaleHeightPX(160),
		width: scaleWidthPX(CAROUSAL_WIDTH),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15
	},
	imgStyle: {
		width: scaleWidthPX(CAROUSAL_WIDTH),
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 15
	}
})

export default CarousalItem
