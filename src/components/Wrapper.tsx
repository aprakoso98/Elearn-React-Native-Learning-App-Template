import { flexAlignType, flexJustifyType } from '@src/utils/constants/type';
import React from 'react';
import { Animated, ViewProps, ViewStyle } from 'react-native';

export interface WrapperProps extends ViewProps {
	justifyContent?: flexJustifyType
	alignItems?: flexAlignType
	style?: ViewStyle
	children: React.ReactNode
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

const Wrapper = ({ alignItems, justifyContent, direction, children, style }: WrapperProps) => {
	return <Animated.View style={{ justifyContent, alignItems, flexDirection: direction, ...style }}>
		{children}
	</Animated.View>
}

Wrapper.defaultProps = {
	justifyContent: 'space-between',
	alignItems: 'center',
	direction: 'row',
}

export default Wrapper