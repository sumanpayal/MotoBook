import { useNavigation, useRoute } from '@react-navigation/native'
import { setupListeners } from '@reduxjs/toolkit/query'
import MainFrame from '@src/common/components/Mainframe'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import React, { useEffect, useRef, useState } from 'react'
import WebView from 'react-native-webview'
import { useDispatch } from 'react-redux'

export enum IN_APP_BROWSER_TYPE {
	TERMS = 'TERMS',
	PRIVACY = 'PRIVACY',
	HELP_CENTER = 'HELP_CENTER',
	ABOUT_US = 'ABOUT_US'
}

const InAppBrowser = () => {
	const navigation = useNavigation<any>()
	const webViewRef = useRef(null)

	const { params }: any = useRoute()

	const type: IN_APP_BROWSER_TYPE = params?.type
	const title = params?.title

	const [url, setURL] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setIsFullScreenLoading(true))
	}, [])

	useEffect(() => {
		if (type === IN_APP_BROWSER_TYPE.ABOUT_US) {
			setURL('https://motorwash.in/home#about')
		} else if (type === IN_APP_BROWSER_TYPE.HELP_CENTER) {
			setURL('https://motorwash.in/home#help')
		} else if (type === IN_APP_BROWSER_TYPE.PRIVACY) {
			setURL('https://motorwash.in/assets/pdf/PrivacyPolicy.pdf')
		}
		else {
			setURL('https://motorwash.in/assets/pdf/TermsAndCondition.pdf')
		}
	}, [type])

	return (
		<MainFrame isHeader isNotifications={false} title={title} backOnPress={() => navigation.goBack()}>
			<WebView ref={webViewRef} source={{ uri: url }} style={{ flex: 1 }} onLoadEnd={() => dispatch(setIsFullScreenLoading(false))} />
		</MainFrame>
	)
}

export default InAppBrowser
