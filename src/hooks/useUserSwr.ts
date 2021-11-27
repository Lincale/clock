import { fetcher } from 'src/settings/fetcher';
import { initialUsers } from 'src/types/User';
import { useSWRConfig } from 'swr';
import useSWRImmutable from 'swr/immutable';
export const useUserSwr = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWRImmutable(
    `https://randomuser.me/api`,
    fetcher,
    {
      fallbackData: initialUsers,
    }
  );

  const onClick = () => mutate(`https://randomuser.me/api`);

  return {
    data,
    onClick,
    isLoading: !error && !data,
    isError: error,
  };
};
