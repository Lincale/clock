import { Magic } from "magic-sdk";
import { FC, PropsWithChildren, useMemo } from "react";
import { MagicContext } from "./magicContext";

export const MagicProvider: FC<PropsWithChildren<{
  publishableAPIKey: string;
}>> = ({publishableAPIKey, children}) => {
  const magic = useMemo(() => {
    if (typeof window === 'undefined') return;
    return new Magic(publishableAPIKey)
  }, [publishableAPIKey])
  return (
    <MagicContext.Provider value={{
      magicClient: magic,
    }}>
      {children}
    </MagicContext.Provider>
  )
}
