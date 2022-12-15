import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
            {`
              a { letter-spacing: -1px; }
            `}
        </style>
    </div>
  )
}
