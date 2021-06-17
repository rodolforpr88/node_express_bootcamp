const EventEmitter = require('events');
const { read } = require('fs');
const http = require('http');

class Sales extends EventEmitter{
  constructor(){
    super();
  }
};

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There is a new sale!');
});

myEmitter.on('newSale', () => {
  console.log('Costumer name: Rodolfo');
});

myEmitter.on('newSale', stock => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit('newSale', 9);


/////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received!');
  console.log(req.url);
  res.end('Request Received')
});

server.on('request', (req, res) => {
  console.log('Another Received')
});

server.on('close', () => {
  console.log('server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('waiting for requests...');
});