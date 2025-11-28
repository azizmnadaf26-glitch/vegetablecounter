// hooks/useContract.ts
"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export const useVegetableContract = () => {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)

  const { data: vegetableCount, refetch: refetchCount } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getVegetableCount",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (isConfirmed) refetchCount()
  }, [isConfirmed, refetchCount])

  const addVegetables = async (amount: number) => {
    if (!amount) return
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "addVegetables",
        args: [BigInt(amount)],
      })
    } finally {
      setIsLoading(false)
    }
  }

  const removeVegetables = async (amount: number) => {
    if (!amount) return
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "removeVegetables",
        args: [BigInt(amount)],
      })
    } finally {
      setIsLoading(false)
    }
  }

  const resetCounter = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "resetCounter",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data: { vegetableCount: vegetableCount ? Number(vegetableCount) : 0 },
    actions: { addVegetables, removeVegetables, resetCounter },
    state: {
      isLoading: isLoading || isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error,
    },
  }
}
