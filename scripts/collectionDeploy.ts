import fs from 'fs';
import { Address, toNano } from '@ton/core';
import { SbtItem } from '../wrappers/sbt-item/SbtItem';
import { NftCollection } from "../wrappers/nft-collection/NftCollection";
import { compile, NetworkProvider } from '@ton/blueprint';
import { encodeOffChainContent } from '../wrappers/nft-content/nftContent';

export async function run(provider: NetworkProvider, args: string[]) {
    const collectionInfoFile = "collection.json";
    const ui = provider.ui();
    
    //const ownerAddress = Address.parse(args.length > 0 ? args[0] : await ui.input('Owner address'));
    const ownerAddress = provider.sender().address!;
    const royalityAddress = ownerAddress;
    
    let codeCollection = await compile('nft-collection/NftCollection');
    let codeItem = await compile('sbt-item/SbtItem');

    let config = {
        ownerAddress: ownerAddress,
        collectionContent: encodeOffChainContent('https://nft.ton.diamonds/diamonds.json'),
        commonContent: 'https://nft.ton.diamonds/nft/',
        nftItemCode: codeItem,
        royaltyParams: {
            royaltyFactor: 0,
            royaltyBase: 1000,
            royaltyAddress: royalityAddress
        }
    }

    const collection = provider.open(
        NftCollection.createFromConfig(
            config,
            codeCollection
        )
    );

    console.log('Collection address: ', collection.address);

    if (await provider.isContractDeployed(collection.address)) {
        console.log('Already deployed');
    }

    let collectionInfo = {
        'collectionAddress': collection.address.toString(),
        'collectionOwnerAddress': ownerAddress.toString(),
        'collectionRoyalityAddress': royalityAddress.toString(),
        'collectionCode': codeCollection.toBoc().toString('base64'),
        'collectionItemCode': codeItem.toBoc().toString('base64'),
    };
    let collectionInfoStr = JSON.stringify(collectionInfo, null, 2)
    fs.writeFileSync(collectionInfoFile, collectionInfoStr);
    console.log('Collection info saved to ', collectionInfoFile);

    await collection.sendDeploy(provider.sender(), toNano('0.05'));
    console.log('Deploy request sent');

    await provider.waitForDeploy(collection.address);
    console.log('Collection deployed: ', collection.address);
}
