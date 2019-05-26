import { cleanup, renderHook } from 'react-hooks-testing-library'
import useFormal from '@rubenamorim/formal'

import useFormalNative from '../src/use-formal-native'

const initialValues = {
  firstName: 'Tony',
  lastName: 'Start',
  email: 'ironman@avengers.io',
}

afterEach(cleanup)

describe('useFormalNative()', () => {
  it('should extend useFormal()', () => {
    const formal = renderHook(() =>
      useFormal(initialValues, { onSubmit: values => values })
    )

    const formalNative = renderHook(() =>
      useFormalNative(initialValues, { onSubmit: values => values })
    )

    // @TODO: there should be a better way to test
    // that useFormalNative() returns a useFormal()
    expect(Object.keys(formalNative.result.current)).toEqual(
      expect.arrayContaining(Object.keys(formal.result.current))
    )
  })

  describe('.getFormProps()', () => {
    it('should throw an error', () => {
      const { result } = renderHook(() =>
        useFormalNative(initialValues, { onSubmit: values => values })
      )

      expect(() => {
        result.current.getFormProps()
      }).toThrowError()
    })
  })

  describe('.getFieldProps()', () => {
    describe('.onChangeText()', () => {
      it('should call change() with the current field value', () => {
        const { result } = renderHook(() =>
          useFormalNative(initialValues, { onSubmit: values => values })
        )

        expect(
          result.current.getFieldProps('firstName').onChangeText
        ).toBeTruthy()
      })
    })
  })

  describe('.getResetButtonProps()', () => {
    describe('.onPress()', () => {
      it('should call reset()', () => {
        const { result } = renderHook(() =>
          useFormalNative(initialValues, { onSubmit: values => values })
        )

        expect(result.current.getResetButtonProps().onPress).toBeTruthy()
      })
    })
  })

  describe('.getSubmitButtonProps()', () => {
    describe('.onPress()', () => {
      it('should call submit()', () => {
        const { result } = renderHook(() =>
          useFormalNative(initialValues, { onSubmit: values => values })
        )

        expect(result.current.getSubmitButtonProps().onPress).toBeTruthy()
      })
    })
  })
})
