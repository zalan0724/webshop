import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Layout from "../components/layout";
import {Provider} from "react-redux";
import {store} from "../app/store";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
