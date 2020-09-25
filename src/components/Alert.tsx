import { Colors, Sizes } from '@src/utils/constants';
import React from 'react';
import { View } from 'react-native';
import Button, { Props as ButtonProps } from './Button';
import Icon from './Icon';
import Modal, { Props as ModalProps } from './Modal';
import Text from './Text';

interface btn {
	text: string | React.ReactNode
	props?: Omit<ButtonProps, 'children'>
	onPress?: () => any
}

interface Props extends Omit<ModalProps, 'children'> {
	iconName?: string
	title?: string
	subTitle: string
	okButton: btn
	cancelButton?: btn
}

const Alert = ({
	iconName,
	title,
	subTitle,
	okButton,
	cancelButton,
	...rest
}: Props) => {
	return <Modal {...rest} style={{ paddingHorizontal: Sizes.base * 3, paddingVertical: Sizes.base * 3 }}>
		{iconName && <Icon style={{ alignSelf: 'center' }} color={Colors.primary} iconSize="logo" name={iconName} />}
		{title && <Text style={{ marginTop: Sizes.base }} align="center" size={Sizes.heading4}>{title}</Text>}
		<Text color="grey" style={{ paddingVertical: Sizes.bodyVertical }} align="center">{subTitle}</Text>
		<View style={{ marginTop: Sizes.base * 2 }}>
			<Button onPress={okButton.onPress} {...okButton.props}>{okButton.text}</Button>
			{cancelButton && <Button containerStyle={{ marginTop: Sizes.base }} isLink onPress={cancelButton.onPress} color="text" {...cancelButton.props}>{cancelButton.text}</Button>}
		</View>
	</Modal>
}

export default Alert