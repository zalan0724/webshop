import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import React from 'react';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Exo:wght@300;500;600;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
