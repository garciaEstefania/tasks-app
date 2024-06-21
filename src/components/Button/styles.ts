import {StyleSheet} from 'react-native';

import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
  button: {
    width: scaleF(300),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleF(40),
    paddingVertical: scaleF(20),
    backgroundColor: '#2177BF',
    borderRadius: scaleF(20),
    marginBottom: scaleF(30),
  },
  buttonLabel: {
    fontSize: 25,
    color: '#fff',
  },
});

export default styles;
