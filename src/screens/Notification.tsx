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

const Notification = ({ navigation }: ScreenProps) => {
	const [state, setState] = useStateObject({
		alertVisible: false
	})
	return <Container>
		<Alert
			onBackdropClick={() => setState({ alertVisible: false })}
			iconName="trash-alt"
			subTitle="Once you delete all messages, you cannot undo it."
			visible={state.alertVisible}
			title="Delete Notification?"
			okButton={{
				text: "YES, DELETE",
				onPress: () => setState({ alertVisible: false })
			}}
			cancelButton={{
				text: "Cancel",
				onPress: () => setState({ alertVisible: false })
			}} />
		<Header onPressLeft={() => navigation.goBack()}>
			<Button onPress={() => setState({ alertVisible: true })} isTransparent>
				<IconHeader name="trash-alt" solid />
			</Button>
		</Header>
		<Body scrollable>
			<Text size="heading3">Notification</Text>
			<ButtonChevron>
				<View style={{ flex: 1 }}>
					<Text size="heading5" color="primary">Transaction success</Text>
					<Text>Irure nulla aliquip exercitation nostrud. Proident cupidatat officia eiusmod elit pariatur fugiat duis consequat in sunt. </Text>
				</View>
			</ButtonChevron>
			<ButtonChevron>
				<View style={{ flex: 1 }}>
					<Text size="heading5" color="primary">Transaction success</Text>
					<Text>Irure nulla aliquip exercitation nostrud. Proident cupidatat officia eiusmod elit pariatur fugiat duis consequat in sunt. </Text>
				</View>
			</ButtonChevron>
			<ButtonChevron>
				<View style={{ flex: 1 }}>
					<Text size="heading5" color="primary">Transaction success</Text>
					<Text>Irure nulla aliquip exercitation nostrud. Proident cupidatat officia eiusmod elit pariatur fugiat duis consequat in sunt. </Text>
				</View>
			</ButtonChevron>
			<ButtonChevron>
				<View style={{ flex: 1 }}>
					<Text size="heading5" color="primary">Transaction success</Text>
					<Text>Irure nulla aliquip exercitation nostrud. Proident cupidatat officia eiusmod elit pariatur fugiat duis consequat in sunt. </Text>
				</View>
			</ButtonChevron>
			<ButtonChevron>
				<View style={{ flex: 1 }}>
					<Text size="heading5" color="primary">Transaction success</Text>
					<Text>Irure nulla aliquip exercitation nostrud. Proident cupidatat officia eiusmod elit pariatur fugiat duis consequat in sunt. </Text>
				</View>
			</ButtonChevron>
			<ButtonChevron>
				<View style={{ flex: 1 }}>
					<Text size="heading5" color="primary">Transaction success</Text>
					<Text>Irure nulla aliquip exercitation nostrud. Proident cupidatat officia eiusmod elit pariatur fugiat duis consequat in sunt. </Text>
				</View>
			</ButtonChevron>
			<ButtonChevron>
				<View style={{ flex: 1 }}>
					<Text size="heading5" color="primary">Transaction success</Text>
					<Text>Irure nulla aliquip exercitation nostrud. Proident cupidatat officia eiusmod elit pariatur fugiat duis consequat in sunt. </Text>
				</View>
			</ButtonChevron>
		</Body>
	</Container>
}

export default Notification