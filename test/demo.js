/*jshint expr: true*/

var demo = require('../demo.js');

var Lab = require('lab');
var lab = exports.lab = Lab.script();

var expect = Lab.expect;
var describe = lab.experiment;
var it = lab.test;

describe('demo', function () {

	it('should export existing()', function (done) {
		expect(typeof demo.existing).to.equal('function');

		// If you leave out the done(), lab exits immediately with a success code even though the next test should fail.
		//done();

		// If the above line is uncommented, this past succeeds and subsequent tests fail, as expected.
	});

	it('should fail this test', function (done) {
		expect(false).to.be.ok;
		done();
	});
});
