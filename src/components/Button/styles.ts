import {StyleSheet} from 'react-native';

import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
  button: {
    width: scaleF(200),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleF(40),
    paddingVertical: scaleF(30),
    backgroundColor: '#1DA5BB',
    borderRadius: scaleF(100),
    marginBottom: scaleF(30),
  },
});

export default styles;
