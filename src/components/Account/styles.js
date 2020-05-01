import {StyleSheet} from 'react-native';
import styleguide from '../../styleguide';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    maxHeight: 350,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  content: {padding: 30},
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: styleguide.colors.background,
  },
  bottomText: {flex: 1},
});
