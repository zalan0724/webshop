import Head from 'next/head';
import MainSlider from '../components/landingPage/MainSlider';

export default function Home() {

    return (
        <div className={'bg-black min-h-screen overflow-hidden'}>
            <Head>
                <title>PC Components</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainSlider />
        </div>
    );
}
