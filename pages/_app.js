import { WebProvider } from '@/Contexts/WebContext'
import WebLayout from '@/Utils/WebLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <WebProvider>
      <WebLayout>
        <Component {...pageProps} />
      </WebLayout>
    </WebProvider>
  )
}

export default MyApp
