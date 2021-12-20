import { screen } from '@testing-library/react'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { customRender } from 'utils/test-utils'

import Cart from '.'

const props = {
  items: itemsMock,
  total: '$ 430,00',
  cards: cardsMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    customRender(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    customRender(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
