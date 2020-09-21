import { Sizes } from '@src/utils/constants';
import { colorType, alignType, sizeType, colorMap, sizeMap, fontType, fontMap } from '@src/utils/constants/type';
import React from 'react';
import { Animated, TextStyle } from 'react-native'

interface Props {
	style?: TextStyle
	color?: colorType
	align?: alignType
	size?: sizeType
	font?: fontType
	children: React.ReactNode
	onPress?: (any) => any
}

const Text = ({
	size,
	color,
	onPress,
	style,
	font,
	children,
	align: textAlign,
}: Props) => {
	const colorText = colorMap(color)
	const fontSize = sizeMap(size)
	const fontFamily = fontMap(font)
	return <Animated.Text onPress={onPress} style={{
		textAlign,
		color: colorText,
		fontSize,
		fontFamily,
		marginVertical: Sizes.spacingText,
		...style
	}}>{children}</Animated.Text>
}

export default Text