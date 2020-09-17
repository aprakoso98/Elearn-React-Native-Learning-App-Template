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

export const LogoText = () => <Text color="primary" align="center" size={Sizes.heading3}>
	elern<Text color="primary" size={Sizes.heading3}>.</Text>
</Text>

const Login = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject()
	return <Container style={{ justifyContent: 'space-between' }}>
		<Body style={{ justifyContent: 'space-between' }}>
			<LogoText />
			<View>
				<Text size={Sizes.heading4} align="center">Hi, welcome back!</Text>
				<Text align="center">Login into your account</Text>
				<Input
					label="EMAIL"
					value={state.email}
					onChangeText={email => setState({ email })}
					renderRightAccessory={() => <Icon color={Colors.success} name="check" />}
				/>
				<Input label="PASSWORD" onChangeText={password => setState({ password })} value={state.password} />
				<Button style={{ marginVertical: Sizes.base }} onPress={() => navigation.navigate('Home')}>LOGIN TO YOUR ACCOUNT</Button>
				<Button onPress={() => navigation.navigate('ForgotPassword')} color="text" style={{ alignSelf: 'center' }} isLink>Forgot your password?</Button>
				<Text style={{ marginTop: Sizes.heading5 }} align="center">Do you have an account? <Text onPress={() => navigation.navigate('Register')} color="primary">Register here</Text></Text>
			</View>
			<View />
		</Body>
	</Container>
}

export default Login