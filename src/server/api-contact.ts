// This is a simple fetch handler for local development only.
import type { IncomingMessage, ServerResponse } from 'http'

export default function handler(req: IncomingMessage, res: ServerResponse) {
  let body = ''
  req.on('data', (c) => (body += c))
  req.on('end', () => {
    console.log('Contact form submission', body)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: true }))
  })
}
