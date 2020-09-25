import useValue from '@src/hooks/useValue';
import { Colors, Sizes } from '@src/utils/constants';
import { colorMap, colorType } from '@src/utils/constants/type';
import React, { useEffect } from 'react';
import { Animated, NativeSyntheticEvent, TextInput, TextInputFocusEventData, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import Text from './Text';
import Wrapper from './Wrapper';

interface Props extends TextInputProps {
	value?: string
	label?: string
	style?: ViewStyle
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
	borderBaseColor?: colorType
	borderTintColor?: colorType
}

const Input = ({
	noLabel,
	label = "",
	value = "",
	onBlur = () => null,
	onFocus = () => null,
	renderRightAccessory = () => null,
	borderBaseColor = "grey",
	borderTintColor = "primary",
	style: containerStyleOverride,
	labelStyle: labelStyleOverride,
	inputWrapperStyle: inputWrapperStyleOverride,
	inputStyle: inputStyleOverride,
	...props
}: Props) => {
	const [floatValue, setValue] = useValue(0, [0, 1], [0, 25])
	const [size, setSize] = useValue(0, [0, 1], [1, 2])
	const [fontSizeFloat, setFontSizeFloat] = useValue(0, [0, 1], [Sizes.text, Sizes.textFloat])
	const [color, setColor] = useValue(0, [0, 1], [colorMap(borderBaseColor), colorMap(borderTintColor)])
	useEffect(() => {
		if (value.length > 0) {
			setValue(1)
			setFontSizeFloat(1)
		}
	}, [value])
	return <Animated.View style={{
		position: 'relative',
		borderBottomColor: color,
		borderBottomWidth: size,
		marginVertical: Sizes.secondary,
		...containerStyleOverride
	}}>
		{!noLabel && <>
			<Animated.View style={{
				position: 'absolute',
				bottom: floatValue,
				...labelStyleOverride
			}}>
				{/* @ts-ignore */}
				<Text size={fontSizeFloat} color={floatValue ? 'grey' : 'text'}>{label}</Text>
			</Animated.View>
			<Text size="textFloat" color="transparent">.</Text>
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
					setFontSizeFloat(1)
					onFocus(e)
				}}
				onBlur={e => {
					setValue(value.length > 0 ? 1 : 0)
					setFontSizeFloat(value.length > 0 ? 1 : 0)
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