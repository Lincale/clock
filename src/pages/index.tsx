import dayjs from 'dayjs';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { RealTimeClock } from 'src/components/clock/RealTimeClock';
import { Header } from 'src/components/common/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clock</title>
        <meta name='description' content='Clock' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header size='large' />
      <RealTimeClock />
    </>
  );
};

export default Home;
