import { Story, Meta } from '@storybook/react/types-6-0'
import CartIcon, { Quantity } from '.'

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

export const Default: Story<Quantity> = (args) => <CartIcon {...args} />
