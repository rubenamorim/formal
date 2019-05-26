import React from 'react'
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

export default function BasicExample(): JSX.Element {
  const formal = useFormal(initialValues, {
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Wrapper title="Basic example" debug={formal}>
      <form {...formal.getFormProps()}>
        <TextField {...formal.getFieldProps('firstName')} label="First Name" />
        <TextField {...formal.getFieldProps('lastName')} label="Last Name" />
        <TextField {...formal.getFieldProps('email')} label="Email" />
        <Toolbar>
          <Button {...formal.getSubmitButtonProps()}>Submit</Button>
        </Toolbar>
      </form>
    </Wrapper>
  )
}
