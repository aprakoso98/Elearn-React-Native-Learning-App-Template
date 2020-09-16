import { Colors, Sizes } from '@src/utils/constants'
import React from 'react'
import { ScrollView, View, ViewProps, ScrollViewProps, ViewStyle } from 'react-native'

interface Props extends ViewProps, ScrollViewProps {
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

export const Body = ({ scrollable, style, ...rest }: Props & { scrollable?: boolean }) => {
	const props = {
		...rest,
		style: {
			paddingHorizontal: Sizes.base * 2,
			...style
		}
	}
	return scrollable ? <ScrollView {...props} /> : <View {...props} />
}

export default Container