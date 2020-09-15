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
	get heading1() { return this.text * 5 },
	get heading2() { return this.text * 4 },
	get heading3() { return this.text * 3 },
	get heading4() { return this.text * 2 },
	get heading5() { return this.text * 1.5 },
}

const Icons = {
	atom: require("@src/assets/icons/atom.png"),
	Microscope: require("@src/assets/icons/microscope.png"),
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
	danger: '#af5d4c',
	grey: '#acacac',
	text: '#707070',
	greySoft: '#f2f2f2',
	light: '#ffffff',
	primary: '#ce7968',
	success: '#80d583',
}

export type colorType = 'danger' | 'grey' | 'text' | 'greySoft' | 'light' | 'primary' | 'success'
export type flexType = 'space-between' | 'space-evenly' | 'space-around' | 'flex-start' | 'flex-end' | 'center'

export { Colors, Sizes, Icons, Images }
export default Constants