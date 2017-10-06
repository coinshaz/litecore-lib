'use strict';

var unitedcore = module.exports;

// module information
unitedcore.version = 'v' + require('./package.json').version;
unitedcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of unitedcore-lib found. ' +
      'Please make sure to require unitedcore-lib and check that submodules do' +
      ' not also include their own unitedcore-lib dependency.';
    throw new Error(message);
  }
};
unitedcore.versionGuard(global._unitedcore);
global._unitedcore = unitedcore.version;

// crypto
unitedcore.crypto = {};
unitedcore.crypto.BN = require('./lib/crypto/bn');
unitedcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
unitedcore.crypto.Hash = require('./lib/crypto/hash');
unitedcore.crypto.Random = require('./lib/crypto/random');
unitedcore.crypto.Point = require('./lib/crypto/point');
unitedcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
unitedcore.encoding = {};
unitedcore.encoding.Base58 = require('./lib/encoding/base58');
unitedcore.encoding.Base58Check = require('./lib/encoding/base58check');
unitedcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
unitedcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
unitedcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
unitedcore.util = {};
unitedcore.util.buffer = require('./lib/util/buffer');
unitedcore.util.js = require('./lib/util/js');
unitedcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
unitedcore.errors = require('./lib/errors');

// main bitcoin library
unitedcore.Address = require('./lib/address');
unitedcore.Block = require('./lib/block');
unitedcore.MerkleBlock = require('./lib/block/merkleblock');
unitedcore.BlockHeader = require('./lib/block/blockheader');
unitedcore.HDPrivateKey = require('./lib/hdprivatekey.js');
unitedcore.HDPublicKey = require('./lib/hdpublickey.js');
unitedcore.Networks = require('./lib/networks');
unitedcore.Opcode = require('./lib/opcode');
unitedcore.PrivateKey = require('./lib/privatekey');
unitedcore.PublicKey = require('./lib/publickey');
unitedcore.Script = require('./lib/script');
unitedcore.Transaction = require('./lib/transaction');
unitedcore.URI = require('./lib/uri');
unitedcore.Unit = require('./lib/unit');

// dependencies, subject to change
unitedcore.deps = {};
unitedcore.deps.bnjs = require('bn.js');
unitedcore.deps.bs58 = require('bs58');
unitedcore.deps.Buffer = Buffer;
unitedcore.deps.elliptic = require('elliptic');
unitedcore.deps.scryptsy = require('scryptsy');
unitedcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
unitedcore._HDKeyCache = require('./lib/hdkeycache');
unitedcore.Transaction.sighash = require('./lib/transaction/sighash');
