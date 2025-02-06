interface MainFrameProps {
	children: React.ReactNode | undefined
	barStyle?: StatusBarStyle
	title?: string
	backOnPress?: () => void
	isHeader?: boolean
}
