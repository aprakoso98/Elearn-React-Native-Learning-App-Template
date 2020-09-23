import Button from '@src/components/Button';
import Container, { Body, Divider } from '@src/components/Container';
import Header from '@src/components/Header';
import Icon from '@src/components/Icon';
import Input from '@src/components/Input';
import Text from '@src/components/Text';
import Wrapper from '@src/components/Wrapper';
import { useStateObject } from '@src/hooks/useState';
import { Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React from 'react';
import { fromRight } from 'react-navigation-transitions';

const Cart = ({ navigation }: ScreenProps) => {
	return <Container>
		<Header onPressLeft={() => navigation.goBack()} />
		<Body scrollable>
			<Text size="heading1">Cart</Text>
			<Wrapper style={{ marginTop: Sizes.bodyTop }}>
				<Text>Mathematic - Algebra grade 6</Text>
				<Text>$10</Text>
			</Wrapper>
			<Text color="grey">by George Smith</Text>
			<Divider style={{ marginTop: Sizes.bodyTop }} />
			<Text color="grey" style={{ marginVertical: Sizes.base }}>Do you have promotional code?</Text>
			<Input label="CODE" borderTintColor="success" value="ELERNDISCOUNT10" renderRightAccessory={() => <Icon color="success" name="check" />} />
		</Body>
		<Button onPress={() => navigation.navigate('Payment', { transition: fromRight })} withMargin>PLACE ORDER</Button>
	</Container>
}

export default Cart