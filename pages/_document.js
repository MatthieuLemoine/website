import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin : 0;
    font-family: Roboto;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style dangerouslySetInnerHTML={{ __html : styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    );
    return { ...page, styles };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <title>Matthieu Lemoine</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
