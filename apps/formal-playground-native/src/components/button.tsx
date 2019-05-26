import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { FormalNativeSubmitButtonProps } from '@rubenamorim/formal-native'

interface ButtonProps extends FormalNativeSubmitButtonProps {
  children: string
}

export default function Button({
  disabled,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled]}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
  },
  disabled: {
    opacity: 0.25,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})
