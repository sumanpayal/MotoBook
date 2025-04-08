import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
    return StyleSheet.create({
        main: {
            flex: 1,
            margin: scaleWidthPX(16)
        },
        item: {
            borderRadius: 15,
            paddingHorizontal: scaleWidthPX(20),
            backgroundColor: colors.borderColor,
            paddingVertical: scaleHeightPX(16),
            height: scaleHeightPX(300)
        },
        center: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}
