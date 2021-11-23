import { Box } from '@mui/system';
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

  return (
    <Box
      sx={{
        display: 'flex',
        fontSize: 32,
        justifyContent: 'center',
        mt: '20rem',
      }}
    >
      {clock}
    </Box>
  );
};
