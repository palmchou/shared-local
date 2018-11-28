// import { compress as bCompress } from 'wasm-brotli';
import {Buffer} from 'buffer/'
import ipfsAPI from 'ipfs-api'

const ipfs = ipfsAPI('localhost', '5001');

// const Buffer = buffer.Buffer;


function helloFromLib() {
  console.log("hello from lib.!")
}

// function compress(text, callback) {
//   bCompress(Buffer.from(text)).then(
//     function (compressed) {
//       const encoded = Buffer.from(compressed).toString('base64');
//       callback(encoded);
//     }
//   );
// }

function contentUp(text) {
  // compress(text, console.log())
  ipfs.add([Buffer.from(text)], (err, res) => {
    if (err) throw err;
    const hash = res[0].hash;
    console.log(hash);
  })
}

function contentDown(hash, callback) {
  ipfs.cat(hash, function (err, file) {
    if (err) {
      throw err;
    }
    callback(file.toString('utf8'));
  })
}

export { helloFromLib, contentUp, contentDown }
