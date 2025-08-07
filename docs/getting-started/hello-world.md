---
sidebar_position: 4
---

# Hello World Tutorial

This tutorial demonstrates INTAGIUM's core functionality through practical examples. You'll learn about the dual address system, basic token operations, and how to interact with INTAGIUM's unique features.

## Prerequisites

Before starting, make sure you have:
- ✅ [Set up the testnet](/getting-started/testnet-setup)
- ✅ Created a wallet with test tokens
- ✅ Basic familiarity with command line operations

## Hello World Transaction Example

Let's start with a simple example that demonstrates the dual address system and basic token transfer functionality.

### Step 1: Create a Wallet

```bash
# Create a new wallet with INTAGIUM address
intagiumd keys add my-wallet

# Output example:
# - name: my-wallet
#   type: local
#   address: intag1abc123def456ghi789jkl012mno345pqr678st
#   pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A..."}'
#   mnemonic: "word1 word2 word3 ... word24"
```

:::warning Important
Save your mnemonic phrase securely! This is the only way to recover your wallet.
:::

### Step 2: Explore the Dual Address System

INTAGIUM's unique dual address system allows you to use both Cosmos and Ethereum address formats:

```bash
# Convert to Ethereum-compatible address
intagiumd dual-address convert intag1abc123def456ghi789jkl012mno345pqr678st

# Output: 0x742d35Cc6634C0532925a3b8D0C9C0E3C5d2B8E1
```

Both addresses represent the **same account**! This means:
- You can receive tokens at either address
- Balances are identical for both formats
- Transactions can use either format interchangeably

### Step 3: Get Test Tokens

Request tokens from the faucet:

```bash
# Request tokens from faucet (testnet only)
curl -X POST "https://faucet.intagium.com/request" \
  -H "Content-Type: application/json" \
  -d '{"address": "intag1abc123def456ghi789jkl012mno345pqr678st", "amount": "1000000"}'

# Check balance
intagiumd query bank balance intag1abc123def456ghi789jkl012mno345pqr678st intag
```

### Step 4: Send Your First Transaction

Now let's demonstrate the dual address system in action:

```bash
# Send tokens using INTAG address
intagiumd tx bank send my-wallet intag1def456ghi789jkl012mno345pqr678stabc123 1000000intag \
  --chain-id intagium-testnet-1 \
  --gas auto \
  --gas-adjustment 1.5 \
  --fees 5000intag

# Or send using Ethereum-compatible address (same result!)
intagiumd tx bank send my-wallet 0x8E2B3F4C5D6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C 1000000intag \
  --chain-id intagium-testnet-1 \
  --gas auto \
  --gas-adjustment 1.5 \
  --fees 5000intag
```

### Step 5: Verify the Transaction

```bash
# Query transaction by hash
intagiumd query tx [TRANSACTION_HASH]

# Check recipient balance
intagiumd query bank balance intag1def456ghi789jkl012mno345pqr678stabc123 intag
```

## Web3 Hello World

INTAGIUM's dual address system means you can also use familiar Web3 tools:

### Using Web3.js

```javascript
const Web3 = require('web3');

// Connect to INTAGIUM testnet
const web3 = new Web3('https://web3.testnet.intagium.com');

async function helloWorld() {
    console.log('🌟 INTAGIUM Hello World with Web3.js');
    
    // Check connection
    const chainId = await web3.eth.getChainId();
    console.log('Connected to chain ID:', chainId);
    
    // Your wallet address (0x format)
    const address = '0x742d35Cc6634C0532925a3b8D0C9C0E3C5d2B8E1';
    
    // Get balance
    const balance = await web3.eth.getBalance(address);
    console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'INTAG');
    
    // Get latest block
    const block = await web3.eth.getBlock('latest');
    console.log('Latest block:', block.number);
    
    // Convert to INTAGIUM address format
    console.log('Ethereum format:', address);
    console.log('INTAGIUM format: intag1abc123def456ghi789jkl012mno345pqr678st');
    console.log('Both addresses represent the same account! 🎉');
}

helloWorld().catch(console.error);
```

### Using Ethers.js

```javascript
const { ethers } = require('ethers');

async function helloWorldEthers() {
    console.log('🌟 INTAGIUM Hello World with Ethers.js');
    
    // Connect to INTAGIUM testnet
    const provider = new ethers.JsonRpcProvider('https://web3.testnet.intagium.com');
    
    // Check network
    const network = await provider.getNetwork();
    console.log('Connected to:', network.name, 'Chain ID:', network.chainId);
    
    // Your wallet address
    const address = '0x742d35Cc6634C0532925a3b8D0C9C0E3C5d2B8E1';
    
    // Get balance
    const balance = await provider.getBalance(address);
    console.log('Balance:', ethers.formatEther(balance), 'INTAG');
    
    // Get block number
    const blockNumber = await provider.getBlockNumber();
    console.log('Current block:', blockNumber);
    
    console.log('✨ INTAGIUM dual address system works with all Ethereum tools!');
}

helloWorldEthers().catch(console.error);
```

### Sending Transactions with Web3

```javascript
const { ethers } = require('ethers');

async function sendTransaction() {
    const provider = new ethers.JsonRpcProvider('https://web3.testnet.intagium.com');
    
    // Create wallet from private key
    const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
    
    console.log('Sending from:', wallet.address);
    
    // Transaction details
    const tx = {
        to: '0x8E2B3F4C5D6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C',
        value: ethers.parseEther('1.0'), // 1 INTAG
        gasLimit: 21000,
        gasPrice: ethers.parseUnits('20', 'gwei')
    };
    
    // Send transaction
    console.log('Sending transaction...');
    const txResponse = await wallet.sendTransaction(tx);
    console.log('Transaction hash:', txResponse.hash);
    
    // Wait for confirmation
    const receipt = await txResponse.wait();
    console.log('✅ Transaction confirmed in block:', receipt.blockNumber);
}
```

## Module Interaction Examples

INTAGIUM's modules provide specialized functionality. Here are some basic examples:

### DRM Module - Register Content

```bash
# Register digital content
intagiumd tx drm register-content \
  --creator $(intagiumd keys show my-wallet -a) \
  --content-hash "sha256:a1b2c3d4e5f6..." \
  --content-type "image" \
  --title "My First Digital Asset" \
  --description "Hello World digital content on INTAGIUM" \
  --license-type "standard" \
  --price "1000000intag" \
  --from my-wallet \
  --chain-id intagium-testnet-1 \
  --gas auto \
  --fees 5000intag
```

### DOR Module - Register Asset

```bash
# Register a digital asset
intagiumd tx dor register-asset \
  --owner $(intagiumd keys show my-wallet -a) \
  --asset-type "nft" \
  --name "Hello World NFT" \
  --description "My first asset on INTAGIUM" \
  --metadata '{"image":"https://example.com/image.png"}' \
  --from my-wallet \
  --chain-id intagium-testnet-1 \
  --gas auto \
  --fees 5000intag
```

### Query Module States

```bash
# Query DRM content
intagiumd query drm content [CONTENT_ID]

# Query DOR assets by owner
intagiumd query dor assets-by-owner $(intagiumd keys show my-wallet -a)

# Query account information
intagiumd query auth account $(intagiumd keys show my-wallet -a)
```

## Advanced Examples

### Multi-Signature Transactions

```bash
# Create a multisig account
intagiumd keys add multisig-account --multisig key1,key2,key3 --multisig-threshold 2

# Create a transaction file
intagiumd tx bank send multisig-account recipient 1000000intag \
  --generate-only \
  --chain-id intagium-testnet-1 > tx.json

# Sign with first key
intagiumd tx sign tx.json --from key1 --chain-id intagium-testnet-1 > tx-signed-1.json

# Sign with second key
intagiumd tx sign tx.json --from key2 --chain-id intagium-testnet-1 > tx-signed-2.json

# Combine signatures and broadcast
intagiumd tx multisign tx.json multisig-account tx-signed-1.json tx-signed-2.json \
  --chain-id intagium-testnet-1 > tx-multisigned.json

intagiumd tx broadcast tx-multisigned.json
```

### Governance Participation

```bash
# Query active proposals
intagiumd query gov proposals

# Vote on a proposal
intagiumd tx gov vote 1 yes \
  --from my-wallet \
  --chain-id intagium-testnet-1 \
  --gas auto \
  --fees 5000intag

# Submit a new proposal
intagiumd tx gov submit-proposal \
  --title "Hello World Proposal" \
  --description "My first governance proposal" \
  --type "Text" \
  --deposit "10000000intag" \
  --from my-wallet \
  --chain-id intagium-testnet-1
```

## Understanding Transaction Fees

INTAGIUM uses a gas-based fee system similar to Ethereum:

```bash
# Estimate gas for a transaction
intagiumd tx bank send my-wallet recipient 1000000intag \
  --chain-id intagium-testnet-1 \
  --gas auto \
  --gas-adjustment 1.5 \
  --dry-run

# Set specific gas and fees
intagiumd tx bank send my-wallet recipient 1000000intag \
  --chain-id intagium-testnet-1 \
  --gas 200000 \
  --fees 10000intag
```

## Error Handling and Debugging

### Common Errors and Solutions

**"account sequence mismatch"**
```bash
# Query account info to get correct sequence
intagiumd query auth account $(intagiumd keys show my-wallet -a)

# Use --sequence flag if needed
intagiumd tx bank send my-wallet recipient 1000000intag \
  --sequence 5 \
  --chain-id intagium-testnet-1
```

**"insufficient funds"**
```bash
# Check your balance
intagiumd query bank balance $(intagiumd keys show my-wallet -a) intag

# Request more tokens from faucet if on testnet
curl -X POST "https://faucet.intagium.com/request" \
  -H "Content-Type: application/json" \
  -d '{"address": "'$(intagiumd keys show my-wallet -a)'", "amount": "10000000"}'
```

**"invalid chain-id"**
```bash
# Verify you're using the correct chain ID
intagiumd config chain-id intagium-testnet-1

# Or specify it in each command
intagiumd tx bank send my-wallet recipient 1000000intag \
  --chain-id intagium-testnet-1
```

## Best Practices

### Security
- Never share your private keys or mnemonic phrases
- Use hardware wallets for mainnet operations
- Keep testnet and mainnet environments separate
- Verify transaction details before signing

### Development
- Always test on testnet first
- Use meaningful transaction memos for tracking
- Implement proper error handling
- Monitor gas usage and optimize transactions

### Address Management
- Take advantage of the dual address system
- Use the format that's most convenient for your use case
- Remember both formats point to the same account
- Use address conversion utilities when needed

## What's Next?

Congratulations! You've completed the Hello World tutorial and learned:

- ✅ How to create and manage INTAGIUM wallets
- ✅ The dual address system and its benefits
- ✅ Basic token operations and transactions
- ✅ Web3 integration with familiar tools
- ✅ Module interactions and specialized features
- ✅ Error handling and debugging techniques

### Continue Your Journey

- **[Explore Modules](/modules/overview)** - Dive deep into INTAGIUM's unique features
- **[API Documentation](/api/overview)** - Build applications with INTAGIUM APIs
- **[Sample Applications](/samples/overview)** - See real-world implementations
- **[Architecture Guide](/architecture/overview)** - Understand INTAGIUM's design

### Join the Community

- [Discord](https://discord.gg/intagium) - Get help and share your projects
- [GitHub](https://github.com/amrae1/INTAGIUM) - Contribute to the codebase
- [Twitter](https://twitter.com/intagium) - Stay updated with the latest news

Happy building on INTAGIUM! 🚀

