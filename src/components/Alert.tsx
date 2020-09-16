import { Colors, Sizes } from '@src/utils/constants';
import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import Icon from './Icon';
import Modal, { Props as ModalProps } from './Modal';
import Text from './Text';

interface Props extends Omit<ModalProps, 'children'> {
	iconName?: string
	title?: string
	subTitle: string
	okButton: {
		text: string
		onPress?: () => any
	}
	cancelButton?: {
		text: string
		onPress?: () => any
	}
}

const Alert = ({
	iconName,
	title,
	subTitle,
	okButton,
	cancelButton,
	...rest
}: Props) => {
	return <Modal {...rest} style={{ flex: 1, paddingHorizontal: Sizes.base * 3, paddingVertical: Sizes.base * 3 }}>
		{iconName && <Icon style={{ alignSelf: 'center' }} color={Colors.primary} size={Sizes.heading1} name={iconName} />}
		{title && <Text align="center" size={Sizes.heading4}>{title}</Text>}
		<Text style={{ paddingVertical: Sizes.base * 2 }} align="center">{subTitle}</Text>
		<View style={{ marginTop: Sizes.base * 2 }}>
			<Button onPress={okButton.onPress}>{okButton.text}</Button>
			{cancelButton && <Button isTransparent onPress={cancelButton.onPress} color="text">{cancelButton.text}</Button>}
		</View>
	</Modal>
}

export default Alert