import { useCallback } from 'react'
import useFormal, { FormalConfig } from '@rubenamorim/formal'

import { FormalWebState, FormalWebTextFieldEvent } from './types'

export default function useFormalWeb<Schema>(
  initialValues: Schema,
  config: FormalConfig<Schema>
): FormalWebState<Schema> {
  const formal = useFormal(initialValues, config)

  const getFormProps = useCallback(
    () => ({
      onSubmit: (e: any) => {
        e.preventDefault()
        formal.submit()
      },
    }),
    [formal]
  )

  const getFieldProps = useCallback(
    (field: keyof Schema) => ({
      ...formal.getFieldProps(field),
      name: field as string,
      id: field as string,
      onChange: (e: FormalWebTextFieldEvent) => {
        formal.change(field, e.target.value)
      },
    }),
    [formal]
  )

  const getResetButtonProps = useCallback(
    () => ({
      ...formal.getResetButtonProps(),
      type: 'button',
      onClick: () => {
        formal.reset()
      },
    }),
    [formal]
  )

  const getSubmitButtonProps = useCallback(
    () => ({
      ...formal.getSubmitButtonProps(),
      type: 'submit',
    }),
    [formal]
  )

  return {
    ...formal,
    getFormProps,
    getFieldProps,
    getResetButtonProps,
    getSubmitButtonProps,
  }
}
