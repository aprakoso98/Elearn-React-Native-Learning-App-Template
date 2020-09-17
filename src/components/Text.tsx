import { Colors, Sizes, colorType, alignType, sizeType } from '@src/utils/constants';
import React from 'react';
import { Text as TextRN, TextStyle } from 'react-native'

interface Props {
	style?: TextStyle
	color?: colorType
	align?: alignType
	size?: sizeType
	children: React.ReactNode
	onPress?: (any) => any
}

const Text = ({
	size = "text",
	align: textAlign = 'left',
	color = 'text',
	onPress,
	style,
	children
}: Props) => {
	const colorText = Colors[color] ? Colors[color] : color
	const fontSize = Sizes[size] ? Sizes[size] : size
	return <TextRN onPress={onPress} style={{
		textAlign,
		color: colorText,
		fontSize,
		...style
	}}>{children}</TextRN>
}

export default Text