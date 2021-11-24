import { fetcher } from 'src/settings/fetcher';
import { initialUsers } from 'src/types/User';
import useSWRImmutable from 'swr/immutable';
export const useUserSwr = () => {
  const { data, error, mutate } = useSWRImmutable(
    `https://randomuser.me/api`,
    fetcher,
    {
      fallbackData: initialUsers,
    }
  );

  return {
    data,
    mutate,
    isLoading: !error && !data,
    isError: error,
  };
};
