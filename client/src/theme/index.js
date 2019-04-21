import breakpoints from './breakpoints';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import variables, { spacingUnit } from './variables';

export default () => {
  return {
    palette,
    breakpoints,
    typography,
    variables,
    overrides,
    shape: {
      borderRadius: variables.borderRadiusBase,
      borderRadiusLarge: variables.borderRadiusLarge
    },
    spacing: {
      unit: spacingUnit,
      unit2: spacingUnit * 2,
      unit3: spacingUnit * 3,
      unit4: spacingUnit * 4,
      unit5: spacingUnit * 5,
      unit6: spacingUnit * 6,
      unit8: spacingUnit * 8,
      unit10: spacingUnit * 10
    }
  };
};
