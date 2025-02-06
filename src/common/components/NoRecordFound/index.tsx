import React from 'react'
import { View } from 'react-native'
import CustomText from '../Text'
import { NoRecordFoundProps } from './types'
import { useSelector } from 'react-redux'
import { RootState } from '@src/common/redux/store/store'
import { styles } from './styles'

export const NoRecordFound: React.FC<NoRecordFoundProps> = (props) => {
	const { containerStyles, noRecordTextStyles, noRecordText = 'No Records Found' } = props

	const isLoading = useSelector((state: RootState) => state.root.loader.isFullScreenLoading)
	return (
		<>
			{!isLoading && (
				<View style={[styles.container, containerStyles]}>
					<CustomText style={{ ...noRecordTextStyles }}>{noRecordText}</CustomText>
				</View>
			)}
		</>
	)
}
