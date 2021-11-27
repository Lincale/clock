import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

export const useClock = ({
  initialState = dayjs().tz().format('YYYY-MM-DDTHH:mm:ss'),
  tz = 'Asia/Tokyo',
}): string => {
  const [clock, setClock] = useState(initialState);

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(dayjs().tz(tz).format('YYYY-MM-DDTHH:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  }, [clock, tz]);

  return clock;
};
