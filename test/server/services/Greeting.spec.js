const {expect} = require('chai');

const {greeting} = require('../../../server/services/Greeting');

describe('Greeting test suite', () => {
  it('should get the greeting', () => {
    expect(greeting()).to.equal('Hello world!');
  });
});
