const digibyte = require('digibyte-js');
const AssetTrasnferor = require('digibyte-js/lib/digiassets/trasferor');

// DB6frsi2cnU6G7Zjm3E6cbSRYdxhfCWoS5
// L4dS5W8Bi5iJXN9QBvmWr4BCPh4Rw8zHA7UmswGXopzSFuwimzUc

var utxo = [{"txid":"9380e765521908926a520d3f338c36067d4dd7a6c25f5f8397c475b7c37a1ea2","vout":5,"amount":"19.41373234","satoshis":1941373234,"height":16692821,"confirmations":17,"scriptPubKey":"76a914415b525f5ffa12d3a7e78072ca006ca6cf65b82088ac"},
{"txid":"9380e765521908926a520d3f338c36067d4dd7a6c25f5f8397c475b7c37a1ea2","vout":4,"amount":"85.60541744","satoshis":8560541744,"height":16692821,"confirmations":17,"scriptPubKey":"76a914415b525f5ffa12d3a7e78072ca006ca6cf65b82088ac"}]

// ------------ ISSUER ------------ 
const MetaData = require('digibyte-js/lib/digiassets/metadata');
const AssetIssuer = require('digibyte-js/lib/digiassets/issuer');
const Rules = require('digibyte-js/lib/digiassets/rules');

var meta = new MetaData()
    .name("Rabbit Coin Rare")
    .description("Test coin with deflation in the DigiByte blockchain for the mastering digiasset course")
    .issuer("Renzo Diaz")
    .addUrl("icon", "ipfs://QmRUvWR23VDevCL3kPAdda9R1phED7NTK81pcoMmFCJF98", "image/png")
    .assetId("DB6frsi2cnU6G7Zjm3E6cbSRYdxhfCWoS5", "unlocked", "aggregatable", 2);

var rules = new Rules()
    .setDeflate(50);

var issuer = new AssetIssuer(meta, rules)
    .addGas(utxo)
    .addOutput("DB6frsi2cnU6G7Zjm3E6cbSRYdxhfCWoS5", 10000)
    .setGasChange("DB6frsi2cnU6G7Zjm3E6cbSRYdxhfCWoS5")
    .sign("L4dS5W8Bi5iJXN9QBvmWr4BCPh4Rw8zHA7UmswGXopzSFuwimzUc")
    .build();

console.log(meta.toString());