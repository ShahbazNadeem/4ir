import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Bootstrap CSS CDN */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pzjw8f+ua7Kw1TIq0T7hG4PXbQO0pP1jbkMQFhbkFsew4w45Y4D9kFvJ+noD8doP"
            crossOrigin="anonymous"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
