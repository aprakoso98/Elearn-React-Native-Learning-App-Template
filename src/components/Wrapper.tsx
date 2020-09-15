import { flexType } from '@src/utils/constants';
import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface Props extends ViewProps {
	justifyContent: flexType
	style?: ViewStyle
	children: React.ReactNode
}

const Wrapper = ({ justifyContent, children, style }: Props) => {
	return <View style={{ justifyContent, flexDirection: "row", ...style }}>
		{children}
	</View>
}

Wrapper.defaultProps = {
	justifyContent: 'space-between'
}

export default Wrapper