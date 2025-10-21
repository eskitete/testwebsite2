import { describe, it, expect } from 'vitest'

import { render } from '@testing-library/react'
import EstimateBuilder from '../EstimateBuilder'

it('renders and shows estimate range', () => {
  const { getByText } = render(<EstimateBuilder />)
  expect(getByText(/Estimated range/i)).toBeTruthy()
})
