import { render, screen } from '@testing-library/react'

import Loader from './index'

describe('<Loader />', () => {
  it('Should render correctly', () => {
    render(<Loader />)
    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
