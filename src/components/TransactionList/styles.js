import {StyleSheet} from 'react-native';
import styleguide from '../../styleguide';

export default StyleSheet.create({
  container: {marginTop: 10},
  separator: {height: 5},
  itemContainer: {flexDirection: 'row', marginHorizontal: 20},
  statusContainer: {marginRight: 20, alignItems: 'center'},
  line: {
    width: StyleSheet.hairlineWidth,
    flex: 1,
    backgroundColor: styleguide.colors.moon400,
    marginTop: 3,
  },
  detailContainer: {flex: 1},
});
