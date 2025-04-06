import { View, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getAddressListAPI } from '@src/network/address'
import { API_RESPONSE } from '@src/common/constants/constants'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { NoNotificationsGIF } from '@src/assets/lottie'
import { createStyles } from './styles'
import { getNotificationsDataFromAPI } from '@src/network/login'

const Notifications = () => {
    const dispatch = useDispatch()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const [allNotificationsData, setAllNotificationsData] = useState<any[]>([])

    useFocusEffect(
        useCallback(() => {
            dispatch(setIsFullScreenLoading(true))
            getNotificationsList()
        }, [])
    )

    const getNotificationsList = () => {
        getNotificationsDataFromAPI((res: API_RESPONSE) => {
            dispatch(setIsFullScreenLoading(false))
            if (res.data) {
                setAllNotificationsData(res.data)
            }
            else {
                setAllNotificationsData([])
            }
        })
    }

    const renderNotificationItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.item}>
                <CustomText style={{ ...commonFontStyles.fontSizeL, color: colors.primary }}>{`${`label`}: `}</CustomText>
                <CustomText style={commonFontStyles.fontSizeXL}>{`value`}</CustomText>
            </View>
        )
    }

    return (
        <MainFrame isHeader title='Notification Center' isNotifications={false}>
            <View style={styles.main}>
                <FlatList contentContainerStyle={allNotificationsData.length === 0 && { flex: 1, justifyContent: 'center', alignItems: 'center' }} data={allNotificationsData} renderItem={renderNotificationItem} keyExtractor={(item) => item?._id} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16) }} />} ListEmptyComponent={<NoRecordFound noRecordText='No Notifications Available!' isLottieImage LottieImage={NoNotificationsGIF} />} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} showsVerticalScrollIndicator={false} />
            </View>
        </MainFrame>
    )
}

export default Notifications
