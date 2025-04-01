import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
    return StyleSheet.create({
        main: {
            flex: 1,
            margin: scaleWidthPX(16)
        },
        item: {
            borderWidth: 1, borderRadius: 15, borderColor: colors.white, paddingVertical: scaleWidthPX(16), gap: scaleWidthPX(12)
        },
        itemTop: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: scaleWidthPX(16),
            alignItems: 'center',
            paddingHorizontal: scaleWidthPX(16)
        },
        itemBottom: {
            borderTopWidth: 1,
            borderTopColor: colors.white + '4D',
            paddingTop: scaleHeightPX(16),
            paddingHorizontal: scaleWidthPX(16)
        }
    })
}
