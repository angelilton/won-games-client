import { screen } from '@testing-library/react'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { customRender } from 'utils/test-utils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    customRender(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    customRender(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 4 }
    })

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/4/)).toBeInTheDocument()
  })
})
