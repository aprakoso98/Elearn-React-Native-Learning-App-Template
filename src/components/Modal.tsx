import { Colors, colorType, Sizes } from '@src/utils/constants';
import React from 'react';
import { Modal as ModalRN, View, ViewProps, ViewStyle } from 'react-native';
import Button from './Button';

export interface Props extends ViewProps {
	style?: ViewStyle
	fullScreen?: boolean
	containerColor?: string
	children: React.ReactNode
	visible: boolean
}

const Modal = ({
	containerColor = Colors.light,
	fullScreen,
	style,
	visible,
	...rest
}: Props) => {
	return <ModalRN animationType="fade" transparent visible={visible}>
		<Button
			bColor="blackTransparent"
			containerStyle={{
				...!fullScreen && { padding: Sizes.base * 3 },
				flex: 1,
				justifyContent: fullScreen ? 'flex-start' : 'center',
				marginBottom: 0,
				borderRadius: 0
			}}>
			<View {...rest} style={[
				fullScreen && { flex: 1 },
				{
					padding: Sizes.base,
					borderRadius: Sizes.secondary,
					backgroundColor: containerColor
				},
				style]} />
		</Button>
	</ModalRN>
}

export default Modal