import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should renders with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('should renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByText('Label')).not.toBeInTheDocument()
  })

  it('should renders with  placeholder', () => {
    renderWithTheme(<TextField placeholder="user name" />)

    expect(screen.getByPlaceholderText('user name')).toBeInTheDocument()
  })
})
