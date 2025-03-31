import { Image, View } from "react-native"
import { createStyles } from "./styles"
import { useTheme } from "@react-navigation/native"
import React from "react"
import CustomText from "@src/common/components/Text"
import commonFontStyles from "@src/common/styles/commonFontStyles"
import { BASE_URL } from "@src/network/apiClient"

interface VehicleDetailsProps {
    label: any;
    value: any;
    isColor?: boolean;
    color?: any
    image?: any
}

export const VehicleDetails = (props: VehicleDetailsProps) => {
    const { label, value, color = 'red', isColor = false, image } = props
    const { colors } = useTheme()
    const styles = createStyles(colors)
    return (
        <View style={styles.vehicleInner}>
            <CustomText style={{ color: colors.labelColor }}>{label}</CustomText>
            {isColor ? <View style={styles.vehicleImage}>
                <View style={{ ...styles.vehicleColor, backgroundColor: color }} />
            </View> : <Image source={{ uri: `${BASE_URL}/${image}` }} style={styles.vehicleImage} resizeMode={'center'} />}
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