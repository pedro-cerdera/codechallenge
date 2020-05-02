import {StyleSheet} from 'react-native';
import styleguide from '../../../styleguide';

export default StyleSheet.create({
  container: {width: '100%', flex: 1, maxHeight: 350},
  cardContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  scrollContainer: {flex: 1},
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: styleguide.colors.primary,
    alignItems: 'center',
  },
  buttonText: {color: 'white'},
});
