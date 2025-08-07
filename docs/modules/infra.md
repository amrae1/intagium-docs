---
sidebar_position: 5
---

# Infrastructure Coordination (Infra) Module

The Infrastructure Coordination (Infra) module enables decentralized coordination of physical and digital infrastructure resources, providing a framework for resource sharing and management across various use cases.

## Overview

The Infra module provides decentralized coordination capabilities for managing infrastructure resources across multiple domains including drone networks, mail delivery systems, street infrastructure, compute resources, and WiFi networks.

- **[INFRA Flow Digramm](/flowdigramm/infra-flow)** - INFRA Flow Digramm 

## Key Features

**Decentralized Node Registration**: The Infra module provides a comprehensive registration system for various types of infrastructure nodes. Infrastructure owners can register their resources with detailed specifications, location information, availability schedules, and pricing models. The registration process creates immutable records that establish ownership and enable automated coordination.

**Multi-Use Case Support**: The module is designed to support diverse infrastructure types including InfraDrone (drone control stations and landing pads), InfraMail (autonomous parcel delivery stations), InfraStreet (smart city infrastructure poles), InfraScan (environmental sensor networks), InfraCompute (edge computing nodes), and InfraWiFi (shared WiFi access points). Each use case has specific requirements and characteristics that are accommodated by the module's flexible architecture.

**Dynamic Slot Reservation**: The module implements sophisticated reservation mechanisms that enable users to reserve infrastructure capacity for specific time periods and purposes. The reservation system handles complex scheduling, conflict resolution, and automatic pricing based on demand and availability patterns.

**Usage Tracking and Verification**: The module provides comprehensive usage tracking capabilities that monitor infrastructure utilization and verify that reserved capacity is used as intended. This tracking enables accurate billing, performance monitoring, and quality assurance for infrastructure services.

**Automated Reward Distribution**: The module includes automated reward distribution mechanisms that ensure infrastructure owners receive fair compensation for providing access to their resources. The reward system can handle complex revenue sharing arrangements and automatically distribute payments based on usage patterns and predefined agreements.

**Real-Time Coordination**: The module supports real-time coordination of infrastructure resources, enabling dynamic allocation and optimization of capacity based on current demand and availability. This real-time capability is essential for time-sensitive applications such as drone traffic management and emergency response coordination.

### Message Types

The Infra module defines comprehensive message types that cover all aspects of infrastructure lifecycle management, from initial registration through complex coordination scenarios and reward distribution.

**MsgRegisterNode**: This message enables infrastructure owners to register their resources in the Infra system. The registration includes detailed specifications, location information, capabilities, and initial pricing and availability settings.

```go
type MsgRegisterNode struct {
    Owner        string `json:"owner"`
    NodeType     string `json:"node_type"`
    Location     GeoLocation `json:"location"`
    Capabilities []Capability `json:"capabilities"`
    Pricing      PricingModel `json:"pricing"`
    Availability AvailabilitySchedule `json:"availability"`
    Metadata     map[string]string `json:"metadata"`
}
```

**MsgReserveSlot**: This message allows users to reserve infrastructure capacity for specific time periods and purposes. The reservation includes timing, usage requirements, and payment arrangements.

```go
type MsgReserveSlot struct {
    NodeId      string `json:"node_id"`
    Requester   string `json:"requester"`
    StartTime   int64 `json:"start_time"`
    Duration    int64 `json:"duration"`
    Purpose     string `json:"purpose"`
    Requirements map[string]string `json:"requirements"`
    Payment     sdk.Coins `json:"payment"`
}
```

**MsgConfirmUsage**: This message enables users to confirm that they have successfully used reserved infrastructure capacity. Usage confirmation triggers reward distribution and updates usage statistics.

**MsgUpdateNodeStatus**: This message allows infrastructure owners to update the status, availability, and capabilities of their registered nodes. Status updates are essential for maintaining accurate coordination information.

**MsgReportIssue**: This message enables users to report problems or issues with infrastructure nodes, triggering investigation and resolution processes that help maintain service quality.

**MsgDistributeRewards**: This message initiates reward distribution processes, calculating and distributing payments to infrastructure owners based on usage patterns and predefined agreements.

### Query Types

The Infra module provides extensive query capabilities that enable users to discover available infrastructure, monitor usage patterns, and track performance metrics across the coordination network.

**QueryNode**: Retrieves detailed information about specific infrastructure nodes, including capabilities, availability, pricing, and current status.

**QueryAvailableNodes**: Returns infrastructure nodes that are available for reservation based on specified criteria such as location, capabilities, time requirements, and budget constraints.

**QueryReservations**: Retrieves reservation information for specific nodes or users, enabling coordination and scheduling optimization.

**QueryUsageStatistics**: Returns usage statistics and performance metrics for infrastructure nodes, providing insights into utilization patterns and service quality.

**QueryRewardHistory**: Retrieves reward distribution history for infrastructure owners, providing transparency into compensation and performance tracking.

**QueryNodesByType**: Returns infrastructure nodes filtered by type, enabling users to find specific types of infrastructure such as drone stations or computing nodes.

### CLI Commands Examples

The Infra module provides comprehensive command-line tools for infrastructure coordination, enabling users to register nodes, make reservations, track usage, and manage their infrastructure portfolio.

```bash
# Register a new infrastructure node
intagiumd tx infra register-node \
  --owner intag1abc123def456ghi789jkl012mno345pqr678st \
  --node-type "InfraDrone" \
  --location "lat:40.7128,lon:-74.0060,alt:100" \
  --capabilities "landing_pad,charging_station,weather_monitoring" \
  --pricing "base_rate:1000,per_minute:100,currency:intag" \
  --availability "24/7" \
  --metadata "operator:CityDrones,capacity:5,certification:FAA" \
  --from my-wallet \
  --chain-id intagium-testnet-1

# Reserve infrastructure slot
intagiumd tx infra reserve-slot \
  --node-id "node_12345" \
  --requester intag1def456ghi789jkl012mno345pqr678stabc123 \
  --start-time "1704067200" \
  --duration "3600" \
  --purpose "package_delivery" \
  --requirements "payload_weight:2kg,flight_time:30min" \
  --payment "5000intag" \
  --from user-wallet \
  --chain-id intagium-testnet-1

# Confirm usage of reserved slot
intagiumd tx infra confirm-usage \
  --reservation-id "reservation_67890" \
  --usage-details "successful_delivery,flight_time:28min,battery_used:45%" \
  --from user-wallet \
  --chain-id intagium-testnet-1

# Update node status
intagiumd tx infra update-status \
  --node-id "node_12345" \
  --status "active" \
  --availability "available" \
  --maintenance-notes "routine_inspection_completed" \
  --from owner-wallet \
  --chain-id intagium-testnet-1

# Query available nodes
intagiumd query infra available-nodes \
  --node-type "InfraDrone" \
  --location "lat:40.7128,lon:-74.0060,radius:10km" \
  --start-time "1704067200" \
  --duration "3600"

# Query node information
intagiumd query infra node node_12345

# Query reservations by user
intagiumd query infra reservations-by-user intag1def456ghi789jkl012mno345pqr678stabc123

# Query usage statistics
intagiumd query infra usage-stats node_12345 --from-date "2024-01-01" --to-date "2024-12-31"

# Query reward history
intagiumd query infra reward-history intag1abc123def456ghi789jkl012mno345pqr678st

# Report an issue
intagiumd tx infra report-issue \
  --node-id "node_12345" \
  --issue-type "equipment_malfunction" \
  --description "Charging station not functioning properly" \
  --severity "medium" \
  --from user-wallet \
  --chain-id intagium-testnet-1
```

### Genesis Settings

The Infra module includes configurable parameters that define operational limits, pricing models, and coordination behavior for infrastructure management.

```json
{
  "infra": {
    "params": {
      "registration_fee": "1000000",
      "reservation_fee_percentage": "5",
      "max_reservation_duration": "86400",
      "min_advance_booking": "3600",
      "reward_distribution_frequency": "86400",
      "node_verification_required": true
    },
    "registered_nodes": [],
    "active_reservations": [],
    "usage_history": []
  }
}
```

## Use Cases

- Drone network coordination
- Mail delivery systems
- Street infrastructure management
- Compute resource sharing
- WiFi network management

## Next Steps

- **[DRM Module](/modules/drm)** - Learn about digital rights management
- **[EDM Module](/modules/edm)** - Explore data management capabilities
- **[Sample Applications](/samples/overview)** - See real-world examples

## Support and Community

- **[Discord](https://discord.gg/intagium)** - Get help from the community
- **[GitHub](https://github.com/amrae1/INTAGIUM)** - Report issues and contribute
- **[Developer Tools](/developer-tools/cli)** - Access development resources
