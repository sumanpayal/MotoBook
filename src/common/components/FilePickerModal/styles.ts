import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

const FilePickerModalStyles = (colors: any) =>
    StyleSheet.create({
        listContainer: {
            paddingHorizontal: scaleWidthPX(16)
        },
        seperator: {
            borderBottomWidth: 1,
            borderBottomColor: colors.inputDisabledBackground
        },
        itemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: scaleHeightPX(60)
        }
    })

export default FilePickerModalStyles
