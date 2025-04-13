import { Linking, Pressable, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { API_RESPONSE, PHONE_NO } from '@src/common/constants/constants'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { createStyles } from './styles'
import { getNotificationsDataFromAPI } from '@src/network/login'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import LottieView from 'lottie-react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { IdCardGIF } from '@src/assets/lottie'
import { NoRecordFound } from '@src/common/components/NoRecordFound'

const MyCleaner = () => {
    const dispatch = useDispatch()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const [myCleanerDetails, setMyCleanerDetails] = useState<any>(null)

    useFocusEffect(
        useCallback(() => {
            dispatch(setIsFullScreenLoading(false))
        }, [])
    )

    const getNotificationsList = () => {
        getNotificationsDataFromAPI((res: API_RESPONSE) => {
            dispatch(setIsFullScreenLoading(false))
            if (res.data) {
                setMyCleanerDetails(res.data)
            }
            else {
                setMyCleanerDetails([])
            }
        })
    }

    const renderItem = (label: string, value: string, isPhone: boolean = false) => {
        return (
            <View style={styles.item}>
                <View style={styles.leftView}>
                    <CustomText style={commonFontStyles.fontSizeL} lineHeight>{label}</CustomText>
                </View>
                <Pressable disabled={!isPhone} style={styles.rightView} onPress={() => isPhone && openPhone()}>
                    <CustomText style={commonFontStyles.fontSizeL} lineHeight textType='bold'>{`${value}`}</CustomText>
                </Pressable>
            </View>
        )
    }

    const openPhone = () => {
        let url = `tel:${PHONE_NO}`
        Linking.openURL(url)
    }

    const renderSeperator = () => {
        return <View style={styles.seperator} />
    }

    return (
        <MainFrame isHeader title='Cleaner Information' isNotifications={false}>
            <View style={styles.main}>
                {myCleanerDetails ? <View style={styles.inner}>
                    <View style={styles.imageBg} />
                    <View style={styles.nameOuter}>
                        <CustomText lineHeight textType='bold' style={commonFontStyles.fontSize5XL}>{'Name'}</CustomText>
                        <CustomText lineHeight textType='medium' style={commonFontStyles.fontSizeS}>{'CLEANER'}</CustomText>
                    </View>
                    <View style={styles.bottomView}>
                        {renderItem('Employee ID', '01')}
                        {renderSeperator()}
                        {renderItem('Phone', '+91 9876543212', true)}
                        {renderSeperator()}
                        {renderItem('Join Date', '01-Feb-2025')}
                    </View>
                </View> :
                    <NoRecordFound isLottieImage LottieImage={IdCardGIF} />
                }
            </View>
        </MainFrame>
    )
}

export default MyCleaner
