const Base64 = require('js-base64').Base64;

export const encode = (val) => {
  const str =  JSON.stringify(val)
  return Base64.encode(str)
}

export const decode = (val) => {
  const str = Base64.decode(val)
  return JSON.parse(str)
}
