import { colorType, Sizes } from '@src/utils/constants';
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native'
import Text from './Text';
import { Colors } from '../utils/constants';

interface Props {
	children: string | React.ReactNode
	style?: ViewStyle,
	color?: colorType
	bColor?: colorType
	isTransparent?: boolean
	onPress?: (any) => any
}

const Button = ({ isTransparent, color, bColor, onPress, style, children }: Props) => {
	if (!isTransparent) {
		bColor = Colors[bColor]
	}
	return <TouchableOpacity
		activeOpacity={1}
		onPress={onPress}
		style={{
			...!isTransparent &&
			{
				backgroundColor: bColor,
				padding: Sizes.base,
			},
			borderRadius: Sizes.secondary,
			marginBottom: Sizes.base,
			...style
		}}
	>
		{typeof children === 'string' ? <Text style={isTransparent && {
			borderBottomColor: Colors[color],
			borderBottomWidth: 1
		}} align="center" color={color}>{children}</Text> : children}
	</TouchableOpacity>
}

Button.defaultProps = {
	color: 'light',
	bColor: 'primary'
}

export default Button