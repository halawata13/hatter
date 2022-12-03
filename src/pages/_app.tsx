import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/global.css';
import { RecoilRoot } from "recoil";

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '80em',
  xl: '120em',
};

const theme = extendTheme({
  breakpoints,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
