import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'
import items from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: 'R$ 350,00'
    }

    customRender(<CartDropdown />, { cartProviderProps })

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: 'R$ 350,00'
    }

    customRender(<CartDropdown />, { cartProviderProps })

    expect(screen.getByText('R$ 350,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })

  it('should render the empty text', () => {
    customRender(<CartDropdown />)

    expect(screen.queryByText(/buy now/i)).not.toBeInTheDocument()
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })
})
