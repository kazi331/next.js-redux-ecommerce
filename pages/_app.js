import { Provider } from 'react-redux'
import Nav from '../components/Nav'
import store from '../redux/store/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
