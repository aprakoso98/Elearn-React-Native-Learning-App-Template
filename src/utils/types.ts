import { NavigationRoute, NavigationRouteConfigMap, NavigationScreenProp } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack';

export interface StackNavProps extends NavigationRouteConfigMap<NavigationStackOptions, NavigationStackProp<NavigationRoute, any>> { }
export interface ScreenProps {
	navigation: NavigationScreenProp<{}>
}