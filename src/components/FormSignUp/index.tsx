import React, { useEffect, useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import Link from 'next/link'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { POST_REGISTER } from 'graphql/mutations/register'

import * as S from './styles'

const initialState = {
  username: '',
  email: '',
  password: ''
}

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>(
    initialState
  )

  const [createUser] = useMutation(POST_REGISTER)

  const handleInput = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    console.dir(event.target)

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="username"
          type="text"
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />

        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          onInputChange={(v) => handleInput('confirm-password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth>
          Sign Up now
        </Button>

        <S.FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}

export default FormSignUp
