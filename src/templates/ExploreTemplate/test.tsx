import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import apolloCache, { fetchMoreMock, gamesMock } from './mockTest'

import ExploreTemplate from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
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

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
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
})

// getBy... => tem certeza do elemento
// queryBy... => Não tem o elemento
// findBy.. => processos assincronos
