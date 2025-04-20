import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
    return StyleSheet.create({
        main: {
            flex: 1,
            marginHorizontal: scaleWidthPX(16),
            marginTop: scaleHeightPX(16)
        },
        item: {
            borderRadius: 15,
            paddingHorizontal: scaleWidthPX(20),
            backgroundColor: colors.borderColor,
            paddingVertical: scaleHeightPX(20),
            gap: scaleHeightPX(2)
        },
        center: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}
