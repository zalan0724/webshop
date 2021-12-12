import Head from 'next/head'
import MainSlider from "../components/MainSlider";


export default function Home() {

    return (
        <div className={'bg-white min-h-screen'}>
            <Head>
                <title>PC Components</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <MainSlider/>
        </div>
    )
}
