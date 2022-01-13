import { Story, Meta } from '@storybook/react';
import { Components, ComponentsProps } from './components';

export default {
  component: Components,
  title: 'Components',
} as Meta;

const Template: Story<ComponentsProps> = (args) => <Components {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
