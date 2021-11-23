import { useRouter } from 'next/dist/client/router';
import { links } from 'src/settings/links';

export const usePush: () => Record<keyof typeof links, () => void> = () => {
  const router = useRouter();

  return {
    clock: () => {
      router.push(links.clock);
    },
  };
};
