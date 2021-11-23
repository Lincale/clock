import { Meta, Story } from '@storybook/react';
import React from 'react';
import { RealTimeClock, RealTimeClockProps } from './RealTimeClock';

export default {
  title: 'Clock/RealTimeClock',
  component: RealTimeClock,
} as Meta<RealTimeClockProps>;

type Template = Story<RealTimeClockProps>;

const Template: Template = (args) => <RealTimeClock {...args} />;

export const Default: Template = Template.bind({});
