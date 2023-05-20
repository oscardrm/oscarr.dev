import { Providers } from './providers';
import HeaderSection from './components/headerSection/HeaderSection';
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
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <HeaderSection />
          {children}
        </Providers>
      </body>
    </html>
  )
}
