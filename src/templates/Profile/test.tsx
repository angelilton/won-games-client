import 'match-media-mock'
import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import Profile from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>
  }
}))

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="ProfileMenu" />
  }
}))

describe('<Profile />', () => {
  it('should render profile with ProfileMenu and children', () => {
    customRender(
      <Profile>
        <div>cards List</div>
      </Profile>
    )

    expect(screen.getByText('cards List')).toBeInTheDocument()
    expect(screen.getByText('My profile')).toBeInTheDocument()
    expect(screen.getByTestId('ProfileMenu')).toBeInTheDocument()
  })
})
