import { View } from "react-native"
import { createStyles } from "./styles"
import { useTheme } from "@react-navigation/native"
import React from "react"
import CustomText from "@src/common/components/Text"
import commonFontStyles from "@src/common/styles/commonFontStyles"

export const VehicleDetails = (label: any, value: any, isColor: boolean = false, color: any = 'red') => {
    const { colors } = useTheme()
    const styles = createStyles(colors)
    return (
        <View style={styles.vehicleInner}>
            <CustomText style={{ color: colors.labelColor }}>{label}</CustomText>
            <View style={{ ...styles.vehicleImage, backgroundColor: isColor ? 'transparent' : colors.labelColor }}>{isColor && <View style={{ ...styles.vehicleColor, backgroundColor: color }} />}</View>
            <CustomText textType='bold'>{value}</CustomText>
        </View>
    )
}

export const VehicleAddress = (isCenter: boolean, label: any, value: any) => {
    const { colors } = useTheme()
    const styles = createStyles(colors)
    return (
        <View style={isCenter ? styles.vehicleCenter : styles.vehicle}>
            <CustomText lineHeight style={{ color: colors.labelColor }}>
                {label}
            </CustomText>
            <CustomText lineHeight textType='bold' style={{ ...commonFontStyles.fontSizeXL, textAlign: isCenter ? 'center' : 'left' }}>
                {value}
            </CustomText>
        </View>
    )
}