import { renderWithTheme } from 'utils/tests/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid>Children</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-gap: 3.2rem;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        margin: 3.2rem 0;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `)
  })
})
