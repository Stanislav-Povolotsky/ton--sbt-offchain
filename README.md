# TON SBT

Based on [Getgems NFT contracts](https://github.com/getgems-io/nft-contracts/)

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`

## Useful links

- Overview && guides  
  [https://docs.ton.org/develop/dapps/defi/tokens]
- NFT standard (TEP 62)  
  [https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md]
- SBT (Soulbound NFT) standard (TEP 85)  
  [https://github.com/ton-blockchain/TEPs/blob/master/text/0085-sbt-standard.md]
- NFTRoyalty standard extension (TEP 66)  
  [https://github.com/ton-blockchain/TEPs/blob/master/text/0066-nft-royalty-standard.md]
