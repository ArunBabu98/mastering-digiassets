const digibyte = require('digibyte-js');
const Transaction = require('digibyte-js/lib/transaction/transaction');

// D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8
// KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU

// D9goxrTJ2iYt4wmDVdrkweHgcRoQLjtcvn
// DFtE8rQmzfKugaATpfCFZQ2EyudZB3QGfK

var utxo = [
    {
        "txid": "94758c1bb34a856cfbf9f8865e9ffa7936d51e24716f6badc10165391a07e29b",
        "vout": 4,
        "satoshis": 1927768,
        "scriptPubKey": "76a91400414f52cf4b3c34b516b0022436e6b96d57480488ac"
    },
    {
        "txid": "94758c1bb34a856cfbf9f8865e9ffa7936d51e24716f6badc10165391a07e29b",
        "vout": 2,
        "satoshis": 600,
        "scriptPubKey": "76a91400414f52cf4b3c34b516b0022436e6b96d57480488ac"
    }
]

// ------------- TRANSFER TX -------------
var tx = new Transaction()
    .from(utxo)
    .to("D9goxrTJ2iYt4wmDVdrkweHgcRoQLjtcvn", 600) // 0010000110010001  2191
    .to("DFtE8rQmzfKugaATpfCFZQ2EyudZB3QGfK", 600) // 0010010010110001  24B1
    .to("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8", 600) // 0010000000010011  2013
    .addData(Buffer.from("444103150021910124B1022013", "hex"))
    .change("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8")
    .sign("KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU")
    .serialize();

// ------------- BURN TX -------------
var tx = new Transaction()
    .from(utxo)
    .to("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8", 600) // 0010010010110001  24B1
                                                   // 0010000110010001  2191
    .addData(Buffer.from("444103250024B11F2191", "hex"))
    .change("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8")
    .sign("KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU")
    .serialize();

console.log(tx)