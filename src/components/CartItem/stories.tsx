import { Story, Meta } from '@storybook/react/types-6-0'
import CartItem, { CartItemProps } from '.'

export default {
  title: 'Cart/CartItem',
  component: CartItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<CartItemProps> = (args) => <CartItem {...args} />

export const WithPayment: Story<CartItemProps> = (args) => (
  <CartItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd'
}
