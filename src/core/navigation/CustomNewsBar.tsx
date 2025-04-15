import { useTheme } from '@react-navigation/native'
import { NewsSVG } from '@src/assets/svg'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { View } from 'react-native'
import { createStyles } from './styles'

const CustomNewsBar = () => {
    const { colors } = useTheme()
    const styles = createStyles(colors)
    return (
        <View style={styles.tabBar}>
            <View style={styles.centralButtonContainer}>
                <NewsSVG width={scaleWidthPX(40)} height={scaleHeightPX(40)} />
            </View>
        </View>
    )
}

export default CustomNewsBar
