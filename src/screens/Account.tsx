import React from 'react';
import Container, { Body, Divider } from '@src/components/Container'
import Header from '@src/components/Header';
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

const Account = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject({
		pushNotif: true,
		language: 'English',
		languageVisible: false,
		alertVisible: false,
		c1: false,
		c2: false,
		c3: false
	})
	return <Container>
		<Alert
			visible={state.alertVisible}
			iconName="smile"
			title="Rate the App"
			subTitle="We spent so much time creating this App for you. Do you love it as we do?"
			okButton={{
				props: {
					justifyContent: 'center'
				},
				text: <>
					<Icon style={{ marginRight: Sizes.secondary }} name="heart" solid color="light" />
					<Text color="light">LOVE IT!</Text>
				</>,
				onPress: () => setState({ alertVisible: false })
			}}
			cancelButton={{
				text: 'Later',
				onPress: () => setState({ alertVisible: false })
			}}
		/>
		<Modal onBackdropClick={() => setState({ languageVisible: false })} visible={state.languageVisible}>
			<Text size="heading4" style={{ marginBottom: Sizes.bodyVertical }}>Choose Language</Text>
			<Checkbox onPress={() => setState({ c2: false, c3: false, c1: !state.c1 })} checked={state.c1}>English</Checkbox>
			<Checkbox onPress={() => setState({ c1: false, c3: false, c2: !state.c2 })} checked={state.c2}>Bahasa</Checkbox>
			<Checkbox onPress={() => setState({ c2: false, c1: false, c3: !state.c3 })} checked={state.c3}>Melayu</Checkbox>
		</Modal>
		<Header onPressLeft={() => navigation.goBack()} />
		<Body scrollable>
			<Wrapper>
				<View style={{ borderRadius: 50, padding: 35, backgroundColor: Colors.dark }} />
				<View style={{ flex: .95 }}>
					<Text size={Sizes.heading4}>Julian Smith</Text>
					<Button onPress={() => navigation.navigate('Profile')} justifyContent="flex-start" isTransparent color="primary">View profile</Button>
				</View>
			</Wrapper>
			<ButtonChevron style={{ marginTop: Sizes.base * 3 }} onPress={() => navigation.navigate('MyCourses', { transition: fromRight })} label="My Courses" />
			<ButtonChevron label="My Reviews" />
			<Text size="heading5" style={{ marginTop: Sizes.base * 3, marginBottom: Sizes.secondary }}>Settings</Text>
			<ButtonChevron noChevron>
				<Text>Push Notification</Text>
				<Switch onValueChange={() => setState({ pushNotif: !state.pushNotif })} value={state.pushNotif} />
			</ButtonChevron>
			<ButtonChevron onPress={() => setState({ languageVisible: true })} label="Language">{state.language}</ButtonChevron>
			<ButtonChevron label="Documentations" />
			<ButtonChevron label="Support Center" />
			<ButtonChevron label="Share Feedback" />
			<ButtonChevron label="Visit Our Website" />
			<ButtonChevron onPress={() => setState({ alertVisible: true })} label="Rate The App" />
			<Button onPress={() => navigation.navigate('Login', { transition: fadeOut })} withMarginVertical bColor="greySoft" color="grey">LOGOUT</Button>
			<Text color="grey" align="center">Copyright<Icon iconSize="base" color="grey" name="copyright" /> all rights reserved by gorillab.id</Text>
		</Body>
	</Container>
}

export default Account