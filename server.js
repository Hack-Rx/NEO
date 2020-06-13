
function serverShare(pass)
{
	var coord;
	const net = require('net');
	// Create a server object
	const server = net.createServer((socket) => {
	  socket.on('data', (data) => {
	    console.log(data.toString());
	    coord = data.toString();
	  });

	  socket.write(pass);
	}).on('error', (err) => {
	  console.error(err);
	});

	server.listen(9898, () => {
	  console.log('LOG: opened server on', server.address().port);
	}); 

	return coord;
}
var c1 = serverShare("Hi");
var c2 = serverShare(c1);