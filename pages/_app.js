import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import Layout from '../components/layout';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Exo:wght@300;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
