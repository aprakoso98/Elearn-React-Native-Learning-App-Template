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
		// padding: Sizes.base * 2,
		flex: 1,
		...style
	}} {...rest} />
}

export const Body = ({ noMargin, noPadding, scrollable, style, ...rest }: Props & { noMargin?: boolean, noPadding?: boolean, scrollable?: boolean }) => {
	const props = {
		...rest,
		style: {
			flex: 1,
			paddingHorizontal: noPadding ? 0 : Sizes.base * 4,
			marginBottom: noMargin ? 0 : Sizes.bodyTop,
			...style
		}
	}
	return scrollable ? <ScrollView {...props} /> : <View {...props} />
}

export default Container