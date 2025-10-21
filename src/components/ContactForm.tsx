import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional(),
  phone: z.string().min(7),
  contactMethod: z.enum(['phone', 'sms', 'email']).optional(),
  category: z.string().optional(),
  message: z.string().min(5).optional()
})

type ContactFormValues = z.infer<typeof ContactSchema>

export default function ContactForm() {
  const { register, handleSubmit, formState } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema)
  })

  async function onSubmit(values: ContactFormValues) {
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
      if (!res.ok) throw new Error('Network error')
      alert('Message sent — we will be in touch!')
    } catch (err) {
      alert('Error sending message')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 max-w-lg">
      <div>
        <label className="block text-sm">Name</label>
        <input {...register('name')} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input {...register('email')} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input {...register('phone')} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea {...register('message')} className="w-full p-2 border rounded" />
      </div>
      <div>
        <button className="btn px-4 py-2 bg-primary text-white rounded" type="submit" disabled={formState.isSubmitting}>Send Message</button>
      </div>
    </form>
  )
}
