import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Trigger a sentry error by clicking{" "}
          <button
            type="button"
            onClick={() => {
              throw new Error("💥 Something went wrong!");
            }}
          >
            here
          </button>
        </p>
      </main>

      <Footer />
    </div>
  );
}
