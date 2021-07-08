import Link from 'next/link'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'

import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />

      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />
    </form>
    <Button size="large" fullWidth>
      sign Up now
    </Button>

    <S.FormLink>
      Already have an account?{' '}
      <Link href="/sign-in">
        <a>Sign in</a>
      </Link>
    </S.FormLink>
  </S.Wrapper>
)

export default FormSignUp
