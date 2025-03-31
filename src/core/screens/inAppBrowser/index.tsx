import React, { useCallback, useEffect, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import WebView from 'react-native-webview'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'

export enum InAppBrowserType {
    privacy = "privacy",
    terms = "terms",
    aboutUs = 'aboutUs',
    helpCenter = 'helpCenter'
}

const InAppBrowser = () => {
    const navigation: any = useNavigation()
    const dispatch = useDispatch()

    const { params }: any = useRoute()
    const type: InAppBrowserType = params?.type
    const title: string = params?.title

    const [sourceURL, setsourceURL] = useState('')

    useFocusEffect(useCallback(() => {
        dispatch(setIsFullScreenLoading(true))
    }, []))

    useEffect(() => {
        switch (type) {
            case InAppBrowserType.privacy:
                setsourceURL('https://motorwash.in/assets/pdf/PrivacyPolicy.pdf')
                break
            case InAppBrowserType.terms:
                setsourceURL('https://motorwash.in/assets/pdf/TermsAndCondition.pdf')
                break
            case InAppBrowserType.helpCenter:
                setsourceURL('https://www.google.com')
                break
            default:
                setsourceURL('https://motorwash.in/home#about')
                break
        }
    }, [type])

    return (
        <MainFrame isHeader isNotifications={false} title={title} backOnPress={() => navigation.goBack()}>
            <WebView style={{ flex: 1, marginTop: scaleHeightPX(16) }} source={{ uri: sourceURL }} onLoadEnd={() => dispatch(setIsFullScreenLoading(false))} />
        </MainFrame>
    )
}

export default InAppBrowser