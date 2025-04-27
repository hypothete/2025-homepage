import Head from "next/head";
import Layout from "@/components/Layout";

export default function Resume() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/index.html#resume" />
      </Head>
      <Layout>
        <h2>Redirecting...</h2>
      </Layout>
    </>
  );
}
