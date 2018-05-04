exports.handler = function(event, context, callback) {
  const stevenName = "Steven";

  let body;

  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return callback(null, {
      statusCode: 422,
      body: JSON.stringify({ valid: false, message: "Invalid request format" })
    });
  }

  const stevenAttempt = body.steven_attempt;

  if (stevenAttempt !== stevenName) {
    return callback(null, {
      statusCode: 404,
      body: JSON.stringify({ valid: false, message: "You did not type 'Steven'" })
    });
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ valid: true, message: "Nice job!!" })
  });
}
