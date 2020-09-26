import { Dimensions } from "react-native"
import { colorType, fontType, sizeType } from './type'

const { width, height } = Dimensions.get('window')
const Constants = {
	PADDING: 20,
	FONT_SIZE: 14,
	MAX_HEIGHT: height,
	MAX_WIDTH: width,
}

const Sizes: { [key in sizeType]: number } = {
	base: 10,
	secondary: 5,
	text: 14,
	spacingText: 3,
	cardHeight: 125,
	get textFloat() { return this.text - 2 },
	get bodyPadding() { return this.base * 4 },
	get bodyVertical() { return this.base * 2 },
	get iconHeader() { return this.heading5 },
	get logo() { return this.heading1 * 1.5 },
	get heading1() { return this.heading2 + 3 },
	get heading2() { return this.heading3 + 3 },
	get heading3() { return this.heading4 + 3 },
	get heading4() { return this.heading5 + 3 },
	get heading5() { return this.heading6 + 3 },
	get heading6() { return this.text + 1 },
}

const Icons = {
	atom: require("@src/assets/icons/atom.png"),
	microscope: require("@src/assets/icons/microscope.png"),
	rulerPen: require("@src/assets/icons/ruler-pen.png"),
	visa: require("@src/assets/icons/visa.png"),
}

const Images = {
	debit: require("@src/assets/images/debit.png"),
	emc2: require("@src/assets/images/emc2.png"),
	familyLearn: require("@src/assets/images/family-learn.jpg"),
	student: require("@src/assets/images/student.jpg"),
	teacher: require("@src/assets/images/teacher.jpg"),
}

const Colors: { [key in colorType]: string } = {
	gold: '#FFD700',
	danger: '#af5d4c',
	grey: '#acacac',
	text: '#707070',
	dark: '#707070',
	greySoft: '#f2f2f2',
	light: '#ffffff',
	success: '#80d583',
	primary: '#ce7968',
	primaryTransparent: 'rgba(206,121,104,.5)',
	greyTransparent: 'rgba(172,172,172,.76)',
	blackTransparent: 'rgba(0,0,0,.5)',
	transparent: 'transparent'
}

const Fonts: { [key in fontType]: string } = {
	Bold: "DMSans-Bold",
	BoldItalic: "DMSans-BoldItalic",
	Italic: "DMSans-Italic",
	Medium: "DMSans-Medium",
	MediumItalic: "DMSans-MediumItalic",
	Regular: "DMSans-Regular",
}

export { Colors, Sizes, Icons, Images, Fonts }
export default Constants