import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM5k5d1z5i2k1A7lF7p6K/J5oH/yTPFfK0wqV6" 
            crossorigin="anonymous"
          />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}