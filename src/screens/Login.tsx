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

const Login = ({ navigation }: ScreenProps) => {
	return <Container style={{ justifyContent: 'space-between' }}>
		<LogoText />
		<View>
			<Text size={Sizes.heading4} align="center">Hi, welcome back!</Text>
			<Text style={{ marginBottom: Sizes.heading3 }} align="center">Login into your account</Text>
			<Input />
			<Input />
			<Button>LOGIN TO YOUR ACCOUNT</Button>
			<Button color="text" style={{ alignSelf: 'center' }} isTransparent>Forgot your password?</Button>
			<Text style={{ marginTop: Sizes.heading5 }} align="center">Do you have an account? <Text onPress={() => navigation.navigate('Register')} color="primary">Register here</Text></Text>
		</View>
		<View />
	</Container>
}

export default Login