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
import { LogoText } from './Login';
import Alert from '@src/components/Alert';

const ForgotPassword = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject({ visible: false })
	return <Container>
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
		<Body scrollable style={{ marginVertical: Sizes.bodyPadding }}>
			<LogoText />
			<View>
				<Text size="heading1" align="center">Forgot password</Text>
				<Text align="center">Reset your password</Text>
				<Input
					label="EMAIL"
					value={state.email}
					onChangeText={email => setState({ email })}
				/>
				<Button style={{ marginVertical: Sizes.base }} onPress={() => setState({ visible: true })}>SENT RESET LINK</Button>
				<Button onPress={() => navigation.goBack()} color="text" style={{ alignSelf: 'center' }} isLink>Back to login</Button>
			</View>
			<View />
		</Body>
	</Container>
}

export default ForgotPassword