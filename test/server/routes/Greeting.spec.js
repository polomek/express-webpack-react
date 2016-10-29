const {spy} = require('sinon');
const {expect} = require('chai');

const greeting = require('../../../server/routes/Greeting');

describe('Greeting route test suite', () => {
  it('should send greeting', () => {
    // given
    const req = spy();
    const res = {
      send: spy()
    }

    // when
    greeting(req, res);

    // then
    expect(res.send.called).to.be.true;
  });
})
