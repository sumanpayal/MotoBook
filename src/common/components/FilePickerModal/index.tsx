import CustomText from '@components/Text'
import { useTheme } from '@react-navigation/native'
import { requestCameraPermission, requestLibraryPermission } from '@src/common/utils/permissions'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import BottomModal from '../BottomModal'
import FilePickerModalStyles from './styles'

const cropperHeight = scaleHeightPX(576)
const cropperWidth = scaleWidthPX(430)

interface FilePickerModalProps {
    visible: boolean
    onClose: () => void
    onSelect?: (img: any) => void
}

const FilePickerModal = (props: FilePickerModalProps) => {
    const { visible, onClose } = props

    const { colors } = useTheme()
    const styles = FilePickerModalStyles(colors)

    const dispatch = useDispatch()

    const imgPickerOptions = [
        {
            id: 1,
            text: 'Choose from Photo Library'
        },
        {
            id: 2,
            text: 'Take Photo'
        }
    ]

    const showAlert = (type: any = 'success', label: string = '') => {
        dispatch(setAlertData({ isShown: true, type: type, label: label }))
    }

    const takePhoto = async () => {
        const hasPermission = await requestCameraPermission()
        if (hasPermission) {
            ImagePicker.openCamera({
                cropping: false,
                width: cropperWidth,
                height: cropperHeight,
                includeBase64: true,
                forceJpg: true,
                mediaType: 'photo'
            })
                .then(async (image) => {
                    uploadImage(image)
                })
                .catch((error: any) => {
                    onClose()
                    console.error(error)
                })
        } else {
            showAlert('error', 'Camera permission is denied')
        }

        const chooseFromLibrary = async () => {
            const hasPermission = await requestLibraryPermission()
            if (hasPermission) {
                ImagePicker.openPicker({
                    cropping: false,
                    width: cropperWidth,
                    height: cropperHeight,
                    includeBase64: true,
                    forceJpg: true,
                    mediaType: 'photo'
                })
                    .then((image) => {
                        uploadImage(image)
                    })
                    .catch((error: any) => {
                        onClose()
                        console.error(error)
                    })
            } else {
                showAlert('error', 'Library permission is denied')
            }
        }

        const uploadImage = (img: any) => {
            console.log(img);
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
                <Pressable onPress={() => onImgOptionPress(item?.id)} style={styles.itemContainer}>
                    <CustomText style={{ color: colors.primary }}>{item?.text}</CustomText>
                </Pressable>
            )
        }

        return (
            <BottomModal visible={visible} onDrop={onClose} isHeader headerTitle={''} headerCloseOnPress={onClose}>
                <FlatList data={imgPickerOptions} keyExtractor={(item) => `img-option-${item?.id}`} renderItem={renderItem} style={styles.listContainer} ItemSeparatorComponent={() => <View style={styles.seperator} />} />
            </BottomModal>
        )
    }
