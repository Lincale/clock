import { Meta, Story } from '@storybook/react';
import React from 'react';
import { RandomUser, RandomUserProps } from './RandomUser';

export default {
  title: 'RandomUser/RandomUser',
  component: RandomUser,
} as Meta<RandomUserProps>;

type Template = Story<RandomUserProps>;

const Template: Template = (args) => <RandomUser {...args} />;

export const Default: Template = Template.bind({});
