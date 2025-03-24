interface HeaderNavigationProps {
	title?: string
	isBack?: boolean
	backOnPress?: () => void
	isNotifications?: boolean
	notificationOnPress?: () => void
	isCustom?: boolean
	children?: React.ReactNode | undefined
}
