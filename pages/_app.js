import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { setLocalItems } from '../redux/features/cartSlice'
import { getProducts } from '../redux/features/productSlice'
import { wrapper } from '../redux/store/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        dispatch(setLocalItems())
    }, [dispatch]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
