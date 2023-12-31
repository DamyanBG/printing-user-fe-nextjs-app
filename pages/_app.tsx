import Layout from '@/layout/layout'
import '@/styles/globals.css'
import '@/styles/main.css'
import '@/styles/hamburger.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
