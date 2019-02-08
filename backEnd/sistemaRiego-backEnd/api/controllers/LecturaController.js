var net = require('net');

// This function create and return a net.Socket object to represent TCP client.
function getConn() {
  var option = {
    host: '172.31.99.24',
    port: 8888
  };

  // Create TCP client.
  var client = net.createConnection(option);

  //client.setTimeout(1000);
  client.setEncoding('utf8');

  // When receive server send back data.
  client.on('data', function(data) {
    console.log('Server return data : ' + data);
  });

  // When connection disconnected.
  client.on('end', function() {
    console.log('Client socket disconnect. ');
  });

  client.on('timeout', function() {
    console.log('Client connection timeout. ');
  });

  client.on('error', function(err) {
    console.error(JSON.stringify(err));
  });

  return client;
}

const ledArray = ['14', '15'];

module.exports = {
  totalLed: (req, res) => {
    const params = req.allParams();
    console.log(params);
    return res.ok({ totalLEDs: ledArray.length });
  },
  controlLed: (req, res) => {
    const params = req.allParams();
    console.log(params);
    const led = ledArray[+params.led];

    var client = getConn();
    client.end(led + ' ' + params.status);

    return res.ok({ led: led, status: params.status });
  }
};
