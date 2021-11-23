import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import React from 'react';

export type WrapAppBarProps = {
  size?: 'large' | 'medium' | 'small';
};

export const WrapAppBar: React.FC<WrapAppBarProps> = ({ ...props }) => {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Clock
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
