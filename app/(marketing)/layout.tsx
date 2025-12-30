// app/(marketing)/layout.tsx
import Navbar from '@/components/Navbar' // یہاں Navbar کا path صحیح ہونا چاہیے
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Marketing Pages',
// }

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Footer وغیرہ */}
    </>
  )
}