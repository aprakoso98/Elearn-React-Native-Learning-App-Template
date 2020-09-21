import { Sizes } from '@src/utils/constants';
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native'
import Text from './Text';
import { Colors } from '../utils/constants';
import Wrapper, { WrapperProps } from './Wrapper';
import Icon from './Icon';
import { colorType } from '@src/utils/constants/type';

interface Props extends Omit<WrapperProps, 'children'> {
	children: string | React.ReactNode
	style?: ViewStyle
	containerStyle?: ViewStyle
	color?: colorType
	bColor?: colorType
	isTransparent?: boolean
	withMargin?: boolean
	withMarginHorizontal?: boolean
	withMarginVertical?: boolean
	isLink?: boolean
	onPress?: (any) => any
}

const Button = ({
	isTransparent,
	withMargin,
	withMarginHorizontal,
	withMarginVertical,
	isLink,
	color,
	bColor,
	onPress,
	style,
	containerStyle,
	children,
	...rest
}: Props) => {
	if (!isTransparent && bColor) {
		bColor = Colors[bColor] ? Colors[bColor] : bColor
	}
	return <TouchableOpacity style={{
		...withMargin && { marginVertical: Sizes.bodyTop, marginHorizontal: Sizes.bodyPadding },
		...withMarginHorizontal && { marginHorizontal: Sizes.bodyPadding },
		...withMarginVertical && { marginVertical: Sizes.bodyTop },
		...containerStyle
	}} onPress={onPress}>
		<Wrapper justifyContent={typeof children === 'string' ? 'center' : undefined} style={{
			...!isLink && !isTransparent && {
				padding: Sizes.base,
				backgroundColor: bColor,
				borderRadius: Sizes.secondary
			},
			...style
		}} {...rest}>
			{typeof children === 'string' ? <Text style={{
				...isLink && {
					borderBottomColor: color && Colors[color],
					borderBottomWidth: 1
				}
			}} color={color}>{children}</Text> : children}
		</Wrapper>
	</TouchableOpacity>
}

Button.defaultProps = {
	color: 'light',
	bColor: 'primary'
}

export const ButtonChevron = ({ style, label, children, ...rest }: {
	label?: string,
	children?: React.ReactNode | string
} & Omit<Props, 'children'>) => {
	return <Button {...rest}
		containerStyle={{
			borderBottomColor: Colors.text,
			borderBottomWidth: 1,
			paddingVertical: Sizes.base,
			...style
		}}
		isTransparent
		color="text">
		{
			!children || typeof children === 'string' ? <>
				<Text>{label}</Text>
				{children && <Text style={{ flex: .9 }} align="right" color="grey">{children}</Text>}
			</> : children
		}
		<Icon name="chevron-right" />
	</Button>
}


export default Button