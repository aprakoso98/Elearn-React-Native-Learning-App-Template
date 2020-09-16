import { Colors, Sizes, colorType } from '@src/utils/constants';
import React from 'react';
import { Text as TextRN, TextStyle } from 'react-native'

interface Props {
	style?: TextStyle
	color?: colorType
	align?: 'left' | 'center' | 'right'
	size?: number
	children: React.ReactNode
	onPress?: (any) => any
}

const Text = ({ size, color, onPress, align: textAlign, style, children }: Props) => {
	const colorText = Colors[color]
	return <TextRN onPress={onPress} style={{
		textAlign,
		color: colorText,
		fontSize: size,
		marginBottom: Sizes.secondary,
		...style
	}}>{children}</TextRN>
}

Text.defaultProps = {
	size: Sizes.text,
	align: 'left',
	color: 'text'
}

export default Text