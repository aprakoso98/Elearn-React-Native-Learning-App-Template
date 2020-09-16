import useValue from '@src/hooks/useValue';
import { Sizes } from '@src/utils/constants';
import React from 'react';
import { Animated, NativeSyntheticEvent, TextInput, TextInputFocusEventData, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import Text from './Text';
import Wrapper from './Wrapper';

interface Props extends TextInputProps {
	value?: string
	label?: string
	containerStyle?: ViewStyle
	labelStyle?: TextStyle
	inputWrapperStyle?: ViewStyle
	inputStyle?: TextStyle
	renderRightAccessory?: (state: {
		floatValue: Animated.AnimatedInterpolation,
		size: Animated.AnimatedInterpolation,
		color: Animated.AnimatedInterpolation,
	}) => React.ReactNode
	onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
	onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
}

const Input = ({
	label = "",
	value = "",
	onBlur = () => null,
	onFocus = () => null,
	renderRightAccessory = () => null,
	containerStyle: containerStyleOverride,
	labelStyle: labelStyleOverride,
	inputWrapperStyle: inputWrapperStyleOverride,
	inputStyle: inputStyleOverride,
	...props
}: Props) => {
	const [floatValue, setValue] = useValue(0, [0, 1], [0, 25])
	const [size, setSize] = useValue(0, [0, 1], [1, 2])
	const [color, setColor] = useValue(0, [0, 1], ["#dfdfdf", "#000000"])
	return <Animated.View style={{
		position: 'relative',
		borderBottomColor: color,
		borderBottomWidth: size,
		marginBottom: Sizes.base,
		...containerStyleOverride
	}}>
		<Animated.View style={{
			position: 'absolute',
			bottom: floatValue,
			...labelStyleOverride
		}}><Text color={floatValue ? 'grey' : 'text'}>{label}</Text></Animated.View>
		<Text color="transparent">.</Text>
		<Wrapper style={inputWrapperStyleOverride}>
			<TextInput
				{...props}
				style={{
					padding: 0,
					flex: 1,
					...inputStyleOverride
				}}
				onFocus={e => {
					setValue(1)
					setColor(1)
					setSize(1)
					onFocus(e)
				}}
				onBlur={e => {
					setValue(value.length > 0 ? 1 : 0)
					setColor(value.length > 0 ? 1 : 0)
					setSize(value.length > 0 ? 1 : 0)
					onBlur(e)
				}}
				blurOnSubmit
			/>
			{renderRightAccessory({ floatValue, size, color })}
		</Wrapper>
	</Animated.View>
}

export default Input