import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const [shortDimension] = width < height ? [width, height] : [height, width];

const guidelineBaseWidth = shortDimension;

export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;

const calculateScreenSize = () => {
  const screenSize = Math.sqrt(width ** 2 + height ** 2);
  return screenSize;
};

const scaleFactor = calculateScreenSize() < 1000 ? 1.5 : 1;

const scaleF = (value: number) => {
  return scale(value / scaleFactor);
};

export {scaleF};
