import '../styles/globals.css';
import {AppProps} from "next/app";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>Top-app</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,400;0,500;0,700;1,300&display=swap" rel="stylesheet"/>
        </Head>
        <Component {...pageProps}/>

    </>;
}

export default MyApp;
