const fs = require('fs');
const { execSync } = require("child_process");
const [a, b] = ['_node_modules', 'node_modules'];

try {
  fs.renameSync(a, b);
  execSync('yarn build');
  fs.renameSync(b, a);
} catch (err) {
  console.log(err);
}
