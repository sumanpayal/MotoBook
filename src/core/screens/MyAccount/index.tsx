import { View, Pressable, ImageBackground, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect, useTheme, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { EditSVG } from '@src/assets/svg'
import { AccountBgImage, ProfileImage } from '@src/assets/image'
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
import { setAlertData } from '@src/common/redux/reducers/alert'
import { isValidEmail } from '@src/common/utils/inputValidation'
import { FilePickerModal } from '@src/common/components/FilePickerModal'
import { API_RESPONSE } from '@src/common/constants/constants'
import { getUserProfileDetails, postUpdateUserDetails } from '@src/network/login'
import { setProfileData } from '@src/common/redux/reducers/currentUser'
import { isEmpty } from 'lodash'

const MyAccount = () => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const profileData: any = useSelector((state: RootState) => state.root.currentUser.profileData)

    const [profileImage, setProfileImage] = useState<any>({
        base64: profileData?.image
    })

    const [openImagePicker, setOpenImagePicker] = useState(false)

    const [fullName, setFullName] = useState(profileData?.fullName ?? '')
    const [emailAddress, setEmailAddress] = useState(profileData?.email ?? '')

    useFocusEffect(useCallback(() => {
        dispatch(setIsFullScreenLoading(false))
        getUserDetails()
    }, []))

    const getUserDetails = () => {
        getUserProfileDetails((res: API_RESPONSE) => {
            if (res?.data) {
                dispatch(setProfileData(res?.data))
            }
        })
    }

    const onPressEditProfileImageOnPress = () => { setOpenImagePicker(true) }

    const validateForm = () => {
        if (isEmpty(fullName)) {
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
        if (!isValidEmail(emailAddress)) {
            dispatch(setAlertData({
                isShown: true,
                type: 'error', label: 'Please enter valid Email address'
            }))
            return false
        }
        return true
    }

    const onPressSaveProfile = () => {
        if (validateForm()) {
            // call api
            dispatch(setIsFullScreenLoading(true))
            const params = {
                "email": emailAddress,
                "fullName": fullName,
                "image": profileImage?.base64 ? profileImage?.base64 : profileData?.image ? profileData?.image : ""
            }
            postUpdateUserDetails({}, params, (res: API_RESPONSE) => {
                dispatch(setIsFullScreenLoading(false))
                if (res?.data) {
                    dispatch(setAlertData({
                        isShown: true,
                        type: 'success', label: res?.data
                    }))
                    getUserDetails()
                    setTimeout(() => {
                        navigation.goBack()
                    }, 500)
                }
                else {
                    dispatch(setAlertData({
                        isShown: true,
                        type: 'error', label: res?.error
                    }))
                }
            })
        }
    }

    const getImage = () => {
        return profileImage?.base64 ? 'data:image/png;base64,' + profileImage?.base64 : profileData?.image ? 'data:image/png;base64,' + profileData?.image : ProfileImage
    }

    return (
        <View style={styles.main}>
            <ImageBackground source={{ uri: AccountBgImage }} style={styles.image} resizeMode='contain'>
                <SafeAreaView edges={['top']} />
                <HeaderNavigation title='Edit Profile' isNotifications={false} />
            </ImageBackground>
            <Pressable style={styles.profileView} onPress={onPressEditProfileImageOnPress}>
                <Image source={{ uri: getImage() }} style={{ width: '100%', height: '100%', position: 'absolute', borderRadius: 100 }} resizeMode='cover' />
                <Pressable onPress={onPressEditProfileImageOnPress} style={styles.edit}>
                    <EditSVG />
                </Pressable>
            </Pressable>
            <KeyboardAwareScrollView>
                <View style={{ marginHorizontal: scaleWidthPX(16), gap: scaleHeightPX(24) }}>
                    <CustomInput
                        label='Name'
                        onChangeText={setFullName}
                        placeholder='Enter Name'
                        value={fullName}
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
                        value={profileData?.phoneNumber}
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
