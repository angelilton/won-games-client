import Link from 'next/link'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Email, Lock } from '@styled-icons/material-outlined'

import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
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
    </form>
    <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
    <Button size="large" fullWidth>
      sign in now
    </Button>

    <S.FormLink>
      Don’t have an account?{' '}
      <Link href="/sign-up">
        <a>Sign up</a>
      </Link>
    </S.FormLink>
  </S.Wrapper>
)

export default FormSignIn
