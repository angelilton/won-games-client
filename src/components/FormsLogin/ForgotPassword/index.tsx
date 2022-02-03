import { useState } from 'react'
import TextField from 'components/TextField'
import { FieldErrors, forgotValidate } from 'utils/validations'
import { FormErrorMessage, FormSuccessMessage, FormWrapper } from '../styles'
import {
  Email,
  ErrorOutline,
  CheckCircleOutline
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { ButtonLoading } from 'components/Button/styles'

const FormForgotPassword = () => {
  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '' })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    //loading
    setLoading(true)

    //validate fields
    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    //send post to api
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)

    console.log('data:', data)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccessMessage>
          <CheckCircleOutline />
          You just received an email!
        </FormSuccessMessage>
      ) : (
        <>
          {!!formError && (
            <FormErrorMessage>
              <ErrorOutline /> {formError}
            </FormErrorMessage>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              error={fieldError?.email}
              onInputChange={(v) => handleInput('email', v)}
              icon={<Email />}
            />

            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <ButtonLoading /> : <span>Send E-mail</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
