import { Sizes } from '@src/utils/constants';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Button from './Button';
import Icon, { IconProps } from './Icon';
import Wrapper from './Wrapper';

interface Props {
	iconLeft?: React.ReactNode | string
	children?: React.ReactNode
	onPressLeft?: () => void
}

const Header = ({ onPressLeft, children, iconLeft = "arrow-left" }: Props) => {
	return <>
		<StatusBar />
		<Wrapper>
			{typeof iconLeft === 'string' ? <Button onPress={onPressLeft} isTransparent><IconHeader name={iconLeft} /></Button> : iconLeft}
			{children}
		</Wrapper>
	</>
}

export const IconHeader = (props: IconProps) => <Icon size={Sizes.iconHeader} {...props} />

export default Header