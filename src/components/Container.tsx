import { Colors, Sizes } from '@src/utils/constants'
import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'

interface Props extends ViewProps {
	style?: ViewStyle
	children: React.ReactNode
}

const Container = ({ style, ...rest }: Props) => {
	return <View style={{
		backgroundColor: Colors.light,
		padding: Sizes.base * 2,
		flex: 1,
		...style
	}} {...rest} />
}

export default Container