import { Colors, Icons, Sizes } from '@src/utils/constants';
import { colorMap, colorType } from '@src/utils/constants/type';
import React from 'react';
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import Wrapper from './Wrapper';

interface CardProps {
	style?: ViewStyle
	color?: colorType
	bColor?: colorType
	barColor?: colorType
	borderColor?: colorType
	onPress?: () => void
}

const Card = ({ color = "light", barColor = 'light', bColor = "primary", borderColor = "primary", onPress, style }: CardProps) => {
	bColor = colorMap(bColor)
	barColor = colorMap(barColor)
	borderColor = colorMap(borderColor)
	return <TouchableOpacity onPress={onPress} style={{
		backgroundColor: bColor,
		borderRadius: Sizes.secondary,
		flex: 1,
		borderWidth: 1,
		borderColor,
		justifyContent: "space-between",
		padding: Sizes.bodyVertical,
		height: Sizes.cardHeight,
		...style
	}}>
		<Wrapper style={{ alignItems: 'flex-start' }}>
			<Text style={{ flex: .8 }} color={color}>Mathematic - Algebra grade 6</Text>
			<View>
				<Icon color={Colors.gold} solid name="star" />
				<Text color={color}>4.7</Text>
			</View>
		</Wrapper>
		<View>
			<Wrapper style={{ marginVertical: Sizes.secondary }}>
				<Text color={color}>Completed</Text>
				<Text color={color}>60%</Text>
			</Wrapper>
			<Wrapper style={{ borderRadius: Sizes.base, height: Sizes.secondary, backgroundColor: barColor }}>
				<View style={{ borderRadius: Sizes.base, height: '100%', width: '60%', backgroundColor: Colors.danger }} />
			</Wrapper>
		</View>
	</TouchableOpacity>
}

export const CardIcon = ({ onPress, style }: CardProps) => {
	return <TouchableOpacity onPress={onPress} style={{ marginVertical: Sizes.base, ...style }}>
		<Wrapper>
			<View style={{ backgroundColor: Colors.primary, padding: Sizes.base, borderRadius: Sizes.secondary }}>
				<Image source={Icons.rulerPen} />
			</View>
			<View style={{ justifyContent: 'space-between', flex: 1, marginHorizontal: Sizes.base }}>
				<Text>Mathematic - Algebra Grade 6</Text>
				<Text color="grey">by George Smith</Text>
			</View>
			<View>
				<Icon color="gold" solid name="star" />
				<Text>4.7</Text>
			</View>
		</Wrapper>
	</TouchableOpacity>
}

export default Card