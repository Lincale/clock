import { Button, CircularProgress, Stack, Divider } from '@mui/material';
import React from 'react';
import { useUserSwr } from 'src/hooks/useUserSwr';
import { isUserArray, User } from 'src/types/User';

export type RandomUserProps = {};

export const RandomUser: React.FC<RandomUserProps> = ({ ...props }) => {
  const { data, mutate, isLoading, isError } = useUserSwr();

  const RandomUserButton: React.FC = () => {
    return (
      <Button
        variant='contained'
        onClick={() => {
          mutate?.();
        }}
      >
        天気を見る
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
    <>
      <RandomUserButton />
      <>
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
      </>
    </>
  );
};
