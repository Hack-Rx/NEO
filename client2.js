function clientShare(pass)
{	 
	var coord;
	const net = require('net');

	// Connect to a server @ port 9898
	const client = net.createConnection({ port: 9898 }, () => {
	  console.log('LOG: Client connected to the server.');
	  client.write('Hello');
	});

	client.on('data', (data) => {
	  console.log(data.toString());
	  client.end();
	  inp = data.toString();
	});

	client.on('end', () => {
	  console.log('CLIENT: I disconnected from the server.');
	});
}
var i1 = clientShare("Hello")


