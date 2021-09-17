import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  slug: 'population-zero',
  developer: 'RockStar Games',
  img: 'cardGames.png',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    //renderizar o GameCard
    renderWithTheme(<GameCard {...props} />)

    //verifiquem se o title e renderizado
    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    //verifiquem se o developer e renderizado
    expect(
      screen.getByRole('heading', { name: /RockStar Games/i })
    ).toBeInTheDocument()

    //verifiquem se a imagem e renderizado
    expect(screen.getByRole('img')).toHaveAttribute('src', 'cardGames.png')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Population Zero')

    //verifiquem se price e renderizado
    expect(screen.getByText('R$ 235,00')).toBeInTheDocument()
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call  onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="10% Off"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/10% off/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
