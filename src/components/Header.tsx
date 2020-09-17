import { Colors, colorType, Sizes } from '@src/utils/constants';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Button from './Button';
import Icon, { IconProps } from './Icon';
import Wrapper from './Wrapper';

interface Props {
	iconLeft?: React.ReactNode | string
	children?: React.ReactNode
	onPressLeft?: () => void
	backgroundColor?: colorType
	color?: colorType
	barStyle?: 'dark-content' | 'light-content'
	absolute?: boolean
}

const Header = ({ absolute, barStyle = "dark-content", color = "text", backgroundColor = "light", onPressLeft, children, iconLeft = "arrow-left" }: Props) => {
	backgroundColor = Colors[backgroundColor] ? Colors[backgroundColor] : backgroundColor
	color = Colors[color] ? Colors[color] : color
	return <>
		<StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
		<Wrapper style={{
			...absolute && {
				zIndex: 99,
				position: 'absolute',
			}, backgroundColor, padding: Sizes.base * 2
		}}>
			{typeof iconLeft === 'string' ? <Button onPress={onPressLeft} isTransparent><IconHeader color={color} name={iconLeft} /></Button> : iconLeft}
			{children}
		</Wrapper>
	</>
}

export const IconHeader = (props: IconProps) => <Icon size={Sizes.iconHeader} {...props} />

export default Header