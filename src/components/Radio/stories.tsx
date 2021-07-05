import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="Primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        {...args}
      />
    </div>
  </>
)
