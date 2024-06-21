import {StyleSheet} from 'react-native';

import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
  },
  modalContainer: {
    width: scaleF(600),
    height: scaleF(300),
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: scaleF(20),
    backgroundColor: '#fff',
    borderRadius: scaleF(20),
  },
  title: {
    fontSize: scaleF(25),
    color: '#000',
    fontWeight: '500',
    marginBottom: scaleF(30),
  },
  textInputContainer: {
    flex: 1,
    width: '100%',
  },
  taskTextInput: {
    width: '100%',
    borderRadius: scaleF(20),
    padding: scaleF(25),
    backgroundColor: '#fff',
    elevation: 6,
    color: '#000',
  },
  saveButton: {
    width: '100%',
    padding: scaleF(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleF(20),
    backgroundColor: '#2177BF',
  },
  labelButton: {
    fontSize: scaleF(18),
    color: '#fff',
    fontWeight: '500',
  },
});

export default styles;
