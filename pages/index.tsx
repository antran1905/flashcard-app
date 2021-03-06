import Head from "next/head";
import { ReactElement } from "react";
import  GlobalLayout  from "../components/layout/global";
import React from "react";
import neonStyles from '../styles/neon.module.css'
import { Card } from "../components/card";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Flashcard App</title>
        <meta name="description" content="Generated by Flashcard App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={`text-7xl text-center mb-14 mt-32 ${neonStyles.neon}`}>Welcome to <span>Flashcard App</span></h1>
      <div className="text-center text-2xl">Together reach the goal 🚀🚀🚀</div>
      <div>
        <Card path="/" title="Courses" desc="This is Courses of English Center Giang Mai" />
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <GlobalLayout>{page}</GlobalLayout>
};

export default Home;
