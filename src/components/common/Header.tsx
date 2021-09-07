import { chakra } from "@chakra-ui/react"
import React from "react"

export type HeaderProps = {}

export const Header = ({ ...props }: HeaderProps) => {
  return <chakra.h2>Header</chakra.h2>
}
