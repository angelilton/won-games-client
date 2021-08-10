import { Story, Meta } from '@storybook/react/types-6-0'
import CartItem, { CartItemProps } from '.'

export default {
  title: 'Cart/CartItem',
  component: CartItem,
  args: {
    img: '/img/image-4.png',
    title: 'Borderlands 3',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<CartItemProps> = (args) => <CartItem {...args} />

export const WithPayment: Story<CartItemProps> = (args) => (
  <CartItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
  paymentInfo: {
    flag: 'visa',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
