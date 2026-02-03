import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
        <li><Link href="/dashboard/users/1">User1</Link></li>
        <li><Link href="/dashboard/users/2">User2</Link></li>
        <li><Link href="/dashboard/users/3">User3</Link></li>
        <li><Link href="/dashboard/users/4">User4</Link></li>

    </div>
  )
}

export default Page