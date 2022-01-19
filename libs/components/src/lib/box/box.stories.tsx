import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from './box';

export default {
  component: Box,
  title: 'Box',
} as Meta;

const Template: Story = (args) => <Box {...args} />;

export const Primary = Template.bind({});
export const Padding = Template.bind({});
Primary.args = {};
Padding.args = {
  padding: '2',
};
