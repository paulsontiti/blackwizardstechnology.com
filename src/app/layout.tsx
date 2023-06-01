//import './globals.css'
import HomeAppBar from '@/components/home/AppBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body style={{
        backgroundImage:`url("/assets/BWT.jpg")`,
        minHeight:'100vh'
      }}>
        <HomeAppBar/>
        {children}</body>
    </html>
  )
}
