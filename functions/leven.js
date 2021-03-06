const leven = require('leven');
const token = require('./token')

exports.getLeven = (first, second) => {
  const tokens = token.getTokens(first, second);
  const Diff = leven(tokens[0], tokens[1]);
  const plagiarized = Math.round((1 - Diff / (Math.max(tokens[0].length, tokens[1].length))) * 100);
  const result = {
    method: 'leven',
    value: plagiarized,
  }
  return result;
}