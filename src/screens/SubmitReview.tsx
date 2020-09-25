import Alert from '@src/components/Alert';
import Button from '@src/components/Button';
import Container, { Body, Divider } from '@src/components/Container';
import Header from '@src/components/Header';
import Icon from '@src/components/Icon';
import Input from '@src/components/Input';
import Text from '@src/components/Text';
import { TextInput } from 'react-native';
import Wrapper from '@src/components/Wrapper';
import { useStateObject } from '@src/hooks/useState';
import { colorType } from '@src/utils/constants/type';
import { ScreenProps } from '@src/utils/types';
import React from 'react';
import { Colors, Sizes } from '../utils/constants';

const SubmitReview = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject({
		visible: false,
		review: '',
		star: 5
	})
	const rate = () => {
		let text: string
		let color: colorType
		switch (state.star) {
			case 2:
				text = "Bad"
				color = "danger"
				break;
			case 3:
				text = "Not bad"
				color = "primary"
				break;
			case 4:
				text = "Good"
				color = "success"
				break;
			case 5:
				text = "Excelent"
				color = "success"
				break;
			default:
				text = "Poor"
				color = "danger"
				break;
		}
		return { text, color }
	}
	return <Container>
		<Alert
			iconName="check-circle"
			title="Success"
			subTitle="Your submit already sent!"
			okButton={{
				text: "RETURN TO HOME",
				onPress: () => navigation.navigate('Home')
			}}
			visible={state.visible}
		/>
		<Header />
		<Body scrollable>
			<Text size="heading1">Review</Text>
			<Text color="grey" style={{ marginTop: Sizes.bodyVertical, marginBottom: Sizes.base }}>What do you think about course:</Text>
			<Text size="heading5">Mathematic - Algebra grade 6</Text>
			<Text color="grey">by George Smith</Text>
			<Divider style={{ marginVertical: Sizes.base }} />
			<TextInput
				style={{
					backgroundColor: Colors.greySoft,
					borderBottomWidth: 0,
					borderRadius: Sizes.secondary,
					padding: Sizes.base,
					textAlignVertical: 'top'
				}}
				placeholder="Tell us your opinion"
				value={state.review}
				onChangeText={review => setState({ review })}
				multiline={true}
				numberOfLines={10}
			/>
			<Text style={{ marginVertical: Sizes.base }} color="grey">Rate the course</Text>
			<Wrapper style={{ marginVertical: Sizes.base }}>
				{
					[1, 2, 3, 4, 5].map(star => <Button
						key={star.toString()}
						isTransparent
						onPress={() => setState({ star })}
						style={{ flex: 1 }}>
						<Icon
							iconSize="heading3"
							name="star"
							solid={state.star >= star ? true : false}
							color={state.star >= star ? "success" : "text"} />
					</Button>)
				}
			</Wrapper>
			<Text color={rate().color} align="center">{rate().text}</Text>
		</Body>
		<Button onPress={() => setState({ visible: true })} withMargin>SENT YOUR REVIEW</Button>
	</Container >
}

export default SubmitReview