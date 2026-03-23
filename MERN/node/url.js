const url = require('url')

const siteUrl = 'https://docs.google.com/spreadsheets/d/1Hq2OwJOwk3Rdk9ZGL3bZ2Qp7ipPlPlP3w3m7mu1Y3wU/edit?gid=0#gid=0'

const parseUrl = url.parse(siteUrl, true)

console.log(parseUrl.host);
console.log(parseUrl.path);
console.log(parseUrl.query);
console.log(parseUrl.query.gid);

