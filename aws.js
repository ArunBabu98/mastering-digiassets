const AWS = require('aws-sdk');

var accessKeyId = "AKIATTJIQZ34QZ5YK6VD";
var secretAccessKey = "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";

var signer = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4',
    region: 'ca-central-1'
});

var key = "2e12154c7c09d82bb5afede1e19fe18329ee6fb63d7d8418ecd07d3c9269ad84";

var url = signer.getSignedUrl('getObject', {
    Bucket: 'chaindata-digibyte',
    Key: key,
    Expires: 300,
    RequestPayer: "requester",
});

console.log(url);