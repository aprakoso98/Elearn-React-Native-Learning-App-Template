import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')
const Constants = {
	PADDING: 20,
	FONT_SIZE: 14,
	MAX_HEIGHT: height,
	MAX_WIDTH: width,
}

const Sizes = {
	base: 10,
	secondary: 5,
	text: 14,
	get bodyPadding() { return this.base * 4 },
	get bodyTop() { return this.base * 2 },
	get iconHeader() { return this.heading5 },
	get heading1() { return this.text * 5 },
	get heading2() { return this.text * 4 },
	get heading3() { return this.text * 3 },
	get heading4() { return this.text * 2 },
	get heading5() { return this.text * 1.5 },
	get heading6() { return this.text * 1.25 },
}

export type sizeType = 'base' | 'bodyTop' | 'secondary' | 'text' | 'bodyPadding' | 'iconHeader' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | number & { size?: number }

const Icons = {
	atom: require("@src/assets/icons/atom.png"),
	microscope: require("@src/assets/icons/microscope.png"),
	rulerPen: require("@src/assets/icons/ruler-pen.png"),
	visa: require("@src/assets/icons/visa.png"),
}

const Images = {
	debit: require("@src/assets/images/debit.png"),
	emc2: require("@src/assets/images/emc2.png"),
	familyLearn: require("@src/assets/images/family-learn.png"),
	student: require("@src/assets/images/student.png"),
	teacher: require("@src/assets/images/teacher.png"),
}

const Colors = {
	gold: '#FFD700',
	danger: '#af5d4c',
	grey: '#acacac',
	text: '#707070',
	dark: '#707070',
	greySoft: '#f2f2f2',
	light: '#ffffff',
	primary: '#ce7968',
	primaryTransparent: 'rgba(206,121,104,.5)',
	success: '#80d583',
	blackTransparent: 'rgba(0,0,0,.5)',
	transparent: 'transparent'
}

export type colorType = 'gold' | 'blackTransparent' | 'dark' | 'transparent' | 'danger' | 'grey' | 'text' | 'greySoft' | 'light' | 'primary' | 'success' | string & { color?: string }
export type flexJustifyType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type flexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
export type flexContentType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'
export type alignType = 'left' | 'center' | 'right'

export { Colors, Sizes, Icons, Images }
export default Constants