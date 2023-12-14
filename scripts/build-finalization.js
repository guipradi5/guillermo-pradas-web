//copyfile.js
const fs = require('fs');

const routes = ['about-me', 'blog', 'games', 'web']

// destination will be created or overwritten by default.
routes.forEach((route) => {
fs.copyFile(`./dist/${route}/index.txt`, `./dist/${route}.txt`, (err) => {
    if (err) throw err;
        console.log(`${route}.txt was copied to destination`);
    });
})