import { useCallback } from 'react'
import useFormal, { FormalConfig } from '@rubenamorim/formal'

import { FormalNativeState } from './types'

export default function useFormalNative<Schema>(
  initialValues: Schema,
  config: FormalConfig<Schema>
): FormalNativeState<Schema> {
  const formal = useFormal(initialValues, config)

  const getFormProps = useCallback(() => {
    throw new Error('formal.getFormProps() is not supported on React Native')
  }, [])

  const getFieldProps = useCallback(
    (field: keyof Schema) => ({
      ...formal.getFieldProps(field),
      onChangeText: (text: string) => {
        formal.change(field, text)
      },
    }),
    [formal]
  )

  const getResetButtonProps = useCallback(
    () => ({
      ...formal.getResetButtonProps(),
      onPress: () => {
        formal.reset()
      },
    }),
    [formal]
  )

  const getSubmitButtonProps = useCallback(
    () => ({
      ...formal.getSubmitButtonProps(),
      onPress: () => {
        formal.submit()
      },
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
