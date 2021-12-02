import Head from 'next/head'
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import Menu from "../components/Menu";
import {useState} from "react";

export default function Home() {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () =>{
        setOpenMenu(!openMenu)
    }

    return (
        <div className={'bg-white min-h-screen'}>
            <Head>
                <title>PC Components</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header handleMenu={handleMenu}/>
            <MainSlider/>
            <Menu open={openMenu} handleMenu={handleMenu}/>
        </div>
    )
}
