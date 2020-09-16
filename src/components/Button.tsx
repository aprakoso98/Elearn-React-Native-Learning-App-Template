import { colorType, Sizes } from '@src/utils/constants';
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native'
import Text from './Text';
import { Colors } from '../utils/constants';
import Wrapper from './Wrapper';

interface Props {
	children: string | React.ReactNode
	style?: ViewStyle
	containerStyle?: ViewStyle
	color?: colorType
	bColor?: colorType
	isTransparent?: boolean
	onPress?: (any) => any
}

const Button = ({
	isTransparent,
	color = 'light',
	bColor = 'primary',
	onPress,
	style,
	containerStyle,
	children
}: Props) => {
	if (!isTransparent) {
		bColor = Colors[bColor]
	}
	return <TouchableOpacity
		// activeOpacity={1}
		onPress={onPress}
		style={{
			...!isTransparent &&
			{
				backgroundColor: bColor,
				padding: Sizes.base,
			},
			borderRadius: Sizes.secondary,
			marginBottom: Sizes.base,
			...containerStyle
		}}
	>
		<Wrapper style={style} justifyContent="center">
			{typeof children === 'string' ? <Text style={isTransparent && {
				borderBottomColor: Colors[color],
				borderBottomWidth: 1
			}} color={color}>{children}</Text> : children}
		</Wrapper>
	</TouchableOpacity>
}

export default Button