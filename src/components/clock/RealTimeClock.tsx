import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useClock } from 'src/hooks/useClock';
import { FlexibleBox } from '../common/FlexibleBox';
import { LocaleForm } from './LocaleForm';

export type RealTimeClockProps = { mx: string };

const RealTimeClock: React.FC<RealTimeClockProps> = ({ ...props }) => {
  const [locale, setLocale] = useState('Asia/Tokyo');

  const clock = useClock({ tz: locale });

  return (
    <FlexibleBox>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ mx: props.mx }} variant={'h5'}>
          現在の
        </Typography>
        <LocaleForm setLocale={setLocale} />
        <Typography sx={{ mx: props.mx }} variant={'h5'}>
          の時刻は
        </Typography>
      </Box>
      <Typography variant={'h4'}>{clock}</Typography>
    </FlexibleBox>
  );
};

export default RealTimeClock;
