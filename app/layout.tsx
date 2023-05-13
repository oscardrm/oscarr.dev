import { Inter } from 'next/font/google'
import { Providers } from './providers';
import Header from './components/header/header';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'oscarr.dev',
  description: 'Oscar Román #Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
        <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
