import type { AppProps } from 'next/app'
import Menu from '../components/Menu';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

export default App