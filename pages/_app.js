import { Provider } from 'react-redux'
import '../styles/globals.css'
import store from '../redux/store/store'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
