import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme  from '../styles/theme'
import GlobalStyle from '../styles/global-styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules';
import { wrapper } from '../modules/configureStore';

// const store = createStore(rootReducer);

function MyApp({ Component, pageProps }: AppProps) {
  return(
    // <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Head>
          <meta charSet='utf-8' />
          <title>냉장고 파먹기</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    // </Provider>
  )
}

export default wrapper.withRedux(MyApp);
