import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack, ReferStack, SubscriptionsStack, AccountStack, NewsStack } from './HomeStack'
import CustomText from '@src/common/components/Text'
import { useTheme } from '@react-navigation/native'
import { createStyles } from './styles'
import { HomeSVG } from '@src/assets/SvgJSX/Home'
import { SubscriptionSVG } from '@src/assets/SvgJSX/Subscription'
import { AccountSVG } from '@src/assets/SvgJSX/Account'
import { ReferAFriendSVG } from '@src/assets/SvgJSX/ReferAFriend'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { GradientSVG, NewsSVG } from '@src/assets/svg'
import CustomNewsBar from './CustomNewsBar'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
			<Tab.Navigator initialRouteName='HomeStack' backBehavior='history' screenOptions={{ headerShown: false, tabBarStyle: styles.tabBarStyle, tabBarHideOnKeyboard: true, tabBarIconStyle: { marginTop: scaleHeightPX(12), marginBottom: scaleHeightPX(4) }, tabBarLabelStyle: styles.textStyle }}>
				<Tab.Screen
					name='HomeStack'
					component={HomeStack}
					options={{
						headerShown: false,
						tabBarLabelPosition: 'below-icon',
						tabBarItemStyle: { marginLeft: scaleWidthPX(10), height: scaleHeightPX(70), borderBottomColor: colors.primary, borderBottomWidth: scaleHeightPX(0) },
						tabBarIcon: ({ focused }) => <TabIcon focused={focused} normalImage={<HomeSVG strokeColor={`${colors.white}`} opacity='0.3' />} focusedImage={<HomeSVG strokeColor={`${colors.primary}`} opacity='1' />} />,
						tabBarLabel: ({ focused }) => <TabLabel focused={focused} title='HOME' />
					}}
				/>
				<Tab.Screen
					name='Subscriptions'
					component={SubscriptionsStack}
					options={{
						headerShown: false,
						tabBarLabelPosition: 'below-icon',
						tabBarItemStyle: { height: scaleHeightPX(70), borderBottomColor: colors.primary, borderBottomWidth: scaleHeightPX(0) },
						tabBarIcon: ({ focused }) => <TabIcon focused={focused} normalImage={<SubscriptionSVG />} focusedImage={<SubscriptionSVG strokeColor={`${colors.primary}`} opacity='1' />} />,
						tabBarLabel: ({ focused }) => <TabLabel focused={focused} title='SUBSCRIPTION' />
					}}
				/>
				<Tab.Screen
					name='News'
					component={NewsStack}
					options={{
						headerShown: false,
						tabBarLabelPosition: 'below-icon',
						tabBarItemStyle: { marginRight: scaleWidthPX(10), height: scaleHeightPX(70), borderBottomColor: colors.primary, borderBottomWidth: scaleHeightPX(0) },
						tabBarIcon: () => <CustomNewsBar />,
						tabBarLabel: ({ focused }) => <TabLabel focused={focused} title='NEWS' />
					}}
				/>
				<Tab.Screen
					name='Refer'
					component={ReferStack}
					options={{
						headerShown: false,
						tabBarLabelPosition: 'below-icon',
						tabBarItemStyle: { height: scaleHeightPX(70), borderBottomColor: colors.primary, borderBottomWidth: scaleHeightPX(0) },
						tabBarIcon: ({ focused }) => <TabIcon focused={focused} normalImage={<ReferAFriendSVG />} focusedImage={<ReferAFriendSVG strokeColor={`${colors.primary}`} />} />,
						tabBarLabel: ({ focused }) => <TabLabel focused={focused} title='REFER A FRIEND' />
					}}
				/>
				<Tab.Screen
					name='Account'
					component={AccountStack}
					options={{
						headerShown: false,
						tabBarLabelPosition: 'below-icon',
						tabBarItemStyle: { marginRight: scaleWidthPX(10), height: scaleHeightPX(70), borderBottomColor: colors.primary, borderBottomWidth: scaleHeightPX(0) },
						tabBarIcon: ({ focused }) => <TabIcon focused={focused} normalImage={<AccountSVG />} focusedImage={<AccountSVG strokeColor={`${colors.primary}`} />} />,
						tabBarLabel: ({ focused }) => <TabLabel focused={focused} title='ACCOUNT' />
					}}
				/>
			</Tab.Navigator>
			<View style={{ height: scaleHeightPX(2), left: 0, right: 0, borderRadius: 100, position: 'absolute', bottom: scaleHeightPX(72) }}>
				<GradientSVG />
			</View>
		</View>
	)
}

export default BottomTabs

const TabIcon = React.memo((props: any) => {
	const { focused, normalImage, focusedImage } = props
	return <View>{focused ? focusedImage : normalImage}</View>
})

const TabLabel = React.memo((props: any) => {
	const { focused, title } = props
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={styles.labelView}>
			<CustomText textType='medium' style={{ ...styles.textStyle, color: focused ? colors.primary : `${colors.white}4D` }}>
				{title}
			</CustomText>
		</View>
	)
})
