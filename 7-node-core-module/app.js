// core module
// file system 

const fs = require('fs');

// menuliskan stiring ke file (synchronous)

fs.writeFileSync('text.txt', 'Hello world secara synchronous');