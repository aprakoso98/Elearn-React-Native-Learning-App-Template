import { Colors, Icons, Sizes } from '@src/utils/constants';
import React from 'react';
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import Wrapper from './Wrapper';

interface CardProps {
	style?: ViewStyle
	onPress?: () => void
}

const Card = ({ onPress, style }: CardProps) => {
	return <TouchableOpacity onPress={onPress} style={{
		backgroundColor: Colors.primary,
		borderRadius: Sizes.secondary,
		flex: 1,
		justifyContent: "space-between",
		padding: Sizes.base,
		height: 100,
		...style
	}}>
		<Wrapper style={{ alignItems: 'flex-start' }}>
			<Text style={{ width: Sizes.base * 10, marginRight: Sizes.base }} color="light">Mathematic - Algebra Grade 6</Text>
			<View>
				<Icon color={Colors.gold} solid name="star" />
				<Text color="light">4.7</Text>
			</View>
		</Wrapper>
		<View>
			<Wrapper>
				<Text color="light">Completed</Text>
				<Text color="light">60%</Text>
			</Wrapper>
			<Wrapper style={{ borderRadius: Sizes.secondary, height: Sizes.secondary / 2, backgroundColor: Colors.light }}>
				<View style={{ height: '100%', width: '60%', backgroundColor: Colors.danger }} />
			</Wrapper>
		</View>
	</TouchableOpacity>
}

export const CardIcon = ({ onPress, style }: CardProps) => {
	return <TouchableOpacity onPress={onPress} style={{ marginVertical: Sizes.secondary, ...style }}>
		<Wrapper>
			<View style={{ backgroundColor: Colors.primary, padding: Sizes.base, borderRadius: Sizes.secondary }}>
				<Image source={Icons.rulerPen} />
			</View>
			<View style={{ justifyContent: 'space-between', flex: 1, marginHorizontal: Sizes.base }}>
				<Text>Mathematic - Algebra Grade 6</Text>
				<Text color="grey">by George Smith</Text>
			</View>
			<View>
				<Icon color={Colors.gold} solid name="star" />
				<Text>4.7</Text>
			</View>
		</Wrapper>
	</TouchableOpacity>
}

export default Card