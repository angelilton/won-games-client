import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...args} />)

    // verifique se o title existe renderizado (.toBeInTheDocument())
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    // verifique se o subtitle existe renderizado
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    // verifique se a imagem existe renderizado
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...args}
        ribbon="my Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
