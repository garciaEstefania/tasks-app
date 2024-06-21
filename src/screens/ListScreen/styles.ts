import {StyleSheet} from 'react-native';

import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleF(20),
    paddingVertical: scaleF(30),
    margin: scaleF(10),
    borderRadius: scaleF(20),
    elevation: 6,
    backgroundColor: '#fff',
  },
  avatar: {
    width: scaleF(60),
    height: scaleF(60),
    borderRadius: scaleF(100),
    backgroundColor: 'pink',
    marginRight: scaleF(20),
  },
  name: {
    fontSize: scaleF(20),
    fontWeight: '500',
    color: '#000',
  },
  fallBack: {
    width: scaleF(60),
    height: scaleF(60),
    borderRadius: scaleF(100),
    backgroundColor: 'pink',
    marginRight: scaleF(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallBackLabel: {
    color: '#000',
    fontWeight: '600',
    fontSize: scaleF(20),
  },
});

export default styles;
