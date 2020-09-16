import { flexType } from '@src/utils/constants';
import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface Props extends ViewProps {
	justifyContent: flexType
	alignItems: flexType
	style?: ViewStyle
	children: React.ReactNode
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

const Wrapper = ({ alignItems, justifyContent, direction, children, style }: Props) => {
	return <View style={{ justifyContent, alignItems, flexDirection: direction, ...style }}>
		{children}
	</View>
}

Wrapper.defaultProps = {
	justifyContent: 'space-between',
	alignItems: 'center',
	direction: 'row',
}

export default Wrapper