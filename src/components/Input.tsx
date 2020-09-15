import { Colors, Sizes } from '@src/utils/constants';
import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps { }

const Input = ({ ...rest }: Props) => <View style={{
	borderColor: Colors.greySoft,
	borderWidth: 1,
	borderRadius: Sizes.secondary,
	marginBottom: Sizes.base
}}>
	<TextInput {...rest} />
</View>

export default Input