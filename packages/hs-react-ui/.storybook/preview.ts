import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';
import { addDecorator, addParameters } from '@storybook/react';

import colors from '../src/constants/colors';

addParameters({
  backgrounds: [
    { name: 'grayDark', value: colors.grayDark, default: true },
    { name: 'grayLight', value: colors.grayLight },
    { name: 'background', value: colors.background },
  ],
});

addDecorator(withKnobs);
addDecorator(withDesign);