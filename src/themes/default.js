/**
 * Created by jrezan on 26/06/2017.
 */
import { Platform, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

let rem = 8;

if (height > 768) {
    rem = 11;
} else if (height > 414) {
    rem = 10;
} else if (height > 375) {
    rem = 9;
} else if (height > 320) {
    rem = 8;
}

export default {
    rem,
    TEXT_COLOR_DARK: '#000000',
    TEXT_COLOR_LIGHT: '#FFFFFF',
    BACKGROUND_THEME: '#faf7f3',
    iconColor: '#f5a623',
    iconFieldSize: 30,
    navColor: '#f7ca18',
    badgeColor: '#f5a623',
    alertColor: '#e73f2d',
    secondaryColor: '#F1A94E',
    tertiaryColor: '#4a5763',
    EXTRA_LARGE_FONT: 2*rem,
    LARGE_FONT: 1.8*rem,
    MEDIUM_FONT: 1.6*rem,
    REGULAR_FONT: 1.5*rem,
    SMALL_FONT: 1.4*rem,
    DETAILS_FONT: 1*rem,
    EXTRA_SMALL_FONT: 0.8*rem,
    LARGE_ICON: 33,
    REGULAR_ICON: 20,
    SMALL_ICON: 20,
    buttonTextSize: 15,
};
