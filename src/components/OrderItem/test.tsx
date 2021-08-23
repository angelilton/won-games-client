import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<CartItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<CartItem {...props} />)

    expect(screen.getByRole('heading', { name: props.title }))
    expect(screen.getByText(props.price))

    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'
    renderWithTheme(<CartItem {...props} downloadLink={downloadLink} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
    renderWithTheme(<CartItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByLabelText('mastercard'))
    expect(screen.getByText(paymentInfo.number))
    expect(screen.getByText(paymentInfo.purchaseDate))
  })
})
