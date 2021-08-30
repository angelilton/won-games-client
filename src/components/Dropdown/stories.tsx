import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    nav: 'Click here',
    children: 'content'
  }
} as Meta

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />
