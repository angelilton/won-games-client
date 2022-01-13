import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn, SignInResponse } from 'next-auth/react'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { ButtonLoading } from 'components/Button/styles'
import { Email, Lock } from '@styled-icons/material-outlined'

import * as S from './styles'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setLoading(true)

    //sign-in
    const result: SignInResponse = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result.url) {
      return push(result.url)
    }

    setLoading(false)

    // jogar o erro
    console.error('email ou senha inválida')
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('identifier', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <ButtonLoading /> : <span>Sign in now</span>}
        </Button>

        <S.FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}
export default FormSignIn
