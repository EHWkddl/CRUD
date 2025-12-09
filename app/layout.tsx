import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'MongoDB CRUD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-4xl mx-auto">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  )
}
