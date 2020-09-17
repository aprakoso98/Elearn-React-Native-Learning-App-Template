import { Colors, colorType, Sizes, sizeType } from '@src/utils/constants'
import React from 'react'
import IconFA, { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5'

export type IconProps = FontAwesome5IconProps & {
	color?: colorType
	iconSize?: sizeType
}

const Icon = ({ iconSize = "text", color = "text", ...rest }: IconProps) => {
	color = Colors[color] ? Colors[color] : color
	iconSize = Sizes[iconSize] ? Sizes[iconSize] : iconSize
	// @ts-ignore
	return <IconFA size={iconSize} color={color} {...rest} />
}

export default Icon