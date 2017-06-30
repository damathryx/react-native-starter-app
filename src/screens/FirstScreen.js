/**
 * Created by jrezan on 25/06/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import Button from 'apsl-react-native-button';
import Styles from '../styles';

class FirstScreen extends Component {
    render() {
        return (
            <View style={Styles.BasicContainer}>
                <Text>Wew</Text>
            </View>
        );
    }
}

FirstScreen.propTypes = {};
FirstScreen.defaultProps = {};

export default FirstScreen;
