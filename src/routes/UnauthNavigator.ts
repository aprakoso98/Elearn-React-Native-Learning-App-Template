import ForgotPassword from '@src/screens/ForgotPassword'
import Intro from "@src/screens/Intro"
import Login from '@src/screens/Login'
import Register from '@src/screens/Register'
import { StackNavProps } from "@src/utils/types"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { fadeIn, fromBottom } from "react-navigation-transitions"
import { sceneType } from '.'

const handleCustomTransition = ({ scenes }) => {
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
	ForgotPassword: { screen: ForgotPassword },
	Register: { screen: Register }
}

const Stack = createStackNavigator(Navs, {
	headerMode: "none",
	transitionConfig: nav => handleCustomTransition(nav),
})

const UnAuthNavigator = createAppContainer(Stack)
export default UnAuthNavigator