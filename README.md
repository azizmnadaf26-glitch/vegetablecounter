# README.md

## Vegetable Counter – Smart Contract dApp

### **Contract Address**
`0x3e9b1497Af7833595B9Aff60657A0cD13Bd0a3B2`  
(https://coston2-explorer.flare.network/address/0x3e9b1497Af7833595B9Aff60657A0cD13Bd0a3B2)
<img width="1847" height="986" alt="image" src="https://github.com/user-attachments/assets/b5b5d98b-953f-4efd-a546-ec092df16585" />

---

## **Description**
Vegetable Counter is a decentralized application (dApp) built on the Flare Coston2 testnet.  
It interacts with a Solidity smart contract that keeps track of a single shared value — the number of vegetables.  
Users connected through a Web3 wallet can add vegetables, remove vegetables, and reset the counter directly on the blockchain.

---

## **Features**
- View the current vegetable count stored on-chain
- Add vegetables to the counter
- Remove vegetables from the counter (with safety restrictions in the contract)
- Reset the counter back to zero
- Full blockchain transaction status visibility (pending, confirming, confirmed)
- Wallet-gated actions to ensure only connected users interact

---

## **How It Solves**
Tracking shared values on centralized applications can lead to data loss, manipulation, or trust issues.  
This project eliminates that problem by storing the vegetable count permanently on the blockchain.

### **Use Cases & Benefits**
| Problem | Solution Through This dApp |
|--------|-----------------------------|
| Shared counter tracking is unreliable | Immutable on-chain storage guarantees accuracy |
| Manual updates can be manipulated | All changes must be confirmed via blockchain transaction |
| No transparency | Every update is logged publicly on the blockchain explorer |
| Need for decentralized demo | Provides an excellent beginner-friendly Web3 learning implementation |

---

This project demonstrates how a simple Solidity contract can integrate seamlessly with a Next.js/Web3 frontend using wagmi + viem, making blockchain development accessible for beginners.


