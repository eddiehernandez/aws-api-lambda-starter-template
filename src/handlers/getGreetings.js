// 'use strict'

module.exports.main = async (event, context, callback) => {

  const mybody = {
      message: 'hello world!',
      event: event,
      context: context
  }
    
  const response = {
    statusCode: 200,
    body: JSON.stringify(mybody),
    headers: { 'content-type': 'application/json'}
  }

  return response;

}