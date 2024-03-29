import { fireEvent, screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import GameCard from '.'

const props = {
  id: 'id_01',
  title: 'Population Zero',
  slug: 'population-zero',
  developer: 'RockStar Games',
  img: 'cardGames.png',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    //renderizar o GameCard
    customRender(<GameCard {...props} />)

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
    expect(screen.getByText('235')).toBeInTheDocument()
  })

  it('should render a line-through in price when promotional', () => {
    customRender(<GameCard {...props} promotionalPrice={15} />)

    expect(screen.getByText('235')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('15')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    customRender(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call  onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    customRender(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render ribbon', () => {
    customRender(
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
