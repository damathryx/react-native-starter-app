import { Navigation } from 'react-native-navigation';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('example.FirstScreen', () => FirstScreen);
    Navigation.registerComponent('example.SecondScreen', () => SecondScreen);
    Navigation.registerComponent('example.ThirdScreen', () => ThirdScreen);
}