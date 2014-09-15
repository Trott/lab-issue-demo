var demo = require('../demo.js');

var Lab = require('lab');
var lab = exports.lab = Lab.script();

var expect = Lab.expect;
var describe = lab.experiment;
var it = lab.test;

describe('demo', function () {

	it('should export existing()', function (done) {
		expect(typeof demo.existing).to.equal('function');
		//done();
	});

	it('should fail this test', function (done) {
		expect(false).to.be.ok;
	})
});
