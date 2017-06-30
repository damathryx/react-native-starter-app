/**
 * Created by jrezan on 26/06/2017.
 */
import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import theme from './themes/default';

const styles = EStyleSheet.create({
    BasicContainer: {
        flex: 1,
        backgroundColor: '$BACKGROUND_THEME',
    },
});

EStyleSheet.build(theme);

export default styles;
