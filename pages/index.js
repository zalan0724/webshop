import Head from 'next/head';
import MainSlider from '../components/landingPage/MainSlider';

export default function Home() {
    return (
        <div className={'bg-black min-h-screen'}>
            <Head>
                <title>PC Components</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <MainSlider />
        </div>
    );
}
