import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>리뷰</title>
        <meta charSet="utf-8" name="description" content="리뷰" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>확인용</div>
      </Layout>

      <footer className={styles.footer}></footer>
    </>
  );
};

export default Home;
