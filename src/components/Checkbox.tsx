import { Colors, Sizes } from '@src/utils/constants';
import { colorMap, colorType } from '@src/utils/constants/type';
import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';

interface Props {
	checked?: boolean
	onPress?: () => void
	children?: string
	color?: colorType
	checkedColor?: colorType
}

const Checkbox = ({ color, checkedColor, children, onPress, checked }: Props) => {
	color = colorMap(color || 'text')
	checkedColor = colorMap(checkedColor || 'primary')
	return <Button onPress={onPress} style={{ marginVertical: Sizes.base }} isTransparent>
		<View style={{
			borderRadius: Sizes.secondary,
			padding: Sizes.secondary / 1.5,
			backgroundColor: checked ? checkedColor : color
		}}>
			<Icon
				color={checked ? "light" : "transparent"}
				style={{ backgroundColor: checked ? checkedColor : Colors.light }}
				iconSize="heading5" name="check" />
		</View>
		{typeof children === 'string' ? <Text style={{ flex: .95 }}>{children}</Text> : children}
	</Button>
}

export default Checkbox