import { customRender } from 'utils/test-utils'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = customRender(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        border: 0;
        height: 0.1rem;
        background: rgba(181,181,181,0.3);
        margin: 5.6rem auto 3.2rem;
      }

      @media (min-width:768px) {
        .c0 {
          margin: calc(5.6rem * 2.5) auto 5.6rem;
        }
      }

      <hr
        class="c0"
      />
    `)
  })
})
