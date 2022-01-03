import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { customRender } from 'utils/test-utils'

import OrderItem from '.'

const props = {
  id: 'id_01',
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<OrderItem />', () => {
  it('should render the item', () => {
    customRender(<OrderItem {...props} />)

    expect(screen.getByRole('heading', { name: props.title }))
    expect(screen.getByText(props.price))

    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
  })

  it('should render remove item when remove is clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }
    customRender(<OrderItem {...props} />, { cartProviderProps })

    const removeLink = screen.getByText(/remove/i)
    expect(removeLink).toBeInTheDocument()

    userEvent.click(removeLink)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('id_01')
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'
    customRender(<OrderItem {...props} downloadLink={downloadLink} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
    customRender(<OrderItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByLabelText('mastercard'))
    expect(screen.getByText(paymentInfo.number))
    expect(screen.getByText(paymentInfo.purchaseDate))
  })
})
