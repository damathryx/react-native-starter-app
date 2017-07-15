# rn-starter-app
Boilerplate for starting a react native app

This boilerplate is specifically for [React Native Navigation](https://github.com/wix/react-native-navigation) with [Redux](https://github.com/reactjs/redux), [Code Push](https://github.com/Microsoft/react-native-code-push) setup. 

## Dependencies included

|         Package                    |                 Description                | 
| -----------------------------------|:------------------------------------------:|
| [React Native Navigation](https://github.com/wix/react-native-navigation)               | React Native Navigation provides 100% native platform navigation on both iOS and Android for React Native apps.                              |
| [Redux](https://github.com/reactjs/redux)                                  | Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently.                                  |
| [Code Push](https://github.com/Microsoft/react-native-code-push)           | A cloud service that enables Cordova and React Native developers to deploy mobile app updates directly to their users' devices.                                  |
| [Vector Icons](https://github.com/oblador/react-native-vector-icons)      | Customizable Icons for React Native.Perfect for buttons, logos and nav/tab bars. |
| [React Native Config](https://github.com/luggit/react-native-config)      | Module to expose config variables to your javascript code in React Native, supporting both iOS and Android. An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc). |
| [React Native Extended Stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) | StyleSheet with media-queries, variables, dynamic themes, relative units, percents, math operations, scaling and other styling stuff. |
| [React Native Elements](https://github.com/react-native-training/react-native-elements)| Cross Platform React Native UI Toolkit |


##Added Fonts
- [Lato](http://www.latofonts.com/lato-free-fonts/)
- [OpenSans](https://fonts.google.com/specimen/Open+Sans)

## Project Structure

- `/android` - Android stuff
- `/ios` - iOS stuff
- `/src` - parent directory for all your codes
  - `/actions` - contains all actions for your redux
  - `/constants` - constant values for all over your code
  - `/components` - read more [-> here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
  - `/containers` - read more [-> here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
  - `/res` - resource directory
      - `imgs` - stored images
      - `fonts` - fonts which are installed on `npm install`
  - `/screens`- Contains all your screens with index.js that registers all of it
  - `/store` - redux reducers
  - `/themes` - Theme specific styles and variables
  - `/utils` - Utils and functions
  - `main.js` - initialize the app
