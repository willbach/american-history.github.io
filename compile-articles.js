const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();

const sourceDirectory = './article-source/';
const articleDirectory = './articles/'

const frame = fs.readFileSync(path.join(__dirname, './frame.html'), 'utf8');
const [ frameTop, frameBottom ] = frame.split('<!-- CONTENT -->');

fs.readdirSync(sourceDirectory).forEach(fileName => {
  const filePath = path.join(__dirname, sourceDirectory, fileName);
  const file = fs.readFileSync(filePath, 'utf8');

  const articleContent = md.render(file);

  const article = frameTop + articleContent + frameBottom;

  fs.writeFileSync(path.join(__dirname, articleDirectory, fileName.replace('.md', '.html')), article)
  console.log('Article Write Success: ', articleContent.split('</h2>')[0].slice(4))
});
