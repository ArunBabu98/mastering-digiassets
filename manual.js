const digibyte = require('digibyte-js');
const Transaction = require('digibyte-js/lib/transaction/transaction');


// DJa5jftf3yuj176YZNkxZMHoB8zU3aokq5
// L36EKh49wrubiUp4zmSeycsNLNsTXkjVDWmUTFUSJJWsNdP7ffbB

// DCJ6GdctTvJzbcQMEZDaCiLKgoPN64YbYE

var utxo = [{"txid":"6267c5ddd999042e96312725c01d4c1b7fc063f9d2f96b4fb9a11e64e8c32386","vout":4,"amount":"59.27757281","satoshis":5927757281,"height":16698451,"confirmations":24,"scriptPubKey":"76a91493535d1db8280be16038705cbfcdb22e1568a6e888ac"},{"txid":"6267c5ddd999042e96312725c01d4c1b7fc063f9d2f96b4fb9a11e64e8c32386","vout":3,"amount":"40.72177112","satoshis":4072177112,"height":16698451,"confirmations":24,"scriptPubKey":"76a91493535d1db8280be16038705cbfcdb22e1568a6e888ac"},{"txid":"6267c5ddd999042e96312725c01d4c1b7fc063f9d2f96b4fb9a11e64e8c32386","vout":1,"amount":"0.000006","satoshis":600,"height":16698451,"confirmations":24,"scriptPubKey":"76a91493535d1db8280be16038705cbfcdb22e1568a6e888ac"}]

// ------------- TRANSFER TX -------------
var tx = new Transaction()
    .from(utxo)
    .to("DCJ6GdctTvJzbcQMEZDaCiLKgoPN64YbYE", 600) // 400000 0010000001000101 2045
    .addData(Buffer.from("44410315002045", "hex"))
    .to("DJa5jftf3yuj176YZNkxZMHoB8zU3aokq5", 4072177112)   // 0.50000000 * 8144354204 = 4072177102
    .change("DJa5jftf3yuj176YZNkxZMHoB8zU3aokq5")
    .sign("L36EKh49wrubiUp4zmSeycsNLNsTXkjVDWmUTFUSJJWsNdP7ffbB")
    .serialize();
console.log(tx)

return;
// ------------- BURN TX -------------
var tx = new Transaction()
    .from(utxo)
    .to("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8", 600) // 0010010010110001  24B1
    // 0010000110010001  2191
    .addData(Buffer.from("444103250024B11F2191", "hex"))
    .change("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8")
    .sign("KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU")
    .serialize();
