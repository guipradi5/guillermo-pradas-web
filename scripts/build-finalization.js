//copyfile.js
const fs = require('fs');

const routes = ['about-me', 'blog', 'games', 'web']

// destination will be created or overwritten by default.
/*
routes.forEach((route) => {
    fs.copyFile(`./dist/${route}/index.txt`, `./dist/${route}.txt`, (err) => {
        if (err) throw err;
            console.log(`${route}'s txt was copy pasted to /dist`);
        });
})
*/

fs.copyFile(`./deploy-files/sitemap.xml`, `./dist/sitemap.xml`, (err) => {
    if (err) throw err;
        console.log(`sitemap.xml was copied to /dist`);
    });
fs.copyFile(`./deploy-files/robots.txt`, `./dist/robots.txt`, (err) => {
    if (err) throw err;
        console.log(`robots.txt was copied to /dist`);
    });