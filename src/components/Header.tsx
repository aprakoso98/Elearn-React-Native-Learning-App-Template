import { Colors, Sizes } from '@src/utils/constants';
import { colorType } from '@src/utils/constants/type';
import React from 'react';
import Button from './Button';
import Icon, { IconProps } from './Icon';
import Wrapper from './Wrapper';
import { colorMap } from '@src/utils/constants/type';

interface Props {
	iconLeft?: React.ReactNode | string
	children?: React.ReactNode
	onPressLeft?: () => void
	backgroundColor?: colorType
	color?: colorType

	absolute?: boolean
}

const Header = ({ absolute, color = "text", backgroundColor = "light", onPressLeft, children, iconLeft = "arrow-left" }: Props) => {
	backgroundColor = colorMap(backgroundColor)
	color = colorMap(color)
	return <Wrapper style={{
		...absolute && {
			zIndex: 99,
			position: 'absolute',
		}, backgroundColor, padding: Sizes.base * 2
	}}>
		{typeof iconLeft === 'string' ? <Button onPress={onPressLeft} isTransparent><IconHeader color={color} name={iconLeft} /></Button> : iconLeft}
		{children}
	</Wrapper>
}

export const IconHeader = (props: IconProps) => <Icon iconSize="iconHeader" {...props} />

export default Header