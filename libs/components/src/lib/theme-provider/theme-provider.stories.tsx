import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from './theme-provider';

export default {
  component: ThemeProvider,
  title: 'ThemeProvider',
} as Meta;

const Template: Story = (args) => <ThemeProvider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
