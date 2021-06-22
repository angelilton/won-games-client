import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { checkboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as Meta

export const Default: Story<checkboxProps> = (args) => <Checkbox {...args} />
