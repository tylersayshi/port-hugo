var toml = require('toml');
var concat = require('concat-stream');
var fs = require('fs');
const shell = require('shelljs');

fs.createReadStream('../theme.toml', 'utf8').pipe(
  concat(function (data) {
    const parsed = toml.parse(data);
    const themeURL = parsed.homepage;
    const themeURLSplit = parsed.homepage.split('/');
    const themeName = themeURLSplit[themeURLSplit.length - 1];

    try {
      if (fs.existsSync(`themes/${themeName}`)) {
        console.log('Theme exists.');
      } else {
        shell.exec(`git clone ${themeURL}.git themes/${themeName}`);
      }
    } catch (e) {
      console.log('An error occurred when trying to clone:', e);
    }
  })
);
