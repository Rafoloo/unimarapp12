import './globals.css'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'

export const metadata = {
  title: 'UnimarHUB',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}