import React from 'react';
import Container, { Body, Divider } from '@src/components/Container'
import Header, { IconHeader } from '@src/components/Header';
import { ScreenProps } from '@src/utils/types';
import Wrapper from '@src/components/Wrapper';
import { Switch, View } from 'react-native';
import Text from '@src/components/Text';
import Button, { ButtonChevron } from '@src/components/Button';
import { Colors, Sizes } from '@src/utils/constants';
import { fadeOut, fromRight } from 'react-navigation-transitions';
import Icon from '@src/components/Icon';
import { useStateObject } from '@src/hooks/useState';
import Modal from '@src/components/Modal';
import Checkbox from '@src/components/Checkbox';
import Alert from '@src/components/Alert';
import Input from '@src/components/Input';

const Profile = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject({
		visible: false,
		edit: false,
		formName: 'Julian Smith',
		formEmail: 'juliansmith@gmail.com',
		formPhone: '1-432-67656754',
		formPwd: 'mypassword'
	})
	return <Container>
		<Alert
			visible={state.visible}
			iconName="check-circle"
			title="Success"
			subTitle="Your profile already updated"
			okButton={{
				text: "RETURN TO HOME",
				onPress: () => {
					setState({ visible: false, edit: false })
					navigation.navigate('Home')
				}
			}}
		/>
		<Header onPressLeft={() => navigation.goBack()}>
			{!state.edit && <Button onPress={() => setState({ edit: true })} isTransparent>
				<IconHeader name="edit" solid />
			</Button>}
		</Header>
		<Body scrollable>
			<Text size="heading1" style={{ marginBottom: Sizes.bodyVertical }}>Profile</Text>
			<Wrapper justifyContent="flex-start">
				<View style={{ marginRight: Sizes.base, borderRadius: 50, padding: 35, backgroundColor: Colors.dark }} />
				{state.edit && <Button isTransparent>
					<Icon iconSize="heading1" name="camera" color="primary" />
				</Button>}
			</Wrapper>
			<Input editable={state.edit} value={state.formName} onChangeText={formName => setState({ formName })} label="YOUR NAME" />
			<Input editable={state.edit} value={state.formEmail} onChangeText={formEmail => setState({ formEmail })} label="EMAIL" />
			<Input editable={state.edit} value={state.formPhone} onChangeText={formPhone => setState({ formPhone })} label="PHONE NUMBER" />
			<Input editable={state.edit} secureTextEntry value={state.formPwd} onChangeText={formPwd => setState({ formPwd })} label="PASSWORD" />
		</Body>
		{state.edit && <Button withMargin onPress={() => setState({ visible: true })}>SAVE</Button>}
	</Container>
}

export default Profile