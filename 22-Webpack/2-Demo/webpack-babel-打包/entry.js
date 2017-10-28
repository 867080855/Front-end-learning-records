var name = require('./src/name');

require('./src/style.css');

document.querySelector('#app').textContent = 'Hello ' + name;
// textContent 和 innerHTML 干的事情差不多