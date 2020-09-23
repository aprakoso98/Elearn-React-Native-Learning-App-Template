import { Colors, Sizes } from '@src/utils/constants';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import Text from './Text';

interface Props {
	style?: ViewStyle
	counter: string
	title: string
}

const Counter = ({ style, counter, title }: Props) => {
	return <View style={{
		padding: Sizes.base,
		borderRadius: Sizes.secondary,
		backgroundColor: Colors.greySoft,
		...style
	}}>
		<Text size="heading1" align="center" color="primary">{counter}</Text>
		<Text align="center">{title}</Text>
	</View>
}

export default Counter