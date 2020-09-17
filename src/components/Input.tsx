import useValue from '@src/hooks/useValue';
import { Sizes } from '@src/utils/constants';
import React, { useEffect } from 'react';
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
	noLabel?: boolean
	renderRightAccessory?: (state: {
		floatValue: Animated.AnimatedInterpolation,
		size: Animated.AnimatedInterpolation,
		color: Animated.AnimatedInterpolation,
	}) => React.ReactNode
	onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
	onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
}

const Input = ({
	noLabel,
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
	useEffect(() => {
		if (value.length > 0) {
			setValue(1)
		}
	}, [value])
	return <Animated.View style={{
		position: 'relative',
		borderBottomColor: color,
		borderBottomWidth: size,
		...containerStyleOverride
	}}>
		{!noLabel && <>
			<Animated.View style={{
				position: 'absolute',
				bottom: floatValue,
				...labelStyleOverride
			}}><Text color={floatValue ? 'grey' : 'text'}>{label}</Text></Animated.View>
			<Text color="transparent">.</Text>
		</>}
		<Wrapper style={inputWrapperStyleOverride}>
			<TextInput
				{...noLabel && { placeholder: label }}
				{...props}
				value={value}
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
					setColor(0)
					setSize(0)
					onBlur(e)
				}}
				blurOnSubmit
			/>
			{renderRightAccessory({ floatValue, size, color })}
		</Wrapper>
	</Animated.View>
}

export default Input