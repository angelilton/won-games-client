import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import apolloCache, { fetchMoreMock, gamesMock } from './mockTest'

import ExploreTemplate from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<ExploreTemplate />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <ExploreTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render the sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <ExploreTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/price/i)).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <ExploreTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))
    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <ExploreTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByLabelText(/low to high/i))

    expect(push).toHaveBeenCalledWith({
      pathname: '/explorer',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })
})

// getBy... => tem certeza do elemento
// queryBy... => Não tem o elemento
// findBy.. => processos assincronos
