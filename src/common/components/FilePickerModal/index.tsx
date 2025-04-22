import CustomText from '@components/Text'
import { useTheme } from '@react-navigation/native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { Alert, FlatList, Pressable, View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import BottomModal from '../BottomModal'
import commonFontStyles from '@src/common/styles/commonFontStyles'

interface FilePickerModalProps {
    visible: boolean
    onClose: () => void
    onSelect?: (img: any) => void
}

export const FilePickerModal = (props: FilePickerModalProps) => {
    const { visible, onClose, onSelect } = props

    const { colors } = useTheme()

    const imgPickerOptions = [
        {
            id: 2,
            text: 'Take Photo'
        },
        {
            id: 1,
            text: 'Choose from Photo Library'
        },
    ]

    const takePhoto = async () => {
        const result: any = await launchCamera({
            mediaType: 'photo',
            quality: 1,
            includeBase64: true
        });
        if (result?.errorCode) {
            if (result?.errorCode === 'camera_unavailable') {
                Alert.alert('', 'Camera not available')
                return
            }
            return
        }
        if (result?.assets?.length > 0) {
            uploadImage(result?.assets[0])
        }
    }

    const chooseFromLibrary = async () => {
        const result: any = await launchImageLibrary({
            mediaType: 'photo',
            quality: 1,
            selectionLimit: 1,
            includeBase64: true
        });
        if (result?.errorCode) {
            return
        }
        if (result?.assets?.length > 0) {
            uploadImage(result?.assets[0])
        }
    }

    const uploadImage = (img: any) => {
        onSelect && onSelect(img)
        onClose()
    }

    const onImgOptionPress = (optId: number) => {
        switch (optId) {
            case 1:
                chooseFromLibrary()
                break
            case 2:
                takePhoto()
                break
            default:
                onClose()
                break
        }
    }

    const renderItem = ({ item }: any) => {
        return (
            <Pressable onPress={() => onImgOptionPress(item?.id)} style={{ flex: 1, height: scaleHeightPX(50), alignItems: 'center', flexDirection: 'row', gap: scaleWidthPX(16) }}>
                <CustomText textType='medium' style={commonFontStyles.fontSizeL}>{item?.text}</CustomText>
            </Pressable>
        )
    }

    return (
        <BottomModal visible={visible} onDrop={onClose} isHeader headerTitle={''} headerCloseOnPress={onClose}>
            <FlatList data={imgPickerOptions} keyExtractor={(item) => `img-option-${item?.id}`} renderItem={renderItem} style={{ marginHorizontal: scaleWidthPX(16) }} ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: colors.white + '4D' }} />} />
        </BottomModal>
    )
}
