import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FlexibleBox } from '../common/FlexibleBox';

export type RealTimeClockProps = {};

const RealTimeClock: React.FC<RealTimeClockProps> = () => {
  const [clock, setClock] = useState(
    dayjs().tz().format('YYYY-MM-DDTHH:mm:ss')
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(dayjs().tz().format('YYYY-MM-DDTHH:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  }, [clock]);

  return (
    <FlexibleBox>
      <Typography variant={'h5'}>現在の時刻は</Typography>
      <Typography variant={'h4'}>{clock}</Typography>
    </FlexibleBox>
  );
};

export default RealTimeClock;
