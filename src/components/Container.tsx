import React from 'react'
import { Colors, Sizes } from '@src/utils/constants'
import { colorMap, colorType, sizeMap, sizeType } from '@src/utils/constants/type'
import { ScrollView, Animated, View, ViewProps, ScrollViewProps, ViewStyle, StatusBar, SafeAreaView, Platform } from 'react-native'

interface Props extends ViewProps {
	style?: ViewStyle
	barStyle?: 'dark-content' | 'light-content'
	barColor?: colorType
	children: React.ReactNode
}

const Container = ({ barColor = "light", barStyle = "dark-content", children, style, ...rest }: Props) => {
	barColor = colorMap(barColor)
	const isAndroid = Platform.OS === 'android'
	return <SafeAreaView style={{
		backgroundColor: Colors.light,
		flex: 1,
		...style
	}} {...rest}>
		{isAndroid && <StatusBar barStyle={barStyle} backgroundColor={barColor} />}
		{children}
	</SafeAreaView>
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
			marginBottom: noMargin ? 0 : Sizes.bodyVertical,
			backgroundColor: Colors.light,
			...style
		}
	}
	return scrollable ? <ScrollView {...props} /> : <View {...props} />
}

interface DividerProps {
	color?: colorType
	size?: sizeType
	direction?: 'horizontal' | 'vertical'
	style?: ViewStyle
}

export const Divider = ({ style, color, size = 1, direction = "horizontal" }: DividerProps) => {
	return <Animated.View style={{
		backgroundColor: colorMap(color),
		padding: sizeMap(size) / 2,
		...direction === 'vertical' && { height: '100%' },
		...style
	}} />
}

export default Container