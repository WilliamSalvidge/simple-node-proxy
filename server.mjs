import http from 'node:http';
import fs from 'node:fs/promises';
import { requestWrapper } from './server-fetch.mjs'; 

const mjs = /\.mjs$/

const server = new http.Server()

server.on('request', async (req, res) => {
  if (req.url === '/') {
    const index = await fs.readFile('./index.html', 'utf8');
    res.setHeader('content-type', 'text/html');
    res.write(index);
    return res.end();
  }
  if (req.url === '/test') {
    const output = await requestWrapper();
    res.setHeader('content-type', output.headers['content-type']);
    res.write(output.data);
    return res.end();
  }
  if (mjs.test(req.url)) {
    const main = await fs.readFile('./main.mjs', 'utf8');
    res.setHeader('content-type', 'text/javascript');
    res.write(main);
    return res.end();
  }
  res.end('Hi');
})

server.listen(9090, () => console.log('I am listening on 9090'));
