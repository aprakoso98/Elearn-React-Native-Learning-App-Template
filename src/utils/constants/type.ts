import { Colors, Fonts, Sizes } from '.'

export type flexJustifyType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type flexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
export type flexContentType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'
export type alignType = 'left' | 'center' | 'right'
export type colorType = 'primaryTransparent' | 'gold' | 'greyTransparent' | 'blackTransparent' | 'dark' | 'transparent' | 'danger' | 'grey' | 'text' | 'greySoft' | 'light' | 'primary' | 'success' | string & { color?: string }
export type sizeType = 'cardHeight' | 'spacingText' | 'textFloat' | 'logo' | 'base' | 'bodyVertical' | 'secondary' | 'text' | 'bodyPadding' | 'iconHeader' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | number & { size?: number }
export type fontType = 'Bold' | 'BoldItalic' | 'Italic' | 'Medium' | 'MediumItalic' | 'Regular'

export const colorMap = (Type: colorType = "text") => (Type && Colors[Type]) || Type
export const sizeMap = (Type: sizeType = "text") => (Type && Sizes[Type]) || Type
export const fontMap = (Type: fontType = "Regular") => (Type && Fonts[Type]) || Type
