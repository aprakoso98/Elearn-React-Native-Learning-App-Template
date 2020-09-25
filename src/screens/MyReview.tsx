import React from 'react';
import Button, { ButtonChevron } from '@src/components/Button'
import Container, { Body } from '@src/components/Container'
import Header, { IconHeader } from '@src/components/Header'
import { useStateObject } from '@src/hooks/useState';
import Alert from '@src/components/Alert';
import Text from '@src/components/Text';
import { Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import { View } from 'react-native';
import Icon from '@src/components/Icon';

const MyReview = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject({
		alertVisible: false
	})
	return <Container>
		<Header onPressLeft={() => navigation.goBack()} />
		<Body scrollable>
			<Text size="heading1">My Review</Text>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <ButtonChevron noChevron key={i.toString()}>
				<View style={{ flex: 1 }}>
					<Text size="heading5">Mathematic - Algebra grade 6</Text>
					<Text style={{ marginBottom: Sizes.base }} color="grey">by George Smith</Text>
					<Text color="grey">Irure nulla aliquip exercitation nostrud. Proident cupidatat officia eiusmod elit pariatur fugiat duis consequat in sunt. </Text>
				</View>
				<View style={{ alignItems: 'center', alignSelf: 'flex-start' }}>
					<Icon name="star" color="gold" solid />
					<Text>5</Text>
				</View>
			</ButtonChevron>)}
		</Body>
	</Container>
}

export default MyReview