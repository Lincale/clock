import type { AppProps } from 'next/app';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { ThemeProvider } from '@mui/system';
import { generalTheme } from 'src/styles/theme';

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault('Asia/Tokyo');

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={generalTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
