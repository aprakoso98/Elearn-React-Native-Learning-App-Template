import React, { useState } from 'react';
import { View } from 'react-native';
import Container from '@src/components/Container';
import Text from '@src/components/Text';
import { ScreenProps } from '@src/utils/types';
import { Colors, Sizes } from '@src/utils/constants';
import Input from '@src/components/Input';
import Button from '@src/components/Button';
import { useStateObject } from '@src/hooks/useState';
import Icon from '@src/components/Icon';
import { LogoText } from './Login';
import Alert from '@src/components/Alert';

const ForgotPassword = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject({ visible: false })
	return <Container style={{ justifyContent: 'space-between' }}>
		<Alert
			visible={state.visible}
			iconName="check-circle"
			title="Success"
			subTitle="Reset link has been successfully sent to your email, please check your email"
			okButton={{
				text: 'BACK TO LOGIN',
				onPress: () => {
					setState({ visible: false })
					navigation.goBack()
				}
			}}
		/>
		<LogoText />
		<View>
			<Text size={Sizes.heading4} align="center">Forgot password</Text>
			<Text style={{ marginBottom: Sizes.heading3 }} align="center">Reset your password</Text>
			<Input
				label="EMAIL"
				value={state.email}
				onChangeText={email => setState({ email })}
			/>
			<Button onPress={() => setState({ visible: true })}>SENT RESET LINK</Button>
			<Button onPress={() => navigation.goBack()} color="text" style={{ alignSelf: 'center' }} isTransparent>Back to login</Button>
		</View>
		<View />
	</Container>
}

export default ForgotPassword