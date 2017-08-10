import { getErrorMessage } from './checkBrackets'

  it('should pass on blank input', () => {
    const message = getErrorMessage('')
    expect(message).toBe('')
  })

  it('should fail on Fractal-supplied cases', () => {
    let message = getErrorMessage('))((')
    expect(message).not.toBe('')

    message = getErrorMessage('{(})')
    expect(message).not.toBe('')
  })

  it('should pass on simple brackets', () => {
    let message = getErrorMessage('()')
    expect(message).toBe('')

    message = getErrorMessage('[]')
    expect(message).toBe('')

    message = getErrorMessage('{}')
    expect(message).toBe('')
  })

  it('should ignore non-bracket characters', () => {
    let message = getErrorMessage('asblkjsd')
    expect(message).toBe('')

    message = getErrorMessage('(jljlkj)')
    expect(message).toBe('')

    message = getErrorMessage('www)')
    expect(message).not.toBe('')
  })
