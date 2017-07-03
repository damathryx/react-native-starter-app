/**
 * Created by jrezan on 25/06/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Text, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import Styles from '../styles';
import { iconsMap } from '../utils/AppIcons';

class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    render() {
        return (
            <View style={[Styles.BasicContainer, { justifyContent: 'center', }]}>
                <Image
                    style={{ height: 100, width: 100, alignSelf: 'center' }}
                    source={require('./../res/imgs/react-logo.png')}
                />
                <View style={{ marginHorizontal: 20 }}>
                    <FormLabel>Username</FormLabel>
                    <FormInput onChangeText={(text) => console.log(text)}/>
                    <FormLabel>Password</FormLabel>
                    <FormInput secureTextEntry onChangeText={(text) => console.log(text)}/>
                    <FormValidationMessage>Error message</FormValidationMessage>
                    <Button
                        isLoading={this.state.isLoading}
                        onPress={() => {
                            this.props.navigator.resetTo({
                                screen: 'example.SecondScreen', // unique ID registered with Navigation.registerScreen
                                title: 'Home', // navigation bar title of the pushed screen (optional)
                                passProps: {}, // Object that will be passed as props to the pushed screen (optional)
                                animated: true, // does the push have transition animation or does it happen immediately (optional)
                                animationType: 'slide', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
                                backButtonTitle: undefined, // override the back button title (optional)
                                backButtonHidden: false, // hide the back button altogether (optional)
                                navigatorStyle: {
                                    drawUnderNavBar: true,
                                }, // override the navigator style for the pushed screen (optional)
                                navigatorButtons: {
                                    rightButtons: [
                                        {
                                            icon: iconsMap['md-options'], // for icon button, provide the local image asset name
                                            id: 'settings' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                                        }
                                    ]
                                } // override the nav buttons for the pushed screen (optional)
                            });
                        }}
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0.5, flexDirection: 'row', borderWidth: 0 }}
                    >
                        <Text h5>LOGIN</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

FirstScreen.propTypes = {};
FirstScreen.defaultProps = {};

export default FirstScreen;
