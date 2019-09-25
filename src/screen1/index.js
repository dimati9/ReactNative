import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import {
    APP_HOME,
    APP_DETAILS
} from "../routes";

export default createStackNavigator({
    APP_HOME: HomeScreen
})
