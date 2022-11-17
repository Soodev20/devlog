import type { AppProps } from 'next/app'
import Menu from '../components/Menu';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

