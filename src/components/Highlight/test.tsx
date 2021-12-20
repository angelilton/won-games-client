import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/buyNow'
}

describe('<Highlight />', () => {
  it('should render the heading and button', () => {
    customRender(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    customRender(<Highlight {...props} />)

    expect(
      screen.getByRole('img', { name: `${props.title}-background` })
    ).toHaveAttribute('src', `${props.backgroundImage}`)
  })

  it('should render the float image', () => {
    customRender(<Highlight {...props} floatImage="/float-image.png" />)
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should align right by default', () => {
    const { container } = customRender(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it(`should align left if alignment="left" is set`, () => {
    const { container } = customRender(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    )
  })
})
