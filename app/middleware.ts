import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { rateLimiter } from '@/app/lib/rate-limiter'

export async function middleware(req: NextRequest) {
  const ip = req.ip ?? '127.0.0.1'

  try {
    const { success } = await rateLimiter.limit(ip)

    if (!success) return new NextResponse('You are writing messages too fast.')
    return NextResponse.next()
  } catch (error) {
    return new NextResponse(
      'Sorry, something went wrong processing your message. Please try again later.'
    )
  }
}

export const config = {
  matcher: '/api/message/:path*'
}
