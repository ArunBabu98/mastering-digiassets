(async function () {
    const fs = require('fs');
    const ipfsClient = await import('ipfs-http-client');
    const client = ipfsClient.create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: 'Basic ' + Buffer.from('2GWt9IkJjHVdDdFsrhFWqsFii8J:28eac141f1b47d8e0bbdb8b4d981eb8a').toString('base64')
        }
    });

    //const buffer = fs.readFileSync("C:/Users/Renzo/Desktop/rabbit.png");
    //var result = await client.add(buffer);
    
    var result = await client.add(`{"data":{"assetName":"Rabbit Coin","description":"Test coin in the DigiByte blockchain for the mastering digiasset course","issuer":"Renzo Diaz","urls":[{"name":"icon","url":"ipfs://QmRUvWR23VDevCL3kPAdda9R1phED7NTK81pcoMmFCJF98","mimeType":"image/png"}],"assetId":"Ua5x4v5LXLbpwua8Jg64KucGcDPGL3k6r4NNRC"}}`, { rawLeaves: true });
    console.log(result);
})()