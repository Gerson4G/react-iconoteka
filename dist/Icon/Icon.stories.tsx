import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Icon from './Icon';

storiesOf('Icon', module)
  .add('default', () => <Icon name="3DRotation" />);