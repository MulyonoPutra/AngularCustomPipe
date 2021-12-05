import { ParenthesisPipe } from './parenthesis.pipe';

describe('ParenthesisPipe', () => {
  let pipe: ParenthesisPipe;

  beforeEach(() => {
    pipe = new ParenthesisPipe();
  });

  it('should not append paren', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should append paren', () => {
    expect(pipe.transform('1年更新')).toBe('（1年更新）');
  });
});