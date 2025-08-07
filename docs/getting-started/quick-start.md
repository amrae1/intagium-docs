---
sidebar_position: 2
---

# Quick Start Guide

This guide will help you get up and running with INTAGIUM in just a few minutes. You'll learn how to create a wallet, get test tokens, and make your first transaction.

## Step 1: Create a Wallet

First, let's create a new wallet to interact with the INTAGIUM blockchain:

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

:::tip
Save your mnemonic phrase securely! This is the only way to recover your wallet if you lose access.
:::

### Convert to Ethereum Address

One of INTAGIUM's unique features is the dual address system. You can convert your Cosmos address to an Ethereum-compatible address:

```bash
# Convert to Ethereum-compatible address
intagiumd dual-address convert intag1abc123def456ghi789jkl012mno345pqr678st

# Output: 0x742d35Cc6634C0532925a3b8D0C9C0E3C5d2B8E1
```

Both addresses represent the same account and can be used interchangeably!

## Step 2: Get Test Tokens

To interact with the testnet, you'll need some test tokens. Use the INTAGIUM faucet:

### Using the Web Faucet

1. Visit [https://faucet.intagium.com](https://faucet.intagium.com)
2. Enter your address (either `intag1...` or `0x...` format)
3. Complete the captcha
4. Click "Request Tokens"
5. Wait for confirmation (usually 10-30 seconds)

### Using the API

```bash
# Request tokens via API
curl -X POST "https://faucet.intagium.com/api/request" \
  -H "Content-Type: application/json" \
  -d '{
    "address": "intag1abc123def456ghi789jkl012mno345pqr678st",
    "amount": "10000000"
  }'

# Response example:
{
  "success": true,
  "txhash": "A1B2C3D4E5F6...",
  "amount": "10000000",
  "message": "Tokens sent successfully"
}
```

### Check Your Balance

```bash
# Check balance
intagiumd query bank balance intag1abc123def456ghi789jkl012mno345pqr678st intag

# Output example:
# balance:
#   amount: "10000000"
#   denom: intag
```

## Step 3: Send Your First Transaction

Now let's send some tokens to another address:

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

### Verify the Transaction

```bash
# Query transaction by hash
intagiumd query tx [TRANSACTION_HASH]

# Check recipient balance
intagiumd query bank balance intag1def456ghi789jkl012mno345pqr678stabc123 intag
```

## Step 4: Configure Your Environment

For easier interaction, configure your CLI with testnet defaults:

```bash
# Configure your client for testnet
intagiumd config chain-id intagium-testnet-1
intagiumd config node https://rpc.testnet.intagium.com:443
intagiumd config keyring-backend test

# Verify connection
intagiumd status
```

## Using MetaMask

INTAGIUM's dual address system means you can also use MetaMask for Web3 interactions:

### Add INTAGIUM Testnet to MetaMask

**Network Details:**
- **Network Name**: INTAGIUM Testnet
- **RPC URL**: `https://web3.testnet.intagium.com`
- **Chain ID**: `2024` (Ethereum-compatible chain ID)
- **Currency Symbol**: `INTAG`
- **Block Explorer**: `https://explorer.testnet.intagium.com`

### Import Your Wallet

You can import your INTAGIUM wallet into MetaMask using the same mnemonic phrase you received when creating your wallet.

## Faucet Limits and Best Practices

- **Maximum per request**: 10,000,000 µINTAG (10 INTAG)
- **Cooldown period**: 24 hours per address
- **Daily limit**: 100,000,000 µINTAG (100 INTAG) per IP

**Best Practices:**
- Only request what you need for testing
- Use multiple addresses if you need more tokens
- Monitor your balance and request more before running out
- Report any faucet issues through official channels

## What's Next?

Congratulations! You've successfully:
- ✅ Created an INTAGIUM wallet
- ✅ Obtained test tokens from the faucet
- ✅ Sent your first transaction
- ✅ Learned about the dual address system

Now you're ready to explore INTAGIUM's unique features:

- **[Hello World Tutorial](/getting-started/hello-world)** - More detailed examples
- **[Testnet Setup](/getting-started/testnet-setup)** - Complete testnet configuration
- **[Modules Overview](/modules/overview)** - Explore INTAGIUM's specialized modules
- **[API Documentation](/api/overview)** - Integrate with INTAGIUM's APIs

## Need Help?

- Join our [Discord](https://discord.gg/intagium) community
- Check out the [GitHub repository](https://github.com/amrae1/INTAGIUM)
- Visit the [testnet explorer](https://explorer.testnet.intagium.com)

