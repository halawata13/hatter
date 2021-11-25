import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'crossOrigin'} />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap" rel="stylesheet" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
