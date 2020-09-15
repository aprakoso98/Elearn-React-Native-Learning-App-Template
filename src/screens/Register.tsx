import React from 'react';
import { View } from 'react-native';
import Container from '@src/components/Container';
import Text from '@src/components/Text';
import { ScreenProps } from '@src/utils/types';
import { Sizes } from '@src/utils/constants';
import Input from '@src/components/Input';
import Button from '@src/components/Button';

export const LogoText = () => <Text color="primary" align="center" size={Sizes.heading3}>
	elern<Text color="primary" size={Sizes.heading3}>.</Text>
</Text>

const Register = ({ navigation }: ScreenProps) => {
	return <Container style={{ justifyContent: 'space-between' }}>
		<LogoText />
		<View>
			<Text size={Sizes.heading4} align="center">Register</Text>
			<Text style={{ marginBottom: Sizes.heading3 }} align="center">Create your account</Text>
			<Input />
			<Input />
			<Input />
			<Input />
			<Button>CREATE ACCOUNT</Button>
			<Text style={{ marginTop: Sizes.heading5 }} align="center">Already have an account? <Text onPress={() => navigation.goBack()} color="primary">Login here</Text></Text>
		</View>
		<View />
	</Container>
}

export default Register