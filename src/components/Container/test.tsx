import theme from 'styles/theme'
import { customRender } from 'utils/test-utils'
import Container from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = customRender(
      <Container>
        <span>Won Game</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Game
        </span>
      </div>
    `)
  })
})
