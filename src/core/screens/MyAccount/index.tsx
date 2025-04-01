import { View, Pressable, ImageBackground, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { EditSVG } from '@src/assets/svg'
import { AccountBgImage } from '@src/assets/image'
import { HeaderNavigation } from '@src/common/components/HeaderNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStyles } from './styles'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import CustomInput from '@src/common/components/Input'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomButton from '@src/common/components/Button'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RootState } from '@src/common/redux/store/store'
import { isEmpty } from 'lodash'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { isValidEmail } from '@src/common/utils/inputValidation'
import { FilePickerModal } from '@src/common/components/FilePickerModal'

const MyAccount = () => {
    const dispatch = useDispatch()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const userData: any = useSelector((state: RootState) => state.root.currentUser.userData)

    const [profileImage, setProfileImage] = useState<any>(null)

    const [openImagePicker, setOpenImagePicker] = useState(false)

    const [name, setName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')

    useFocusEffect(useCallback(() => {
        dispatch(setIsFullScreenLoading(false))
    }, []))

    const onPressEditProfileImageOnPress = () => { setOpenImagePicker(true) }

    const validateForm = () => {
        if (isEmpty(name)) {
            dispatch(setAlertData({
                isShown: true,
                type: 'error', label: 'Please enter Name'
            }))
            return false
        }
        if (isEmpty(emailAddress)) {
            dispatch(setAlertData({
                isShown: true,
                type: 'error', label: 'Please enter Email Address'
            }))
            return false
        }
        if (isValidEmail(emailAddress)) {
            dispatch(setAlertData({
                isShown: true,
                type: 'error', label: 'Please enter Name'
            }))
            return false
        }
        return true
    }

    const onPressSaveProfile = () => {
        if (validateForm()) {
            // call api
        }
    }

    return (
        <View style={styles.main}>
            <ImageBackground source={{ uri: AccountBgImage }} style={styles.image} resizeMode='contain'>
                <SafeAreaView edges={['top']} />
                <HeaderNavigation title='Edit Profile' isNotifications={false} />
            </ImageBackground>
            <Pressable style={styles.profileView} onPress={onPressEditProfileImageOnPress}>
                <Image source={{ uri: profileImage?.uri }} style={{ width: '100%', height: '100%', position: 'absolute', borderRadius: 100 }} resizeMode='cover' />
                <Pressable onPress={onPressEditProfileImageOnPress} style={styles.edit}>
                    <EditSVG />
                </Pressable>
            </Pressable>
            <KeyboardAwareScrollView>
                <View style={{ marginHorizontal: scaleWidthPX(16), gap: scaleHeightPX(24) }}>
                    <CustomInput
                        label='Name'
                        onChangeText={setName}
                        placeholder='Enter Name'
                        value={name}
                        isRequired={false}
                    />
                    <CustomInput
                        label='Email Address'
                        onChangeText={setEmailAddress}
                        placeholder='Enter Email Address'
                        value={emailAddress}
                        isRequired={false}
                        keyboardType='email-address'
                    />
                    <CustomInput
                        label='Phone No'
                        onChangeText={(text: string) => {

                        }}
                        keyboardType='phone-pad' maxLength={10}
                        placeholder='Enter Phone No'
                        value={userData?.phoneNumber}
                        isRequired={false}
                        editable={false}
                    />
                    <CustomButton customLabelStyles={commonFontStyles.fontBold} onPress={onPressSaveProfile} title='Save' />
                </View>
            </KeyboardAwareScrollView>
            <FilePickerModal visible={openImagePicker} onClose={() => { setOpenImagePicker(false) }} onSelect={(image: any) => setProfileImage(image)} />
        </View>
    )
}

export default MyAccount
