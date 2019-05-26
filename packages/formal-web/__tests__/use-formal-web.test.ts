import { cleanup, renderHook } from 'react-hooks-testing-library'
import useFormal from '@rubenamorim/formal'

import useFormalWeb from '../src/use-formal-web'

const initialValues = {
  firstName: 'Tony',
  lastName: 'Start',
  email: 'ironman@avengers.io',
}

afterEach(cleanup)

describe('useFormalWeb()', () => {
  it('should extend useFormal()', () => {
    const formal = renderHook(() =>
      useFormal(initialValues, { onSubmit: values => values })
    )

    const formalWeb = renderHook(() =>
      useFormalWeb(initialValues, { onSubmit: values => values })
    )

    // @TODO: there should be a better way to test
    // that useFormalWeb() returns a useFormal()
    expect(Object.keys(formalWeb.result.current)).toEqual(
      expect.arrayContaining(Object.keys(formal.result.current))
    )
  })

  describe('.getFormProps()', () => {
    describe('.onSubmit()', () => {
      it('should call submit() method', () => {
        const { result } = renderHook(() =>
          useFormalWeb(initialValues, { onSubmit: values => values })
        )

        expect(result.current.getFormProps().onSubmit).toBeTruthy()
      })
    })
  })

  describe('.getFieldProps()', () => {
    describe('.name', () => {
      it('should be the same as the field', () => {
        const { result } = renderHook(() =>
          useFormalWeb(initialValues, {
            onSubmit: values => values,
          })
        )

        expect(result.current.getFieldProps('firstName').name).toEqual(
          'firstName'
        )
      })
    })

    describe('.id', () => {
      it('should be the same as the field', () => {
        const { result } = renderHook(() =>
          useFormalWeb(initialValues, {
            onSubmit: values => values,
          })
        )

        expect(result.current.getFieldProps('firstName').id).toEqual(
          'firstName'
        )
      })
    })

    describe('.onChange()', () => {
      it('should call change() with the current field value', () => {
        const { result } = renderHook(() =>
          useFormalWeb(initialValues, { onSubmit: values => values })
        )

        expect(result.current.getFieldProps('firstName').onChange).toBeTruthy()
      })
    })
  })

  describe('.getResetButtonProps()', () => {
    describe('.type', () => {
      it('should be button', () => {
        const { result } = renderHook(() =>
          useFormalWeb(initialValues, {
            onSubmit: values => values,
          })
        )

        expect(result.current.getResetButtonProps().type).toEqual('button')
      })
    })

    describe('.onClick()', () => {
      it('should call reset()', () => {
        const { result } = renderHook(() =>
          useFormalWeb(initialValues, { onSubmit: values => values })
        )

        expect(result.current.getResetButtonProps().onClick).toBeTruthy()
      })
    })
  })

  describe('.getSubmitButtonProps()', () => {
    describe('.type', () => {
      it('should be submit', () => {
        const { result } = renderHook(() =>
          useFormalWeb(initialValues, {
            onSubmit: values => values,
          })
        )

        expect(result.current.getSubmitButtonProps().type).toEqual('submit')
      })
    })
  })
})
