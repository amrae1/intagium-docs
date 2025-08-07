---
sidebar_position: 3
---

# Digital Ownership Registry (DOR) Module

The Digital Ownership Registry (DOR) module serves as INTAGIUM's comprehensive asset registration and ownership tracking system, providing a universal registry for digital and tokenized real-world assets. The DOR module addresses the fundamental need for transparent, immutable, and globally accessible ownership records that can be trusted by all parties in complex asset transactions and ownership transfers.

## Overview

Traditional asset ownership systems suffer from fragmentation, lack of transparency, and reliance on centralized authorities that can create bottlenecks and single points of failure. The DOR module revolutionizes asset ownership by creating a unified, blockchain-based registry that provides irrefutable proof of ownership, complete transaction history, and automated transfer mechanisms.

The DOR module supports a wide range of asset types including non-fungible tokens (NFTs), domain names, patents, trademarks, real estate titles, vehicle registrations, art pieces, collectibles, and any other asset that requires unique identification and ownership tracking.

## Key Features

### Universal Asset Registration
The DOR module provides a comprehensive asset registration system that can accommodate virtually any type of digital or tokenized asset. The registration process captures essential asset information including unique identifiers, metadata, ownership details, and any associated rights or restrictions.

### Immutable Ownership History
Every ownership transfer and asset modification is recorded on the blockchain, creating a complete and immutable history of the asset's lifecycle. This provenance tracking is invaluable for establishing authenticity, resolving disputes, and providing transparency.

### Automated Transfer Mechanisms
The module provides sophisticated transfer mechanisms that can handle simple direct transfers, complex multi-party transactions, escrow arrangements, and conditional transfers based on smart contract logic.

### Auction and Marketplace Support
The module includes built-in support for asset auctions and marketplace transactions, providing the infrastructure needed for complex asset sales and transfers.

**Flexible Metadata Management**: Assets can include rich metadata that describes their characteristics, history, and associated rights. The metadata system is extensible and can accommodate different asset types and industry-specific requirements while maintaining consistency and searchability across the registry.

**Integration with External Systems**: The DOR module is designed to integrate with external asset management systems, marketplaces, and verification services. This integration capability enables existing systems to leverage blockchain-based ownership records while maintaining their current workflows and user interfaces.

## Message Types
The DOR module defines comprehensive message types that cover all aspects of asset lifecycle management, from initial registration through complex ownership transfers and marketplace transactions.

### MsgRegisterAsset
Enables asset owners to register new assets in the DOR system.

```go
type MsgRegisterAsset struct {
    Owner        string               `json:"owner"`
    AssetType    string               `json:"asset_type"`
    Name         string               `json:"name"`
    Description  string               `json:"description"`
    Metadata     map[string]string    `json:"metadata"`
    Attributes   []AssetAttribute     `json:"attributes"`
    Restrictions []string             `json:"restrictions"`
}
```

### MsgTransferAsset
Facilitates asset ownership transfers between parties.

```go
type MsgTransferAsset struct {
    AssetId     string              `json:"asset_id"`
    FromOwner   string              `json:"from_owner"`
    ToOwner     string              `json:"to_owner"`
    Price       sdk.Coins           `json:"price"`
    Conditions  []TransferCondition `json:"conditions"`
    EscrowTerms EscrowTerms         `json:"escrow_terms"`
}
```
**MsgUpdateAssetMetadata**: This message allows asset owners to update metadata and attributes associated with their assets. Updates are subject to validation rules and may require approval from relevant authorities depending on the asset type and jurisdiction.

**MsgCreateAuction**: This message enables asset owners to create auctions for their assets, specifying auction terms, duration, minimum bid amounts, and other relevant parameters. The auction system handles bid management and automatic execution of winning bids.

**MsgPlaceBid**: This message allows users to place bids on assets that are available for auction. The system validates bid amounts, manages escrow for bid deposits, and automatically processes winning bids according to auction terms.

**MsgClaimOwnership**: This message enables users to claim ownership of assets in specific circumstances, such as abandoned assets, inheritance situations, or legal transfers. Claims are subject to validation and may require additional documentation or approval processes.

## CLI Commands

### Register Asset
```bash
intagiumd tx dor register-asset \
  --owner intag1abc123def456ghi789jkl012mno345pqr678st \
  --asset-type "nft" \
  --name "Rare Digital Collectible #001" \
  --description "Limited edition digital artwork" \
  --metadata "artist:John Doe,year:2024,edition:1/100" \
  --attributes "rarity:legendary,color:blue" \
  --from my-wallet \
  --chain-id intagium-testnet-1
```

### Transfer Asset
```bash
intagiumd tx dor transfer-asset \
  --asset-id "asset_12345" \
  --from-owner intag1abc123def456ghi789jkl012mno345pqr678st \
  --to-owner intag1def456ghi789jkl012mno345pqr678stabc123 \
  --price "5000000intag" \
  --from my-wallet \
  --chain-id intagium-testnet-1
```

### Create Auction
```bash
intagiumd tx dor create-auction \
  --asset-id "asset_12345" \
  --starting-bid "1000000intag" \
  --duration "604800" \
  --reserve-price "5000000intag" \
  --from owner-wallet \
  --chain-id intagium-testnet-1
```
### Place a bid on an auction
intagiumd tx dor place-bid \
  --auction-id "auction_67890" \
  --bid-amount "2000000intag" \
  --from bidder-wallet \
  --chain-id intagium-testnet-1

### Query Commands
```bash
# Query asset information
intagiumd query dor asset asset_12345

# Query assets by owner
intagiumd query dor assets-by-owner intag1abc123def456ghi789jkl012mno345pqr678st

# Query active auctions
intagiumd query dor active-auctions --asset-type "nft"

# Query ownership history
intagiumd query dor ownership-history asset_12345
```

### Genesis Settings

The DOR module includes configurable parameters that define operational limits, fees, and system behavior. These parameters can be adjusted through governance to adapt to changing market conditions and user needs.

```json
{
  "dor": {
    "params": {
      "registration_fee": "500000",
      "transfer_fee_percentage": "2",
      "auction_fee_percentage": "3",
      "max_auction_duration": "2592000",
      "min_bid_increment": "100000",
      "escrow_timeout": "604800"
    },
    "registered_assets": [],
    "active_auctions": [],
    "transfer_history": []
  }
}
```

## Use Cases

### NFT Marketplace
Create and manage NFT collections with built-in auction and transfer capabilities.

### Digital Collectibles
Register and track ownership of digital collectibles with provenance verification.

### Domain Name Registry
Manage domain name ownership and transfers with automated renewal systems.

### Intellectual Property
Track ownership and licensing of patents, trademarks, and copyrights.

### Real Estate Tokenization
Tokenize real estate assets and manage fractional ownership.

## Integration Examples

### Web3 Integration
```javascript
// Register an asset using Web3
async function registerAsset(name, description, metadata) {
    const tx = await dorContract.registerAsset(
        name,
        description,
        metadata,
        { gasLimit: 300000 }
    );
    
    const receipt = await tx.wait();
    console.log('Asset registered:', receipt.transactionHash);
}
```

### REST API
```bash
# Query asset via REST API
curl -X GET "https://api.testnet.intagium.com/intagium/dor/v1/assets/asset_12345"

# Query assets by owner
curl -X GET "https://api.testnet.intagium.com/intagium/dor/v1/assets/owner/intag1abc123..."
```

## Best Practices

### Asset Registration
- Provide comprehensive metadata for better discoverability
- Use standardized attribute formats when possible
- Include high-quality images and descriptions
- Set appropriate restrictions and usage rights

### Ownership Management
- Maintain accurate ownership records
- Use escrow for high-value transfers
- Implement proper verification processes
- Keep detailed transaction records

## Parameters

```json
{
  "registration_fee": "500000",
  "transfer_fee_percentage": "2",
  "auction_fee_percentage": "3",
  "max_auction_duration": "2592000",
  "min_bid_increment": "100000",
  "escrow_timeout": "604800"
}
```

## Next Steps

- **[DRM Module](/modules/drm)** - Learn about digital rights management
- **[EDM Module](/modules/edm)** - Explore data management capabilities
- **[Sample Applications](/samples/overview)** - See real-world examples

