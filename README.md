# TON SBT with offchain metadata
[![test workflow result](../../actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml)

This is an off-chain implementation (all collection and token metadata is stored at a specific URL), you can find the on-chain implementation [here](https://github.com/Stanislav-Povolotsky/ton--sbt-onchain).  
Based on [Getgems NFT contracts](https://github.com/getgems-io/nft-contracts/).

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from @ton/core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Scripts

1. Deploy collection:  
   `npx blueprint run collectionDeploy`
   ```shell
   Using file: collectionDeploy
   ? Which network do you want to use? testnet
   ? Which wallet are you using? TON Connect compatible mobile wallet (example: Tonkeeper)
   Connected to wallet at address: EQD9Ahgp6Uxa-uFn01oyxoHPX70j1eR51BB2lsnZFVardfyn
   Collection address:  EQDaQtD9BdjdvcwYt7Xk_HEHZA8AC-30yp29nTHuFHtubwjN
   Collection info saved to  collection.jso
   Deploy request sent
   Awaiting contract deployment...
   Collection deployed: EQDaQtD9BdjdvcwYt7Xk_HEHZA8AC-30yp29nTHuFHtubwjN
   ```
3. Mint SBT for deployed collection:  
   `npx blueprint run collectionMintSbt`
   ```shell
   Using file: collectionMintSbt
   ? Which network do you want to use? testnet
   ? Which wallet are you using? TON Connect compatible mobile wallet (example: Tonkeeper)
   Connected to wallet at address: EQD9Ahgp6Uxa-uFn01oyxoHPX70j1eR51BB2lsnZFVardfyn
   Collection address: EQDaQtD9BdjdvcwYt7Xk_HEHZA8AC-30yp29nTHuFHtubwjN
   Next item ID: 2
   Next item index: 2  address: EQD_oYRLexX9NEwvtH7JIMKEFqQrboA_bFIV2Yd8KyQZsqGW
   Sending transaction. Approve in your wallet...[TON_CONNECT_SDK] Send http-bridge request: {method: 'sendTransaction',...}
   [TON_CONNECT_SDK] Wallet message received: {...}
   Sent transaction
   Sent collection mint request
   Awaiting contract deployment...
   Sent collection mint request
   Item deployed: EQD_oYRLexX9NEwvtH7JIMKEFqQrboA_bFIV2Yd8KyQZsqGW
   ```
5. Display information for deployed SBT token:  
   `npx blueprint run collectionGetAllInfo`
   ```shell
   Using file: collectionGetAllInfo
   ? Which network do you want to use? testnet
   ? Which wallet are you using? TON Connect compatible mobile wallet (example: Tonkeeper)
   Connected to wallet at address: EQD9Ahgp6Uxa-uFn01oyxoHPX70j1eR51BB2lsnZFVardfyn
   ? Item Index 2
   Collection address: EQDaQtD9BdjdvcwYt7Xk_HEHZA8AC-30yp29nTHuFHtubwjN
   Collection data:
           Next item ID: 3
           Owner address: EQD9Ahgp6Uxa-uFn01oyxoHPX70j1eR51BB2lsnZFVardfyn
           Content: https://nft.ton.diamonds/diamonds.json
   Item data:
           Item index: 2
           Item address: EQD_oYRLexX9NEwvtH7JIMKEFqQrboA_bFIV2Yd8KyQZsqGW
   Item nft data:
           Initialized: true
           Collection address: EQDaQtD9BdjdvcwYt7Xk_HEHZA8AC-30yp29nTHuFHtubwjN
           Owner address: EQD9Ahgp6Uxa-uFn01oyxoHPX70j1eR51BB2lsnZFVardfyn
           Content: 2/2.json
   Full nft data:
           Content: https://nft.ton.diamonds/nft/2/2.json
   ```

## Useful links

- Overview && guides  
  https://docs.ton.org/develop/dapps/defi/tokens
- NFT standard (TEP 62)  
  https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md
- SBT (Soulbound NFT) standard (TEP 85)  
  https://github.com/ton-blockchain/TEPs/blob/master/text/0085-sbt-standard.md
- NFTRoyalty standard extension (TEP 66)  
  https://github.com/ton-blockchain/TEPs/blob/master/text/0066-nft-royalty-standard.md
