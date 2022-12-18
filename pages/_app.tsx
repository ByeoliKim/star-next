import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>
            {`
              a { letter-spacing: -1px; }
            `}
        </style>
    </Layout>
  )
}
