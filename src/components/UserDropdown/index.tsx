import Link from 'next/link'
import { signOut } from 'next-auth/react'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import Dropdown from 'components/Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserNav = () => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link>
        <AccountCircle />
        <span>My profile</span>
      </S.Link>
    </Link>
    <Link href="/wishlist" passHref>
      <S.Link title="Wishlist">
        <FavoriteBorder />
        <span>Wishlist</span>
      </S.Link>
    </Link>

    <S.Link
      role="button"
      title="Sign out"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      <ExitToApp />
      <span>Sign out</span>
    </S.Link>
  </S.Nav>
)

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    nav={
      <S.Username>
        <AccountCircle />
        <span>{username}</span>
        <ChevronDown />
      </S.Username>
    }
  >
    <UserNav />
  </Dropdown>
)

export default UserDropdown
