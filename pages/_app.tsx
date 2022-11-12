import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import network from "../utils/network";
import Header from "../components/Header";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

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
