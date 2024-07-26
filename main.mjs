console.log('Hello from browser');

const result = await fetch('http://localhost:9090/test');
const json = await result.json();
console.log(json)

const code = document.getElementById('demo');
code.innerText = JSON.stringify(json);

// Below will give you a CORS error as the API response doesn't have Access Control Allow Origin = '*'
// const resultRBO = await fetch('https://www.rbo.org.uk/api/nav-bar');
// const jsonRBO = await resultRBO.json();
// console.log(jsonRBO);
