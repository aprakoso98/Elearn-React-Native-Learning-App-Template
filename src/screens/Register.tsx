import React, { useState } from 'react';
import { View } from 'react-native';
import Container from '@src/components/Container';
import Text from '@src/components/Text';
import { ScreenProps } from '@src/utils/types';
import { Sizes } from '@src/utils/constants';
import Input from '@src/components/Input';
import Button from '@src/components/Button';
import { useStateObject } from '@src/hooks/useState';
import Alert from '@src/components/Alert';
import { LogoText } from './Login';

const Register = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject()
	const [visible, setVisible] = useState(false)
	return <Container style={{ justifyContent: 'space-between' }}>
		<Alert
			visible={visible}
			iconName="check-circle"
			title="Success"
			subTitle="Congratulation, your account has been successfully created"
			okButton={{
				text: 'CONTINUE',
				onPress: () => {
					setVisible(false)
					navigation.goBack()
				}
			}}
		/>
		<LogoText />
		<View>
			<Text size={Sizes.heading4} align="center">Register</Text>
			<Text style={{ marginBottom: Sizes.heading3 }} align="center">Create your account</Text>
			<Input label="YOUR NAME" onChangeText={yourName => setState({ yourName })} value={state.yourName} />
			<Input label="EMAIL" onChangeText={email => setState({ email })} value={state.email} />
			<Input label="PASSWORD" onChangeText={password => setState({ password })} value={state.password} />
			<Input label="CONFIRM PASSWORD" onChangeText={confirmPassword => setState({ confirmPassword })} value={state.confirmPassword} />
			<Button onPress={() => setVisible(true)}>CREATE ACCOUNT</Button>
			<Text style={{ marginTop: Sizes.heading5 }} align="center">Already have an account? <Text onPress={() => navigation.goBack()} color="primary">Login here</Text></Text>
		</View>
		<View />
	</Container>
}

export default Register