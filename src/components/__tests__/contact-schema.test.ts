import { describe, it, expect } from 'vitest'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional(),
  phone: z.string().min(7),
  contactMethod: z.enum(['phone', 'sms', 'email']).optional(),
  category: z.string().optional(),
  message: z.string().min(5).optional()
})

it('validates a minimal contact', () => {
  const val = { name: 'Sam', phone: '5551234' }
  const parsed = ContactSchema.safeParse(val)
  expect(parsed.success).toBe(true)
})
