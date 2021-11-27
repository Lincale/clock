import { Button, CircularProgress, Stack, Divider, Box } from '@mui/material';
import React from 'react';
import { useUserSwr } from 'src/hooks/useUserSwr';
import { isUserArray, User } from 'src/types/User';
import { FlexibleBox } from '../common/FlexibleBox';

export type RandomUserProps = {};

export const RandomUser: React.FC<RandomUserProps> = ({ ...props }) => {
  const { data, onClick, isLoading, isError } = useUserSwr();

  const RandomUserButton: React.FC = () => {
    return (
      <Button variant='contained' onClick={onClick}>
        ランダムユーザー
      </Button>
    );
  };

  if (isLoading || isError || !isUserArray(data))
    return (
      <>
        <RandomUserButton />
        <CircularProgress />
      </>
    );

  return (
    <FlexibleBox>
      <RandomUserButton />
      <Box>
        {data.results.map((el: User) => (
          <Stack
            key={`${el.name.first}-${el.name.last}`}
            my='2rem'
            direction='column'
            justifyContent='center'
            alignItems='center'
            divider={<Divider orientation='horizontal' flexItem />}
          >
            {`name: ${el.name.first} ${el.name.last}`}
            {`age: ${el.dob.age}`}
            {`email: ${el.email}`}
            {`nat: ${el.nat}`}
          </Stack>
        ))}
      </Box>
    </FlexibleBox>
  );
};
