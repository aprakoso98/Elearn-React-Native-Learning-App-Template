import Alert from '@src/components/Alert';
import Button from '@src/components/Button';
import Container, { Body } from '@src/components/Container';
import Header from '@src/components/Header';
import Input from '@src/components/Input';
import Text from '@src/components/Text';
import Visa from '@src/components/Visa';
import { useStateObject } from '@src/hooks/useState';
import { Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React, { useState } from 'react';
import { fromTop } from 'react-navigation-transitions';

const Payment = ({ navigation }: ScreenProps) => {
	const [visible, setVisible] = useState(false)
	const [form, setForm] = useStateObject({
		number: '4567 3535 6653 4764',
		holder: 'Julian Smith',
		expDate: '09 / 22',
		cvv: '567'
	})
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
			<Text size="heading1">Payment</Text>
			<Visa style={{ marginVertical: Sizes.bodyVertical }} />
			<Input value={form.number} onChangeText={number => setForm({ number })} label="CARD NUMBER" />
			<Input value={form.holder} onChangeText={holder => setForm({ holder })} label="CARD HOLDER" />
			<Input value={form.expDate} onChangeText={expDate => setForm({ expDate })} label="EXP DATE" />
			<Input value={form.cvv} onChangeText={cvv => setForm({ cvv })} label="CVV" />
		</Body>
		<Button onPress={() => setVisible(true)} withMargin>PAY</Button>
	</Container>
}

export default Payment