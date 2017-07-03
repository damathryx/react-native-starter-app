import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';

// screen related book keeping
registerScreens();

// const tabs = [{
//     label: 'Navigation',
//     screen: 'example.Types',
//     icon: require('../img/list.png'),
//     title: 'Navigation Types',
// }, {
//     label: 'Actions',
//     screen: 'example.Actions',
//     icon: require('../img/swap.png'),
//     title: 'Navigation Actions',
// }];
//
// if (Platform.OS === 'android') {
//     tabs.push({
//         label: 'Transitions',
//         screen: 'example.Transitions',
//         icon: require('../img/transform.png'),
//         title: 'Navigation Transitions',
//     });
// }
Navigation.startSingleScreenApp({
    screen: {
        screen: 'example.FirstScreen', // unique ID registered with Navigation.registerScreen
        title: '', // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {
            navBarHidden: true,
            navBarHideOnScroll: false,
            showTitleWhenExpended: false, // default: true. Show the screens title only when the toolbar is collapsed
        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});