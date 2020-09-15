import Intro from "@src/screens/Intro"
import Login from '@src/screens/Login'
import Register from '@src/screens/Register'
import { prettyConsole } from '@src/utils/helper'
import { StackNavProps } from "@src/utils/types"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { fadeIn, fromBottom, fromRight } from "react-navigation-transitions"

const handleCustomTransition = ({ scenes }) => {
	interface sceneType {
		route: {
			params: {
				[key: string]: any
			},
			routeName: string,
			key: string
		}
	}
	const prevScene: sceneType = scenes[scenes.length - 2]
	const nextScene: sceneType = scenes[scenes.length - 1]
	if (prevScene && nextScene) {
		if (prevScene.route.routeName === 'Intro' && nextScene.route.routeName === 'Login') {
			return fromBottom()
		}
	}
	return fadeIn()
}

const Navs: StackNavProps = {
	Intro: { screen: Intro },
	Login: { screen: Login },
	Register: { screen: Register }
}

const Stack = createStackNavigator(Navs, {
	headerMode: "none",
	initialRouteName: "Intro",
	transitionConfig: nav => handleCustomTransition(nav),
})

const AppNavigator = createAppContainer(Stack)
export default AppNavigator