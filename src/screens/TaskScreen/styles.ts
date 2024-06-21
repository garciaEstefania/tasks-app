import {StyleSheet} from 'react-native';

import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: scaleF(30),
  },
  taskContainer: {
    flex: 1,
  },
  taskItem: {
    paddingHorizontal: scaleF(20),
    paddingVertical: scaleF(30),
    margin: scaleF(10),
    borderRadius: scaleF(20),
    elevation: 6,
    backgroundColor: '#fff',
  },
  taskLabel: {
    fontSize: scaleF(25),
    fontWeight: '500',
    color: '#000',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelEmptyList: {
    fontSize: scaleF(20),
    color: '#000',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleF(20),
    paddingHorizontal: scaleF(40),
    marginBottom: scaleF(30),
    backgroundColor: '#2177BF',
    borderRadius: scaleF(20),
  },
  labelButton: {
    fontSize: scaleF(25),
    color: '#fff',
    fontWeight: '500',
  },
});

export default styles;
