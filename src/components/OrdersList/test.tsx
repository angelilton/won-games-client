import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'
import mock from './mock'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/OrderItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock OrderItem">{children}</div>
  }
}))

describe('<OrdersList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<OrdersList items={mock} />)

    expect(screen.getByRole('heading', { name: /my orders/i }))
    expect(screen.getAllByTestId('Mock OrderItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    renderWithTheme(<OrdersList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
