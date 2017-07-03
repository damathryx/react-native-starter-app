/**
 * Created by jrezan on 25/06/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { iconsMap } from '../utils/AppIcons';
import Styles from '../styles';

class SecondScreen extends Component {
    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'settings') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.showModal({
                    screen: 'example.ThirdScreen',
                    title: 'Modal',
                    navigatorButtons: {
                        rightButtons: [
                            {
                                icon: iconsMap['ios-arrow-down-outline'], // for icon button, provide the local image asset name
                                id: 'closeModal' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                            }
                        ]
                    }
                });
            }
        }
    }
    render() {
        return (
            <View style={Styles.BasicContainer}>
            </View>
        );
    }
}

SecondScreen.propTypes = {};
SecondScreen.defaultProps = {};

export default SecondScreen;
/**
 * Created by jrezan on 25/06/2017.
 */
