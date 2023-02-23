const digibyte = require('digibyte-js');
const AssetTrasnferor = require('digibyte-js/lib/digiassets/trasferor');

// DJa5jftf3yuj176YZNkxZMHoB8zU3aokq5
// L36EKh49wrubiUp4zmSeycsNLNsTXkjVDWmUTFUSJJWsNdP7ffbB

// DCJ6GdctTvJzbcQMEZDaCiLKgoPN64YbYE

var utxo = [
    {"txid":"414d5ce1250967e6df7bff458ae0ce0b490b6669d4c2874d7b56dba4b4763710","vout":3,"amount":"99.49998993","satoshis":9949998993,"height":16698399,"confirmations":9,"scriptPubKey":"76a91493535d1db8280be16038705cbfcdb22e1568a6e888ac"},
    {"txid":"414d5ce1250967e6df7bff458ae0ce0b490b6669d4c2874d7b56dba4b4763710","vout":1,"amount":"0.5","satoshis":50000000,"height":16698399,"confirmations":9,"scriptPubKey":"76a91493535d1db8280be16038705cbfcdb22e1568a6e888ac"},
    {
        "txid":"414d5ce1250967e6df7bff458ae0ce0b490b6669d4c2874d7b56dba4b4763710",
        "vout":0,
        "satoshis":600,
        "scriptPubKey":"76a91493535d1db8280be16038705cbfcdb22e1568a6e888ac",
        "assetId": "Ua8srJnUeZZjPTJwnbmURFp1JuwCDT38UZwp6u",
        "quantity": 500000,
        "metadata": ""
    }
];


// ------------ ISSUER ------------ 
const MetaData = require('digibyte-js/lib/digiassets/metadata');
const AssetIssuer = require('digibyte-js/lib/digiassets/issuer');
const Rules = require('digibyte-js/lib/digiassets/rules');

var meta = new MetaData()
    .name("Rabbit Coin Royalties")
    .description("Test coin with royalties in the DigiByte blockchain for the mastering digiasset course")
    .issuer("Renzo Diaz")
    .addUrl("icon", "ipfs://QmRUvWR23VDevCL3kPAdda9R1phED7NTK81pcoMmFCJF98", "image/png")
    .assetId("DJa5jftf3yuj176YZNkxZMHoB8zU3aokq5", "unlocked", "aggregatable", 2);

var rules = new Rules()
    .addRoyalties("DJa5jftf3yuj176YZNkxZMHoB8zU3aokq5", 50000000, "USD")

var issuer = new AssetIssuer(meta, rules)
    .addGas(utxo)
    .addOutput("DJa5jftf3yuj176YZNkxZMHoB8zU3aokq5", 500000)
    .setGasChange("DJa5jftf3yuj176YZNkxZMHoB8zU3aokq5")
    .sign("L36EKh49wrubiUp4zmSeycsNLNsTXkjVDWmUTFUSJJWsNdP7ffbB")
    .build();

console.log(meta.toString());