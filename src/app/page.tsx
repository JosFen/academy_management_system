// const Homepage = () => {
//   return <div className="">Homepage</div>
// }

// export default Homepage

// Home Redirected to /admin:
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Homepage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/admin')
  }, [router])

  return <div className="">Redirecting to Admin...</div>
}

export default Homepage
