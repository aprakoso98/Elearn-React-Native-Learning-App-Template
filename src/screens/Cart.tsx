import Button from '@src/components/Button';
import Container, { Body } from '@src/components/Container';
import Header from '@src/components/Header';
import Icon from '@src/components/Icon';
import Input from '@src/components/Input';
import Text from '@src/components/Text';
import Wrapper from '@src/components/Wrapper';
import { useStateObject } from '@src/hooks/useState';
import { Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React from 'react';

const Cart = ({ navigation }: ScreenProps) => {
	return <Container>
		<Header onPressLeft={() => navigation.goBack()} />
		<Body scrollable>
			<Text size={Sizes.heading3}>Cart</Text>
			<Wrapper style={{ marginTop: Sizes.bodyTop }}>
				<Text>Mathematic - Algebra grade 6</Text>
				<Text>$10</Text>
			</Wrapper>
			<Input editable={false} label="by George Smith" />
			<Text color="grey" style={{ marginVertical: Sizes.base }}>Do you have promotional code?</Text>
			<Input label="CARD HOLDER" value="ELERNDISCOUNT10" renderRightAccessory={() => <Icon color="success" name="check" />} />
		</Body>
		<Button withMargin>PLACE ORDER</Button>
	</Container>
}

export default Cart