const digibyte = require('digibyte-js');
const AssetTrasnferor = require('digibyte-js/lib/digiassets/trasferor');

// D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8
// KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU

var utxo = [
    {
        "txid":"07a67323f82d75b6fe41cc5a70917277a6d522ecc865f15bcec9cf988c4f0fee",
        "vout":2,
        "satoshis":1994275,
        "scriptPubKey":"76a91400414f52cf4b3c34b516b0022436e6b96d57480488ac"
    }
];

/* ------------ ISSUER ------------ 
const MetaData = require('digibyte-js/lib/digiassets/metadata');
const AssetIssuer = require('digibyte-js/lib/digiassets/issuer');

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
*/

var trasferor = new AssetTrasnferor()
    .addInput(utxo)
    .addOutput("DDKFFfR5NnfbLYbWkWE65CLqjfZxUCQwoR", 50)
    .burnExtra(true)
    .setGasChange("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8")
    .sign("KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU")
    .build();

console.log(trasferor)