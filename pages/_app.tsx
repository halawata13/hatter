import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { RecoilRoot } from 'recoil';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '80em',
  xl: '120em',
});

const theme = extendTheme({
  styles: {
    global: {
      a: {
        outline: 'none',
      },
    },
  },
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
