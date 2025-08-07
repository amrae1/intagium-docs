---
sidebar_position: 6
---

# Web3 Compatibility Layer

The Web3 Compatibility Layer provides seamless interoperability with the Ethereum ecosystem while maintaining INTAGIUM's advanced capabilities and performance benefits.

## Overview

This layer enables Ethereum developers to deploy their applications on INTAGIUM with minimal modifications while benefiting from improved performance and lower costs.

- **[Web3 Flow Digramm](/flowdigramm/Web3-flow)** - Web3 Flow Digramm 

## Key Features

**Complete JSON-RPC API Compatibility**: The Web3 Compatibility Layer implements the full Ethereum JSON-RPC specification, ensuring that all standard Ethereum tools and libraries work seamlessly with INTAGIUM. This includes support for account management, transaction submission, contract interaction, and event monitoring through familiar interfaces.

**MetaMask Integration**: The compatibility layer provides native support for MetaMask and other Ethereum wallets, enabling users to interact with INTAGIUM using their existing wallet infrastructure. Users can add INTAGIUM as a custom network in MetaMask and use it exactly as they would use Ethereum, while benefiting from INTAGIUM's dual address system and advanced features.

**Smart Contract Deployment**: The layer supports deployment of smart contracts using familiar Ethereum tools and workflows. Contracts can be written in Solidity and deployed using tools like Hardhat, Truffle, or Remix, with automatic compilation to WebAssembly for execution on INTAGIUM's CosmWasm runtime.

**Event System Compatibility**: The compatibility layer provides full support for Ethereum-style events and logs, enabling applications to monitor blockchain activity using familiar patterns and tools. Events from INTAGIUM's custom modules are automatically translated to Ethereum-compatible formats for seamless integration.

**Transaction Format Translation**: The layer automatically translates between Ethereum transaction formats and Cosmos SDK transaction formats, enabling seamless interaction while maintaining the security and performance benefits of the Cosmos SDK architecture.

**Gas Model Adaptation**: The compatibility layer implements an Ethereum-compatible gas model that translates to INTAGIUM's fee structure, enabling familiar gas estimation and fee management while leveraging INTAGIUM's efficient fee processing mechanisms.

### Supported JSON-RPC Methods

The Web3 Compatibility Layer implements a comprehensive set of JSON-RPC methods that cover all aspects of blockchain interaction, from basic account management to complex smart contract operations.

**Account and Balance Methods**: These methods provide access to account information, balance queries, and transaction history using familiar Ethereum interfaces. The methods automatically handle dual address conversion, enabling users to query accounts using either `intag1...` or `0x...` addresses.

- `eth_accounts`: Returns available accounts in the connected wallet
- `eth_getBalance`: Retrieves account balance in wei-compatible format
- `eth_getTransactionCount`: Returns the transaction count (nonce) for an account
- `eth_blockNumber`: Returns the current block number
- `eth_gasPrice`: Returns the current gas price recommendation

**Transaction Methods**: These methods handle transaction submission, monitoring, and receipt retrieval using Ethereum-compatible interfaces while leveraging INTAGIUM's advanced transaction processing capabilities.

- `eth_sendTransaction`: Submits transactions using Ethereum format
- `eth_sendRawTransaction`: Submits pre-signed raw transactions
- `eth_getTransactionByHash`: Retrieves transaction details by hash
- `eth_getTransactionReceipt`: Returns transaction execution receipt
- `eth_estimateGas`: Estimates gas cost for transaction execution

**Contract Methods**: These methods enable smart contract deployment and interaction using familiar Ethereum patterns while leveraging INTAGIUM's CosmWasm runtime for enhanced security and performance.

- `eth_call`: Executes contract methods without state changes
- `eth_getLogs`: Retrieves event logs with filtering capabilities
- `eth_getCode`: Returns contract bytecode
- `eth_getStorageAt`: Accesses contract storage slots

### Dual Address Integration

The Web3 Compatibility Layer seamlessly integrates with INTAGIUM's dual address system, enabling users to interact with the blockchain using either Cosmos-native addresses (`intag1...`) or Ethereum-compatible addresses (`0x...`) through the same Web3 interface.

**Automatic Address Conversion**: The compatibility layer automatically detects address formats and performs necessary conversions to ensure that all operations work correctly regardless of the address format used. This conversion is transparent to users and applications, enabling seamless interaction across different address formats.

**Unified Account Management**: Both address formats resolve to the same underlying account, ensuring that balances, transaction history, and contract interactions are consistent regardless of which address format is used to access the account.

**Cross-Format Transaction Support**: Users can send transactions to recipients using either address format, and the compatibility layer ensures that the transactions are processed correctly and efficiently.

**Wallet Compatibility**: The dual address system works seamlessly with both Ethereum wallets (which use `0x...` addresses) and Cosmos wallets (which use `intag1...` addresses), enabling users to choose their preferred wallet infrastructure.

### Smart Contract Support

The Web3 Compatibility Layer provides comprehensive support for smart contract development and deployment using familiar Ethereum tools and workflows while leveraging INTAGIUM's advanced CosmWasm runtime.

**Solidity Compilation**: Contracts written in Solidity can be compiled and deployed using standard Ethereum development tools. The compatibility layer handles the compilation process and automatically converts the resulting bytecode to WebAssembly for execution on INTAGIUM's CosmWasm runtime.

**Development Tool Integration**: Popular development frameworks like Hardhat, Truffle, and Foundry work seamlessly with INTAGIUM through the Web3 Compatibility Layer. Developers can use their existing development workflows and testing frameworks without modification.

**Contract Interaction**: Deployed contracts can be interacted with using familiar Web3 libraries and patterns. The compatibility layer ensures that contract calls, event monitoring, and state queries work exactly as they would on Ethereum.

**Enhanced Security**: While maintaining Ethereum compatibility, contracts deployed on INTAGIUM benefit from CosmWasm's enhanced security features, including deterministic execution, gas metering, and sandboxed execution environments.

## Getting Started

To start using Web3 compatibility:

1. **[Set up your development environment](/getting-started/quick-start)**
2. **[Get test tokens from the faucet](/getting-started/faucet-usage)**
3. **[Try the Hello World tutorial](/getting-started/hello-world)**
