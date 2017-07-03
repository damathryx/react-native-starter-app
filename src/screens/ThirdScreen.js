/**
 * Created by jrezan on 25/06/2017.
 */
/**
 * Created by jrezan on 25/06/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';

class ThirdScreen extends Component {
    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'closeModal') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.dismissModal({
                    animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                });
            }
        }
    }
    render() {
        const list = [
            {
                title: 'Logout',
                icon: 'first-page',
                onPress: () => {
                    this.props.navigator.resetTo({
                        screen: 'example.FirstScreen', // unique ID registered with Navigation.registerScreen
                        title: '', // title of the screen as appears in the nav bar (optional)
                        animationType: 'slide-right',
                        navigatorStyle: {
                            navBarHidden: true,
                            navBarHideOnScroll: false,
                            showTitleWhenExpended: false, // default: true. Show the screens title only when the toolbar is collapsed
                        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
                    });
                }
            },
        ]


        return (
            <View>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                roundAvatar
                                leftIcon={{name: item.icon}}
                                key={i}
                                onPress={item.onPress}
                                title={item.title}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

ThirdScreen.propTypes = {};
ThirdScreen.defaultProps = {};

export default ThirdScreen;
