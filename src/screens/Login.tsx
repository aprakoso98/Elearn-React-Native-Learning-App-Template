import React, { useState } from 'react';
import { View } from 'react-native';
import Container, { Body } from '@src/components/Container';
import Text from '@src/components/Text';
import { ScreenProps } from '@src/utils/types';
import { Colors, Sizes } from '@src/utils/constants';
import Input from '@src/components/Input';
import Button from '@src/components/Button';
import { useStateObject } from '@src/hooks/useState';
import Icon from '@src/components/Icon';

export const LogoText = () => <Text style={{ marginBottom: Sizes.bodyPadding }} color="primary" align="center" size="logo">
	elern<Text color="primary" size="logo">.</Text>
</Text>

const Login = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject({
		email: 'example@email.com'
	})
	return <Container>
		<Body scrollable style={{ marginVertical: Sizes.bodyPadding }}>
			<LogoText />
			<View>
				<Text size="heading1" align="center">Hi, welcome back!</Text>
				<Text align="center">Login into your account</Text>
				<Input
					label="EMAIL"
					value={state.email}
					onChangeText={email => setState({ email })}
					renderRightAccessory={() => state.email !== '' && <Icon color={Colors.success} name="check" />}
				/>
				<Input label="PASSWORD" onChangeText={password => setState({ password })} value={state.password} />
				<Button style={{ marginVertical: Sizes.base }} onPress={() => navigation.navigate('Home')}>LOGIN TO YOUR ACCOUNT</Button>
				<Button onPress={() => navigation.navigate('ForgotPassword')} color="text" style={{ alignSelf: 'center' }} isLink>Forgot your password?</Button>
				<Text style={{ marginTop: Sizes.heading5 }} align="center">Do you have an account? <Text onPress={() => navigation.navigate('Register')} color="primary">Register here</Text></Text>
			</View>
		</Body>
	</Container>
}

export default Login