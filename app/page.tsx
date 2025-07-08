'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">ITI Learning Hub</h1>
      <p className="text-lg text-center mb-6 max-w-lg">
        Access free study materials, mock tests, and latest ITI updates – all in one place.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Button onClick={() => router.push('/trades')}>Explore Trades</Button>
        <Button variant="secondary" onClick={() => router.push('/study-materials')}>
          Study Materials
        </Button>
        <Button variant="outline" onClick={() => router.push('/mock-tests')}>
          Take Mock Test
        </Button>
      </div>
    </div>
  )
}
