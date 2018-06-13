var expect = require('chai').expect;
var branding = require('../index.js')
/**
var colors;
colors = branding.getColors('epl', 'mun');
colors.forEach(element => {
    console.log(element);
});
console.log(branding.getPrimaryColor('epl', 'eve'));
branding.getColors('EPL', 'CRY');
console.log(colors);
console.log(branding.getPrimaryColor('EPL', 'CHE'));
//branding.getColors('xxx', 'mun');
//branding.getColors('epl', 'xxx');
**/

describe('getColors()', function() {
    it('should return array of hex codes representing a teams colors', function() {
        var league = 'EPL';
        var team = 'MUN';
        var expected = ["DA020E", "FFE500", "000000"];

        var results = branding.getColors(league, team);
        expect(results.length).to.be.equal(3);
        expect(results[0]).to.be.equal(expected[0]);
        expect(results[1]).to.be.equal(expected[1]);
        expect(results[2]).to.be.equal(expected[2]);
    });
});

describe('getColors() (lower)', function() {
    it('should return array of hex codes representing a teams colors', function() {
        var league = 'epl';
        var team = 'mci';
        var expected = ["98c5e9", "00285e", "f4bc46"];

        var results = branding.getColors(league, team);
        expect(results.length).to.be.equal(3);
        expect(results[0]).to.be.equal(expected[0]);
        expect(results[1]).to.be.equal(expected[1]);
        expect(results[2]).to.be.equal(expected[2]);
    });
});

describe('getPrimaryColor()', function() {
    it('should return a hex code for the teams primary color', function() {
        var league = 'epl';
        var team = 'eve';
        var expected = '274488';

        var results = branding.getPrimaryColor(league, team);
        expect(results).to.be.equal(expected);
    })
});

describe('getLogo()', function() {
    it('should return a path to teams prmiary logo', function() {
        var league = 'EPL';
        var team = 'LIV';
        var expected = 'epl/liverpool.svg';

        var results = branding.getLogo(league, team);
        expect(results).to.be.equal(expected);
    })
});

describe('getColors() (No Hex)', function() {
    it('should return array of hex codes representing a teams colors for only RGB sources', function() {
        var league = 'NBA';
        var team = 'CHA';
        var expected = ["1D1160", "008CA8", "A1A1A4"];

        var results = branding.getColors(league, team);
        expect(results.length).to.be.equal(3);
        expect(results[0]).to.be.equal(expected[0]);
        expect(results[1]).to.be.equal(expected[1]);
        expect(results[2]).to.be.equal(expected[2]);
    });
});