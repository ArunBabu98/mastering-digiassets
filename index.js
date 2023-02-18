const digibyte = require('digibyte-js');
const MetaData = require('digibyte-js/lib/digiassets/metadata');
const AssetIssuer = require('digibyte-js/lib/digiassets/issuer');

// D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8
// KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU

var utxo = [
    {
        txid: "3dfbcab4d5326c5da2619eb40c2a408c97a741966d2662ef8832510787bbf5e2",
        vout: 1,
        satoshis: 600,
        scriptPubKey: "76a91400414f52cf4b3c34b516b0022436e6b96d57480488ac"
    },
    {
        txid: "3dfbcab4d5326c5da2619eb40c2a408c97a741966d2662ef8832510787bbf5e2",
        vout: 3,
        satoshis: 1996786,
        scriptPubKey: "76a91400414f52cf4b3c34b516b0022436e6b96d57480488ac"
    },
    {
        txid: "ae4df4e174caff8f9b2fe01ed5a910507f0c0f2403314c8b52c039babe48678e",
        vout: 1,
        satoshis: 600,
        scriptPubKey: "76a91400414f52cf4b3c34b516b0022436e6b96d57480488ac"
    }
];

var meta = new MetaData()
    .name("Rabbit Coin")
    .description("Test coin in the DigiByte blockchain for the mastering digiasset course")
    .issuer("Renzo Diaz")
    .addUrl("icon", "ipfs://QmRUvWR23VDevCL3kPAdda9R1phED7NTK81pcoMmFCJF98", "image/png")
    .assetId("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8", "unlocked", "aggregatable", 0);


var issuer = new AssetIssuer(meta)
    .addGas(utxo[0])
    .addOutput("DDKFFfR5NnfbLYbWkWE65CLqjfZxUCQwoR", 800)
    .addOutput("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8", 200)
    .setGasChange("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8")
    .sign("KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU")
    .build();

console.log(meta.toString());