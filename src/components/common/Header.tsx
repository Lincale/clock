import React, { useState } from 'react';
import { WrapAppBar } from '../wrapper/WrapAppBar';
import { GlobalStyles } from '@mui/material';

export type HeaderProps = {
  size?: 'large' | 'medium' | 'small';
};

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <WrapAppBar />
    </>
  );
};
