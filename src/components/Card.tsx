import { Colors, Sizes } from '@src/utils/constants';
import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import Wrapper from './Wrapper';

const Card = () => {
	return <View style={{ flex: 1, padding: Sizes.secondary }}>
		<Button><View>
			<Wrapper style={{ alignItems: 'flex-start' }}>
				<Text style={{ width: Sizes.base * 10, marginRight: Sizes.base }} color="light">Mathematic Aljabar - Grade 6</Text>
				<View>
					<Icon color={Colors.gold} solid name="star" />
					<Text color="light">4.7</Text>
				</View>
			</Wrapper>
			<Wrapper>
				<Text color="light">Completed</Text>
				<Text color="light">60%</Text>
			</Wrapper>
			<Wrapper style={{ borderRadius: Sizes.secondary, height: Sizes.secondary / 2, backgroundColor: Colors.light }}>
				<View style={{ height: '100%', width: '60%', backgroundColor: Colors.danger }} />
			</Wrapper>
		</View></Button>
	</View>
}

export default Card