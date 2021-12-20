import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'
import items from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    customRender(<CartDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    customRender(<CartDropdown items={items} total="R$ 350,00" />)

    expect(screen.getByText('R$ 350,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })

  it('should render the empty text', () => {
    customRender(<CartDropdown items={[]} total={''} />)

    expect(screen.queryByText(/buy now/i)).not.toBeInTheDocument()
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })
})
