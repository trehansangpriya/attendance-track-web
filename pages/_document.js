import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/assets/icons/icon.png" type="image/x-icon" />
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                </Head>
                <body className='bg-layout-800 text-layout-100 flex flex-col w-full items-center'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument