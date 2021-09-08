import { Magic } from "magic-sdk";
import { createContext } from "react";

export const MagicContext = createContext<{
  magicClient?: Magic;
}>({})
