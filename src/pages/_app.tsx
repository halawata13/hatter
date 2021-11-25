import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '../styles/global.css';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '80em',
  xl: '120em',
});

const theme = extendTheme({
  breakpoints,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
