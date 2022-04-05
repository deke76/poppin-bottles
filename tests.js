const chai = require('chai');
const expect = chai.expect;

const bottleInvestment = require('./index.js');

describe('bottleInvestment', function() {
  it('Returns 15 bottles with $10 investment.', () => {
    expect(bottleInvestment(10)).to.equal(15);
  });
  it('Returns 35 bottles with $20 investment.', () => {
    expect(bottleInvestment(20)).to.equal(35);
  });
  it('Returns 55 bottles with $30 investment.', () => {
    expect(bottleInvestment(30)).to.equal(55);
  });
  it('Returns 75 bottles with $40 investment.', () => {
    expect(bottleInvestment(40)).to.equal(75);
  });
});