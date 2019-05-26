import React from 'react'
import * as yup from 'yup'
import useFormal from '@rubenamorim/formal-web'

import Wrapper from '../../components/wrapper'
import TextField from '../../components/text-field'
import Toolbar from '../../components/toolbar'
import Button from '../../components/button'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
})

export default function ValidateOnSubmitExample(): JSX.Element {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Wrapper
      title="Validate onSubmit"
      subtitle="Synchronous validation"
      debug={formal}
    >
      <form {...formal.getFormProps()}>
        <TextField {...formal.getFieldProps('firstName')} label="First Name" />
        <TextField {...formal.getFieldProps('lastName')} label="Last Name" />
        <TextField {...formal.getFieldProps('email')} label="Email" />
        <Toolbar>
          <Button {...formal.getResetButtonProps()} variant="secondary">
            Reset
          </Button>
          <Button {...formal.getSubmitButtonProps()}>Submit</Button>
        </Toolbar>
      </form>
    </Wrapper>
  )
}
