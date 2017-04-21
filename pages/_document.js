import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import { injectGlobal } from 'styled-components';

/* eslint-disable max-len */

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
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/static/favicons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicons/favicon-194x194.png" sizes="194x194" />
          <link rel="icon" type="image/png" href="/static/favicons/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" type="image/png" href="/static/favicons/favicon-16x16.png" sizes="16x16" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#515151" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Matthieu Lemoine" />
          <meta name="application-name" content="Matthieu Lemoine" />
          <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#515151" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" async />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
