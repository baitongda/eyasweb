import util from '../utily';
import {expect} from 'chai';

describe('Utily function', () => {
  it('subNoHtml', () => {
    expect(util.subNoHtml('<h1>hello</h1>', 2)).to.be.eql('he');
  });
});