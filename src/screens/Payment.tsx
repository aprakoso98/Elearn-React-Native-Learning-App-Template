import Alert from '@src/components/Alert';
import Button from '@src/components/Button';
import Container, { Body } from '@src/components/Container';
import Header from '@src/components/Header';
import Input from '@src/components/Input';
import Text from '@src/components/Text';
import Visa from '@src/components/Visa';
import { Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React, { useState } from 'react';
import { fromTop } from 'react-navigation-transitions';

const Payment = ({ navigation }: ScreenProps) => {
	const [visible, setVisible] = useState(false)
	return <Container>
		<Alert
			visible={visible}
			title="Thank you"
			iconName="check-circle"
			subTitle="You can access the course in course section"
			okButton={{
				text: "GO TO MY COURSES",
				onPress: () => {
					setVisible(false)
					navigation.navigate('MyCourses', { transition: fromTop })
				}
			}}
		/>
		<Header onPressLeft={() => navigation.goBack()} />
		<Body scrollable>
			<Text size={Sizes.heading3}>Payment</Text>
			<Visa style={{ marginTop: Sizes.bodyTop }} />
			<Input label="CARD NUMBER" />
			<Input label="CARD HOLDER" />
			<Input label="EXP DATE" />
			<Input label="CVV" />
		</Body>
		<Button onPress={() => setVisible(true)} withMargin>PAY</Button>
	</Container>
}

export default Payment