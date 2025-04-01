import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
    return StyleSheet.create({
        main: {
            flex: 1,
            backgroundColor: colors.backgroundColor
        },
        image: {
            width: '100%',
            height: scaleHeightPX(224)
        },
        profileView: {
            width: scaleWidthPX(126),
            height: scaleWidthPX(126),
            borderRadius: 100,
            backgroundColor: colors.inputBackground,
            alignSelf: 'center',
            marginTop: -scaleHeightPX(70),
            marginBottom: scaleHeightPX(16),
            justifyContent: 'center',
            alignItems: 'center'
        },
        edit: {
            borderRadius: 100,
            width: scaleWidthPX(30),
            height: scaleWidthPX(30),
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}
