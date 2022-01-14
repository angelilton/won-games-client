import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' }),
  identifier: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('E-mail')
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const { username, email, password, confirm_password } = fieldsValidations
  const schema = Joi.object({ username, email, password, confirm_password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type SignInValues = {
  identifier: string
  password: string
}

export function signInValidate(values: SignInValues) {
  const { identifier, password } = fieldsValidations
  const schema = Joi.object({ identifier, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
