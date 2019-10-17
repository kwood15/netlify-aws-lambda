exports.handler = (event, context, callback) => {
  const { name, age } = JSON.parse(event.body);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ 
      msg: `Hello ${name}`,
      age
    })
  });
};
