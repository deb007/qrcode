var QRCode = require('qrcode')

function generateQRCode(params) {
    var str = (params && params.text) ? params.text : 'Hello World';
    
    return new Promise(function(resolve, reject) {
        QRCode.toDataURL(str, function (err, url) {
            if(err) {
                reject({err: err});
            }            
            resolve({text:str, urlQr: url});
        })
    })
}

exports.main = generateQRCode;