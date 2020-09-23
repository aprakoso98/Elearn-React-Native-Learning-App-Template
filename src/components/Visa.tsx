import { Colors, Icons, Images, Sizes } from '@src/utils/constants';
import React from 'react';
import { Image, View, ViewStyle } from 'react-native';
import Text from './Text';
import Wrapper from './Wrapper';

const Visa = ({ style }: { style?: ViewStyle }) => {
	return <View style={{ borderRadius: Sizes.secondary, overflow: 'hidden', position: 'relative', ...style }}>
		<Image style={{ position: 'absolute' }} source={Images.debit} />
		<View style={{ padding: Sizes.bodyTop, backgroundColor: Colors.primaryTransparent }}>
			<Image source={Icons.visa} />
			<Text style={{ marginTop: Sizes.bodyTop, marginBottom: Sizes.bodyPadding }} size="heading4" color="light">**** **** **** 1234</Text>
			<Wrapper>
				<Text color="light">JULIAN SMITH</Text>
				<Text color="light">09 / 22</Text>
			</Wrapper>
		</View>
	</View>
}

export default Visa