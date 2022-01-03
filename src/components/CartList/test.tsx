import { screen } from '@testing-library/react'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { customRender } from 'utils/test-utils'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: mockItems,
      total: 'R$ 450,00'
    }

    customRender(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 450,00')).toHaveStyle({
      color: '#F231A5'
    })
  })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: mockItems
    }

    customRender(<CartList hasButton />, { cartProviderProps })
    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render loading when is searching items', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      loading: true
    }

    customRender(<CartList />, { cartProviderProps })
    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })

  it('should render empty if there are no game', () => {
    customRender(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
