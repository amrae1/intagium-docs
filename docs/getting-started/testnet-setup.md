---
sidebar_position: 3
---

# Testnet Setup

INTAGIUM provides a robust testnet environment for developers to experiment with the platform's features without using real tokens. The testnet mirrors the mainnet functionality while providing easy access to test tokens and a more permissive environment for development and testing.

## Testnet Information

### Network Details
- **Chain ID**: `intagium-testnet-1`
- **RPC Endpoint**: `https://rpc.testnet.intagium.com`
- **REST API**: `https://api.testnet.intagium.com`
- **WebSocket**: `wss://ws.testnet.intagium.com`
- **Explorer**: `https://explorer.testnet.intagium.com`
- **Faucet**: `https://faucet.intagium.com`

### Web3 Compatibility
- **JSON-RPC Endpoint**: `https://web3.testnet.intagium.com`
- **Chain ID (EVM)**: `2024`
- **Currency Symbol**: `INTAG`

## CLI Setup

### Installation

First, install the INTAGIUM daemon:

```bash
# Download the latest release
wget https://github.com/amrae1/INTAGIUM/releases/latest/download/intagiumd-linux-amd64

# Make it executable
chmod +x intagiumd-linux-amd64

# Move to your PATH
sudo mv intagiumd-linux-amd64 /usr/local/bin/intagiumd

# Verify installation
intagiumd version
```

### Configuration

Configure your client for the testnet:

```bash
# Initialize configuration
intagiumd config chain-id intagium-testnet-1
intagiumd config node https://rpc.testnet.intagium.com:443
intagiumd config keyring-backend test

# Verify connection
intagiumd status
```

### Create or Import Wallet

```bash
# Create a new wallet
intagiumd keys add my-testnet-wallet

# Or import existing wallet from mnemonic
intagiumd keys add my-testnet-wallet --recover

# List all wallets
intagiumd keys list

# Show wallet address
intagiumd keys show my-testnet-wallet -a
```

## MetaMask Setup

### Add INTAGIUM Testnet Network

1. Open MetaMask and click on the network dropdown
2. Select "Add Network" or "Custom RPC"
3. Enter the following details:

| Field | Value |
|-------|-------|
| Network Name | INTAGIUM Testnet |
| New RPC URL | `https://web3.testnet.intagium.com` |
| Chain ID | `2024` |
| Currency Symbol | `INTAG` |
| Block Explorer URL | `https://explorer.testnet.intagium.com` |

4. Click "Save" to add the network
5. Switch to the INTAGIUM Testnet network

### Import Your Wallet

You can import your INTAGIUM wallet into MetaMask:

1. Click on the account icon in MetaMask
2. Select "Import Account"
3. Choose "Seed Phrase" as the import method
4. Enter your 24-word mnemonic phrase
5. Click "Import"

Your INTAGIUM address will now be available in MetaMask with the `0x...` format.

## Web3 Development Setup

### JavaScript/TypeScript

```bash
# Install Web3.js
npm install web3

# Or install Ethers.js
npm install ethers
```

Example Web3.js setup:

```javascript
const Web3 = require('web3');

// Connect to INTAGIUM testnet
const web3 = new Web3('https://web3.testnet.intagium.com');

// Check connection
web3.eth.getChainId().then(chainId => {
    console.log('Connected to chain ID:', chainId); // Should be 2024
});

// Get balance
const address = '0x742d35Cc6634C0532925a3b8D0C9C0E3C5d2B8E1';
web3.eth.getBalance(address).then(balance => {
    console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'INTAG');
});
```

Example Ethers.js setup:

```javascript
const { ethers } = require('ethers');

// Connect to INTAGIUM testnet
const provider = new ethers.JsonRpcProvider('https://web3.testnet.intagium.com');

// Check connection
provider.getNetwork().then(network => {
    console.log('Connected to network:', network.name, 'Chain ID:', network.chainId);
});

// Get balance
const address = '0x742d35Cc6634C0532925a3b8D0C9C0E3C5d2B8E1';
provider.getBalance(address).then(balance => {
    console.log('Balance:', ethers.formatEther(balance), 'INTAG');
});
```

### Python

```bash
# Install Web3.py
pip install web3
```

Example Python setup:

```python
from web3 import Web3

# Connect to INTAGIUM testnet
w3 = Web3(Web3.HTTPProvider('https://web3.testnet.intagium.com'))

# Check connection
if w3.is_connected():
    print(f"Connected to INTAGIUM testnet")
    print(f"Chain ID: {w3.eth.chain_id}")
else:
    print("Failed to connect")

# Get balance
address = '0x742d35Cc6634C0532925a3b8D0C9C0E3C5d2B8E1'
balance = w3.eth.get_balance(address)
print(f"Balance: {w3.from_wei(balance, 'ether')} INTAG")
```

## Faucet Usage

### Web Interface

1. Visit [https://faucet.intagium.com](https://faucet.intagium.com)
2. Enter your address (either `intag1...` or `0x...` format)
3. Complete the captcha verification
4. Click "Request Tokens"
5. Wait for confirmation (usually 10-30 seconds)

### API Usage

```bash
# Request tokens via API
curl -X POST "https://faucet.intagium.com/api/request" \
  -H "Content-Type: application/json" \
  -d '{
    "address": "intag1abc123def456ghi789jkl012mno345pqr678st",
    "amount": "10000000"
  }'
```

### CLI Integration

```bash
# Request tokens using CLI helper
intagiumd faucet request my-testnet-wallet --amount 10000000

# Check if request was successful
intagiumd query bank balance $(intagiumd keys show my-testnet-wallet -a) intag
```

## Faucet Limits

- **Maximum per request**: 10,000,000 µINTAG (10 INTAG)
- **Cooldown period**: 24 hours per address
- **Daily limit**: 100,000,000 µINTAG (100 INTAG) per IP
- **Supported formats**: Both `intag1...` and `0x...` addresses

## Testing Your Setup

### Basic Transaction Test

```bash
# Send a test transaction
intagiumd tx bank send my-testnet-wallet intag1def456ghi789jkl012mno345pqr678stabc123 1000000intag \
  --chain-id intagium-testnet-1 \
  --gas auto \
  --gas-adjustment 1.5 \
  --fees 5000intag

# Query the transaction
intagiumd query tx [TRANSACTION_HASH]
```

### Web3 Transaction Test

```javascript
// Using Ethers.js
const { ethers } = require('ethers');

async function sendTransaction() {
    const provider = new ethers.JsonRpcProvider('https://web3.testnet.intagium.com');
    const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
    
    const tx = {
        to: '0x8E2B3F4C5D6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C',
        value: ethers.parseEther('1.0'),
        gasLimit: 21000,
        gasPrice: ethers.parseUnits('20', 'gwei')
    };
    
    const txResponse = await wallet.sendTransaction(tx);
    console.log('Transaction hash:', txResponse.hash);
    
    const receipt = await txResponse.wait();
    console.log('Transaction confirmed in block:', receipt.blockNumber);
}
```

## Explorer Usage

The INTAGIUM testnet explorer at [https://explorer.testnet.intagium.com](https://explorer.testnet.intagium.com) allows you to:

- View transaction details
- Explore blocks and their contents
- Search for addresses and their transaction history
- Monitor network statistics
- View validator information

## Best Practices

### Development
- Use the testnet for all development and testing
- Keep your testnet and mainnet configurations separate
- Test all functionality thoroughly before mainnet deployment
- Use version control for your configuration files

### Security
- Never use mainnet private keys on testnet
- Use separate wallets for testing
- Don't share private keys or mnemonics
- Use environment variables for sensitive data

### Resource Management
- Request only the tokens you need from the faucet
- Clean up test data regularly
- Monitor your token usage
- Use multiple test addresses if needed

## Troubleshooting

### Connection Issues

```bash
# Check node status
intagiumd status

# Test RPC connection
curl -X POST https://rpc.testnet.intagium.com \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"status","params":[],"id":1}'
```

### Common Problems

**"Account not found" error**: Make sure you have tokens in your account from the faucet

**"Insufficient fees" error**: Increase the gas price or fees in your transaction

**"Invalid chain-id" error**: Verify you're using `intagium-testnet-1` as the chain ID

**MetaMask connection issues**: Clear your browser cache and re-add the network

## Next Steps

Now that you have your testnet environment set up, you can:

- **[Try the Hello World Tutorial](/getting-started/hello-world)** - Learn basic operations
- **[Explore the Modules](/modules/overview)** - Discover INTAGIUM's unique features
- **[Check the API Documentation](/api/overview)** - Integrate with your applications
- **[View Sample Applications](/samples/overview)** - See real-world examples

## Support

If you encounter issues with the testnet setup:

- Join our [Discord](https://discord.gg/intagium) for community support
- Check the [GitHub Issues](https://github.com/amrae1/INTAGIUM/issues) for known problems
- Visit the [documentation](/api/overview) for detailed API references

