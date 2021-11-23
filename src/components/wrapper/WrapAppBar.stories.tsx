import { Meta, Story } from '@storybook/react';
import React from 'react';
import { WrapAppBar, WrapAppBarProps } from './WrapAppBar';

export default {
  title: 'Common/Drawer',
  component: WrapAppBar,
} as Meta<WrapAppBarProps>;

type Template = Story<WrapAppBarProps>;

const Template: Template = (args) => <WrapAppBar {...args} />;

export const Default: Template = Template.bind({});
