import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import network from "../utils/network";
import Header from "../components/Header";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
<script src="//code.tidio.co/hqp6xsxominuspcp9pbdxab973wl6oke.js" async></script>

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <RecoilRoot>
        <Head>
          <title>KHIKHI Marketplace</title>
        </Head>
        <div>
          <Toaster />
        </div>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </ThirdwebProvider>
  );
}

export default MyApp;
