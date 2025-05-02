import { useState, useCallback } from "react";
import auth from "@/services/auth";
import { AllExceptionFilter } from '@/infrastructure/allExceptions';

export function useLogin() {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (authData: any) => {
    await AllExceptionFilter(auth.login(authData), setData, setError, setLoading)
  }, [])

  const signup = useCallback(async (authData: any) => {
    await AllExceptionFilter(auth.signup(authData), setData, setError, setLoading)
  }, [])

  return {
    data,
    error,
    login,
    signup,
    loading,
  }
}