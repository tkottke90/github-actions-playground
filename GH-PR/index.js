const fs = require('fs');

fs.writeFileSync('./temp.json', JSON.stringify({ id: 100, name: 'temp_file' }, null, 2));