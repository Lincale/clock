import { Meta, Story } from '@storybook/react';
import React from 'react';
import { FlexibleBox, FlexibleBoxProps } from './FlexibleBox';

export default {
  title: 'Common/FlexibleBox',
  component: FlexibleBox,
} as Meta<FlexibleBoxProps>;

type Template = Story<FlexibleBoxProps>;

const Template: Template = (args) => <FlexibleBox {...args} />;

export const Default: Template = Template.bind({});
