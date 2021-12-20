import { Story, Meta } from '@storybook/react/types-6-0'
import CartIcon from '.'

export default {
  title: 'Cart/CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    quantity: 2
  }
} as Meta

export const Default: Story = (args) => <CartIcon {...args} />
