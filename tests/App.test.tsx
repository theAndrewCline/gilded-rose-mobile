import React from 'react'
import App from '../App'
import { render } from '@testing-library/react-native'

describe('sanity', () => {
  it('exists', () => {
    render(<App />)
  })
})
