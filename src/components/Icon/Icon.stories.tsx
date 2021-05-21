import React from 'react';
import { Story, Meta } from '@storybook/react';

import Component from './index';
import { IconProps } from './types';

export default {
  title: 'Icon',
  component: Component,
  decorators: [],
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

export const Icon: Story<IconProps> = (args) => <Component {...args} />;

Icon.args = {
  name: 'AlarmSnooze',
  className: '',
  stroke: 'regular',
  type: 'line',
  height: 40,
  width: 40,
};
