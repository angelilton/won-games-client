import { Story, Meta } from '@storybook/react/types-6-0'
import OrderItem, { OrderItemProps } from '.'

export default {
  title: 'Cart/OrderItem',
  component: OrderItem,
  args: {
    img: '/img/image-4.png',
    title: 'Borderlands 3',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<OrderItemProps> = (args) => <OrderItem {...args} />

export const WithPayment: Story<OrderItemProps> = (args) => (
  <OrderItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
  paymentInfo: {
    flag: 'visa',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
