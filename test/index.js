'use strict';

var should = require('chai').should();
var unitedcore = require('../');

describe('#versionGuard', function() {
  it('global._unitedcore should be defined', function() {
    should.equal(global._unitedcore, unitedcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      unitedcore.versionGuard('version');
    }).should.throw('More than one instance of unitedcore');
  });
});
