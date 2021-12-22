import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { customRender } from 'utils/test-utils'

import CartButton from '.'

describe('<CartButton />', () => {
  it('should show "remove from cart" if isInCart  is true', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true
    }

    customRender(<CartButton id="id_01" hasTitle />, { cartProviderProps })
    expect(screen.getByLabelText(/remove from cart/i)).toBeInTheDocument()
  })

  it('should add id item when is clicked ', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      addToCart: jest.fn()
    }

    customRender(<CartButton id="id_01" />, { cartProviderProps })

    userEvent.click(screen.getByLabelText(/add to cart/i))
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('id_01')
  })

  it('should remove id item when is clicked ', async () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    customRender(<CartButton id="id_01" />, { cartProviderProps })

    userEvent.click(screen.getByLabelText(/remove from cart/i))
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('id_01')
  })
})
