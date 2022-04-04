import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme  from '../styles/theme'
import GlobalStyle from '../styles/global-styles';
import { wrapper } from '../modules/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Head>
        <meta charSet='utf-8' />
        <title>냉장고 파먹기</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp);
