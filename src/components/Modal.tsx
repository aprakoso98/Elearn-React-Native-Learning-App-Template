import { Colors,  Sizes } from '@src/utils/constants';
import React from 'react';
import { Modal as ModalRN, TouchableOpacity, ViewProps, ViewStyle } from 'react-native';

export interface Props extends ViewProps {
	style?: ViewStyle
	fullScreen?: boolean
	containerColor?: string
	children: React.ReactNode
	visible: boolean
	onBackdropClick?: () => void
}

const Modal = ({
	containerColor = Colors.light,
	fullScreen,
	style,
	visible,
	onBackdropClick,
	...rest
}: Props) => {
	return <ModalRN animationType="fade" transparent visible={visible}>
		<TouchableOpacity onPress={onBackdropClick} style={{
			...!fullScreen && { padding: Sizes.bodyPadding },
			justifyContent: fullScreen ? 'flex-start' : 'center',
			backgroundColor: Colors.blackTransparent,
			flex: 1,
		}}>
			<TouchableOpacity activeOpacity={1} {...rest} style={[
				fullScreen && { flex: 1 },
				{
					padding: Sizes.base,
					borderRadius: Sizes.secondary,
					backgroundColor: containerColor
				}, style]} />
		</TouchableOpacity>
	</ModalRN>
}

export default Modal