import "../styles/globals.css";
import "../styles/fonts.css";

import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress height="5" color="#f97316" />
            <Component {...pageProps} />
        </>
    );
}
