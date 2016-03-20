import Text from '../index';

describe('TextField Component', () => {
  it('input value', () => {
    const wrap = shallow(<Text />);
    const input = wrap.find('input');
    input.value = 'test text';
    input.simulate('change');
    const hasCls = wrap.hasClass('is-dirty');
    hasCls.should.be.true;
  })
})