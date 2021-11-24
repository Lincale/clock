import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

export type RealTimeClockProps = {};

export const RealTimeClock: React.FC<RealTimeClockProps> = ({ ...props }) => {
  const [clock, setClock] = useState(
    dayjs().tz().format('YYYY-MM-DDTHH:mm:ss')
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(dayjs().tz().format('YYYY-MM-DDTHH:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  });

  return <Typography variant={'h4'}>{clock}</Typography>;
};
