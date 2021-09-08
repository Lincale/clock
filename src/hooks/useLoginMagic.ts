import { useState, useCallback } from "react"
import { useMagic } from "./useMagic"

const useLoginByMagic = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const {magicClient} = useMagic()
  const handleLogin = useCallback(async() => {
    if (!magicClient) throw new Error('We have to initilize the magic client before use the hook. Or the Client can not use in Server Side process.')
    try {
      if (!email) throw new Error('Email is required')
      setErrorMessage(null)
      const magicAuthToken = await magicClient.auth.loginWithMagicLink({
        email
      })
      setToken(magicAuthToken)
    } catch (e: any) {
      console.error(e)
      setErrorMessage(e.message)
    }
  }, [email, magicClient, setToken, setErrorMessage])
  return {
    email,
    setEmail,
    token,
    errorMessage,
    handleLogin,
  }
}

export default useLoginByMagic;
