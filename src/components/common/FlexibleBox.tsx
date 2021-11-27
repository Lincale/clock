import { Box } from '@mui/material';
import React from 'react';

export type FlexibleBoxProps = {};

export const FlexibleBox: React.FC<FlexibleBoxProps> = ({ ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </Box>
  );
};
