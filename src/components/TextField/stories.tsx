import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'E-mail',
    id: 'Email',
    placeholder: 'john.cage@gmail.com'
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
