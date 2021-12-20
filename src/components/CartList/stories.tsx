import { Story, Meta } from '@storybook/react/types-6-0'
import CartList from '.'

import mockItems from './mock'

export default {
  title: 'Cart/CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 450,00'
  },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
