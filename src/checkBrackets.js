import _ from 'lodash'

/**
 * Checks code snippet for bracket errors.
 * Returns a blank string when no errors are found.
 */
export function getErrorMessage(str) {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const closers = Object.keys(brackets)
  const openers = Object.values(brackets)

  const stack = []
  const errors = []

  // ensure each closer has a matching opener
  const lines = str.split('\n')
  lines.forEach((line, row) => {
    line.split('').forEach((char, col) => {
      if (_.includes(openers, char)) {
        stack.push(char)
      } else if (_.includes(closers, char)) {
        if (stack.pop() !== brackets[char]) {
          errors.push(`Closing bracket error at row ${row}, col ${col}`)
        }
      }
    })
  })

  // ensure no unmatched openers remain
  if (stack.length > 0) {
    errors.push(`Unmatched opening bracket`)
  }

  // return blank string when no errors are found
  return errors[0] || ''
}
