import https from 'node:https';

const options = {
  hostname: 'www.rbo.org.uk',
  port: 443,
  path: '/api/_health',
  method: 'GET',
};

export const requestWrapper = async () => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log('finished');
        resolve({ headers: res.headers, data });
      });
    });

    req.end(() => console.log('request ended'));

    })
  }

