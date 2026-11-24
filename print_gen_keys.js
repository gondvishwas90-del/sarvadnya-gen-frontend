const fs = require('fs');
const dump = JSON.parse(fs.readFileSync('gen_keys_dump.json', 'utf8'));

dump.forEach(item => {
  console.log(`KEY: ${item.key}`);
  console.log(`EN:  ${item.en}`);
  console.log(`HI:  ${item.hi}`);
  console.log('-----------------------------------');
});
