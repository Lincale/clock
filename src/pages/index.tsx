import dynamic from 'next/dynamic';
import { Stack, Divider, CircularProgress, Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
// import { RealTimeClock } from 'src/components/clock/RealTimeClock';
import { Header } from 'src/components/common/Header';
import { RandomUser } from 'src/components/user/RandomUser';

const RealTimeClock = dynamic(
  () => import('../components/clock/RealTimeClock'),
  {
    loading: () => <CircularProgress />,
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Clock</title>
        <meta name='description' content='Clock' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header size='large' />
      <Stack
        mt='2rem'
        direction='column'
        justifyContent='space-evenly'
        alignItems='center'
        divider={<Divider orientation='horizontal' flexItem />}
        spacing={5}
      >
        <RealTimeClock mx={'10px'} />
        <RandomUser />
      </Stack>
    </Box>
  );
};

export default Home;
