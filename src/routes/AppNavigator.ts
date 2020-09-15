import Intro from "@src/screens/Intro"
import { NavigationProps, StackNavProps } from "@src/utils/types"
import { createAppContainer, NavigationScreenProp } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { fromRight } from "react-navigation-transitions"

const handleCustomTransition = ({ scenes }) => {
	const prevScene = scenes[scenes.length - 2]
	const nextScene = scenes[scenes.length - 1]
	return fromRight()
}

const Navs: StackNavProps = {
	Intro: {
		screen: Intro
	}
}

const Stack = createStackNavigator(Navs, {
	headerMode: "none",
	initialRouteName: "Intro",
	transitionConfig: nav => handleCustomTransition(nav),
})

const AppNavigator = createAppContainer(Stack)
export default AppNavigator