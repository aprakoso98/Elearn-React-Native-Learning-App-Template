import { Colors, Sizes } from '@src/utils/constants'
import { colorMap, colorType } from '@src/utils/constants/type'
import React from 'react'
import { ScrollView, View, ViewProps, ScrollViewProps, ViewStyle, StatusBar } from 'react-native'

interface Props extends ViewProps {
	style?: ViewStyle
	barStyle?: 'dark-content' | 'light-content'
	barColor?: colorType
	children: React.ReactNode
}

const Container = ({ barColor = "light", barStyle = "dark-content", children, style, ...rest }: Props) => {
	barColor = colorMap(barColor)
	return <View style={{
		backgroundColor: Colors.light,
		flex: 1,
		...style
	}} {...rest}>
		<StatusBar barStyle={barStyle} backgroundColor={barColor} />
		{children}
	</View>
}

interface BodyProps extends ViewProps, ScrollViewProps {
	noMargin?: boolean
	noPadding?: boolean
	scrollable?: boolean
	style?: ViewStyle
	children: React.ReactNode
}

export const Body = ({ noMargin, noPadding, scrollable, style, ...rest }: BodyProps) => {
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