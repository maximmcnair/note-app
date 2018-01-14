import concatText from './concatText'

describe('concatText()', () => {
  it('should reduce string to limit', () => {
    const str = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly'
    const expectOutput = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in...'
    expect(concatText(str, 100)).toEqual(expectOutput)
  })

  it('should return string if it\'s below limit', () => {
    const str = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly'
    expect(concatText(str, 1000)).toEqual(str)
  })
})
