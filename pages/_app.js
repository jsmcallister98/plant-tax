import { AppProps } from "next/app";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} key={router.asPath} />
    </ThemeProvider>
  );
}

export default MyApp;
