exports.handler = function(event, context, callback) {
  const stevenName = "Steven";

  console.log(event);

  const statusCode = 200;
  const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  if(event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: ''
    });
  }

  let body;

  console.log(event.body);
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return callback(null, {
      statusCode: 422,
      body: JSON.stringify({ valid: false, message: "Invalid request format" }),
      headers
    });
  }

  const nameIsSteven = body.steven_attempt === stevenName ? true : false;
  console.log('name is steven?', nameIsSteven)
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ valid: nameIsSteven }),
    headers
  });
}
