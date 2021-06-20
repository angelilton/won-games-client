import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="userName" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
      'for',
      'userName'
    )

    //se o input e o label estao associados
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="userName" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyleRule(
      'color',
      '#030517'
    )
  })
})

// screen.debug(screen.getByRole('heading', { name: /Checkbox/i })
