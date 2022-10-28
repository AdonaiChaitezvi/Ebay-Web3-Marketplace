import { useActiveListings, useContract } from "@thirdweb-dev/react";
import Head from "next/head";
import { Fragment } from "react";
import Header from "../components/Header";
import Listing from "../components/Listing";
import { Fade } from "react-reveal";
import { ListingsLoader } from "../components/Loader";

const Home = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(contract);
  return (
    <Fragment>
      <Head>
        <title>Ebay Web3 Clone</title>
      </Head>
      <div className="min-h-screen bg-gray-100/30">
        <Header />
        <main className="mx-auto max-w-6xl p-2 ">
          {loadingListings ? (
            <ListingsLoader />
          ) : (
            <Fade bottom>
              <div className="mx-auto grid gap-5 px-2 pb-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listings?.map((listing, i) => (
                  <Listing listing={listing} key={i} />
                ))}
              </div>
            </Fade>
          )}
        </main>
      </div>
    </Fragment>
  );
};

export default Home;
