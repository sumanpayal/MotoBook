interface HeaderNavigationProps {
	title?: string
	isBack?: boolean
	backOnPress?: () => void
	isNotifications?: boolean
	isCustom?: boolean
	children?: React.ReactNode | undefined
}
