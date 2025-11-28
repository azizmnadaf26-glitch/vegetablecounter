// components/sample.tsx
"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useVegetableContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const [amount, setAmount] = useState("")
  const { data, actions, state } = useVegetableContract()

  const handleAdd = async () => {
    await actions.addVegetables(Number(amount))
    setAmount("")
  }

  const handleRemove = async () => {
    await actions.removeVegetables(Number(amount))
    setAmount("")
  }

  const handleReset = async () => {
    await actions.resetCounter()
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p>Please connect your wallet</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Vegetable Counter</h1>
      <p className="text-lg font-semibold">Current Count: {data.vegetableCount}</p>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      />

      <button
        onClick={handleAdd}
        disabled={!amount || state.isLoading}
        className="w-full px-4 py-2 bg-green-600 text-white rounded"
      >
        {state.isLoading ? "Processing..." : "Add Vegetables"}
      </button>

      <button
        onClick={handleRemove}
        disabled={!amount || state.isLoading}
        className="w-full px-4 py-2 bg-yellow-600 text-white rounded"
      >
        {state.isLoading ? "Processing..." : "Remove Vegetables"}
      </button>

      <button
        onClick={handleReset}
        disabled={state.isLoading}
        className="w-full px-4 py-2 bg-red-600 text-white rounded"
      >
        {state.isLoading ? "Processing..." : "Reset Counter"}
      </button>

      {state.hash && (
        <p className="break-all text-xs mt-3">Tx Hash: {state.hash}</p>
      )}
      {state.error && (
        <p className="text-red-500 text-sm mt-2">Error: {state.error.message}</p>
      )}
    </div>
  )
}

export default SampleIntregation
