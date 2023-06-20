import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
          <Head><script async src="https://cdn.splitbee.io/sb.js"></script>
</Head>
        <body className="loading">
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument
