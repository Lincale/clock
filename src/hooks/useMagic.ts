import { useContext } from "react";
import { MagicContext } from "src/lib/magicContext";

export const useMagic = () => useContext(MagicContext)
