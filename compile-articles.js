const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();

const sourceDirectory = './article-source/';
const articleDirectory = './articles/'

const frame = fs.readFileSync(path.join(__dirname, './frame.html'), 'utf8');
const [ frameTop, frameBottom ] = frame.split('<!-- CONTENT -->');

const articleList = fs.readdirSync(sourceDirectory);

const numArticles = articleList.length;
const numValidArticles = articleList.filter( fileName => fileName.match(/^[a-zA-Z0-9\-]*\.md$/) ).length;

if(numArticles !== numValidArticles) {
  throw new Error('Articles must be .md files');
}

const tableOfContents = articleList.map( (fileName, index, list) => {
  const filePath = path.join(__dirname, sourceDirectory, fileName);
  const file = fs.readFileSync(filePath, 'utf8');
  // const previous = index !== 0 ? list[index - 1] : null;
  // const next = index !== (numValidArticles - 1) ? list[index + 1] : null;

  const articleContent = md.render(file);

  const article = (frameTop + articleContent + frameBottom)
  // .replace('<!--NEXT-->', generateNavLink(next, 'NEXT'))
  // .replace('<!--PREVIOUS-->', generateNavLink(previous, 'PREVIOUS'))
  // .replace('.md', '.html');

  fs.writeFileSync(path.join(__dirname, articleDirectory, fileName.replace('.md', '.html')), article);
  console.log('Article Write Success: ', articleContent.split('</h2>')[0].slice(4), articleContent);

  return fileName.slice(0, -3).split('-').map( word => word.slice(0, 1) + word.slice(1) ).join(' ');
});

const tocListItems = tableOfContents.reduce( (acc, cur) => `${acc}
<li>${cur}`, '');

const indexHtml = fs.readFileSync(path.join(__dirname, './index.html'), 'utf8');
indexHtml.replace('<!-- ARTICLE LIST -->', tocListItems);
fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml);

function generateNavLink(navUrl, navText) {
  if(navUrl) {
    return `<li><a href="./${navUrl}">${navText}</a></li>`;
  }
  return '';
}
