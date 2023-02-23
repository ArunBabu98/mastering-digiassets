const digibyte = require('digibyte-js');
const AssetTrasnferor = require('digibyte-js/lib/digiassets/trasferor');

// D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8
// KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU

var utxo = [{"txid":"8d6244b19715457ded378bd6193df57b507d47d6cbd78c74fe272b0963667338","vout":1,"amount":"100","satoshis":10000000000,"height":16698356,"confirmations":1,"scriptPubKey":"76a91421055447fcc9e8dd842e563867763ad32f7a843b88ac"}]


// ------------ ISSUER ------------ 
const MetaData = require('digibyte-js/lib/digiassets/metadata');
const AssetIssuer = require('digibyte-js/lib/digiassets/issuer');

var meta = new MetaData()
    .name("Rabbit Coin Royalties")
    .description("Test coin in the DigiByte blockchain for the mastering digiasset course")
    .issuer("Renzo Diaz")
    .addUrl("icon", "ipfs://QmRUvWR23VDevCL3kPAdda9R1phED7NTK81pcoMmFCJF98", "image/png")
    .assetId("D89hDsQC5H2mYh5XYt3EQ1rE6SdTYYkWqQ", "unlocked", "aggregatable", 2);


var issuer = new AssetIssuer(meta)
    .addGas(utxo[0])
    .addOutput("D89hDsQC5H2mYh5XYt3EQ1rE6SdTYYkWqQ", 1000)
    .setGasChange("D89hDsQC5H2mYh5XYt3EQ1rE6SdTYYkWqQ")
    .sign("KxpRwk3BNjfdsoKTQ2wxnJbKQjuupV7py2pRPnPN9UZMKqjQnmaK")
    .build();

console.log(meta.toString());


// ------------ ISSUER ------------ 
var trasferor = new AssetTrasnferor()
    .addInput(utxo)
    .addOutput("DDKFFfR5NnfbLYbWkWE65CLqjfZxUCQwoR", 50)
    .burnExtra(true)
    .setGasChange("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8")
    .sign("KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU")
    .build();

console.log(trasferor)