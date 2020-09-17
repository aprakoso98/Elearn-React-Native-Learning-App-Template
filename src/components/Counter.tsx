import { Colors, Sizes } from '@src/utils/constants';
import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const Counter = ({ counter, title }: { counter: string, title: string }) => {
	return <View style={{
		padding: Sizes.base,
		borderRadius: Sizes.secondary,
		backgroundColor: Colors.greySoft
	}}>
		<Text size="heading3" align="center" color="primary">{counter}</Text>
		<Text align="center">{title}</Text>
	</View>
}

export default Counter