interface MainFrameProps {
	children: React.ReactNode | undefined
	barStyle?: StatusBarStyle
	title?: string
	backOnPress?: () => void
	isHeader?: boolean
	isNotifications?: boolean
	isBack?: boolean
	notificationOnPress?: () => void
	isCustom?: boolean
	childrenNav?: React.ReactNode | undefined
}
